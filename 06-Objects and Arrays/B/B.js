var reverse = function(num) {
    var arr = [num];
    console.log(arr);

    var stringNum = String(arr);
    console.log(stringNum);

    var stringArr = stringNum.split("");
    console.log(stringArr);

    reversedArr = stringArr.reverse();
    console.log(reversedArr);
    
    var parsedArr = [];
    for (var i = 0; i < reversedArr.length; i++) {
        parsedArr.push(parseInt(reversedArr[i]));
    }
    console.log(parsedArr);
}

reverse(12345);