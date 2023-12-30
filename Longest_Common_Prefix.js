var longestCommonPrefix = function (strs) {
  base = strs[0];

  for (let i = 0; i < base.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (base[i] != strs[j][i]) {
        return base.slice(0, i);
      }
    }
  }
  return base;
};
