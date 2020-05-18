const {matchABABABX} = require('./status-machine')

test('match(ababx,text)', () => {
  const string = 'ababxababababhjjasbasakhafanaxvababababbbabababababaxbaaabababab'
  expect(matchABABABX(string)).toBe(/abababx/.test(string))
})