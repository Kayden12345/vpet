//Create variables here
var dog, dogHappy;
var Score = 0;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,400,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.1
  
}


function draw() {  

  background(46,139,87)
  drawSprites();
  //add styles here
  
  textSize(20);
  fill("white")
  text("Note: Click UP_ARROW to feed Drago milk!",50,30)
   
  textSize(20)
  fill("white")
  text("Score:" + Score, 200,250)

}
function keyPressed(){

  if(keyCode === UP_ARROW){
   Score++

   dog.addImage(dogHappy)
 }
}



