test('Print call args and response + verify call was made with args', () => {
    const mockedFunction = jest.fn()

    mockedFunction(1, 2, 3)
    // Print all calls, uncomment if you want to see them printed in the console
    // console.log(mockedFunction.mock.calls)
    // console.log(mockedFunction.mock.results)

    expect(mockedFunction).toHaveBeenCalledWith(1, 2, 3)
});
