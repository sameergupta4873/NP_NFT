import React, { useEffect } from "react";
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
import Card from "../../HomeComponents/Card";
import TopBid from "../../HomeComponents/TopBid";
import Navbar from "../../HomeComponents/Navbar";


const HomeScreen = () => {


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
      <div className="mt-[1.5rem] ml-[7.5rem]">
        <Card />
      </div>

      <div class="mt-[-5rem] ml-[4rem] w-[70vw]">
        <div class="p-4 rounded-lg">
          <div class="bg-transparent">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

              <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={four} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={one} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={two} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={three} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={eight} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={six} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={five} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={nine} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={four} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={one} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={two} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={three} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={eight} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={six} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={five} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                <div className="">
                  <a href="/detail" class="">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                      <img src={nine} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                    </div>
                    <div className="flex justify-between mt-3 px-1">
                      <h3 class="mt-4 text-sm text-gray-500 font-semibold">Earthen Bottle</h3>
                      <p class="mt-3 text-lg font-medium text-gray-200 flex"><img src={eth} className="h-7 w-5"></img><p className="ml-1">48</p></p>
                    </div>
                  </a>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-[5.7rem] right-[3.5rem]">
        <TopBid />
      </div>

    </div>
  );
};

export default HomeScreen;
