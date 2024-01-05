import urlJoin from 'proper-url-join'
import React from 'react'
import { HttpResponse, UseHttp } from './types'

const useHttp = <T = any>(url1: string, query1: Record<string, any> = {}, dependencies?: any[]): UseHttp<T> => {
    const [result, setResult] = React.useState<HttpResponse<T>>({
        data: null,
        loading: false,
        error: null,
        response: null,
    })
    const execute = async <V = T>(url2?: string | null, query2?: Record<string, string> | null): Promise<HttpResponse<V>> => {
        setResult({
            loading: true,
            data: null,
            response: null,
            error: null,
        })
        const url = urlJoin((url2 ?? url1), { query: query2 ?? query1 })
        return fetch(url)
            .then(async e => {
                const data = await e.json()
                const res = {
                    loading: false,
                    data,
                    response: e,
                    error: null,
                }
                setResult(res)
                return res
            })
            .catch(e => {
                setResult({
                    loading: false,
                    data: null,
                    response: null,
                    error: e,
                })
                throw e
            })
    }
    const deps = dependencies ? dependencies : []
    React.useEffect(() => {
        if (!dependencies) {
            execute()
        }
    }, deps)
    return { ...result, execute }
}

export default useHttp
