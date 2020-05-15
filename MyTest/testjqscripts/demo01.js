//在node.js中使用jquery

console.log("hello nodejs");

var $ = require('jquery')

$("body").append("<div>TEST</div>");
console.log($("body").html());