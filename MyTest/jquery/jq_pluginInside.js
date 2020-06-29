//JQuery插件原理
//添加一个“静态方法”
$.extend({
    "myMax": function (x, y) {
        return x > y ? x : y;
    },
    "myMin": function (x, y) {
        return x > y ? y : x;
    }
})

//添加一个“实例方法”
$.fn.extend({
    "myChecked": function () {
        $(this).attr("checked", true);
    },
    "myUnChecked": function () {
        $(this).attr("checked", false);
    }
})