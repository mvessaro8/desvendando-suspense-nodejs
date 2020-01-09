const { dummyTest } = require('./suspense')


test('Dummy test', () => {
    expect( dummyTest() ).toBe("Hello Test")
})