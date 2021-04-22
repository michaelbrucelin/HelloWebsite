function showPic(whichpic) {
    if (!document.getElementById("placeholder")) { return false; }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") { return false; }
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function prepareGallery() {
    if (!document.getElementsByName) { return false; }
    if (!document.getElementById) { return false; }
    if (!document.getElementById("leftbar")) { return false; }
    var allatags = document.getElementById("leftbar").getElementsByTagName("a");
    for (var i = 0; i < allatags.length; i++) {
        //allatags[i].setAttribute("onclick", "showPic(this); return false;");
        allatags[i].onclick = function () {
            return showPic(this) ? false : true;  //图片打开成功，禁用a标签默认跳转功能，否则，a标签自动跳转
        }
    }
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

window.onload = function () {
    this.prepareGallery();
}