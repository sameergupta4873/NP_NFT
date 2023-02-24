import React, { useEffect } from "react";
import Sidebar from "../../HomeComponents/Sidebar";
import one from '../../images/one.jpg'
import two from '../../images/two.jpg'
import three from '../../images/five.jpg'
import four from '../../images/four.jpg'
import five from '../../images/five.jpg'
import six from '../../images/six.jpg'
import eth from '../../images/eth.gif'
import eight from '../../images/eight.png'
import nine from '../../images/nine.png'
import Searchbar from "../../HomeComponents/Searchbar";
import Card from "../../HomeComponents/Card";
import TopBid from "../../HomeComponents/TopBid";
import Navbar from "../../HomeComponents/Navbar";

const YourNFTScreen = () => {
    return (
        <div>
            <div className="fixed mt-[5rem]">
                <Sidebar />
            </div>
            <div className='flex'>
                <div className='mt-5 ml-[7rem] w-[30rem]'>
                    <Searchbar />
                </div>
                <div className='top-1 right-[1.5rem]'>
                    <Navbar />
                </div>
            </div>
            <div className='my-10 mx-auto w-[70rem]'>
                <h1 className='text-3xl font-bold my-7'>My Collections</h1>
                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={four} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>
                            </div>
                        </a>
                    </div>

                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={one} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>

                            </div>
                        </a>
                    </div>

                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={two} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>

                            </div>
                        </a>
                    </div>

                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={three} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>

                            </div>
                        </a>
                    </div>

                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={eight} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>

                            </div>
                        </a>
                    </div>


                    <div className="">
                        <a href="/detail" class="">
                            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <img src={six} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div className="flex justify-between mt-3 px-1">
                                <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                                <button type="button" class="text-white mt-2  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SELL</button>

                            </div>
                        </a>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default YourNFTScreen