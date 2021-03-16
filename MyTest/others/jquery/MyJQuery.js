(function (window, undefined) {
    var $ = function (id) {
        return document.getElementById(id);
    }
    window.jquery = window.$ = $;
})(window);