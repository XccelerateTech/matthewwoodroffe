let events = require('events');
let util = require('util');

let Referee = function(something) {
    this.something = something;
}

util.inherits(Referee, events.EventEmitter);

