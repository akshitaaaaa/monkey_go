var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

  ground=createSprite(400,350,900,10);
  ground.velocityX = -2;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  
}


function draw() {
   background ("white");
  
  stroke("white");
  textSize = (20);
  fill("white");
  text("Score:"+ score,500,50);
  
  stroke("black");
  
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,100,50);
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  // adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  spawnbanana();
  
  spawnobstacle();
  
  monkey.collide(ground);
  drawSprites();
}
 function spawnobstacle(){
if (frameCount % 300 === 0){
   var obstacle = createSprite(400,331,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3;
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   }
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana= createSprite(290,550,40,10);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 134;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
  
  
    }
  }





