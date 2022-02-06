const maxSale = () => {
  let i = 0;
  let number = 100;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > number) {
      number = arguments[i];
    }
  }
  return number;
};

const largest = maxSale(45, 123, 0, 433, 987, 123, 43, 344, 762, 100);
console.log(largest);
