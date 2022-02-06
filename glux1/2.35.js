let a = prompt("a = ", 1);
let b = prompt("b = ", 1);
let c = prompt("c = ", 1);

if (a + b > c || a + c > b || (b + c > a && a != 0 && b != 0 && c != c)) {
  alert("представляют стороны треуголника!");
} else alert("НЕ представляют стороны треуголника");
