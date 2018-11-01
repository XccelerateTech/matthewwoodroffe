let randomNum = function() {
    let randomNumVar = Math.round(Math.random() * 26);
    if(randomNumVar == 0) {
        return 1;
    } else {
        return randomNumVar;
    }
}

module.exports = randomNum;