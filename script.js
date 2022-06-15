"use strict";

const movements = [200, 450, -400, 700, 1230, -750, 250, -500];
const str = ["Yasir", "Mujeeb", "Awais", "Jibran"];
console.log(movements.sort());
console.log(str.sort());

movements.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
});

console.log(movements);

movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);
