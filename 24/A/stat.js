const fs = require('fs');

function stat(path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, (err, files) => {
            if (err) {
                reject(err);
            } else if (files.isFile() == true){
                console.log(`${path} is a file`);
            } else if (files.isDirectory() == true) {
                console.log(`${path} is a directory`);
            } else {
                resolve();
            }
        });
    });
}

module.exports = stat;