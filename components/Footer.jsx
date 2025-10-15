import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h4 className="font-heading text-base mb-4">About Anatomi</h4>
          {['The Brand', 'Showroom', 'Press', 'Stocklist'].map((item) => (
            <Link key={item} href="#" className="block text-sm text-gray-900 hover:text-[#c6b197] mb-2 transition">
              {item}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="font-heading text-base mb-4">Customer Care</h4>
          {['Contact Us', 'Shipping & Returns', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
            <Link key={item} href="#" className="block text-sm text-gray-900 hover:text-[#c6b197] mb-2 transition">
              {item}
            </Link>
          ))}
        </div>
        <div>
          <h4 className="font-heading text-base mb-4">Shop</h4>
          {['New Arrivals', 'Bridal', 'Ready to Wear', 'Accessories'].map((item) => (
            <Link key={item} href="#" className="block text-sm text-gray-900 hover:text-[#c6b197] mb-2 transition">
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 Anatomi. All rights reserved.
      </div>
    </footer>
  );
}