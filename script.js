
/*
YOUR SKETCH GOES HERE
*/
let cnv;
let zoomBy = 1;
let xOffset = 0;
let yOffset = 0;
let mx = 0;
let my = 0;

let w = 500;
let h = 500;


function setup() {
  cnv = createCanvas(w, h);
  cnv.parent('sketch-holder');
  frameRate(30);    
  windowResized();

}

function draw() {
  background(250)
  ellipse(w/2,h/2,50,50);
  line(0,my,h,my);
  line(mx,0,mx,w);

}

function mouseClicked() {
 mx = winMouseX / zoomBy - xOffset / zoomBy;
 my = winMouseY / zoomBy - yOffset / zoomBy;

}

function mouseDragged() {
 mx = winMouseX / zoomBy - xOffset / zoomBy;
 my = winMouseY / zoomBy - yOffset / zoomBy;
}

function mouseMoved() {
 mx = winMouseX / zoomBy - xOffset / zoomBy;
 my = winMouseY / zoomBy - yOffset / zoomBy;
}



function windowResized() {
  //zoomBy = (windowWidth / windowHeight + w/h < windowHeight / windowWidth) ? windowWidth / w : windowHeight / h;
  zoomBy = windowWidth > windowHeight ? windowHeight / h : windowWidth / w;
  cnv.style("zoom", zoomBy);
  xOffset = document.getElementById("sketch-holder").offsetLeft;
  yOffset = document.getElementById("sketch-holder").offsetTop;

}
