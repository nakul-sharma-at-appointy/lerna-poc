export default function(url: string) {
    let urlString = 'https://www.twitter.com/intent/tweet?url='
    urlString += encodeURIComponent(url)
    return urlString
}

