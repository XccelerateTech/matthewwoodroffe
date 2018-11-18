class BeerSong {
    constructor() {
        this.arr = [];
        let startNum = 0;
        for (let i = 0; i < 100; i++) {
            (this.arr).push(startNum);
            startNum = startNum + 1;
        }
        console.log(this.arr);
    }
    verse (input) {
        let arr2 = [];
        for (let i = 100; i >= 0; i--) {
            if (i > 2) {
                arr2.push(`${(this.arr).indexOf(i - 1)} bottles of beer on the wall, ${(this.arr).indexOf(i - 1)} bottles of beer.
                Take one down and pass it around, ${(this.arr).indexOf(i - 2)} bottles of beer on the wall.`);
            }
            if(i == 2) {
                arr2.push(`${(this.arr).indexOf(i)} bottle of beer on the wall, ${(this.arr).indexOf(i)} bottle of beer.
                Take one down and pass it around, ${(this.arr).indexOf(i - 2)} bottle of beer on the wall.`);
            }
            if(i == 1) {
                arr2.push(`${(this.arr).indexOf(i)} bottle of beer on the wall, ${(this.arr).indexOf(i)} bottle of beer.
                Take one down and pass it around, no more bottles of beer on the wall.`);
            }
            if (i == 0) {
                arr2.push(`No more bottles of beer on the wall, no more bottles of beer.
                Go to the store and buy some more, 99 bottles of beer on the wall.`);
            }
        }
        return arr2[input];
    }
}

module.exports = BeerSong;