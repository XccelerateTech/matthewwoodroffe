$(function () {
        $.ajax({
            url: `http://api.open-notify.org/astros.json`,
            type: "GET",

        }).done(function(data) {
            console.log("This function will be run if the ajax passed");
        }).fail(function (data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function (data) {
            console.log("This function runs no matter success or fail.");
        });
    }
})