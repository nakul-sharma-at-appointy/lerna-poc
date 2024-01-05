import { initial, last, split } from 'lodash-es'

export default function parseId(
    id?: string | null
): { type: string; parent: string; id: string; entityId: string } {
    const parts = split(id ?? '', '/')
    const entityId = (last(parts) as string) ?? ''
    return {
        parent: initial(parts).join('/') ?? '',
        entityId,
        type: split(entityId, '_')[0] ?? '',
        id: id ?? '',
    }
}
