const dateFormats: string[] = [
    'MMM DD, YY',
    'MMM DD, YYYY',
    'DD/MM/YYYY',
    'DD/MM/YY',
    'MM/DD/YYYY',
    'MM/DD/YY',
]

export const defaultDateFormat: string = 'MMM DD, YY'

export const countryToDateFormat: Record<string, string> = {}
export const getDateFormatFromCountry = (c?: string | null) => (c && countryToDateFormat[c]) || defaultDateFormat

export default dateFormats
