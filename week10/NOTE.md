# 第10周学习记录
## DOM
### [Range API](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
- range.setStartBefore
- range.setEndBefore
- range.setStart
- range.setEnd
- range.selectNode
- range.selectNodeContents


## CSSOM
### Rules
- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p{color:pink}", 0)
- document.styleSheets[0].removeRule(0)

### Rule
- CSSStyleRule
  + selectorText
  + style
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule

### getComputedStyle
- window.getComputedStyle(elt, pseudoElt)
 - elt 想要获取的元素
 - pseudoElt 可选,伪元素

## CSSOM View
可以操控打开的子window
### 窗口API
- moveTo(x,y)窗口移动到屏幕的特定坐标；
- moveBy(x,y)窗口移动特定距离；
- resizeTo(x,y)改变窗口大小到特定尺寸；
- resizeBy(x,y)改变窗口大小特定尺寸。
`tips: By差值 To到指定位置`
### 滚动API
### 视口滚动API
- scrollX 是视口的属性，表示 X 方向上的当前滚动距离，有别名 pageXOffset;
- scrollY 是视口的属性，表示 Y 方向上的当前滚动距离，有别名 pageYOffset；
- scroll(x, y) 使得页面滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}；
- scrollBy(x, y) 使得页面滚动特定的距离，支持传入配置型参数 {top, left}。
### 元素滚动API
- scrollTop 元素的属性，表示 Y 方向上的当前滚动距离。
- scrollLeft 元素的属性，表示 X 方向上的当前滚动距离。
- scrollWidth 元素的属性，表示元素内部的滚动内容的宽度，一般来说会大于等于元素宽度。
- scrollHeight 元素的属性，表示元素内部的滚动内容的高度，一般来说会大于等于元素高度。
- scroll(x, y) 使得元素滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}。
- scrollBy(x, y) 使得元素滚动到特定的位置，支持传入配置型参数 {top, left}。
- scrollIntoView(arg) 滚动元素所在的父元素，使得元素滚动到可见区域，可以通过 arg 来指定滚到中间、开始或者就近。
### 布局API
- window.innerHeight, window.innerWidth 这两个属性表示视口的大小。
- window.outerWidth, window.outerHeight 这两个属性表示浏览器窗口占据的大小，很多浏览器没有实现，一般来说这两个属性无关紧要。
- window.devicePixelRatio 这个属性非常重要，表示物理像素和 CSS 像素单位的倍率关系，Retina 屏这个值是 2，后来也出现了一些 3 倍的 Android 屏。
- window.screen （屏幕尺寸相关的信息）
  + window.screen.width, window.screen.height 设备的屏幕尺寸。
  + window.screen.availWidth, window.screen.availHeight 设备屏幕的可渲染区域尺寸，一些 Android 机器会把屏幕的一部分预留做固定按钮，所以有这两个属性，实际上一般浏览器不会实现的这么细致。
  + window.screen.colorDepth, window.screen.pixelDepth 这两个属性是固定值 24，应该是为了以后预留。
### 元素布局信息
- getClientRect() `tips: inline-level会产生多个盒子`
- getBoundingClientRect()


## [TicTacToe编程能力练习](https://jtr354.github.io/Frontend-01-Template/week10/TicTacToe.html)