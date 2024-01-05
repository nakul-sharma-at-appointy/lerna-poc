import React, { FC } from 'react'
import {
    createRoutesFromArray,
    createRoutesFromChildren,
    createSearchParams,
    generatePath,
    matchPath,
    matchRoutes,
    Outlet,
    resolvePath,
    useBlocker,
    useHref,
    useInRouterContext,
    useLocation,
    useMatch,
    useOutlet,
    useParams,
    usePrompt,
    useResolvedPath,
    useRoutes,
    useSearchParams,
} from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
import BrowserRouter from './BrowserRouter'
import HashRouter from './HashRouter'
import MemoryRouter from './MemoryRouter'
import Navigate from './Navigate'
import { SaastackRouterContextProps } from './SaastackRouterContext'
import { BrowserRouterProps, HashRouterProps, MemoryRouterProps } from './types'
import useNavigate from './useNavigate'

export { default as Route } from './Route'
export { default as Routes } from './Routes'
export { default as Link } from './Link'
export { default as useQueryParams } from './useQueryParams'
export { default as useRouteMatch } from './useRouteMatch'

const isDev = process.env.NODE_ENV !== 'production'

export type RouterProps =
    | (MemoryRouterProps & SaastackRouterContextProps)
    | (BrowserRouterProps & SaastackRouterContextProps)
    | (HashRouterProps & SaastackRouterContextProps)

export const Router: FC<RouterProps> = (props) =>
    isDev ? <HashRouter {...props} /> : <BrowserRouter {...props} />

export {
    Navigate,
    useNavigate,
    matchPath,
    useLocation,
    useParams,
    MemoryRouter,
    HashRouter,
    BrowserRouter,
    StaticRouter,
    useMatch,
    useBlocker,
    useHref,
    useInRouterContext,
    useOutlet,
    usePrompt,
    useRoutes,
    useSearchParams,
    useResolvedPath,
    createRoutesFromArray,
    createRoutesFromChildren,
    createSearchParams,
    Outlet,
    generatePath,
    matchRoutes,
    resolvePath,
}

export * from './types'
