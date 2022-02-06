let n = 5;
let res = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    res += " ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    res += "*";
  }
  res += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    res += " ";
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    res += "*";
  }
  res += "\n";
}
console.log(res);
