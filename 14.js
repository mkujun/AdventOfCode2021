const fs = require('fs');
let input = fs.readFileSync("./inputs/14.txt", 'utf8').split('\n').slice(0, -1);
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);

let template = input[0].split('');
const rules = new Map();

getInsertionRules = () => {
  for (let i = 2; i < input.length; i++) {
    let rule = input[i].split(" -> ");

    rules.set(rule[0], rule[1]);
  }
}

printInsertionRules = () => {
  for (const [key, value] of rules) {
    console.log(key + ' = ' + value);
  }
}

getInsertionRules();

// main loop
for (let i = 0; i < 10; i++) {
  let stepTemplate = [...template];
  let counter = 0;

  for (let j = 0; j < template.length - 1; j++) {
    let pattern = stepTemplate[j] + stepTemplate[j + 1];

    if (rules.has(pattern)) {
      template.splice(j + 1 + counter, 0, rules.get(pattern));
      counter++;
    }
  }
}

partOne = () => {
  let set = new Set(template);
  let dict = new Map();
  let max = 0;
  let min = 10000;

  for (let item of set) {
    dict.set(item, 0);
  }

  template.forEach(e => {
    dict.set(e, dict.get(e) + 1);
  })

  // Map output
  for (const [key, value] of dict) {
    console.log(key + ' = ' + value);

    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
  }

  console.log("part 1", max - min);
}

partOne();
