function GetImageURL(ans) {
    var suffix = ans.images[0].url
    document.getElementById("background").style.backgroundImage = 'url("' + 'http://bing.com/' + suffix + '"'
}

function GetJSON() {
    var xmlhttp = new XMLHttpRequest()
    var url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var ans = JSON.parse(this.responseText);
            GetImageURL(ans);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

window.onload = function () {
    GetJSON()
}