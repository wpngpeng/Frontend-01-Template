const {matchABABX} = require('./status-machine')

test('match(ababx,text)', () => {
  const string = 'ababxababababhjjasbasakhafanaxvababababbbabababababaxbaaabababab'
  expect(matchABABX(string)).toBe(/abababx/.test(string))
})