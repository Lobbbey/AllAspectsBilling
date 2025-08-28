// import { useState } from 'react';
import Link from 'next/link';

export default function NavBar(){
  return(
    <nav className="fixed top-0 left-0 w-full bg-white shadow-2xl z-50">
      <div className="flex justify-between items-center h-16 px-6 text-black">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl hover:text-green-800 transition-all duration-300">
            All Aspects Billing
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul>


        </ul>
      </div>
    </nav>
  );
}
