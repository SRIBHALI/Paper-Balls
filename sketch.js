
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(520,460,1100,20);
    ground2 = new Ground(700,400,20,100);
	ground3 = new Ground(900,400,20,100);
	ball = new Ball(200,100, 15);
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 ground.display()
 ground2.display()
 ground3.display()
 ball.display()

  drawSprites();
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(ball.body, ball.body.position, {x: 35,y: -35})
    }
  }

