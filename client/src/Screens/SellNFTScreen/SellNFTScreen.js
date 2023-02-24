import React from 'react'
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
import nine from '../../images/nine.png'

const SellNFTScreen = () => {
    return (
        <div>
            <div className="fixed mt-[5rem]">
                <Sidebar />
            </div>
            <div className='flex'>
                <div className='mt-5 ml-[7rem] w-[30rem]'>
                    <Searchbar />
                </div>
                <div className='fixed top-1 right-[1.5rem]'>
                    <Navbar />
                </div>
            </div>
            <div className='flex'>
                <div className='my-10 ml-[10rem] w-[35rem]'>
                    <h1 className='text-3xl font-bold my-7'>List For Sale</h1>
                    <h1 className='text-xl font-bold mt-7 my-2'>Choose a type of sale</h1>
                    <div class="flex w-[26.5rem] mt-5 items-center pl-4 border border-gray-500 rounded-lg dark:border-gray-700">
                        <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-1" class="w-full ml-3 text-sm font-medium text-gray-200">
                            <h1 className='text-xl font-bold mt-2'>Fixed price</h1>
                            <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">The item is listed at the price you set.</p>
                        </label>
                    </div>
                    <div class="flex w-[26.5rem] mt-5 items-center pl-4 border border-gray-500 rounded-lg dark:border-gray-700">
                        <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="bordered-radio-2" class="w-full ml-3 text-sm font-medium text-gray-200"><h1 className='text-xl font-bold my-2'>Timed auction</h1>
                            <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">The item is listed for auction.</p></label>
                    </div>


                    <h1 className='text-xl font-bold mt-7 my-2'>Set a price</h1>
                    <div class="flex">
                        <div class="relative w-half">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-half z-20 text-sm text-white-900 rounded-l-lg bg-black border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                        </div>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white-900 border border-gray-300 rounded-r-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button" ><img src={eth} className="h-5 w-5 mr-2"></img>Ethereum </button>
                    </div>

                    <h1 className='text-xl font-bold mt-7 mb-2'>Set Duration</h1>
                    <input type="email" id="email" aria-describedby="helper-text-explanation" class="border bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[26.5rem] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />

                    <div date-rangepicker class="flex items-center mt-3">
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>  
                            <input name="start" type="text" class="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div>
                        <span class="mx-4 text-gray-500">to</span>
                        <div class="relative"> 
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input name="end" type="text" class="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                        </div>
                    </div>


                    <h1 className='text-2xl font-bold mt-7'>Summary</h1>
                    <div class="flex justify-between">
                    <h3 class="mt-4 text-l text-white-900 font-semibold">NFT Name</h3>
                    <h3 class=" flex mt-4 text-l text-white-900 font-semibold w-[4rem] "><img src={eth} className="h-5 w-5 mr-2"></img>ETH</h3>
                    </div>
                    <div class="flex justify-between">
                    <h3 class="mt-4 text-l text-white-900 font-semibold">Service Fee</h3>
                    <h3 class=" flex mt-4 text-l text-white-900 font-semibold w-[4rem] "><img src={eth} className="h-5 w-5 mr-2"></img>ETH</h3>
                    </div>
                </div>
                <div className='border glass p-5 fixed left-[50rem] top-[10rem]'>
                    <img src={one} height={"500px"} width={"350px"}></img>
                    <h3 class="mt-4 text-sm text-gray-500 font-semibold">NFT Name</h3>
                    <h3 class="mt-1 text-sm text-gray-500 font-semibold">Collection Name</h3>
                    <p class="mt-3 text-lg font-medium text-gray-500 flex"><p className="ml-2">48</p></p>
                </div>
            </div>
        </div>
    )
}

export default SellNFTScreen