import React from 'react'
import Navbar from '../../HomeComponents/Navbar'
import Searchbar from '../../HomeComponents/Searchbar'
import Sidebar from '../../HomeComponents/Sidebar'
import eth from '../../images/eth.gif'

const CreateNFTScreen = () => {
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
            <div className='my-10 mx-auto w-[45rem]'>
                <h1 className='text-3xl font-bold my-7'>Create New NFT</h1>
                <h1 className='text-xl font-bold my-2'>Image, Video, Audio, or 3D Model</h1>
                <h1 className='text-sm font-bold my-2 text-gray-500'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</h1>
                <div class="flex items-center justify-center p-5 w-full h-48 rounded border-2 border-dashed sm:w-96 hover:bg-gray-500">
                    <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>

                <h1 className='text-xl font-bold mt-7 my-2'>Name</h1>
                <input type="email" id="email" aria-describedby="helper-text-explanation" class="border bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[26.5rem] p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Item name" />

                <h1 className='text-xl font-bold mt-7 my-2'>Set a price</h1>
                    <div class="flex">
                        <div class="relative w-half">
                            <input type="search" id="search-dropdown" class="block p-2.5 w-half z-20 text-sm text-white-900 rounded-l-lg bg-black border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" required />
                        </div>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white-900 border border-gray-300 rounded-r-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button" ><img src={eth} className="h-5 w-5 mr-2"></img>Ethereum </button>
                    </div>

                <h1 className='text-xl font-bold mt-7'>Description</h1>
                <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                <h1 className='text-xl font-bold mt-7'>Collection</h1>
                <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">This is the collection where your item will appear.</p>
                <select class="bg-black border border-gray-300 text-sm rounded-lg block w-[26.5rem] p-2.5 text-white">
                    <option selected>Choose a collection</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
                

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

        </div>
    )
}

export default CreateNFTScreen