// 3.33
let result = prompt("enter number = ", 100);
const qualitypoints = (number) => {
  if (number >= 90 && number <= 100) {
    return 4;
  } else if (number >= 80 && number < 90) {
    return 3;
  } else if (number >= 70 && number < 80) {
    return 2;
  } else if (number >= 60 && number < 70) {
    return 1;
  } else if (number < 60) {
    return 0;
  }
};
const finalResult = qualitypoints(result);
console.log(finalResult);
