export default function isPrimitive(val: any) {
    if (typeof val === 'object') {
        return val === null
    }
    return typeof val !== 'function'
};

