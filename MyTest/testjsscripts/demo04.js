//string对象
var str = "abcde,fghij.klmno~pqrst,uvwxyz";
console.log(str.length);
console.log(str.charAt(4));
console.log(str.indexOf('d'));
console.log(str.split(','));
//console.log(str.split(',').split('.'));  不能链式书写？
console.log(str.split(/,|.|~/));