function minimizedStringLength(s: string): number {
    let result = 0;
    let caches: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (!caches.includes(s[i])) {
            result++;
            caches.push(s[i]);
        }
    }
    return result;
}
const s: string = "baadccab";

console.log(minimizedStringLength(s));
