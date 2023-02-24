import React from 'react'
import Card from '../../HomeComponents/Card'
import Navbar from '../../HomeComponents/Navbar'
import Searchbar from '../../HomeComponents/Searchbar'
import Sidebar from '../../HomeComponents/Sidebar'
import one from '../../images/one.jpg'
import two from '../../images/two.jpg'
import three from '../../images/five.jpg'
import four from '../../images/four.jpg'
import five from '../../images/five.jpg'
import six from '../../images/six.jpg'
import eth from '../../images/eth.gif'
import eight from '../../images/eight.png'
import Carousel from '../../HomeComponents/Carousel'

const AuctionScreen = () => {
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
            <div className="mt-[1.5rem] ml-[7.5rem]">
                <Card />
            </div>
            <div className='mt-10 ml-[7.5rem]'>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Trending</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ml-[0.2rem]">Top</button>

                <div className='flex w-[86vw] mt-2 mx-auto glass p-5 ml-[-0.25rem]'>
                    <div class="w-[43vw]">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-500 uppercase dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Collection
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Floor Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Volume
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>1</h3>
                                        <img src={one} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Cyber Punk</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>1.07 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>16K ETH</h1>
                                    </td>
                                </tr>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>2</h3>
                                        <img src={two} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Bored Gorilla</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>0.45 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>10K ETH</h1>
                                    </td>
                                </tr>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>3</h3>
                                        <img src={three} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Borde Ape Yatch Club</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>16.9 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>20K ETH</h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="w-[43vw]">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-500 uppercase dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Collection
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Floor Price
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Volume
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>4</h3>
                                        <img src={one} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Cyber Punk</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>1.07 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>16K ETH</h1>
                                    </td>
                                </tr>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>5</h3>
                                        <img src={two} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Bored Gorilla</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>0.45 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>10K ETH</h1>
                                    </td>
                                </tr>
                                <tr class=" dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 flex py-4 font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        <h3 className='text-lg'>6</h3>
                                        <img src={three} className="rounded-md ml-5" height={"40px"} width={"40px"}></img>
                                        <h1 className='text-lg ml-5 text-gray-50 font-bold my-2'>Borde Ape Yatch Club</h1>
                                    </th>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>16.9 ETH</h1>
                                    </td>
                                    <td class="px-6 py-4">
                                        <h1 className='text-md text-gray-50 font-bold my-2'>20K ETH</h1>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1 className='text-2xl font-bold mt-10'>Notable Collections</h1>
                <div className='mt-10 p-5'>
                    <Carousel/>
                </div>
            </div>


        </div>
    )
}

export default AuctionScreen