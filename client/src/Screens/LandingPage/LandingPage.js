import React, { useState } from 'react'
import LandingNavbar from '../../HomeComponents/LandingNavbar.mjs'
import axios from 'axios'
import { Amplify, Auth, Hub } from 'aws-amplify';

const LandingPage = () => {
    const [image, setImage] = useState(null);
    const [fileImg, setFileImg] = useState(null);

    const sendFileToIPFS = async (e) => {

        if (fileImg) {
            console.log(fileImg);
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `00095538e20c1dd853b4`,
                        'pinata_secret_api_key': `19e0a8f9429a8c6ffdc278847ecd936e01b630c8ae4adbaa6eb77cad02179bf5`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                const ImgHash = `${resFile.data.IpfsHash}`;
                console.log(ImgHash);
                //Take a look at your Pinata Pinned section, you will see a new file added to you list.     
                    const metadata = {
                        image: `https://gateway.pinata.cloud/ipfs/${ImgHash}`,
                        name: fileImg.name,
                        description: "some Description",
                        owner: "sameer"
                    }
                    const pinataJSONBody = {
                        pinataContent: metadata
                    };
                    const jsonResponse = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", pinataJSONBody, {
                        headers: {
                            "Content-Type": `application/json`,
                            pinata_api_key: "00095538e20c1dd853b4",
                            pinata_secret_api_key:`19e0a8f9429a8c6ffdc278847ecd936e01b630c8ae4adbaa6eb77cad02179bf5` ,
                        },
                    });
                    const { data: jsonData = {} } = jsonResponse;
                    const { IpfsHash } = jsonData;
                    const tokenURI = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;
                    console.log(tokenURI);



            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }



    return (
        <div>
            <LandingNavbar />
            <div className='w-screen h-screen hero pt-36'>
                <div className='flex'>
                    <div className=''>
                        <div className='ml-20'>
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">The NFT</h1>
                            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">Trading Platform</h1>
                            <p class="mb-6 text-lg font-normal text-gray-300">Here at NP_NFT, you get a chance to create, buy & sell NFT effortlessly</p>
                            <a href="/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg w-[13rem]">
                                Start Trading Now
                            </a>
                        </div>
                        <div className='w-3/4 ml-20 flex mt-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="none" viewBox="0 0 48 48"><path fill="#000" fill-rule="evenodd" d="M2.50896 2.0106C2.56128 1.99409 2.61714 1.99711 2.66661 2.01798L17.7573 7.64911H30.2426L45.3153 2.01775C45.3645 1.99712 45.4201 1.99416 45.4721 2.01052C45.542 2.03246 45.5971 2.08654 45.6203 2.15595L47.9882 9.22212C48.001 9.26054 48.0035 9.3017 47.9952 9.34137L46.44 16.8064L47.3125 17.4649C47.3696 17.508 47.4032 17.5753 47.4034 17.6468C47.4036 17.7183 47.3703 17.7858 47.3134 17.8291L46.0584 18.7861L46.9791 19.4989C47.0325 19.5402 47.0649 19.6029 47.0676 19.6704C47.0703 19.7378 47.0431 19.803 46.9933 19.8484L45.7097 21.0197L46.4134 21.5263C46.4654 21.5637 46.4993 21.6212 46.5069 21.6848C46.5144 21.7484 46.495 21.8122 46.4533 21.8608L44.3741 24.2804L47.613 34.2548C47.6223 34.2799 47.627 34.3065 47.6271 34.3332C47.6271 34.3419 47.6266 34.3507 47.6256 34.3594C47.6239 34.3751 47.6205 34.3906 47.6156 34.4056L44.5787 44.7085C44.5435 44.8281 44.419 44.8974 44.2989 44.8643L33.8419 41.9872L31.8821 43.5907C31.8773 43.5946 31.8724 43.5983 31.8674 43.6018L27.6911 46.4916C27.6529 46.5181 27.6075 46.5323 27.561 46.5323H20.4203C20.3736 46.5323 20.3281 46.518 20.2898 46.4914L16.1322 43.6015C16.1273 43.5981 16.1225 43.5945 16.1179 43.5907L14.1581 41.9872L3.70106 44.8643C3.58076 44.8974 3.45615 44.8279 3.42107 44.7082L0.403037 34.4059C0.39536 34.3827 0.391456 34.3583 0.39148 34.3339C0.391454 34.3073 0.396052 34.281 0.405063 34.256L3.60766 24.2801L1.54611 21.86C1.5047 21.8114 1.48552 21.7477 1.4932 21.6843C1.50088 21.6209 1.53473 21.5636 1.58656 21.5263L2.29025 21.0197L1.00672 19.8484C0.957106 19.8032 0.929915 19.7384 0.932365 19.6713C0.934815 19.6041 0.966659 19.5415 1.01944 19.5L1.92485 18.7875L0.667951 17.8291C0.610805 17.7856 0.577478 17.7176 0.577978 17.6458C0.578478 17.5739 0.612745 17.5065 0.670492 17.4637L1.55973 16.805L0.0048045 9.34137C-0.00342225 9.30188 -0.00105275 9.26092 0.0116724 9.22264L2.36085 2.15646C2.38397 2.0869 2.43906 2.03266 2.50896 2.0106ZM20.6027 38.8699L20.2396 39.0472L19.8203 42.7542C19.8095 42.8499 19.8597 42.942 19.9459 42.9847C20.0321 43.0275 20.1359 43.0116 20.2054 42.9451L20.5679 42.5983H27.4188L27.8202 42.9515C27.8914 43.0142 27.9939 43.0264 28.0778 42.9821C28.1617 42.9379 28.2096 42.8464 28.1981 42.7522L27.7456 39.0486L27.379 38.8701C27.3649 38.8642 27.3513 38.8568 27.3383 38.8478L26.5016 38.2727H21.4796L20.643 38.8478C20.6301 38.8567 20.6166 38.864 20.6027 38.8699ZM32.444 30.0928L29.4792 28.7437L28.2487 31.3232L32.444 30.0928ZM15.5737 30.0931L18.5384 28.7442L19.754 31.3235L15.5737 30.0931Z" clip-rule="evenodd" /></svg>
                            <svg className='h-20 w-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M65.7 96.4V128l39.2-55.1zM103.4 62.7 65.7 0v45.6zM65.7 49.2v38.9l37.4-21.9zM24.7 62.7 62.4 0v45.6zM62.4 49.2v38.9L24.9 66.2zM62.3 96.4V128L23.1 72.9z" /></svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                fill="#000"
                                version="1.1"
                                viewBox="0 0 130.441 130.44"
                                xmlSpace="preserve"
                            >
                                <path d="M108.338 98.771c0-17.966-7.256-26.797-10.147-26.797-1.625-2.74-2.791-4.567-4.354-7.309 2.322 0 7.224 2.459 9.687 4.924 4.815 4.82 9.688 14.564 9.688 29.182h-4.874zM13.639 29.762L8.46 32.997s-4.872 2.58-4.872 9.745c0 4.219 3.657 6.636 7.8 8.022 3.725-4.446 5.472-8.87 5.155-13.184-.23-3.109-1.501-5.767-2.904-7.818zm2.966 22.256c3.559-4.875 5.174-9.849 4.792-14.851-.309-4.029-1.875-7.401-3.62-9.995l10.17-6.356s-1.003-4.585-2.436-14.617c-1.432-10.032 7.308-4.872 7.308-4.872S36.403 2.474 45 11.071c7.309 7.309 7.309 17.053 7.309 17.053v26.797h26.797c10.658 0 11.047 7.308 11.047 7.308H23.076v-9.598c0 .001-2.907-.028-6.471-.613zm11.342-20.239c0 2.017 1.637 3.654 3.654 3.654s3.654-1.637 3.654-3.654-1.637-3.654-3.654-3.654-3.654 1.637-3.654 3.654zm4.872 98.661c6.57 0 8.705-4.422 9.401-7.309H23.418c.697 2.888 2.832 7.309 9.401 7.309zm51.159 0c6.57 0 8.705-4.422 9.401-7.309H74.577c.696 2.888 2.831 7.309 9.401 7.309zM23.076 64.666l-4.872 7.309h75.521l-4.873-7.309H23.076zm68.211 9.744H23.076l-4.872 7.309h77.957l-2.436-3.654-2.438-3.655zm0 9.744H23.076l-4.872 7.31h77.957l-2.436-3.654-2.438-3.656zm0 9.745H76.67l-2.437 3.653-2.438 3.654H96.16l-2.436-3.654-2.437-3.653zm0 9.745H76.67l-2.437 3.654-2.438 3.652H96.16l-2.436-3.652-2.437-3.654zm0 9.744H76.67l-2.437 3.654-2.438 3.653h24.363l-2.437-3.653-2.434-3.654zM40.128 93.899H25.511l-2.436 3.653-2.436 3.654H45l-2.436-3.654-2.436-3.653zm0 9.745H25.511l-2.436 3.654-2.436 3.652H45l-2.436-3.652-2.436-3.654zm0 9.744H25.511l-2.436 3.654-2.436 3.653H45l-2.436-3.653-2.436-3.654zm61.162-3.522l4.356 2.181 4.873-9.744-4.357-2.179-4.872 9.742zm9.553-5.622l2.438 9.743 4.728-1.182-2.438-9.744-4.728 1.183zm6.266-7.422l-2.924 3.897 9.744 7.309 2.924-3.897-9.744-7.309z"></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    d="M20.477 2l-4.5 8h-9l4.5-8h9"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.45"
                                ></path>
                                <path
                                    d="M15.975 10h9l-4.5-8h-9z"
                                    data-name="Shape"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.6"
                                ></path>
                                <path
                                    d="M11.477 18l4.5-8-4.5-8-4.5 8z"
                                    data-name="Shape"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.8"
                                ></path>
                                <path
                                    d="M11.52 30l4.5-8h9l-4.5 8h-9"
                                    data-name="Shape"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.45"
                                ></path>
                                <path
                                    d="M16.022 22h-9l4.5 8h9z"
                                    data-name="Shape"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.6"
                                ></path>
                                <path
                                    d="M20.52 14l-4.5 8 4.5 8 4.5-8z"
                                    data-name="Shape"
                                    style={{ isolation: "isolate" }}
                                    opacity="0.8"
                                ></path>
                            </svg>


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="75"
                                height="75"
                                version="1"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    d="M2180 4227c-55-17-133-102-150-162-13-47-10-84 59-639 41-324 79-605 85-625s33-58 61-87c71-71 96-76 351-72 176 2 214 6 241 21 48 26 100 84 117 131 22 58 159 1179 153 1238-7 59-27 97-73 142-65 63-87 66-468 65-218-1-354-5-376-12z"
                                    transform="matrix(.1 0 0 -.1 0 512)"
                                ></path>
                                <path
                                    d="M1741 3920c-51-22-96-42-100-45-5-5 229-1915 246-2007l6-28h1335l6 38c9 53 246 1970 246 1986 0 14-207 102-217 92-3-3-36-256-74-563-37-307-71-575-75-596-18-110-130-244-241-289-55-22-69-23-308-23-240 0-252 1-314 24-85 32-170 111-212 196-30 61-34 85-105 652-41 323-74 591-74 596 0 13-23 6-119-33zM1373 3721c-334-223-587-512-758-866-133-274-215-624-215-917v-98h1332l-5 33c-4 17-59 456-123 975-65 518-120 942-123 942s-52-31-108-69zM3630 3772c0-10-52-438-115-951-63-514-115-944-115-957v-24h1323l-6 148c-28 720-388 1355-989 1746-47 31-89 56-92 56s-6-8-6-18zM320 1667c-49-16-133-102-148-153-16-56-16-412 0-468 16-55 99-138 154-154 32-9 542-12 2236-12 2475 0 2252-8 2331 80 24 26 49 66 55 88 16 53 16 411 0 464-6 22-31 62-55 88-79 88 145 80-2337 79-1574-1-2211-4-2236-12z"
                                    transform="matrix(.1 0 0 -.1 0 512)"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <iframe className='ml-28 h-[35rem] w-[40rem] mt-[-5rem]' src="https://embed.lottiefiles.com/animation/92445"></iframe>
                </div>

            </div>




            <footer class="glass dark:bg-gray-900 bottom-0 w-full">
                <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
                        <ul class="text-gray-500 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Brand Center</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
                        <ul class="text-gray-500 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Discord Server</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Download</h2>
                        <ul class="text-gray-500 dark:text-gray-400">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">iOS</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Android</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Windows</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/"> ™</a>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Facebook page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Instagram page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            <span class="sr-only">Twitter page</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">GitHub account</span>
                        </a>
                        <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                            <span class="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </footer>
            <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
            <button onClick={sendFileToIPFS}>Mint NFT</button>
        </div>
    )
}

export default LandingPage