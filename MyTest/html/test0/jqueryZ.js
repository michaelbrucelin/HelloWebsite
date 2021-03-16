$(function () {
    $("#div-li1 li").mouseover(function () {
        $(this).prevAll().addBack().text("★");
        $(this).nextAll().text("☆");
    })
})

$(function () {
    //这样写每次都要循环设置兄弟节点的样式，效率略低，下面的写法更有优势
    //$("#div-li2 li").mouseover(function(){
    //$(this).css("background", "red").siblings().css("background", "");
    //})
    $("#div-li2 li").mouseover(function () {
        $(this).css("background", "red");
    });
    $("#div-li2 li").mouseout(function () {
        $(this).css("background", "");
    });
})