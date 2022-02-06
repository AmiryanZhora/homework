const palindromeFunc = (str) => {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "Not palindrome";
    }
  }
  return "Its palindrome";
};

const string = prompt("Enter string: ");
const value = palindromeFunc(string);

console.log(value);
