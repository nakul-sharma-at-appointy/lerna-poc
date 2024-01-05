import PapaParse, { UnparseConfig, UnparseObject } from 'papaparse'

type Data = Record<string, string>[] | UnparseObject<Record<string, string>>

export default function convertToCsv(data: Data, config: UnparseConfig) {
    return PapaParse.unparse(data, config)
}
