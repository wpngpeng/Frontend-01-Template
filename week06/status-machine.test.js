const {matchABABX} = require('./status-machine')

test('match(ababx,text)', () => {
  const string = 'abxababx'
  expect(matchABABX(string)).toBe(/ababx/.test(string))
})