for (let num = 1; num <= 500; num++) {
  for (let num2 = 1; num2 <= 500; num2++) {
    for (let gipotenuza = 1; gipotenuza <= 500; gipotenuza++) {
      if (num * num + num2 * num2 == gipotenuza * gipotenuza) {
        console.log(num, num2, gipotenuza);
      }
    }
  }
}
