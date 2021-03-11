test('Function can be called with anything but null/undefined', () => {
    const mockedFunction = jest.fn();
    mockedFunction('foo')
    expect(mockedFunction).toBeCalledWith(expect.anything());
});

test('Any number is OK', () => {
    const mockedFunction = jest.fn();
    mockedFunction(5)
    mockedFunction(99)
    expect(mockedFunction).toBeCalledWith(expect.any(Number));
});