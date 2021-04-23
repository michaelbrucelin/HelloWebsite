function googlemap0101() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googlemap01"), mapProp);
}
google.maps.event.addDomListener(window, 'load', googlemap0101);

//不同样式的地图
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

//添加标记
function googlemap0301() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//可拖动的标记
function googlemap0302() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//图标
function googlemap0303() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        icon: './image/pinkball.png'
    });

    marker.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//折线
function googlemap0304() {
    var x = new google.maps.LatLng(52.395715, 4.888916);
    var stavanger = new google.maps.LatLng(58.983991, 5.734863);
    var amsterdam = new google.maps.LatLng(52.395715, 4.888916);
    var london = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: x,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var myTrip = [stavanger, amsterdam, london];
    var flightPath = new google.maps.Polyline({
        path: myTrip,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    flightPath.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//多边形
function googlemap0305() {
    var x = new google.maps.LatLng(52.395715, 4.888916);
    var stavanger = new google.maps.LatLng(58.983991, 5.734863);
    var amsterdam = new google.maps.LatLng(52.395715, 4.888916);
    var london = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: x,
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var myTrip = [stavanger, amsterdam, london, stavanger];
    var flightPath = new google.maps.Polygon({
        path: myTrip,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.4
    });

    flightPath.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//圆
function googlemap0306() {
    var amsterdam = new google.maps.LatLng(52.395715, 4.888916);
    var mapProp = {
        center: amsterdam,
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var myCity = new google.maps.Circle({
        center: amsterdam,
        radius: 20000,
        strokeColor: "#0000FF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.4
    });

    myCity.setMap(map);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//信息窗口
function googlemap0307() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap03"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "Hello World!"
    });

    infowindow.open(map, marker);
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//点击标记缩放地图
function googlemap0401() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap04"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        title: 'Click to zoom'
    });

    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
    });
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//重置标记
function googlemap0402() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap04"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
        title: 'Click to zoom'
    });

    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
    });

    google.maps.event.addListener(map, 'center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the marker
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//点击标记时打开信息窗口
function googlemap0403() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap04"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content: "Hello World!"
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    //google.maps.event.addDomListener(window, 'load', initialize);
}

//设置标记及打开每个标记的信息窗口
function googlemap0404() {
    var myCenter = new google.maps.LatLng(51.508742, -0.120850);
    var mapProp = {
        center: myCenter,
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googlemap04"), mapProp);

    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(event.latLng);
    });

    function placeMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map,
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
        });
        infowindow.open(map, marker);
    }
    //google.maps.event.addDomListener(window, 'load', initialize);
}

window.onload = () => {
    document.getElementById("googlemapbtn0201").onclick = googlemap0201;
    document.getElementById("googlemapbtn0202").onclick = googlemap0201;
    document.getElementById("googlemapbtn0203").onclick = googlemap0201;
    document.getElementById("googlemapbtn0204").onclick = googlemap0201;

    document.getElementById("googlemapbtn0301").onclick = googlemap0301;
    document.getElementById("googlemapbtn0302").onclick = googlemap0302;
    document.getElementById("googlemapbtn0303").onclick = googlemap0303;
    document.getElementById("googlemapbtn0304").onclick = googlemap0304;
    document.getElementById("googlemapbtn0305").onclick = googlemap0305;
    document.getElementById("googlemapbtn0306").onclick = googlemap0306;
    document.getElementById("googlemapbtn0307").onclick = googlemap0307;

    document.getElementById("googlemapbtn0401").onclick = googlemap0401;
    document.getElementById("googlemapbtn0402").onclick = googlemap0402;
    document.getElementById("googlemapbtn0403").onclick = googlemap0403;
    document.getElementById("googlemapbtn0404").onclick = googlemap0404;

    document.getElementById("googlemapbtn0201").click();
    googlemap0301();
    googlemap0401();
}