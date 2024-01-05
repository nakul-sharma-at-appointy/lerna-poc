import { Liquid } from 'liquidjs'
import moment from 'moment'
import React from 'react'
import formatAddress from './formatAddress'
import formatCurrency from './formatCurrency'
import formatDuration from './formatDuration'
import { defaultDateFormat } from './localization/dateFormats'
import { defaultTimeFormat } from './localization/timeFormats'
import { defaultTimezone } from './localization/timezones'

export interface UseTemplateRenderOptions {
    timezone?: string
    dateFormat?: string
    timeFormat?: string
}

const useTemplateRender = ({
    timezone = defaultTimezone,
    dateFormat = defaultDateFormat,
    timeFormat = defaultTimeFormat,
}: UseTemplateRenderOptions) => {

    const engine = React.useRef(new Liquid()).current

    const engineRegisterFilters = () => {
        engine.registerFilter('duration', (endTime, startTime) => {
            const duration = moment(endTime).diff(startTime, 's')
            return formatDuration(duration)
        })
        engine.registerFilter('date', (input) => moment(input).tz(timezone).format(dateFormat))
        engine.registerFilter(
            'time',
            (input) => `${moment(input).tz(timezone).format(timeFormat)} (${timezone})`
        )
        engine.registerFilter('address', (input) => formatAddress(input))
        engine.registerFilter('currency', (input) =>
            formatCurrency(input?.amount ?? 0, input?.currency)
        )
    }

    React.useEffect(() => {
        engineRegisterFilters()
    }, [timezone, dateFormat, timeFormat])

    const render = engine.parseAndRenderSync.bind(engine)
    return (...args: Parameters<typeof render>) => {
        const timezone = (args[1] as any)?.timezone
        if (timezone) {
            engine.registerFilter('date', (input) => moment(input).tz(timezone).format(dateFormat))
            engine.registerFilter(
                'time',
                (input) => `${moment(input).tz(timezone).format(timeFormat)} (${timezone})`
            )
        }
        else{
            engineRegisterFilters()
        }
        return render(...args)
    }
}

export default useTemplateRender
