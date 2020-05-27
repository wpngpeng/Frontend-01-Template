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


// void async function () {
//   function sleep(timeout = 2000) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve()
//       }, timeout)
//     })
//   }
//   const list = ['qq935287', 'nemo00052']
//   // for (let name of list) {
//   //   input.value = name
//   //   button.click()
//   //   await sleep()
//   // }
//   document.querySelector('.frm_input').value = 'nemo00052'
//   document.querySelector('.frm_input_append').click()
//   console.log(document.querySelector('.frm_input').value)
//   await sleep()
//   new XMLHttpRequest()
// }()