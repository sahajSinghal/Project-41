const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var umbrella;

function preload(){
    
}

function setup(){
   createCanvas(displayWidth,displayHeight);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(displayWidth/10,displayHeight*5/6);

   Engine.run(engine);
}

function draw(){
    background("black");

    var maxDrops = 100;

    if(frameCount%20===0 && drops.length < maxDrops)
    {
        drops.push(new Drop(random(0,displayWidth), random(0,displayHeight/2)));
    }

    if(drops.length!== 0)
    {
        for(var l = 0; l < drops.length; l++)
        {
            drops[l].display();
            drops[l].update();
        }
    }

    umbrella.display();
}   

