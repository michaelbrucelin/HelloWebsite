const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document = document;
const window = document.defaultView;
const $ = require('jquery')(window);

//jquery中可以使用map方法遍历数组
var arr = [1, 2, 3, 4];
console.log(arr);

arr = $.map(arr, function (item) {
    return item * item;
});
console.log(arr);

//自己使用js模拟一个map方法