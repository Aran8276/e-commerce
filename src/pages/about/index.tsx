import React from 'react'
import Header from '../components/Header'
import GoogleMapsBtn from '@/components/GoogleMapsBtn'
import Head from 'next/head'
import Footer from '../components/Footer'

function index() {
  return (
    <>
      <Head>
        <title>About - eCom</title>
      </Head>

      <Header currentNav="about" />

      <main className="h-screen bg-[url('https://i0.wp.com/klang.parade.com.my/wp-content/uploads/2023/01/KPM-4F-Gajeto1.jpg?fit=1920%2C1080&ssl=1')] bg-cover">
        <div className="flex justify-center items-center h-screen text-white">
          <div className="bg-black py-8 bg-opacity-70 flex flex-col">
            <span className="font-bold px-12 text-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">ABOUT US</span>
            <span className="mt-4 mx-[20rem]">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
              labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
              animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
              aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
              pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
              commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
              proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
              eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
              culpa duis.
            </span>
            <GoogleMapsBtn style='mt-8 mx-[38rem]' />

          </div>
        </div>
      </main >

      <Footer currentNav="about"/>

    </>)
}

export default index