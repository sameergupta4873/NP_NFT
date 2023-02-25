import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import axios from "axios";
const API_Key = "00095538e20c1dd853b4";
const API_Secret =
  "19e0a8f9429a8c6ffdc278847ecd936e01b630c8ae4adbaa6eb77cad02179bf5";
const JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NTFmYTQ2Yi1hNmMwLTQ5MjYtODQ4YS1mY2E3N2E4ZjliOTAiLCJlbWFpbCI6ImFzYXJpLnIubGFiZWViN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMDAwOTU1MzhlMjBjMWRkODUzYjQiLCJzY29wZWRLZXlTZWNyZXQiOiIxOWUwYThmOTQyOWE4YzZmZmRjMjc4ODQ3ZWNkOTM2ZTAxYjYzMGM4YWU0YWRiYWE2ZWI3N2NhZDAyMTc5YmY1IiwiaWF0IjoxNjc3Mjc1OTIzfQ.Qf6clflxFliHXax7SfKRsIA4x9U5qKPhPxLMAqz6Dhg";

export const Mint = ({ marketplace, nft }) => {
  const connect = async () => {
    try {
      const authResponse = await fetch(
        "https://api.pinata.cloud/data/testAuthentication",
        {
          headers: {
            pinata_api_key: API_Key,
            pinata_secret_api_key: API_Secret,
          },
        }
      );
      const authJson = await authResponse.json();
      console.log(authJson);
    } catch (err) {
      console.log(err);
    }
  };
  const client = null;
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fileImg, setFileImg] = useState(null);
  const [image, setImage] = useState(null);

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
            pinata_api_key: `00095538e20c1dd853b4`,
            pinata_secret_api_key: `19e0a8f9429a8c6ffdc278847ecd936e01b630c8ae4adbaa6eb77cad02179bf5`,
            "Content-Type": "multipart/form-data",
          },
        });

        setImage(resFile.data.IpfsHash);
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        createNFT();
        //Take a look at your Pinata Pinned section, you will see a new file added to you list.
      } catch (error) {
        console.log("Error sending File to IPFS: ");
        console.log(error);
      }

    }
  };

  const createNFT = async () => {
      mintThenList(image);

  };

  const mintThenList = async (result) => {
    const uri = result;
    
    // mint nft
    await (await nft.mint(uri)).wait();
    // get tokenId of new nft
    console.log("Fs");
    const id = await nft.tokenCount();
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait();
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFileImg(e.target.files[0])}
        required
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      
      <button onClick={sendFileToIPFS}>Mint NFT</button>
    </div>
  );
};

export default Mint;
