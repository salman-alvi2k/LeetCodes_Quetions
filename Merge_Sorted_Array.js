var merge = function (nums1, m, nums2, n) {
  let j = 0;
  let i = m;

  while (i != m + n) {
    nums1[i] = nums2[j];
    j++;
    i++;
  }
  nums1.sort((a, b) => a - b);
};

