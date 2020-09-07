var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="red"
  movingRect = createSprite(10, 10, 30, 30);
  movingRect.shapeColor="blue"
}

function draw() {
  background(255,255,255); 
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  console.log(movingRect.x - fixedRect.x );
  console.log((movingRect.width + fixedRect.width)/2);

  if(movingRect.x - fixedRect.x  <= (movingRect.width + fixedRect.width)/2
  && fixedRect.x - movingRect.x  <= (movingRect.width + fixedRect.width)/2
  && fixedRect.y - movingRect.y <= (movingRect.width + fixedRect.width)/2
  && movingRect.y - fixedRect.y <= (movingRect.width + fixedRect.width)/2
  ){

    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }else{
    fixedRect.shapeColor="red";
    movingRect.shapeColor="blue";
  }

  drawSprites();
}