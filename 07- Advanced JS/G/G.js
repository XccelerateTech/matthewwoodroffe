class Fish {
    constructor(type) {
        this.type = type;
    }
    lay_eggs() {
        return true;
    }
    can_swim() {
        return true;
    }
}

class Whale extends Fish {
    constructor(type) {
        super(type);
    }
    feed_milk() {
        return true;
    }
    lay_eggs() {
        return false;
    }
}

class Bird {
    constructor(type) {
        this.type = type;
    }
    can_fly() {
        return true;
    }
    lay_eggs() {
        return true;
    }
}

class Bat extends Bird{
    constructor(type) {
        super(type);
    }
    feed_milk() {
        return true;
    }
    lay_eggs() {
        return false;
    }
}

let birdy = new Bird("Sparrow");
let fishy = new Fish("Nemo");
let baty = new Bat("Bats");
let whaley = new Whale("Wut");

console.log(baty.can_fly());
console.log(baty.lay_eggs());
console.log(baty.feed_milk());