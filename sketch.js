var wall
var car
var weight
var speed
var deformation

function setup() {
  createCanvas(800,400);
    speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(40,200,38,38)
  car.shapeColor = color(255,255,255)
  car.velocityX = speed

  wall = createSprite(650,200,30,height/2)

  deformation = (0.5 * weight * speed * speed)/22500
}

function draw() {
  background("black"); 
  
  if (car.x - wall.x < car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 &&
    wall.y - car.y < car.height/2 + wall.height/2 && 
    car.y - wall.y < car.height/2 + wall.height/2)
    {
      car.velocityX = 0;
    if (deformation < 100) {
    car.shapeColor = color(0,255,0)
    }else if(deformation > 99 && deformation < 181){
      car.shapeColor = color(230,230,0)
    }else if(deformation > 180){
      car.shapeColor = color(255,0,0)
    }  
    }
  drawSprites();
}
