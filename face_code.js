/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

///////// MY NEST OF VALUES /////////
// eyeBHead_value
// eyeBEnd_value
// eyeInner_value
// eyeOuter_value
// upperEye_value
// lowerEye_value
// mouthWidth_value
// mouthCorners_value
// upperLip_value
// lowerLip_value
// color_value

// MY CODE //
///////// MASK /////////
function faceMask(eyeBHead_value, eyeBEnd_value, eyeInner_value, eyeOuter_value, upperEye_value, lowerEye_value, mouthWidth_value, mouthCorners_value, upperLip_value, lowerLip_value, color_value) {
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

  // Mask Curve(s) & Colour Variable
  let gold = color(255, 196, 0);
  let blue = color(0, 149, 255);
  let red = color(255, 38, 0);
  let green = color (0, 207, 14);

  // Color #1
  // if(color_value == 1){
    fill(gold);
  // }

  // Color #2
  // if(color_value == 2){
    fill(blue);
  // }

  // Color #3
  // if(color_value == 3){
    fill(red);
  // }

  // Color #4
  // if(color_value == 4){
    fill(green);
  // }

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
  // let inner_browY = -1 // -1 - 1
  // let outer_browY = 1 // 0 - 2
  let inner_browY = map(eyeBHead_value, 0, 100, -1, 1);
  let outer_browY = map(eyeBEnd_value, 0, 100, 0, 2);

  fill(0);
  strokeWeight(0.25);
  beginShape();
  vertex(1, (inner_browY -6));
  bezierVertex(2, (inner_browY -3), 6, (outer_browY -8), 8, (outer_browY -5));
  bezierVertex(6, (outer_browY -7), 2, (inner_browY -2.5), 1, (inner_browY -6));
  endShape();

  beginShape();
  vertex(-1, (inner_browY -6));
  bezierVertex(-2, (inner_browY -3), -6, (outer_browY -8), -8, (outer_browY -5));
  bezierVertex(-6, (outer_browY -7), -2, (inner_browY -2.5), -1, (inner_browY -6));
  endShape();


///////// EYES /////////
  // let inner_eyeY = 0 // -0.5 - 0.5
  // let outer_eyeY = -0.5 //  - 0.5 - 0
  // let upper_eyeY = -0.5 // -0.5 - 0.5
  // let lower_eyeY = 1.5 // -1.5 - 1.5
  let inner_eyeY = map(eyeInner_value, 0, 100, -0.5, 0.5);
  let outer_eyeY = map(eyeOuter_value, 0, 100, -0.5, 0);
  let upper_eyeY = map(upperEye_value, 0, 100, -0.5, 0.5);
  let lower_eyeY = map(lowerEye_value, 0, 100, -1.5, 1.5);


  fill(0);
  strokeWeight(0.25);

  beginShape();
  vertex(-1.75, (inner_eyeY -2.25));
  bezierVertex(-4, (upper_eyeY -4), -5, (upper_eyeY -4), -6.75, outer_eyeY-2);
  bezierVertex(-5, (lower_eyeY -2.5), -4, (lower_eyeY -2.5), -1.75, inner_eyeY-2.25);
  endShape();

  beginShape();
  vertex(1.75, (inner_eyeY -2.25));
  bezierVertex(4, (upper_eyeY -4), 5, (upper_eyeY -4), 6.75, (outer_eyeY -2));
  bezierVertex(5, (lower_eyeY -2.5), 4, (lower_eyeY -2.5), 1.75, (inner_eyeY -2.25));
  endShape();

///////// MOUTH /////////
  // let cornerX = -0.5 // 0.5 - -1
  // let cornerY = 1 // 0 - 2
  // let upperLip = -2.5 // -2.5 - 0
  // let lowerLip = -3 // -5 - 0
  let cornerX = map(mouthWidth_value, 0, 100, -1, 0.5);
  let cornerY = map(mouthCorners_value, 0, 100, 0, 2);
  let upperLip = map(upperLip_value, 0, 100, -2.5, 0);
  let lowerLip = map(lowerLip_value, 0, 100, -5, 0);

  fill(0);
  noStroke(0);
  
  // Mouth
  beginShape();
  vertex(-(cornerX +4), (cornerY +3));
  bezierVertex(0, (upperLip +4), 0, (upperLip +4), (cornerX +4), (cornerY +3));
  bezierVertex(0, (lowerLip +9), 0, (lowerLip +9), -(cornerX +4), (cornerY +3));
  endShape();
  
  // Smile Lines
  beginShape();
  vertex(3, 2.5);
  bezierVertex((cornerX +5), (cornerY +2.25), (cornerX +5), (cornerY +3.5), (cornerX +4), (cornerY +4.5));
  bezierVertex((cornerX +4.5), (cornerY +3.5), (cornerX +4.5), (cornerY +2.25), 3, 2.5);
  endShape();

  beginShape();
  vertex(-3, 2.5);
  bezierVertex(-(cornerX +5), (cornerY +2.25), -(cornerX +5), (cornerY +3.5), -(cornerX +4), (cornerY +4.5));
  bezierVertex(-(cornerX +4.5), (cornerY +3.5), -(cornerX +4.5), (cornerY +2.25), -3, 2.5);
  endShape();   

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

///// EXAMPLE CODE /////
// function orangeAlienFace(tilt_value, eye_value, mouth_value) {
//   const bg_color3 = [71, 222, 219];
//   const fg_color3 = [255, 93, 35];

//   let headSize = 20
//   let eyeSize = 5;
//   let centerX = 0;
//   let Iy = -4
//   let distactBetweenEyes = 5
//   let MouthDrop = 7
  
//   // rotation in degrees
//   angleMode(DEGREES);
//   rotate(tilt_value);

//  // head
//   noStroke();
//   fill(fg_color3);
//   ellipse(centerX, 0, headSize, headSize);

//   // 2 traditonal eyes
//   if (eye_value === 1 || eye_value == 3) {
//     fill(bg_color3);
//     ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
//   }
// // middle eye
//   if (eye_value >= 2) {
//     fill(bg_color3);
//     ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
//     ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
//   }

//   // mouth
//   fill(bg_color3);
//   ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
// }

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
