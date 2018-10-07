class FlyerParts {
    constructor() {
    }
    can_fly() {
        return true;
    }
}

class SwimParts {
    constructor() {
    }
    can_swim() {
        return true;
    }
}


class Fish {
    constructor(type) {
        this.type = type;
        this.fish = new SwimParts;
    }
    lay_eggs() {
        return true;
    }
    can_swim() {
        return this.fish.can_swim();
    }

}

class Whale {
    constructor(type) {
        this.type = type;
        this.fish = new SwimParts;
    }
    feed_milk() {
        return true;
    }
    can_swim() {
        return this.fish.can_swim();
    }
}

class Bird {
    constructor(type) {
        this.type = type;
        this.bird = new FlyerParts;
    }
    lay_eggs() {
        return true;
    }
    can_fly() {
        return this.bird.can_fly();
    }
}

class Bat {
    constructor(type) {
        this.type = type;
        this.Bat = new FlyerParts;
    }
    feed_milk() {
        return true;
    }
    can_fly() {
        return this.Bat.can_fly();
    }
}

let baty = new Bat("Mammal");
let birdy = new Bird("Sparrow");
let whaley = new Whale("Wut");
let fishy = new Fish("Nemo");


console.log(baty);
console.log(baty.can_fly());
console.log(birdy);
console.log(birdy.can_fly());
console.log(whaley);
console.log(whaley.can_swim());
console.log(fishy);
console.log(fishy.can_swim());