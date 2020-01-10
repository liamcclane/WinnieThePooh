var pooh = {
    character: "Pooh",
    greet : function(){
        console.log("oh bother!")
    },
    item : "honey",
    itemLeftAtHouse : "Tigger's Stripes"
}
var pigglet = {
    character: "Pigglet",
    greet : function(){
        console.log("Oh d-d-d-dear, I wasn't expecting company!")
    }
}
var tigger = {
    character: "Tigger",
    greet : function(){
        console.log("The Wonderful thing about tiggers are tiggers are wonderful things")
    },
    // this is the item that belongs to them
    item : "Tigger's Stripes",
    // this is the item the player will pick up
    itemLeftAtHouse : "honey"
}
var bees = {
    character: "Bees",
    greet : function(){
        console.log("Buzz buzz buzzzzz")
    }
}
var owl = {
    character: "Owl",
    greet : function(){
        console.log("hooot hooot")
    }
}
var robin = {
    character: "Christopher Robin",
    greet : function(){
        console.log("Hello and Welcome I am chrisopherrobin")
    }
}
var rabbit = {
    character: "Rabbit",
    greet : function(){
        console.log("Don't touch my carrots")
    }
}
var gopher = {
    character: "Gopher",
    greet : function(){
        console.log("'Sup I am Gopher, I don't know what I should say")
    }
}
var kanga = {
    character: "Kanga",
    greet : function(){
        console.log("Why Hello dear, Roo says hello too")
    }
}
var eeyor = {
    character: "Eeyor",
    greet : function(){
        console.log("I'm depressed, I lost my tail")
    }
}
var hefalump = {
    character: "Hefalump",
    greet : function(){
        console.log("I'm an elephant,*pfft*")
    }
}

function northSouth(topP,bottomP){
    topP.south = bottomP;
    bottomP.north = topP;
}
function eastWest(leftP, rightP){
    leftP.east = rightP;
    rightP.west = leftP;
}


// tigger.north = pooh;
// pooh.south = tigger;
// pigglet.east = pooh;
// pooh.west = pigglet;


// all the east to west realationships
eastWest(eeyor,hefalump);

eastWest(owl,robin);
eastWest(robin,rabbit);
eastWest(rabbit,gopher);

eastWest(pigglet,pooh);
eastWest(pooh,bees);

// all the north to south relationships
northSouth(owl,pigglet);

northSouth(eeyor,kanga);
northSouth(kanga,robin);
northSouth(robin,pooh);
northSouth(pooh,tigger);

northSouth(rabbit,bees);

console.log(pooh);
console.log(robin);

pooh.friends = [pigglet,kanga,robin,eeyor];

var player1 = {
    location : tigger
}




function move(direction){
    if(player1.location[direction]) {
       player1.location = player1.location[direction] 
    } else {
        console.log(`you cannot go ${direction} anymore`)
    }
    // if(direction == "north"){
    //     // now we need to check if that direction exists
    //     if(player1.location.north){
    //         player1.location = player1.location.north
    //     } else {
    //         console.log("you cannot go north anymore");
    //     }
    // }
    
    // if(direction == "south"){
    //     if(player1.location.south){
    //         player1.location = player1.location.south
    //     } else {
    //         console.log("you cannot go south anymore");
    //     }
    // }
    
    // if(direction == "east"){
    //     if(player1.location.east){
    //         player1.location = player1.location.east
    //     } else {
    //         console.log("you cannot go east anymore");
    //     }
    // }
    
    // if(direction == "west"){
    //     if(player1.location.west){
    //         player1.location = player1.location.west
    //     } else {
    //         console.log("you cannot go west anymore");
    //     }
    // }
    
    console.log("You are now at "+ player1.location.character + "'s house.")
    player1.location.greet();

}
function pickUp(){
    // if your are tiggers house you'll pick up honey
    if(!player1.item || player1.item == "nothing"){
        
        player1.item = player1.location.itemLeftAtHouse

        // if(player1.location == tigger){
        //     player1.item = "honey"
        // }
        // if(player1.location == pooh){
        //     player1.item = "tigger's stripes"
        // }
        console.log("you have picked up the " + player1.item)
    } else {
        console.log("you already have something in your hands")
    }
}
function drop(){
    if(!player1.item || player1.item == "nothing"){
        console.log("you are not holding anything")
    } else {
        // got to check if the item matches with the players location
        if(player1.location.item == player1.item){
            console.log("Congradulations! you delieved the " + player1.item + " correctly")
            player1.item = "nothing"
        } else {
            console.log("OOps this isn't where the " + player1.item + " belongs")
        }
    }
}