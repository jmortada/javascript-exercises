const fibonacci = function(pos) {
    pos = Number(pos);

    if (pos < 0) return 'OOPS';
    if (pos === 0) return 0;
    let fib = [1,1];
    for (let i = 2; i < pos; i++) {
        fib.push(fib[i-1] + fib[i-2]);

    }
    return fib[pos -1];
};

// Do not edit below this line
module.exports = fibonacci;
