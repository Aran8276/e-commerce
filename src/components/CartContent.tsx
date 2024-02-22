import React, { useEffect, useState } from 'react'

type SelfProps = {
    price: number,
    quantity: number,
    id: number,
    title: string,
    src: string,

    spec1?: string,
    spec2?: string,
    spec3?: string,

    updateTotalPrice: any,
}


function CartContent(props: SelfProps) {

    const [itemTotal, setItemTotal] = useState(0);
    const [itemPrice] = useState(props.price);
    
    const calculateItemTotal = (event: any, price: number) => {
        props.updateTotalPrice(props.id, (event.target.value * price))
        setItemTotal(event.target.value * price);
    }
    
    useEffect(() => {
        const simulatedEvent = {
            target: {
                value: props.quantity,
            },
        };
        
        calculateItemTotal(simulatedEvent, itemPrice);        
    }, []);
    
    return (
        <div className="flex space-x-8 mb-12">
            <div className="w-[12rem]">
                <img src={props.src} />
            </div>

            <div className="flex justify-evenly space-x-12 ">
                <div className="flex flex-col">
                    <div className="text-xl font-bold w-[13.5rem]">
                        <span>{props.title}</span>
                    </div>
                    <div className="flex-col opacity-50">
                        <div><span>{props.spec1}</span></div>
                        <div><span>{props.spec2}</span></div>
                        <div><span>{props.spec3}</span></div>
                    </div>
                </div>

                <div>
                    <div className="font-bold text-xl w-[4rem] text-left">
                        <span>Price</span>
                    </div>
                    <div className="w-[7rem]">
                        <span>${new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 }).format(itemPrice)}</span>
                    </div>
                </div>

                <div className=" text-xl text-left w-[7rem]">
                    <div className="font-bold">
                        <span>Quantity</span>
                    </div>
                    <div className="relative left-6">
                        <input defaultValue={props.quantity} min={1} max={50} onChange={(event) => calculateItemTotal(event, itemPrice)} type="number" className="border-none w-16 rounded-lg text-xs scale-[1.25]" />                    
                    </div>
                </div>
                <div className="">
                    <div className="text-xl text-left font-bold w-[7.25rem]">
                        <span>Subtotal</span>
                    </div>
                    <div className="text-base">
                        <span>${new Intl.NumberFormat('en-us', { minimumFractionDigits: 2 }).format(itemTotal)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartContent