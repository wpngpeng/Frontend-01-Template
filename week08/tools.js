// div#a.b .c[id=x]
// [0,1,3,1] [id=x] 算在cls
// #a:not(#b)
// [0,2,0,0] 为类不占
// *.a
// [0,0,1,0] *号不占
// div.a
// [0,0,1,1]

function match(selector, element) {
  // 1. 分析选择器列表
  // 2. 分析combinator
  // 3. 分析singleSelector
  const selectors = selector.split(',')
  selectors.forEach((selector) => {
    combinator(selector.trim())
  })
  return true
}

function combinator(selector) {
  for(let c of selector) {
      getAST(c)
  }
}

function getAST(c) {
  console.log(c)
}

// match('div #id.class', document.getElementById('id'))
match('div #id.class')