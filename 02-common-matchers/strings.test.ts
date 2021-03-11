test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

it('matches if a sentence contains a word', () => {
    expect('Some words are here').toEqual(expect.stringContaining('words'));
});
