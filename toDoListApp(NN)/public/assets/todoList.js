$(document).ready (function(){

    $('form').on('submit', function(event) {
        // event.preventDefault(); Not sure if needed, but guessing not due to the nature of AJAX requests.
        
        let item = $('form input');
        let todo = {item: item.val()};  
        // console.log(typeof(todo)); //shows that ajax is being given an object. I tried with just a string but it did not work. 
        // //Looked it up and found Ajax does not take string as input, and so I changed type to imitate json object.
        $.ajax({
            type: 'POST',
            url: '/todo',
            //by passing in data here, as the url is the same as in the post request,
            //in the todoController.js file, it then becomes available to use in that function.
            data: todo,
            success: function(data) {
                //do something with the data via front end.
                //when the data is received back from the handler, the reload function 
                //below refreshes the page, and consequently reruns the get request handler,
                //updating the page with the updated array.
                location.reload();
            }
        });
        return false;
    });

    $('li').on('click', function() {
        let item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data) {
                location.reload();
            }
        });
    });
});