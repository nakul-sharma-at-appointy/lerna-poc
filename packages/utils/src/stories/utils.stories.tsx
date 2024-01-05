import { Box } from '@mui/material'
import faker from 'faker'
import React from 'react'
import Entities from '../Entities'
import formatCurrency from '../formatCurrency'
import { currencies } from '../localization'
import countries from '../localization/countries'
import Search from '../Search'
import formatDuration from '../formatDuration'
import { validatePrecisionPattern } from '../validatePrecisionPattern'

export default {
    title: 'Utils',
}

const getItem = () => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    color: faker.internet.color(),
    active: faker.random.boolean(),
    extendedProps: {
        parent: {
            id: faker.random.uuid(),
            name: faker.name.findName(),
        },
    },
})

const items = Array(1000).fill(0).map(getItem)
const newItems = Array(1000).fill(0).map(getItem)
const newItems2 = Array(1000).fill(0).map(getItem)

export const Default = () => {
    console.time('create')
    const adapter = new Entities(items, {
        selectId: e => `${e.id}-${e.extendedProps.parent.id}`,
    })
    console.log(adapter)
    console.timeEnd('create')
    console.time('add many')
    console.log(adapter.addMany(newItems))
    console.timeEnd('add many')
    console.time('remove many')
    console.log(adapter.removeMany(newItems))
    console.timeEnd('remove many')
    console.time('remove one')
    console.log(adapter.removeOne(items[0]))
    console.timeEnd('remove one')
    console.time('add one')
    console.log(adapter.addOne(items[0]))
    console.timeEnd('add one')
    console.time('upsert many')
    console.log(adapter.upsertMany([...newItems, ...newItems2]))
    console.timeEnd('upsert many')

    console.log(validatePrecisionPattern('9:00 AM, 12:00 PM, 3:00 PM, 6:00 PM'))

    return null
}

export const SearchTest = () => {
    const ins = new Search(items, {
        keys: ['name', 'extendedProps.parent.name'],
    })
    console.log(ins)
    return null
}

export const Country = () => {
    console.log(countries)
    return null
}

export const PriceTest = () => {
    return (
        <Box height="100%" overflow="auto">
            {currencies.map((curr, i) => (
                <Box pl={1} key={i}>
                    <Box>{curr}</Box>
                    {[2.5, 20, 200, 2000].map((amount, j) => <Box pl={2} key={j}>{formatCurrency(amount, curr)}</Box>)}
                </Box>
            ))}
        </Box>
    )
}

export const DurationTest = () => {
    return (
        <Box height="100%" overflow="auto">
            <Box pl={1}>
                {[0, 60, 600, 7500].map((duration, j) => <Box pl={2} key={j}>{formatDuration(duration)}</Box>)}
            </Box>
        </Box>
    )
}
