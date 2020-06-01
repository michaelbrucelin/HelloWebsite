$(function(){
    $("div li").mouseover(function(){
        alert("hello jquery");
        $(this).prevAll().andSelf().text("★");
    });
});