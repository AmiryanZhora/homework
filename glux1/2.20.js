let counter = 0;
let largest = 0;
let numbers = +prompt("nums = ");

for (let i = 0; i <= 10; i++) {
  numbers = +prompt("nums = ");
  console.log(numbers);
  if (largest < numbers) {
    largest = numbers;
  } else i++;
}
console.log("result =", largest);
