import { languageIsoToLanguage } from './localization/languages'

export default function formatLanguage(iso?: string): string {
    const language = languageIsoToLanguage(iso)
    return language.nativeName
}
