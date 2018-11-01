const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello there';
    }

    greet(data) {
        console.log(`${this.greeting} ${data}`);
        this.emit('greet', data);
    }
}

const greeter = new Timer();

greeter.on('greet', function(data) {
    console.log('Someone greeted '+ data);
});

greeter.greet('Ian');