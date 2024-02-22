import React from 'react'
import Header from '../components/Header'
import ShortCat from '../components/ShortCatgCart'
import FacilitySection from '../components/FacilitySection'
import LongCat from '../components/LongCatgCart'
import PromotionDeal from '../components/PromotionDeal'
import Head from 'next/head'
import Link from 'next/link'
import ProductCards from '../components/ProductCards'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

function index() {
    return (
        <>
            <Head>
                <title>Home - eCom</title>
            </Head>

            <Header currentNav="home" />

            <main className="mt-4 mx-12">
                <div className="flex justify-center flex-col">
                    <div className="w-[82.5rem] h-screen rounded-xl bg-[url('https://assets.xboxservices.com/assets/7f/6b/7f6bdcb4-d291-4364-a2d6-1e267d2f67c3.jpg?n=1029384_Super-Hero-1400_1920x1080.jpg')] bg-cover">
                        <div className="grid grid-cols-1 mt-32 ml-8">
                            <span className="text-3xl font-light opacity-40">
                                OtterBox
                            </span>{' '}
                            {/*Hero Brand */}
                            <span className="text-5xl opacity-60">
                                Easy Grip
                            </span>{' '}
                            {/*Product Name 1 */}
                            <span className="text-6xl font-bold opacity-80">
                                Controller Shell
                            </span>{' '}
                            {/*Product Name 2 */}
                            <span className="mt-8">
                                <a
                                    href=""
                                    className="bg-red-600 text-center text-white px-6 py-3 rounded-full mt-5">
                                    Shop by Category
                                </a>
                            </span>{' '}
                            {/*Shop Button */}
                        </div>

                        <div className="w-[28rem] ml-6 h-fit mt-12 text-xl">
                            <span>
                                The ergonomic, slim case comes with two sets of
                                swappable grips that let you choose the best fit
                                and feel for your hands. The durable hard shell
                                protects your controller from drops, bumps, and
                                scratches, while the open access to the battery
                                ensures uninterrupted gameplay.
                            </span>{' '}
                            {/*Hero Main Desc */}
                        </div>
                    </div>

                    <div>
                        <div className="flex space-x-6 mt-24">
                            <div className="flex flex-col space-y-8">
                                <div className="flex space-x-7">
                                    {' '}
                                    {/*First Row*/}
                                    <ShortCat
                                        bg=" bg-blue-500 "
                                        isWhite={false}
                                        src="https://cdn11.bigcommerce.com/s-k11cg5mzh9/products/437/images/153669/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__47830.1707030105.500.750.png?c=2"
                                        top="Enjoy"
                                        btm="With"
                                    />
                                    <ShortCat
                                        bg="red"
                                        isWhite={true}
                                        src="https://ss7.vzw.com/is/image/VerizonWireless/vz-awi-care-smart-watch-blk?$device-lg$"
                                        top="New"
                                        btm="Wear"
                                    />
                                    <LongCat
                                        bg="from-emerald-500 to-emerald-900"
                                        dominantBg=" text-green-500 "
                                        src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png"
                                        top="Trendy"
                                        btm="Laptops"
                                        isWhite={true}
                                    />
                                </div>

                                <div className="flex space-x-7">
                                    {' '}
                                    {/*Second Row*/}
                                    <LongCat
                                        bg="from-amber-500 to-pink-500 "
                                        dominantBg="  text-yellow-500 "
                                        src="https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$"
                                        top="Best"
                                        btm="Gaming"
                                        isWhite={true}
                                        imgStyle="scale-[1.25]"
                                    />
                                    <ShortCat
                                        bg=" bg-gradient-to-r from-fuchsia-600 to-purple-600 "
                                        isWhite={false}
                                        src="https://cdn-reichelt.de/bilder/web/xxl_ws/D200/XYTRONIC-107ESD_01.png"
                                        top="Learn"
                                        btm="Repairs"
                                        marginTop="6"
                                        divStyle={false}
                                    />
                                    <ShortCat
                                        bg="[] bg-gradient-to-r from-slate-900 to-slate-700 []"
                                        isWhite={false}
                                        src="https://i5.walmartimages.com/asr/7ef01a8c-b331-4cd2-9652-6c0841a53b8d_1.416d738d4c3c6953956fa7c0798f7127.png?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                                        top="Party"
                                        btm="Speakers"
                                        marginTop="6"
                                        divStyle={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FacilitySection />

                <PromotionDeal
                    discount="50% OFF"
                    dominantBg=" text-red-500 "
                    bg="bg-gradient-to-r from-red-500 to-orange-500"
                    src="https://dam-assets.fluke.com/s3fs-public/F-179_01e-350x500.png"
                    prodTitleTop="MULTI"
                    prodTitleBtm="METER"
                    prodName="Fluke 179 Multimeter"
                    prodDesc="The entry level & general purpose multimeter, best for beginner electricians or even professionals."
                />

                <div className="mt-32">
                    <div className="flex justify-center flex-col">
                        <div className="flex flex-col text-center">
                            <span className="font-bold text-3xl">
                                Best Seller Products
                            </span>
                            <span className="text-sm opacity-70">
                                Our customer really loves these products
                            </span>
                        </div>

                        <div className="grid grid-cols-4 gap-y-16 mt-12">
                            {' '}
                            {/*Best Seller Products Section*/}
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="SBH50G2-BK-US"
                                price={399.0}
                                src="https://products.shureweb.eu/shure_product_db/product_main_images/files/c25/16a/40-/original/ce632827adec4e1842caa762f10e643d.webp"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="Apple MacBook Pro"
                                price={750.0}
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp13-space-m1-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628621779000"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="iPhone 13 Otterbox Case"
                                price={35.0}
                                src="https://i5.walmartimages.com/seo/OtterBox-Defender-Series-Pro-Case-for-Apple-iPhone-14-and-iPhone-13-Rain-Check_38e098c6-be53-4dff-b506-2b7fc84bb186.a87e4276d0c7f721889e3683c59043b0.jpeg"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="Solomon SR-965 Soldering Iron"
                                price={19.0}
                                src="https://www.stewmac.com/globalassets/product-images/m001000/m001900/m001941-solomon-sr-965-soldering-iron/0502-1-3000.jpg?hash=637626345070000000"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="OtterBox Protective Controller Shell"
                                price={32.0}
                                src="https://m.media-amazon.com/images/I/61t9YP6h0+L._AC_UF1000,1000_QL80_.jpg"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="Apple AirPods Pro"
                                price={349.0}
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="Pioneer AVHW4500NEX"
                                price={450.0}
                                src="https://cartunesstereo.com/wp-content/uploads/2022/12/Pioneer-AVHW4500NEX.png"
                            />
                            <ProductCards
                                scale={'w-[20rem]'}
                                title="Apple Watch Series 8"
                                price={699.0}
                                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s9-case-unselect-gallery-1-202309_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1693524702398"
                            />
                        </div>
                    </div>
                </div>
                <PromotionDeal
                    discount="55% OFF"
                    dominantBg=" text-blue-500 "
                    imgPos="relative left-12"
                    bg="bg-gradient-to-r from-cyan-500 to-blue-500"
                    src="https://mejorcompratv.com/cdn/shop/products/arctic-air-pure-chill-2x1-587383.webp?v=1685766812"
                    prodTitleTop="BREEZY"
                    prodTitleBtm="AIR"
                    prodName="Arctic Air Pure Chill"
                    prodDesc="Get your body cool during this hot summer weather, enjoy hot sunlight while keeping your body cold just like in the arctic."
                />
            </main>
            <Footer currentNav="home" />
        </>
    )
}

export default index
