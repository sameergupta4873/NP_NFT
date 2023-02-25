import './App.css';
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NFTDetail from './Screens/HomeScreen/NFTDetail/NFTDetail';
import './index.css'
import WalletCard from './LoginComponents/MetaCard';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import GenerateNFT from './Screens/mint.js';
import CreateNFTScreen from './Screens/CreateNFTScreen/CreateNFTScreen';
import YourNFTScreen from './Screens/YourNFTScreeen/YourNFTScreen';
import SellNFTScreen from './Screens/SellNFTScreen/SellNFTScreen';
import AuctionScreen from './Screens/AuctionScreen/AuctionScreen';
import Cart from './HomeComponents/Cart';
import LandingPage from './Screens/LandingPage/LandingPage';


import { ethers } from 'ethers'
import { useState } from 'react'
import { useEffect } from 'react'
import MarketplaceAbi from './contractsData/Marketplace.json'
import MarketplaceAddress from './contractsData/Marketplace-address.json'
import NFTAbi from './contractsData/NFT.json'
import NFTAddress from './contractsData/NFT-address.json'


function App() {
  const href = window.location.href.split('?')[1];


  const [account, setAccount] = useState(null)
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})

  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    
  }

  useEffect(() => {
    if (window.ethereum) {
      web3Handler()
      console.log("Metamask")
    } else {
      console.log('No Metamask')
    }
  }, [])

  return (
    <>
      <div className="App">
        
        <Router>
          <Routes>
            <Route exact path='/' element={<HomeScreen marketplace = {marketplace} nft = {nft} />} />
            <Route exact path='/detail' element={<NFTDetail />} />
             <Route exact path='/auth' element={<WalletCard/>} />
            <Route exact path='/login' element={<LoginScreen/>} />
            <Route exact path='/generate' element={<GenerateNFT marketplace = {marketplace} nft = {nft} />} />
            <Route exact path='/create' element={<CreateNFTScreen/>} />
            <Route exact path='/profile/nft' element={<YourNFTScreen/>} />
            <Route exact path='/sell' element={<SellNFTScreen/>} />
            <Route exact path='/auction' element={<AuctionScreen/>} />
            <Route exact path='/about' element={<LandingPage/>} />
          </Routes>
        </Router>
        {href === "cart" ?  <Cart/> : <></>}
      </div>
    </>
  );
}

export default App; 
