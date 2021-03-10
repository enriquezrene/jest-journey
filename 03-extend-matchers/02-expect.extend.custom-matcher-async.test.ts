const getDivisibleByAsync = async (number: number): Promise<number> => {
    return Promise.resolve(number)
}
expect.extend({
    async toBeDivisibleByNumber(number, divisibleBy) {
        const divisibleByNumber = await getDivisibleByAsync(divisibleBy);
        const pass = number % divisibleByNumber === 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${number} not to be divisible by ${divisibleByNumber}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${number} to be divisible by ${divisibleByNumber}`,
                pass: false,
            };
        }
    },
});

test('is divisible by external value', async () => {
    await expect(100).toBeDivisibleByNumber(10);
    await expect(101).not.toBeDivisibleByNumber(7);
});