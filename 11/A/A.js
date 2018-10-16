$(function() {
    $.ajax({
        url: "./server/data.json",
        type: "GET",
    }).done(function(data){
        console.log("This function will be run if the ajax is successful");
        console.log(data[0]);
        console.log(data[1]);
    }).fail(function(data){
        console.log("This function will be run if the ajax if failed");
    }).always(function(data){
        console.log("This function runs no matter success or fail.");
    })
})