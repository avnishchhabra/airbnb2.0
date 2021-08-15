import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 grid grid-cols-3 bg-white p-5 shadow-md md:py-7 z-20">
            {/* Left image */}
            <div className="cursor-pointer relative h-8">
                <Image
                 src='https://links.papareact.com/qd3'
                 layout='fill'
                 objectFit='contain'
                 objectPosition='left'
                />
            </div>
            {/* Middle section */}
            <div className='flex md:border-2 rounded-full items-center mx-auto shadow-md'>
                <input className="bg-transparent outline-none px-5 py-2 flex-grow text-sm" placeholder="Start your search"/>
                <SearchIcon className='hidden h-8 bg-red-400 md:inline-block border-2 rounded-full p-1 mr-3 text-white cursor-pointer' />
            </div>
            {/* Right section */}
            <div className='flex items-center space-x-4 justify-end'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6' />
                <div className='flex space-x-2 border-2 rounded-full p-1'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header