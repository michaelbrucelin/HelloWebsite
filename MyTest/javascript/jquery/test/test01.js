//将所有p元素的单击事件注册为隐藏自身
$(document).ready(function () {
    $("p.hideshow").click(function () {
        $(this).hide();
    });
});

//为安装注册单击事件
$(document).ready(function () {
    $("#hide").click(function () {
        $("p.hideshow").hide();
    });
    $("#show").click(function () {
        $("p.hideshow").show();
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
        $("p.hideshow").toggle(1000, "swing");
    });
});

//淡入
$(document).ready(function () {
    $("#fadein").click(function () {
        $("#fadediv1").fadeIn();
        $("#fadediv2").fadeIn("slow");
        $("#fadediv3").fadeIn(3000);
    });
});

//淡出
$(document).ready(function () {
    $("#fadeout").click(function () {
        $("#fadediv1").fadeOut();
        $("#fadediv2").fadeOut("slow");
        $("#fadediv3").fadeOut(3000);
    });
});

//淡入/淡出
$(document).ready(function () {
    $("#fadetoggle").click(function () {
        $("#fadediv1").fadeToggle();
        $("#fadediv2").fadeToggle("slow");
        $("#fadediv3").fadeToggle(3000);
    });
});

//颜色变淡
$(document).ready(function () {
    $("#fadeto").click(function () {
        $("#fadediv1").fadeTo("slow", 0.15);
        $("#fadediv2").fadeTo("slow", 0.4);
        $("#fadediv3").fadeTo("slow", 0.7);
    });
});

//滑动
$(document).ready(function () {
    $("#flipup").click(function () {
        $("#panel").slideDown("slow");
    });
    $("#flipdown").click(function () {
        $("#panel").slideUp("slow");
    });
    $("#fliptoggle").click(function () {
        $("#panel").slideToggle("slow");
    });
});

//动画1
$(document).ready(function () {
    $("#animate1").click(function () {
        $("#animatediv").animate({ left: '250px' });
        $("#animatediv").animate({ left: '0px' });
    });
});

//动画2
$(document).ready(function () {
    $("#animate2").click(function () {
        $("#animatediv").animate({ left: '250px', opacity: '0.5', width: '150px', height: '150px' });
        $("#animatediv").animate({ left: '0', opacity: '1', width: '100px', height: '100px' })
    });
});

//动画3
$(document).ready(function () {
    $("#animate3").click(function () {
        $("#animatediv").animate({ height: '+=100px', width: '+=100px' });
    });
});

//动画4
$(document).ready(function () {
    $("#animate4").click(function () {
        $("#animatediv").animate({ height: 'toggle' });
    });
});

//动画5
$(document).ready(function () {
    $("#animate5").click(function () {
        var div = $("#animatediv");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '1' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '1' }, "slow");
    });
});

//停止动画
$(document).ready(function () {
    $("#fliptoggle2").click(function () {
        $("#panel2").slideToggle(3000);
    });
    $("#stopanimate").click(function () {
        $("#panel2").stop();
    });
});

//使用回调
$(document).ready(function () {
    $("#callback").click(function () {
        $("#callbackp").hide("slow", function () {
            alert("段落现在被隐藏了");
        });
    });
});
//没有使用回调
$(document).ready(function () {
    $("#nocallback").click(function () {
        $("#callbackp").hide("slow");
        alert("现在段落即将被隐藏");
    });
});

//函数链
$(document).ready(function () {
    $("#funchain").click(function () {
        $("#funchainp")
            .css("color", "red")
            .slideUp(2000)
            .slideDown(2000);
    });
});

//获取内容
$(document).ready(function () {
    $("#showinfo1").click(function () {
        alert("Text: " + $("#showinfop1").text());
    });
    $("#showinfo2").click(function () {
        alert("HTML: " + $("#showinfop1").html());
    });
});

//获取值
$(document).ready(function () {
    $("#showinfo3").click(function () {
        alert("值为: " + $("#showinfop3").val());
    });
});

//获取属性
$(document).ready(function () {
    $("#showinfo4").click(function () {
        alert("href: " + $("#showinfop4").attr("href"));
    });
});

//设置内容
$(document).ready(function () {
    $("#setinfo1").click(function () {
        $("#setinfop1").text("Hello world!");
    });
    $("#setinfo2").click(function () {
        $("#setinfop1").html("<b>Hello world!</b>");
    });
});

//设置值
$(document).ready(function () {
    $("#setinfo3").click(function () {
        $("#setinfop3").val("hello you.");
    });
});

$(document).ready(function () {
    $("#setinfo4").click(function () {
        $("#setinfop4").text(function (i, origText) {
            return "旧文本: " + origText + " 新文本: Hello World! (index: " + i + ")";
        });
    });

    $("#setinfo5").click(function () {
        $("#setinfop5").html(function (i, origText) {
            return "旧 html: " + origText + " 新html: Hello <b>World!</b> (index: " + i + ")";
        });
    });

});

//设置属性
$(document).ready(function () {
    $("#setinfo6").click(function () {
        $("#setinfop6").attr({
            "href": "https://byteswitch.cn",
            "title": "ByteSwitch"
        });
        // 通过修改的title值来修改链接名称
        title = $("#setinfop6").attr('title');
        $("#setinfop6").html(title);
    });
});

$(document).ready(function () {
    $("#setinfo7").click(function () {
        $("#setinfop6").attr("href", function (i, origValue) {
            return origValue + "/mlin";
        });
    });
});
