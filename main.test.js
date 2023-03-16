const stringLength = require('./main');

test('check if string is at least 1 char long and not longer than 10 char', () => {
    const myString = 'hello';
    expect(() => { stringLength(myString) }).not.toThrow();
});
