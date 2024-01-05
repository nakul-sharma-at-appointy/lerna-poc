import {mapValues} from 'lodash-es'
import email from './email'
import facebook from './facebook'
import linkedin from './linkedin'
import pinterest from './pinterest'
import reddit from './reddit'
import skype from './skype'
import sms from './sms'
import telegram from './telegram'
import twitter from './twitter'
import whatsapp from './whatsapp'
import instagram from './instagram'


export type SocialSharePlatform =
    'facebook'
    | 'whatsapp'
    | 'pinterest'
    | 'email'
    | 'twitter'
    | 'reddit'
    | 'linkedin'
    | 'sms'
    | 'telegram'
    | 'skype'
    | 'instagram'

const platforms = {
    whatsapp,
    reddit,
    linkedin,
    pinterest,
    email,
    twitter,
    facebook,
    sms,
    telegram,
    skype,
    instagram,
}

export default function socialShare(url: string, platform: SocialSharePlatform): string {
    return platforms?.[platform]?.(url)
}

export function socialShareAll(url: string): Record<string, string> {
    return mapValues(platforms, p => p?.(url))
}
