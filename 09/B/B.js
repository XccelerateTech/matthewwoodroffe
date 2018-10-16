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

$('#row-submit').append(`<input tytpe='reset' value='clear' id ='clear-input' class = 'clear'/>`)

$('#header').html(`<h1>Matthew's contact list application</h1>`)

$('tbody').css('color', 'red')