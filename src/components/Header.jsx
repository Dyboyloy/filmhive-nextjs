'use client';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import DarkModeSwitch from './DarkModeSwitch';
import Link from 'next/link';
import SearchBox from './SearchBox';


export default function Header() {
  return (
    <div className='flex justify-between items-center mx-2 my-3'>
        <div className="">
          <h1 className='text-xl font-bold'>Film <span className='text-white bg-sky-500 rounded-xl p-2' >Hive</span></h1>
        </div>
        <div className="flex items-center">
          <DarkModeSwitch />
          <div className='hidden sm:block'>
            <Link href={'/'} ><button className='uppercase mx-2 font-bold hover:text-sky-500 transition-[.3s] text-xl' >Home</button></Link>
          </div>
          <div className='block sm:hidden'>
            <Link href={'/'}><button className='uppercase mx-2 font-bold hover:text-sky-500 transition-[.3s] text-xl' ><FaHome /></button></Link>
          </div>
          <SearchBox />
        </div>
    </div>
  )
}
