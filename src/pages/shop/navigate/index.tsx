import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function index() {
    const searchParam = useSearchParams()
    const supabaseClient = useSupabaseClient()
    const [data, setData] = useState([])
    const search = searchParam.get('search')

    useEffect(() => {
        async function fetchData() {
            const { data: product_list } = await supabaseClient
                .from('product_list') /* SQL Query Action */
                .select() /* SQL Query Action */

            setData(
                product_list,
            ) /* 'product_list' is the object retrieved from the server, and this code stores to the 'data' state constant */
        }
        fetchData()
        console.log(data)
    }, [])

    return (
        <>
            <div>
                <div>Search: {search}</div>
            </div>
            <div>
                <div>JSON DATA:</div>
                /*{' '}
                <pre>{data ? <>{JSON.stringify(data, null, 2)}</> : <></>}</pre>
            </div>
        </>
    )
}
