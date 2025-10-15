'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-10 py-4">
        {/* ===== Left Section ===== */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="/" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
              Home
            </Link>

            {/* ===== SHOP ===== */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <Link href="#" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
                Shop
              </Link>
              {isShopOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] p-2">
                  {/* By Category */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#c6b197]">
                      By Category ▸
                    </Link>
                    {isCategoryOpen && (
                      <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg min-w-[230px] p-2">
                        {[
                          'Dresses', 'Kaftans', 'Jalabiya', 'Jumpsuits', 'Trousers', 'Black Abayas',
                          'Colored Abayas', 'Printed Abayas', 'Daily Abayas', 'Travel Wear', 'Basics',
                          'Mini', 'Bridal & Wedding', 'Accessories', 'Shoes', 'Ready To Wear', 'Sale'
                        ].map((item) => (
                          <Link
                            key={item}
                            href={`/shop/category/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[#c6b197]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* By Collection */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCollectionOpen(true)}
                    onMouseLeave={() => setIsCollectionOpen(false)}
                  >
                    <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#c6b197]">
                      By Collection ▸
                    </Link>
                    {isCollectionOpen && (
                      <div className="absolute top-0 left-full bg-white border border-gray-200 shadow-lg min-w-[230px] p-2">
                        {[
                          'Bridal & Evening 25', 'Spring & Summer 25', 'Eid 25', 'Ramadan & Eid 25',
                          'Fall & Winter 24', 'Bridal & Evening 24', 'Spring & Summer 24', 'Eid 24', 'Ramadan & Eid 24'
                        ].map((item) => (
                          <Link
                            key={item}
                            href={`/shop/collection/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[#c6b197]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ===== ABOUT ===== */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link href="/about" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
                About
              </Link>
              {isAboutOpen && (
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg min-w-[200px] p-2">
                  {[
                    { name: 'The Brand', href: '/about/thebrand' },
                    { name: 'Showroom', href: '/about/showroom' },
                    { name: 'Stocklist', href: '/about/stocklist' },
                    { name: 'Press', href: '/about/press' }
                  ].map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-50 hover:text-[#c6b197]"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
              Contact
            </Link>
            <Link href="#" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
              العربية
            </Link>
          </nav>
        </div>

        {/* ===== Center Logo ===== */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-heading tracking-wider text-gray-900"
        >
          MIRAH
        </Link>

        {/* ===== Right Section ===== */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <svg className="w-5 h-5 stroke-gray-900 hover:stroke-[#c6b197] cursor-pointer" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          <Link href="/account" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition hidden sm:block">
            Account
          </Link>

          {/* Cart Icon */}
          <svg className="w-5 h-5 stroke-gray-900 hover:stroke-[#c6b197] cursor-pointer" fill="none" viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-12z" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>
        </div>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md px-4 py-4">
          <nav className="flex flex-col space-y-3 text-sm">
            <Link href="/" className="uppercase hover:text-[#c6b197]">Home</Link>
            <details>
              <summary className="uppercase cursor-pointer hover:text-[#c6b197]">Shop</summary>
              <div className="pl-4 mt-2 space-y-1">
                <details>
                  <summary className="cursor-pointer hover:text-[#c6b197]">By Category</summary>
                  <div className="pl-4 mt-1 space-y-1">
                    {[
                      'Dresses', 'Kaftans', 'Jalabiya', 'Jumpsuits', 'Trousers', 'Black Abayas',
                      'Colored Abayas', 'Printed Abayas', 'Daily Abayas', 'Travel Wear', 'Basics',
                      'Mini', 'Bridal & Wedding', 'Accessories', 'Shoes', 'Ready To Wear', 'Sale'
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/shop/category/dresses${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                        className="block hover:text-[#c6b197]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </details>
                <details>
                  <summary className="cursor-pointer hover:text-[#c6b197]">By Collection</summary>
                  <div className="pl-4 mt-1 space-y-1">
                    {[
                      'Bridal & Evening 25', 'Spring & Summer 25', 'Eid 25', 'Ramadan & Eid 25',
                      'Fall & Winter 24', 'Bridal & Evening 24', 'Spring & Summer 24', 'Eid 24', 'Ramadan & Eid 24'
                    ].map((item) => (
                      <Link
                        key={item}
                        href={`/shop/collection/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                        className="block hover:text-[#c6b197]"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
            </details>

            <details>
              <summary className="uppercase cursor-pointer hover:text-[#c6b197]">About</summary>
              <div className="pl-4 mt-2 space-y-1">
                {[
                  { name: 'The Brand', href: '/about/thebrand' },
                  { name: 'Showroom', href: '/about/showroom' },
                  { name: 'Stocklist', href: '/about/stocklist' },
                  { name: 'Press', href: '/about/press' }
                ].map((link) => (
                  <Link key={link.name} href={link.href} className="block hover:text-[#c6b197]">
                    {link.name}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="/contact" className="uppercase hover:text-[#c6b197]">Contact</Link>
            <Link href="#" className="uppercase hover:text-[#c6b197]">العربية</Link>
            <Link href="/account" className="uppercase hover:text-[#c6b197]">Account</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
