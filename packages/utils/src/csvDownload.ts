export default function csvDownload(content: string, name: string) {
    const csvData = new Blob([content], { type: 'text/csv;charset=unicode;' })
    const csvURL = window.URL.createObjectURL(csvData)
    const tempLink = document.createElement('a')
    tempLink.href = csvURL
    tempLink.setAttribute('download', `${name}.csv`)
    tempLink.click()
}
