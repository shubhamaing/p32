const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7,
    box8, box9, box10, box11, box12, box13, box14, 
    box15, box16, box17, box18, box18, box19, box20, box21,
    box22, box23, box24, box25,
    box26, box27, box28, box29, box30, box31, box32,
    box33, box34, box35, box36, box37, box38, box39, box40;

var shooter;
var sling;
var backgroundImg;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  getTime();

  ground1 = new Ground(970,550,250,15);
  ground2 = new Ground(640,370,200,15)
  ground3 = new Ground(600,590,1200,15);

  box1 = new Box(890,510);
  box2 = new Box(915,510);
  box3 = new Box(940,510);
  box4 = new Box(965,510);
  box5 = new Box(990,510);
  box6 = new Box(1015,510);
  box7 = new Box(1040,510);

  box8 = new Box(900,460);
  box9 = new Box(925,460);
  box10 = new Box(950,460);
  box11 = new Box(975,460);
  box12 = new Box(1000,460);
  box13 = new Box(1025,460);

  box14 = new Box(910,415);
  box15 = new Box(935,415);
  box16 = new Box(960,415);
  box17 = new Box(985,415);
  box18 = new Box(1010,415);

  box19 = new Box(920,370);
  box20 = new Box(945,370);
  box21 = new Box(970,370);
  box22 = new Box(995,370);

  box23 = new Box(930,325);
  box24 = new Box(955,325);

  box25 = new Box(940,280);

  box26 = new Box(580,340);
  box27 = new Box(605,340);
  box28 = new Box(630,340);
  box29 = new Box(655,340);
  box30 = new Box(680,340);

  box31 = new Box(595,295);
  box32 = new Box(620,295);
  box33 = new Box(645,295);
  box34 = new Box(670,295);

  box35 = new Box(610,250);
  box36 = new Box(635,250);
  box37 = new Box(660,250);

  box38 = new Box(625,205);
  box39 = new Box(650,205);

  box40 = new Box(640,160);

  shooter = new Shooter(150,200,5,15);

	SlingShot= new SlingShot(shooter.body,{x:150, y:200});


}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  Engine.update(engine);
  text(mouseX +","+ mouseY,50,50 );

  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();

  box23.display();
  box24.display();

  box25.display();

  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();

  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();

  shooter.display();
  SlingShot.display();

  if((SlingShot.speed)<3){
    SlingShot.display();
  }else{
    World.remove(world,SlingShot);
}
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  SlingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    SlingShot.attach(shooter.body);
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour >= 06 && hour <=18 ){
      bg = "bg.png";
  }else{
      bg = "bg2.jpg";
  }
  backgroundImg = loadImage(bg);
}