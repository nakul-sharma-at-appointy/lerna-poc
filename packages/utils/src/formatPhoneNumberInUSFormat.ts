export default function formatPhoneNumberInUSFormat(
    _phoneNumbers: string[] | readonly string[],
    countryCodeToBeRemoved: string = ''
) {
    let phoneNumbers = [..._phoneNumbers]
    return phoneNumbers.map((phn) => {
        if (!phn.length) return ''
        let formatedPhoneNumber = countryCodeToBeRemoved.length
            ? phn.replace(countryCodeToBeRemoved, '')
            : phn
        formatedPhoneNumber =
            formatedPhoneNumber.slice(0, 3) +
            (formatedPhoneNumber.length > 3 ? '-' : '') +
            formatedPhoneNumber.slice(3, 6) +
            (formatedPhoneNumber.length > 6 ? '-' : '') +
            formatedPhoneNumber.slice(6)
        return formatedPhoneNumber
    })
}
