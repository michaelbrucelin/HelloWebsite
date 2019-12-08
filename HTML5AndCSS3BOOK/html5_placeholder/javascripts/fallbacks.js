var applyPlaceholders = function(){
    $("input").placeholder();
}

Modernizr.load({
    test: Modernizr.placeholder,
    nope: "javascripts/jquery.placeholder.js",
    callback: function(url, result){
        if(!result){
            applyPlaceholders();
        }
    }
});