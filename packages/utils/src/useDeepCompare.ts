import { isEqual } from 'lodash-es'
import React from 'react'

export default function useDeepCompare<T>(value: T): T {
    const latestValue = React.useRef(value)
    if (!isEqual(latestValue.current, value)) {
        latestValue.current = value
    }
    return latestValue.current
}
