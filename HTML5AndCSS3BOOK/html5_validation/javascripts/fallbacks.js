var applyPlaceholders = function(){
    $("input").placeholder();
}

Modernizr.load([{
    test: Modernizr.placeholder,
    nope: "javascripts/jquery.placeholder.js",
    callback: function(url, result){
        if(!result){
            applyPlaceholders();
        }
    }
}, {
    test: Modernizr.pattern && Modernizr.required,
    nope: "javascripts/h5f.min.js",
    callback: function(url, result){
        if(!result){
            configureHSF();
        }
    }
}]);

var configureHSF = function(){
    H5F.setup(document.getElementById("create_account"));
};