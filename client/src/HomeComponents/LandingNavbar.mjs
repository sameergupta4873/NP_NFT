import React from 'react'
import one from '../images/one.jpg'
import eth from '../images/eth.gif'
import { Amplify, Auth, Hub } from 'aws-amplify';

const LandingNavbar = () => {
  return (

    <nav class=" px-2 bg-black sm:px-4 py-4 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a class="flex items-center">
        <img src={eth} className="h-7 w-5 mr-3"></img>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NP_NFT</span>
        </a>
        <div class="flex md:order-2">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-1.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-28 text-xl" onClick={() => Auth.federatedSignIn()}>Sign-in</button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default LandingNavbar