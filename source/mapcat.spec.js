import { mapcat } from './mapcat'

test.only('happy', () => {
  const result = mapcat(x => x.toUpperCase(), [['a', 'b'], ['c', 'd'], ['e', 'f']])
  console.log(result)
})
