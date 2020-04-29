# JavaScript 标准里所有的对象

- 内置对象(Built-in Objects)： 由JavaScript语言提供的对象
  - 固有对象(Intrinsic Objects): 由标准规定, 随着JavaScript运行时创建而自动创建
  - 原生对象(Native Objects): 可以由用户通过Array,Date等内置构造器或者特殊语法创建的对象
  - 普通对象(Ordinary Objects):由{} 语法,Object构造器或者class关键字定义的类型创造的对象,它能够被原型继承.
  
> 简单来说:   
    固有对象就是js引擎创建并仅供自身消费的数据结构;  
    原生对象就是js提供的常用工具对象方便开发者快速生成特定的数据结构;  
    普通对象就是开发者自定义的数据结构;









## 9.4 Built-in Exotic Object Internal Methods and Slots

### 9.4.1 Bound Function Exotic Objects

- [[BoundTargetFunction]]
- [[BoundThis]]
- [[BoundArguments]]

#### 9.4.1.1 [[Call]]
#### 9.4.1.2 [[Construct]]
#### 9.4.1.3 [[BoundFunctionCreate]]

### 9.4.2 Array Exotic Objects

#### 9.4.2.1 [[DefineOwnProperty]] 
#### 9.4.2.2 [[ArrayCreate]] 
#### 9.4.2.3 [[ArraySpeciesCreate]] 
#### 9.4.2.4 [[ArraySetLength]] 

### 9.4.3 String Exotic Objects

### 9.4.3.1 [[GetOwnProperty]]
#### 9.4.3.2 [[DefineOwnProperty]]
#### 9.4.3.3 [[OwnPropertyKeys]]
#### 9.4.3.4 StringCreate
#### 9.4.3.4 StringGetOwnProperty



### 9.4.4 Arguments Exotic Objects
#### 9.4.4.1 [[GetOwnProperty]]
#### 9.4.4.2 [[DefineOwnProperty]]
#### 9.4.4.3 [[Get]]
#### 9.4.4.4 [[Set]]
#### 9.4.4.5 [[Delete]]
#### 9.4.4.6 CreateUnmappedArgumentsObject
### 9.4.4.7 CreateMappedArgumentsObject
#### 9.4.4.7.1  MakeArgGetter
#### 9.4.4.7.2  MakeArgSetter

### 9.4.5 Integer-Indexed Exotic Objects
#### 9.4.5.1 [[GetOwnProperty]]
#### 9.4.5.2 [[HasProperty]]
#### 9.4.5.3 [[DefineOwnProperty]]
#### 9.4.5.4 [[Get]]
#### 9.4.5.5 [[Set]]
#### 9.4.5.6 [[OwnPropertyKeys]] 
#### 9.4.5.7 IntegerIndexedObjectCreate 
#### 9.4.5.8 IntegerIndexedElementGet
#### 9.4.5.9 IntegerIndexedElementSet

### 9.4.6 Module Namespace Exotic Objects
- [[Module]]
- [[Exports]]
- [[Prototype]]
#### 9.4.6.1 [[SetPrototypeOf]]
#### 9.4.6.2 [[IsExtensible]
#### 9.4.6.3 [[PreventExtensions]]
#### 9.4.6.4 [[GetOwnProperty]]
#### 9.4.6.5 [[DefineOwnProperty]] 
#### 9.4.6.6 [[HasProperty]]
#### 9.4.6.7 [[Get]]
#### 9.4.6.8 [[Set]]
#### 9.4.6.9 [[Delete]]
#### 9.4.6.10 [[OwnPropertyKeys]]
#### 9.4.6.11 ModuleNamespaceCreate
#### 9.4.6.9 [[Delete]]

### 9.4.7 Immutable Prototype Exotic Objects

#### 9.4.7.1 [[SetPrototypeOf]]
#### 9.4.7.2 SetImmutablePrototype