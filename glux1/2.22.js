let max1 = 0,
  max2 = 0;
let count = 1;

while (count <= 5) {
  let number = prompt("enter number!", 1);
  console.log(number);

  if (number > max1) {
    max2 = max1;
    max1 = number;
  } else {
    if (number > max2) max2 = number;
  }
  if (max1 == max2) {
    break;
    alert("Not allowed!");
  }

  count++;
}
console.log(max1, max2);
