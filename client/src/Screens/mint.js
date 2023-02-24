import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { create, create as ipfsHttpClient } from "ipfs-http-client";

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
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");




  const uploadToIPFS = async (event) => {


    event.preventDefault();
    const file = event.target.files[0];

    const formData = new FormData();

    formData.append("file", file);
    console.log(file)
    try {
      const fileResponse = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          body: formData,
          headers: {
            "content-type": `multipart/form-data`,
            pinata_api_key: API_Key,
            pinata_secret_api_key: API_Secret,
          },
        }
      );
      const fileJson = await fileResponse.json();
      console.log(fileJson)
      const { data: fileData = {} } = fileJson;

      const { IpfsHash } = fileData;
      const fileIPFS = `https://gateway.pinata.cloud/ipfs/${IpfsHash}`;

      console.log(fileIPFS);
    } catch (err) {
      console.log(err);
    }
  };

  const createNFT = async () => {
    if (!image || !price || !name || !description) return;
    try {
      const result = await client.add(
        JSON.stringify({ image, price, name, description })
      );

      mintThenList(result);
    } catch (error) {
      console.log("ipfs uri upload error: ", error);
    }
  };

  const mintThenList = async (result) => {
    const uri = `${result.path}`;
    // mint nft
    await (await nft.mint(uri)).wait();
    // get tokenId of new nft
    const id = await nft.tokenCount();
    // approve marketplace to spend nft
    await (await nft.setApprovalForAll(marketplace.address, true)).wait();
    // add nft to marketplace
    const listingPrice = ethers.utils.parseEther(price.toString());
    await (await marketplace.makeItem(nft.address, id, listingPrice)).wait();
  };

  return (
    <div>
      <h1>heuhhh???</h1>
      <input type="file" required name="file" onChange={(e) => uploadToIPFS(e.target.files[0])} />

      <input
        onChange={(e) => setName(e.target.value)}
        size="lg"
        required
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        size="lg"
        required
        as="textarea"
        placeholder="Description"
      />
      <intput
        onChange={(e) => setPrice(e.target.value)}
        size="lg"
        required
        type="number"
        placeholder="Price in ETH"
      />

      <button onClick={connect} variant="primary" size="lg">
        Create & List NFT
      </button>
    </div>
  );
};

export default Mint;
