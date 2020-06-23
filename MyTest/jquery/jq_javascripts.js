function createLinkTag() {
    $("#a-dynamic").remove();  //????????????????

    //console.log($("#select01 option:selected").index());
    //console.log($("#select01 option:selected").html());
    var $link = $("<a id='a-dynamic' href='http://www.baidu.com'>baidu</a>");
    $link.css("color", "#FF0000");
    $link.click(function () { console.log("a-dynamic be clicked."); });

    var selectindex = $("#select01 option:selected").index();
    if (selectindex == 0) {
        $("#div02").append($link);     //?????????????
    }
    else if (selectindex == 1) {
        $("#div02").prepend($link);    //?????????????
    }
    else if (selectindex == 2) {
        $("#div02").after($link);      //????????????
    }
    else if (selectindex == 3) {
        $("#div02").before($link);     //????????????
    }
    else if (selectindex == 4) {
        $link.appendTo($("#div02"));   //???????????????????
    }
    else if (selectindex == 5) {
        $link.prependTo($("#div02"));  //???????????????????
    }
}

function animateSample01() {
    $("#div04").animate({ "width": 600, "height": 50, "background-color": "#FF0000" }, 2000);
    $("#div04").animate({ "width": 400, "height": 10, "background-color": "#00FF00" }, 2000);
}

$(function () {
    $("#tb01, #td tr, #tb01 td, #tb01 th").css("border", "1px solid #000000").css("text-align", "center");
    $("#tb01 td").css("padding", "0 16px");
    //$("#tb01 tr:eq(0)").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:first").css({ "font-size": "16px", "color": "#FF0000" });
    $("#tb01 tr:last").css({ "font-size": "16px", "color": "#FF0000" });
    //$("#tb01 tr:not(:first):not(:last):lt(3)").css("background-color", "#EEEEEE");
    $("#tb01 tr:not(:first):not(:last):even").css("background-color", "#EEEEEE");

    //????
    var tbtr = "#tb01 tr:not(:first):not(:last)";
    var bgColor;
    $(tbtr).mouseover(function () {
        bgColor = $(this).css("background-color");
        $(this).css("background-color", "#888888");
    }).mouseout(function () {
        $(this).css("background-color", bgColor);
    });
})