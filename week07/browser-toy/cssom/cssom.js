const css = require('css')
let rules = []
function addCSSRules(text) {
  const ast = css.parse(text)
  rules.push(...ast.stylesheet.rules)
}

function match(element, selector) {
  if (!element || !selector) {
    return false
  }
  if (selector.charAt(0) === '#') {
    let attr = element.attributes.find(v => v.name === 'id')
    return attr && '#' + attr.value === selector
  } else if (selector.charAt(0) === '.') {
    let attr = element.attributes.find(v => v.name === 'class')
    return attr && '.' + attr.value === selector
  } else if (selector === element.tagName) {
    return true
  }
  return false
}

function specificity(selector) {
  let p = [0,0,0,0]
  let selectorParts = selector.split(' ')
  for (let part of selectorParts) {
    if (part.charAt(0) === '#') {
      p[1] += 1
    } else if (part.charAt(0) === '.') {
      p[2] += 1
    } else {
      p[3] += 1
    }
  }
  return p
}

function compare(sp1, sp2) {
  for (let i = 0; i < sp1.length; i ++) {
    if (sp1[i] !== sp2[i]) {
      return sp1[i] - sp2[i]
    }
  }
  return sp1[3] - sp2[3]
}

function computeCSS(element, stack) {
  let elements = stack.slice().reverse()
  if (!element.computedStyle) {
    element.computedStyle = {}
  }
  for (let rule of rules) {
    let selectorParts = rule.selectors[0].split(' ').reverse()
    if (!match(element, selectorParts[0])) {
      continue
    }
    let matched = false
    let j = 1
    for (let i = 0; i < elements.length; i++) {
      if (match(elements[i], selectorParts[j])) {
        j++
      }
    }
    if (j >= selectorParts.length) {
      matched = true
    }
    if (matched) {
      let sp = specificity(rule.selectors[0])
      let computedStyle = element.computedStyle
      for (let declaration of rule.declarations) {
        if (!computedStyle[declaration.property]) {
          computedStyle[declaration.property] = {}
        }
        if (!computedStyle[declaration.property].specificity) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        } else if (compare(computedStyle[declaration.property].specificity, sp) < 0) {
          computedStyle[declaration.property].value = declaration.value
          computedStyle[declaration.property].specificity = sp
        }
      }
      element.computedStyle = computedStyle
      // console.log(computedStyle)
    }
  }
  return element
}

module.exports = {
  computeCSS,
  addCSSRules
}