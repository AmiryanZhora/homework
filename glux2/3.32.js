// 3.32
const GCD = (a, b) => {
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
    console.log(a, b);
  }
};
console.log(GCD(9999, 27));
