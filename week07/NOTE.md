# 第7周学习记录
## [CSS脑图链接](https://www.processon.com/view/link/5eccafdd1e08530a9b1f1d3d)
## [本周作业地址链接(toy-browser完结:](./browser-toy)
![](https://jtr354.github.io/Frontend-01-Template/week07/browser-toy/viewport.jpg)
## [本周作业地址链接(两个小实验程序):](./)
```js
// 获取css规范列表
void function () {
  const container = document.getElementById('container').children
  const result = []
  for(let child of container) {
    const target = child
    if (target.getAttribute('data-tag').match(/css/i)) {
      const children1 = target.children[1]
      result.push({
        name: children1.innerText,
        url: children1.children[0].href
      })
    }
  }
  console.log(JSON.stringify(result, null, 2))
}()

// 通过iframe获取每个规范的细节
void async function () {
  function happy(element, event, once) {
    return new Promise((resolve,reject) => {
      let handle = (e) => {
        resolve(e)
        once && element.removeEventListener(event, handle)
      }
      element.addEventListener(event, handle)
    })
  }
  document.body.innerHTML = ''
  const iframe = document.createElement('iframe')
  const input = document.createElement('input')
  input.type = 'file'
  document.body.appendChild(input)
  document.body.appendChild(iframe)
  const reader = new FileReader()
  let e = await happy(input, 'change')
  const file = e.target.files[0]
  reader.readAsText(file)
  e = await happy(reader, 'load')
  const result = JSON.parse(e.target.result.replace(/\r\n/g, ''))
  for (let standard of result) {
    iframe.src = standard.url
    await happy(iframe, 'load', true)
    console.log(standard.name)
  }
}()
```

# 资料
- [CSS语法：除了属性和选择器，你还需要知道这些带@的规则](https://time.geekbang.org/column/article/80042)

# 学习感悟

## css知识体系整理思路
- 找到一份合适标准
  + 以附录grammar为突破口[(css2.1语法)](https://www.w3.org/TR/CSS21/grammar.html#q25.0)
  + 去除不必要的噪音(例如: 代码注释/异常处理等)
- 提炼主干
```bash
// 例如CSS2.1标准主干如下:
@charset
@import
  rules
    @media
    @page
    rule
```
- 归纳: CSS就是一堆rule的合集
- 各个击破
  + @rule规则的研究(解决特定领域的问题)
  + rule规则研究(解决CSS主要问题)
  
## 浏览器工作原理总结
可以由一道经典的面试题说起：当你在浏览器地址栏里敲下一段URL，到整个网页展示完毕，这个过程中浏览器都发生了什么？

答案可以很丰富，也可以很概括。在这一节课中，我们主要关注浏览器的工作原理，经过一些简化，这个过程大致可以分为以下几个步骤：

【 URL 】 --(HTTP)--> 【 HTML 】 --(parse)--> 【 DOM 】 --(css computing)--> 【 DOM with CSS 】 --(layout)--> 【 DOM with position 】 --(render)--> 【 Bitmap 】

### 解析HTML（parse HTML）
- 1.拆分文件
- 2.创建状态机
  + 使用有限状态机实现HTML的分析
  + 在HTML标准中,规定HTML的状态
- 3.解析标签
  + 主要解析: 开始标签/结束标签/自封闭标签
- 4.创建元素
  + 在状态机中,除了状态迁移,还需要收集Token
- 5.处理属性
  + 属性值分别为单引号/双引号/无引号三种写法
  + 处理属性的方式跟标签类似
  + 属性结束时,将属性加到标签Token上
- 6.构建DOM树
  + 从标签构建DOM树的基本技巧 `栈`
  + 遇到开始标签时创建元素并入栈, 遇到结束标签时出栈
  + 自封闭节点可视为入栈后立即出栈
  + 任何元素的父元素是它入栈前的栈顶
- 7.文本节点
  + 文本节点与自封闭标签处理类似
  + 多个文本节点需要合并
  
### CSS computing
- 1.收集CSS规则
  + 遇到style标签时,将CSS规则保存起来
  + 调用CSS Parser来分析CSS规则
- 2.添加调用
  + 当我们创建一个元素后,立即计算CSS
  + 理论上,当我们分析一个元素时,所有CSS规则已经收集完毕
  + 在真实浏览器中,可能遇到写在body里的style标签,需要重新计算CSS情况(略)
- 3.获取父元素序列
  + 在computedCSS函数中,我们必须知道元素的所有父元素才能判断元素与规则是否匹配
  + 我们从上一步骤的stack可以获取本元素的所有的父元素
  + 因为我们首先获取的是"当前元素",所以我们获取和计算父元素匹配的顺序从内向外
- 4.拆分选择器
  + 选择器也要从当前元素向外排列
  + 复杂选择器拆成针对单个元素的选择器,需要循环匹配父元素队列
- 5.计算选择器与元素匹配
  + 根据选择器的类型和元素属性,计算是否与当前元素匹配
  + 这里仅仅时实现了三种基本选择器,实际浏览器要处理更多
- 6.生成computed属性
  + 一旦选择匹配,就应用选择器到元素上,形成computedStyle
- 7.确定规则覆盖关系
  + CSS规则根据specificity和后来优先规则覆盖
  + specificity是个四元组,越左边权重越高
  + 一个CSS规则的specificity根据包含的简单选择器相加而成
  
### Layout
理解Main Axis和Cross Axis  
layout时机: 元素标签结束位置
- 1.收集元素进行(hang)
  + 分行
  + 根据主轴尺寸,把元素分进行
  + 若设置了no-wrap,则强行分配进第一行
- 2.计算主轴方向
  + 找出所有flex元素
  + 把主轴方向的剩余尺寸按照比例分配给这些元素
  + 若剩余空间为负数,所有flex元素为0,等比压缩剩余元素
- 3.计算交叉轴方向
  + 根据每一行中最大元素尺寸计算行高
  + 根据行高align-item和align-self,确定元素具体位置
  + 多行的时候根据align-content进行交叉行的分配
  
### Render 绘制
- 1.绘制DOM
  + 依赖npm包images绘制
  + 递归调用子元素的绘制方法完成DOM树绘制
  + 忽略一些不需要的绘制节点
  + 实际浏览器中,文字绘制是难点,需要依赖字体库(略)
  + 实际浏览器中,还会对一些图层做compositing<混合>(略)

  
> [以上内容的摘录地址(优秀作业week06)](https://github.com/mosiya/Frontend-01-Template/blob/master/week06/NOTE.md)  
>[以上内容的摘录地址(优秀作业week07)](https://github.com/mosiya/Frontend-01-Template/blob/master/week07/NOTE.md)  
>写不出来抄一遍优秀作业,也是好的.