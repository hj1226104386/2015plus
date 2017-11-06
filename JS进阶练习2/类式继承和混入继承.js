'use strict'

/**
 * Object.create()方法实现类式继承
 */

// Student构造函数
function Student() {
  this.age = 18;
  this.name = '黄锦';
  console.log(this)
}

// 给原型添加属性方法
Student.prototype = {
  constructor: Student,
  newName: '黄锦2号'
}

// Teacher构造函数
function Teacher() {
  Student.call(this);
}
Teacher.prototype = {
  constructor: Teacher,
  gender: '男老师'
}

// Object.create()方式实现类式继承
function create(obj) {
  var F = function() {};
  F.prototype = obj;
  return new F()
}

// Teacher的原型继承Student的原型
Teacher.prototype = Object.create(Student.prototype);
Teacher.prototype.constructor = Teacher;

var teacher = new Teacher();

/**
 * 混入继承 Object.assign() 深度拷贝来实现
 */

function F1() {
  this.age = 11;
  // 其他的对象内部this强行指向F1的实例
  F2.call(this);
  F3.call(this);
}
function F2() {
  this.age = 12;
}
function F3() {
  this.age = 13;
}
// 类式继承 继承一个
F1.prototype = Object.create(F2.prototype)
// 混入继承 继承多个
Object.assign(F1.prototype,F2.prototype) // 深度拷贝

F1.prototype.constructor = F1; // 重新指向F1构造函数


