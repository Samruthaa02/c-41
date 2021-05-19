class Form{
    constructor(){
        this.input=createInput("");
        this.title=createElement("h2");
        this.button=createButton("PLAY");
        this.greeting=createElement("h2");
        this.reset=createButton("reset");

    }
   display(){
       
      // var title=createElement("h2");
       this.title.html("CAR RACING GAME");
       this.title.position(displayWidth/2+200,0);
       
      // var input=createInput("");
      this.input.attribute("placeholder","NAME")
      this.input.position(displayWidth/2+200,displayHeight/2);
      this.input.size(300,30);
       
      // var button=createButton("PLAY");
      this.button.position(displayWidth/2+290,displayHeight/2+100)
      this.button.size(100,50);

      this.reset.position(displayWidth-100,20);
      this.reset.size(100,50)

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        
          var name=this.input.value();
          var name1=name.toUpperCase();
          player.playerName=name1
           
          // player.playerName=player.playerName.toUpperCase();
           
           playerCount=playerCount+1;
           player.index=playerCount;
           player.update();
           player.updateCount(playerCount);

          // var greeting=createElement("h2");
          this.greeting.html("HELLO "+player.playerName)
          this.greeting.position(displayWidth/2+250,displayHeight/2)
       })
       this.reset.mousePressed(()=>{
         player.updateCount(0);
         game.update(0);
         database.ref("/").update({
          finishedPlayers:0,
           players:null,
         })
       })

       

       
   }
 hide(){
     this.greeting.hide();
     this.button.hide();
     this.input.hide();
    
 }

}