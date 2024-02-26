import Link from 'next/link'
import React from 'react'

type SelfProps = {
    src: string
    title: string
    price: number
    scale?: string
    scaleAlt?: string
    isDummy?: boolean
    isDiscount?: boolean
    discountPrice?: number
    databaseId?: number
}

function ProductCards(props: SelfProps) {
    return (
        <>
            {props.isDummy ? (
                /*IF True */
                <div className={'text-sm ' + props.scale + ' h-fit '}>
                    <img className={props.scaleAlt} src={props.src}></img>
                    <div className="mt-12">{props.title}</div>
                    {props.isDiscount ? (
                        <div className="flex space-x-4">
                            <div className="mt-2 font-bold line-through">
                                ${props.price}
                            </div>
                            <div className="mt-2 font-bold">
                                ${props.discountPrice}
                            </div>
                        </div>
                    ) : (
                        <div className="mt-2 font-bold">${props.price}</div>
                    )}
                </div>
            ) : (
                /*IF False or undefined */
                <>
                    <Link
                        href={'/shop/product/' + props.databaseId}
                        className={'text-sm ' + props.scale + ' h-fit '}>
                        <img className={props.scaleAlt} src={props.src}></img>
                        <div className="mt-12">{props.title}</div>
                        {props.isDiscount ? (
                            <div>
                                <div className="mt-2 font-bold line-through">
                                    ${props.price}
                                </div>
                                <span className="line-through">
                                    LineThrough
                                </span>
                            </div>
                        ) : (
                            <div className="mt-2 font-bold">${props.price}</div>
                        )}
                    </Link>
                </>
            )}
        </>
    )
}

export default ProductCards
