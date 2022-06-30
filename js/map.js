$(function(){
	function initMap() {
        var style = [
            [
                {
                  "featureType": "road.arterial",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                }
              ]
        ];
        var pos = {
            lat : 35.41289625192859, 
            lng : 136.79997955744082
        };

        var cafePos ={
            lat : 35.41316418234744,
            lng : 136.79742100269164
        };

        var opts = {
            zoom : 17,
            style,
            center : new google.maps.LatLng(pos)
        };
        var ele = document.getElementById("map");
        var map = new google.maps.Map(ele,opts);
        var makar = new google.maps.Marker({
            position : pos,
            map : map
        })
        var makars = new google.maps.Marker({
            position : cafePos,
            map : map
        })

    }

var ds = new google.maps.DirectionService
var dr = new google.maps.DirectionReanderer;
ds.route({
    origin : pos[0],
    d 
})


    initMap();
});