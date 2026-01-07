const fs = require("fs");
const path = require("path");

// Mapping from file extension keys to human-friendly language names
const LANG_NAMES = {
    js: "JavaScript",
    ts: "TypeScript",
    rs: "Rust",
    py: "Python",
    java: "Java",
    cpp: "C++",
    c: "C",
    sh: "Shell",
    sql: "SQL",
    noext: "No Extension",
};

function readProblemsDir() {
    const problemsDir = path.join(__dirname, "..", "Problems");
    if (!fs.existsSync(problemsDir)) return { files: [], problemsDir };
    const files = fs.readdirSync(problemsDir).filter((f) => fs.statSync(path.join(problemsDir, f)).isFile());
    return { files, problemsDir };
}

function summarize(files) {
    // Exclude markdown files from the statistics
    const filtered = files.filter((file) => path.extname(file).toLowerCase() !== ".md");
    const idSet = new Set();
    const langCounts = {};
    filtered.forEach((file) => {
        const m = file.match(/^(\d+)/);
        if (m) idSet.add(m[1]);
        const ext = path.extname(file).slice(1) || "noext";
        langCounts[ext] = (langCounts[ext] || 0) + 1;
    });
    return {
        solved: idSet.size,
        totalFiles: filtered.length,
        langCounts,
        ids: Array.from(idSet).sort((a, b) => Number(a) - Number(b)),
        idSet,
    };
}

function buildStatsMd(summary) {
    const now = new Date().toISOString().split("T")[0];
    const langs = Object.entries(summary.langCounts)
        .sort((a, b) => b[1] - a[1])
        .map(([k, v]) => {
            const name = LANG_NAMES[k] || (k === "noext" ? "No Extension" : k.toUpperCase());
            return `  - ${name}: ${v}`;
        })
        .join("\n");
    return `<!-- STATS:START -->\n**Updated**: ${now}\n\n- **Solved problems (unique IDs)**: ${summary.solved}\n- **Files counted**: ${summary.totalFiles}\n- **Languages**:\n${langs}\n\n<!-- STATS:END -->\n`;
}

function updateReadme(statsMd) {
    const readmePath = path.join(__dirname, "..", "README.md");
    let content = "";
    if (fs.existsSync(readmePath)) {
        content = fs.readFileSync(readmePath, "utf8");
    }

    const start = "<!-- STATS:START -->";
    const end = "<!-- STATS:END -->";

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
    }

    const re = new RegExp(escapeRegex(start) + "[\\s\\S]*?" + escapeRegex(end), "gm");

    if (re.test(content)) {
        // Replace all occurrences between the markers
        const newContent = content.replace(re, statsMd);
        fs.writeFileSync(readmePath, newContent, "utf8");
        return true;
    } else {
        // Append a heading and the stats (which already include the markers)
        const append = `\n## 📊 Monthly Stats\n\n${statsMd}\n`;
        fs.writeFileSync(readmePath, content + append, "utf8");
        return true;
    }
}

function main() {
    const { files } = readProblemsDir();
    const summary = summarize(files);
    const statsMd = buildStatsMd(summary);
    console.log("\n===== GENERATED STATS MD =====\n");
    console.log(statsMd);
    const ok = updateReadme(statsMd);
    if (!ok) {
        console.error("Failed to update README");
        process.exit(2);
    }
    console.log("Stats updated in README");
}

main();
