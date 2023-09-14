"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import card1 from "../../public/card1.webp"
import card2 from "../../public/card2.webp";
import card3 from "../../public/card3.webp";
import card4 from "../../public/card4.webp";

const cards = [
  {
    image: card1,
    title: "Pick your BK® Wrap Pack",
    desc: "These bundles are perfect for sharing, or for when you’re just hangry for BK®. Go with The Wrap Flow Trio, The Duo Wrap Combo, The King of Wrap or the Ultimate Wrap Party. Available for pickup or delivery—find ‘em only in the BK® App!",
    link: "See terms",
    button: "Order Now",
  },
  {
    image: card2,
    title: "Join the team!",
    desc: "At BK®, you can find work-life balance, flexibility and career growth, because you deserve to live life your way. It’s not just a job, it’s a career opportunity! Hiring decisions are determined solely by the franchisee who independently owns and operates each restaurant.",
    
    button: "Apply Today",
  },
  {
    image: card3,
    title: "Which Whopper is yours?",
    desc: "There are over 200,000 ways to top a Whopper. No wonder it can’t be topped.",
    link: "See terms",
    button: "Order Yours",
  },
  {
    image: card4,
    title: "Tasty Offers",
    desc: "Join Royal Perks to save with offers created just for you.",
    link: "See terms",
    button: "Join Now",
  },
];

const Grid = () => {
    const [card] = useState(cards);
  return (
    <>
      <div className="container pt-10 p-20 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {card.map((c, index) => (
            <article key={index} className="bg-white rounded-lg">
              <Image
                src={c.image}
                width={700}
                height={300}
                className="rounded-t-lg"
              />

              <article className="p-4">
                <h2 className="lg:text-2xl mb-8">{c.title}</h2>
                <p className="text-base mb-4 font-semibold">{c.desc}</p>
                <button className="underline mb-8 text-sm">{c.link}</button>
                <button className=" block ml-auto border border-[#D62201] py-3 px-5 rounded-full text-[#D62201] font-extrabold text-sm">
                  {c.button}
                </button>
              </article>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid
