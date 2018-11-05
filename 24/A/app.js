let readdir = require('./readdir');

let stat = require('./stat');

let searchPath = './files';

readdir(searchPath)
.then((result) => {
    for(let i = 0; i < result.length; i++) {
        stat(searchPath + '/' + result[i]);
    }
}).catch((err) => {
    console.log(err);
});