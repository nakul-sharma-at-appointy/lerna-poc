const timeFormats: string[] = [
    'h:mma',
    'hh:mm A',
    'HH:mm',
    'H:mm',
]

export const defaultTimeFormat: string = 'h:mma'

export const countryToTimeFormat: Record<string, string> = {}
export const getTimeFormatFromCountry = (c?: string | null) => (c && countryToTimeFormat[c]) || defaultTimeFormat

export default timeFormats
