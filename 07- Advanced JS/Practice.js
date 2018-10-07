class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    printDetails () {
        console.log(this.name, this.age);
    }
}

var student = new Student ("Bob", 25);
var student1 = new Student ("Rich", 27);

student.printDetails();
student1.printDetails();

class Monster {
    constructor(eyeColour, hairColour, height, name, age) {
        this.eyeColour = eyeColour;
        this.hairColour = hairColour;
        this.height = height;
        this.name = name;
        this.age = age;
        this.hero = function(num) {
            console.log(num + 4);
        }
    }
}

var monster1 = new Monster ("green","blue","Ten m","Gib",1243);
var monster2 = new Monster();

console.log(monster1);

monster1.hero(6);
monster2.hero(6);

var dog = {
    eyeColour: "Brown",
    earLength: "Long",
    legLength: "Short",
    breed: "Toy Poodle",
    ageInDogYears: function(humanAge) {
        return humanAge * 7;
    },
}

console.log("My dogs age in dog years is " + dog.ageInDogYears(5));

var squared = function(num) {
    return num * num;
}

class Maths {
    squared(num) {
        return num * num;
    }
}

var result = new Maths;

console.log(squared(3));
console.log(result.squared(2));



var food = {
    init: function(type) {
        this.type = type;
    },
    eat: function() {
        console.log('you ate the ' + this.type);
    },
}

food.init('cheese');
food.eat();

food.init('toast');

const waffle = Object.create(food);
const carrot = Object.create(food);


console.log(food);
console.log(waffle);