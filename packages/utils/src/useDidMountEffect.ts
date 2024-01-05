import React from 'react'

export default function useDidMountEffect(effect: React.EffectCallback, deps?: React.DependencyList) {
    const isMounted = React.useRef(false)

    React.useEffect(() => {
        if (isMounted.current) {
            return effect()
        } else {
            isMounted.current = true
        }
    }, deps)
};
