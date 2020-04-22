# 本周学习主题：编程语言通识 & JavaScript | 词法，类型
### 一、编程语言通识
#### 1、非形式语言
##### &nbsp;&nbsp;&nbsp;&nbsp;（1）英文
##### &nbsp;&nbsp;&nbsp;&nbsp;（2）中文
#### 2、形式语言（乔姆斯基谱系）
##### &nbsp;&nbsp;&nbsp;&nbsp;（1）0型 无限制文法      
##### &nbsp;&nbsp;&nbsp;&nbsp;（2）1型 上下文相关法
##### &nbsp;&nbsp;&nbsp;&nbsp;（3）2型 上下文无关法 
##### &nbsp;&nbsp;&nbsp;&nbsp;（4）3型 正则文法
#### 3、产生式
##### &nbsp;&nbsp;&nbsp;&nbsp;（1）BNF（重点必须了解） 
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语法结构： 
```
1、用尖括号括起来的名称来表示语法结构名；
2、基础结构称终结符，引号和中间的字符表示终结符；
3、复合结构称非终结符，用尖括号括起来的名称来表示非终结符
```
##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;符号：
```
1、（）可以有括号
2、 * 表示重复多次 
3、 | 表示或
4、 + 表示至少一次
```
#### 4、一般命令式编程语言
|  名称     |属性  |
| :-------- | :--------|
| Program  |Library，Package，Module，Program |
| Structure     |Namespace，Process，Class |
| Statement     |Punctuator，Keyword，Exoression|
| Exression 	|Punctuator，Operator，Atom   |
| Atom   |Identifier，Literal |

#### 5、系统类型
```
1、动态类型系统与静态类型系统；
2、强类型与弱类型隐式转换；
3、复合类型
  （1）结构体
  （2）函数签名
4、子类型
  （1）逆变
  （2）协变
```
#### 6、动态与静态
```
1、动态
  （1）在用户的设备和在线服务器上
  （2）产品实际运行时
  （3）Runtime
2、静态
  （1）在程序员的设备上
  （2）产品开发时
  （3）Compiletime
```
#### 7、图灵完备性
```
1、命令式（图灵机）
  （1）goto
  （2）if 和while
2、声明式（lambda）
  （1）递归
```
#### 8、重学JavaSctipt
```
1、运行时
2、语义
3、语法
```
### 参考名词：
- 乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次：
0- 型文法（无限制文法或短语结构文法）包括所有的文法。
1- 型文法（上下文相关文法）生成上下文相关语言。
2- 型文法（上下文无关文法）生成上下文无关语言。
3- 型文法（正规文法）生成正则语言。
- Brainfuck ：一种极小化的程序语言，它是由 Urban Müller 在 1993 年创造的。由于 fuck 在英语中是脏话，这种语言有时被称为 Brainfck 或 Brainf**，或被简称为 BF。
- 巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集。
- 图灵机（Turing machine）：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器。
- 图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
Bjarne Stroustrup（比雅尼·斯特劳斯特鲁普）：1950 年 12 月 30 日生于丹麦奥胡斯郡，计算机科学家。他以创造 C++ 编程语言而闻名，被称为“C++ 之父”。
### 有助于你理解的知识：
- 终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符）
- 产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
- 静态和动态语言： https://www.cnblogs.com/raind/p/8551791.html
- 强类型： 无隐式转换
- 弱类型： 有隐式转换
- 协变与逆变： https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html
- Yacc 与 Lex 快速入门： https://www.ibm.com/developerworks/cn/linux/sdk/lex/index.html
- 关于元编程： https://www.zhihu.com/question/23856985
- 编程语言的自举： https://www.cnblogs.com/lidyan/p/6727184.html
- 推荐阅读：ECMA-262 Grammar Summary 部分
###  二、JavaScript | 词法，类型
#### 1、unicode
#### 2、InputElement(词法)

![avatar](https://github.com/wpngpeng/Frontend-01-Template/blob/master/week02/JavaScript%E8%AF%8D%E6%B3%95.png)

#### 参考链接：
- https://home.unicode.org/
- https://www.fileformat.info/info/unicode/
#### 有助于你理解的知识：
- 正则表达式： https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- 揭秘 0.1 + 0.2 != 0.3 https://www.barretlee.com/blog/2016/09/28/ieee754-operation-in-js/
- ASCII，Unicode 和 UTF-8 ： http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html
#### 参考名词：
- 字符集：字符编码（英语：Character encoding）、字集码是把字符集中的字符编码为指定集合中某一对象（例如：比特模式、自然数序列、8 位组或者电脉冲），以便文本在计算机中存储和通过通信网络的传递。常见的例子包括将拉丁字母表编码成摩斯电码和 ASCII。其中，ASCII 将字母、数字和其它符号编号，并用 7 比特的二进制来表示这个整数。通常会额外使用一个扩充的比特，以便于以 1 个字节的方式存储。在计算机技术发展的早期，如 ASCII（1963 年）和 EBCDIC（1964 年）这样的字符集逐渐成为标准。但这些字符集的局限很快就变得明显，于是人们开发了许多方法来扩展它们。对于支持包括东亚 CJK 字符家族在内的写作系统的要求能支持更大量的字符，并且需要一种系统而不是临时的方法实现这些字符的编码。
- Unicode ：中文：万国码、国际码、统一码、单一码。是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。
- ASCII ：（American Standard Code for Information Interchange，美国信息交换标准代码）是基于拉丁字母的一套电脑编码系统。它主要用于显示现代英语，而其扩展版本延伸美国标准信息交换码则可以部分支持其他西欧语言，并等同于国际标准 ISO/IEC 646。美国信息交换标准代码是这套编码系统的传统命名，互联网号码分配局现在更倾向于使用它的新名字 US-ASCII[2]。美国信息交换标准代码是美国电气和电子工程师协会里程碑之一。
- Token：记号、标记。JS 里有效的输入元素都可以叫 Token。
- NBSP ：不换行空格（英语：no-break space，NBSP）是空格字符，用途是禁止自动换行。HTML 页面显示时会自动合并多个连续的空白字符（whitespace character），但该字符是禁止合并的，因此该字符也称作“硬空格”（hard space、fixed space）。Unicode 码点为：U+00A0 no-break space。
- 零宽空格：（zero-width space, ZWSP）是一种不可打印的 Unicode 字符，用于可能需要换行处。在 HTML 页面中，零宽空格可以替代。但是在一些网页浏览器（例如 Internet Explorer 的版本 6 或以下）不支持零宽空格的功能。

