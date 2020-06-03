$(function () {
    $("#tb01, #tb01 td, #tb01 th").css("border", "1px solid #000000").css("text-align", "center");
    $("#tb01 tr:first").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:last").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:not(:first):not(last):even").css("background-color", "#FFFF00");
})