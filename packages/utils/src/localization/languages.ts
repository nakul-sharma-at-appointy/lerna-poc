import { Language } from '../types'

export const languageMap: Record<string, Language> = {
    'ar-AE': { name: 'Arabic', nativeName: 'العربية', iso: 'ar-AE' },
    'en-US': { name: 'English', nativeName: 'English', iso: 'en-US' },
    'gu-IN': { name: 'Gujarati', nativeName: 'ગુજરાતી', iso: 'gu-IN' },
    'hi-IN': { name: 'Hindi', nativeName: 'हिंदी', iso: 'hi-IN' },
    'es-ES': { name: 'Spanish', nativeName: 'español', iso: 'es-ES' },
    'de-DE': { name: 'German', nativeName: 'Deutsch', iso: 'de-DE' },
    'el-GR': { name: 'Greek', nativeName: 'Ελληνικά', iso: 'el-GR' },
    'fr-FR': { name: 'French', nativeName: 'français', iso: 'fr-FR' },
    'nl-NL': { name: 'Dutch', nativeName: 'Nederlands', iso: 'nl-NL' },
    'pt-PT': { name: 'Portuguese', nativeName: 'Português', iso: 'pt-PT' },
    'ru-RU': { name: 'Russian', nativeName: 'русский', iso: 'ru-RU' },
    'it-IT': { name: 'Italian', nativeName: 'Italiano', iso: 'it-IT' },
    'zh-CN': { name: 'Mandarin', nativeName: '中文 (Zhōngwén)', iso: 'zh-CN' },
    'ja-JP': { name: 'Japanese', nativeName: '日本語 (にほんご)', iso: 'ja-JP' },
    'th-TH': { name: 'Thai', nativeName: 'ภาษาไทย', iso: 'th-TH' },
    'ko-KR': { name: 'Korean', nativeName: '한국어', iso: 'ko-KR' },
    'id-ID': { name: 'Indonesian', nativeName: 'bahasa Indonesia', iso: 'id-ID' },
    'he-IL': {name: 'Hebrew', nativeName: 'עִברִית', iso: 'he-IL' }
}

export const defaultLanguage: string = 'en-US'

export const languageIsos: string[] = Object.keys(languageMap)

export function languageIsoToLanguage(iso?: string): Language {
    return iso && languageMap[iso] ? languageMap[iso] : languageMap[defaultLanguage]
}

const languages: Language[] = Object.values(languageMap)

export default languages
