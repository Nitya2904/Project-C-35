var bkImg;
var balloon,balloonImg,balloonPosition;
var database;


balloonPosition=database.ref('balloon/height');
balloonPosition.on("value",readPosition, showError);

function preload(){
bkImg=loadImage("images/Hot Air Ballon-01.png");
balloonImg=loadImage("images/Hot Air Ballon-02.png");
}
function setup() {
  createCanvas(1000,500);
  balloon=createSprite(80, 370, 50, 50);
  balloon.addImage(balloonImg);
  balloon.scale=balloon.scale-0.5;
}

function draw() {
  background(bkImg);
  textSize(30);
  textFont("georgia");
  stroke("yellow");
  strokeWeight("3");
  fill("blue")
  text("Use arrow keys to move the Hot Air Balloon",10,30);
  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
    
   }
   else if(keyDown(RIGHT_ARROW)){
   balloon.x=balloon.x+10;
  }
   else if(keyDown(UP_ARROW)){
   balloon.y=balloon.y-10
   balloon.scale=balloon.scale-0.1
   }
   else if(keyDown(DOWN_ARROW)){
   balloon.y=balloon.y+10;
   balloon.scale=balloon.scale+0.1
   }
 


  drawSprites();
}
function updateHeight(){
  database.ref('balloon/height').set({
    'x': height.x+x,
    'y': height.y+y
  })
}
function readHeight(){
  database.val();
  balloon.x=height.x;
  balloon.y=height.y;
}
function showError(){
  console.log("Errow in writing to the database");
}