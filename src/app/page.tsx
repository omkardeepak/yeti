import Image from 'next/image'
import Navbar from '@/Components/Navbar'

import nft from '../Assets/nft.jpeg'
import bird from '../Assets/bird.jpeg'
import avatar from '../Assets/avatar.png'
import Footer from '../Components/Footer'
export default function Component() {
  return (
    <div className="bg-#08181A;
 min-h-screen text-white overflow-hidden relative">
      {/* Ellipse background effect */}
      <div 
        className="absolute w-[1075px] h-[1075px] left-[-458px] top-[-304px] rounded-full"
        
        style={{
          background: 'rgba(0, 252, 237, 0.15)',
          filter: 'blur(500px)',
        }}
        
      />
      
      <Navbar></Navbar>
      <main className="container mx-auto px-4 py-12 relative z-10 ml-16 mobile:h-[800px] laptop:ml-7 laptop:h-[400px] laptopl:w-[1000px] laptopl:ml-60 laptopl:mt-">
        <div className="flex flex-col md:flex-row items-center justify-between laptopl:text-2xl">
          <div className=" md:w-1/2 space-y-6 laptop:-ml-96">
            <h1 className="text-4xl laptopl:text-4xl font-bold leading-tight laptop:text-3xl ">
              Discover And Get New Nft Collection's
            </h1>
            <p className=" text-gray-400 font-extralight max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>
            <button className="bg-transparent text-white px-6 py-3 border-white border-2 font-thin inline-flex items-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg>            </button>
            <div className="flex space-x-8 pt-8">
              <div>
                <div className="text-3xl font-bold">43k+</div>
                <div className="text-gray-400">Artworks</div>
              </div>
              <div>
                <div className="text-3xl font-bold">16k</div>
                <div className="text-gray-400">Auctions</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-gray-400">Artists</div>
              </div>
            </div>
          </div>
          <div className=" relative mobile:w-3/4 laptop:w-96 laptop:-mt-72 laptop:ml-96 s-laptop:ml-80 space-y-6  mobile:-ml-20 md:ml-32 lg:ml-48 xl:ml-72 sm:h-72 mobile:mt-10 md:h-80 lg:h-96 laptopl:-mr-64">
 {/* Ensure it doesn't grow or shrink unnecessarily */}

      {/* First div (appears on top) */}
      <div className="absolute z-10 laptop:ml-40 s-laptop:ml-5 w-72 bg-transparent backdrop-blur-3xl bg-opacity-5 border-2 border-zinc-400 rounded-3xl shadow-lg overflow-hidden p-4 sm:p-6 laptop:p-7 lg:p-8">
        <div className="aspect-square relative rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-9 lg:mb-10">
          <Image
            src={nft}
            alt="NFT Character"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="-ml-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative">
              <Image
                src={avatar}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="font-thin text-sm text-white">Ashutosh Singh</p>
              <p className="text-xs text-gray-400">11h 12m 13s</p>
            </div>
          </div>
          <button className="bg-green-500 bg-opacity-20 -mr-5 px-2 py-1 rounded-full mobile:px-3 mobile:py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 text-green-400 font-medium text-xs mobile:text-sm md:text-xs lg:text-sm">
          ₹12,000
          </button>
        </div>
      </div>

      {/* Second div (appears behind the first div) */}
      <div className="absolute laptop:ml-40 z-0 w-72 translate-y-[-30px] bg-transparent backdrop-blur-3xl bg-opacity-5 border-2 border-zinc-400 rounded-3xl shadow-lg overflow-hidden p-4 sm:p-6 laptop:p-7 lg:p-8 rotate-12 ">
        <div className="aspect-square relative rounded-2xl overflow-hidden mb-6 sm:mb-8 md:mb-9 lg:mb-10">
          <Image
            src={bird}
            alt="NFT Character"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="-ml-5 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden relative">
              <Image
                src={avatar}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div>
              <p className="font-thin text-sm text-white">Ashutosh Singh</p>
              <p className="text-xs text-gray-400">11h 12m 13s</p>
            </div>
          </div>
          <button className="bg-green-500 bg-opacity-20 -mr-5 px-2 py-1 rounded-full sm:px-3 sm:py-2 md:px-2 md:py-1 lg:px-3 lg:py-2 text-green-400 font-medium text-xs sm:text-sm md:text-xs lg:text-sm">
          ₹12,000
          </button>
        </div>
        </div>

        </div>        
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}