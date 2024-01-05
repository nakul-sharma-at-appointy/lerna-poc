import { ReactNode, Children, isValidElement, cloneElement } from 'react'
import { Path, To } from 'history'
import { useMatch } from 'react-router-dom'
import { RouteProps } from './types'
import { stringify } from 'query-string'

export const enhanceRouteChildren = (children: ReactNode) =>
    children &&
    Children.map(children as any, (child) => {
        if (
            isValidElement<RouteProps>(child) &&
            child.props.hasOwnProperty('path') &&
            child.props.hasOwnProperty('element')
        ) {
            const pth = child.props.path
            const path = `${(pth || '').replace(/\/+$/g, '').replace(/\/\*+$/g, '')}/*`
            return cloneElement(child, { ...child.props, path })
        }
        return child
    })

export const pathPatternToTo = (pattern: Parameters<typeof useMatch>[0]): To => {
    if (typeof pattern === 'string') {
        return pattern
    }
    return {
        search: '',
        hash: '',
        pathname: pattern.path,
    }
}

export const pathToPathPattern = ({ pathname }: Path): Parameters<typeof useMatch>[0] => {
    return {
        path: pathname,
        end: false,
        caseSensitive: false,
    }
}

export const modifyTo = (to: To, queryParams: any) => {
    const [pathname, existingSearchInPathname] = (
        (typeof to === 'string' ? to : to.pathname) ?? ''
    ).split('?')

    const newSearchParams = new URLSearchParams(stringify(queryParams))

    if (existingSearchInPathname) {
        Array.from(new URLSearchParams(existingSearchInPathname).entries()).forEach((entry) => {
            newSearchParams.set(entry[0], entry[1])
        })
    }

    const existingSearchInTo = new URLSearchParams(typeof to === 'string' ? '' : to.search)
    if (existingSearchInTo) {
        Array.from(existingSearchInTo.entries()).forEach((entry) => {
            newSearchParams.set(entry[0], entry[1])
        })
    }

    const search = newSearchParams.toString()
    if (typeof to === 'string') {
        return pathname + (search ? `?${search}` : '')
    }

    return {
        ...to,
        pathname,
        search: search ? `?${search}` : '',
    }
}
