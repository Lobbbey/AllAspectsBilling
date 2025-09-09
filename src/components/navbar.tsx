"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {FaXmark, FaBars} from 'react-icons/fa6';

export default function NavBar(){
  const [navOpen, setNavOpen] = useState(false);
  
  return(
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      {/* Green bar at the top */}
      <div className="h-2 bg-sea-green"></div>

      <nav className="container mx-auto flex justify-between items-center px-6 py-3 h-20">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg" 
            alt="All Aspects Billing LLC Logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
          {/* Removed hidden class to make name visible on mobile */}
          <span className="text-xl sm:text-2xl font-bold text-prussian-blue drop-shadow-sm">
            All Aspects Billing LLC
          </span>
        </Link>

        {/* Desktop Navigation Links (unchanged) */}
        <div className="hidden lg:flex flex-col items-end">
          <Link 
            href="/consultation" 
            className="bg-sea-green text-white font-bold tracking-wider uppercase px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-opacity"
          >
            Schedule A Meeting
          </Link>
          <ul className="flex items-center gap-4 text-xs font-semibold tracking-wider uppercase mt-2">
            <li>
              <Link href="/contact" className="bg-prussian-blue text-white px-3 py-1.5 rounded-md hover:bg-sea-green transition-colors">
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

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden text-2xl text-prussian-blue z-50"
        >
          {navOpen ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Panel - MODIFIED */}
      <div className={`lg:hidden fixed top-20 left-0 w-full h-screen bg-white transition-transform duration-300 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full -mt-20 gap-8">
            <li>
              <Link 
                href="/consultation" 
                className="bg-sea-green text-white font-bold tracking-wider uppercase px-8 py-4 rounded-full shadow-md hover:opacity-90 transition-opacity"
                onClick={() => setNavOpen(false)}
              >
                Schedule A Meeting
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-2xl text-prussian-blue hover:text-sea-green transition-colors" onClick={() => setNavOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/#services" className="text-2xl text-prussian-blue hover:text-sea-green transition-colors" onClick={() => setNavOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-2xl text-prussian-blue hover:text-sea-green transition-colors" onClick={() => setNavOpen(false)}>
                About
              </Link>
            </li>
        </ul>
      </div>
    </header>
  );
}
