//将所有p元素的单击事件注册为隐藏自身
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});

//为安装注册单击事件
$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
    $("#show").click(function () {
        $("p").show();
    });
});

//隐藏时间与回调函数的使用
$(document).ready(function () {
    $(".hidebtn").click(function () {
        $("#hidediv").hide(1000, "linear", function () {
            alert("Hide() 方法已完成!");
        });
    });
});

//显示隐藏切换
$(document).ready(function () {
    $("#hideshow").click(function () {
        $("p").toggle(1000, "swing");
    });
});

//滑动
$(document).ready(function () {
    $("#flip1").click(function () {
        $("#panel1").slideDown("slow");
    });
    $("#flip2").click(function () {
        $("#panel2").slideUp("slow");
    });
    $("#flip3").click(function () {
        $("#panel3").slideToggle("slow");
    });
});