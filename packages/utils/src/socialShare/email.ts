export default function(url: string) {
    let urlString = 'mailto:?body='
    urlString += encodeURIComponent(url)
    return urlString
}
