function drinkFlavor(flavour: string) {
    if (flavour === 'octopus') {
        throw new Error('I hate octopus')
    }
}

test('throws on octopus', (done) => {
    expect(() => {
        drinkFlavor('octopus');
    }).toThrow();
    done()
});

test('throws on octopus', (done) => {
    expect(() => {
        drinkFlavor('octopus');
    }).toThrow('I hate octopus');
    done()
});