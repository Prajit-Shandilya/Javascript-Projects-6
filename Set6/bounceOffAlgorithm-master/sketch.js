var fixedRect, movingRect;
var ball1,ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball1=createSprite(200,10,50,50);
  ball2=createSprite(200,1190,50,50);

 
  ball2.velocityY = -5;
  ball1.velocityY = 5;
}

function draw() {
  background(0,0,0);  

movingRect.x=World.mouseX;
movingRect.y= World.mouseY;

 if(istouching(movingRect,fixedRect)){
  movingRect.shapeColor="Red";
  fixedRect.shapeColor="Red";
 }else{
   movingRect.shapeColor="Green";
   fixedRect.shapeColor="Green";
 }
  
  Bounce(ball1,ball2);
  drawSprites();
}