var img;
var imgBrush;
var r = 0;
var g = 0;
var b = 0;
var i = -50;
var timer = 0;
var brushType = 0; //Default Line
var brushColor = 7; //Default Black
var brushSize = 0; //Default Size
var shapeSize = 1;
var initials ='tc'; // your initials
var screenbg = 250; // off white background
var lastscreenshot=1; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  imgBrush = loadImage('rat.png');
}

function setup() {
img = createImage(width, height);
img.loadPixels();
createCanvas(600,  600);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  img.updatePixels();
  
  if (i == -50){
    startSetup();
    
  } else if (i > 0) {
    fill(190);
    noStroke();
    rect(0, 0, 55, height, 0, 10, 10, 0);
    drawToolbar(10);
    
    if (keyIsPressed) {
      if(keyCode == ESCAPE){
        background(screenbg);
      }
    }
        
    updateTimer();
  } else if (i <= 0 && i != -50){
    fill(190);
    noStroke();
    rect(0, 0, 55, height, 0, 10, 10, 0);
    drawToolbar(10);
  }
  
  if (keyIsPressed) {
      if (key == 'p' || key == 'P'){
      saveMe();
      }
    }
}

//Draws the start menu and button. Starts the timer and allows for drawing after the button is pressed.
function startSetup(){
  fill(0);
  textSize(32);
  text("Draw a picture in under a minute!", 75, 200);
  
  if(mouseX >= 195 && mouseX <= 465 && mouseY >= 265 && mouseY <= 315){
    fill(170);
    rect(195, 265, 270, 50, 20);
    fill(0);
    text("Click here to start!", 200, 300);
    
    if (mouseIsPressed){
      i = 3600;
      background(screenbg);
    }
    
  } else {
    fill(200);
    rect(195, 265, 270, 50, 20);
    fill(0);
    text("Click here to start!", 200, 300);
  }
}

//Updates and draws the timer
function updateTimer(){
  fill(0);
  strokeWeight(1);
  stroke(0);
  i--;
  timer = round(i / 60);
  text(str(timer), 10, 30);
}

//Draws the toolbar and allows the user to change brushes (in the changeBrush funtion)
function drawToolbar(x){
  
  changeBrush(x);
  
  //Brush Shape Boxes
  fill(screenbg);
  strokeWeight(1);
  stroke(0);
  square(x, 50, 25);
  square(x, 75, 25);
  square(x, 100, 25);
  square(x, 125, 25);
  square(x, 150, 25);
  
  //Brush Size Boxes
  square(x, 475, 25);
  square(x, 500, 25);
  square(x, 525, 25);
  
  //Brush Color Boxes
  fill(237, 28, 36); //Red
  square(x, 225, 25);
  fill(255, 127, 39); //Orange
  square(x, 250, 25);
  fill(255, 242, 0); //Yellow
  square(x, 275, 25);
  fill(34, 177, 76); //Green
  square(x, 300, 25);
  fill(0, 162, 232); //Blue
  square(x, 325, 25);
  fill(63, 72, 204); //Indigo
  square(x, 350, 25);
  fill(163, 73, 164); //Purple
  square(x, 375, 25);
  fill(0); //Black
  square(x, 400, 25);
  
  //Selection Boxes
  noFill();
  stroke(255, 249, 119);
  strokeWeight(2);
  square(x, 50 + 25 * brushType, 26); //Brush Type Highlight
  square(x, 225 + 25 * brushColor, 26); //Brush Color Highlight
  square(x, 475 + 25 * brushSize, 26); //Brush Size Highlight
  
  
  //Brush Shape Box Content
  stroke(r, g, b);
  fill(r, g, b);
  line(x + 5, 70, x + 20, 55); //Line Brush
  ellipse(x + 13, 87, 20, 15); //Circle Brush
  rect(x + 5, 105, 15, 15); //Square Brush
  noStroke();
  fill(255, 174, 201);
  rect(x + 5, 130, 10, 15);
  fill(174, 174, 255);
  rect(x + 15, 130, 5, 15); //Eraser
  image(imgBrush, x + 5, 155, 15, 15); //Image Brush
  
  //Brush Size Box Content
  fill(0);
  stroke(0);
  ellipse(x + 13, 487, 5, 5); //Smallest
  ellipse(x + 13, 512, 10, 10); //Medium
  ellipse(x + 13, 537, 15, 15); //Largest
}

