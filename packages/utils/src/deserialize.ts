import { isPlainObject, omit } from 'lodash-es'
import decodeUnicode from './decodeUnicode'

export default function deserialize<T = any>(str: string | null = 'e30='): Record<string, T> {
    let res: Record<string, T> = {}
    try {
        if (str) {
            const parsed = JSON.parse(window.atob(str))
            if (isPlainObject(parsed) && parsed !== 'null' && parsed !== null) {
                res = parsed
                if (parsed.charset === 'utf8') {
                    const obj = JSON.parse(decodeUnicode(str))
                    if (isPlainObject(obj) && obj !== 'null' && obj !== null) {
                        res = omit(obj, 'charset')
                    }
                }
            }
        }
    } catch (e) {
        try {
            if (str) {
                const parsed = JSON.parse(decodeUnicode(str))
                if (isPlainObject(parsed) && parsed !== 'null' && parsed !== null) {
                    res = parsed
                }
            }
        } catch (e) {}
    }
    return res
}
