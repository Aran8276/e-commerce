import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import PromotionDeal from '../components/PromotionDeal'
import Footer from '../components/Footer'
import BrandCheckboxLists from '@/components/BrandCheckboxLists'
import CategoryList from '@/components/CategoryList'
import ProductCards from '../components/ProductCards'
import ProductListIndexTest from '@/components/ProductListIndexTest'
import axios from 'axios'

function index() {
  const [JsonIndex, setJsonIndex] = useState([]);
  const [value, setValue] = useState(50);
  const baseURL = 'http://localhost:8000/api/index';

  const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      setJsonIndex(response.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {

    fetchData(baseURL);
    console.log(JsonIndex);

    // console.log(responseData);


  }, []);



  return (
    <>
      <Header currentNav="shop" />

      <Head>
        <title>Shop - eCom</title>
      </Head>

      <main className="mx-12 overflow-x-hidden">
        <div className="flex justify-start">
          <div className='flex flex-col'>
            <PromotionDeal discount="" imgPos=' relative left-12 ' textPos='relative right-[17rem] top-[7.25rem]' customStyle=" ml-12 mt-12 " dominantBg=" text-red-500 " bg="bg-gradient-to-r from-red-500 to-orange-500" src="https://clan.akamai.steamstatic.com/images//39049601/e54b85b6e75bc7ec589372474ef1705b3471bb66.png" prodTitleTop="STEAM" prodTitleBtm="DECK" isNotSummerSale={true} prodName="" prodDesc="" />
            <div className="flex mt-12 ml-12 overflow-hidden">
              <div className="flex flex-col w-[18rem]  ">
                <div>
                  <div className="flex flex-col justify-start">
                    <span className="font-bold text-2xl">Shop by Category</span>
                    <div className="flex flex-col space-y-2">
                      <CategoryList />
                    </div>

                    <div className="flex relative mt-12 flex-col">
                      <span className="font-bold text-2xl mt-12">Price</span>
                      <div className="flex flex-col mt-3 rounded-lg">
                        <span className="">Max: ${value}</span>
                        <input type="range" list='markers' className="w-52 mt-4 accent-indigo-600 h-[1px]" min={0} max={800} value={value} onChange={(e) => setValue(Number(e.target.value))} />
                        <div className="w-52 mt-2 flex justify-between">
                          <span className="text-sm text-gray-600">$0</span>
                          <span className="text-sm text-gray-600">$800</span>
                        </div>

                        <datalist id="markers">
                          <option value={50}></option>
                          <option value={250}></option>
                          <option value={400}></option>
                          <option value={600}></option>
                          <option value={1000}></option>
                        </datalist>
                      </div>
                    </div>

                    <div className="flex relative mt-12 flex-col">
                      <span className="font-bold text-2xl mt-12">Brands</span>
                      <div className="flex flex-col mt-3">
                        <BrandCheckboxLists />
                      </div>
                      <div className="mt-4">
                        <a href="" className="text-center justify-center bg-[#0071e3] text-white px-3 py-1 rounded-md">Apply Filters</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-center flex-col">
                  <div className="flex flex-col text-center">
                    <span className="font-bold text-3xl">Catalogue</span>
                  </div>
                  <div className="grid grid-cols-5 gap-y-16 gap-x-6 mt-12"> {/*Main Product Lists*/}






                    { JsonIndex? 
                    JsonIndex.map((item:any, index:number) => {
                      return (
                        <ProductCards key={index} databaseId={item.id} src={item.image_value} title={item.name} /** linkSrc={} */ price={item.price} />
                      )
                    })
                    
                    
                    
                    
                    : <div>Loading</div>
                    
                    
                    }














                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer currentNav="shop" />
    </>
  )
}

export default index

