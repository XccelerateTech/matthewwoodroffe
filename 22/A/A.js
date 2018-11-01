var myArray = [4, 8, 2, 7, 5];





function processArray(arr, callback) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }
    console.log(newArr);
}

//if only given the called function, and asked to go backwards to write the function itself,
//the first argument of the called function is what will be passed into the actual function,
//and the function that is passed as the second argument, is what will operate on the first argument.


processArray(myArray, function(a) {
    return a * 2;
});