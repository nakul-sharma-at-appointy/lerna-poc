export default function logoutUrl() {
    const search = window.location.search.slice(1)
    const param1 = `${search}${search ? '&' : ''}returnUrl=${process.env.REACT_APP_LOGIN_URL!}`
    const param2 = `${search}${search ? '&' : ''}returnUrl=${window.location.href}`
    return `${process.env.REACT_APP_LOGOUT_URL}?${param1}?${param2}`
}
