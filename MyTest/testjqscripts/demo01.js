//在node.js中使用jquery

console.log("hello nodejs");

require("jsdom").env("", function (err, window) {
  if (err) {
    console.error(err);
    return;
  }
  var $ = require("jquery")(window);
  $("body").append("<div>TEST</div>");
  console.log($("body").html());
});