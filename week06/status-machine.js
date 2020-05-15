/*
状态机简单版
function match('ababx',text)
 */
function matchABABX(string) {
  let state = start
  for (let c of string) {
    state = state(c)
  }
  return state === end

  function start(c) {
    if (c === 'a') {
      return stateA
    } else {
      return start
    }
  }

  function end(c) {
    return end
  }

  function stateA(c) {
    if (c === 'b') {
      return stateB
    } else {
      return start(c)
    }
  }

  function stateB(c) {
    if (c === 'a'){
      return stateA2
    } else {
      return start(c)
    }
  }

  function stateA2(c) {
    if (c === 'a') {
      return stateB2(c)
    } else {
      return start(c)
    }

  }

  function stateB2(c) {
    if (c === 'x') {
      return end
    } else {
      return stateB(c)
    }
  }
}

matchABABX('abxab')
/*
状态机挑战版
function match(pattern,text)
 */

module.exports = {
  matchABABX
}