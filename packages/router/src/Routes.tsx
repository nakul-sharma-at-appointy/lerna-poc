import React, { FC } from 'react'
import { Routes as RRoutes } from 'react-router-dom'
import { RoutesProps } from './types'
import { enhanceRouteChildren } from './utils'

const Routes: FC<RoutesProps> = ({ children, ...props }) => (
    <RRoutes {...props} children={enhanceRouteChildren(children)} />
)

export default Routes
