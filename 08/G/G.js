var topDiv = document.getElementById("some-section");
var bottomDiv = document.getElementById("content-section1");

var rmDiv = topDiv.removeChild(bottomDiv);

console.log(rmDiv);