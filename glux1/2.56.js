let sum1 = 0,
  sum2 = 0,
  sum3 = 0,
  sum4 = 0,
  sum5 = 0;
let id = +prompt("enter your ID", 1);
let quantity = +prompt("How many did you sell!", 1);

if (id < 0 || id > 5) {
  console.log(false);
} else {
  switch (id) {
    case 1:
      sum1 = sum1 + 3.43 * quantity;
      break;
    case 2:
      sum2 = sum2 + 66.2 * quantity;
      break;
    case 3:
      sum3 = sum3 + 43.3 * quantity;
      break;
    case 4:
      sum4 = sum4 + 234.43 * quantity;
      break;
    case 5:
      sum5 = sum5 + 100 * quantity;
      break;
  }
}
console.log(sum1, sum2, sum3, sum4, sum5);
