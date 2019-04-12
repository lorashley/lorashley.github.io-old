$(function() {
    console.log( "ready!" );
    getWeather();
});

function getWeather(){
    console.log("Getting Weather");
    var DARK_SKY_URL = 'https://api.darksky.net/forecast/652684bbf543c7e8cf77c52f6f7e1391/26.1212,-80.1275'
    $.get(
        DARK_SKY_URL,
        function(response) {
            $('#userGreeting').html("Hello" + response.icon);
        }
    );

}
