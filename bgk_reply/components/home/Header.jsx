import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import Notice from "./Notice";

const Header = () => {
  return (
    <>
      <header className="p-4 shadow fixed w-full bg-[#f5eadd] z-50">
        <div className="container flex items-center justify-between">
          <div>
            <button>
              <FaBars />
            </button>
          </div>

          <div>
            <Link href="/">
              <img
                src="https://website.menu.app/app/uploads/sites/8/2021/04/logo.svg"
                alt=""
                className="md:pl-36"
              />
            </Link>
          </div>

          <ul className="flex items-center gap-4">
            <li>
              <button className="bg-orange text-white flex items-center gap-2 py-2 px-4 rounded-full font-bold text-sm">
                Sign Up/Sign In
              </button>
            </li>
            <li>
              <button className="text-white flex items-center gap-2 py-2 px-4 rounded-full font-bold text-sm bg-[#502215]">
                <MdShoppingBag />
                $0.00
              </button>
            </li>
          </ul>
        </div>
        <Notice />
      </header>
    </>
  );
};

export default Header;
