// 原型链继承,多个实例对共用引用类型

function fa() {
  this.colors = ["red", "blue", "green"];
}

function son() {}

son.prototype = new fa();

// 构造函数继承,无法继承原型属性及方法

function fa1() {
  this.colors = ["red", "blue", "green"];
}

function son1() {
  fa1.call(this);
}

son1.prototype.constructor = son1;

// 组合继承,子代实例对象会有两份相同的属性/方法，且引用类型....

function fa2() {
  this.colors = ["red", "blue", "green"];
}

function son2() {
  fa2.call(this);  // 一份
}

son2.prototype = new fa2(); //两份
son2.prototype.constructor = son2;

// 寄生组合继承
function fa3() {
  this.colors = ["red", "blue", "green"];
}

function fun() {}
fun.prototype = fa3.prototype;

function son3() {
  fa3.call(this);
}
son3.prototype = new fun();
son3.prototype.constructor = son3;



// es6 class继承 原理就是寄生组合继承
class fa4 {
  constructor() {
    this.colors = ["red", "blue", "green"];
  }
}

class son4 extends fa4 {
  constructor() {
    super();  // super关键字，作为对象访问，指向父类的原型对象；作为函数调用，指向父类的构造函数。
  }
}