export default function(url: string) {
    let urlString = 'https://www.reddit.com/submit?url='
    urlString += encodeURIComponent(url)
    return urlString
}
