import Image from 'next/image'

function LargeCard({img,title,description,buttonText}) {
    console.log('imgg',img)
    return (
        <section className='relative cursor-pointer py-16'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                 src={img}
                 layout='fill'
                 objectFit='cover'
                 className='rounded-lg'
                />
            </div>
            <div className='absolute top-[150px] left-12'>
                <h3 className='text-2xl font-semibold w-[150px]'>{title}</h3>
                <p>{description}</p>
                <button className='bg-gray-900 text-white py-3 px-3 rounded-xl mt-3 lg:px-5'>{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
