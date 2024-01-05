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

export interface ParentRefProps<T = HTMLElement> {
    parentRef?: ((instance: T | null) => void) | React.RefObject<T>;
}

class ParentRef<T> extends React.Component<ParentRefProps<T>> {
    componentDidMount() {
        // @ts-ignore
        this.ref = ReactDOM.findDOMNode(this)!.parentNode as HTMLElement
        // @ts-ignore
        setRef(this.props.parentRef, this.ref)
    }

    componentDidUpdate(prevProps: ParentRefProps<T>) {
        const ref = ReactDOM.findDOMNode(this)

        // @ts-ignore
        if (prevProps.parentRef !== this.props.parentRef || this.ref !== ref) {
            if (prevProps.parentRef !== this.props.parentRef) {
                setRef(prevProps.parentRef, null)
            }

            // @ts-ignore
            this.ref = ref
            // @ts-ignore
            setRef(this.props.parentRef, this.ref)
        }
    }

    componentWillUnmount() {
        // @ts-ignore
        this.ref = null
        setRef(this.props.parentRef, null)
    }

    render() {
          // @ts-ignore
        return this.props.children
    }
}

export default ParentRef
