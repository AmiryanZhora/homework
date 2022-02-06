// a)
let number = prompt("enter number = ", 1);

const factorial = (number) => {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

const result = factorial(number);
console.log(result);
