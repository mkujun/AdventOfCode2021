/*
const targetArea = {
  x: [20,30],
  y: [-10, -5]
}
*/

const targetArea = {
  x: [241,273],
  y: [-97, -63]
}

let yMax = 0;

const isInArea = (x, y) => {
  if ( (x >= targetArea.x[0] && x <= targetArea.x[1]) &&
    (y >= targetArea.y[0] && y <= targetArea.y[1])
  ) {
    return true;
  }

  else {
    if (y > yMax) {
      yMax = y;
    }
  }
}

const step = (velocity) => {
  if (velocity.x > 0) { velocity.x-- }
  else if (velocity.x < 0) { velocity.x++ }

  velocity.y--;
}

let lst = [];

const trickShot = (velocity) => {
  let position = { x: 0, y: 0 }

  for (let i = 0; i < 100; i++) {
    position.x = position.x + velocity.x;
    position.y = position.y + velocity.y;
    step(velocity);
    const pero = isInArea(position.x, position.y);
    if (pero) {
      lst.push(yMax);
      yMax = 0;
      break;
    }
    else {continue;}
  }
}

let velocityLimit = Math.abs(targetArea.y[0]) - 1;

for (let i = 0; i <= velocityLimit; i ++) {
  for (let j = 0; j <= velocityLimit; j ++) {
    let velocity = { x: i, y: j};
    trickShot(velocity);
  }
}

console.log(lst);
