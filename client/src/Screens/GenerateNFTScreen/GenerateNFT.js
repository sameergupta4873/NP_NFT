import React, { useState } from 'react'
import Searchbar from '../../HomeComponents/Searchbar'
import axios from 'axios'

const GenerateNFT = () => {
  const [Prompt, setPrompt] = useState('');
  console.log(Prompt);
  const [imageURL, setImageURL] = useState(null);
  const submitPrompt = () => {
    const data = JSON.stringify({
      "prompt": `${Prompt}`,
      "n": 1,
      "size": "1024x1024"
    });
    const options = {
      headers: {
        "content-type": "application/json",
        "Authorization": "Bearer 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"
      }
    }
    axios.post("https://api.openai.com/v1/images/generations", data, options).then(response => {
      console.log(response.data);
      setImageURL(response.data);
      console.log(imageURL);
    });
  }

  return (
    <div>
      <div className='flex'>
        <div class="relative w-[90%] glass focus:border-0">
          <div class="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none" >
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input class="bg-transparent py-[12px] w-full pl-16 focus:border-0" placeholder="Search" onChange={(e) => setPrompt(e.target.value)} />
        </div>
        <button className='bg-gray-100 px-10' onClick={submitPrompt}>Generate</button>
      </div>
      { 
        imageURL && imageURL.data[0].url &&
        <img src={imageURL.data[0].url} height={"400px"} width={"700px"}></img>
      }
    </div>
  )
}

export default GenerateNFT