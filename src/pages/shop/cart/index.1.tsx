import OrderSum from '@/components/OrderSum'
import CartContent from '@/components/CartContent'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

export function index() {
    let [totalPrice, setTotalPrice] = useState(0)
    let [productIndex]: any = useState({})
    const [JsonIndex, setJsonIndex] = useState({})
    const baseURL = 'http://localhost:8000/api/basket/index'

    const fetchData = async (url: string) => {
        try {
            const response = await axios.get(url)
            setJsonIndex(response.data)
        } catch (error) {}
    }

    const updateTotalPrice = (productId: number, productPrice: number) => {
        let total = 0
        productIndex['id' + productId] = productPrice
        const numberOfProducts = Object.keys(productIndex).length
        for (let i = 0; i < numberOfProducts; i++) {
            total += productIndex['id' + (i + 1)]
        }
        setTotalPrice(total)
    }

    useEffect(() => {
        fetchData(baseURL)
    }, [])

    return (
        <>
            <Header currentNav="shop" />

            <main className="mx-11">
                <div className="flex justify-center">
                    <div className="flex space-x-4 mt-16 font-bold text-3xl">
                        <FontAwesomeIcon icon={faBagShopping} />
                        <span>My Cart</span>
                    </div>
                </div>
                <div className="flex justify-center space-x-16 mt-12">
                    <div>
                        {/* <CartContent id={1} setTotal={setTotal} price={1299} title="MacBook Air" quantity={3} spec1='M2 Pro' spec2='512GB NVMe SSD' spec3='16GB RAM' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=1078&hei=624&fmt=png-alpha&.v=1664472289056" />
            <CartContent id={2} setTotal={setTotal} price={750} title="MacBook Pro" quantity={5} spec1='M1 Max' spec2='1TB NVMe SSD' spec3='32GB RAM' src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621779000" />
            <CartContent id={3} setTotal={setTotal} price={229.99} title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard" quantity={18} spec1='Razer Chroma™ RGB' src="https://dl.razerzone.com/src2/3808/3808-1-en-v3.png" />
            <CartContent id={4} setTotal={setTotal} price={229.99} title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard" quantity={18} spec1='Razer Chroma™ RGB' src="https://dl.razerzone.com/src2/3808/3808-1-en-v3.png" /> */}

                        <CartContent
                            id={1}
                            updateTotalPrice={updateTotalPrice}
                            price={100}
                            title="MacBook Air"
                            quantity={1}
                            spec1="M2 Pro"
                            spec2="512GB NVMe SSD"
                            spec3="16GB RAM"
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-silver-select-201810?wid=1078&hei=624&fmt=png-alpha&.v=1664472289056"
                        />
                        <CartContent
                            id={2}
                            updateTotalPrice={updateTotalPrice}
                            price={100}
                            title="MacBook Pro"
                            quantity={1}
                            spec1="M1 Max"
                            spec2="1TB NVMe SSD"
                            spec3="32GB RAM"
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621779000"
                        />
                        <CartContent
                            id={3}
                            updateTotalPrice={updateTotalPrice}
                            price={100}
                            title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard"
                            quantity={1}
                            spec1="Razer Chroma™ RGB"
                            src="https://dl.razerzone.com/src2/3808/3808-1-en-v3.png"
                        />
                        <CartContent
                            id={4}
                            updateTotalPrice={updateTotalPrice}
                            price={100}
                            title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard"
                            quantity={1}
                            spec1="Razer Chroma™ RGB"
                            src="https://dl.razerzone.com/src2/3808/3808-1-en-v3.png"
                        />
                        <CartContent
                            id={5}
                            updateTotalPrice={updateTotalPrice}
                            price={100}
                            title="Razer BlackWidow V3 Pro Mechanical Wireless Gaming Keyboard"
                            quantity={1}
                            spec1="Razer Chroma™ RGB"
                            src="https://dl.razerzone.com/src2/3808/3808-1-en-v3.png"
                        />

                        {/* {
              JsonIndex? (Object.keys(JsonIndex).length > 0) ? <>{
            } */}
                    </div>

                    <div className="w-full h-fit">
                        <OrderSum totalPrice={totalPrice} />
                    </div>
                </div>
            </main>
            <Footer currentNav="shop" />
        </>
    )
}

export default index
