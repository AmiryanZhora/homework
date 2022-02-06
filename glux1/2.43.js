// 2.43;
let quantitiy = +prompt("quantitiy =");
let firstVal = +prompt("value =");

const minFinder = () => {
  for (let i = 2; i <= quantitiy; i++) {
    let nextVal = +prompt("next value =");
    if (nextVal < firstVal) {
      firstVal = nextVal;
    }
  }
};
minFinder();
console.log(firstVal);
