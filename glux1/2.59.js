// 2.59
let a, b, c;
let res = "";

for (a = 1; a <= 19; a += 2) {
  for (b = (19 - a) / 2; b > 0; b--) {
    res += " ";
  }
  for (c = 1; c <= a; c++) {
    res += "*";
  }
  res += "\n";
}
for (a = 19; a >= 0; a -= 2) {
  for (b = (19 - a) / 2; b > 0; b--) {
    res += " ";
  }
  for (c = 1; c <= a; c++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);
