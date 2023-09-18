"use client";


import React, { useState } from 'react'
import Modal from './Modal'
import Nearby from './Nearby';
import Favorites from './Favorites';
import Recents from './Recents';

const components = [
  {
    name: <Nearby />,
    button: "Nearby",
  },
  {
    name: <Favorites />,
    button: "Favorites",
  },
  {
    name: <Recents />,
    button: "Recents",
  },
];



const Hero = () => {
    const [showModal, setShowModal] = useState(false);
    const [items] = useState(components);
    const [value, setValue] = useState(2);

    const { name } = components[value];
  return (
    <>
      <div className="max-w-4xl pt-20 mb-28 px-4 mx-auto">
        <ul className="grid grid-cols-2 items-center justify-center text-center">
          <li className="">
            <button className="bg-[#502215] text-white py-2 px-6 w-full border-2 border-[#502215] ">
              Pick Up
            </button>
          </li>
          <li>
            <button
              onClick={() => setShowModal(true)}
              className="border-2 border-[#502215] w-full py-2 px-6 bg-white"
            >
              Delivery
            </button>
          </li>
        </ul>

        {showModal && <Modal setShowModal={setShowModal} />}

        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Your Address"
            className="w-full mt-4 py-3 px-6 rounded-lg placeholder-[#502215] text-[#502215] bg-white  border border-slate-400"
          />
        </form>

        <ul className="flex items-center justify-evenly mt-8">
          {items.map((button, index) => (
            <React.Fragment key={index}>
              <li
                onClick={() => setValue(index)}
                className={`cursor-pointer border-b-2 border-slate-400 w-full text-center py-2 ${
                  value === index && "border-[#d92200]"
                }`}
              >
                <button>{button.button}</button>
              </li>
            </React.Fragment>
          ))}
        </ul>

        <div>{name}</div>
      </div>
    </>
  );
}

export default Hero
