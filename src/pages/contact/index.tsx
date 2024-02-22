import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Footer from '../components/Footer'
import { faMoneyCheckDollar, faCommentDots, faEnvelope, faHeadphones } from '@fortawesome/free-solid-svg-icons'
import ContactCards from '@/components/ContactCards'

function index() {
    return (
        <>

            <Head>
                <title>Support - eCom</title>
            </Head>

            <Header currentNav="contact" />


            <main>
                <div className="flex w-screen h-screen justify-center">
                    <div className="flex flex-col">
                        <div className="mt-24 text-center">
                            <span className="text-3xl">How can we help you?</span>
                        </div>
                        <div className='grid grid-cols-2 gap-6 mt-8'>
                            <div>
                                <ContactCards icon={faMoneyCheckDollar} text="Transaction Issue" />
                            </div>
                            <div>
                                <ContactCards icon={faCommentDots} text="Give Feedback" />
                            </div>
                            <div>
                                <ContactCards icon={faEnvelope} text="Email Us" />
                            </div>
                            <div>
                                <ContactCards icon={faHeadphones} text="Live Chat 24/7" />
                            </div>




                        </div>
                    </div>
                </div>
            </main>



            <Footer currentNav="contact"/>
        </>
    )
}

export default index