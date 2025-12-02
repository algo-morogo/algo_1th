/**
 * @param {number} n
 * @return {number}
 */
const reverseBits = function(n) {
    return parseInt(
        n.toString(2)           // 2진수 문자열로
         .padStart(32, '0')     // 32비트 맞추기
         .split('')             // 배열로
         .reverse()             // 뒤집기
         .join(''),             // 다시 문자열로
        2                       // 2진수를 10진수로
    );
};
