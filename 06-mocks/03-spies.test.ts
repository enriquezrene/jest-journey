class MathOperation {
    sum = (a: number, b: number) => {
        return a + b
    }
}

test('spies a function was called', () => {
    const mathOperation = new MathOperation()
    const sumSpy = jest.spyOn(mathOperation, 'sum')

    const result = mathOperation.sum(4, 5)

    expect(result).toBe(9)
    expect(sumSpy).toHaveBeenCalledWith(4, 5)
});

test('restore the original non-mocked implementation', () => {
    const mathOperation = new MathOperation()
    const sumSpy = jest.spyOn(mathOperation, 'sum').mockImplementation((a, b) => {
            return a * b
        }
    )

    const result = mathOperation.sum(4, 5)

    // instead of + it multiplies
    expect(result).toBe(20)
    expect(sumSpy).toHaveBeenCalledWith(4, 5)

    sumSpy.mockRestore()
    const actualResult = mathOperation.sum(4, 5)
    // works as it was previously
    expect(actualResult).toBe(9)
    // mock is gone
    expect(sumSpy).toHaveBeenCalledTimes(0)
});
