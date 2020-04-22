# 本周概要
- [作业练习](#作业练习)
- [本周心得](#本周心得)
- [计算机语言通识](#计算机语言通识)

- [参考名词](#参考名词)

# 作业练习
[作业演示地址](https://jtr354.github.io/Frontend-01-Template/week02/index.html)
### 写一个正则表达式 匹配所有 Number 直接量
```js
/**
*  思路：
*   先要看懂ecma262标准
*   就要先去理解产生式
*   然后Number直接量的定义，根据它的定义写正则会轻松一点
*     1. 16进制
*     2. 8进制
*     3. 2进制
*     4. 10进制（比较绕，有小数点还有对数的情况）
*   
*/
/^0[x|X]([0-9]|[a-f]|[A-F])+$|^0[o|O][0-7]+$|^0[b|B][0-1]+$|^[-|\+]?0$|^[-|\+]?[1-9][0-9]*?\.?(([0-9]*)?)([e|E][-|+]?([0-9]|[1-9][0-9])+)?$|^[-|\+]?\.([0-9]+)([e|E][-|+]?([0-9]|[1-9][0-9])+)?$|^[-|\+]?Infinity$/

```
### 写一个 UTF-8 Encoding 的函数
```js
/*
* 思路：
*   先搞清楚要干啥https://tools.ietf.org/html/rfc3629
*   找到 UTF-8 definition， 在最下面给出了utf-8的实现方式
*   在结合ecma标准定义的范围
*/
// 将标准中的xx替换成对应的二进制码
function formatPos(pos, octets) {
    if (octets == null) {
      return 'URIError'
    }
    let len = octets.length
    let binary = pos.toString(2).padStart(len, '0')
    let str = ''
    for (let i = octets.length -1; i > -1 ; i--) {
      let tmp = octets[i]
      let code = octets[i]
      if (/(x|y|z|u|w)/.test(tmp)) {
        code = binary[i]
      }
      str = code + str
    }
    return str.replace(/(.{8})/g, '$1  ')
  }
// ecma utf8 encoding table18表
  const utf8Table = new Map([
    [
      [0x000, 0x007f, '0zzzzzzz'],
      formatPos
    ],
    [
      [0x0080, 0x07FF, '110yyyyy10zzzzzz'],
      formatPos
    ],
    [
      [0x0800, 0xD7FF, '1110xxxx10yyyyyy10zzzzzz'],
      formatPos
    ],
    [
      [0xD800, 0xDBFF, '11110uuu10uuwwww10xxyyyy10zzzzzz'],
      formatPos
    ],
    [
      [0xDC00, 0xDFFF, '11110uuu10uuwwww10xxyyyy10zzzzzz'],
      formatPos
    ],
    [
      [0xD800, 0xDBFF],
      formatPos
    ],
    [
      [0xDC00, 0xDFFF],
      formatPos
    ],
    [
      [0xE000, 0xFFFF, '1110xxxx10yyyyyy10zzzzzz'],
      formatPos
    ],
  ])
// 根据ecma标准转换
  function charToUtf8(char) {
    const codePoint = char.codePointAt()
    let code = ''
    utf8Table.forEach((fn, key) => {
      if (codePoint >= key[0] && codePoint <= key[1]) {
        code = fn(codePoint, key[2])
      }
    })
    return code
  }
// 主函数
  function utf8Encodings (str) {
    let code = Array.prototype.map.call(str, char => {
      return charToUtf8(char)
    })
    return code.join(' + ')
  }

```
#本周心得
[回到顶部](#本周概要 "tips: back")
> 通过学习BNF产生式,逐渐对ecma262产生好感,不再畏惧!  
> 通过作业1也发现了自己的一个知识盲区 1e+3 equal 1×10^3,以前从来没有用过!  
> 想想当初上手小程序的时候,就是在工作中不断的大量阅读文档然后实践,然后再看文档,才有今天的熟练程度.  

> winter;老师上课轻松,有种抱着爆米花观影的感觉;但他讲的东西却一点都不轻松,基本上都是我不知道我不知道的东西. winter老师真的是人如其名,如冬天里的一股温泉,温暖人心源源不断.只要你愿意去取,总是有的.这就是我们的良师益友.我们的学习榜样.

> 这周其实就是通过学习BNF这一种产生式,能够看得下去ecma的标准,理解词法和类型  
> 然后通过这个学习的过程,形成自己学习语言的方法论?

# 计算机语言通识
[回到顶部](#本周概要 "tips: back")
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
[回到顶部](#本周概要 "tips: back")
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