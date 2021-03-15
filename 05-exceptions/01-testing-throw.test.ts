function drinkFlavor(flavour: string) {
    if (flavour === 'octopus') {
        throw new Error('I hate octopus')
    }
}

test('throws on octopus', () => {
    expect(() => {
        drinkFlavor('octopus');
    }).toThrow();
});

test('throws on octopus', () => {
    expect(() => {
        drinkFlavor('octopus');
    }).toThrow('I hate octopus');
});