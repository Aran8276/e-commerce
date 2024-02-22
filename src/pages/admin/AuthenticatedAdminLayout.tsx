import React, { useState } from 'react'
import ProductCards from '../../components/ProductCards'
import QtySelect from '../../components/QtySelect'
import axios from 'axios'
import BrandSelect from '../../components/BrandSelect'
import Link from 'next/link'

type FormBody = {
    name: string
    brand: string
    qty: number
    price: number
    isDiscounted: boolean
    discount: number
    isImgLocal: boolean
    img: string
    desc: string
    specs: string
}

function AuthenticatedAdminLayout() {
    /* DB Query Definition
    'name' => $request->name,
    'brand' => $request->brand,
    'qty' => $request->qty,
    'price' => $request->price,
    'is_discounted' => $request->isDiscounted,
    'discount_value' => $request->discount,
    'is_image_local' => $request->isImgLocal,
    'image_value' => $request->img,
    'description' => $request->desc,
    'specs' => $request->specs,
    */

    //Server-sided backend & CRUD Operations

    const baseURL = 'http://localhost:8000/api/store'
    const [successAlert, setSuccessAlert] = useState(false)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const successAlertToggler = () => {
        console.log('clicked')
        setIsButtonDisabled(true)
        setTimeout(() => {
            setSuccessAlert(true)
            setIsButtonDisabled(false)
            setTimeout(() => {
                setSuccessAlert(false)
            }, 6000)
        }, 3400)
    }

    const createPost = async (url: string, objectRequestHeader: FormBody) => {
        try {
            const response = await axios.post(url, objectRequestHeader, {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            })

            return response.data
        } catch (error) {
            console.log(error)
            return null
        }
    }

    const submitHandler = (event: any) => {
        event.preventDefault()

        successAlertToggler()

        let isImgLocalVar
        let imgLinkVar = 'false'

        if (visibleDiv == 1) {
            isImgLocalVar = true
        } else {
            isImgLocalVar = false
            imgLinkVar = event.target.imgLink.value
        }

        const objectRequestBody: FormBody = {
            name: event.target.productName.value,
            brand: event.target.brand.value,
            qty: event.target.qty.value,
            price: event.target.productPrice.value,
            isDiscounted: isDiscount,
            discount: event.target.productDiscount.value,
            isImgLocal: isImgLocalVar,
            img: imgLinkVar,
            desc: event.target.desc.value,
            specs: event.target.specs.value,
        }

        createPost(baseURL, objectRequestBody)
    }

    //Client-sided backend
    const [visibleDiv, setVisibleDiv] = useState(1)

    const [titlePreview, setTitlePrev] = useState('Product Name')
    const [pricePreview, setPricePrev] = useState(0)

    const [isDiscount, setDiscountBool] = useState(false)
    const [discountVal, setDiscountVal] = useState(0)
    const [discountSum, setDiscountSum] = useState(0)

    const [srcPreview, setSrcPrev] = useState('http://via.placeholder.com/256')

    const inputNameHandler = (event: any) => {
        if (!event.target.value || event.target.value == '') {
            setTitlePrev('Product Name')
        } else {
            setTitlePrev(event.target.value)
        }
    }

    const inputSrcHandler = (event: any) => {
        setSrcPrev(event.target.value)
    }

    const discountHandler = (event: any) => {
        if (
            !event.target.value ||
            Number.isNaN(event.target.value) ||
            event.target.value == ''
        ) {
            setDiscountBool(false)
        } else {
            setDiscountVal(event.target.value)
            let sum = pricePreview - (pricePreview * event.target.value) / 100
            setDiscountSum(sum)
            setDiscountBool(true)
        }
    }

    const inputPriceHandler = (event: any) => {
        if (isDiscount) {
            setPricePrev(event.target.value)
            let sum =
                event.target.value - (event.target.value * discountVal) / 100
            setDiscountSum(sum)
        }
        setPricePrev(event.target.value)
    }

    return (
        <>
            <main>
                <div className="mx-12 mt-24 flex justify-items-stretch space-x-16">
                    <div className="w-[58rem]  flex justify-center">
                        <div className="text-base w-[28rem] flex flex-col border-black mt-3">
                            <div className="flex justify-center text-2xl">
                                <span className="">Add New Product</span>
                            </div>
                            <div className="mt-3">
                                <form onSubmit={event => submitHandler(event)}>
                                    <div className="flex flex-col ">
                                        <input
                                            id="productName"
                                            required={true}
                                            onInvalid={e =>
                                                (
                                                    e.target as HTMLInputElement
                                                ).setCustomValidity(
                                                    'This field is required and cannot be empty.',
                                                )
                                            }
                                            onChange={event =>
                                                inputNameHandler(event)
                                            }
                                            placeholder="Product Name"
                                            className=" w-full px-3 py-2 rounded-md"
                                        />
                                        <div className="flex justify-evenly space-x-8 mt-3">
                                            <div className="w-full">
                                                <BrandSelect />
                                            </div>
                                            <div className="w-full">
                                                <QtySelect />
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">
                                                Pricing
                                            </label>
                                            <div className="flex justify-evenly space-x-8">
                                                <div className="mt-3 flex">
                                                    <span className="flex">
                                                        $
                                                        <input
                                                            id="productPrice"
                                                            onChange={event =>
                                                                inputPriceHandler(
                                                                    event,
                                                                )
                                                            }
                                                            type="number"
                                                            placeholder="Price"
                                                            className="z-0 relative bottom-[4px] left-2 w-full px-1 py-[0.2rem] rounded-md"
                                                        />
                                                    </span>
                                                </div>
                                                <div className="mt-3 flex">
                                                    <input
                                                        id="productDiscount"
                                                        type="number"
                                                        onChange={event =>
                                                            discountHandler(
                                                                event,
                                                            )
                                                        }
                                                        placeholder="Optional Discount"
                                                        className="z-0 relative bottom-[4px] left-2 w-full px-3 py-[0.2rem] rounded-md"
                                                    />
                                                    <span className="ml-3">
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <div className="flex justify-evenly">
                                                <button
                                                    onClick={() =>
                                                        setVisibleDiv(1)
                                                    }
                                                    type="button">
                                                    Upload Image
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        setVisibleDiv(2)
                                                    }
                                                    type="button">
                                                    Link an Image
                                                </button>
                                            </div>

                                            {visibleDiv === 1 && (
                                                <div className="flex justify-center mt-6 ml-36">
                                                    <input
                                                        type="file"
                                                        id="localImg"
                                                        name="localImg"
                                                        accept="image/*"
                                                    />
                                                </div>
                                            )}

                                            {visibleDiv === 2 && (
                                                <div className="mt-3">
                                                    <input
                                                        id="imgLink"
                                                        required={true}
                                                        onInvalid={e =>
                                                            (
                                                                e.target as HTMLInputElement
                                                            ).setCustomValidity(
                                                                'This field is required and cannot be empty.',
                                                            )
                                                        }
                                                        onChange={event =>
                                                            inputSrcHandler(
                                                                event,
                                                            )
                                                        }
                                                        placeholder="Image Link"
                                                        className=" w-full px-3 py-2 rounded-md"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className="w-full mt-6 ">
                                            <label
                                                htmlFor="desc"
                                                className="block mb-2 text-sm font-medium text-gray-900">
                                                Description
                                            </label>
                                            <textarea
                                                id="desc"
                                                required={true}
                                                onInvalid={e =>
                                                    (
                                                        e.target as HTMLInputElement
                                                    ).setCustomValidity(
                                                        'This field is required and cannot be empty.',
                                                    )
                                                }
                                                className="h-[15rem] w-full text-sm rounded-md"></textarea>
                                        </div>

                                        <div className="w-full mt-3">
                                            <label
                                                htmlFor="specs"
                                                className="block mb-2 text-sm font-medium text-gray-900">
                                                Specifications (optional,
                                                seperated by commas, use
                                                semicolons for spec:value)
                                            </label>
                                            <textarea
                                                id="specs"
                                                onInvalid={e =>
                                                    (
                                                        e.target as HTMLInputElement
                                                    ).setCustomValidity(
                                                        'This field is required and cannot be empty.',
                                                    )
                                                }
                                                className="h-[10rem] w-full text-sm rounded-md"></textarea>
                                        </div>

                                        <div className="mt-6 flex justify-around space-x-8">
                                            <button
                                                type="submit"
                                                disabled={isButtonDisabled}
                                                className={
                                                    'w-full px-3 py-2 rounded-md' +
                                                    (isButtonDisabled
                                                        ? ' bg-blue-400 '
                                                        : ' bg-blue-600 ') +
                                                    'hover:bg-blue-400 active:bg-blue-900 text-white'
                                                }>
                                                Submit
                                            </button>
                                            <button
                                                type="reset"
                                                className="w-full px-3 py-2 rounded-md bg-red-500 hover:bg-red-400 active:bg-red-900 text-white">
                                                Reset Form
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="w-[11.5rem] mt-[6.25rem] scale-[1.25]">
                        <div className="flex justify-center text-center text-2xl">
                            <span className="self-center">Preview</span>
                        </div>
                        <ProductCards
                            isDummy={true}
                            title={titlePreview}
                            price={pricePreview}
                            isDiscount={isDiscount}
                            discountPrice={discountSum}
                            src={srcPreview}
                        />
                    </div>
                </div>

                {successAlert ? (
                    <div
                        className="p-4 mb-4 text-sm text-green-800 rounded-lg flex space-x-1 scale-[1.2] mt-24 justify-center bg-green-50"
                        role="alert">
                        <span className="font-medium">Success!</span>
                        <span>
                            Your new product is now listed. Visit the{' '}
                            <Link href="/shop" className="text-blue-600">
                                shop
                            </Link>{' '}
                            to check the product.
                        </span>
                    </div>
                ) : (
                    <></>
                )}
            </main>
        </>
    )
}

export default AuthenticatedAdminLayout
