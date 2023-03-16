const Calculator = require('./main');

describe('Calculator',() => {

    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('calculate addition', () => {
        expect(calculator.add(2, 3)).toBe(5);
    })
    test('add to numbers', () => {
        expect(calculator.add(5, 5)).toBe(10);
    })
})

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    test('subtract two numbers', () => {
        expect(calculator.subtract(5, 5)).toBe(0);
    })
    test('subtract two numbers', () => {
        expect(calculator.subtract(6, 2)).toBe(4);
    })
    test('subtract two numbers', () => {
        expect(calculator.subtract(6, 3)).toBe(3);
    })
})

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    test('divide two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    })
    test('divide two numbers', () => {
        expect(calculator.divide(10, 5)).toBe(2);
    })
    test('divide two numbers', () => {
        expect(calculator.divide(10, 10)).toBe(1);
    })
})

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    })

    test('multiply two numbers', () => {
        expect(calculator.multiply(10, 2)).toBe(20);
    })
    test('multiply two numbers', () => {
        expect(calculator.multiply(10, 5)).toBe(50);
    })
    test('multiply two numbers', () => {
        expect(calculator.multiply(10, 10)).toBe(100);
    })
})