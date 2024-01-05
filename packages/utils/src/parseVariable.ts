import { Primitive } from './types'

export default function parseVariable(value: any): Primitive {

    // Boolean
    if (value.toString().toLowerCase() === 'true' || value.toString().toLowerCase() === 'false') {
        return value.toString().toLowerCase() === 'true'
    }

    // Number
    if (!isNaN(value)) {
        return Number(value)
    }

    return value
};
