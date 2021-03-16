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
    //PullBackground()
}

function PullBackground() {
    var ajaxRequest = new XMLHttpRequest(), background = '';
    ajaxRequest.open('POST', "http://www.bing.com/HPImageArchive.aspx?format=xml&idx=0&n=1&mkt=en-US", true);
    ajaxRequest.setRequestHeader("Connection", "close");
    ajaxRequest.send('');
    ajaxRequest.onreadystatechange = function () {
        if (ajaxRequest.readyState == 4) {
            background = ajaxRequest.responseText;
            var res = background.split("<url>");
            var res1 = res[1].split("</url>");
            background = res1[0];

            document.getElementById('background').style.backgroundImage = "url('http://bing.com" + background + "')"
            document.getElementById('background').style.backgroundSize = "100%";
        }
    }
}