//ajax load()
$(document).ready(function () {
    $("#ajaxload1").click(function () {
        $("#ajaxloadiv1").load("ajax/demo_test.txt");
    });
});

$(document).ready(function () {
    $("#ajaxload2").click(function () {
        $("#ajaxloadiv1").load("ajax/demo_test.txt #p1");
    });
});

$(document).ready(function () {
    $("#ajaxload3").click(function () {
        $("#ajaxloadiv1").load("ajax/demo_test.txt", function (responseTxt, statusTxt, xhr) {
            if (statusTxt == "success")
                alert("外部内容加载成功!\n" + responseTxt);
            if (statusTxt == "error")
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });
});

//ajax GET()
$(document).ready(function () {
    $("#ajaxget1").click(function () {
        $.get("ajax/demo_test_get.php", function (data, status) {
            alert("数据: " + data + "\n状态: " + status);
        });
    });
});

//ajax POST()
$("#ajaxpost1").click(function () {
    $.post("ajax/demo_test_post.php",
        {
            name: "403访得",
            url: "https://403found.cn"
        },
        function (data, status) {
            alert("数据: \n" + data + "\n状态: " + status);
        });
});

//noConflict() 01
$.noConflict();
jQuery(document).ready(function () {
    jQuery("#noconflict1").click(function () {
        jQuery("#noconflictp1").text("jQuery 仍然在工作 01!");
    });
});
var $ = jQuery.noConflict();  //取消noConflict()，否则影响后面的示例代码的运行，正常情况下不需要这行代码

//noConflict() 02
var jq = $.noConflict();
jq(document).ready(function () {
    jq("#noconflict2").click(function () {
        jq("#noconflictp1").text("jQuery 仍然在工作 02!");
    });
});
var $ = jQuery.noConflict();  //取消noConflict()，否则影响后面的示例代码的运行，正常情况下不需要这行代码

//noConflict() 03
$.noConflict();
jQuery(document).ready(function ($) {
    $("#noconflict3").click(function () {
        $("#noconflictp1").text("jQuery 仍然在工作 03!");
    });
});
var $ = jQuery.noConflict();  //取消noConflict()，否则影响后面的示例代码的运行，正常情况下不需要这行代码

//重置
$(document).ready(function () {
    $("#noconflict4").click(function () {
        jQuery("#noconflictp1").text("这是一个段落。");
    });
});