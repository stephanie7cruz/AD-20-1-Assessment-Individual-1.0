const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// Pruebas para divide()
test('divide 10 by 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('divide -15 by 3 to equal -5', () => {
  expect(calculator.divide(-15, 3)).toBe(-5);
});

// Nueva prueba para manejar el caso de división por 0
test('divide by 0 should throw "Cannot divide by zero"', () => {
  expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
});

// Pruebas para multiply()
test('multiply 3 by 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('multiply -6 by 3 to equal -18', () => {
  expect(calculator.multiply(-6, 3)).toBe(-18);
});
