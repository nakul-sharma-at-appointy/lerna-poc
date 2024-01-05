const isAppointyXAppActive  = (activeApps?: string[]): boolean  => {
    return  Boolean(activeApps?.some((app) => app === 'AppointyX'))
}

export default isAppointyXAppActive