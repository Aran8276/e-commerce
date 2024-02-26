import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import s from '@/pages/global.module.css'
import { useRouter } from 'next/router'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

function index() {
    const [visibleDiv, setVisibleDiv] = useState(1)
    const router = useRouter()
    const user = useUser()
    const supabaseClient = useSupabaseClient()
    const [data, setData]: any = useState([])
    const [data2, setData2]: any = useState([])
    let id: any

    // const createPost = async (url: string, objectRequestHeader: object) => {
    //     try {
    //         const response = await axios.post(url, objectRequestHeader, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Accept: 'application/json',
    //             },
    //         })

    //         // if (response.status === 200) {
    //         //     router.push('/shop/cart')
    //         // }

    //         return response.data
    //     } catch (error) {
    //
    //         return null
    //     }
    // }

    useEffect(() => {
        const url = new URL(window.location.href)
        const segments = url.pathname.split('/')
        id = segments.pop() || segments.pop()

        async function fetchData() {
            const { data: product_list } =
                await supabaseClient /* SQL Query Action (Select from 'product_list' where 'id' is equal to JS variable id) */
                    .from('product_list')
                    .select()
                    .eq('id', id)

            setData(product_list)
        }
        fetchData()
        async function fetchBasketData() {
            const { data: product_list } =
                await supabaseClient /* SQL Query Action (Select from 'product_list' where 'id' is equal to JS variable id) */
                    .from('product_list')
                    .select()
                    .eq('id', id)

            setData2(product_list)
        }
        fetchData()
        fetchBasketData()
    }, [])

    /* Object Retriever (Replace id with the JSON property name)*/
    // data.length > 0 ?

    //

    // const fetchData = async (url: string) => {
    //     try {
    //         const response = await axios.get(url)
    //         setData(response.data)
    //     } catch (error) {
    //
    //     }
    // }
    // const fetchBasketData = async (url: string) => {
    //     try {
    //         const response = await axios.get(url)
    //         setData2(response.data)
    //     } catch (error) {
    //
    //     }
    // }
    const cartHandler = () => {
        //Basically doing a CRUD operations with JSON
        let url = new URL(window.location.href)
        let segments = url.pathname.split('/')
        id = segments.pop() || segments.pop()
        id = parseInt(id)
        let formArrayObject: any = JSON.parse(data2.data[0].basket)
        //

        formArrayObject.push({
            productId: id,
            qty: 1,
        })
    }

    return (
        <>
            <Header currentNav="shop" />
            <main>
                <div className="flex space-x-[13.5rem] ml-32 mt-12">
                    <div className="w-[30rem]">
                        <img
                            src={
                                data.length > 0
                                    ? data[0].image_value
                                    : 'http://via.placeholder.com/640'
                            }
                        />
                    </div>

                    <div>
                        <div className="flex flex-col">
                            <div className="text-3xl text-left">
                                <span>
                                    {data.length > 0 ? (
                                        data[0].name
                                    ) : (
                                        <>Failed to load title</>
                                    )}
                                </span>
                            </div>
                            <div className="text-sm text-green-500 font-bold text-left mt-1">
                                <span>
                                    {data.length > 0 ? (
                                        `${data[0].qty} `
                                    ) : (
                                        <>0 </>
                                    )}
                                    left in stock
                                </span>
                            </div>

                            {user ? (
                                <div className="flex space-x-3 mt-2">
                                    <Link
                                        href={
                                            '/admin/edit/' +
                                            (data.length > 0 ? data[0].id : '')
                                        }
                                        className="bg-green-500 px-3 rounded-full text-white">
                                        EDIT
                                    </Link>
                                    <Link
                                        href={
                                            '/admin/delete/' +
                                            (data.length > 0 ? data[0].id : '')
                                        }
                                        className="bg-red-500 px-3 rounded-full text-white">
                                        DELETE
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className="flex flex-col mt-5">
                                <div className="flex justify-evenly w-full font-bold text-center">
                                    <button
                                        onClick={() => setVisibleDiv(1)}
                                        className={
                                            visibleDiv === 1
                                                ? `${s.customBtn} ${s.active}`
                                                : `${s.customBtn}`
                                        }>
                                        Details
                                    </button>
                                    <button
                                        onClick={() => setVisibleDiv(2)}
                                        className={
                                            visibleDiv === 2
                                                ? `${s.customBtn} ${s.active}`
                                                : `${s.customBtn}`
                                        }>
                                        Specifications
                                    </button>
                                </div>

                                <div>
                                    {visibleDiv === 1 && (
                                        <div className="w-[26rem] text-justify mt-3">
                                            <span>
                                                {data.length > 0 ? (
                                                    data[0].description
                                                ) : (
                                                    <>
                                                        Failed to load
                                                        description
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    )}

                                    {visibleDiv === 2 && (
                                        <div className="w-[26rem] text-justify mt-3">
                                            <span>
                                                {data.length > 0 ? (
                                                    data[0].specs
                                                ) : (
                                                    <>
                                                        No specifications
                                                        available
                                                    </>
                                                )}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 flex justify-evenly">
                                <div className="font-bold text-xl">
                                    <span>
                                        $
                                        {data.length > 0 ? (
                                            data[0].price
                                        ) : (
                                            <>0</>
                                        )}
                                    </span>
                                </div>

                                {/* href="/shop/cart" */}
                                <div>
                                    <button
                                        onClick={() => cartHandler()}
                                        className="text-white px-4 py-2 rounded-lg bg-[#0071e3]">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer currentNav="shop" />
        </>
    )
}

export default index
