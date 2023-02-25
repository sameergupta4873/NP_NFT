import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../HomeComponents/Navbar'
import Searchbar from '../../HomeComponents/Searchbar'
import Sidebar from '../../HomeComponents/Sidebar'
import eth from '../../images/eth.gif'
import { Amplify, Auth, Hub } from 'aws-amplify';

const CreateNFTScreen = () => {
    const [fileImg, setFileImg] = useState(null);
    const [user, setUser] = useState(null);
    const [Name, setName] = useState(null);
    const [Description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);

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
                    name: Name,
                    description: Description ,
                    owner: user.attributes.email,
                    price: price,
                }
                const pinataJSONBody = {
                    pinataContent: metadata
                };
                const jsonResponse = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", pinataJSONBody, {
                    headers: {
                        "Content-Type": `application/json`,
                        pinata_api_key: "00095538e20c1dd853b4",
                        pinata_secret_api_key: `19e0a8f9429a8c6ffdc278847ecd936e01b630c8ae4adbaa6eb77cad02179bf5`,
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



    useEffect(() => {
        Hub.listen('auth', ({ payload: { event, data } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser().then(userData => {
                        setUser(userData);
                    });
                    break;
                case 'signOut':
                    setUser(null);
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
            }
        });

        getUser().then(userData => {
            setUser(userData)
        });
    }, []);

    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then(userData => userData)
            .catch(() => console.log('Not signed in'));
    }
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
                <input type="file" className='rounded border' onChange={(e) => setFileImg(e.target.files[0])} required />


                <h1 className='text-xl font-bold mt-7 my-2'>Name</h1>
                <input type="search" id="search-dropdown" class="block p-2.5 w-80 z-20 text-sm text-white-900 rounded-lg bg-black border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:border-blue-500" placeholder="Name" required onChange={(e)=> setName(e.target.value)} />

                <h1 className='text-xl font-bold mt-7 my-2'>Set a price</h1>
                <div class="flex">
                    <div class="relative w-half">
                        <input type="search" id="search-dropdown" class="block p-2.5 w-half z-20 text-sm text-white-900 rounded-l-lg bg-black border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-white-400 dark:text-white dark:focus:border-blue-500" placeholder="Enter Amount" onChange={(e)=> setPrice(e.target.value)} required />
                    </div>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white-900 border border-gray-300 rounded-r-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button" ><img src={eth} className="h-5 w-5 mr-2"></img>Ethereum </button>
                </div>

                <h1 className='text-xl font-bold mt-7'>Description</h1>
                <p id="helper-text-explanation" class="text-sm text-gray-500 mb-2 dark:text-gray-400">The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm bg-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e)=> setDescription(e.target.value)}></textarea>

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
                <button type="button" class="mt-7 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={sendFileToIPFS}>Create</button>
            </div>

        </div>
    )
}

export default CreateNFTScreen