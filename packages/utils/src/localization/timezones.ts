import { groupBy, keyBy, sortBy } from 'lodash-es'
import moment from 'moment-timezone'
import { Timezone } from '../types'
import { parseCountry } from './countries'
import { defaultTimeFormat } from './timeFormats'

export const getTimezones: (timeFormat?: string) => Timezone[] = (
    timeFormat: string = defaultTimeFormat
) =>
    sortBy(
        moment.tz.names().map((tz) => {
            const offset = moment.tz(tz).utcOffset()
            const offsetString = `GMT${offset >= 0 ? '+' : '-'}${moment()
                .startOf('d')
                .add(Math.abs(offset), 'm')
                .format('HH:mm')}`
            const name = `(${offsetString}) ${tz}`
            const [region, ...rest] = tz.split('/')
            const time = moment.tz(tz).format(timeFormat)
            return {
                value: tz,
                name,
                offset,
                offsetString,
                region,
                locality: rest.join('/'),
                time,
            }
        }),
        'offset'
    )

export const getGroupedTimezones = (timeFormat: string = defaultTimeFormat) =>
    groupBy(getTimezones(timeFormat), 'region')

export const defaultTimezone: string = moment.tz.guess(true)

export function timezoneNameToTimezone(tz?: string): Timezone {
    const timezoneMap = keyBy(getTimezones(), 'value')
    return tz && timezoneMap[tz] ? timezoneMap[tz] : timezoneMap[defaultTimezone]
}

export function countryToTimezone(countryIsoOrName?: string): string {
    return parseCountry(countryIsoOrName)?.timezones?.[0] || defaultTimezone
}
