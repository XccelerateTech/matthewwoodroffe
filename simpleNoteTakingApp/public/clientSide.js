console.log('Is there anybody there?'); //to show this file is linked to index.html

let test = document.getElementById("test"); //prints in the browser console, not in the terminal. This shows it is running 
//client side, not server side.
console.log(test);
let test2 = document.getElementById("test").innerHTML; //accesses the text without the tags. Console log to show this.
console.log(test2);

let arr = ['him', 'her', 'them'] //create dummy array for testing. Not used in final app for now.



//this creates a new list element. Console log to show this is working.
let newListElement = document.createElement('li');
console.log(newListElement);

//test how to attach text to the list element.
newListElement.append('something nice (test case)');
// console.log(test3);

//get the ul html element and assign it to a variable, so that it can be used to attach the html li element to.  
let test4 = document.getElementById("userList");
console.log(test4);

//append li element to the ul. The above test4 Console log shows this for some reason I don't understand.
let test5 = test4.append(newListElement);
// console.log(test5);

//this brings together the 4 lines of code above into a function that can be called later.
let addElement = function(input) {
    let newListElement2 = document.createElement('li');
    newListElement2.append(input);
    let getulElement = document.getElementById("userList");
    getulElement.append(newListElement2);
}


//returns the form and assigns it to formInput variable.  Console log to show this has worked.
let formInput = document.forms[0];
console.log(formInput)

//uses the formInput above to target the form input element to get the text input. 'userInput references the input name in html doc.
let textInput = formInput.elements['userInput'];
console.log(textInput);

//targets the submit button in the html doc (or dom). 
//When the user clicks the submit button it triggers this function, which takes the users inputted text from the function above,
//and pushes it to an array.  We then use the addElement function above to append this to the html document.
formInput.onsubmit = function(input) {
    input.preventDefault();
    addElement(textInput.value);
    console.log(arr); //this shows function is working when input is entered.
}

console.log(arr);