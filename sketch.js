var maxDrops=100;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops=[];
var umbrella, night, thunder, thunder1, thunder2, thunder3, thunder4;
var thundercreatedframe=0;
var rand;


function preload(){
    night = loadImage('images/night.jpg');
    thunder1 = loadImage('images/thunderbolt/thunder 1.png');
    thunder2 = loadImage('images/thunderbolt/thunder 2.png');
    thunder3 = loadImage('images/thunderbolt/thunder 3.png');
    thunder4 = loadImage('images/thunderbolt/thunder 4.png');
}

function setup(){
createCanvas (500, 500) 
    engine=Engine.create();
    world=engine.world;
    
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0, 400), random(0, 400), random (0, 400)));
    }

    umbrella = new Umbrella(200, 350);
}

function draw(){

    Engine.update(engine);
    background (night);

    rand = Math.round(random(1, 4));
    if(frameCount%80===0){
        thundercreatedframe = frameCount;
        thunder = createSprite(random(10, 350), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default:break;
        }

        thunder.scale = 0.7;
    }

    if (thundercreatedframe+10 === frameCount && thunder){
        thunder.destroy()
    }

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

