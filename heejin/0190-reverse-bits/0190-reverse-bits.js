/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = (n) => {
    const bin = (n >>> 0).toString(2).padStart(32, '0');
  
    const reversed = bin.split('').reverse().join('');
  
    return parseInt(reversed, 2) >>> 0;
};
