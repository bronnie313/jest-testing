const reverseString = require('./main');

test('reverse a given string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('hello, ronnie')).toBe('einnor ,olleh');
});
