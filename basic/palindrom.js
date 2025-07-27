function isPalindrom(n) {
  if (n < 0) return false;
  let num = n;
  let = rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  //   if (rev === num) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return rev === num;
}

console.log(isPalindrom(121));
console.log(isPalindrom(-123));
console.log(isPalindrom(324355));
