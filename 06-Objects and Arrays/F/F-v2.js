
var alphabit = "jabcdefghi";

var alphabitSplit = alphabit.split("");

console.log(alphabitSplit);

var transform = function(num) {

    var splitNumArr = num.split("");
    console.log(splitNumArr);

    var sortedSplitNumArr = splitNumArr.sort();
    console.log(sortedSplitNumArr);

    var finalArr = [];

    for (var i = 0; i < sortedSplitNumArr.length; i++) {
        for (var j = 0; j < alphabitSplit.length; j++) {
            if (sortedSplitNumArr[i] == alphabitSplit.indexOf(alphabit.charAt(j))) {
                finalArr.push(alphabitSplit[j]);
            }
        }
    }


    console.log(finalArr.join(''));
}

transform('213');