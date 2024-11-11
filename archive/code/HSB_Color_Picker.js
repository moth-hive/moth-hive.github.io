//HSB Variables
var hu= 17;
var sat = 240;
var bright = 200;

var hBack = 0;
var sBack = 0;
var bBack = 255;

var scroll = 0;
var sel = 0;
var bru = 0;
var bSize = 10;

var vertical = 0;
var horizontal = 0;
var drawing = false;

function setup(){
  createCanvas(800, 800);
  colorMode(HSB);
  background(hBack, sBack, bBack);
  textSize(20);
  noStroke();

  drawX = width/2;
  drawY = height/2;
}

function draw(){
  //background(255);
  drawUI(20,0);

  drawX += horizontal;
  drawY += vertical;

  if(drawing){
    drawThing();
  }

  //saveFrame("drawing-####.png");
  //debug();
}

//Overall User Input with keyboard
function keyPressed(){

  //WASD Key Control
  //Moves Drawing Cursor Up
  if(key == 'w' || key == 'W'){
    if(drawY > height/10){
      vertical = -2;
    } else {
      vertical = 0;
    }
  }

  //Moves selection Down
  if(key == 's' || key == 'S'){
    if(drawY < height){
      vertical = 2;
    } else {
      vertical = 0;
    }
  }

  //Moves Drawing Cursor Left
  if(key == 'a' || key == 'A'){
    if(drawX > 0){
      horizontal = -2;
    } else {
      horizontal = 0;
    }
  }

  //Moves selection Right
  if(key == 'd' || key == 'D'){
    if(drawX < width){
      horizontal = 2;
    } else {
      horizontal = 0;
    }
  }

  //Starts Drawing
  if(key == 'c' || key == 'C'){
    drawing = true;
  }

  if(key == 'r' || key == 'R'){
    background(hBack, sBack, bBack);
  }
}

function keyReleased(){

  //WASD Key Control
  //Moves Drawing Cursor Up
  if(key == 'w' || key == 'W'){
    if(vertical == -2){
      vertical = 0;
    }
  }

  //Moves selection Down
  if(key == 's' || key == 'S'){
    if(vertical == 2){
      vertical = 0;
    }
  }

  //Moves Drawing Cursor Left
  if(key == 'a' || key == 'A'){
    if(horizontal == -2){
      horizontal = 0;
    }
  }

  //Moves selection Right
  if(key == 'd' || key == 'D'){
    if(horizontal == 2){
      horizontal = 0;
    }
  }

  //Starts Drawing
  if(key == 'c' || key == 'C'){
    drawing = false;
  }
}


function mousePressed(){
  if(sel == 4){
    sel = 0;
  } else {
    sel += 1;
  }
}


function mouseWheel(event) {
  scroll = int(event.delta / 100);
  switch(sel){
      case 0:
        if(hu>= 0 && hu<= 255){
          hu+= scroll;
        }
        if(hu< 0){hu= 0;}
        if(hu> 255){hu= 255;}
        break;

      case 1:
        if(sat >= 0 && sat <= 255){
          sat += scroll;
        }
        if(sat < 0){sat = 0;}
        if(sat > 255){sat = 255;}
        break;

      case 2:
        if(bright >= 0 && bright <= 255){
          bright += scroll;
        }
        if(bright < 0){bright = 0;}
        if(bright > 255){bright = 255;}
        break;

      case 3:
        if(bru >= 0 && bru <= 2){
          bru += scroll;
        }
        if(bru < 0){bru = 2;}
        if(bru > 2){bru = 0;}
        break;

      case 4:
        if(bSize >= 1 && bSize <= 50){
          bSize += scroll;
        }
        if(bSize < 1){bSize = 1;}
        if(bSize > 50){bSize = 50;}
        break;
    }

  //console.log(scroll);
}

function debug(){
  //fill(250, 100);

  switch(sel){
    case 0:
      console.log("hueSelected");
      break;
    case 1:
      console.log("Sat Selected");
      break;
    case 2:
      console.log("Bright Selected");
      break;
  }
}
