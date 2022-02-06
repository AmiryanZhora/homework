//3.30
const primeNum = (n) => {
  let i = 2;
  if (n < 2) return false;
  while (i < n) {
    if (n % i == 0) return false;
    i++;
  }
  return true;
};
let k = 0;
while (k < 1000) {
  if (primeNum(k)) {
    console.log(k, "(b)");
  }
  k++;
}
console.log(primeNum(99), "(a)");

const primeNum2 = (n) => {
  let i = 2;
  if (n < 2) return false;
  while (i < Math.sqrt(n)) {
    if (n % i == 0) return false;
    i++;
  }
  return true;
};
for (let i = 0; i < 100; i++) {
  if (primeNum2(i)) {
    console.log(i);
  }
}
console.log(primeNum2(3), "(c)");
