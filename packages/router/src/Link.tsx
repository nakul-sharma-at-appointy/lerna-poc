import React, { FC, MouseEvent } from 'react'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { Link as RLink, useInRouterContext } from 'react-router-dom'
import { LinkProps } from './types'
import useSaastackQueryParams from './useSaastackQueryParams'
import { modifyTo } from './utils'

const Link: FC<LinkProps> = ({ to, state, replace, onClick, query, ...props }) => {
    const queryParams = useSaastackQueryParams(query)
    const isInRouterContext = useInRouterContext()
    if (to && isInRouterContext) {
        const _to = modifyTo(to, queryParams)
        return <MuiLink component={RLink as any} {...props} {...{ to: _to, state, replace }} />
    }
    const linkProps: MuiLinkProps = {
        href: '#!',
        onClick: (e: MouseEvent<HTMLAnchorElement>) => {
            if (!props.href) {
                e.stopPropagation()
                e.preventDefault()
            }
            onClick && onClick(e)
        },
        ...(props.href ? { target: '_blank' } : {}),
        ...props,
    }
    return <MuiLink {...linkProps} />
}

export default Link
