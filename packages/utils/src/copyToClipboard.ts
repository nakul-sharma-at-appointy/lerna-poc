import copy from 'copy-to-clipboard'

interface Options {
    debug?: boolean
    message?: string
    format?: string
    onCopy?: (clipboardData: object) => void
}

export default function copyToClipboard(input: string, options?: Options): boolean {
    return copy(input, options)
}
