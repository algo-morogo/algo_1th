/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = function(n) {
    const transfer = n.toString(2)
                        .padStart(32, '0')
                        .split("")
                        .reverse()
                        .join("");
    return parseInt(transfer, 2);
};