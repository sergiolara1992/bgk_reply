import React from 'react'
import royalPerksSvg from "@/Images/rewards-royal-Perks.svg"
import royalGrid from "@/Images/grid.svg";
import Image from 'next/image';
import Link from 'next/link';


const Hero = () => {
  return (
    <>
      <div className='container pt-40 mb-10 lg:pt-40 px-4 text-center '>
        <Image src={royalPerksSvg} width={500} height={200} alt="Royal Perks" className='block mx-auto' />

        <div>
          <h1 className='text-orange text-4xl'>Royal Perks</h1>
          <Image
            src={royalGrid}
            width={250}
            height={250}
            alt="Royal Perks"
            className='block mx-auto'
          />
          <h2 className='mb-8'>You re not earning yet?</h2>
          <p className='mb-20'>Start earning Crowns today by ordering your favorite BK food for pickup or delivery!</p>
        </div>
        <div>
            <p className='mb-8'>Looking for offers? Click <Link href="/offers">here</Link>!</p>
            <button className='bg-orange text-white py-2 px-6 rounded-full w-1/2'>Earn Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero
