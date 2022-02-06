// 2.59
let a, b, c;

for (a = 1; a <= 19; a += 2) {
  for (b = (19 - a) / 2; b > 0; b--) {
    document.write("#");
  }
  for (c = 1; c <= a; c++) {
    document.write("*");
  }
  document.write("<br/>");
}
for (a = 19; a >= 0; a -= 2) {
  for (b = (19 - a) / 2; b > 0; b--) {
    document.write("#");
  }
  for (c = 1; c <= a; c++) {
    document.write("*");
  }
  document.write("<br/>");
}
