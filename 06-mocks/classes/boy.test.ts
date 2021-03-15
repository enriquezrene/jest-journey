import {Greetings} from "./greetings";

jest.mock('./greetings')

import {Boy} from "./boy";


test("Uses the mock class living inside __mocks__ folder", () => {
    const result = new Boy().sayHi()
    expect(result).toBe('bye boy')
});

test("Uses the mock we have written right here", () => {
    Greetings.prototype.morning = jest.fn().mockImplementation(()=> {
        return 'damn it'
    })
    const result = new Boy().sayMorning()
    expect(result).toBe('damn it boy')
});