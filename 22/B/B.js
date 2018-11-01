var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');

readable.pipe(writeable);