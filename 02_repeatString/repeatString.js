const repeatString = function(string, repeatnum) {
    if (repeatnum < 0)
        return "ERROR"
    let res = "";
    for (let i = 1 ; i <= repeatnum ; i++){
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
