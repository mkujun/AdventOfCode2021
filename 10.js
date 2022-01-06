const fs = require('fs');
let input = fs.readFileSync("./inputs/10.txt", 'utf8').split('\n').slice(0, -1);
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);

let round = 0;
let square = 0;
let curly = 0;
let angle = 0;

let chunk = [];

const returnFoundValue = (value) => {
  if (value == ')') {
    round = round + 3;
  }
  if (value == ']') {
    square = square + 57;
  }
  if (value == '}') {
    curly = curly + 1197;
  }
  if (value == '>') {
    angle = angle + 25137;
  }
}

const isCorrupted = (line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] == '[' || line[i] == '{' || line[i] == '<' || line[i] == '(') {
      chunk.push(line[i]);
    }
    else {
      let lastL = chunk.pop();

      // '['
      if (lastL == '[' && line[i] == ']') {
        continue;
      }
      if (lastL == '[' && line[i] != ']') {
        returnFoundValue(line[i]);
        //console.log("expected ] but found ", line[i]);
        break;
      }

      // '('
      if (lastL == '(' && line[i] == ')') {
        continue;
      }
      if (lastL == '(' && line[i] != ')') {
        returnFoundValue(line[i]);
        //console.log("expected ) but found ", line[i]);
        break;
      }

      // '<'
      if (lastL == '<' && line[i] == '>') {
        continue;
      }
      if (lastL == '<' && line[i] != '>') {
        returnFoundValue(line[i]);
        //console.log("expected > but found ", line[i]);
        break;
      }

      // '{'
      if (lastL == '{' && line[i] == '}') {
        continue;
      }
      if (lastL == '{' && line[i] != '}') {
        returnFoundValue(line[i]);
        //console.log("expected } but found ", line[i]);
        break;
      }
    }
  }
}

input.forEach(line => {
  let splitLine = line.split('');
  isCorrupted(splitLine);
})

console.log("result", angle + round + curly + square);
