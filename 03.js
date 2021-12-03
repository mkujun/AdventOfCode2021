const fs = require('fs');
let input = fs.readFileSync("./inputs/03.txt", 'utf8').split('\n').slice(0, -1);
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);

const length = input[0].length;

let gamma = '';
let epsilon = '';

const readColumn = (index) => {
  let one = 0;
  let zero = 0;

  input.forEach(row => {
    let num = parseInt(row.charAt(index));

    if (num == 0) {
      zero++;
    }
    else if (num == 1) {
      one++;
    }
  })

  if (one > zero) {
    gamma = gamma + "1";
    epsilon = epsilon + "0";
  }
  else if (one < zero) {
    gamma = gamma + "0";
    epsilon = epsilon + "1";
  }
}

for (let i = 0; i<length; i++){
  readColumn(i);
}

console.log("part 1", parseInt(gamma, 2) * parseInt(epsilon, 2));
