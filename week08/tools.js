// div#a.b .c[id=x]
// [0,1,3,1] [id=x] 算在cls
// #a:not(#b)
// [0,2,0,0] 为类不占
// *.a
// [0,0,1,0] *号不占
// div.a
// [0,0,1,1]

function match(selector, element) {
  return true
}

match('div #id.class', document.getElementById('id'))