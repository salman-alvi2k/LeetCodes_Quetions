var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
