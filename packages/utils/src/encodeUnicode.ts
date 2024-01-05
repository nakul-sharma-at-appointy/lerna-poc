import * as base64 from 'base-64'
import * as utf8 from 'utf8'

function encodeUnicode(str: string) {
    const bytes = utf8.encode(str)
    return base64.encode(bytes)
}

export default encodeUnicode
