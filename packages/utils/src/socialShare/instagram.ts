export default function (url: string) {
    let urlString = 'https://www.instagram.com/?url='
    urlString += encodeURIComponent(url)
    return urlString
}
