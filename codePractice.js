function nonRepeatLetter(str) {

    var str2 = str.split('');
    // console.log(typeof(str2));
    // console.log(str2);

    for (let i = 0; i < str2.length; i++) {

        let counter1 = true;
        let counter2 = true;

        if(str2[i] == str2[i+1]) {
            counter1 = true;
        } else {
            counter1 = false;
        }
        if((counter1 == true) && (str2[i+1] != str2[i+2])) {
            counter2 = true;
        }
        if(counter1 == false && counter2 == true) {
            if(str2[i] != str2[i+1]) {
                counter2 = false;
            }
        }
        if((counter1 == false) && (counter2 == false) && (str2[i-1] != str2[i])) {
          console.log(str2[i]);
        }
        // console.log(counter1 + " counter1");
        // console.log(counter2 + " counter2");
    }
}
    
nonRepeatLetter('uubbeelliieevvaabbllee.tthaatt..ttookk..ssoo..ffuucckkiinngg..lloonngg,,bbuutt..ii..lleeaarrnntt..ssoommee..tthhiinnggss!!!!');

// counter1 = true
// counter2 = false