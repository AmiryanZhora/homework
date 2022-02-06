//2.46
for (let i = 1; i <= 5; i++) {
  console.warn(i / 100);
  console.log("quantity year");
  for (let j = 1; j <= 5; j++) {
    let quantity = 100 * Math.pow(1 + i / 100, j);
    console.log("   " + quantity + "    " + j);
  }
}
