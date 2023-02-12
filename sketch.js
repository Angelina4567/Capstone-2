
function preload(){
  bg=loadImage("back.png")
  ob = loadImage("obstacle.png")
  ch = loadImage("character.png")
    
}

function setup() {
 
createCanvas(700,400);
b = createSprite(350,200,1400,400)
b.scale=3
b.addImage(bg)
b.velocityX=-3

c = createSprite(20,360,20,20)
c.addImage(ch)
c.scale = 0.2
edges=createEdgeSprites()
}

function draw() {
 background("green")
 if(b.x<0){
 b.x=700
 }

 if(keyDown("space")){
    c.velocityY = -4
 }
 c.velocityY += 0.5

 drawSprites();
}