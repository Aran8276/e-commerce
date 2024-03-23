import React from 'react'

type SelfProps = {
    discount: string
    prodTitleTop: string
    prodTitleBtm: string
    src: string
    prodName: string
    prodDesc: string
    bg: string
    dominantBg: string
    imgPos?: string
    textPos?: string
    customStyle?: string
    isNotSummerSale?: boolean
    customImgStyle?: string
}

function PromotionDeal(props: SelfProps) {
    return (
        <div className={props.customStyle ? props.customStyle : ' mt-32 '}>
            <div
                className={
                    'flex text-white ' +
                    props.bg +
                    ' h-[24rem] justify-center rounded-2xl'
                }>
                <div className="flex justify-between">
                    <div
                        className={'flex flex-col self-center ' + props.imgPos}>
                        <span className="text-xl">{props.discount}</span>
                        <span className="text-8xl font-extrabold">
                            {props.prodTitleTop}
                        </span>
                        <span className="text-8xl font-extrabold">
                            {props.prodTitleBtm}
                        </span>
                    </div>

                    <img className={props.customImgStyle} src={props.src} />

                    <div
                        className={
                            'flex flex-col self-center w-[23rem] ' +
                            props.textPos
                        }>
                        <span>{props.prodName}</span>
                        <span
                            className={
                                props.isNotSummerSale
                                    ? 'hidden'
                                    : 'mt-2 font-bold text-3xl'
                            }>
                            Summer Sale
                        </span>
                        <span className="mt-2">{props.prodDesc}</span>
                        <span className="mt-12">
                            <a
                                href=""
                                className={
                                    'bg-white text-' +
                                    props.dominantBg +
                                    '-500 rounded-full px-12 py-2'
                                }>
                                Shop
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotionDeal

{
    /**
        <div className="mt-32">
            <div className="flex text-white h-[24rem] justify-center rounded-2xl">
                <div className="flex justify-between">
                    <div className="flex flex-col self-center">
                        <span className="text-xl">{props.discount}</span>
                        <span className="text-8xl font-extrabold">MULTI</span>
                        <span className="text-8xl font-extrabold">METER</span>
                    </div>
                    <img src="https://dam-assets.fluke.com/s3fs-public/F-179_01e-350x500.png" />

                    <div className="flex flex-col self-center w-[28rem]">
                        <span>Fluke 179 Multimeter</span>
                        <span className='mt-2 font-bold text-3xl'>Summer Sale</span>
                        <span className='mt-2'>The entry level & general purpose multimeter, best for beginner electricians or even professionals.</span>
                        <span className="mt-12"><a href="" className="bg-white text-red-500 rounded-full px-12 py-2">Shop</a></span>
                    </div>
                </div>
            </div>
        </div>
     */
}
