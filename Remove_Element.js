var removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];
    } else {
      count++;
    }
  }
  nums.sort();
  nums.length = count;
  console.log(count);
};
