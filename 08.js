const fs = require('fs');
let input = fs.readFileSync("./inputs/08.txt", 'utf8').split('\n').slice(0, -1);
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);

let counter = 0;

input.forEach(row => {
  let output = row.split(" | ")[1];
  
  let segments = output.split(" ");

  segments.forEach(segment => {
    if (segment.length === 2) {
      counter++;
    }
    else if (segment.length === 3) {
      counter++;
    }
    else if (segment.length === 4) {
      counter++;
    }
    else if (segment.length === 7) {
      counter++;
    }
  })
})

console.log(counter);
