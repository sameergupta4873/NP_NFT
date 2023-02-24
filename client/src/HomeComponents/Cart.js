import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/five.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'
import six from '../images/six.jpg'
import eth from '../images/eth.gif'
import eight from '../images/eight.png'
import blackEth from '../images/blackEth.gif'

function Cart() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                {/* <div className="flex items-center justify-center py-8">
                    <button onClick={() => setShow(!show)} className="py-2 px-10 rounded bg-indigo-600 hover:bg-indigo-700 text-white">
                        Open Modal
                    </button>
                </div> */}

                <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                    <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                        <div className="flex justify-end" id="cart">
                            <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-gray-50 overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                <a href="?" className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                    <p className="text-sm pl-2 leading-none">Back</p>
                                </a>
                                <p className="text-3xl font-black leading-10 text-gray-800 pt-3">Cart</p>
                                <div className="md:flex items-center mt-5 py-8 border-t border-gray-200">
                                    <div className="w-1/4">
                                        <img src={one} alt className="w-full h-full object-center object-cover rounded-lg" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">North wolf bag</p>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex itemms-center">
                                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                            </div>
                                            <p className="flex text-base font-black leading-none text-gray-800"><img src={blackEth} className={"w-10 border-2 rounded-3xl border-blue-600 h-10 object-cover object-center"}></img><span className="mt-2 ml-2">9,000</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex items-center py-8 border-t border-gray-200">
                                    <div className="w-1/4">
                                        <img src={three} alt className="w-full h-full object-center object-cover" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4 w-full">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">Luxe Signature Ring</p>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex itemms-center">
                                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                            </div>
                                            <p className="flex text-base font-black leading-none text-gray-800"><img src={blackEth} className={"w-10 border-2 rounded-3xl border-blue-600 h-10 object-cover object-center"}></img><span className="mt-2 ml-2">9,000</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex items-center py-8 border-t border-b border-gray-200">
                                    <div className="h-full w-1/4">
                                        <img src={two} alt className="w-full h-full object-center object-cover rounded-lg" />
                                    </div>
                                    <div className="md:pl-3 md:w-3/4 w-full">
                                        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                        <div className="flex items-center justify-between w-full pt-1">
                                            <p className="text-base font-black leading-none text-gray-800">Luxe Signature Shoes</p>
                                        </div>
                                        <p className="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
                                        <p className="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                        <div className="flex items-center justify-between pt-5 pr-6">
                                            <div className="flex itemms-center">
                                                <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                            </div>
                                            <p className="flex text-base font-black leading-none text-gray-800"><img src={blackEth} className={"w-10 border-2 rounded-3xl border-blue-600 h-10 object-cover object-center"}></img><span className="mt-2 ml-2">9,000</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-5">
                                    <a
                                        href="/checkout"
                                        type="button"
                                        class="bg-blue-600 px-10 py-3 rounded mx-auto"
                                        >
                                        CHECKOUT
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );
}

export default Cart;
