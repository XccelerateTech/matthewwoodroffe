class Monster {

    constructor(option){
        //initialize your stuff here
        this.health = 100;
        this.name = option.name;
    }

    wound(damage){
        //Here is where you can damage the monster
        this.health = this.health - damage;
    }
    hero(){
        while(this.health > 0) {
            let attack = (Math.floor(Math.random() * (20 - 5 + 1)) + 5);
            console.log(`Attack value is ${attack}`);
            this.wound(attack);
            console.log(this.name + "'s health is " + this.health);
            console.log("");
            if(this.health <= 0) {
                console.log(`${this.name} is dead`);
            }
        }
    }
}

let monster1 = new Monster({name: "Jim"});

monster1.hero();