function useDOMObject() {
    var div = document.getElementById("div1");
    div.innerHTML = "Modified by DOM";
}

function useJQueryObject() {
    var $div = $("#div1");
    $div.html("Modified by JQuery");
}

//window.onload注册多个事件时，后面的会覆盖前面的，相当于C#中的=赋值
//所以这里只输出最后一条信息
window.onload = () => { console.log("========window.onload========"); }
window.onload = () => { console.log("========window.onload 2========"); }
window.onload = () => { console.log("========window.onload 3========"); }

//$(document).ready注册多个事件时，多个事件同时有效，相当于C#中的委托链，+=赋值
//所以这里3条消息都会输出，其中第三条是前两条的简写形式
$(document).ready(
    () => { console.log("========jquery.ready========"); }
)
$(document).ready(
    () => { console.log("========jquery.ready 2========"); }
)
$(() => { console.log("========jquery.ready 3========"); })

//DOMContentLoaded执行的比$(document).ready还要早
//DOMContentLoaded同样支持多注册
document.addEventListener("DOMContentLoaded",
    function () {
        console.log('========DOMContentLoaded========')
    }, false);
document.addEventListener("DOMContentLoaded",
    () => {
        console.log('========DOMContentLoaded 2========')
    }, false);

document.addEventListener("DOMContentCompleted",
    function () {
        console.log('========DOMContentCompleted========')
    }, false);
document.addEventListener("DOMContentCompleted",
    () => {
        console.log('========DOMContentCompleted 2========')
    }, false);