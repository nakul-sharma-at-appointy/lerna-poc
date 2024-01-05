import encodeUnicode from './encodeUnicode'

export default function serialize<T = any>(obj: Record<string, T> = {}): string {
    let res: string = 'e30='
    try {
        res = window.btoa(JSON.stringify(obj))
    } catch (e) {
        try {
            const newObj = { ...obj, charset: 'utf8' }
            res = encodeUnicode(JSON.stringify(newObj))
        } catch (e) {}
    }
    return res
}
