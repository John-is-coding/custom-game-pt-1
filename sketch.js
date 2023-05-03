var monkey, monkey_run_animation
var backgroundImg, bg
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2)
  bg.addImage(backgroundImg)
  bg.scale = 7
  monkey = createSprite(300,500,50,50)
  monkey.addAnimation("running", monkey_run_animation)
  monkey.scale = 2


}

function draw() 
{
  
  background("white");
  drawSprites()

}

function preload() {
  monkey_run_animation = loadAnimation("assests/m1.png","assests/m2.png","assests/m3.png","assests/m4.png")
  backgroundImg = loadImage("assests/background.jpeg")


}