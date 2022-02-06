let n, k;
for (n = 1, k = 1; n <= 15; n++)
  if (n % 2 == 1) {
    k = k * n;
    console.log(n, k);
  }
console.log("произведение нечетных чисел= " + k);
