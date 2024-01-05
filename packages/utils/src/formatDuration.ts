import { day, fmt, hour, IGrading, minute } from 'human-duration'

export default function formatDuration(d: number, inputGradings?: IGrading[]) {
    if (d === 0) {
        return fmt(0).grading([minute]).toString()
    }

    let gradings: IGrading[] = []

    if (d >= 86400) {
        gradings = [day]
    }

    if (d % 86400 !== 0) {
        if (d > 7200) {
            gradings = [...gradings, hour]
        }
        if (d % 3600 !== 0 || d <= 7200) {
            gradings = [...gradings, minute]
        }
    }

    return fmt(d * 1000).grading(inputGradings ?? gradings).toString()
}

export function formatDurationArray(d: number[]) {
    return d.map(d => formatDuration(d)).join(', ')
}
