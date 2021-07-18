const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png","sunrise2.png","sunrise3.png",
    "sunrise4.png","sunrise5.png","sunrise6.png","sunset7.png","sunset8.png",
    "sunset9.png","sunset10.png","sunset11.png","sunset12.png");

   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    // add condition to check if any background image is there to add
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch(worldtimeapi.org/api/timezone/Asia/Kolkata);
    //change the data in JSON format
    var responseJSON = await response.json();
    console.log(response)
    // write code slice the datetime
    var datetime= response.json(datetime);
    console.log(datetime);
    hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=3 && hour<=4){
        backgroundImg = "sunrise1.png";
     }
     else if(hour>=5 && hour<=6){
         backgroundImg = "sunrise2.png";
     }
     else if(hour>=6 && hour<=7){
         backgroundImg = "sunrise3.png";
     }
     else if(hour>=8 && hour<=9){
         backgroundImg = "sunrise4.png";
     }
     else if(hour>=10 && hour<=11){
         backgroundImg = "sunrise5.png";
     }
     else if(hour>=12 && hour<=13){
         backgroundImg = "sunrise6.png";
     }
     else if(hour>=14 && hour<=15){
         backgroundImg = "sunset7.png";
     }
     else if(hour>=16 && hour<=17){
         backgroundImg = "sunset8.png";
     }
     else if(hour>=18 && hour<=19){
         backgroundImg = "sunset9.png";
     }
     else if(hour>=20 && hour<=21){
         backgroundImg = "sunset10.png";
     }
     else if(hour>=22 && hour<=23){
         backgroundImg = "sunset11.png";
     }
     else{
         backgroundImg = "setset12.png";
     }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(backgroundImg);
}
