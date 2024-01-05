export const convertToLink = (value: string) => {
    if (!value) return
    const urlRegex = /(((https?:\/\/)|[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}|(www\.))[^\s]+)/g
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return value.replace(urlRegex, (url) => {
        let hyperlink = url
        if (hyperlink.match(emailRegex)) {
            return `<a href='mailto:${hyperlink}' target="_blank" rel="noopener noreferrer">${url}</a>`
        }
        if (!hyperlink.match('^https?://')) {
            hyperlink = 'https://' + hyperlink
        }
        return `<a href=${hyperlink} target="_blank" rel="noopener noreferrer">${url}</a>`
    })
}