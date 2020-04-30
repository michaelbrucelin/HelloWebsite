var regex01 = new RegExp("CS\\d{5}");  //这样声明需要转义
var regex02 = /CS\d{5}/;               //这样声明更简洁，不需要转义

//test()相当于C#中的IsMatch()
console.log(regex01.test("aCS12345b"));
console.log(regex02.test("aCS12345b"));

//exec()相当于C#中的Match()和Matches()，具体是只提取第一组还是提取所有组，取决于正则的声明，而不是函数的调用
console.log(regex01.exec("aCS12345b"));
console.log(regex02.exec("aCS12345b"));

var regex03 = /CS\d{5}/i;  //忽略大小写
var regex04 = /CS\d{5}/g;  //在使用exec提取时，默认只提取第一组，模式中加g会提取所有组