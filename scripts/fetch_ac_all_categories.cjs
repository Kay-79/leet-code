// Fetch all problems across categories from LeetCode and count AC status
// Usage (PowerShell):
//   $env:LEETCODE_SESSION = '<your LEETCODE_SESSION>'
//   $env:LEETCODE_CSRF = '<your csrftoken>'   # optional
//   bun run scripts/fetch_ac_all_categories.cjs

const fs = require("fs");
const path = require("path");

const session = process.env.LEETCODE_SESSION;
const csrf = process.env.LEETCODE_CSRF || "";
if (!session) {
    console.error("Please set LEETCODE_SESSION environment variable.");
    process.exit(2);
}

const OUT = path.join(__dirname, "..", "scripts", "leetcode_all_categories_ac.json");

async function fetchAll() {
    const url = "https://leetcode.com/api/problems/all/";
    const headers = {
        Cookie: `LEETCODE_SESSION=${session}`,
        Referer: "https://leetcode.com",
        Origin: "https://leetcode.com",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    };
    if (csrf) {
        headers["x-csrftoken"] = csrf;
        headers["Cookie"] += `; csrftoken=${csrf}`;
    }
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`HTTP ${res.status} fetching all problems`);
    return res.json();
}

(async () => {
    try {
        console.log("Fetching /api/problems/all/ ...");
        const json = await fetchAll();
        const pairs = json.stat_status_pairs || [];
        const solved = pairs.filter((p) => (p.status || "").toLowerCase() === "ac");
        console.log("Total problems in response:", pairs.length);
        console.log("Problems with status AC:", solved.length);
        fs.writeFileSync(
            OUT,
            JSON.stringify(
                {
                    total: pairs.length,
                    ac: solved.length,
                    entries: solved.map((p) => ({
                        slug: p.stat.question__title_slug,
                        title: p.stat.question__title,
                        frontend_id: p.stat.question_id,
                    })),
                },
                null,
                2
            ),
            "utf8"
        );
        console.log("Saved", OUT);
    } catch (err) {
        console.error("Error:", err.message || err);
        process.exit(1);
    }
})();
