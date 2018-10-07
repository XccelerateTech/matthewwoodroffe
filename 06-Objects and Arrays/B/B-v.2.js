var reverse = function(num) {
    var arr = num.toString();
    var arr2 = arr.split("");
    arr2.reverse();
    return arr2;
}

reverse(12345);