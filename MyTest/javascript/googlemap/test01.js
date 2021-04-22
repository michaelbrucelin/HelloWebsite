function googlemap0101() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googlemap01"), mapProp);
}
google.maps.event.addDomListener(window, 'load', googlemap0101);

function googlemap0201() {
    var mapProp = {};
    if (this.id == "googlemapbtn0201") {
        mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    } else if (this.id == "googlemapbtn0202") {
        mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
    } else if (this.id == "googlemapbtn0203") {
        mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };
    } else if (this.id == "googlemapbtn0204") {
        mapProp = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 9,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
    }

    var map = new google.maps.Map(document.getElementById("googlemap02"), mapProp);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

window.onload = () => {
    document.getElementById("googlemapbtn0201").onclick = googlemap0201;
    document.getElementById("googlemapbtn0202").onclick = googlemap0201;
    document.getElementById("googlemapbtn0203").onclick = googlemap0201;
    document.getElementById("googlemapbtn0204").onclick = googlemap0201;
}