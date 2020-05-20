//call()、apply()与bind()

var name = '张三', age = 18;
var obj = {
    name: '李四',
    objAge: this.age,
    myFun: function () {
        console.log(this.name + "的年龄是：" + this.age);
    }
}

console.log("======== Sample 01 ========");
console.log(obj.objAge);
obj.myFun();

var name2 = '王五';
function myshow() {
    console.log(this.name2);
}

console.log("======== Sample 02 ========");
myshow();