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
            return showPic(this) ? false : true;
        }
    }
}

function preparePlaceholder() {
    if (!document.createElement) { return false; }
    if (!document.createTextNode) { return false; }
    if (!document.getElementById) { return false; }
    if (!document.getElementById("leftbar")) { return false; }
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/CumulusCaribbean_ZH-CN4884493707_1920x1080.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desctext = document.createTextNode("Choose an image.");
    description.appendChild(desctext);
    var imagearea = document.createElement("section");
    imagearea.setAttribute("id", "imagearea");
    imagearea.appendChild(placeholder);
    imagearea.appendChild(description);
    var leftbar = document.getElementById("leftbar");
    insertAfter(imagearea, leftbar);
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
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
    this.preparePlaceholder();
    this.prepareGallery();
}