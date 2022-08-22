var drawX = 0;
var drawY = 0;

///////////////FUNCTIONS///////////
function drawThing(){
  fill(hue,sat,bright);
  switch(bru){
    case 0:
      circleBrush(bSize, drawX, drawY);
      break;

    case 1:
      squareBrush(bSize, drawX, drawY);
      break;

    case 2:
      lineBrush(bSize, drawX, drawY);
      break;
  }


}


function circleBrush(size, lx, ly){
  ellipse(lx, ly, size, size);
}

function squareBrush(size, lx, ly){
  rect(lx, ly, size, size);
}

function lineBrush(size, lx, ly){
  stroke(hu, sat, bright);
  if(horizontal != 0){
    line(lx, ly - size/2, lx, ly + size/2);
  } else if (vertical != 0){
    line(lx - size/2, ly, lx + size/2, ly);

    noStroke();
  }
}
