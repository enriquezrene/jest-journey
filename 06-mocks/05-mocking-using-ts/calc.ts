import {add} from "./add";

export const calculate = (operation: string, a: number, b: number): void => {
    if (operation === 'Add'){
        add(a, b)
        // un-comment if u wanna play with this
        // console.log('result has been', add(a, b))
    }
}