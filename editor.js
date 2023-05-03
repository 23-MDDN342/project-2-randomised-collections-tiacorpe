/*
 * This editor shows the possible faces that can be created
 */

const canvasWidth = 960;
const canvasHeight = 500;
const bg_color = [245, 222, 179];
let slider1, slider2, slider3, slider4, slider5;
let slider6, slider7, slider8, slider9, slider10;
let slider11;
let faceSelector;
let faceGuideCheckbox;

function setup () {

  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // create sliders
  slider1 = createSlider(-1, 1, 0, 0);
  slider2 = createSlider(0, 2, 0, 0);

  slider3 = createSlider(-0.5, 0.5, 0, 0);
  slider4 = createSlider(-0.5, 0, 0, 0);
  slider5 = createSlider(-0.5, 0.5, 0, 0);
  slider6 = createSlider(-1.5, 1.5, 0, 0);

  slider7 = createSlider(-1, 0.5, 0, 0);
  slider8 = createSlider(0, 2, 0, 0);
  slider9 = createSlider(-2.5, 0, 0, 0);
  slider10 = createSlider(-5, 0, 0, 0);
  slider11 = createSlider(1, 4, 1);
  

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
    let eyeBHead_value = map(s1, 0, 100, -1, 1);
    let eyeBEnd_value = map(s2, 0, 100, 0, 2);
    let eyeInner_value = map(s3, 0, 100, -0.5, 0.5);
    let eyeOuter_value = map(s4, 0, 100, -0.5, 0);
    let upperEye_value = map(s5, 0, 100, -0.5, 0.5);
    let lowerEye_value = map(s6, 0, 100, -1.5, 1.5);
    let mouthWidth_value = map(s7, 0, 100, -1, 0.5);
    let mouthCorners_value = map(s8, 0, 100, 0, 2);
    let upperLip_value = map(s9, 0, 100, -2.5, 0);
    let lowerLip_value = map(s10, 0, 100, -5, 0);
    let color_value = int(map(s11, 0, 100, 1, 4));

    faceMask(eyeBHead_value, eyeBEnd_value, eyeInner_value, eyeOuter_value, upperEye_value, lowerEye_value, mouthWidth_value, mouthCorners_value, upperLip_value, lowerLip_value, color_value)  
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
