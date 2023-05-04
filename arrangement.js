/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [245, 213, 179];

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
        // center face
        let eyeBHead = random(-1,1);
        let eyeBEnd = random(0, 2);
        let eyeInner = random(-0.5, 0.5);
        let eyeOuter = random(-0.5, 0);
        let upperEye = random(-0.5, 0.5);
        let lowerEye = random(-1.5, 1.5);
        let mouthWidth = random(-1, 0.5);
        let mouthCorners = random(0, 2);
        let upperLip = random(-2.5, 0);
        let lowerLip = random(-5, 0);
        let tilt_value = random(-20, 20);

        // if(is_cyclops < 10) {
        //   eye_value = 1;
        //   tilt_value = random(-5, 5);
        //   mouth_value = random(0, 1.7);
        // }

        push();
        translate(x, y);
        scale(w/25, h/25);

        let maskColor = int(random(0, 5));
        faceMask(eyeBHead, eyeBEnd, eyeInner, eyeOuter, upperEye, lowerEye, mouthWidth, mouthCorners, upperLip, lowerLip, tilt_value, maskColor);
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
