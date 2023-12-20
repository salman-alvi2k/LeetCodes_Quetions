var maxProfit = function (prices) {
  let maxProf = 0;
  let i = 0;
  let j = 1;

  while (j < prices.length) {
    if (prices[i] < prices[j]) {
      if (maxProf < prices[j] - prices[i]) {
        maxProf = prices[j] - prices[i];
      }
      j++;
    } else {
      i = j;
      j++;
    }
  }

  return maxProf;
};
