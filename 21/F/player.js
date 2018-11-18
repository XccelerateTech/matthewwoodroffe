let events = require('events');
let util = require('util');

let Player = function(something) {
    this.something = something;
}

util.inherits(Player, events.EventEmitter);

