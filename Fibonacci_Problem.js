// Calculate the n-th Fibonacci number.

// Function Signature

// function fibonacci(n);

// Example 1:

// Input: n = 5
// Output: 5
// Explanation: The 5th Fibonacci number is 5 (0, 1, 1, 2, 3, 5).

// Example 2:

// Input: n = 10
// Output: 55
// Explanation: The 10th Fibonacci number is 55.



function fibonacci(n) {
    let result = 0;
    let arr = [0, 1, 1, 2, 3, 5];
  
    if (arr.length >= n) {
      return arr[n];
    }
  
    while (arr.length <= n) {
      result = arr[arr.length - 1] + arr[arr.length - 2];
      arr.push(result);
  
      if (arr.length -1  === n) {
        return result
      }
    }
  }
  
  console.log(fibonacci(12))
  