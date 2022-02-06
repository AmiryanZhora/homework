let string = "";
let num = prompt("enter number per row-column!", 5);

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i === 0 || i === num - 1) {
      string += "*";
    } else {
      if (j === 0 || j === num - 1) {
        string += "*";
      } else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);
