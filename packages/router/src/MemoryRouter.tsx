import React, { FC } from 'react'
import { MemoryRouter as RMemoryRouter } from 'react-router-dom'
import { SaastackRouterContextProps, SaastackRouterProvider } from './SaastackRouterContext'
import { MemoryRouterProps } from './types'

const MemoryRouter: FC<MemoryRouterProps & SaastackRouterContextProps> = ({
    children,
    initialEntries,
    initialIndex,
    ...props
}) => (
    <SaastackRouterProvider {...props}>
        <RMemoryRouter
            children={children}
            initialEntries={initialEntries}
            initialIndex={initialIndex}
        />
    </SaastackRouterProvider>
)

export default MemoryRouter
