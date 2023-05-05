/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [245, 213, 179];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11;
let faceSelector;
let faceGuideCheckbox;

function setup () {
  // Create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // Sliders
  slider1 = createSlider(0, 100, 0);   // Eyebrow Head
  slider2 = createSlider(0, 100, 0);   // Eyebrow End
  slider3 = createSlider(0, 100, 0);   // Eye Inner Corner
  slider4 = createSlider(0, 100, 0);   // Eye Outer Corner
  slider5 = createSlider(0, 100, 0);   // Upper Eyelid
  slider6 = createSlider(0, 100, 0);   // Lower Eyelid
  slider7 = createSlider(0, 100, 0);   // Mouth Width
  slider8 = createSlider(0, 100, 0);   // Mouth Corners
  slider9 = createSlider(0, 100, 0);   // Upper Lip
  slider10 = createSlider(0, 100, 0);  // Lower Lip
  slider11 = createSlider(0, 100, 0, 25);  // Colour
  slider12 = createSlider(0, 100, 50);  // Tilt
  
  slider1.parent('slider1Container');
  slider2.parent('slider2Container');
  slider3.parent('slider3Container');
  slider4.parent('slider4Container');
  slider5.parent('slider5Container');
  slider6.parent('slider6Container');
  slider7.parent('slider7Container');
  slider8.parent('slider8Container');
  slider9.parent('slider9Container');
  slider10.parent('slider10Container');
  slider11.parent('slider11Container');
  slider12.parent('slider12Container');
  

  faceGuideCheckbox = createCheckbox('', false);
  faceGuideCheckbox.parent('checkbox1Container');

  faceSelector = createSelect();
  faceSelector.option('My Code');
  faceSelector.value('My Code');
  faceSelector.parent('selector1Container');
}

function draw () {
  strokeWeight(0.2);

  let mode = faceSelector.value();

  background(bg_color);

  let s1 = slider1.value();
  let s2 = slider2.value();
  let s3 = slider3.value();
  let s4 = slider4.value();
  let s5 = slider5.value();
  let s6 = slider6.value();
  let s7 = slider7.value();
  let s8 = slider8.value();
  let s9 = slider9.value();
  let s10 = slider10.value();
  let s11 = slider11.value();
  let s12 = slider12.value();
 
  let show_face_guide = faceGuideCheckbox.checked();

  // use same size / y_pos for all faces
  let face_size = canvasWidth / 5;
  let face_scale = face_size / 10;
  let face_y = height / 2;
  let face_x = width / 2;

  push();
  translate(face_x, face_y);
  scale(face_scale);

  push();
  if (mode == 'My Code') {
    let eyeBHead = map(s1, 0, 100, -1.5, 1);
    let eyeBEnd = map(s2, 0, 100, 0, 1.5);
    let eyeInner = map(s3, 0, 100, -0.5, 0.5);
    let eyeOuter = map(s4, 0, 100, -0.5, 0);
    let upperEye = map(s5, 0, 100, -0.5, 0.5);
    let lowerEye = map(s6, 0, 100, -1.5, 1.5);
    let mouthWidth = map(s7, 0, 100, -1, 0.5);
    let mouthCorners = map(s8, 0, 100, 0, 2);
    let upperLip = map(s9, 0, 100, -2.5, 0);
    let lowerLip = map(s10, 0, 100, -4, 0);
    let colorChoice = int(map(s11, 0, 100, 0, 4));
    let tilt_value = map(s12, 0, 100, -20, 20);

    faceMask(eyeBHead, eyeBEnd, eyeInner, eyeOuter, upperEye, lowerEye, mouthWidth, mouthCorners, upperLip, lowerLip, tilt_value, colorChoice)
    
  }

  pop();

  if(show_face_guide) {
    strokeWeight(0.1);
    rectMode(CORNER); 
    noFill()
    stroke(0, 0, 255);
    rect(-10, -10, 20, 20);
    line(  0, -11,  0, -10);
    line(  0,  10,  0, 11);
    line(-11,   0,-10,  0);
    line( 11,   0, 10,  0);
  }

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
