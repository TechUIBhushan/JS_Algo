// count digit number ex: 261 ==> 3

function countDigit(n) {
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

console.log(countDigit(290));
console.log(countDigit(0));
console.log(countDigit(32343534353));
