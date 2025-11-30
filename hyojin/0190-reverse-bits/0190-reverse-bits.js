/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    const binary = n.toString(2).split('').reverse();

    while(binary.length < 32) {
        binary.push('0')
    }
    
    return parseInt(binary.join(''), 2)
};