import { State, To } from 'history'
import { useNavigate as RUseNavigate } from 'react-router-dom'
import { NavigateFunction } from './types'
import useSaastackQueryParams from './useSaastackQueryParams'
import { modifyTo } from './utils'

const useNavigate = (): NavigateFunction => {
    const navigate = RUseNavigate()
    const queryParams = useSaastackQueryParams()
    const modifiedNavigate = (to: To, options?: { replace?: boolean; state?: State }) => {
        return navigate(modifyTo(to, queryParams), options)
    }
    return modifiedNavigate as NavigateFunction
}
export default useNavigate
