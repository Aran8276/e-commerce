import React, { useEffect, useState } from 'react'
import AuthenticatedAdminLayout from '../AuthenticatedAdminLayout'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function index() {
    const [stateId, setStateId] = useState(0)
    const supabaseClient = useSupabaseClient()
    const [data, setData]: any = useState([])

    useEffect(() => {
        const url = new URL(window.location.href)
        const segments = url.pathname.split('/')
        let id = segments.pop() || segments.pop()
        let parsedId = parseInt(id)
        setStateId(parsedId)
        async function fetchData() {
            const { data: product_list } =
                await supabaseClient /* SQL Query Action (Select from 'product_list' where 'id' is equal to JS variable id) */
                    .from('product_list')
                    .select()
                    .eq('id', id)

            setData(product_list)
        }
        fetchData()
    }, [])

    return (
        <>
            <Header currentNav="admin" />
            {data.length > 0 ? (
                <AuthenticatedAdminLayout
                    isRoleEdit={true}
                    id={stateId}
                    name={data[0].name}
                    brand={data[0].brand}
                    qty={data[0].qty}
                    price={data[0].price}
                    is_discounted={data[0].is_discounted}
                    discount_value={data[0].discount_value}
                    is_image_local={data[0].is_image_local}
                    image_value={data[0].image_value}
                    description={data[0].description}
                    specs={data[0].specs}
                />
            ) : (
                <></>
            )}
            <Footer currentNav="admin" />
        </>
    )
}
