import React from 'react'
import ReactDOM from 'react-dom'

export function setRef<T>(
    ref: React.RefObject<T> | ((instance: T | null) => void) | null | undefined,
    value: T | null,
): void {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        // @ts-ignore
        ref.current = value
    }
}

export interface RootRefProps<T = any> {
    rootRef?: ((instance: T | null) => void) | React.RefObject<T>;
}

class RootRef<T> extends React.Component<RootRefProps<T>> {
    componentDidMount() {
        // @ts-ignore
        this.ref = ReactDOM.findDOMNode(this)
        // @ts-ignore
        setRef(this.props.rootRef, this.ref)
    }

    componentDidUpdate(prevProps: RootRefProps<T>) {
        const ref = ReactDOM.findDOMNode(this)

        // @ts-ignore
        if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
            if (prevProps.rootRef !== this.props.rootRef) {
                setRef(prevProps.rootRef, null)
            }

            // @ts-ignore
            this.ref = ref
            // @ts-ignore
            setRef(this.props.rootRef, this.ref)
        }
    }

    componentWillUnmount() {
        // @ts-ignore
        this.ref = null
        setRef(this.props.rootRef, null)
    }

    render() {
          // @ts-ignore
        return this.props.children
    }
}

export default RootRef
