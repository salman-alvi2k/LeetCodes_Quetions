var majorityElement = function (nums) {
  hashMaps = {};

  for (i in nums) {
    if (nums[i] in hashMaps) {
      hashMaps[nums[i]] += 1;
    } else {
      hashMaps[nums[i]] = 1;
    }
  }

  let mid = nums.length / 2;
  for (i in nums) {
    if (hashMaps[nums[i]] > mid) {
      return nums[i];
    }
  }
};
