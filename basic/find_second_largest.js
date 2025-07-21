function findSecondLargest(arr) {
  let f_largest = -Infinity;
  let s_largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > f_largest) {
      s_largest = f_largest;
      f_largest = arr[i];
    } else if (arr[i] > s_largest) {
      s_largest = arr[i];
    }
  }
  return s_largest;
}

console.log(findSecondLargest([2, 1, 8, 4, 6, 9, 17]));
