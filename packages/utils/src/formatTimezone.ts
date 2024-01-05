import { timezoneNameToTimezone } from './localization/timezones'

export default function formatTimezone(tz?: string) {
    return timezoneNameToTimezone(tz).name
}
