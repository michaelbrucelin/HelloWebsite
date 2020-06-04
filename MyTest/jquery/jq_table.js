$(function () {
    $("#tb01, #td tr, #tb01 td, #tb01 th").css("border", "1px solid #000000").css("text-align", "center");
    $("#tb01 td").css("padding", "0 16px");
    //$("#tb01 tr:eq(0)").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:first").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:last").css({ "font-size": "16px", "color": "#FF0000" });
    //$("#tb01 tr:not(:first):not(:last):lt(3)").css("background-color", "#EEEEEE");
    $("#tb01 tr:not(:first):not(:last):even").css("background-color", "#EEEEEE");

    //光棒效果
    var tbtr = "#tb01 tr:not(:first):not(:last)";
    var bgColor;
    $(tbtr).mouseover(function () {
        bgColor = $(this).css("background-color");
        $(this).css("background-color", "#888888");
    }).mouseout(function () {
        $(this).css("background-color", bgColor);
    });
})