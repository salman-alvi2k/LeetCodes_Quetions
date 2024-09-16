// Write a function mergeIntervals that takes an array of intervals and merges all overlapping intervals.

// Function Signature

// function mergeIntervals(intervals);

// Example 1:

// Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals [1, 3] and [2, 6] overlap, merge them into [1, 6].

// Example 2:

// Input: intervals = [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals [1, 4] and [4, 5] are considered overlapping.

function mergeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  result = [];
  let [currentStart, currentEnd] = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];

    if (currentEnd >= nextStart) {
      currentEnd = Math.max(currentEnd, nextEnd);
    } else {
      result.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = intervals[i];
    }
  }
  result.push([currentStart, currentEnd]);

  console.log(result);
}

intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
mergeIntervals(intervals);
