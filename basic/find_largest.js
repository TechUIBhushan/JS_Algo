function findLargest(arr) {
  let largestVal = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestVal) {
      largestVal = arr[i];
    }
  }
  return largestVal;
}

console.log(findLargest([1, 2, 3, 6, 41, 19, 10]));
