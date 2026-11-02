/**
 * 1. Draw One Circle
 *  1st in one colour & fixed diameter
 *  2nd randomise colour
 *  3rd randomise diameter
 * 2. Draw 100 Circles
 *  use for loop from 0 to 100 to draw one random circle
 * 3. Reset button
 * 4. knob to define diameter
 * 5. knobs to define x & y
 * 6. sliders to define r, g, b
 * 7. add loop
 */

let diam = 50;
let x = 0;
let y = 0;
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupController();
  background(0);
  // noLoop();
  noStroke();
  x = random(0, windowWidth);
  y = random(0, windowHeight);
  (r, g, (b = random(0, 255)));
}

function draw() {
  drawCircleAtXY();
}

/**
 * React to inputs from the control change sliders in the Midi controller
 * @param {Event} e
 */
function allCC(e) {
  console.log("controller:", e.controller.number, "value:", e.value);
  switch (e.controller.number) {
    case 32: {
      diam = map(e.value, 0, 1, 10, 100);
      break;
    }
    case 33: {
      x = map(e.value, 0, 1, 0, windowWidth);
      drawCircleAtXY();
      break;
    }
    case 34: {
      y = map(e.value, 0, 1, 0, windowHeight);
      drawCircleAtXY();
      break;
    }
    case 35: {
      break;
    }
    case 36: {
      r = map(e.value, 0, 1, 0, 255);

      break;
    }
    case 37: {
      g = map(e.value, 0, 1, 0, 255);
      break;
    }
    case 38: {
      b = map(e.value, 0, 1, 0, 255);
      break;
    }
    case 39: {
      break;
    }
  }
}

/**
 * React to inputs from the bottom buttons on the controller
 * @param {Event} e
 */
function allNoteOn(e) {
  console.log("controller:", e.data[1], "value:", e.value);
  switch (e.data[1]) {
    case 40: {
      if (e.value) {
        console.log(" 40 pressed");
        drawRandomCircle();
      } else {
      }
      break;
    }
    case 41: {
      if (e.value) {
        drawManyCircles();
      } else {
      }
      break;
    }
    case 42: {
      if (e.value) {
        // drawCircleAtXY();
      } else {
      }
      break;
    }
    case 43: {
      if (e.value) {
        background(0);
      } else {
      }
      break;
    }
  }
}

// 1. draw random circle
/**
 * Draw circle at a random place
 */
function drawRandomCircle() {
  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);
  fill(r, g, b);
  const x = random(0, windowWidth);
  const y = random(0, windowHeight);
  circle(x, y, diam);
}

// 2. draw 100 circles
function drawManyCircles() {
  for (let i = 0; i < 100; i++) {
    drawRandomCircle();
  }
}

function drawCircleAtXY() {
  fill(r, g, b);
  circle(x, y, diam);
}
