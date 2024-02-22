import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping, faTruck, faAward, faHeadphones, faWallet } from '@fortawesome/free-solid-svg-icons'

function FacilitySection() {
    return (
        <div className="mt-6">
            <div className="flex p-4 justify-evenly space-x-3">
                <div className="flex space-x-4 w-[24rem] justify-center">
                    <FontAwesomeIcon icon={faTruck} className="text-[2.5rem] text-red-600" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Free Shipping</span>
                        <span className="text-base opacity-50">Worldwide Free Shipping Delivery</span>
                    </div>
                </div>
                <div className="flex space-x-4 w-[24rem] justify-center">
                    <FontAwesomeIcon icon={faAward} className="text-[2.5rem] text-red-600" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Money Guarantee</span>
                        <span className="text-base opacity-50">We offer a refunds with no questions asked</span>
                    </div>
                </div>
                <div className="flex space-x-4 w-[24rem] justify-center">
                    <FontAwesomeIcon icon={faHeadphones} className="text-[2.5rem] text-red-600" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Support 24/7</span>
                        <span className="text-base opacity-50">Our live chat support are active no matter it's in the midnight or in the morning</span>
                    </div>
                </div>
                <div className="flex space-x-4 w-[24rem] justify-center">
                    <FontAwesomeIcon icon={faWallet} className="text-[2.5rem] text-red-600" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Secure Payment</span>
                        <span className="text-base opacity-50">We will make sure that your transactions are safe and secure in our hands</span>
                    </div>
                </div>
            </div>
        </div>)
}

export default FacilitySection