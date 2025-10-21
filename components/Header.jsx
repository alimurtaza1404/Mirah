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
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

  const translations = {
    en: {
      home: 'Home',
      shop: 'Shop',
      about: 'About',
      contact: 'Contact',
      account: 'Account',
      language: 'العربية',
      byCategory: 'By Category',
      byCollection: 'By Collection',
      categories: [
        'Dresses', 'Kaftans', 'Jalabiya', 'Jumpsuits', 'Trousers', 'Black Abayas',
        'Colored Abayas', 'Printed Abayas', 'Daily Abayas', 'Travel Wear', 'Basics',
        'Mini', 'Bridal & Wedding', 'Accessories', 'Shoes', 'Ready To Wear', 'Sale'
      ],
      collections: [
        'Bridal & Evening 25', 'Spring & Summer 25', 'Eid 25', 'Ramadan & Eid 25',
        'Fall & Winter 24', 'Bridal & Evening 24', 'Spring & Summer 24', 'Eid 24', 'Ramadan & Eid 24'
      ],
      aboutLinks: [
        { name: 'The Brand', href: '/about/thebrand' },
        { name: 'Showroom', href: '/about/showroom' },
        { name: 'Stocklist', href: '/about/stocklist' },
        { name: 'Press', href: '/about/press' }
      ]
    },
    ar: {
      home: 'الرئيسية',
      shop: 'المتجر',
      about: 'معلومات عنا',
      contact: 'اتصل بنا',
      account: 'الحساب',
      language: 'English',
      byCategory: 'حسب الفئة',
      byCollection: 'حسب المجموعة',
      categories: [
        'فساتين', 'كفتان', 'جلابية', 'جمبسوت', 'سراويل', 'عبايات سوداء',
        'عبايات ملونة', 'عبايات مطبوعة', 'عبايات يومية', 'ملابس السفر', 'أساسيات',
        'ميني', 'زفاف وعرائس', 'إكسسوارات', 'أحذية', 'جاهز للارتداء', 'تخفيضات'
      ],
      collections: [
        'زفاف ومساء 25', 'ربيع وصيف 25', 'عيد 25', 'رمضان وعيد 25',
        'خريف وشتاء 24', 'زفاف ومساء 24', 'ربيع وصيف 24', 'عيد 24', 'رمضان وعيد 24'
      ],
      aboutLinks: [
        { name: 'العلامة التجارية', href: '/about/thebrand' },
        { name: 'صالة العرض', href: '/about/showroom' },
        { name: 'قائمة المخزون', href: '/about/stocklist' },
        { name: 'الصحافة', href: '/about/press' }
      ]
    }
  };

  const t = translations[language];
  const isRTL = language === 'ar';

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    setIsShopOpen(false);
    setIsAboutOpen(false);
    setIsCategoryOpen(false);
    setIsCollectionOpen(false);
  };

  return (
    <header className={`bg-white border-b border-gray-200 sticky top-0 z-50 ${isRTL ? 'font-arabic' : 'font-sans'}`} dir={isRTL ? 'rtl' : 'ltr'}>
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
              {t.home}
            </Link>

            {/* ===== SHOP ===== */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <Link href="#" className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition">
                {t.shop}
              </Link>
              {isShopOpen && (
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-full bg-white border border-gray-200 shadow-lg min-w-[200px] p-2`}>
                  {/* By Category */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 hover:text-[#c6b197]">
                      {t.byCategory} {isRTL ? '◂' : '▸'}
                    </Link>
                    {isCategoryOpen && (
                      <div className={`absolute top-0 ${isRTL ? 'right-full' : 'left-full'} bg-white border border-gray-200 shadow-lg min-w-[230px] p-2`}>
                        {t.categories.map((item, index) => (
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
                      {t.byCollection} {isRTL ? '◂' : '▸'}
                    </Link>
                    {isCollectionOpen && (
                      <div className={`absolute top-0 ${isRTL ? 'right-full' : 'left-full'} bg-white border border-gray-200 shadow-lg min-w-[230px] p-2`}>
                        {t.collections.map((item) => (
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
                {t.about}
              </Link>
              {isAboutOpen && (
                <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-full bg-white border border-gray-200 shadow-lg min-w-[200px] p-2`}>
                  {t.aboutLinks.map((link) => (
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
              {t.contact}
            </Link>
            <button
              onClick={handleLanguageToggle}
              className="text-sm uppercase text-gray-900 hover:text-[#c6b197] transition"
            >
              {t.language}
            </button>
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
            {t.account}
          </Link>

          {/* Cart Icon */}
          <svg className="w-5 h-5 stroke-gray-900 hover:stroke-[#c6b197] cursor-pointer" fill="none" viewBox="0 0 24 24">
            <path d="M6 6h15l-1.5 9h-12z" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
          </svg>

          {/* Admin Button */}
          <Link
            href="/login"
            className="text-sm uppercase bg-[#c6b197] text-white px-4 py-2 rounded-full hover:bg-[#b79d82] transition hidden sm:block"
          >
            Admin
          </Link>
        </div>
      </div>

{/* ===== Mobile Menu (Left Drawer Style) ===== */}
{isMobileMenuOpen && (
  <div className="sm:hidden fixed inset-0 z-[9999] flex">
    {/* Left Drawer */}
    <div
      className="w-[75%] bg-white h-full shadow-2xl p-6 overflow-y-auto rounded-r-[2rem] border-r border-gray-200 
                 transform transition-transform duration-300 ease-in-out translate-x-0 flex flex-col justify-between"
    >
      <div>
        {/* Close Button */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold tracking-wide text-gray-800">Menu</span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-black text-3xl hover:text-[#c6b197] transition-transform transform hover:rotate-90"
          >
            ×
          </button>
        </div>

        {/* Cart Box */}
        <div className="border border-[#c6b197] bg-[#faf8f6] rounded-full px-5 py-3 flex justify-between items-center text-sm mb-6 shadow-sm">
          <span className="tracking-wider font-medium">CART (0)</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-[#c6b197]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M16 17a2 2 0 11-4 0m6 0a2 2 0 11-4 0"
            />
          </svg>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col text-gray-900 text-sm space-y-2">
          <Link
            href="/"
            className="py-3 text-center uppercase rounded-full border border-gray-200 hover:border-[#c6b197] hover:bg-[#faf8f6] hover:text-[#c6b197] transition-all shadow-sm"
          >
            {t.home}
          </Link>

          {/* Shop Dropdown */}
          <details className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#c6b197]">
            <summary className="py-3 px-5 uppercase flex justify-between items-center cursor-pointer hover:text-[#c6b197]">
              {t.shop}
              <span className="text-lg">▾</span>
            </summary>
            <div className="bg-[#fafafa] px-5 py-2 space-y-2 border-t border-gray-100">
              <details>
                <summary className="cursor-pointer hover:text-[#c6b197] font-medium py-1">{t.byCategory}</summary>
                <div className="mt-2 space-y-2 pl-2">
                  {t.categories.map((item) => (
                    <Link
                      key={item}
                      href={`/shop/category/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                      className="block rounded-full border border-gray-100 py-2 px-4 text-center hover:border-[#c6b197] hover:text-[#c6b197] transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </details>

              <details>
                <summary className="cursor-pointer hover:text-[#c6b197] font-medium py-1">{t.byCollection}</summary>
                <div className="mt-2 space-y-2 pl-2">
                  {t.collections.map((item) => (
                    <Link
                      key={item}
                      href={`/shop/collection/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                      className="block rounded-full border border-gray-100 py-2 px-4 text-center hover:border-[#c6b197] hover:text-[#c6b197] transition"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </details>

          {/* About Dropdown */}
          <details className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#c6b197]">
            <summary className="py-3 px-5 uppercase flex justify-between items-center cursor-pointer hover:text-[#c6b197]">
              {t.about}
              <span className="text-lg">▾</span>
            </summary>
            <div className="bg-[#fafafa] px-5 py-2 space-y-2 border-t border-gray-100">
              {t.aboutLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-full border border-gray-100 py-2 px-4 text-center hover:border-[#c6b197] hover:text-[#c6b197] transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/contact"
            className="py-3 text-center uppercase rounded-full border border-gray-200 hover:border-[#c6b197] hover:bg-[#faf8f6] hover:text-[#c6b197] transition-all shadow-sm"
          >
            {t.contact}
          </Link>

          <button
            onClick={handleLanguageToggle}
            className="py-3 text-center uppercase rounded-full border border-gray-200 hover:border-[#c6b197] hover:bg-[#faf8f6] hover:text-[#c6b197] transition-all shadow-sm"
          >
            {t.language}
          </button>

          <Link
            href="/login"
            className="py-3 text-center uppercase rounded-full border border-gray-200 hover:border-[#c6b197] hover:bg-[#faf8f6] hover:text-[#c6b197] transition-all shadow-sm flex justify-center items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0zM4 21a8 8 0 1116 0H4z"
              />
            </svg>
            {t.account}
          </Link>

          <div className="py-3 text-center uppercase rounded-full border border-gray-200 hover:border-[#c6b197] hover:bg-[#faf8f6] hover:text-[#c6b197] transition-all shadow-sm">
            Search
          </div>
        </nav>
      </div>

      {/* Reward Button (Now scrolls at bottom naturally) */}
      <div className="mt-8">
        <button className="w-full bg-[#c6b197] text-white text-sm px-6 py-3 rounded-full shadow-md flex justify-center items-center gap-2 hover:bg-[#bba284] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8V4m0 0L8 8m4-4l4 4M4 12h16m-9 4v4m0 0l-4-4m4 4l4-4"
            />
          </svg>
          Reward
        </button>
      </div>
    </div>

    {/* Right Overlay */}
    <div
      onClick={() => setIsMobileMenuOpen(false)}
      className="flex-1 bg-black bg-opacity-40 backdrop-blur-sm rounded-l-[2rem]"
    ></div>
  </div>
)}

    </header>
  );
}