$(function(){

	$.ajax({
        url: "https://weather.tsukumijima.net/api/forecast/city/210010",
        cache: false,
        type: "GET",
        dataType: "json",
        timeout: 10000
    }).done(function (data) {
        console.log(data.title);
        $("h1").text(data.title)
        .$each(data.forecasts, function(key,value) {
            $("#section01 .news-list").append('<li><dl><dt>' + value.data + '</dt><dd>' + value.tel$("#section01 .news-list").append('<li><dl><dt>' + value.data + '</dt><dd>'  + '</dd></dl></li> </dd></dl></li>')
        )}
        )
        

    });

});