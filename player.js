class Player{
    constructor(){

    }
    
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
        playerCount= data.val()
        })
    }

    updateCount(count){
        database.ref("playerCount").update({
        'playerCount': count
        })
        
    }

    update(name){
        var playerIndex = "player" + playerCount
        database.ref(playerIndex).set(
            {
                name: name
            } 
        )
    }
    
  
}