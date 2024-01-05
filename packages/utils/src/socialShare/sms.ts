export default function(url: string) {
    let urlString = 'sms:?body='
    urlString += encodeURIComponent(url)
    return urlString
}
