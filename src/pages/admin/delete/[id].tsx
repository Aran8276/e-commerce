import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProductCards from '@/components/ProductCards'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Router, useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function index() {
    let id
    const [useableId, setUsableId] = useState(0)
    const supabaseClient = useSupabaseClient()
    const [data, setData]: any = useState([])
    const router = useRouter()

    async function deleteData() {
        const { error } =
            await supabaseClient /* SQL Query Action (Select from 'product_list' where 'id' is equal to JS variable id) */
                .from('product_list')
                .delete()
                .eq('id', useableId)
        error
            ? (alert(
                  `Failed to delete table: ${error.message} Check console for more info`,
              ),
              console.log(error))
            : false
        router.push('/shop')
    }

    useEffect(() => {
        const url = new URL(window.location.href)
        const segments = url.pathname.split('/')
        id = segments.pop() || segments.pop()
        setUsableId(id)

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
            <div className="flex justify-center mt-6">
                <div className="flex flex-col">
                    <div className="flex justify-center text-2xl font-bold">
                        <span>
                            Are you sure you want to delete this product?
                            (Product ID: {useableId})
                        </span>
                    </div>
                    <div className="flex justify-center mt-12">
                        {data.length > 0 ? (
                            <ProductCards
                                isDummy={true}
                                scale=" w-[18rem] "
                                databaseId={data[0].id}
                                src={data[0].image_value}
                                title={data[0].name}
                                /** linkSrc={} */ price={data[0].price}
                            />
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="flex justify-center space-x-12 mt-12">
                        <button
                            className="px-3 py-2 hover:bg-gray-200 rounded-lg"
                            onClick={() => router.push('/shop')}>
                            Cancel
                        </button>
                        <button
                            className="px-3 py-2 bg-red-600  hover:bg-red-800 text-white rounded-lg"
                            onClick={() => deleteData()}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>

            <Footer currentNav="admin" />
        </>
    )
}
