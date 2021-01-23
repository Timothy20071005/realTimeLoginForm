class Game{

constructor(){                             
    
}

//memeber fun of class is called method

// to read  gameState: 0 from firebase
getState(){

    database.ref('gameState').on("value", (data)=>{
 
    // .val() is to read value from database
    // gameState of our app
    // data.val() is the value of firebase's gameState
        gameState = data.val();
    })
}

update(state){
    database.ref ('gameState').update ({
        gameState: state
    })
}

start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        
        //objectName = new CLassName();
        form = new Form ();
        form.display();

    }
}


}