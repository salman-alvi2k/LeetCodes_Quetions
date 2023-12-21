var lengthOfLastWord = function (s) {
  string_array = s.trim().split(" ");
  let count = 0;
  console.log(string_array);
  last_word = string_array[string_array.length - 1];
  console.log(last_word);

  list_last_word = last_word.split("");
  console.log(list_last_word);

  count = list_last_word.length;

  console.log(count);
  return count;
};
