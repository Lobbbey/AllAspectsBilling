"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {FaXmark, FaBars} from 'react-icons/fa6';

export default function NavBar(){
  const [navOpen, setNavOpen] = useState(false);
  
  return(
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <nav className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3">
          {/* <Image */}
          {/*   src="/logo.png" */}
          {/*   alt="All Aspects Billing LLC Logo" */}
          {/*   width={50} */}
          {/*   height={50} */}
          {/*   className="h-12 w-12" */}
          {/* /> */}
          <span className="text-2xl font-bold text-prussian-blue drop-shadow-sm hidden sm:inline">
            All Aspects Billing LLC
          </span>
        </Link>
        
        {/* Desktop Navigation Links */}
<div className="hidden lg:flex flex-col items-end">
          <Link href="/consultation" className="bg-sea-green text-white font-bold tracking-wider uppercase px-6 py-3 rounded-r-full shadow-md hover:opacity-90 transition-opacity">
            Request a Consultation
          </Link>
          <ul className="flex items-center gap-4 text-xs font-semibold tracking-wider uppercase mt-1">
            <li>
              <Link href="/#contact" className="bg-prussian-blue text-white px-3 py-1.5 rounded-md hover:bg-sea-green transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-prussian-blue hover:text-sea-green transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-prussian-blue hover:text-sea-green transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  );
}
