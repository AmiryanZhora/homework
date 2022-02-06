//2.36
let a = prompt("a = ", 1);
let b = prompt("b = ", 1);
let c = prompt("c = ", 1);

if (
  a * a == b * b + c * c ||
  b * b == a * a + c * c ||
  c * c == b * b + a * a
) {
  console.log(true);
} else console.log(false);
