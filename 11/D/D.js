$(`#form`).submit(function(event) {

    event.preventDefault();

    let lat = $(`input[name="lat"]`).val();
    let lng = $(`input[name="lng"]`).val();
    // var serializedInputStringLat = $(lat).serialize();
    // var serializedInputStringLng = $(lng).serialize();
        $.ajax({
            url: `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`,
            type: "GET",

        }).done(function(data) {
            console.log(data.results);
            console.log(data.results.sunrise);
            console.log(data.results.sunset);
        }).fail(function (data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function (data) {
            console.log("This function runs no matter success or fail");
        });
})