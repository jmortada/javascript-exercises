const reverseString = function(string) {
    let res = "";
    let charsOfString = string.split("");

    for(let i = -1 ; i >= -1 * (charsOfString.length) ; i--){
        res += charsOfString.at(i);
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
