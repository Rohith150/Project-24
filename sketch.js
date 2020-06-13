var paper,ground,bin1,bin2,bin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,600,50)
	bin1 = new Bin(600,640,200,20)
	bin2 = new Bin(500,600,20,100)
	bin3 = new Bin(690,600,20,100)

	//Create a Ground
	ground = new Ground(400,650,800,10)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:385, y:-385});
	}
}