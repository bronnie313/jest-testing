const capitalize = require('./main');

test('capitalize string', () => {
    expect(capitalize('ronnie')).toBe('RONNIE')
});