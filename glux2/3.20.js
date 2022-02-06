//3.20
const multiple = (n1, n2) => {
  switch (n1 % n2) {
    case 0:
      console.log(true);
      break;
    default:
      console.log(false);
  }
};
multiple(20, 2);
