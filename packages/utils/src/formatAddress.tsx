import { isPlainObject, isString } from 'lodash-es'
import React from 'react'

export default function formatAddress(address: any = {}, multiline?: boolean) {
    if (isString(address)) {
        return address
    }
    if (isPlainObject(address)) {
        const { streetAddress, locality, region, country, postalCode } = address
        if (multiline) {
            return (
                <>
                    {streetAddress?.trim() ? (
                        <>
                            {streetAddress} <br />
                        </>
                    ) : (
                        <></>
                    )}
                    {locality?.trim() || region?.trim() ? (
                        <>
                            {locality} {locality?.trim() && region?.trim() ? <>, </> : <></>}{' '}
                            {region} <br />
                        </>
                    ) : (
                        <></>
                    )}
                    {country} {country?.trim() && postalCode?.trim() ? <>, </> : <></>} {region}
                </>
            )
        }
        return [streetAddress, locality, region, country, postalCode].filter(Boolean).join(', ')
    }
    return ''
}
