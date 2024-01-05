import React, { FC } from 'react'
import { HashRouter as RHashRouter } from 'react-router-dom'
import { SaastackRouterContextProps, SaastackRouterProvider } from './SaastackRouterContext'
import { HashRouterProps } from './types'

const HashRouter: FC<HashRouterProps & SaastackRouterContextProps> = ({
    children,
    window,
    ...props
}) => (
    <SaastackRouterProvider {...props}>
        <RHashRouter children={children} window={window} />
    </SaastackRouterProvider>
)

export default HashRouter
