import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Outlet, Route as RRoute } from 'react-router-dom'
import { RouteProps } from './types'

const companyName = process.env.REACT_APP_COMPANY_NAME

const Route: FC<RouteProps> = ({ title, element, children, ...props }) => {
    const _title = [companyName, title].filter(Boolean).join(' › ')
    const _element = (
        <>
            {element}
            {title && (
                <Helmet>
                    <title>{_title}</title>
                </Helmet>
            )}
            {children && <Outlet />}
        </>
    )
    return <RRoute {...props} children={children} element={_element} />
}

export default Route
