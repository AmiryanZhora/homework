// 3.26
let sec = +prompt("sec= ");
let min = +prompt("min= ");
let hours = +prompt("hours= ");
const Timer = (hours, min, sec) => {
  return 3600 * hours + 60 * min + sec;
};
let secResult = Timer(hours, min, sec);
hours = +prompt("hours= ");
min = +prompt("minutes= ");
sec = +prompt("seconds= ");

let firstResult = Timer(hours, min, sec);
console.log(secResult - firstResult);
console.log(firstResult, secResult);
