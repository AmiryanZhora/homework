let n = prompt("enter number!", 10);
let result = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);

let k = prompt("enter number!", 10);
let result2 = "";
for (let i = 0; i < k; i++) {
  for (let j = 0; j < k - i; j++) {
    result2 += "*";
  }
  result2 += "\n";
}
console.log(result2);

let b = prompt("enter number!", 10);
let result3 = "";
for (let i = 1; i <= b; i++) {
  for (let j = 1; j <= i; j++) {
    result3 += " ";
  }
  for (let j = i; j <= b; j++) {
    result3 += "*";
  }
  result3 += "\n";
}
console.log(result3);

let r = prompt("enter number!", 10);
let result4 = "";
for (let i = 1; i <= r; i++) {
  for (let j = 0; j < n - i; j++) {
    result4 += " ";
  }
  for (let j = 0; j < i; j++) {
    result4 += "*";
  }
  result4 += "\n";
}
console.log(result4);
