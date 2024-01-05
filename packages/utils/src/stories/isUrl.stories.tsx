import React from 'react'
import isURL from '../isURL'

export default {
    title: 'isURL'
}


export const Default = () => {
    const ins = isURL('WWW.GOOGLE.COM')
    console.log(ins)
    return <>isURL('WWW.GOOGLE.COM'): {ins}</>
}
