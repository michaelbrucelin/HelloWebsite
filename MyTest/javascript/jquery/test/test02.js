//追加文本
$(document).ready(function () {
    $("#addele1").click(function () {
        $("#addelep1").append("<b>追加文本</b>。");
    });

    $("#addele2").click(function () {
        $("#addelep2").append("<li>追加列表项</li>");
    });
});

//插入文本
$(document).ready(function () {
    $("#addele3").click(function () {
        $("#addelep1").prepend("<b>在开头追加文本</b>。");
    });
    $("#addele4").click(function () {
        $("#addelep2").prepend("<li>在开头添加列表项</li>");
    });
});

//追加多个文本
function appendText() {
    var txt1 = "<p>文本-1。</p>";              // 使用 HTML 标签创建文本
    var txt2 = $("<p></p>").text("文本-2。");  // 使用 jQuery 创建文本
    var txt3 = document.createElement("p");
    txt3.innerHTML = "文本-3。";               // 使用 DOM 创建文本 text with DOM
    $("#addelep3").append(txt1, txt2, txt3);   // 追加新元素
}

//添加元素
$(document).ready(function () {
    $("#addele5").click(function () {
        $("#addelep5").before("<b>之前</b>");
    });

    $("#addele6").click(function () {
        $("#addelep5").after("<i>之后</i>");
    });
});

//追加多个元素
function afterText() {
    var txt1 = "<b>I </b>";                    // 使用 HTML 创建元素
    var txt2 = $("<i></i>").text("love ");     // 使用 jQuery 创建元素
    var txt3 = document.createElement("big");  // 使用 DOM 创建元素
    txt3.innerHTML = "jQuery!";
    $("#addelep5").after(txt1, txt2, txt3);    // 在图片后添加文本
}

//移除元素
$(document).ready(function () {
    $("#delele1").click(function () {
        $("#delelediv1").remove();
    });
});

//清空元素
$(document).ready(function () {
    $("#delele2").click(function () {
        $("#delelediv1").empty();
    });
});

//过滤被删除的元素
$(document).ready(function () {
    $("#delele3").click(function () {
        $("#delelediv1>p").remove(".italic");
    });
});

//添加css
$(document).ready(function () {
    $("#opcss1").click(function () {
        $("#opcssp2").addClass("class01");
    });
});

//移除css
$(document).ready(function () {
    $("#opcss2").click(function () {
        $("#opcssp2").removeClass("class01");
    });
});

//切换css
$(document).ready(function () {
    $("#opcss3").click(function () {
        $("#opcssp2").toggleClass("class01");
    });
});

//返回css属性
$(document).ready(function () {
    $("#funcss1").click(function () {
        alert("背景颜色 = " + $("#funcssp1").css("background-color"));
    });
});

//设置css属性
$(document).ready(function () {
    $("#funcss2").click(function () {
        $("#funcssp1").css("background-color", "yellow");
    });
});

//设置多个css属性
$(document).ready(function () {
    $("#funcss3").click(function () {
        $("#funcssp1").css({ "background-color": "green", "font-size": "200%" });
    });
});

//获取元素尺寸
$(document).ready(function () {
    $("#showsize1").click(function () {
        var txt = "";
        var div = $("#showsizediv1");
        txt += "div宽度（content）: " + div.width() + "</br>";
        txt += "div高度（content）: " + div.height() + "</br>";
        txt += "div宽度（padding）: " + div.innerWidth() + "</br>";
        txt += "div高度（padding）: " + div.innerHeight() + "</br>";
        txt += "div宽度（border）: " + div.outerWidth() + "</br>";
        txt += "div高度（border）: " + div.outerHeight() + "</br>";
        txt += "div宽度（margin）: " + div.outerWidth(true) + "</br>";
        txt += "div高度（margin）: " + div.outerHeight(true);
        $("#showsizediv1").html(txt);
    });
});

//直接父元素
$(document).ready(function () {
    $("#looparent1").click(function () {
        $("#looparentp1").parent().css({ "color": "red", "border": "2px solid red" });
    });
});

//所有祖先元素
$(document).ready(function () {
    $("#looparent2").click(function () {
        $("#looparentp1").parents().css({ "color": "red", "border": "2px solid red" });
    });
});

//指定的祖先元素(ul元素)
$(document).ready(function () {
    $("#looparent3").click(function () {
        $("#looparentp1").parents("ul").css({ "color": "red", "border": "2px solid red" });
    });
});

//两个给定元素之间的所有祖先元素
$(document).ready(function () {
    $("#looparent4").click(function () {
        $("#looparentp1").parentsUntil("div").css({ "color": "red", "border": "2px solid red" });
    });
});

//直接子元素
$(document).ready(function () {
    $("#loopchild1").click(function () {
        $("#loopchildp1").children().css({ "color": "red", "border": "2px solid red" });
    });
});

//指定的直接子元素(p.class=1)
$(document).ready(function () {
    $("#loopchild2").click(function () {
        $("#loopchildp1").children("p.1").css({ "color": "red", "border": "2px solid red" });
    });
});

//指定的子元素(span元素)
$(document).ready(function () {
    $("#loopchild3").click(function () {
        $("#loopchildp1").find("span").css({ "color": "red", "border": "2px solid red" });
    });
});

//所有子元素
$(document).ready(function () {
    $("#loopchild4").click(function () {
        $("#loopchildp1").find("*").css({ "color": "red", "border": "2px solid red" });
    });
});

//所有同胞元素

//指定的同胞元素(p)

//下一个同胞元素

//所有跟随的同胞元素

//两个给定元素之间的所有跟随的同胞元素
