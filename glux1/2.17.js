const cardNum = prompt("Номер счета (целое) - ", 0);
const balance = +prompt("Баланс с начала месяца - ", 0);
const client_expenses = +prompt(
  "Сумма всех расходов данного клиента в течение месяца - ",
  0
);
const client_income = +prompt(
  "Сумма всех приходов на счет данного клиента в течение месяца - ",
  0
);
const amount = prompt("Допустимый размер кредита - ", 0);

let final_balance = balance + client_expenses - client_income;
if (final_balance > amount) {
  const cardNum = prompt("Номер счета (целое) - ", 0);
  alert("Предел кредита превышен");
}
console.log(final_balance);
