
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
	engine = Engine.create();
	world = engine.world;


	ground1 = new Ground(240,800,480,20);
	ground2 = new Ground(480,400,20,800);
	ground3 = new Ground(0,400,20,800);
	ground4 = new Ground(240,0,480,20);

	div1 = new Divisions(240,787,475,15);
	div2 = new Divisions(10,595,5,400);
	div3 = new Divisions(156,595,5,400);
	div4 = new Divisions(312,595,5,400);
	div5 = new Divisions(468,595,5,400);

	p1 = new Plinko(20,600,10)

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  div1.display();
  div2.display();
  div3.display();
  div4.display();
  div5.display();

  p1.display();

  drawSprites();
 
}



