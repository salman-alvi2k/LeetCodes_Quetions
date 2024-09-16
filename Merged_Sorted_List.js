// Write a function mergeSortedLists that takes two sorted linked lists and merges them into one sorted list.

// Function Signature

// function mergeSortedLists(l1, l2);

// Example 1:

// Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]
// Explanation: The merged list is sorted.

// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Explanation: Merging two empty lists results in an empty list.

// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]
// Explanation: Merging an empty list with a non-empty list results in the non-empty list.

function mergeSortedLists(l1, l2) {
  let sortedList = [...l1, ...l2].sort();
  console.log(sortedList);
}

const l1 = [1, 2, 4];
const l2 = [1, 3, 4];
mergeSortedLists(l1, l2);
