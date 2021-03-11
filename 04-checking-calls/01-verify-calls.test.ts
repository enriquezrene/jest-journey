function drinkAll(callback: any, flavour: string) {
    if (flavour !== 'octopus') {
        callback(flavour);
    }
}

describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'lemon');
        expect(drink).toHaveBeenCalled();
    });

    test('does not drink something octopus-flavoured', () => {
        const drink = jest.fn();
        drinkAll(drink, 'octopus');
        expect(drink).not.toHaveBeenCalled();
    });
});

function drinkEach(callback: any, flavours: Array<string>) {
    flavours.forEach(flavour => callback(flavour))
}

test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    expect(drink).toHaveBeenCalledTimes(2);
});


function calmThirstyGuy(callback: any, beverage: string) {
    callback(beverage)
}

test('Verifies a function has been called with an specific argument', () => {
    const beverage = 'orange';
    const doDrink = jest.fn();

    calmThirstyGuy(doDrink, beverage)

    expect(doDrink).toHaveBeenCalledWith(beverage);
});


test('Verifies a last call to a function has been with an specific argument', () => {
    const drink = jest.fn();
    drinkEach(drink, ['orange', 'mango']);
    expect(drink).toHaveBeenLastCalledWith('mango');
});

test('Verifies a function has been called with an argument in a specific order', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    // 1 call with lemon
    expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
    // 2 call with octopus
    expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
});

test('Check a mock returned an specific value', () => {
    const isAdult = jest.fn((age) => age > 18 ? 'Yes' : 'No');

    isAdult(7);
    expect(isAdult).toHaveReturnedWith('No');

    isAdult(27);
    expect(isAdult).toHaveReturnedWith('Yes');
});

test('Looks for latest return only', () => {
    const isAdult = jest.fn((age) => age > 18 ? 'Yes' : 'No');

    isAdult(7);
    isAdult(3);
    isAdult(5);
    isAdult(4);
    isAdult(27);

    expect(isAdult).toHaveLastReturnedWith('Yes');
});


test('Looks for a return in an specified order', () => {
    const isAdult = jest.fn((age) => age > 18 ? 'Yes' : 'No');

    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40].map(element => isAdult(element))

    expect(isAdult).toHaveNthReturnedWith(1, "No")
    expect(isAdult).toHaveNthReturnedWith(11, "Yes")
});