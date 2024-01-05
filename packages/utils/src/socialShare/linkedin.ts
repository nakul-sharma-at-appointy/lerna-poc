export default function(url: string) {
    let urlString = 'https://www.linkedin.com/sharing/share-offsite/?url='
    urlString += encodeURIComponent(url)
    return urlString
}
