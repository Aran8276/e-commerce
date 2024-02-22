import React from 'react'
type SelfProps = {
    bg : string,
    dominantBg : string,
    src : string,
    top : string,
    imgStyle?: string,
    btm : string,
    isWhite : boolean,
}


function LongCatgCart(props: SelfProps) {
    return (
        <div className={"text-white rounded-xl w-[45rem] h-[18rem] bg-gradient-to-r " + props.bg + " bg-cover"}>
            <div className="flex">
                <div className="flex flex-col ml-12">
                    <span className="font-light text-xl mt-16">{props.top}</span>
                    <span className="font-bold text-3xl">{props.btm}</span>
                    <a href="" className="mt-24"><button className={"text-" + props.dominantBg + "-500 bg-white px-6 py-2 rounded-full"}>Browse</button></a>
                </div>
                <div className="relative mr-4 scale-[0.64] bottom-5">
                    <img src={props.src} className={props.imgStyle}></img>
                </div>
            </div>
        </div>
    )
}

export default LongCatgCart