class Player{
    constructor(){
        this.distance=0;
        this.playerName=null;
        this.index=null;
        this.rank=0;
    }

    getCount(){
        var playerCountRef=database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
             playerCount=data.val();
        })
    }
    getFinishedPlayers(){
        var finishedRef=database.ref("finishedPlayers");
        finishedRef.on("value",(data)=>{
            finishedPlayers=data.val();
        })
    }
    updateCount(count){
         database.ref("/").update({
             playerCount:count
         });

    }
    update(){
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.playerName,
            distance:this.distance,
            rank:this.rank,
        });
    }
    static getplayerinfo(){
        var playerinforef=database.ref("players")
        playerinforef.on("value",(data)=>{
            allPlayers=data.val();

        })
        
    console.log(allPlayers);

    }
    static updatefinishedPlayers(){
       database.ref("/").update({
        finishedPlayers:finishedPlayers+1,
          
       }) 
       this.rank=this.rank+1;
    }
}