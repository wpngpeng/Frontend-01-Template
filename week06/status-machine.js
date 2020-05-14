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
      return findA
    } else {
      return start
    }
  }

  function end(c) {
    return end
  }

  function findA(c) {
    if (c === 'b') {
      return findB
    } else {
      return start
    }
  }

  function findB(c) {
    if (c === 'x') {
      return end
    } else if (c === 'a'){
      return findA
    } else {
      return start
    }
  }
}


/*
状态机挑战版
function match(pattern,text)
 */

module.exports = {
  matchABABX
}