import Link from 'next/link'
import React from 'react'
import {GoHomeFill} from "react-icons/go"
import {IoFastFood} from "react-icons/io5"
import { GiTwoCoins } from "react-icons/gi";
import { FaAward} from "react-icons/fa";


const Bottomnav = () => {
  return (
    <>
      <nav className='fixed w-full bg-[#f5eadd] z-50 bottom-0 left-0 shadow'>
        <ul className="flex flex-wrap items-center justify-evenly p-4 shadow">
          <li className="text-base">
            <Link href="/">
              
              <GoHomeFill className="text-2xl text-center block mx-auto hover:text-[#d92200] focus:hover:text-[#d92200] " />
              Home
            </Link>
          </li>
          <li className="text-base">
            <Link href="/menu">
              <IoFastFood className="text-2xl text-center block mx-auto hover:text-[#d92200] focus:hover:text-[#d92200]" />
              Menu
            </Link>
          </li>
          <li className="text-base">
            <Link href="/offers">
              <GiTwoCoins className="text-2xl text-center block mx-auto hover:text-[#d92200] focus:hover:text-[#d92200]" />
              Offers
            </Link>
          </li>
          <li className="text-base">
            <Link href="/rewards">
              <FaAward className="text-2xl text-center block mx-auto hover:text-[#d92200] focus:hover:text-[#d92200]" />
              Rewards
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Bottomnav
