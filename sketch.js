
//UI components declare
let gui;
var backgroundColour = "#000000";
var theTextColour = [0, 255, 0];
var theText = "Type some text here";
var theTextSize = 14;

//video input declare
let video;

//copy function


function setup() {
  const w = windowWidth- 160;
  const h = windowHeight -160;
  createCanvas(w, h);
  background(backgroundColour);
  gui = createGui('Change the background colour');
  gui.addGlobals('backgroundColour', "theText", "theTextColour", "theTextSize");
  
 
  //buffer canvas
  cnv = createGraphics(w,h);
   //video input setup
   video = createCapture(VIDEO);
   video.size(640, 480);
   video.hide();
 
}

function draw() {
  image(video,0,0);
  noStroke();
  fill(theTextColour);
  textSize(theTextSize);
  text(theText, mouseX, mouseY);
  
}




