//3.37
let wrongA = 0;
let correctA = 0;

const calcFunc = () => {
  let a = +prompt("a = ", 1);
  let b = +prompt("b = ", 1);
  for (let i = 0; i < 5; i++) {
    let result = prompt("how much is " + a + "*" + b + "?");
    if (result != a * b) {
      wrongA++;
    } else {
      correctA++;
    }
    console.log("result: ", result);
  }
  return correctA, wrongA;
};
calcFunc();

if (correctA / (correctA + wrongA) < 0.75) {
  alert("bro ure broke!");
} else {
  alert("not bad!");
}
console.log(correctA, wrongA);
