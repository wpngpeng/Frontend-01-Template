const images = require('images')
exports.render = function render(viewport, element) {
  if (element.style) {
    let img = images(element.style.width, element.style.height)
    const bg = element.style['background'] || element.style['backgroundColor']
    if (bg) {
      let color = bg || 'rgb(0,0,0)'
      if (color.charAt() === '#') {
        const arr = color.match(/([0-9a-zA-Z]{2})/g)
        img.fill(Number('0x' + arr[0]), Number('0x' + arr[1]), Number('0x' + arr[2]), 1)
      } else {
        color.match(/rgb\((\d+),(\d+),(\d+)\)/)
        img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3), 1)
      }
      viewport.draw(img, element.style.left||0, element.style.top||0)
    }
  }
  if (element.children) {
    for(let child of element.children) {
      render(viewport, child)
    }
  }
}