# 第9周学习记录

## CSSOM
### Rules
- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule("p{color:pink}", 0)
- document.styleSheets[0].removeRule(0)

### Rule
- CSSStyleRule
  + se
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