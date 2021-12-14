const fs = require('fs');
let input = fs.readFileSync("./inputs/06.txt", 'utf8').split(',');
//let input = [3,4,3,1,2];

for(let i = 1; i <=80; i++) {
  input.forEach((e, index) => {

    if (input[index] == 0) {
      input.push(8);
      input[index] = 6;
    }
    else {
      input[index] = input[index] - 1;
    }
  })
}

console.log(input.length);
