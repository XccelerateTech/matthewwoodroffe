var numberAlphaArr = [['0','a'],['1','b'],['2','c'],['3','d'],['4','e'],['5','f'],['6','g'],['7','h'],['8','i'],['9','j']];

var transform = function(num) {

    var splitNumArr = num.split("");
    console.log(splitNumArr);

    var sortedSplitNumArr = splitNumArr.sort();
    console.log(sortedSplitNumArr);

    finalArr = [];
    console.log(numberAlphaArr.length)

    for (var i = 0; i < numberAlphaArr.length; i++) {
        iterator = 0;
        for (var j = 0; j < 1; j++) {
            if (sortedSplitNumArr[iterator] == numberAlphaArr[i][j]) {
                finalArr.push(numberAlphaArr[i][j + 1]);
            }
            iterator += 1;   
        } 
    }
    console.log(finalArr);
}

transform('213');