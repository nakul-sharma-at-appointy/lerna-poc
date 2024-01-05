export default function downloadCsv(content: string, name: string) {
    const el = document.createElement('a')
    el.href = 'data:text/csv;charset=utf-8,' + encodeURI(content)
    el.target = '_blank'
    el.download = name
    el.click()
    el.remove()
}
