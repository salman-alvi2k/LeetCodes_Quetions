// Function Signature

// function addDigits(num);

// Example 1:

// Input: num = 38
// Output: 2
// Explanation: The process is 3+8 = 11, 1+1 = 2. Since 2 has only one digit, 2 is returned.

// Example 2:

// Input: num = 999
// Output: 9
// Explanation: The process is 9+9+9 = 27, 2+7 = 9. Since 9 has only one digit, 9 is returned.

function addDigits(num) {
  let number = num
    .toString()
    .split("")
    .reduce((a, b) => a + Number(b), 0);
  if (number > 10) {
    let result = number
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    return result;
  }
  return number;
}

console.log(addDigits(38));
