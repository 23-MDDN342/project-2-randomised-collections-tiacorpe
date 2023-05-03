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

// MY CODE //
///////// MASK /////////
function faceMask(brow_value ,eye_value, mouth_value) {
  // Vertex Variables
  // top left
  let x1 = -9.5
  let y1 = -9.5
  // top right
  let x2 = 9.5
  let y2 = -9.5
  // bottom right
  let x3 = 9
  let y3 = 1
  // bottom middle
  let x4 = 0
  let y4 = 9.5
  // bottom left
  let x5 = -9
  let y5 = 1

  // Variables for the upper, vertical sides of the mask/face.
  let vert_X = 9
  let vert_Y1 = 1
  let vert_Y2 = 1

  // Variables for the lower, angled sides of the mask/face.
  let angle_X1 = 8
  let angle_Y1 = 9.5

  let angle_X2 = 4
  let angle_Y2 = 8

  // Mask Curve(s)
  let gold = color(255, 196, 0);
  fill(gold);
  noStroke();

  beginShape();
  vertex(x1, y1);
  bezierVertex(0, -8, 0, -8, x2, y2); // TLeft->TRight
  bezierVertex(vert_X, vert_Y1, vert_X, vert_Y2, x3, y3); // TRight->BRight *
  bezierVertex(angle_X1, angle_Y1, angle_X2, angle_Y2, x4, y4); // BRight->BMiddle %

  // Variables are 'backwards' + negative, as it's traveling up the opposite side of the face.
  bezierVertex(-angle_X2, angle_Y2, -angle_X1, angle_Y1, x5, y5); // BMiddle->BLeft %
  bezierVertex(-vert_X, vert_Y2, -vert_X, vert_Y1, x1, y1); // BLeft->TLeft *
  endShape();

///////// NOSE /////////
  let noseCurve = 1.15
  let noseEnd = 2.25
  let noseEnd_height = 0.65

  noFill();
  stroke(0);
  strokeWeight(0.5);

  beginShape();
  vertex(0, 1); 
  bezierVertex(-noseCurve , 1, -noseCurve, 0, -noseEnd, noseEnd_height);
  endShape();

  beginShape();
  vertex(0, 1); 
  bezierVertex(noseCurve , 1, noseCurve, 0, noseEnd, noseEnd_height);
  endShape();

///////// EYEBROWS /////////
  fill(0);
  strokeWeight(0.25);

  // Brow #1
  beginShape();
  vertex(1, -6);
  bezierVertex(2, -3, 6, -8, 8, -5);
  bezierVertex(6, -7, 2, -2.5, 1, -6);
  endShape();

  beginShape();
  vertex(-1, -6);
  bezierVertex(-2, -3, -6, -8, -8, -5);
  bezierVertex(-6, -7, -2, -2.5, -1, -6);
  endShape();

///////// EYES /////////
  let eyeWidthX = -1.75

  fill(0);
  strokeWeight(0.25);

  // Eye #1
  beginShape();
  vertex(-1.75, -2.25);
  bezierVertex(-4, -4, -5, -4, -6.75, -2);
  bezierVertex(-5, -2.5, -4, -2.5, -1.75, -2.25);
  endShape();

  beginShape();
  vertex(1.75, -2.25);
  bezierVertex(4, -4, 5, -4, 6.75, -2);
  bezierVertex(5, -2.5, 4, -2.5, 1.75, -2.25);
  endShape();


///////// MOUTHS /////////
  fill(0);
  // strokeWeight(0.25); 
  noStroke();

  // Mouth #1
  beginShape();
  vertex(-4, 3);
  bezierVertex(0, 4, 0, 4, 4, 3);
  bezierVertex(0, 9, 0, 9, -4, 3);
  endShape();

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
