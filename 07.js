const fs = require('fs');
let input = fs.readFileSync("./inputs/07.txt", 'utf8').split(',').map(Number);
//let input = [16,1,2,0,4,2,7,1,2,14];

let smallest = 100000000;

input.forEach(number => {
  let outcome = 0;
  input.forEach(e => {
    let diff = Math.abs(e - number);

    outcome = outcome + diff;
  })

  if (outcome < smallest) {
    smallest = outcome;
  }
})

console.log("smallest", smallest);
