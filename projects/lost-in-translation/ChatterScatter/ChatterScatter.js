var mouseDistX = 0;
var mouseDistY = 0;
var noiseScale = 0.02;
var centX = 0;
var centY = 0;
var connect = 5;
var scatterX = mouseDistX;
var scatterY = mouseDistY;
const cubeX = 500;
const cubeY = 500;
let scatterMult = [];
let weirdSet = [];
let cubes = [];
var t;
let snow = [];
var color1 = 0;
var color2 = 0;
var color3 = 0;
var colorBG = 150;
var colorThreshold = 25;
var word = "Nothing";
var wordSelect = 0;
var xTextOffset = 200;

class Square {
  constructor(xOff, yOff, scatterMultX, scatterMultY, weird){
    this.xOff = xOff;
    this.yOff = yOff;
    this.scatterMultX = scatterMultX;
    this.scatterMultY = scatterMultY;
    this.weird = weird;
    this.size = 25;
  }
}

class Snowflake {
  constructor(){
    this.xPos = 0;
    this.yPos = random(-50, 0);
    this.angleStart = random(0, 2 * PI);
    this.size = random(3, 9);
    
    this.radius = sqrt(random(pow(width/2, 2)));
  }
  
  update(time){
    let w = 0.25;
    let angle = w * time + this.angleStart;
    this.xPos = width/2 + this.radius * sin(angle);
    this.yPos += pow(this.size, 0.5);
    
    if (this.yPos > height){
      let index = snow.indexOf(this);
      snow.splice(index, 1);
    }
  }
  
  display(){
    ellipse(this.xPos, this.yPos, this.size);
  }
  
}

function setup() {
  createCanvas(1000, 1000);
  background(150);
  noStroke();
  
  noiseVal = noise(mouseX * noiseScale, mouseY * noiseScale);
  rad = noiseVal * 450;
  t = random(0, TWO_PI);
  centX = rad * cos(t) + cubeX;
  centY = rad * sin(t) + cubeY;
  console.log('Core Point Fixed');
 
  for(i = 0; i < 50; i++){
    scatterMult[i] = random(-1.5, 1.5);
    
    if(scatterMult[i] == 0){
      scatterMult[i] = random(-1.5, 1.5);
    }
    
    console.log('Generating Scatter Multipliers: ' + str(int(100 * (i / 50))) + '%');
  }
  
  for(i = 0; i < 25; i++){
    weirdSet[i] = random(1, 10);
    console.log('Generating Weird Values: ' + str(int(100 * (i / 25))) + '%');
  }
  
  i = 0;
  while(i < 25){
    for(j = 0; j < 5; j++){
      for(k = 0; k < 5; k++){
        cubes[i] = new Square(50 - (25 * j), 50 - (25 * k), scatterMult[2 * i], scatterMult[2 * i + 1], weirdSet[i]);
      
        console.log('Generated Square:' + str(j) + ', ' + str(k));
        i++;
      
      
        console.log('Assigning Values to Squares: ' + str(int(100 * (i / 25))) + '%');
      }
    }
  }
  
  wordSelect = int(random(0, 7));
  //wordSelect = 6;
  switch(wordSelect){
    case 0:
      word = "Noise";
      xTextOffset = 340;
      break;
      
    case 1:
      word = "Scatter";
      xTextOffset = 290;
      break;
      
     case 2:
       word = "Nonsense";
       xTextOffset = 270;
       break;
       
     case 3:
       word = "Irrational";
       xTextOffset = 220;
       break;
       
     case 4:
       word = "Flux";
       xTextOffset = 390;
       break;
       
     case 5:
       word = "Chaos";
       xTextOffset = 340;
       break;
       
     case 6:
       word = "Capricious";
       xTextOffset = 260;
       break;
       
     default:
       word = "Nothing";
       xTextOffset = 200;
       break;
    
  }
  console.log("Word Index: " + str(wordSelect));
  console.log("Word Selected: " + word);
  
  color1 = int(random(0, 256));
  while (color1 + colorThreshold > colorBG && color1 - colorThreshold < colorBG){
    color1 = int(random(0, 256));
  }
  console.log("Cube Color: " + str(color1));
  
  color2 = int(random(0, 256));
  while (color2 + colorThreshold > colorBG && color2 - colorThreshold < colorBG){
    color2 = int(random(0, 256));
  }
  console.log("Snow Color: " + str(color2));
      
  color3 = int(random(0, 256));
  while (color3 + colorThreshold > colorBG && color3 - colorThreshold < colorBG){
    color3 = int(random(0, 256));
  }
  console.log("Text Color: " + str(color3));
  
}


function draw() {
  background(colorBG);
  t = frameCount / 2;
  y = frameCount / 60;
  
  /*
  text(str(rad), 20, 10);
  text(str(t), 20, 20);
  text(str(centX), 20, 30);
  text(str(centY), 20, 40);
  text(str(mouseDistX), 20, 50);
  text(str(mouseDistY), 20, 60);
  ellipse(centX, centY, connect);
  */
  
  mouseDistX = (centX + connect / 2) - mouseX;
  mouseDistY = (centY + connect / 2) - mouseY;
  
  if (abs(mouseDistX) < connect && abs(mouseDistY) < connect){
    scatterX = 0;
    scatterY = 0;
  } else {
    scatterX = mouseDistX;
    scatterY = mouseDistY;
  }
  
  fill(color2);
  for(i = 0; i < random(5); i++){
    snow.push(new Snowflake());
  }
  
  for(let snowflake of snow){
    snowflake.update(t);
    snowflake.display();
  }
  
  fill(color1);
  for (k = 0; k < 25; k++){
    if (cubes[k].weird < 5){
      square(cubeX + cubes[k].xOff + (cubes[k].scatterMultX * scatterX), cubeY + cubes[k].yOff + (cubes[k].scatterMultY * scatterY), 25);
    } else {
      square(cubeX + cubes[k].xOff + (cubes[k].scatterMultX * scatterY), cubeY + cubes[k].yOff + (cubes[k].scatterMultY * scatterX), 25);
    }
  }
  
  fill(color3);
  textSize(90);
  for(i = 0; i < word.length; i++){
    text(word.charAt(i), xTextOffset + 50 * i, 100 * sin((2 * PI) * y + (i/10) * PI) + 400);
  }
  
}
