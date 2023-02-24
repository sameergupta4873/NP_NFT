import React from 'react'
import Card from '../../../HomeComponents/Card'
import Carousel from '../../../HomeComponents/Carousel'
import FeaturedNFT from '../../../HomeComponents/FeaturedNFT'
import Navbar from '../../../HomeComponents/Navbar'
import Searchbar from '../../../HomeComponents/Searchbar'
import Sidebar from '../../../HomeComponents/Sidebar'
import TopBid from '../../../HomeComponents/TopBid'
import one from '../../../images/one.jpg'

const NFTDetail = () => {
    return (
        <div>
            <div className="fixed mt-[5rem]">
                <Sidebar />
            </div>
            <div className='flex justify-between'>
                <div className='mt-5 ml-[7rem] w-[30rem]'>
                    <Searchbar />
                </div>
                <div className='mt-3 ml-6 mr-10 '>
                    <Navbar />
                </div>
            </div>

            <div class="mt-[-4rem] ml-[0rem]">
                <div class="rounded-lg">
                    <div class="bg-transparent">
                        <section class="text-gray-700 w-full body-font bg-transparent">
                            <div class="container py-24 mx-auto">
                                <div className='glass p-10'>
                                    <div class="w-[83vw] mx-auto flex flex-wrap">
                                        <div>
                                            <img alt="ecommerce" class="h-[27rem] w-full rounded border border-gray-200" src={one} />
                                            <div class="border border-white rounded-xl rounded-b-none mt-10 flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white mt-3 mb-3 ml-3">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                </svg>
                                                <p class="mt-3 mb-3 ml-3 text-white text-xl">Description</p>
                                            </div>
                                            <div class="border border-white rounded-xl rounded-t-none">
                                                <div class="flex justify-between mt-3 mb-1 ml-2 mr-2 text-white">
                                                    <p>Contact Address</p>
                                                    <p>0x6321...5e0b</p>
                                                </div>
                                                <div class="flex justify-between mt-3 mb-1 ml-2 mr-2 text-white">
                                                    <p>Token Id</p>
                                                    <p>2090</p>
                                                </div>
                                                <div class="flex justify-between mt-3 mb-1 ml-2 mr-2 text-white">
                                                    <p>Token Standard</p>
                                                    <p>ERC-721</p>
                                                </div>
                                                <div class="flex justify-between mt-3 mb-1 ml-2 mr-2 text-white">
                                                    <p>Chain</p>
                                                    <p>Ethereum</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                            <h2 class="text-m title-font text-blue-400 tracking-widest mb-6">Collection Name</h2>
                                            <h1 class="text-gray-200 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                                            <h2 class="text-m title-font text-blue-400 tracking-widest mb-6">Owner Name</h2>
                                            <div class="flex mb-2">
                                                <span class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <p class="ml-2 mr-2 text-blue-400">81</p>

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                                    </svg>
                                                    <p class="ml-2 mr-2 text-blue-400">1 favorite</p>
                                                </span>

                                            </div>
                                            <div class="mt-5 ">
                                                <div class="w-full h-10 mb-4 flex border border-gray-500 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mt-2 text-white ml-2">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                    <p class="text-blue-400 mt-2 ml-2">Sale ends on 3rd March 2003</p>
                                                </div>
                                                <div class="border border-gray-500 rounded-lg w-full h-25">
                                                    <div>
                                                        <h3 class="ml-2 mt-6">Current price</h3>
                                                        <div class="flex">
                                                            <h1 class="text-2xl ml-2 text-white bold">0.15 ETH</h1>
                                                            <h3 class="mt-2 ml-2">$243.45</h3>

                                                        </div>
                                                        <div class="flex justify-between">
                                                            <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2 mt-3 mb-3">Create</button>
                                                            <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-2 mt-3 mb-3 flex mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                            </svg>
                                                                Make Offer</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="mt-10 flex border border-white rounded-xl rounded-b-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white mt-2 ml-2 mb-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                        </svg>
                                        <h1 class="ml-2 mt-2 mb-2 text-white text-xl">Item Activity</h1>
                                    </div>
                                    <div class="border border-white rounded rounded-t-none">
                                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg rounded-t-none">
                                            <table class="w-full text-left text-blue-100 dark:text-blue-100 ">
                                                <thead class="text-xl text-white dark:text-white border border-white">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">
                                                            Event
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Price
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            From
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            To
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Event
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class=" border-b border-white">
                                                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                            </svg>

                                                            List
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            0.1553 ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            UserName
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                    </tr>
                                                    <tr class="border-b border-white">
                                                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                                            </svg>

                                                            Offer
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            ... ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            USerName
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                    </tr>
                                                    <tr class=" border-b border-white">
                                                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                                            </svg>

                                                            List
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            .. ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            UserName
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                    </tr>
                                                    <tr class=" border-b border-white">
                                                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                                            </svg>

                                                            Transfer
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            ... ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            UserName
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            ... ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                    </tr>
                                                    <tr class=" border-white">
                                                        <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>

                                                            Sale
                                                        </th>
                                                        <td class="px-6 py-4">
                                                            ... ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            UserName
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            ... ETH
                                                        </td>
                                                        <td class="px-6 py-4">
                                                            -
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
                <h1 className='text-2xl font-bold ml-[7.5rem]'>Notable Collections</h1>
                <div className='mt-10 p-5 ml-[7.5rem]'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default NFTDetail