//Changes the values for the brushes
function changeBrush(x){
  if(mouseIsPressed){
    if (mouseX >= x && mouseX <= x + 25){
    
      //Change brush types
      if (mouseY >= 50 && mouseY <= 75) {brushType = 0;}
      else if (mouseY >= 75 && mouseY <= 100) {brushType = 1;}
      else if (mouseY >= 100 && mouseY <= 125) {brushType = 2;}
      else if (mouseY >= 125 && mouseY <= 150) {brushType = 3;}
      else if (mouseY >= 150 && mouseY <= 175) {brushType = 4;}
      
      //Change brush color
      else if (mouseY >= 225 && mouseY <= 250) {brushColor = 0;}
      else if (mouseY >= 250 && mouseY <= 275) {brushColor = 1;}
      else if (mouseY >= 275 && mouseY <= 300) {brushColor = 2;}
      else if (mouseY >= 300 && mouseY <= 325) {brushColor = 3;}
      else if (mouseY >= 325 && mouseY <= 350) {brushColor = 4;}
      else if (mouseY >= 350 && mouseY <= 375) {brushColor = 5;}
      else if (mouseY >= 375 && mouseY <= 400) {brushColor = 6;}
      else if (mouseY >= 400 && mouseY <= 425) {brushColor = 7;}
      
      //Change brush size
      else if (mouseY >= 475 && mouseY <= 500) {brushSize = 0;}
      else if (mouseY >= 500 && mouseY <= 525) {brushSize = 1;}
      else if (mouseY >= 525 && mouseY <= 550) {brushSize = 2;}
    } else {
      if (i > 0){
        userDraw();
      }
    }
  } 
}

//Interprets the brush values and draws
function userDraw(){
  
  //Changes the stroke weight for the brush size
  switch (brushSize){
    case 0:
      strokeWeight(1);
      shapeSize = 1;
      break;
      
     case 1:
       strokeWeight(3);
       shapeSize = 3;
       break;
      
     case 2:
       strokeWeight(5);
       shapeSize = 5;
       break;
    
     default:
       strokeWeight(1);
       shapeSize = 1;
  }
  
  //Changes the brush color
  switch (brushColor){
    case 0: //Red
      r = 237;
      g = 28;
      b = 36;
      break;
    
    case 1: //Orange
      r = 255;
      g = 127;
      b = 39;
      break;
      
    case 2: //Yellow
      r = 255;
      g = 242;
      b = 0;
      break;
    
    case 3: //Green
      r = 34;
      g = 177;
      b = 76;
      break;
    
    case 4: //Blue
      r = 0;
      g = 162;
      b = 232;
      break;
      
    case 5: //Indigo
      r = 63;
      g = 72;
      b = 204;
      break; 
      
    case 6: //Purple
      r = 163;
      g = 73;
      b = 164;
      break;
     
    case 7: //Black
      r = 0;
      g = 0;
      b = 0;
      break;
      
    default:
      r = 0;
      g = 0;
      b = 0;
  }
  
  //Handles the drawing
    stroke(r, g, b);
    fill(r, g, b);
    
    switch(brushType){
      case 0: //Line Brush
        line(mouseX, mouseY, pmouseX, pmouseY);
        break;
        
       case 1: //Circle Brush
       circle(mouseX, mouseY, 3 * shapeSize);
       break;
       
       case 2: //Square Brush
       square(mouseX, mouseY, 3 * shapeSize);
       break;
       
       case 3: //Eraser
       stroke(screenbg);
       line(mouseX, mouseY, pmouseX, pmouseY);
       break;
       
       case 4: //rat
       image(imgBrush, mouseX, mouseY, (imgBrush.width / 20) * shapeSize, (imgBrush.height / 20) *shapeSize);
       break;
       
       default:
       line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function saveMe(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
