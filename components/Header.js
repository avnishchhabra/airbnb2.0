import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests,setNoOfGuests] = useState(1)
  const router = useRouter()
  const datepickerRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
      color: '#FD5B61'
  }
  const handleRangeChange = (ranges) => {
      setStartDate(ranges.selection.startDate)
      setEndDate(ranges.selection.endDate)
  }
  const handleSearch = () => {
      router.push({
          pathname: '/search',
          query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            noOfGuests
          }
      })
  }
  return (
    <header className="sticky top-0 grid grid-cols-3 bg-white p-5 shadow-md md:py-7 z-20">
      {/* Left image */}
      <div onClick={() => router.push('/')} className="cursor-pointer relative h-8">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle section */}
      <div className="flex md:border-2 rounded-full items-center mx-auto shadow-md w-full">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent outline-none px-5 py-2 flex-grow text-sm overflow-hidden"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon className="hidden h-8 bg-red-400 md:inline-block border-2 rounded-full p-1 mr-3 text-white cursor-pointer" />
      </div>
      {/* Right section */}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 border-2 rounded-full p-1 cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (<div className='col-span-3 mx-auto'>
            <DateRangePicker ranges={[datepickerRange]} minDate={new Date()} onChange={handleRangeChange} />
            <div className='flex border-b py-2'>
                <h2 className='text-2xl flex-grow'>Number of guests</h2>
                <input type='number' className='w-12 outline-none text-red-400' value={noOfGuests} onChange={e => setNoOfGuests(e.target.value)} max='5' min='1'/>
            </div>
            <div className='flex justify-around mt-3'>
                <button className='text-gray-400' onClick={() => setSearchInput('')}>Cancel</button>
                <button onClick={handleSearch} className='text-red-400'>Search</button>
            </div>
        </div>)}
    </header>
  );
}

export default Header;
