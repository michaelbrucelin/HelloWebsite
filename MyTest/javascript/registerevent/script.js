function StaticRegister() {
    console.log("this is register static.");

    var btn = document.getElementById("btn02");
    //这样是不对的，这样相当于将函数的结果注册给了onclick事件
    //btn.onclick = DynamicRegister();
    btn.onclick = DynamicRegister;
    console.log("done");
}

function DynamicRegister() {
    console.log("this is register dynamic.");
}

function console1() {
    console.log("1111111111111111");
}
function console2() {
    console.log("2222222222222222");
}

//这样注册第二个注册会覆盖第一个注册
function regularRegister() {
    var btn = document.getElementById("btn14");
    btn.onclick = console1;
    btn.onclick = console2;
    btn.value = "regularRegister";
    console.log("done");
}

//js不支持这样注册委托链
function csharpRegister() {
    var btn = document.getElementById("btn14");
    btn.onclick += console1;
    btn.onclick += console2;
    btn.value = "csharpRegister";
    console.log("done");
}

//IE中这样注册多个事件
function attachRegister() {
    var btn = document.getElementById("btn14");
    btn.attachEvent("onclick", console1);
    btn.attachEvent("onclick", console2);
    btn.value = "attachRegister";
    console.log("done");
}

//w3c标准，在chrome和firefox中这样注册多个事件
function listenerRegister() {
    var btn = document.getElementById("btn14");
    btn.addEventListener("click", console1);
    btn.addEventListener("click", console2);
    btn.value = "listenerRegister";
    console.log("done");
}