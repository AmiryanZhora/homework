//3.31
let res = 0,
  count = 0;
const reverseNum = (number) => {
  for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    count = i % 10;
    res = res * 10 + count;
  }
  return res;
};
let num = prompt("num = ", 10);
console.log(reverseNum(num));
