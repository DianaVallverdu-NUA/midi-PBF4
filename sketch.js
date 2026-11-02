function setup() {
  createCanvas(windowWidth, windowHeight);
  setupController();
  noLoop();
  noStroke();
}

function draw() {
  background(0);
}

/**
 * React to inputs from the control change sliders in the Midi controller
 * @param {Event} e
 */
function allCC(e) {
  console.log("controller:", e.controller.number, "value:", e.value);
  switch (e.controller.number) {
    case 32: {
      break;
    }
    case 33: {
      break;
    }
    case 34: {
      break;
    }
    case 35: {
      break;
    }
    case 36: {
      break;
    }
    case 37: {
      break;
    }
    case 38: {
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
      } else {
      }
      break;
    }
    case 42: {
      if (e.value) {
      } else {
      }
      break;
    }
    case 43: {
      if (e.value) {
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
  const diam = random(10, 50);
  circle(x, y, diam);
}
