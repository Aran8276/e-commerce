import React, { useEffect, useImperativeHandle, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faBagShopping,
    faTruck,
    faAward,
    faHeadphones,
    faWallet,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'
import { useAuth } from '@/hooks/auth'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'

type SelfProps = {
    currentNav: string
    auth?: string
}

function Header(props: SelfProps) {
    const user = useUser()
    const [isRegisteredUpdater, setRegistUpdater] = useState(true)
    const [userName, setUserName] = useState('')
    const supabase = createPagesBrowserClient()
    const signOut = () => {
        supabase.auth.signOut()
    }

    useEffect(() => {
        if (user) {
            setRegistUpdater(true)
            user.user_metadata.display_name
                ? setUserName(user.user_metadata.display_name)
                : setUserName('anon')
        } else {
            setRegistUpdater(false)
        }
    }, [user])

    return (
        <header className="flex justify-between sticky top-0 z-10 bg-white">
            {/* <div className='flex flex-col'>
                <h1>Your Name Is: {user ? user.name : 'False' }</h1>
                <h1>Are you an admin?: {user ? user.isAdmin ? "True" : 'False But Logged In' : 'False' }</h1>
            </div> */
            /* This is a debugger */}

            <div className="flex space-x-6 justify-items-center">
                <Link href="/">
                    <ApplicationLogo className="w-[128px] h-[64px] scale-[0.70]" />
                </Link>
                <nav className="flex justify-start space-x-8 self-center text-center">
                    <Link href="/">
                        <span
                            className={
                                props.currentNav == 'home'
                                    ? 'opacity-100'
                                    : 'opacity-50 hover:opacity-75'
                            }>
                            Home
                        </span>
                    </Link>
                    <Link href="/shop">
                        <span
                            className={
                                props.currentNav == 'shop'
                                    ? 'opacity-100'
                                    : 'opacity-50 hover:opacity-75'
                            }>
                            Shop
                        </span>
                    </Link>
                    <Link href="/about">
                        <span
                            className={
                                props.currentNav == 'about'
                                    ? 'opacity-100'
                                    : 'opacity-50 hover:opacity-75'
                            }>
                            About Us
                        </span>
                    </Link>
                    <Link href="/contact">
                        <span
                            className={
                                props.currentNav == 'contact'
                                    ? 'opacity-100'
                                    : 'opacity-50 hover:opacity-75'
                            }>
                            Support
                        </span>
                    </Link>

                    {user ? (
                        <Link href="/admin">
                            <span
                                className={
                                    props.currentNav == 'admin'
                                        ? 'opacity-100'
                                        : 'opacity-50 hover:opacity-75'
                                }>
                                Admin
                            </span>
                        </Link>
                    ) : (
                        <></>
                    )}
                </nav>
            </div>
            <div className="flex self-center mr-12 space-x-8">
                <div>
                    <form className="self-center space-x-4">
                        <input
                            placeholder="Search"
                            className="text-sm border-[1px] rounded-full px-4 py-1 h-[2.14rem] w-[12rem] border-gray-700"
                        />
                        <a href="">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>
                    </form>
                </div>

                {isRegisteredUpdater ? (
                    <div className="self-center">
                        <span>{userName}</span>
                    </div>
                ) : (
                    <></>
                )}

                {user ? (
                    <div className="self-center">
                        <button onClick={signOut}>
                            <span className="">Logout</span>
                        </button>
                    </div>
                ) : (
                    <div className="self-center">
                        <Link href="/login">
                            <span className="">Login</span>
                        </Link>
                    </div>
                )}

                <div className="self-center">
                    <Link href="/shop/cart">
                        <FontAwesomeIcon icon={faBagShopping} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
