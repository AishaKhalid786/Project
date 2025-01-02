import Link from 'next/link';
import React from 'react'
import { GoHeart } from "react-icons/go";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className='container bg-indigo-950 md:max-w-full  p-7 flex items-center justify-between'>
      <div className='font-bold text-3xl pt-7 mr-4 text-stone-300 flex  items-center gap-36'>
        Mobile Shop
      
      <ul className='flex text-semibold items-center justify-between text-white text-xl gap-5 text-center'>
       <Link href={"/"}> <li>Home</li></Link>
       <Link href={"/About"}> <li>About</li></Link>
       <Link href={"/Contact"}> <li>Contact</li></Link>
        <Link href={"/Categories"}><li>Categories</li></Link>

        <li>
            <input
            type="text"
            placeholder='Anything you like?'
            className='p-3  text-stone-300 rounded-lg w-[300px] h-[38px] '
            />
        </li>

        <li className='ml-4 text-stone-300 text-[30px]'><GoHeart /></li>
        <li className='ml-4 text-stone-300 text-[30px]'><PiShoppingCartLight /></li>
      </ul>
      </div>
    </div>
  )
}

export default Header
