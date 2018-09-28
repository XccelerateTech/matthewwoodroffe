var thirtyNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

var numberLog = function () {
    for (let i = 0; i < thirtyNumbers.length; i++) {
        if ((thirtyNumbers[i]) % 3 == 0) {
            console.log('Hong');
        } else if ((thirtyNumbers[i] % 5) == 0) {
            console.log('Kong');
        } else if (((thirtyNumbers[i] % 3) == 0) && ((thirtyNumbers[i] % 5) == 0)) {
            console.log('Hong Kong');
        } else {
            console.log(thirtyNumbers[i]);
        }
    }
}
numberLog();