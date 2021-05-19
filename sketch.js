var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var finishedPlayers=0;
var passedFinished=false;

function preload(){
  car1img=loadImage("images/car1.png")
  car2img=loadImage("images/car2.png")
  car3img=loadImage("images/car3.png")
  car4img=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
}


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight-10);
  game= new Game();
  game.getState();
  game.start();

}

  

function draw(){
  background("white")

  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
  if(finishedPlayers===4){
    game.update(2);
  }
  if(gameState===2&&finishedPlayers===4){
    game.displayRank();
  }
  console.log(game.gameState)
}
