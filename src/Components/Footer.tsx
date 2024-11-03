import Image from "next/image"
import amazon from "../Assets/amazon.png"
import ajio from "../Assets/ajio.png"
import ebay from "../Assets/ebay.png"
import pic1 from '../Assets/2.jpg'
import pic2 from '../Assets/1.jpg'
export default function Footer(){
return(
    <footer className="container mx-auto px-4 py-28 relative z-10 mobile:h-10 laptop:h-10">
        <div className="flex flex-wrap justify-between items-center laptopl:-mt-36 translate-x-30">
          <div className="flex flex-row space-x-11 -ml-5 mb-4 h-20 pl-7  bg-neutral-900 bg-opacity-60 w-3/5 mobile:h-7 mobile:-ml-16 laptop:h-10 laptop:mt-28 laptop:ml-3 laptopl:h-20 laptopl:mt-56 laptopl:ml-0 laptop:-translate-x-1/4">
            <Image src={amazon} alt="Amazon" width={100} height={30} />
            <Image src={ajio} alt="eBay" width={100} height={20} />
            <Image src={ebay} alt="AJIO" width={100} height={30} />
            <Image src={ajio} alt="Amazon" width={100} height={30} />
            <Image src={ebay} alt="Amazon" width={100} height={30} />
            <Image src={amazon} alt="Amazon" width={100} height={30} />
          </div>
          <div className="flex items-center space-x-2 laptop:-mr-20 laptop:mt-28 laptopl:mt-48 laptopl:mr-4">
            <Image src={pic1} alt="Member 1" width={40} height={40} className="rounded-full" />
            <Image src={pic2} alt="Member 2" width={40} height={40} className="rounded-full" />
            <Image src="/placeholder.svg?height=40&width=40" alt="Member 3" width={40} height={40} className="rounded-full" />
            <div className="text-sm">
              <div>Our Members</div>
              <div className="text-gray-400">Lorem ipsum dolor sit amet</div>
            </div>
          </div>
        </div>
      </footer>
)
}