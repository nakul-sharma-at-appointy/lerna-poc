import { uniq } from 'lodash-es'
import countries, { parseCountry } from './countries'

export const defaultCurrency: string = 'USD'

export function countryToCurrency(countryIsoOrName?: string): string {
    return parseCountry(countryIsoOrName)?.currencyCode || defaultCurrency
}

const currencies: string[] = uniq(countries.map(c => c.currencyCode).filter(Boolean))
export default currencies
