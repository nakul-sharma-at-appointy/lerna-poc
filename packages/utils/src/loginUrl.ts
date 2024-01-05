import urlJoin from 'proper-url-join'

export default function loginUrl() {
    const search = window.location.search.slice(1)
    const param = `${search ? '&' : ''}${search}`
    const url = urlJoin(process.env.REACT_APP_LOGIN_URL, {
        query: {
            returnUrl: window.location.href,
        },
    })
    return `${url}${param}`
}
