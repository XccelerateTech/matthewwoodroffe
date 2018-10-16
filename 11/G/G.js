// $(function (){

    $('#form').submit(function( event ) {

        event.preventDefault();

        let country1 = $(`input[name="country1"]`).val();
        let country2 = $('input[name="country2"]').val();

        let returnedCountry1 = $.get(`https://restcountries.eu/rest/v2/name/${country1}`);
        let returnedCountry2 = $.get(`https://restcountries.eu/rest/v2/name/${country2}`);

        $.when(returnedCountry1, returnedCountry2).done(function(data, data1) {

            console.log(data);
            console.log(data1);
            
            let returnedCountry1Lat = data[0][0].latlng[0];
            console.log(returnedCountry1Lat);
            let returnedCountry1Lng = data[0][0].latlng[1];
            console.log(returnedCountry1Lng);

            let returnedCountry2Lat = data1[0][0].latlng[0];
            console.log(returnedCountry2Lat);
            let returnedCountry2Lng = data1[0][0].latlng[1];
            console.log(returnedCountry2Lng);

           
            let country1Sunrise = $.get(`https://api.sunrise-sunset.org/json?lat=${returnedCountry1Lat}&lng=${returnedCountry1Lng}&formatted=0`);
            let country2Sunrise = $.get(`https://api.sunrise-sunset.org/json?lat=${returnedCountry2Lat}&lng=${returnedCountry2Lng}&formatted=0`);

            $.when(country1Sunrise, country2Sunrise).done(function(country1Sunrise, country2Sunrise)  {
               
                console.log(country1Sunrise);
                console.log(country2Sunrise);

                let sunRiseTime1 = country1Sunrise[0].results.sunrise;
                let sunSetTime1 = country1Sunrise[0].results.sunset;
                let sunRiseTime2 = country2Sunrise[0].results.sunrise;
                let sunSetTime2 = country2Sunrise[0].results.sunset;

                console.log(sunRiseTime1);
                console.log(sunSetTime1);
                console.log(sunRiseTime2);
                console.log(sunSetTime2);

                let formattedDataSunrise1 = new Date(sunRiseTime1);
                let formattedDataSunrise2 = new Date(sunRiseTime2);
                let formattedDataSunset1 = new Date(sunSetTime1);
                let formattedDataSunset2 = new Date(sunSetTime2);
                
                console.log(formattedDataSunrise1);
                console.log(formattedDataSunrise2);
                console.log(formattedDataSunset1);
                console.log(formattedDataSunset2);

                console.log(formattedDataSunrise1 - formattedDataSunrise2);
                console.log(formattedDataSunset1 - formattedDataSunset2);

                let sunriseArith1 = formattedDataSunrise1 - formattedDataSunrise2;               
                let sunriseArith2 = formattedDataSunset1 - formattedDataSunset2;               

                if(sunriseArith1 <= 0) {
                    console.log(`Sunrise of country 1 is earlier than country 2 by ${(sunriseArith1 * -1)/1000/60} minutes`);
                } else {
                    console.log(`Sunrise of country 2 is earlier than country 1 by ${(sunriseArith1)/1000/60} minutes`);
                }

                if(sunriseArith2 <= 0) {
                    console.log(`Sunset of country 1 is earlier than country 2 by ${(sunriseArith2 * -1)/1000/60} minutes`);
                } else {
                    console.log(`Sunset of country 2 is earlier than country 1 by ${(sunriseArith2 )/1000/60} minutes`);
                }

            })

            


        }).fail(function (data) {
            console.log("This function will be run if the ajax if failed");
        }).always(function (data) {
            console.log("This function runs no matter success or fail");
        });

    });

//  