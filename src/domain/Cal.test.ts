import add from '@domain/Cal';

test('add 3 + 4 ', () => {
  expect(add(3, 4)).toBe(7);
});

test('add 10 + 5 ', () => {
  expect(add(10, 5)).toBe(15);
});
