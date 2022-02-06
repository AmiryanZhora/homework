//  3.25
let n = +prompt("Enter integer between 1-32767");
let k = 999;
const funcA = (a, b) => {
  return a / b;
};
const funcB = (a, b) => {
  return a % b;
};
while (n > 1) {
  if (n > k) {
    n = funcB(n, k);
    console.log(funcA(n, k));
  } else {
    k = funcA(k, 10);
  }
}
