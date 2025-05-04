const palindromes = function (str) {
    let cleanStr = str
    .toLowerCase()
    .split("")
    .filter((char) => {
        let code = char.charCodeAt(0);
        return (code >=48 && code <= 57) || (code >= 97 && code <= 122);
    })
    .join("");
    let reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
}

// Do not edit below this line
module.exports = palindromes;
