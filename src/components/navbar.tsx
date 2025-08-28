"use client";

import Link from 'next/link';
import { useState } from 'react';
import {FaXmark, FaBars} from 'react-icons/fa6';

export default function NavBar(){
  const [navOpen, setNavOpen] = useState(false);
  
  return(
    <nav className="fixed top-0 left-0 w-full bg-white shadow-2xl z-50">
      <div className="flex justify-between items-center h-16 px-6 text-black">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl text-prussian-blue">
            All Aspects Billing
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul>
          <li><Link href="/#services">Services</Link></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden z-50" onClick={() => setNavOpen(!navOpen)}>
          { navOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 text-lg shadow-lg">

          </div>
        )}
        
      </div>
    </nav>
  );
}
