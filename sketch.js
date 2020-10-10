
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bar1,bar2,bar3;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(30,640,50);
	

	ground = new Ground(800,650,1600,10);

	bar1 = new Bar(900,590,10,100);
	bar2 = new Bar(1200,590,10,100);
	bar3 = new Bar(1050,640,300,10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('teal');
  
  paper.display();

  ground.display();

  bar1.display();
  bar2.display();
  bar3.display();
  
  console.log(bar1);
  keyPressed();


  drawSprites();
 
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
	}
}


