test('resolves to lemon', async () => {
    const result = Promise.resolve('lemon')
    await expect(result).resolves.toBe('lemon');
});

test('rejects to octopus', () => {
    const result = Promise.reject(new Error('octopus'))
    return expect(result).rejects.toThrow(
        'octopus',
    );
});