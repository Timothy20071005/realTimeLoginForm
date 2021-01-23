class Form{                  
    
    constructor(){

    }

display(){
    var title = createElement('h2', 'Car Racing Game');
    title.position(130, 0);

    var input = createInput().attribute('placeholder', 'Name');
    input.position(130,160);

    var button = createButton('Play');
    button.position(250,200);

    //function (){} - anonumous function as an argument
    button.mousePressed(
        function(){
        input.hide ();        
        button.hide();

        //to store the value that you type in the input box
        var name = input.value();
        player.update(name);// to update name of player in firebase

        playerCount = playerCount + 1;
        player.updateCount(playerCount);// to update the count in firebase

        var greeting = createElement('h3','Hello '+name);
        greeting.position(130,160);
        }
    
    )


}
}              