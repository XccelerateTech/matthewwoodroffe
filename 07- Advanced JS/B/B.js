function Player(name) {
    this.name = name;
    this.health = 100;
    this.attack = function attack(opposition) {
        opposition.health -= 10;
    }
}

var player1 = new Player("Jim");
var player2 = new Player("Bob");

function playerAttacks() {
    var player1RandomNumber = Math.random();
    var player2RandomNumber = Math.random();
    if(player1RandomNumber > player2RandomNumber) {
        player1.attack(player2);
        console.log(player1.name + " won this round");
    } else if (player2RandomNumber > player1RandomNumber) {
        player2.attack(player1);
        console.log(player2.name + " won this round");
    } else if (player1RandomNumber == player2RandomNumber) {
        console.log("No-one attacked");
    }
}

function whoWins() {
    while(player1.health > 0 && player2.health > 0) {
        playerAttacks();
    }
    if(player1.health <= 0) {
        console.log("player2 wins");
    } else if (player2.health <= 0) {
        console.log("player1 wins");
    }
}

whoWins();

console.log(player1);
console.log(player2);