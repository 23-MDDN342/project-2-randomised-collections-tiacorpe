/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */

///////// MASK CODE /////////
function faceMask(eyeBHead, eyeBEnd, eyeInner, eyeOuter, upperEye,  lowerEye, mouthWidth, mouthCorners, upperLip, lowerLip, tilt_value, color_value) 
{
  // Tilt Value
  angleMode(DEGREES);
  rotate(tilt_value);

  // Mask Vertex Variables
  // Top left
    let x1 = -9.5;
    let y1 = -9.5;
  // Top right
    let x2 = 9.5;
    let y2 = -9.5;
  // Bottom right
    let x3 = 9;
    let y3 = 1;
  // Bottom middle
    let x4 = 0;
    let y4 = 9.5;
  // Bottom left
    let x5 = -9;
    let y5 = 1;

  // Variables for the upper, vertical sides of the mask/face.
    let vert_X = 9;
    let vert_Y1 = 1;
    let vert_Y2 = 1;

  // Variables for the lower, angled sides of the mask/face.
    let angle_X1 = 8;
    let angle_Y1 = 9.5;
    let angle_X2 = 4;
    let angle_Y2 = 8;

  // Black Backing Mask
  noStroke();
  fill(0);
  beginShape();
    vertex((x1 -0.5), (y1 -0.5));
      bezierVertex(0, -8.5, 0, -8.5, (x2 +0.5), (y2 -0.5)); // TLeft->TRight
      bezierVertex((vert_X +0.5), vert_Y1, (vert_X +0.5), vert_Y2, (x3 +0.5), y3); // TRight->BRight *
      bezierVertex((angle_X1 +0.5), angle_Y1, (angle_X2 +0.5), (angle_Y2 +0.5), x4, (y4 +0.5)); // BRight->BMiddle %
      bezierVertex(-(angle_X2 +0.5), (angle_Y2 +0.5), -(angle_X1 +0.5), angle_Y1, (x5 -0.5), y5); // BMiddle->BLeft %
      bezierVertex(-(vert_X +0.5), vert_Y2, -(vert_X +0.5), vert_Y1, (x1 -0.5), y1); // BLeft->TLeft *
  endShape();

  // Face Mask & Colour Variable
  let Brown_1 = color('#ffa257');
  let Brown_2 = color('#d17d38');
  let Brown_3 = color('#994f12');
  let Brown_4 = color('#823b00');
  let Brown_5 = color('#9c673b');
  colorOptions = [Brown_1, Brown_2, Brown_3, Brown_4, Brown_5]
  
  noStroke();
  fill(colorOptions[color_value]);

  beginShape();
    vertex(x1, y1);
      bezierVertex(0, -8, 0, -8, x2, y2); // TLeft->TRight
      bezierVertex(vert_X, vert_Y1, vert_X, vert_Y2, x3, y3); // TRight->BRight *
      bezierVertex(angle_X1, angle_Y1, angle_X2, angle_Y2, x4, y4); // BRight->BMiddle %
      bezierVertex(-angle_X2, angle_Y2, -angle_X1, angle_Y1, x5, y5); // BMiddle->BLeft %
      bezierVertex(-vert_X, vert_Y2, -vert_X, vert_Y1, x1, y1); // BLeft->TLeft *
  endShape();

  ///////// NOSE /////////
  noStroke();
  fill(0);

  beginShape();
    vertex(-2.75, 0.75); 
      bezierVertex(-1, -0.3, -0.9, 0.4, 0, 0.5);
      bezierVertex(0.9, 0.4, 1, -0.3, 2.75, 0.75);
      bezierVertex(1, 0.5, 0.9, 1, 0, 1);
      bezierVertex(-0.9, 1, -1, 0.5, -2.75, 0.75);
  endShape();

  ///////// EYEBROWS /////////
  // * Left to Right
  strokeWeight(0.25);
  fill(0);
  let inner_browY = eyeBHead;
  let outer_browY = eyeBEnd;

  beginShape();
    vertex(-1, (inner_browY -6));
      bezierVertex(-2, (inner_browY -3), -6, (outer_browY -8), -8, (outer_browY -5));
      bezierVertex(-6, (outer_browY -7), -2, (inner_browY -2.5), -1, (inner_browY -6));
  endShape();
  
  beginShape();
    vertex(1, (inner_browY-6));
      bezierVertex(2, (inner_browY -3), 6, (outer_browY -8), 8, (outer_browY -5));
      bezierVertex(6, (outer_browY -7), 2, (inner_browY -2.5), 1, (inner_browY -6));
  endShape();


  ///////// EYES /////////
  // * Left to Right
  strokeWeight(0.25);
  fill(0);
  let inner_eyeY = eyeInner;
  let outer_eyeY = eyeOuter;
  let upper_eyeY = upperEye;
  let lower_eyeY = lowerEye;

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
  noStroke(0);
  fill(0);
  let cornerX = mouthWidth;
  let cornerY = mouthCorners;
  let upperL = upperLip;
  let lowerL = lowerLip;
  
  // Mouth
  beginShape();
    vertex(-(cornerX +4), (cornerY +3));
      bezierVertex(0, (upperL +4), 0, (upperL +4), (cornerX +4), (cornerY +3));
      bezierVertex(0, (lowerL +9), 0, (lowerL +9), -(cornerX +4), (cornerY +3));
  endShape();
  
  // Smile Lines * Left to Right
  beginShape();
    vertex(-3, 2.5);
      bezierVertex(-(cornerX +5), (cornerY +2.25), -(cornerX +5), (cornerY +3.5), -(cornerX +4), (cornerY +4.5));
      bezierVertex(-(cornerX +4.5), (cornerY +3.5), -(cornerX +4.5), (cornerY +2.25), -3, 2.5);
  endShape();   

  beginShape();
    vertex(3, 2.5);
      bezierVertex((cornerX +5), (cornerY +2.25), (cornerX +5), (cornerY +3.5), (cornerX +4), (cornerY +4.5));
      bezierVertex((cornerX +4.5), (cornerY +3.5), (cornerX +4.5), (cornerY +2.25), 3, 2.5);
  endShape();

  // Chin Detail * not drawn if lower lip/mouth corners are too far down.
  if(mouthCorners == 2 && lowerLip <= -2.4){
    noStroke(0);
    fill(0);
    let chinY = 6.5;

    beginShape();
      vertex(0, chinY); 
        bezierVertex(0.6, (chinY +0.5), 0.6, (chinY +1), 0, (chinY +1.5));
        bezierVertex(1, (chinY +1), 1, (chinY +0.5), 0, chinY);
    endShape();
  }

  else if(mouthCorners <= 1.90 && lowerLip <= -1.6) {
    noStroke(0);
    fill(0);
    let chinY = 6.5;

    beginShape();
      vertex(0, chinY); 
        bezierVertex(0.6, (chinY +0.5), 0.6, (chinY +1), 0, (chinY +1.5));
        bezierVertex(1, (chinY +1), 1, (chinY +0.5), 0, chinY);
    endShape();
  }
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
