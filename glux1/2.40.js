//2.40
let result = 0;
let quantity = +prompt("qunatity = ", 1);
for (let i = 0; i < quantity; i++) {
  let nums = +prompt("numbers = ", 1);
  result += nums;
}
alert(result);
