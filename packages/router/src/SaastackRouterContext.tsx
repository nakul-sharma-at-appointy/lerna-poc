import React, { createContext, FC, useContext } from 'react'

export type SaastackRouterContextProps = {
    preserveQueryParams?: boolean
}

const SaastackRouterContext = createContext<SaastackRouterContextProps>({
    preserveQueryParams: false,
})
//@ts-ignore
export const SaastackRouterProvider: FC<SaastackRouterContextProps> = ({ children, ...props }) => (
    <SaastackRouterContext.Provider value={props} children={children} />
)

export const useSaastackRouter = () => useContext(SaastackRouterContext)

export default SaastackRouterContext
