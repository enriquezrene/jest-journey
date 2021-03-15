import {Greetings} from "./greetings";

export class Boy {
    sayHi() {
        return `${new Greetings().hi()} boy`
    }

    sayMorning() {
        return `${new Greetings().morning()} boy`
    }
}