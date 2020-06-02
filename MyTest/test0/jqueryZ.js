$(function () {
    $("div li").mouseover(function () {
        $(this).prevAll().addBack().text("★");
        $(this).nextAll().text("☆");
    })
})