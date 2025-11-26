/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    let array = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            array.push(s[i]);
        } else {
            if (array.length === 0) return false;
            if (obj[array.pop()] !== s[i]) return false;
        }
    }

    return array.length === 0;
};