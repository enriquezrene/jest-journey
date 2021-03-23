import {add} from "./add";

export const calculate = (operation: string, a: number, b: number): void => {
    if (operation === 'Add')
        console.log('result has been', add(a, b))
}