import React from 'react'
import SocialMedia from './SocialMedia'
import Link from 'next/link'

type SelfProps = {
    currentNav: string,
}

function Footer(props: SelfProps) {
    return (
        <footer className="flex justify-center mt-48">


            <div className="w-screen h-fit bg-[#202124] text-white">

                <div className="flex flex-col space-y-10 mt-12">
                    <div className="mt-6">
                        <SocialMedia />
                    </div>
                    <nav className="flex justify-start space-x-8 self-center text-center">
                        <Link href="/"><span className={props.currentNav == 'home' ? "opacity-100" : "opacity-50 hover:opacity-75"}>Home</span></Link>
                        <Link href="/shop"><span className={props.currentNav == 'shop' ? "opacity-100" : "opacity-50 hover:opacity-75"}>Shop</span></Link>
                        <Link href="/about"><span className={props.currentNav == 'about' ? "opacity-100" : "opacity-50 hover:opacity-75"}>About Us</span></Link>
                        <Link href="/contact"><span className={props.currentNav == 'contact' ? "opacity-100" : "opacity-50 hover:opacity-75"}>Support</span></Link>
                    </nav>
                    <div className="text-center bg-black py-3">
                        <span className="text-center">
                            Copyright © 2024 by some random dude (or is it?)
                        </span>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer