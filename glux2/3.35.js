// 3.35

let a = +prompt("a = ");
let b = +prompt("b = ");
let result = +prompt("how much is" + a + "*" + b) + "?";
if (result != -1 && result != a * b) {
  alert("try again!");
} else {
  alert("correct!");
}
