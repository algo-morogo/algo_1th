function isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false

    const map = new Map()
    for(const char of s) {
        map.set(char, (map.get(char) ?? 0 ) + 1)
    }

    for (const char of t) {
        if(map.get(char)) {
            map.set(char,map.get(char) -1)
        }
    }

    return [...map.values()].every((num) => num === 0)
};