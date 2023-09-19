import React from 'react'
import { MdShoppingBag } from "react-icons/md";
import { GiScooter } from "react-icons/gi";

const Hero = () => {
  return (
    <>
      <div className='container px-4 pt-36  flex  items-center '>
        <article>
          <h1 className='text-4xl lg:text-5xl mb-8'>Start your BK® order.</h1>
          <ul className='flex flex-col gap-4'>
            <li>
              <button className='bg-orange text-white flex items-center gap-2 py-3 px-5 rounded-full font-bold'>
                <MdShoppingBag />
                Order Pickup
              </button>
            </li>
            <li>
              <button className='flex items-center gap-2 border border-[#D62201] py-3 px-5 rounded-full text-[#D62201] font-bold'>
                <GiScooter />
                Order Delivery
              </button>
            </li>
          </ul>
        </article>

        <article>
          <img 
            src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/7708c7ebae03483ccff289a6c7188668b6db5c64-749x336.png?w=900&q=90&fit=max&auto=format"
            alt=" hamburguesa "
            srcset=""
          />
        </article>
      </div>
    </>
  );
}

export default Hero
