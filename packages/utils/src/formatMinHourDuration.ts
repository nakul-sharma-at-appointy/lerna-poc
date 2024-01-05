const convertSecondsToMinutesOrHours = (seconds: number, toggle: boolean) => {
    if (toggle) {
        const minutes = Number(seconds / 60).toFixed(2)
        return `${minutes}m`
    } else {
        const hours = Number(seconds / 3600).toFixed(2)
        return `${hours}h`
    }
}

export default convertSecondsToMinutesOrHours