const fs = require('fs');
let input = fs.readFileSync("./inputs/05.txt", 'utf8').split('\n').slice(0, -1);
//let input = fs.readFileSync("input.txt", 'utf8').split('\n').slice(0, -1);

const parseinputRow = (row) => {
  let inputRow = row.split(" -> ");

  let x1 = inputRow[0].split(",")[0];
  let y1 = inputRow[0].split(",")[1];

  let x2 = inputRow[1].split(",")[0];
  let y2 = inputRow[1].split(",")[1];


  let line = {
    x1,y1,x2,y2,crossedNum: 0
  }

  return line;
}

const getPointsOnTheLine = (line) => {
  let x1 = parseInt(line.x1);
  let x2 = parseInt(line.x2);
  let y1 = parseInt(line.y1);
  let y2 = parseInt(line.y2);

  let points = [];

  if (x1 == x2) {
    if (y1 > y2) {
      for (let i = y2; i <= y1; i++) {
        points.push({x: x1, y: i})
      }
    }
    else if (y2 > y1) {
      for (let i = y1; i <= y2; i++) {
        points.push({x: x1, y: i})
      }
    }
  }
  else if (y1 == y2) {
    if (x1 > x2) {
      for (let i = x2; i <= x1; i++) {
        points.push({x: i, y: y1})
      }
    }
    else if (x2 > x1) {
      for (let i = x1; i <= x2; i++) {
        points.push({x: i, y: y1})
      }
    }
  }


  return points;
}

let mapa = new Map();

input.forEach(row => {
  let line = parseinputRow(row)
  let points = getPointsOnTheLine(line);

  points.forEach(p => {
    if (mapa.has(JSON.stringify(p))) {
      let counter = mapa.get(JSON.stringify(p));
      mapa.set(JSON.stringify(p), counter + 1);
    }
    else {
      mapa.set(JSON.stringify(p), 1);
    }
  })
})

let counter = 0;

mapa.forEach(function(value, key) {
  if (value >= 2) {
    counter++;
  }
})

console.log("part 1:", counter);
