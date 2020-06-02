$(function () {
    $("#div-li1 li").mouseover(function () {
        $(this).prevAll().addBack().text("★");
        $(this).nextAll().text("☆");
    })
})