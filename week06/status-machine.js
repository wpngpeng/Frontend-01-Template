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
      return toFindX
    } {
      return start(c)
    }

  }

  function toFindX(c) {
    if (c === 'x') {
      return end
    } else {
      return toFindA2(c)
    }
  }
}

// console.log(matchABABX('abxababx'))
/*
状态机挑战版
function match(pattern,text)
 */

function match(pattern, string) {
  let status = start
  let arr = pattern.split('')
  for (let c of string) {
    status = status(c)
  }
  return status === end

  function end(input) {
    return end
  }

  function start(input) {
    if (input === pattern[0]) {
      return ''
    } else {
      return start
    }
  }
}

module.exports = {
  matchABABX
}