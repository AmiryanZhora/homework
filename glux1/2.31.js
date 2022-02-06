let num = "";
for (let i = 0; i < 8; i++) {
  for (let a = 0; a < 17; a++) {
    num += a % 2 == i % 2 ? " " : "*";
  }
  num += "\n";
}
console.log(num);
