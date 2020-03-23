let x = 300;
let y = 300;
let d = 100;
let data = ["mango", "sandia", "litche", "mandarina"];
let counter = 0;

function setup() {
  createCanvas(600, 600);
  //background(220);
}

function draw() {
  // background(220);
}

function mousePressed() {
  newSize();
  newPos();
  display();
  showLabels();
  count();
}


function newSize() {
  d = random(100, 200);
}

function display() {
   noStroke();
  fill(random(100,255), random(100, 200), random(100, 255), 50);
  ellipse(x, y, d, d);
}


function count() {
 if (counter < data.length-1) {
   counter++;
   } else {
     counter =0;
   }
   
}

function showLabels() {
  textAlign(CENTER, CENTER);
  fill(random(100,255), random(100, 200), random(100, 255), 100);
  text(data[counter], x, y);
}

function newPos() {
  x = mouseX;
  y = mouseY;
}
