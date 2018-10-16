$(function () {


    function informMe(endpoint, value){
        $.ajax({
            url: `https://restcountries.eu/rest/v2/${endpoint}/${value}`,
            type: "GET",

        }).done(function(data) {

            console.log(data);

        }).fail(function (data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function (data) {
            console.log("This function runs no matter success or fail.");
        });
    }
    informMe('capital', 'berlin')  
})