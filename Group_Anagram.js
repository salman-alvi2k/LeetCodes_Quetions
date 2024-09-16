// Write a function groupAnagrams that takes an array of strings and groups the anagrams together.

// Function Signature

// function groupAnagrams(strs);

// Example 1:

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// Explanation: All strings that are anagrams are grouped together.

// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Explanation: An empty string is considered an anagram of itself.

// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
// Explanation: A single character string is considered an anagram of itself.

function groupAnagrams(strs) {
  let group = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");

    if (group[sorted]) {
      group[sorted].push(strs[i]);
    } else {
      group[sorted] = [strs[i]];
    }
  }

  console.log(Object.values(group));
}

strs = ["eat", "tea", "tan", "nat"];
groupAnagrams(strs);
