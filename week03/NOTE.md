### JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性
- ### Function Object：
   #### [[call]] :
   执行与此对象关联的代码。通过函数调用表达式调用。内部方法的参数是一个this值和一个包含通过调用表达式传递给函数的参数的列表。
   #### [[Construct]] :
   一种用于创建和初始化class创建的对象的特殊方法。
- ### Array Exotic Objects：
   #### [[DefineOwnProperty]] ：
   直接在对象上定义新属性，或修改对象上的现有属性，然后返回对象。
- ### Arguments Exotic Objects：
   #### [[GetOwnProperty]] ：
   返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol  值作为名称的属性）组成的数组
   #### [[DefineOwnProperty]] ：
   直接在对象上定义新属性，或修改对象上的现有属性，然后返回对象。
   #### [[Get]] ：
   将对象属性绑定到查询该属性时将被调用的函数。
   #### [[Set]] ：
   对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
   #### [[Delete]] ：
   删除对象的某个属性；如果没有指向这个属性的引用，那它最终会被释放。
- ### Integer-Indexed Exotic Objects：
   #### [[GetOwnProperty]] ：
   返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol  值作为名称的属性）组成的数组
   #### [[HasProperty]] ：
   指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
   #### [[DefineOwnProperty]]：
   直接在对象上定义新属性，或修改对象上的现有属性，然后返回对象。
   #### [[Get]] ：
   将对象属性绑定到查询该属性时将被调用的函数。
   #### [[Set]] ：
   当尝试设置属性时，set语法将对象属性绑定到要调用的函数。
   #### [[OwnPropertyKeys]] ：
   #### [[Module]] ：
   引入的模块的功能
   #### [[Exports]] ：
   导出模块的功能
   #### [[Prototype]] ：
   原型对象。
- ### Module Namespace Exotic Objects：
   #### [[Module]] ：
    引入的模块的功能
   #### [[Exports]]：
     导出模块的功能
   #### [[Prototype]] ：
     原型对象。
- ### Immutable Prototype Exotic Objects：
   #### [[SetPrototypeOf]] ：
   设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。


