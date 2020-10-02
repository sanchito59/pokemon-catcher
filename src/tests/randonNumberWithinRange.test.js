import { randomNumberWithinRange } from '../helpers/randomNumberWithinRange';

test('Number is within range', () => {
  expect(randomNumberWithinRange(1, 2)).toBeLessThan(2);
});
