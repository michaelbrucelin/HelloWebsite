//window.alert('hello world.');
//window.confirm('are you ok?');
//window.setInterval('alert(\'hello world\')', 5000);

var timer0;
function f1() {
    alert("start");
    timer0 = setInterval(() => {
        alert('hello timer.')
    }, 2000);
}
function f2() {
    alert("stop");
    if (timer0) { clearInterval(timer0); }
}
function zizeng1() {
    alert("start");
    setInterval(() => {
        var numbox = document.getElementById("zizeng1");
        num = numbox.value;
        num = parseInt(num) + 1;
        numbox.value = num;
    }, 1000);
}
function zizeng2() {
    alert("start");
    setInterval(() => {
        var numbox = document.getElementById("zizeng2");
        numbox.value++;
    }, 1000);
}

function srcElementSample() {
    var v = window.event.srcElement.value;
    if (v == "+") { alert("加法"); }
    else if (v == "-") { alert("减法"); }
    else { alert("I don't kown."); }
}

function AddCopyRight() {
    var v = document.getElementById("addcr").value;
    console.log(v);
    v = v + "<br />CopyRight: https://mlin.403found.cn";
    console.log(v);
    clipboardData.setData("text", v);
    console.log(clipboardData.getData("text"));
}

function GetSex() {
    var rdos = document.getElementsByName("sex");
    for (let i = 0; i < rdos.length; i++) {
        if (rdos[i].checked) {
            alert(rdos[i].value);
            break;
        }
    }
}

function SetAllChks() {
    var ifchk = event.srcElement.checked;
    var chks = document.getElementsByName("chks");
    for (let i = 0; i < chks.length; i++) {
        //if (chks[i].type == "checkbox") {
        chks[i].checked = ifchk;
        //}
    }
}

function SetAllChk() {
    var chk = document.getElementsByName("allchk");
    var chks = document.getElementsByName("chks");
    for (let i = 0; i < chks.length; i++) {
        if (!chks[i].checked) {
            chk[0].checked = false;
            break;
        }
        if (i == chks.length - 1) {
            chk[0].checked = true;
        }
    }
}

var json_citys = {
    "辽宁省": ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"],
    "吉林省": ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"],
    "黑龙江省": ["哈尔滨市", "齐齐哈尔市", "鸡西市", "鹤岗市", "双鸭山市", "大庆市", "伊春市", "佳木斯市", "七台河市", "牡丹江市", "黑河市", "绥化市", "大兴安岭地区"]
}

function setProvince() {
    var province = document.getElementById("province");
    for (var item in json_citys) {
        var option = document.createElement("option");
        option.innerHTML = item;
        option.value = item;
        province.appendChild(option);
    }

    province.onchange = setCity;
}

function setCity() {
    var province = document.getElementById("province");
    var city = document.getElementById("city");
    //city.innerHTML = "";这样做简单粗暴，但是如果选项有注册事件，选项虽然移除了，但是事件仍在在内存中，不彻底
    //所以采用下面的方式
    var cnt = city.children.length;
    for (let i = cnt - 1; i >= 0; i--) {
        city.removeChild(city.children[i]);
    }

    var citys = json_citys[province.value];
    for (let i = 0; i < citys.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = citys[i];
        option.value = citys[i];
        city.appendChild(option);
    }
}

function rightMove() {
    var btn_id = event.srcElement.id;
    if (btn_id == "right_btn_select") {
        selectItemMove("right_all", "right_select");
    }
    else if (btn_id == "right_btn_delete") {
        selectItemMove("right_select", "right_all");
    }
}

function selectItemMove(srcId, tarId) {
    var select_src = document.getElementById(srcId);
    var select_tar = document.getElementById(tarId);
    var cnt_src = select_src.children.length;
    for (let i = 0; i < cnt_src; i++) {
        if (select_src.children[i].selected) {
            var option = select_src.children[i];
            option.selected = false;
            select_tar.appendChild(option);
            cnt_src--;
            i--;
        }
    }
}

window.onload = () => {
    setProvince();
    setCity();

    var div3 = document.getElementById("div3");
    document.onmousemove = () => {
        document.title = event.clientX + "-" + event.clientY;

        div3.innerText = "{" + event.clientX + "-" + event.clientY + "}";
        div3.style.left = (event.clientX + 8) + "px";
        div3.style.top = (event.clientY + 8) + "px";
        div3.style.fontSize = "1px";
    }

    var course = document.getElementsByName("course");
    for (let i = 0; i < course.length; i++) {
        course[i].onclick = () => {
            srcValue = event.srcElement.value;
            var tbodysfather = document.getElementById("table3");
            var tbodys = tbodysfather.getElementsByTagName("tbody");
            for (let i = 0; i < tbodys.length; i++) {
                if (tbodys[i].id == "tbody0") {
                    tbodys[i].style.display = "block";
                }
                else if (tbodys[i].id == srcValue) {
                    tbodys[i].style.display = "block";
                }
                else {
                    tbodys[i].style.display = "none";
                }
            }
        }
    }
}