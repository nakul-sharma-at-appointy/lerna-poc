export interface Store {
    get(key: string, optionalDefaultValue?: any): any

    set(key: string, value: any): any

    remove(key: string): void

    setNamespace(namespace: string): void
}

export interface Language {
    name: string
    nativeName: string
    iso: string
}

export interface Country {
    id: string,
    code: string,
    name: string,
    officialName: string,
    emoji: string,
    emojiUnicode: string,
    iso2: string,
    iso3: string,
    isoNumeric: string,
    geonameId: number,
    continentId: string,
    population: number,
    elevation: number,
    areaSqKm: number,
    coordinates: {
        latitude: number,
        longitude: number,
    },
    timezones: string[],
    domain: string,
    currencyCode: string,
    currencyName: string,
    postalCodeFormat: string,
    postalCodeRegex: string,
    phoneCode: string,
    neighbourCountryIds: string[],
    languages: string[],
    locales: string[],
}

export interface Region {
    id: string
    name: string
    code: string
    countryId: string
}

export interface Locality {
    id: string
    name: string
    stateId: string
}

export interface Timezone {
    name: string
    value: string
    offset: number
    offsetString: string
    region: string
    locality: string
    time: string
}

export interface Address {
    country?: string
    locality?: string
    region?: string
    postalCode?: string
    streetAddress?: string
    latitude?: number
    longitude?: number
}

export type Primitive = string | boolean | number

export type HttpResponse<T = any> = {
    data: T | null
    loading: boolean
    error: Error | null
    response: Response | null
}

export type UseHttp<T = any> = HttpResponse<T> & {
    execute: <V = any>(url?: string | null, query?: Record<string, any> | null) => Promise<HttpResponse<V>>
}
