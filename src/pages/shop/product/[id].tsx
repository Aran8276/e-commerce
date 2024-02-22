import Footer from '@/pages/components/Footer'
import Header from '@/pages/components/Header'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import s from '@/pages/global.module.css'
import axios from 'axios';
import { useRouter } from 'next/router'

function index() {
    const [visibleDiv, setVisibleDiv] = useState(1);
    const [JsonIndex, setJsonIndex]: any = useState({});
    const [JsonIndex2, setJsonIndex2]: any = useState({});
    const baseURL = 'http://localhost:8000/api/index/';
    const basketStoreURL = 'http://localhost:8000/api/basket/index';
    const basketFetchURL = 'http://localhost:8000/api/basket/index';
    const router = useRouter();
    let id: any;

    const createPost = async (url: string, objectRequestHeader: object) => {
        try {
            const response = await axios.post(url, objectRequestHeader, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            // if (response.status === 200) {
            //     router.push('/shop/cart')
            // }

            return response.data
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    const fetchData = async (url: string) => {
        try {
            const response = await axios.get(url);
            setJsonIndex(response.data);

        } catch (error) {
            console.log(error);

        }
    }

    const fetchBasketData = async (url: string) => {
        try {
            const response = await axios.get(url);
            setJsonIndex2(response.data);

        } catch (error) {
            console.log(error);

        }
    }

    const cartHandler = () => {
        //Basically doing a CRUD operations with JSON
        let url = new URL(window.location.href);
        let segments = url.pathname.split('/');
        id = segments.pop() || segments.pop();
        id = parseInt(id);
        let formArrayObject: any = JSON.parse(JsonIndex2.data[0].basket);
        // console.log(formArrayObject);

        formArrayObject.push({
            productId: id,
            qty: 1,
        })

        console.log(formArrayObject);
        
    }

    useEffect(() => {
        let url = new URL(window.location.href);
        let segments = url.pathname.split('/');
        id = segments.pop() || segments.pop();
        fetchData(baseURL + id);
        fetchBasketData(basketFetchURL);

    }, []);


    return (
        <>

            <Header currentNav='shop' />
            <main>
                <div className="flex space-x-[13.5rem] ml-32 mt-12">
                    <div className="w-[30rem]">
                        <img src={((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.image_value} />
                    </div>


                    <div>
                        <div className="flex flex-col">
                            <div className="text-3xl text-left">
                                <span>{((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.name}</span>
                            </div>

                            <div className="text-sm text-green-500 font-bold text-left mt-1">
                                <span>{((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.qty} left in stock</span>
                            </div>

                            <div className="flex flex-col mt-5">
                                <div className="flex justify-evenly w-full font-bold text-center">

                                    <button onClick={() => setVisibleDiv(1)} className={visibleDiv === 1 ? `${s.customBtn} ${s.active}` : `${s.customBtn}`}>
                                        Details
                                    </button>
                                    <button onClick={() => setVisibleDiv(2)} className={visibleDiv === 2 ? `${s.customBtn} ${s.active}` : `${s.customBtn}`}>
                                        Specifications
                                    </button>


                                </div>

                                <div>



                                    {visibleDiv === 1 && (
                                        <div className="w-[26rem] text-justify mt-3">
                                            <span>
                                                {((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.description}
                                            </span>
                                        </div>
                                    )}




                                    {visibleDiv === 2 && (
                                        <div className="w-[26rem] text-justify mt-3">
                                            <span>
                                                {((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.specs}
                                            </span>
                                        </div>
                                    )}



                                </div>



                            </div>


                            <div className="mt-8 flex justify-evenly">
                                <div className="font-bold text-xl">
                                    <span>${((Object.keys(JsonIndex).length) === 0) ? <></> : JsonIndex.price}</span>
                                </div>

                                {/* href="/shop/cart" */}
                                <div>
                                    <button onClick={() => cartHandler()} className="text-white px-4 py-2 rounded-lg bg-[#0071e3]">Add to cart</button>
                                </div>


                            </div>


                        </div>
                    </div>

                </div>

            </main>

            <Footer currentNav='shop' />

        </>
    )
}

export default index