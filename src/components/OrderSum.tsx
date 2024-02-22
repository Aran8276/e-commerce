import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { faStripe } from '@fortawesome/free-brands-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SelfProps = {
    totalPrice: number,
}

function OrderSum(props: SelfProps) {
    return (

        <div className="flex justify-center flex-col text-center">
            <div className="text-xl font-bold">
                <span>Order Summary</span>
            </div>

            <table className="mt-4 mx-full ">
                <thead>
                    <tr>
                        <th className="text-left font-normal"><span>Shipping Fee</span></th>
                        <td className="text-right font-normal"><span>Free Shipping</span></td>
                    </tr>

                    <tr>
                        <th className="text-left font-normal"><span>Tax</span></th>
                        <td className="text-right font-normal"><span>$5.00</span></td>
                    </tr>


                    <tr>
                        <th className="text-left font-normal"><span>Discount</span></th>
                        <td className="text-right font-normal"><span>$12.50</span></td>
                    </tr>
                </thead>
            </table>

            <table className="mt-24">
                <thead>
                    <tr>
                        <th className="text-left"><span className="text-2xl font-bold">Total</span></th>
                        <td className="text-right"><span className="text-2xl font-bold">${props.totalPrice}</span></td>
                    </tr>
                </thead>
            </table>

            <div className="flex justify-evenly space-x-7 mt-3">
                <button type="button" className="text-white bg-[#635bff] hover:bg-[#8e88fc]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2">
                    <FontAwesomeIcon icon={faStripe} className="text-[1.3rem]" />
                    <span className="font-bold ml-2">Checkout</span>
                </button>

                <button type="button" className="text-gray-900 w-full bg-[#F7BE38] hover:bg-[#ffe14d]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                    <FontAwesomeIcon icon={faPaypal} className="text-[1.3rem] mx-2" />
                    <span className="font-bold ml-2">Checkout</span>
                </button>

            </div>



        </div>


    )
}

export default OrderSum