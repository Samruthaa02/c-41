class Game{
    constructor(){}
 getState(){
     var gameStateRef=database.ref("gameState")
     gameStateRef.on("value",function(data){
         gameState=data.val();
     })
 }
 update(state){
    database.ref("/").update({
        gameState:state,
    });
 }
  async start(){
    if(gameState===0){
        player=new Player();
        var playerCountRef=await database.ref("playerCount").once("value");
        if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
        }
        form=new Form();
        form.display();
      }
    car1=createSprite(100,200);
    car1.addImage(car1img);
    car2=createSprite(300,200);
    car2.addImage(car2img);
    car3=createSprite(500,200);
    car3.addImage(car3img);
    car4=createSprite(700,200);
    car4.addImage(car4img);
    cars=[car1,car2,car3,car4];
 
    }

play(){
    form.hide();
    textSize(30);
    //text("Game Start",120,100);
    Player.getplayerinfo();
    player.getFinishedPlayers();

    if(allPlayers!==undefined){
        background(rgb(198,135,103));
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
       // var display_position=130;
        var index=0;
        var x=250;
        var y;

    for(var plr in allPlayers){
        x=x+200;
        index=index+1;
        y=displayHeight-allPlayers[plr].distance
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index===player.index){
           stroke(30);
           fill("blue");
           ellipse(x,y,75,75);
           cars[index-1].shapeColor="red";
           camera.position.x=displayWidth/2;
           camera.position.y=cars[index-1].y;

        }
        else{
            cars[index-1].shapeColor="black";
        }

    //display_position=display_position+20;
    textSize(25);
    textAlign(CENTER);
    text(allPlayers[plr].name,cars[index-1].x,cars[index-1].y+75)

    }
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null&&passedFinished===false){
        player.distance=player.distance+50;
        player.update();
    }
    if(player.distance>4150&&passedFinished===false){
        player.rank=finishedPlayers;
        Player.updatefinishedPlayers();
        player.update();
        passedFinished=true;

    }
    drawSprites();
}
displayRank(){
    Player.getplayerinfo();
    textSize(50);
    textAlign(CENTER);
    fill("blue")
    for(var plr in allPlayers){
        if(allPlayers[plr].rank===1){
            text("FIRST RANK: "+allPlayers[plr].name,500,100);
        }
        else if(allPlayers[plr].rank===2){
            text("SECOND RANK: "+allPlayers[plr].name,530,200);
        }
       else if(allPlayers[plr].rank===3){
            text("THIRD RANK: "+allPlayers[plr].name,508,300);
        }
        else{
            text("FOURTH RANK: "+allPlayers[plr].name,530,400);
        }
    }
}


}