var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var barcelonaPlayers = players.filter(function(player) {
    return player.club === 'FC Barcelona';
});

console.log(barcelonaPlayers);

var playerNamesArr = players.map(function(p) {
    return p.name;
});

console.log(playerNamesArr);

// for (var i = 0; i < players.length; i++) {
    // playerNames.push(players.name);
// }

