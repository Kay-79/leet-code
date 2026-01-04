var solution = function (isBadVersion: any) {
    return function (n: number): number {
        let l = 1;
        let r = n;
        while (l < r) {
            const m = Math.floor(((r + l) / 2));
            if (isBadVersion(m)) r = m;
            else l = m + 1;
            if (r === l) return r;
        }
        return l;
    };
};