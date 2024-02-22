import React from 'react'
type SelfProps = {
    src: string,
    bg: string,
    isWhite: boolean,
    imgStyle?: string,
    divStyle?: boolean,
    marginTop?: string,
    top: string,
    btm: string,
    btnTxt?: string,
}

function ShortCatgCart(props: SelfProps) {
    return (
        <div className={('text-white ') + " rounded-xl w-[16rem] h-[18rem] bg-" + props.bg + "-500 bg-cover"}>
            <div className="flex">
                <div className="flex flex-col ml-8">
                    <span className={"font-light text-xl mt-" + (props.marginTop ? props.marginTop : "16")}>{props.top}</span>
                    <span className="font-bold text-3xl">{props.btm}</span>
                    <a href="" className="mt-24"><button className={ (props.isWhite ? ' bg-white ' + " text-" + props.bg + "-500 " + "text-" + props.btnTxt + "-500" : ' bg-red-500 ' ) + "-500 px-6 py-2 rounded-full"}>Browse</button></a>
                </div>
                <div className={props.divStyle ? "mt-12 relative scale-[1.75] top-[9rem] right-20" : "mt-12 relative right-3"}>
                    <img src={props.src} className={props.imgStyle}/>
                </div>
            </div>
        </div>)
}

export default ShortCatgCart