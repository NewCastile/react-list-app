//Custom Hook
import { useState, useEffect } from 'react'

function useList(url, type) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        
        async function getData() {
            try {
                const res = await fetch(url, { signal: abortCont.signal })
                if (!res.ok) throw Error("Couldn't fetch the data for that resource")

                const data = await res.json()
                if (type == "profile") setData(data[0].tweets)
                if (type == "feed") setData(data)
                setIsLoading(false)
                setError(null)     

            } catch (err) {
                if (err.name == "AbortError") { console.log('fetch aborted') }
                setIsLoading(false)
                setError(err.message)
            }
        }

        getData()
        
        return function() {
            abortCont.abort()
        }

    }, [url])

    return { data, isLoading, error }
}

export default useList