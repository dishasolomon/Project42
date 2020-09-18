var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle; 

function setup() {
  createCanvas(400,400);

  hr = hour();
  mn = minute();
  sc = second();

}

function draw() {
  background(0); 

  //text("Current hour:" + hr, 50,50);
  
  hrAngle = map(hr,0,23,0,360);
  mnAngle = map(mn,0,59,0,360);
  scAngle = map(sc,0,59,0,360);

  stroke(255,0,0);
  strokeWeight(7);

  line(200,200,100,300);
  translate(30,30);
  //rotate(angle);

  stroke(0,255,0);
  strokeWeight(3);
  text("Current seconds: " + sc,200,300);

  angleMode(DEGREES);

  console.log(sc);
  drawSprites();
}