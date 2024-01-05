const getGlobalObject = (): typeof global | undefined => {
    if (typeof globalThis !== 'undefined') {
        return globalThis as any
    }
    if (typeof global !== 'undefined') {
        return global as any
    }
    if (typeof window !== 'undefined') {
        return window as any
    }
    return undefined
}

export default getGlobalObject()
