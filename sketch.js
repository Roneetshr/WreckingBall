const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground;
var box1,box2,box3,box4,box5,box6;
var ball;
var rope;


function setup(){
createCanvas(3000,800)
engine=Engine.create();
world= engine.world;

ground=new Ground(600,500,1200,20);
box1=new Box(900,400,70,70);
box2=new Box(830,400,70,70)
box3=new Box(760,400,70,70)
box4=new Box(870,330,70,70)
box5=new Box(800,330,70,70)
box6=new Box(830,260,70,70)
ball=new Ball(200,500,80,80);
rope=new Rope(ball.body,{x:530,y:80})

}



function draw(){
background("black")
Engine.update(engine)

ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
ball.display();
rope.display();
   
}


function mouseDragged(){

Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

    
}