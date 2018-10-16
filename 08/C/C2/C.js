$(function () {
    let namesArr = [];
    function whoIsInSpace(){
        $.ajax({
            url: `http://api.open-notify.org/astros.json`,
            type: "GET",

        }).done(function(data) {
            for(let i = 0; i < data.people.length; i++) {
                $('#peopleInSpace').append(`${data.people[i].name}` + ". ");
                namesArr.push(data.people[i].name);
            }
            console.log(namesArr);
        }).fail(function (data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function (data) {
            console.log("This function runs no matter success or fail.");
        });
    }
    whoIsInSpace()  
})