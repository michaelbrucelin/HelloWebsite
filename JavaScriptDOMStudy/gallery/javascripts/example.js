function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function onclick() {
    var allatag = document.getElementById("leftbar").getElementsByTagName("a");
    for (var i = 0; i < allatag.length; i++) {
        allatag[i].setAttribute("onclick", "showPic(this); return false;");
    }
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

window.onload = onclick;