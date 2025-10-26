/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;   
    let right = s.length - 1;
    
    
    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) {
            left++;
        }
        
        while (left < right && !isAlphaNum(s[right])) {
            right--;
        }
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};


function isAlphaNum(char) {
    const code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) ||   
           (code >= 65 && code <= 90) ||     
           (code >= 97 && code <= 122);    
}