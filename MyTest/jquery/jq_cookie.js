function MySetCookie() {
    var key = $("#keySet").val();
    var value = $("#valueSet").val();

    //$.cookie('name', 'value', { expires: 7, path: '/', domain: 'example.com', secure: true });
    //第三个参数是一些详细设置
    //expiers，设置cookie超时时间，只是给浏览器建议，有可能没到期就被浏览器给清除了，如果没有设置，在浏览器关闭时就被清除
    //path，路径，默认只有设置cookie的网页才能读取该cookie
    //domain，域名，默认是创建cookie的网页所拥有的域名
    //secure，当网站为https协议时，需启用，默认为false
    $.cookie(key, value);
    alert("done");
}

function MyGetCookie() {
    var value = $.cookie($("#keyGet").val());
    $("#valueGet").val(value);
}