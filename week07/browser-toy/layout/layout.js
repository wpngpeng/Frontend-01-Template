function getStyle(element) {
  if (!element.style) {
    element.style = {}
  }
  console.log(element.tagName, element.computedStyle)
  for (let prop in element.computedStyle) {
    console.log(prop)
  }
}

exports.layout = function (element) {
  if (!element.computedStyle) {
    return
  }
  var elementStyle = getStyle(element)
}