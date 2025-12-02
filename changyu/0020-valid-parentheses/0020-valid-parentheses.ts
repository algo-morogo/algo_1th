function isValid(s: string): boolean {
    const stack = [];
    const match = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            if (stack.pop() !== match[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};