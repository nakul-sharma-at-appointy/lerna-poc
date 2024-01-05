import { MomentInput } from 'moment'
import moment from 'moment-timezone'

export default function formatTime(time: MomentInput, format: string, timezone?: string | null, relative?: boolean): string {
    const t = moment(time)
    if (timezone) {
        t.tz(timezone)
    }
    if (relative) {
        return t.fromNow()
    }
    return t.format(format)
}
