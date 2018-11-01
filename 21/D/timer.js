setTimeout(function(){
    console.log('I logged after 3 seconds');
}, 3000);

function logger() {
    console.log('I log every 3 seconds');
}
setInterval(logger, 3000);