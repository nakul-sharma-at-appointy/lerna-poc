import * as base64 from 'base-64'
import * as utf8 from 'utf8'

function decodeUnicode(str: string) {
    const bytes = base64.decode(str)
    return utf8.decode(bytes)
}

export default decodeUnicode
