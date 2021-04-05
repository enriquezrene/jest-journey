// Assume `add` is imported and used within `calculate`.
import {add} from "./add";
import {calculate} from "./calc";

jest.mock('./add');

// Our mock of `add` is now fully typed
const mockAdd = add as jest.MockedFunction<typeof add>;
mockAdd.mockImplementation((a, b) => {
    return 6
})

test('calculate calls add', (done) => {
    calculate('Add', 1, 2);

    expect(mockAdd).toBeCalledTimes(1);
    expect(mockAdd).toBeCalledWith(1, 2);
    done()
});