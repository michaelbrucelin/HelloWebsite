function MySetCookie() {
    var key = $("#keySet").val();
    var value = $("#valueSet").val();

    //$.cookie('name', 'value', { expires: 7, path: '/' });
    $.cookie(key, value);
    alert("done");
}

function MyGetCookie() {
    var value = $.cookie($("#keyGet").val());
    $("#valueGet").val(value);
}