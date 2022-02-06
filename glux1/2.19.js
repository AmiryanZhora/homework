let hours = prompt("Введите число рабочих часов - ", 0);
let salary_perhour = prompt("Введите почасовую ставку работника - ", 0.0);
let salary = 0;

switch (true) {
  case hours > 40:
    salary = hours * salary_perhour + salary_perhour / 2;
    break;
  case hours < 40:
    salary = hours * salary_perhour;
}
console.log(salary);
