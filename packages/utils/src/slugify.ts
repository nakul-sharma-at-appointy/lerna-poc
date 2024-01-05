import { kebabCase, sampleSize } from 'lodash-es'

export default function slugify(e?: string): string {
    return kebabCase(`${(e ?? '').split(' ')[0] ?? ''} ${sampleSize('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 5).join('')}`.trim().toLowerCase())
}
