import { nanoid } from 'nanoid'
import global from './global'

const THRESHOLD = 60 * 1000

export interface GlobalTimer {
    subscriptions: Record<string, () => void>
    init: () => void
    register: (callback: () => void) => string
    destroy: (id: string) => void
    tick: () => void
}

declare global {
    var globalTimer: GlobalTimer
}

if (global && !global.globalTimer) {
    global.globalTimer = {
        subscriptions: {},
        init: function () {
            setInterval(() => {
                this.tick()
            }, THRESHOLD)
        },
        //@ts-ignore
        register: function (callback) {
            const id = nanoid()
            this.subscriptions[id] = callback
            return id
        },
        destroy: function (id) {
            //@ts-ignore
            delete this.subscriptions[id]
        },
        tick: function () {
            //@ts-ignore
            Object.values(this.subscriptions).forEach((callback) => callback?.())
        },
    }
    global.globalTimer.init()
}

export default global?.globalTimer
