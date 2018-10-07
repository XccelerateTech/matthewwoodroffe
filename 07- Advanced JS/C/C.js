function Gambler() {
    this.cash = 100;
    this.probability = function probability() {

        let bet = Math.round(Math.random() * 100);

        console.log(bet + ": This is the bet amount");
    
        var arr01 = [1,1,1,1,1,1,1,1,1,10];
        var arr02 = [1,1,1,1,1,1,1,1,10,10];
        var arr03 = [1,1,1,1,1,1,1,10,10,10];
        var arr04 = [1,1,1,1,1,1,10,10,10,10];
        var arr05 = [1,1,1,1,1,10,10,10,10,10];
        var arr06 = [1,1,1,1,10,10,10,10,10,10];
        var arr07 = [1,1,1,10,10,10,10,10,10,10];
        var arr08 = [1,1,10,10,10,10,10,10,10,10];
        var arr09 = [1,10,10,10,10,10,10,10,10,10];
    
        var randomNumber = Math.random();
        console.log(randomNumber + ": This is the randomNumber");
    
        randomArrNumber = Math.round(Math.random() * 10);
        console.log(randomArrNumber + ": This is the randomArrNumber");
            
        if(randomNumber < 0.2) {
            console.log(arr01[randomArrNumber] + ": This is the random number selected from the array");
            if (arr01[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.2 && randomNumber < 0.3) {
            console.log(arr02[randomArrNumber] + ": This is the random number selected from the array");
            if (arr02[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.3 && randomNumber < 0.4) {
            console.log(arr03[randomArrNumber] + ": This is the random number selected from the array");
            if (arr03[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.4 && randomNumber < 0.5) {
            console.log(arr04[randomArrNumber] + ": This is the random number selected from the array");
            if (arr04[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.5 && randomNumber < 0.6) {
            console.log(arr05[randomArrNumber] + ": This is the random number selected from the array");
            if (arr05[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.6 && randomNumber < 0.7) {
            console.log(arr06[randomArrNumber] + ": This is the random number selected from the array");
            if (arr06[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.7 && randomNumber < 0.8) {
            console.log(arr07[randomArrNumber] + ": This is the random number selected from the array");
            if (arr07[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.8 && randomNumber < 0.9) {
            console.log(arr08[randomArrNumber] + ": This is the random number selected from the array");
            if (arr08[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
        if(randomNumber >= 0.9 && randomNumber < 1) {
            console.log(arr09[randomArrNumber] + ": This is the random number selected from the array");
            if (arr09[randomArrNumber] == 1) {
                this.cash = Math.round(this.cash - bet);
                console.log("Gambler lost");
            } else {
                this.cash = Math.round(this.cash + bet);
                console.log("Gambler won");
            }
        }
    }
}

let gambler1 = new Gambler();

function casino() {
    while(gambler1.cash > 0) {
        gambler1.probability();
        console.log(gambler1);
        console.log(" ");
    }
}

// gambler1.probability();

casino();