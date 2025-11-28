/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const replaced = s.replace(/\(\)|\[]|{}/g, "");
    if (replaced === s) return s.length === 0;
    return isValid(replaced);
};