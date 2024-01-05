import React from 'react'

export default function useMountEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
    const isMounted = React.useRef(false)

    React.useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return effect()
        }
    }, deps)
}
