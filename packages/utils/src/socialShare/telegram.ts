export default function(url: string) {
    let urlString = 'https://telegram.me/share/url?url='
    urlString += encodeURIComponent(url)
    return urlString
}
