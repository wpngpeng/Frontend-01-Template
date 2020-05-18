/**
* 1.拆分文件
* 2.创建状态机
* 3.解析标签
* 4.创建元素
* 5.处理属性
* 6.构建DOM树
* 7.文本节点
 * 目的是什么?了解浏览器工作原理.第一步就是把html字符流转换成dom树
*/
const EOF = Symbol('EOF') // END OF FILE
let currentToken
let currentAttribute

// function emit(token) {
//   if (token.type !== 'text') {
//     console.log(token)
//   }
// }
//
// function data(c) {
//   if (c === '<') {
//     return tagOpen
//   } else if ( c === EOF) {
//     emit({
//       type: EOF
//     })
//     return false
//   } else {
//     emit({
//       type: 'text',
//       content: c
//     })
//     return data
//   }
// }
// function tagOpen(c) {
//   if (c === '/') {
//     return endTagOpen
//   } else if (c.match(/^[a-zA-Z]$/)) {
//     currentToken = {
//       type: 'startTag',
//       tagName: ''
//     }
//     return tagName(c)
//   } else {
//     emit({
//       type: 'text',
//       content: c
//     })
//     return data
//   }
// }
//
// function tagName(c) {
//   if (c.match(/^[\t\n\f ]$/)) {
//     return beforeAttributeName
//   } else if (c === '/') {
//     return selfClosingStartTag
//   } else if (c === '>') {
//     emit(currentToken)
//     return data
//   } else if (c.match(/^[a-zA-Z]$/)) {
//     currentToken.tagName += c.toLowerCase()
//     return tagName
//   } else {
//     return tagName
//   }
// }
//
// function beforeAttributeName(c) {
//   if (c.match(/^[\t\n\f ]$/)) {
//     return beforeAttributeName
//   } else if ( c === '>' || c === '/' || c === EOF) {
//     return afterAttributeName(c)
//   } else if (c === '=') {
//   } else {
//     currentAttribute = {
//       name: '',
//       value: ''
//     }
//     return attributeName(c)
//   }
// }
//
// function attributeName(c) {
//   if (c.match(/^[\t\n\f ]$/ || c === '/' || c === '>' || c === EOF)) {
//     return afterAttributeName(c)
//   } else if (c === '=') {
//     return beforeAttributeName
//   } else if (c === '\u0000') {
//
//   } else if (c === '\"' || c === "'" || c === '<') {
//
//   } else {
//     currentAttribute.name += c
//     return attributeName
//   }
//
// }
//
// function beforeAttributeValue(c) {
//   if (c.match(/^[\t\n\f ]$/) || c === '/' || c === '>' || c === EOF) {
//     return beforeAttributeValue
//   } else if (c === '\"') {
//     return doubleQuotedAttributeValue
//   } else if (c === '\'') {
//     return singleQuotedAttributeValue
//   } else if (c === '>') {
//
//   } else {
//     return UnqutoedAttributeValue(c)
//   }
// }
//
// function doubleQuotedAttributeValue(c) {
//   if (c === "\"") {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     return afterQuotedAttributeValue
//   } else if (c === '\u0000') {
//
//   } else if (c === EOF) {
//
//   } else {
//     currentAttribute.value += c
//     return doubleQuotedAttributeValue
//   }
// }
//
// function singleQuotedAttributeValue(c) {
//   if (c === '\'') {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     return afterQuotedAttributeValue
//   }else if (c === '\u0000') {
//
//   } else if (c === EOF) {
//
//   } else {
//     currentAttribute.value += c
//     return singleQuotedAttributeValue
//   }
// }
//
// function afterQuotedAttributeValue(c) {
//   if (c.match(/^[\t\n\f ]$/)) {
//     return beforeAttributeName
//   } else if (c === '/') {
//     return selfClosingStartTag
//   } else if (c === '>') {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     emit(currentToken)
//     return data
//   } else if (c === EOF) {
//
//   } else {
//     currentAttribute.value += c
//     return afterQuotedAttributeValue
//   }
// }
//
//
// function UnqutoedAttributeValue(c) {
//   if (c.match(/^[\t\n\f ]$/)) {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     return beforeAttributeName
//   } else if (c==='/') {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     return selfClosingStartTag
//   } else if (c === '>') {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     emit(currentToken)
//     return data
//   } else if (c==='\u0000') {
//
//   } else if (c === '\"' || c === '\'' || c === '<' || c === '=' || c === '`') {
//   } else if (c === EOF) {
//   } else {
//     currentAttribute.value += c
//     return UnqutoedAttributeValue
//   }
// }
//
// function afterAttributeName(c) {
//   if (c.match(/^\t\n\f $/)) {
//     return afterAttributeName
//   } else if (c === '/') {
//     return selfClosingStartTag
//   } else if (c === '=') {
//     return beforeAttributeValue
//   } else if (c === '>') {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     emit(currentToken)
//     return data
//   } else if (c === EOF) {
//
//   } else {
//     currentToken[currentAttribute.name] = currentAttribute.value
//     currentAttribute = {
//       name: '',
//       value: ''
//     }
//     return attributeName(c)
//   }
//
// }
//
// function selfClosingStartTag(c) {
//   if (c === '>') {
//     currentToken.isSelfClosing = true
//     emit(currentToken)
//     return data
//   } else if (c === EOF) {
//
//   } else {
//     return beforeAttributeName
//   }
// }
//
// function endTagOpen(c) {
//   if (c.match(/^[a-zA-Z]$/)) {
//     currentToken = {
//       type: 'endTag',
//       tagName: ''
//     }
//     return tagName(c)
//   } else if (c === '>') {
//     // return data
//   } else if (c === EOF) {
//
//   } else {
//
//   }
// }

function emit(token) {
  console.log(token)
}

function data (c) {
  if (c === '<') {
    return tagOpen
  } else if (c === EOF) {
    return
  } else {
    return data
  }
}

function tagOpen(c) {
  if (c === '/') {
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'startTag',
      tagName: ''
    }
    return tagName(c)
  } else if (c === EOF) {
    throw new Error('This is an eof-before-tag-name parse error')
  } else {
    return data(c)
  }
}

function endTagOpen(c) {
  throw new Error('test')
}

function tagName(c) {
  if (c === /^[\t\n\f ]$/) {
    throw new Error('beforeAttributeName')
  } else if (c === '/') {
    throw new Error('selfClosingStartTag')
  } else if (c === '>') {
    emit({})
    return data(c)
  } else if (c.match(/^[a-zA-Z]$/)) {

  } else if (c === EOF) {
    throw new Error('This is an eof-in-tag parse error.')
  } else {
    return tagName
  }
}

module.exports = function parserHTML(html) {
  let state = data
  for (let c of html) {
    console.log(state, c)
    state = state(c)
  }
  state = state(EOF)
  return {}
}

