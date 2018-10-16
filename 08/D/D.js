class User {
    constructor(option) {
        this.firstname = option.firstname;
        this.lastname = option.lastname;
        this.email = option.lastname;
        this.dateofbirth = option.dateofbirth;
    }
}

function randomPerson(callback) {
    let http = new XMLHttpRequest();
    http.open('GET', `https://randomuser.me/api/`, true);

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            let parsedObj = JSON.parse(http.responseText);
            callback(parsedObj.results);
            // let randomArr = [];
            // randomArr.push(parsedObj);
            // console.log(randomArr);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

for(let i = 0; i < 1; i++){
    randomPerson(function (randomPersonArr) {
        user1 = new User({name: randomPersonArr[i].name.first});
        console.log(user1)
        return console.log(randomPersonArr[0].name.first);
    })
}

// for(let i = 0; i < 5; i++) {
//     user1 = new User({name: randomPersonArr[i].name.first});
//     console.log(user1);
// }





