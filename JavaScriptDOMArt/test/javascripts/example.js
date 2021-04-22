var height = "about 5'10\" tall";
//alert(height);

function popUp() {
    window.open("https://www.403found.cn/", "popup", "width=320,height=480");
}

function popUp2(winURL) {
    window.open(winURL, "popup", "width=320,height=480");
}

function popUpRegist(){
    var btn = document.getElementById("btnPopUp");
    //btn.setAttribute("onclick", "popUp();")
    //btn.onclick = popUp;
    btn.onclick = popUp2('https://www.403found.cn/');
}

function newPTag(){
    var para = document.createElement("p");
    var txt = document.createTextNode("Hello World!");
    para.appendChild(txt);
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(para);
}

window.onload = function(){
    this.popUpRegist();
    this.newPTag();
}