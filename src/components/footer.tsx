import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        {/* Left Section: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/Full-logo-black.png"  
              alt="All Aspects Billing LLC Logo"
              width={200}
              height={200} 
            />
          </Link>
        </div>

        {/* Right Section: Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12 text-sm text-gray-700">
          {/* Column 1: Get Started With Us */}
          <div>
            <h4 className="font-bold text-prussian-blue mb-4 uppercase text-xs tracking-wider">Get Started With Us</h4>
            <ul className="space-y-2">
              <li><Link href="/#services" className="hover:text-sea-green transition-colors">Our Services</Link></li>
              <li><Link href="/#about" className="hover:text-sea-green transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h4 className="font-bold text-prussian-blue mb-4 uppercase text-xs tracking-wider">Contact Us</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-sea-green transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-sea-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-sea-green transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
