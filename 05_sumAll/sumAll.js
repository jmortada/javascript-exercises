const sumAll = function(posiNum1 , posiNum2) {
    if (!Number.isInteger(posiNum1) || !Number.isInteger(posiNum2))
        return "ERROR"
    if (posiNum1 <0 || posiNum2 <0)
        return "ERROR";

    let sum = 0;
    let max = Math.max(posiNum1,posiNum2);
    let min = Math.min(posiNum1,posiNum2);
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
