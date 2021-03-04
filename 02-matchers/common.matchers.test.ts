test('Exact equality toBe', () => {
    expect('foo').toBe('foo');
});

interface Address {
    mainStreet: string
    number?: number
}
test('Check object values toEqual', () => {
    const data: Address = { mainStreet: 'Some' };
    data.number = 2;
    expect(data).toEqual({ mainStreet: 'Some', number: 2});
    // This fails
    // expect(data).toBe({ mainStreet: 'Some', number: 2});
});

test('Testing the opposite of a matcher', () => {
    expect('foo').not.toBe('bar');
});