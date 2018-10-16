function informMe(endpoint, value, callback) {
    var http = new XMLHttpRequest();
    http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            callback(JSON.parse(http.responseText));
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}
// onreadystatechange should be before http.send()


informMe("region", "europe", function(callback) {console.log(callback);});