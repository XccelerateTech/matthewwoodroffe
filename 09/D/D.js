var addElement = $('<tr>',{id:"any"},{class:"row"});

$('tbody').append(addElement);

var addElementTd = $('<td>',{id:"tdAny1"});
var addElementTd2 = $('<td>',{id:"tdAny2"});
var addElementTd3 = $('<td>',{id:"tdAny3"});

var name = $("#any",).append(addElementTd);
var number = $("#any",).append(addElementTd2);
var email = $("#any",).append(addElementTd3);

$('#tdAny1').html("Peter");
$('#tdAny2').html("123456789");
$('#tdAny3').html("peter@gmail.com");

$('#row-submit').append(`<input type='reset' value='clear' id='clear-input' class='clear' class="btn btn-primary"/>`)

$('#header').html(`<h1>Matthew's contact list application</h1>`)

$('tbody').css('color', 'red')


$('#form1').submit(function(event){
    event.preventDefault(); // VERY IMPORTANT. To stop the form from submitting
    
    var name = event.target.name.value;
    if(name.length > 50) {
        alert("Please enter less than 50 words");
    } 
    var phone = event.target.phone.value;
    if((phone.length < 6) || (phone.length > 16)) {
        alert("Please enter between 6 and 16 numbers" );
    }
    $('tbody').append('<tr class="row"><td>' + name + '</td><td>' + phone + '</td>');
}); 

$("input[name='name']").keyup(function() {
    let inputValue = event.target.name;
    if(inputValue.length < 6 || inputValue.length > 16) {
        $(this).css('border-color', 'red');
    }
});


