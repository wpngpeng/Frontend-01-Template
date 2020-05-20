# 第6周学习记录
## [本周作业地址链接(手写一个html解析以及cssComputed):](./html-toy)
## [本周作业地址链接(字符串匹配):](./)

## 摘要
本周对状态机有了进一步的了解,以及它的表现形式;每个状态机都是独立的并且功能齐全,能接受的参数都是一样的,然后它要做的事情就一个,通过喂进来的东西找到下一台状态机.(每个状态机都是一个纯函数,目的就是找到下一个状态)

## 遇到的问题
- 在做abababx字符匹配时
> 当时还是想当然的以为,字符串匹配不是很简单吗?遍历输入的字符串,然后如果匹配上了目标(abababx)第一个时进入匹配模式,如果中途中断了就从头再来;后仔细想想,如果目标的每个字符都不相同可以,而且简单都不需要用啥状态机了; 这个鬼是有重复的部分,就不能重头再来匹配(例如:ababababababababx),经过仔细的观察和研究发现,如果最后一个没有匹配上则返回到上一次循环的状态,这里说着有些费劲还是看代码吧.

```js
/*
状态机简单版
function match('ababx',text)
 */
// 纯纯的硬编码
function matchABABABX(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }
  return state === end

  function start(c) {
    if (c === 'a') {
      return toFindB
    } else {
      return start
    }
  }

  function end(c) {
    return end
  }

  function toFindB(c) {
    if (c === 'b') {
      return toFindA2
    } else {
      return start(c)
    }
  }

  function toFindA2(c) {
    if (c === 'a'){
      return toFindB2
    } else {
      return start(c)
    }
  }

  function toFindB2(c) {
    if (c === 'b') {
      return toFindA3
    } {
      return start(c)
    }

  }
  function toFindA3(c) {
    if (c === 'a'){
      return toFindB3
    } else {
      return start(c)
    }
  }

  function toFindB3(c) {
    if (c === 'b') {
      return toFindX
    } {
      return start(c)
    }

  }

  function toFindX(c) {
    if (c === 'x') {
      return end
    } else {
      return toFindA3(c)
    }
  }
}

```
```bash
// 测试用例
test('match(abababx,text)', () => {
  const string = 'ababxababababhjjasbasakhafanaxvababababbbabababababaxbaaabababab'
  expect(matchABABABX(string)).toBe(/abababx/.test(string))
})

//  jest测试结果
> jest ./week06/status-machine.test.js

(node:7516) ExperimentalWarning: The fs.promises API is experimental
 PASS  week06/status-machine.test.js
  √ match(abababx,text) (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.219 s
Ran all test suites matching /.\\week06\\status-machine.test.js/i.

```

- 在做html解析生成dom时,遇到的问题?
> 当时看到这个一堆代码烦的很,本来打算抄了,抄了一半发现抄不下去了.后来想了想,我做这个作用的目的是啥?winter老师煞费苦心的设计这些课程为啥?不就是为了理解浏览器原理吗?
>然后我把之前的都删了,然后打开whatwg-12.5看着文档一步一步的来实现,其实不难,做出来也很有成就感,自信心也增强了;  
> 也明白了为啥开营之前要设置一个【4.HTML 的中，如何写一个值为 “a”=‘b’ 的属性值？】，这样的题目了。好像是搞不了...


## 有限状态机(特点)
- 每个状态都是一个机器
    - 在每个机器里,我们都可以做计算/存储/输出...
    - 所有的这些机器接接受的输入是一致的(即可接受相同的入参)
    - 状态机的每一个机器本身是没有状态的,如果用函数表示的话,应该是纯函数(无副作用)
- 每个状态机都知道下一个状态
    - (Moore型)每个机器都有确定的下一个状态
    - (Mealy型)每个机器根据输入决定下一个状态