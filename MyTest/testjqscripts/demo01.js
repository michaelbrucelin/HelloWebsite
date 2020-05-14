import "./node_modules/jquery/dist/jquery.min.js"

var arr = [1, 2, 3, 4];
console.log(arr);

arr = $.map(arr, function (item) {
    return item * item;
});
console.log(arr);