describe('object containing', () => {
    const expected = {foo: 'bar'};

    it('matches if the actual object contains expected key: value pairs', () => {
        expect({bar: 'baz', foo: 'bar'}).toEqual(expect.objectContaining(expected));
    });
});

function simulatePresses(onPress: any) {
    onPress({x: 1, y: 2})
}

test('onPress gets called with the right thing', () => {
    const onPress = jest.fn();
    simulatePresses(onPress);
    expect(onPress).toBeCalledWith(
        expect.objectContaining({
            x: expect.any(Number),
            y: expect.any(Number),
        }),
    );
});


const elementToCreate = {
    name: 'Julio',
    lastName: 'Jaramillo'
};

const createdElement = {id: 1, artist: {nationality: 'Ecuadorian'}, ...elementToCreate}

test('Element to create does not have neither id nor nationality', () => {
    expect(elementToCreate).not.toHaveProperty('id')
    expect(elementToCreate).not.toHaveProperty('artist.nationality')
});

test('Created element has both id and nationality', () => {
    expect(createdElement).toHaveProperty('id')
    expect(createdElement).toHaveProperty('artist.nationality')
});

test('Checks that a JavaScript object matches a subset of the properties of an object', () => {
    expect(createdElement).toMatchObject(elementToCreate)
});