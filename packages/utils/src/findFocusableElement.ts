import { isString } from 'lodash-es'

const elements = [
    'input',
    'select',
    'textarea',
    'a[href]',
    'button',
    '[tabindex]:not([tabindex="-1"])',
].join(', ')

const findFocusableElement = (el: string | HTMLElement): HTMLElement | null => {
    const domEl: HTMLElement | null = isString(el) ? document.querySelector(el) as HTMLElement : el
    if (domEl) {
        const focusableElements = domEl.querySelectorAll(elements) as NodeListOf<HTMLElement>
        return focusableElements[0]
    }
    return null
}

export default findFocusableElement
