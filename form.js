class Form {
    constructor(){

    }

    display(){
        var title=createElement('h2')
        title.html("Car Racing Game");
        title.position(150,0);

        var input = createInput("Name");
        var button= createButton("PLAY");
        var greeting = createElement('h3');
        input.position(150,150);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();

            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello"+ name);
            greeting.position(150,150);

        });
        


        
    }
}