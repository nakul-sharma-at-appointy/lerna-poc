import React, { FC, useMemo } from 'react'
import { Navigate as RNavigate } from 'react-router-dom'
import { NavigateProps } from './types'
import useSaastackQueryParams from './useSaastackQueryParams'
import { modifyTo } from './utils'

const Navigate: FC<NavigateProps> = ({ to, ...props }) => {
    const queryParams = useSaastackQueryParams()
    const modifiedTo = useMemo(() => modifyTo(to, queryParams), [to, queryParams])
    return <RNavigate {...props} to={modifiedTo} />
}

export default Navigate
