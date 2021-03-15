test('Print call args and response + verify call was made with args', () => {
    const addTenToSumMock = jest.fn((a, b) => 10 + a + b)

    const fifteen = addTenToSumMock(2, 3)
    expect(fifteen).toBe(15)
    const thirtyFive = addTenToSumMock(12, 13)
    expect(thirtyFive).toBe(35)

    expect(addTenToSumMock).toHaveBeenCalledWith(2, 3)

    const numberOfCall = 1
    const numberOfArgument = 0
    // second call + first argument
    expect(addTenToSumMock.mock.calls[numberOfCall][numberOfArgument]).toBe(12)

    // number of calls made
    expect(addTenToSumMock.mock.calls.length).toBe(2)
    addTenToSumMock.mockClear()
    expect(addTenToSumMock.mock.calls.length).toBe(0)

    const twentyFive = addTenToSumMock(2, 13)
    // after clearing the mock, the mocked implementation still works
    expect(twentyFive).toBe(25)
});

test('resets the mock, mocked implementation is gone', () => {
    const addTenToSumMock = jest.fn((a, b) => 10 + a + b)
    const fifteen = addTenToSumMock(2, 3)
    expect(fifteen).toBe(15)

    // number of calls made
    expect(addTenToSumMock.mock.calls.length).toBe(1)

    addTenToSumMock.mockReset()
    expect(addTenToSumMock.mock.calls.length).toBe(0)
    // mocked implementation is gone
    const undefinedResult = addTenToSumMock(2, 3)
    expect(undefinedResult).toBeUndefined()
});
