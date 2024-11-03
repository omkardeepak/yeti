"use-client"
import { Search, Wallet, Menu } from 'lucide-react'
export default function Navbar(){
    return(
        <header className="container mx-auto px-4 py-6 relative z-10 mobile:px-2 laptop:px-6 laptopl:mt-4 laptopl:px-10">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">NFT's</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#9eff00]">Explore</a>
            <a href="#" className="hover:text-[#9eff00]">Activity</a>
            <a href="#" className="hover:text-[#9eff00]">NFT Collection's</a>
            <a href="#" className="hover:text-[#9eff00]">How it Work's</a>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5" />
            <Wallet className="w-5 h-5" />
            <button className="bg-[#9eff00] text-black px-4 py-2 rounded-full font-semibold">
              Sign In
            </button>
            <Menu className="md:hidden w-6 h-6" />
          </div>
        </nav>
      </header>
    )
}