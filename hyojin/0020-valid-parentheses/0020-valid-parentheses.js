/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let char = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === ')'){
            if(char.pop() !== '(') return false;
        }else if(s[i] === '}') {
            if(char.pop() !== '{') return false;
        }else if(s[i] === ']'){
            if(char.pop() !== '[') return false;
        }else{
            char.push(s[i]);
        }
    }
    return char.length === 0;

};