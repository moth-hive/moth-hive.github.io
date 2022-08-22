
//////////////////VARIABLES/////////////////

//Display Variables
var boxSize = 40;
var margin = 10;

//Gradients vertical space
var hueOffset = boxSize/2;
var satOffset = boxSize/2 * 2;
var brightOffset = boxSize/2 * 3;

////////////////FUNCTIONS//////////////////

//Draws the entire UI together
function drawUI(offsetX, offsetY){
  colorMode(RGB);
  noStroke();
  fill(100);
  rect(0, 0, width,  height/10);
  fill(150);
  rect(offsetX - margin, offsetY + boxSize/2 - margin * 1.5, boxSize + 255 + offsetX + margin, boxSize/2 * 3 + margin, 25);
  colorMode(HSB);

  drawGradients(offsetX, offsetY);
  drawBrushs(offsetX, offsetY);
  drawNumbers(offsetX, offsetY);
  drawSelect(offsetX, offsetY);

  //Displays Final Color in a box
  fill(hu, sat, bright);
  rect(offsetX, offsetY + boxSize/2, boxSize, boxSize, 5);

}

function drawBrushs(offsetX, offsetY){
    colorMode(RGB)
    fill(150);
    rect(10 * width/12 - offsetX - margin, offsetY + boxSize/2 - margin * 1.5, 90 + boxSize + offsetX + margin, boxSize/2 * 3 + margin, 25);
    fill(255);
    rect(9 * width/10 - offsetX + margin * 3, offsetY + boxSize/2 - margin/2, boxSize + margin, boxSize + margin, 10)

    rect(9 * width/10 - offsetX - 40, offsetY + boxSize/2 - margin/2, 15);
    fill(0);
    ellipse(9 * width/10 - offsetX - 32, offsetY + boxSize/2 - margin/2 + 7, 10);

    fill(255);
    rect(9 * width/10 - offsetX - 20, offsetY + boxSize/2 - margin/2, 15);
    fill(0);
    rect(9 * width/10 - offsetX - 17, offsetY + boxSize/2 - margin/2 + 3, 10);

    fill(255);
    rect(9 * width/10 - offsetX, offsetY + boxSize/2 - margin/2, 15);
    stroke(0);
    line(9 * width/10 - offsetX, offsetY + boxSize/2 - margin/2, 9 * width/10 - offsetX + 15, offsetY + boxSize/2 - margin/2 + 15);
    noStroke();

    for(let i = 1; i <= 50; i++){
      fill(0);
      rect(11 * width/12 - offsetX - margin * 5 + i, offsetY + boxSize/2 * 3 - margin, 1, 10);
    }


    colorMode(HSB);
    fill(hu, sat, bright);
    switch(bru){
      case 0:
        circleBrush(bSize, 9 * width/10 - offsetX + margin * 3 + (boxSize + margin)/2, offsetY + boxSize/2 - margin/2 + (boxSize + margin)/2);
        break;

      case 1:
        squareBrush(bSize, 9 * width/10 - offsetX + margin * 3 + (boxSize + margin)/2, offsetY + boxSize/2 - margin/2 + (boxSize + margin)/2);
        break;

      case 2:
        lineBrush(bSize, 9 * width/10 - offsetX + margin * 3 + (boxSize + margin)/2, offsetY + boxSize/2 - margin/2 + (boxSize + margin)/2);
        break;
    }
}

//Draws the HSB Gradient Bars
function drawGradients(offsetX, offsetY){
  //hueGradient
  for(let i = 0; i < 255; i += 1){
    fill(i, 255, 255);
    rect(boxSize + 10 + offsetX + i, offsetY + hueOffset, 1, 5);
  }

  //Saturation Gradient
  for(let i = 0; i < 255; i += 1){
    fill(hu, i, bright);
    rect(boxSize + 10 + offsetX + i, offsetY + satOffset, 1, 5);
  }

  //Brightness Gradient
  for(let i = 0; i < 255; i += 1){
    fill(hu, sat, i);
    rect(boxSize + 10 + offsetX + i, offsetY + brightOffset, 1, 5);
  }
}

//Draws the HSB Numbers by their Bars
function drawNumbers(offsetX, offsetY){
  fill(0,0,0);
  noStroke();
  textSize(20);

  //hueNumber Display
  //text(str(hue), offsetX + 255 + 10, offsetY + hueOffset);
  text(str(hu), offsetX + 255 + 10, offsetY + hueOffset);

  //Saturation Number Display
  text(str(sat), offsetX + 255 + 10, offsetY + satOffset);

  //Brightness Number Display
  text(str(bright), offsetX + 255 + 10, offsetY + brightOffset);

  textSize(15);
  //Brush Size Number Display
  text(str(bSize), 11 * width/12 - offsetX - margin * 5 + 15, offsetY + boxSize/2 * 3 - margin);
}

//Draws a rectangle based on which gradient is selected
function drawSelect(offsetX, offsetY){
  colorMode(RGB);
  stroke(255);
  fill(255, 255, 255, 0);
  colorMode(HSB);

  switch(sel){
    case 0:
      rect(boxSize + 10 + offsetX + hu, offsetY + hueOffset, 3, 5);
      break;
    case 1:
      rect(boxSize + 10 + offsetX + sat, offsetY + satOffset, 3, 5);
      break;
    case 2:
      rect(boxSize + 10 + offsetX + bright, offsetY + brightOffset, 3, 5);
      break;
    case 4:
      rect(11 * width/12 - offsetX - margin * 5 + bSize, offsetY + boxSize/2 * 3 - margin, 3, 10);
      break;
  }
  noStroke();
}
