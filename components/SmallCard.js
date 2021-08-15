import Image from "next/image"

function SmallCard({img,distance,location}) {
    return (
        <div className="flex items-center space-x-4 mt-5 cursor-pointer hover:bg-gray-200 rounded-lg transition transform hover:scale-105 duration-200 ease-out mr-10">
            {/* left div image */}
            <div className='relative h-16 w-16'>
                <Image
                  src={img}
                  layout='fill'
                  className="rounded-lg"
                />
            </div>
            {/* right div location & distance */}
            <div>
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}


export default SmallCard
