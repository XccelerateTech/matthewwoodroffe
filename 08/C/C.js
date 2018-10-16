function whoIsInSpace(callback) {
    let http = new XMLHttpRequest();
    http.open('GET', `http://api.open-notify.org/astros.json`, true);
    
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            let parsedObj = JSON.parse(http.responseText)
            callback(parsedObj.people.map(function(person){
            return person.name;
            }))
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

whoIsInSpace(function(data){
    console.log(data);
});
