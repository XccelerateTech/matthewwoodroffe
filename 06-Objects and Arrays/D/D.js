
var marks = [76.7654, 87.343, 99.545343, 56.343451];

var yearTotal = marks.reduce(function(accumulator, number) {
    return accumulator + number;
}, 0);

var yearAverage = yearTotal / marks.length;

console.log(Math.floor(yearAverage));