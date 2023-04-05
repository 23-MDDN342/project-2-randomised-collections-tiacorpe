/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

///// MY CODE /////
function faceMask() {
  noFill();
  stroke(255);
  strokeWeight(1);
  // top left
  let x1 = -10
  let y1 = -10
  // top right
  let x2 = 10
  let y2 = -10
  // bottom left
  let x3 = -9
  let y3 = 2.5
  // bottom middle
  let x4 = 0
  let y4 = 10
  // bottom right
  let x5 = 9
  let y5 = 2.5

  // Reference Points (DELETE LATER)
  point(x1, y1); // top left
  point(x2, y2); // top right
  point(x3, y3); // bottom left
  point(x4, y4); // bottom middle
  point(x5, y5); // bottom right
  point(0, 0); // centre

  // Mask Curve(s)
  // startPoint x,y | curvePoint x,y | curvePoint x,y | endPoint x,y
  bezier(x1, y1, 0, -8, 0, -8, x2, y2); // top curve
  bezier(x1, y1, -10, 0, -10, 0, x3, y3); // left curve
  bezier(x2, y2, 10, 0, 10, 0, x5, y5); // right curve
  bezier(x3, y3, -6.5, 9, -1, 10, x4, y4); // bottom left curve
  bezier(x5, y5, 6.5, 9, 1, 10, x4, y4); // bottome right curve

}


///// EXAMPLE CODE /////
function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
