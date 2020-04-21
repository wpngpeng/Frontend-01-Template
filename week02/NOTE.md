# 本周概要
- [计算机语言通识](#计算机语言通识)

- [参考名词](#参考名词)

# 计算机语言通识
> 为了更好的理解和查阅JavaScript标准
### 语言按语法分类
- 非形式语言
  - 中文, 英文
- 形式语言(乔姆斯基谱系)
  - 0型 无限制文法
    - \?::=?
  - 1型 上下文相关文法
    - \?\<A>\?::=?\<B>?
  - 2型 上下文无关文法
    - \<A>::=?
  - 3型 正则文法
    - \<A>::=\<A>?
    - \<A>::=?\<A> (不允许)
  
### 产生式(BNF)
- 尖括号括起来的名称来表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的复合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- *表示重复多次
- |表示或
- +表示至少一次
> 终结符: 不会变的字(关键字,字面量,符号等等不会变的东西)  
非终结符: 会变的字(变量)

> 其他产生式: EBNF ABNF Customized

```bash
// 四则运算产生式BNF
<Number> :: = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<DecimalNumber> :: = "0" | (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") <Number>*)

<PrimaryExpression> :: =
   <DecimalNumber> |
  "(" <LogicExpression> ")"

<MultiplicationExpression> :: =
  <PrimaryExpression> |
  <Multiplication> "*" <PrimaryExpression> |
  <Multiplication> "/" <PrimaryExpression>

<AdditionExpression> :: =
  <MultiplicationExpression> |
  <AdditionExpression> "+" <MultiplicationExpression> |
  <AdditionExpression> "-" <MultiplicationExpression>

<LogicExpression> :: =
  <AdditionExpression> |
  <LogicExpression> "||" <AdditionExpression> |
  <LogicExpression> "&&" <AdditionExpression>
```

### 图灵完备性
- 图灵完备性
  - 命令式(图灵机)
    - goto
    - if 和 while
  - 声明式(lambada)
    - 递归
> 简单的来说可编程的称之为图灵完备性,反之则不能,例如html,css

### 动态语言与静态语言
- 动态
> 运行时才知道数据类型
- 静态
> 编译时就知道数据类型

### 类型系统
- 动态类型系统与静态类型系统
- 强类型与弱类型
> 强类型指数据类型不能隐式转换,弱类型则可以.
- 复合类型
  - 结构体
  - 函数签名
- 子类型
  - 逆变/协变
### 一般命令式编程语言
![](https://jtr354.github.io/Frontend-01-Template/week02/command-languages.jpg)
## 参考名词
- [乔姆斯基谱系](https://zh.wikipedia.org/wiki/%E4%B9%94%E5%A7%86%E6%96%AF%E5%9F%BA%E8%B0%B1%E7%B3%BB)
- [Brainfuck](https://zh.wikipedia.org/wiki/Brainfuck)
- [巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF](https://zh.wikipedia.org/wiki/%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F)
- [图灵机（Turing machine）](https://zh.wikipedia.org/wiki/%E5%9B%BE%E7%81%B5%E6%9C%BA)
- [图灵完备性](https://zh.wikipedia.org/wiki/%E5%9C%96%E9%9D%88%E5%AE%8C%E5%82%99%E6%80%A7)
- [Bjarne Stroustrup（比雅尼·斯特劳斯特鲁普）C++ 之父](https://zh.wikipedia.org/wiki/%E6%AF%94%E9%9B%85%E5%B0%BC%C2%B7%E6%96%AF%E7%89%B9%E5%8A%B3%E6%96%AF%E7%89%B9%E9%B2%81%E6%99%AE)

- [终结符： 最终在代码中出现的字符](https://zh.wikipedia.org/wiki/%E7%B5%82%E7%B5%90%E7%AC%A6%E8%88%87%E9%9D%9E%E7%B5%82%E7%B5%90%E7%AC%A6)
- 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
- 静态和动态语言： https://www.cnblogs.com/raind/p/8551791.html
- 强类型： 无隐式转换
- 弱类型： 有隐式转换
- 协变与逆变： https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html
- Yacc 与 Lex 快速入门： https://www.ibm.com/developerworks/cn/linux/sdk/lex/index.html
- 关于元编程： https://www.zhihu.com/question/23856985
- 编程语言的自举： https://www.cnblogs.com/lidyan/p/6727184.html
- 推荐阅读：ECMA-262 Grammar Summary 部分