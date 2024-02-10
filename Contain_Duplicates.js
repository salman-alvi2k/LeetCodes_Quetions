var containsDuplicate = function (nums) {
  let set = new Set();
  for (let c of nums) {
    set.add(c);
  }
  return !(set.size === nums.length);
};
