const {matchABABX} = require('./status-machine')

test('match(ababx,text)', () => {
  const string = 'askjdasdasdababaxascabacxababacxhasdkljhabaabaababxasdhjad'
  expect(matchABABX(string)).toBe(/ababx/.test(string))
})