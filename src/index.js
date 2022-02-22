module.exports = function reverse(n) {
    let newnumber = String(n);
    if (n < 0) {
        newnumber = String(Math.abs(n));
    }
    if (n % 10 == 0) {
        newnumber = newnumber.slice(0, -1);
    }
    return Number(newnumber.split("").reverse().join(""));
}