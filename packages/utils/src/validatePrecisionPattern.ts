const TimeSeparator = ':'
const GroupSeparator = ','
const PrioritySeparator = '#'

export const validatePrecisionPattern = (pattern: string): boolean => {
    if (pattern.length > 0) {
        const str = pattern.replace(/\s/g, '')
        const priorities = str.split(PrioritySeparator)
        for (let i = 0; i < priorities.length; i++) {
            const group = priorities[i]
            const parts = group.split(GroupSeparator)
            if (parts.length === 0) {
                return false
            }

            for (let j = 0; j < parts.length; j++) {
                const part = parts[j]
                if (!validateTime(part)) {
                    return false
                }
            }
        }
    }
    if (pattern.length === 0) {
        return false
    }

    return true
}

const validateTime = (part: string): boolean => {
    const sections = part.split(TimeSeparator)
    if (sections.length !== 2) {
        return false
    }
    const hourPart = sections[0]
    const minutePart = sections[1]

    if (hourPart.length !== 1 && hourPart.length !== 2) {
        return false
    }
    if (minutePart.length !== 2 && minutePart.length !== 3 && minutePart.length !== 4) {
        return false
    }

    let hr: number
    try {
        hr = parseInt(hourPart)
    } catch (e) {
        return false
    }
    if (minutePart.length > 2) {
        if (hr > 12) {
            return false
        }
        if (minutePart[2] != 'A' && minutePart[2] != 'P' && minutePart[2] != 'a' && minutePart[2] != 'p') {
            return false
        }
    }
    if (hr > 24) {
        return false
    }
    try {
        parseInt(minutePart.slice(0, 2))
    } catch (e) {
        return false
    }

    return true
}