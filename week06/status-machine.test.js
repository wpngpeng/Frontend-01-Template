const {matchABABABX} = require('./status-machine')

test('match(abababx,text)', () => {
  const string = 'ababxababababhjjasbasakhafanaxvababababbbabababababaxbaaabababab'
  expect(matchABABABX(string)).toBe(/abababx/.test(string))
})