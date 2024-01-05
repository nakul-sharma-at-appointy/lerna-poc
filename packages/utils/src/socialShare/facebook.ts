export default function(url: string) {
    let urlString = 'https://www.facebook.com/sharer/sharer.php?u='
    urlString += encodeURIComponent(url)
    return urlString
}
