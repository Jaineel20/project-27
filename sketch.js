
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,sling1,sling2,sling3,sling4,sling5;

function preload()
{
	
}

function setup() {
	createCanvas(1300,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob (300,350,50);
	bobObject2 = new Bob (350,350,50);
	bobObject3 = new Bob (400,350,50);
	bobObject4 = new Bob (450,350,50);
	bobObject5 = new Bob (500,350,50);
	roof = new Roof(400,200,300,20);
    sling1 = new Rope(bobObject1.body,roof.body,-50*2,0);
	sling2 = new Rope(bobObject2.body,roof.body,-25*2,0);
	sling3 = new Rope(bobObject3.body,roof.body,0*2,0);
	sling4 = new Rope(bobObject4.body,roof.body,25*2,0);
	sling5 = new Rope(bobObject5.body,roof.body,50*2,0);

	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.run(engine);
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

	}
}


