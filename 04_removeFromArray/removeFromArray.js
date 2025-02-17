const removeFromArray = function(arr , ...rmval) {
    let resArr = [];
    for (const elem of arr){
        if (!rmval.includes(elem) ){
            resArr.push(elem);
        }
    }
    return resArr;
    
}
// Do not edit below this line
module.exports = removeFromArray;
