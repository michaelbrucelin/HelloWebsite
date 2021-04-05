function DomWriteTable() {
    document.write("<p>create by document.write()</p><table><tr><td>AA11</td><td>BB11</td><td>CC11</td><td>DD11</td></tr><tr><td>AA22</td><td>BB22</td><td>CC22</td><td>DD22</td></tr><tr><td>AA33</td><td>BB33</td><td>CC33</td><td>DD33</td></tr><tr><td>AA44</td><td>BB44</td><td>CC44</td><td>DD44</td></tr></table>")
}

function DomInnerHTML() {
    var div = document.getElementById('div02');
    div.innerHTML = div.innerHTML + '<p>Hello, this is created by modify innerHTML property.</p>';
    div.innerHTML = div.innerHTML + '<input type=\'button\' value=\'new button\' onclick=\'console.log(this.value)\'>';
}

function CreateButton() {
    //var btn = document.createElement("<input type='button' value='动态创建'>")
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "动态创建";
    var div1 = document.getElementById("div011");
    div1.appendChild(btn);

    btn.onclick = () => {
        var txt1 = document.getElementById("txt1");
        div1.removeChild(txt1);
    }
}

function CreateTableDynamic() {
    var json = [
        { "name": "microsoft", "stie": "https://www.microsoft.com" },
        { "name": "google", "stie": "https://www.google.com" },
        { "name": "github", "stie": "https://www.github.com" },
    ];

    var div = document.getElementById("div012");
    var table = document.createElement("table");
    table.border = 1;
    for (let i = 0; i < json.length; i++) {
        var site = json[i];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = site.name;
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        td2.innerHTML = "<a href='" + site.stie + "'>" + site.name + "</a>";
        tr.appendChild(td2);
        var td3 = document.createElement("td");
        td3.innerText = site.stie;
        tr.appendChild(td3);
        table.appendChild(tr);
    }

    div.appendChild(table);
}

function CreateTableDynamic2() {
    var json = [
        { "name": "microsoft2", "stie": "https://www.microsoft.com" },
        { "name": "google2", "stie": "https://www.google.com" },
        { "name": "github2", "stie": "https://www.github.com" },
    ];

    var div = document.getElementById("div012");
    var table = document.createElement("table");
    table.border = 1;
    for (let i = 0; i < json.length; i++) {
        var site = json[i];
        var tr = table.insertRow(-1);
        var td1 = tr.insertCell(-1);
        td1.innerText = site.name;
        var td2 = tr.insertCell(-1);
        td2.innerHTML = "<a href='" + site.stie + "'>" + site.name + "</a>";
        var td3 = tr.insertCell(-1);
        td3.innerText = site.stie;
    }

    div.appendChild(table);
}

window.onload = () => {
    CreateButton();
}