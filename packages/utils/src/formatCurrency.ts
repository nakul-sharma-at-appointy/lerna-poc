import currencies, { defaultCurrency } from './localization/currencies'
import { currencyToLocale } from './localization/locales'
import { localeToCurrencyFormat } from './localization/currencyFormats'
import { currencyToSymbol } from './localization/currencySymbols'

export function getFormatDetails(c?: string) {
    const currency = c && currencies.includes(c) ? c : defaultCurrency
    const locale = currencyToLocale(currency)
    let format = localeToCurrencyFormat(locale)
    if (format.h) {
        format = localeToCurrencyFormat(format.h)
    }
    const symbol = currencyToSymbol(currency)
    return {
        pattern: format.p,
        decimal: format.d,
        group: format.g,
        symbol,
        currency,
        locale,
    }
}

export function toFixed(n: any, precision: number = 2) {
    return (Math.round(Number(n) * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision)
}

export function getFormatter(c?: string) {
    const { symbol, pattern, group, decimal } = getFormatDetails(c)
    const encodePattern = (p: string) => {
        const numberFormatPattern = p.trim().match(/[#0,\.]+/)![0]
        const split = numberFormatPattern.split('.')
        const c = split[0]
        const m = split[1]
        const groups = c.split(',')
        const groupLengths = groups.map((g) => g.length)
        const zeroLength = (groups[groups.length - 1].match(/0/g) ?? []).length
        const decimalPlaces = typeof m === 'undefined' ? 0 : m.length
        const paddingSplit = p.split(numberFormatPattern)
        return {
            pattern: p,
            decimalPlaces: decimalPlaces,
            frontPadding: paddingSplit[0],
            backPadding: paddingSplit[1],
            groupLengths: groupLengths,
            zeroLength: zeroLength,
            symbol,
            decimal,
            group,
        }
    }
    const pad = (_: number | string, width: number) => {
        const n = _ + ''
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n
    }
    const format = (n: number, f: any) => {
        const fn = toFixed(Math.abs(n), f.decimalPlaces)
        const splitNumber = fn.split('.')
        let segment = ''
        let cursor = splitNumber[0].length
        const maxGroupIndex = f.groupLengths.length - 1
        let groupIndex = maxGroupIndex
        if (maxGroupIndex > 0) {
            while (cursor > 0) {
                if (groupIndex < 1) {
                    groupIndex = 1
                }
                const currentGroupLength = f.groupLengths[groupIndex]
                const start = cursor - currentGroupLength
                segment = splitNumber[0].substring(start, cursor) + f.group + segment
                cursor -= currentGroupLength
                --groupIndex
            }
            segment = segment.substring(0, segment.length - 1)
        } else {
            segment = splitNumber[0]
        }
        if (segment.length < f.zeroLength) {
            segment = pad(segment, f.zeroLength)
        }
        const formattedNumber = f.frontPadding + segment + (typeof splitNumber[1] === 'undefined' ? '' : f.decimal + splitNumber[1]) + f.backPadding
        return formattedNumber.replace(/\!/g, symbol).trim()
    }
    const patternArray = pattern.split(';')
    const positiveFormat = encodePattern(patternArray[0])
    const negativeFormat = typeof patternArray[1] === 'undefined' ? encodePattern('-' + patternArray[0]) : encodePattern(patternArray[1])
    const zero = typeof patternArray[2] === 'undefined' ? format(0, positiveFormat) : patternArray[2]

    return (_: number | string): string => {
        if (isNaN(_ as number)) {
            return _ as string
        }
        const n = Number(_)
        let f: string = ''
        if (n > 0) {
            f = format(n, positiveFormat)
        } else if (n == 0) {
            f = zero.replace('!', symbol)
        } else {
            f = format(n, negativeFormat)
        }
        return f
    }
}

export default function formatCurrency(n: number, c?: string) {
    return getFormatter(c)(n)
}
