import { useDeepCompare } from '@saastack/utils'
import { useSaastackRouter } from './SaastackRouterContext'
import useQueryParams from './useQueryParams'

const useSaastackQueryParams = (query?: any) => {
    const { preserveQueryParams } = useSaastackRouter()
    const queryParams = useQueryParams()
    let qp = query ?? {}
    if (preserveQueryParams) {
        qp = { ...queryParams, ...qp }
    }
    qp = Object.keys(qp).length ? qp : undefined
    return useDeepCompare(qp)
}

export default useSaastackQueryParams
