// 3.21
let n = +prompt("n = ");
const even = (n) => {
  while (n > 0) {
    if (n % 2) {
      console.log(true);
    } else {
      console.log(false);
    }
    n = +prompt("Enter a number");
  }
};
even(n);
