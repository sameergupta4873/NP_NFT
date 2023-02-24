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

                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                </li>
                                <li>
                                    <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <h1 className='text-xl font-bold mt-7'>External Link</h1>
                    <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">NP will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
                    <input type="email" id="email" aria-describedby="helper-text-explanation" class="border bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[26.5rem] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://yoursite.com" />

                    <h1 className='text-xl font-bold mt-7'>Description</h1>
                    <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <h1 className='text-xl font-bold mt-7'>Blockchain</h1>
                    <select disabled class="bg-black border mt-2 border-gray-300 text-sm rounded-lg block w-[26.5rem] p-2.5 text-white">
                        <option selected>Ethereum</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <button type="button" class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
                </div>
                <div className='border glass p-5 fixed left-[50rem] top-[10rem]'>
                    <img src={one} height={"500px"} width={"350px"}></img>
                    <h3 class="mt-4 text-sm text-gray-500 font-semibold">NFT Name</h3>
                    <h3 class="mt-1 text-sm text-gray-500 font-semibold">Collection Name</h3>
                    <p class="mt-3 text-lg font-medium text-gray-500 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-2">48</p></p>
                </div>
            </div>
        </div>
    )
}

export default SellNFTScreen