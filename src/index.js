module.exports = function reverse (n) {
   let arr = Math.abs(n).toString().split('');
   return Number(arr.reverse().join(''));
}
