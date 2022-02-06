// 3.27
const cel = (n) => {
  return Math.round((5 / 9) * (n - 32));
};
const far = (n) => {
  return Math.round((9 / 5) * (n + 32));
};
for (let i = 0; i <= 100; i++) {
  console.log(i + " = " + far(i) + "\n");
}
for (let j = 32; j <= 212; j++) {
  console.log(j + " = " + cel(j) + "\n");
}
console.log(cel(43));
console.log(far(43));
