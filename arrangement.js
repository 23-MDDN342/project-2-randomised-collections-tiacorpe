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

  let w = canvasWidth / 5;
  let h = canvasHeight / 2;
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
        let happy = random(0, 100);

        // Conditional Randomness
        if(happy < 50) {
          eyeBHead = 0;
          eyeBEnd = 0;
          eyeInner = 0;
          eyeOuter = 0;
          upperEye = 0;
          lowerEye = 0;
          mouthWidth = 0;
          mouthCorners = 0;
          upperLip = 0;
          lowerLip = 0;
        }

        push();
        translate(x, y);
        scale(7);

        // Weighted Selection
        let Spinner = random(0, 100);
        let maskColor = 0;

        if(Spinner > 25){
          let maskColor = 0;
        } 
        else {
          maskColor = int(random(1, 5));
        }

        faceMask(eyeBHead, eyeBEnd, eyeInner, eyeOuter, upperEye, lowerEye, mouthWidth, mouthCorners, upperLip, lowerLip, tilt_value, maskColor);

        pop();

    }
  }
}

// Happy Face; set variables to default (0).

// Sad Face
  // let inner_browY = -1
  // let outer_browY = 2
  // let inner_eyeY = -0.5
  // let outer_eyeY = 0.5
  // let upper_eyeY = -0.1
  // let lower_eyeY = 0
  // let cornerX = 0
  // let cornerY = 2
  // let upperLip = -2
  // let lowerLip = -5

// Angry Face
  // let inner_browY = 1
  // let outer_browY = 0
  // let inner_eyeY = -0.5
  // let outer_eyeY = -1
  // let upper_eyeY = -0.5 
  // let lower_eyeY = 1 
  // let cornerX = 0
  // let cornerY = 2
  // let upperLip = -2
  // let lowerLip = -4.5

// Shocked Face
  // let inner_browY = -1
  // let outer_browY = 1
  // let inner_eyeY = 0
  // let outer_eyeY = -0.5
  // let upper_eyeY = -0.5
  // let lower_eyeY = 1.5
  // let cornerX = -0.5
  // let cornerY = 1
  // let upperLip = -2.5
  // let lowerLip = -3

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
