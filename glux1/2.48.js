let result = "";
let x = prompt("x = ", 10);
for (let i = 1; i <= 5; ) {
  if (x >= 1 || x <= 30) {
    for (let j = 1; j <= x; j++) {
      result += "*";
    }
  } else {
    console.log("falseee");
    continue;
  }
  i++;
}
