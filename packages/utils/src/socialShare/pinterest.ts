export default function(url: string) {
    let urlString = 'https://www.pinterest.com/pin/create/button/?url='
    urlString += encodeURIComponent(url)
    return urlString
}
