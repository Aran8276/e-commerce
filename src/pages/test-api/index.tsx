import { createClient } from '@supabase/supabase-js'
import 'react'
import { useEffect, useState } from 'react'

export default function index() {
    /* Fetch data from supabase server (specifically 'product_list') and useable through 'data' state constant (RETURNS AS AN ARRAY) */
    const [data, setData] = useState(
        [],
    ) /* Constant state 'data' will be returned as the JSON object retrieved from the server */
    useEffect(() => {
        async function fetchData() {
            const supabase = createClient(
                process.env.NEXT_PUBLIC_SUPABASE_URL!,
                process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
            ) /* Supabase URL & ANON_KEY setup */

            const { data: product_list } = await supabase
                .from('product_list') /* SQL Query Action */
                .select() /* SQL Query Action */

            setData(
                product_list,
            ) /* 'product_list' is the object retrieved from the server, and this code stores to the 'data' state constant */
        }
        fetchData()
    }, [])
    /* Fetch data from supabase server (specifically 'product_list') and useable through 'data' state constant (RETURNS AS AN ARRAY)*/
    return (
        <>
            <h1>
                API Test Server to retrieve the 'product_list' data from
                supabase database as a JSON array. Used in '/shop'
            </h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    )
}
