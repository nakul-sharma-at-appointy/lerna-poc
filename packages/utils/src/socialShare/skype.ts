export default function(url: string) {
    let urlString = 'https://web.skype.com/share?url='
    urlString += encodeURIComponent(url)
    return urlString
}
