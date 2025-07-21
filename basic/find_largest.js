function findLargest(arr) {
  let largestVal = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestVal) {
      largestVal = arr[i];
    }
  }
  return largestVal;
}

console.log(findLargest([1, 2, 3, 6, 4, 19, 10]));
