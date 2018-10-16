class Triangle {
    constructor(num){
        this.num = num;
    }
    get rows() {

        let arrOuter = [];
    
        for (let i = 0; i < this.num; i++) {
            let arrInner = [];
            arrOuter.push(arrInner);
        }
    
        for (let i = 0; i < this.num; i++) {
            for(let j = 0; j <= i; j++) {
                arrOuter[i][j] = 1;
            }
        }
    
        for (let i = 0; i < arrOuter.length; i++) {
            for(let j = 0; j < arrOuter[i].length; j++) {
                if((j != arrOuter[i].length - 1) && (i != arrOuter.length - 1)) {
                    arrOuter[i + 1][j + 1] = ((arrOuter[i][j]) + (arrOuter[i][j + 1]));
                }
            }
        }

        return arrOuter;

    }

    get lastRow() {

        let arr = this.rows
        return arr[this.num - 1]

    }
    
}

module.exports = Triangle;