const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;
var score = 0
var ground;
var box2;
function preload (){
    polygonImage=loadImage("polygon.png")
   
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(500,390,1000,20)
    ground1 = new Ground(390,300,250,10)
    
    box3 = new Box(330,235,30,40)
    box4 = new Box(360,235,30,40);
    box5 = new Box(390,235,30,40);
    box6 = new Box(420,235,30,40);
    
    box7 = new Box(450,195,30,40);
    box8 = new Box(360,195,30,40);
    box9 = new Box(420,195,30,40);
    box10 = new Box(390,195,30,40);
    
    box11 = new Box(390,155,30,40)
    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingShot = new SlingShot(this.polygon,{x:100,y:200})
}


function draw(){
    background(0);
    Engine.update(engine);
    textSize(40)
    text ("SCORE:"+score,750,40)

    
   ground.display();
   
   fill ("yellow")
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   fill("red")
   box8.display();
   box9.display();
   box10.display();
   fill ("blue")
   box11.display();
   ground1.display();
   image(polygonImage,polygon.position.x,polygon.position.y,40,40)
   slingShot.display();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();
   box8.score();
   box9.score();
   box10.score();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
 }
 function mouseReleased(){
     slingShot.fly()
 }
 function keyPressed(){
     if(keyCode===32){
         slingShot.attach(this.polygon)
     }
 }