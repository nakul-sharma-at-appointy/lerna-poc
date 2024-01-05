import React, { FC } from 'react'
import { BrowserRouter as RBrowserRouter } from 'react-router-dom'
import { SaastackRouterContextProps, SaastackRouterProvider } from './SaastackRouterContext'
import { BrowserRouterProps } from './types'

const BrowserRouter: FC<BrowserRouterProps & SaastackRouterContextProps> = ({
    children,
    window,
    ...props
}) => (
    <SaastackRouterProvider {...props}>
        <RBrowserRouter children={children} window={window} />
    </SaastackRouterProvider>
)

export default BrowserRouter
