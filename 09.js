const fs = require('fs');
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);
let input = fs.readFileSync("./inputs/09.txt", 'utf8').split('\n').slice(0, -1);

let result = 0;

for(let i = 0; i < input.length; i++) {
  // first row
  if (i == 0) {
    let row1 = input[0].split('').map(Number);
    let row2 = input[1].split('').map(Number);

    for (let j = 0; j < row1.length; j++) {
      // first element
      if (j == 0) {
        if (row1[j] < row1[j + 1] && row1[j] < row2[j]) {
          result = result + 1 + row1[j];
        }
      }
      // last element
      else if (j == row1.length - 1) {
        if (row1[j] < row1[j - 1] && row1[j] < row2[j]) {
          result = result + 1 + row1[j];
        }
      }
      // middle element
      else {
        if (row1[j] < row1[j - 1] && row1[j] < row1[j + 1] && row1[j] < row2[j]) {
          result = result + 1 + row1[j];
        }
      }
    }
  }

  // last row
  else if (i == input.length - 1) {
    let row1 = input[input.length - 2].split('').map(Number);
    let row2 = input[input.length - 1].split('').map(Number);
    
    for(let j = 0; j < row2.length; j++) {
      if (j == 0) {
        if (row2[j] < row2[j + 1] && row2[j] < row1[j]) {
          result = result + 1 + row2[j];
        }
      }
      else if (j == row2.length - 1) {
        if (row2[j] < row2[j - 1] && row2[j] < row1[j]) {
          result = result + 1 + row2[j];
        }
      }
      else {
        if (row2[j] < row2[j - 1] && row2[j] < row2[j + 1] &&
          row2[j] < row1[j]
        ) {
          result = result + 1 + row2[j];
        }
      }
    }
  }
  
  // middle element
  else{
    let row1 = input[i - 1].split('').map(Number);
    let row2 = input[i].split('').map(Number);
    let row3 = input[i + 1].split('').map(Number);

    for(let j = 0; j < row2.length; j++) {
      if (j == 0) {
        if (row2[j] < row2[j + 1] &&
          row2[j] < row1[j] &&
          row2[j] < row3[j]
        ){
          result = result + 1 + row2[j];
        }
      }
      else if (j == row2.length - 1) {
        if (row2[j] < row2[j - 1] &&
          row2[j] < row1[j] &&
          row2[j] < row3[j]
        ){
          result = result + 1 + row2[j];
        }
      }
      else {
        if (row2[j] < row2[j - 1] && row2[j] < row2[j + 1] &&
          row2[j] < row1[j] &&
          row2[j] < row3[j]
        ) {
          result = result + 1 + row2[j];
        }
      }
    }

  }
}

console.log(result);
