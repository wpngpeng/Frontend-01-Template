# 第7周学习记录
## [本周作业地址链接(toy-browser完结:](./browser-toy)
## [CSS脑图链接](https://www.processon.com/view/link/5eccafdd1e08530a9b1f1d3d)
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

# 心得
读标准的套路,先浏览目录,再看附录里的grammar;  
看看grammar可以先屏蔽不要的噪声,提炼出主干.
```bash
// 例如CSS2.1标准主干如下:
@charset
@import
  rules
    @media
    @page
    rule
```
归纳: CSS就是一堆rule的合集 @rule解决特定领域的问题

@rule规则的研究
@support 类似一个被阉割了的if语句
css规则结构
