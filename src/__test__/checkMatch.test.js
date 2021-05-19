import checkMatch from '../js/checkMatch';

test('buy milk 1', () => {
  const a = 'buy milk';
  const b = 'buy';
  expect(checkMatch(b, a)).toBe(true);
});

test('buy milk 2', () => {
  const a = 'buy milk';
  const b = 'buy ';
  expect(checkMatch(b, a)).toBe(true);
});

test('buy milk 3', () => {
  const a = 'buy milk';
  const b = 'BUY ';
  expect(checkMatch(b, a)).toBe(true);
});

test('buy milk 4', () => {
  const a = 'buy milk';
  const b = 'buz';
  expect(checkMatch(b, a)).toBe(false);
});

test('buy milk 5', () => {
  const a = 'buy milk';
  const b = 'buy mi';
  expect(checkMatch(b, a)).toBe(true);
});

test('numbers', () => {
  const a = '1111';
  const b = '1';
  expect(checkMatch(b, a)).toBe(true);
});

test('numbers', () => {
  const a = '1111';
  const b = '2111';
  expect(checkMatch(b, a)).toBe(false);
});
