$(function(){

    $("#btn").on("click", function(){
        $.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${$("#input").val()}&units=metric&cnt=${$("#numInput").val()}&APPID=c10bb3bd22f90d636baa008b1529ee25`,
        function(response){
            console.log(response);
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            let d = new Date();
            let dNum = d.getDay();
            let city = response.city;
            let forecasts = response.list;

            $("#tbody").html("");
            $("#weatherFor").html("");
            $("#error").html("");
            
            $("#weatherFor").append(`<h3>Weather for ${city.name}, ${city.country}</h3>`);
            
            forecasts.forEach((forecast) => {
                $("#tbody").append(`<tr>
                <td style = "vertical-align: middle;">${days[dNum]}</td>
                <td style = "vertical-align: middle;"><img src = "http://openweathermap.org/img/w/${forecast.weather[0].icon}.png"><br>${forecast.weather[0].description}</td>
                <td style = "vertical-align: middle;">Max: ${forecast.temp.max} °C <br> Min: ${forecast.temp.min} °C</td>
                <td style = "vertical-align: middle;">${forecast.speed} m/s</td>
                <td style = "vertical-align: middle;">${forecast.humidity} %</td></tr>`);
                dNum++
                if(dNum > 6){
                    dNum = 0;
                }
            });
            
            $("table").css("visibility","visible");
            $("#input").val("");
            $("#numInput").val("");
        }).catch(function(error){
            switch(error.status) {
                case 400:
                    $("#error").html("");
                    $("#error").append("<span style ='background-color: red;'>The city name, or forecast days are invalid.</span>").on("click", function(){
                    $(this).html("");});
                    break;
                case 404:
                    $("#error").html("");
                    $("#error").append("<span style ='background-color: red;'>The city you are looking for was not found.</span>").on("click", function(){
                    $(this).html("");});
                    break;
                case 403:
                    $("#error").html("");
                    $("#error").append("<span style ='background-color: red;'>You are not able to access this resource.</span>").on("click", function(){
                    $(this).html("");});
                    break;
                case 500:
                    $("#error").html("");
                    $("#error").append("<span style ='background-color: red;'>Something went wrong!</span>").on("click", function(){
                    $(this).html("");});
                    break;
                default:
                    $("#error").html("");
                    $("#error").append("<span style ='background-color: red;'>Unexpected error has occurred.</span>").on("click", function(){
                    $(this).html("");});
                    break;
            }
            
            $("#tbody").html("");
            $("#weatherFor").html("");
            $("#input").val("");
            $("#numInput").val("");
            $("table").css("visibility","hidden");
        });

    });


});