import { useDeepCompare } from '@saastack/utils'
import { parse } from 'query-string'
import { useInRouterContext, useLocation } from 'react-router-dom'

const useQueryParams = () => {
    // eslint-disable-next-line
    const { search } = useInRouterContext() ? useLocation() : location
    return useDeepCompare(parse(search, { parseNumbers: true, parseBooleans: true }))
}
export default useQueryParams
