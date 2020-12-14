var object0
var object1



function setup() {
  createCanvas(800,400);
 object0 = createSprite(200, 200, 50, 50);
 object0.shapeColor = "light green";
 object0.velocityX = 0.9
 object1 = createSprite(400, 200, 50, 50);
 object1.shapeColor = "yellow";
 object1.velocityX = -0.9





}

function draw() {
  background(0,0,0);  
if(object0.x - object1.x < object0.width/2 + object1.width/2 && 
  object1.x - object0.x < object0.width/2 + object1.width/2
   ) {
     object0.velocityX = object0.velocityX * (-1);
     object1.velocityX = object1.velocityX * (-1);
     object0.shapeColor = "purple";
     object1.shapeColor = "purple";


}

  drawSprites();





}

