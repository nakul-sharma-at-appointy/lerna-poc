const formatError = (error?: any) => {
    if (!error) {
        return ''
    }
    const message = (() => {
        let err = error

        if (Array.isArray(error)) {
            err = error[0]
        }

        if (typeof err === 'string') {
            return err
        }
        if (err?.message) {
            return err.message
        }
        return ''
    })()
    return message?.split('\n')?.[1] || message
}

export default formatError
