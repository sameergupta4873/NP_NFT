import React, { useEffect, useState } from "react";
import Sidebar from "../../HomeComponents/Sidebar";
import one from '../../images/one.jpg'
import two from '../../images/two.jpg'
import three from '../../images/five.jpg'
import four from '../../images/four.jpg'
import five from '../../images/five.jpg'
import six from '../../images/six.jpg'
import eth from '../../images/eth.gif'
import eight from '../../images/eight.png'
import nine from '../../images/nine.png'
import Searchbar from "../../HomeComponents/Searchbar";
import Card1 from "../../HomeComponents/Card";
import TopBid from "../../HomeComponents/TopBid";
import Navbar from "../../HomeComponents/Navbar";
import Cart from "../../HomeComponents/Cart";
import { useSelector } from "react-redux";
import { Amplify, Auth, Hub } from 'aws-amplify';
import awsConfig from '../../aws-exports';
import axios from "axios";
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'


const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

// Assuming you have two redirect URIs, and the first is for localhost and second is for production
const [
  localRedirectSignIn,
  productionRedirectSignIn,
] = awsConfig.oauth.redirectSignIn.split(',');

const [
  localRedirectSignOut,
  productionRedirectSignOut,
] = awsConfig.oauth.redirectSignOut.split(',');

const updatedAwsConfig = {
  ...awsConfig,
  oauth: {
    ...awsConfig.oauth,
    redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
    redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
  }
}

Amplify.configure(updatedAwsConfig);


const HomeScreen = ({ marketplace, nft }) => {
  const [cart, setCart] = useState(false);
  const userDetails = useSelector((state) => state.userLogin);
  const { userInfo } = userDetails;
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [arr, intArr] = useState([]);
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i)
      if (!item.sold) {
        // get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId)
        // use uri to fetch the nft metadata stored on ipfs 
        const response = await fetch(uri)
        const metadata = await response.json()
        // get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
        // Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image
        })
      }
    }
    setLoading(false)
    setItems(items)
  }
  const buyMarketItem = async (item) => {
    await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }
  useEffect(() => {
    loadMarketplaceItems()
  }, [])



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

  useEffect(() => {
    if (user) {
      localStorage.setItem("userInfo", JSON.stringify(user.attributes));
    }
  }, [])

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }


  const getList = async () => {
    var config = {
      method: 'get',
      url: 'https://api.pinata.cloud/data/pinList?status=all&pageLimit=100',
      headers: {
        'Accept': 'text/plain',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3NTFmYTQ2Yi1hNmMwLTQ5MjYtODQ4YS1mY2E3N2E4ZjliOTAiLCJlbWFpbCI6ImFzYXJpLnIubGFiZWViN0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiMDAwOTU1MzhlMjBjMWRkODUzYjQiLCJzY29wZWRLZXlTZWNyZXQiOiIxOWUwYThmOTQyOWE4YzZmZmRjMjc4ODQ3ZWNkOTM2ZTAxYjYzMGM4YWU0YWRiYWE2ZWI3N2NhZDAyMTc5YmY1IiwiaWF0IjoxNjc3Mjc1OTIzfQ.Qf6clflxFliHXax7SfKRsIA4x9U5qKPhPxLMAqz6Dhg'
      }
    };

    const res = await axios(config);


    setList(res.data);
    intArr([]);
    list && list.rows && list.rows.map(async(item)=>{
      const res = await axios.get(`https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`)
      if(res.data.image){
        console.log(res.data);
        intArr(arr=> [...arr,res.data.image])
      }
    })
  }

  return (
    <div>
      <div className="fixed mt-[5rem]">
        <Sidebar logout={() => {
          Auth.signOut();
          localStorage.removeItem("userInfo")
        }} user={user} />
      </div>
      <div className='flex'>
        <div className='mt-5 ml-[7rem] w-[30rem]'>
          <Searchbar />
        </div>
        <div className='fixed top-1 right-[1.5rem]'>
          {user ? (
            <Navbar user={user} />
          ) : (
            <div className="mt-5 mr-7">
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => Auth.federatedSignIn()}>Login</button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[1.5rem] ml-[7.5rem]">
        <button onClick={getList}>list</button>
        <Card1 />
      </div>
      <h1 className="text-xl ml-[7.5rem] mt-10">
        <p>{user && `Hi, ${user.attributes.email}`}</p>
      </h1>
      <div class="mt-[-5rem] ml-[4rem] w-[70vw]">
        <div class="p-4 rounded-lg">
          <div class="bg-transparent">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

              <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {arr &&
                  arr.map((item) => {

                    return (
                      <div className="">
                        <a href="/detail" class="">
                          <div class="h-[15rem]">
                            {<img src={item} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75 rounded-lg" />}
                          </div>

                          <div className="flex justify-between mt-3 px-1">
                            <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                            <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                          </div>
                        </a>
                      </div>
                    )

                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-[5.7rem] right-[3.5rem]">
        <TopBid />
      </div>

      <div className="flex justify-center">
      {items.length > 0 ?
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>
                      <Button onClick={() => buyMarketItem(item)} variant="primary" size="lg">
                        Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )}
    </div>

      {/* {href === "cart" ?  <Cart/> : <></>} */}

    </div>
    
  );
};

export default HomeScreen;
