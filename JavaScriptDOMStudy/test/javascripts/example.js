var height = "about 5'10\" tall";
//alert(height);

function popUp() {
    window.open("http://www.pinger.cc", "popup", "width=320,height=480");
}

function popUpRegist(){
    var btn = document.getElementById("btnPopUp");
    btn.setAttribute("onclick", "popUp();")
}

window.onload = popUpRegist;