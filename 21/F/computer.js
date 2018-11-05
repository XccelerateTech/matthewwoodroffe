let events = require('events');
let util = require('util');

let Computer = function(something) {
    this.something = something;
}

util.inherits(Computer, events.EventEmitter);

