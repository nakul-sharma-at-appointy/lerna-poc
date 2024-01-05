import React from 'react'
import isURL from './isURL'

const removeFragment = (node: HTMLElement, startComment: Comment, endComment: Comment) => {
    const children = node.childNodes
    let record = false
    const nodes = []
    for (let i = 0, l = children.length; i < l; i++) {
        let child = children[i]
        if (child.nodeType === 8 && (child.nodeValue === startComment.textContent || child.nodeValue === endComment.textContent)) {
            record = true
        }
        if (record) {
            nodes.push(child)
        }
        if (child.nodeType === 8 && child.nodeValue === endComment.textContent) {
            record = false
        }
    }
    nodes.forEach(node => node.remove())
}

const exists = (node: HTMLElement, startComment: Comment) => {
    const children = node.childNodes
    let record = false
    for (let i = 0, l = children.length; i < l; i++) {
        let child = children[i]
        if (child.nodeType === 8 && child.nodeValue === startComment.textContent) {
            record = !record
            break
        }
    }
    return record
}

export function loadScript(name: string, src: string, appendTo: 'head' | 'body' = 'head', callback?: (params: { loaded: boolean, error: boolean }) => void): Function | undefined {
    const parent = document[appendTo]
    const startComment = document.createComment(`start:injected-script [${name}]`)
    if (exists(parent, startComment)) {
        callback?.({ loaded: true, error: false })
    } else {
        let frag
        const endComment = document.createComment(`end:injected-script [${name}]`)
        if (isURL(src)) {
            frag = document.createElement('script')
            frag.src = src
            frag.async = true

        } else {
            frag = document.createRange().createContextualFragment(src)
        }
        parent.append(startComment)
        parent.append(frag)
        parent.append(endComment)
        const cleanup = () => removeFragment(parent, startComment, endComment)
        const onfragLoad = () => callback?.({ loaded: true, error: false })
        const onfragError = () => {
            cleanup()
            callback?.({ loaded: true, error: true })
        }
        frag.addEventListener('load', onfragLoad)
        frag.addEventListener('error', onfragError)
        return cleanup
    }
}

export function useScript(name: string, src: string, appendTo?: 'head' | 'body') {
    const [state, setState] = React.useState({
        loaded: false,
        error: false,
    })
    React.useEffect(() => {
        const cleanup = loadScript(name, src, appendTo, setState)
        return () => {
            if (cleanup) {
                cleanup()
            }
        }
    }, [src])

    return [state.loaded, state.error]
}

interface Props {
    src: string,
    name: string,
    appendTo?: 'head' | 'body'
}

//@ts-ignore
const Script: React.FC<Props> = ({ name, children, src, appendTo }) => {
    const [loaded] = useScript(name, src, appendTo)
    return loaded ? <>{children}</> : null
}

export default Script

