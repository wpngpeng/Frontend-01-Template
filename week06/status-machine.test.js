const {matchABABX} = require('./status-machine')

test('match(ababx,text)', () => {
  const string = 'abxab'
  expect(matchABABX(string)).toBe(/ababx/.test(string))
})