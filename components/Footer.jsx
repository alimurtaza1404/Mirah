import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
  <h4 className="font-heading text-base mb-4">About Mirah</h4>
  <div className="space-y-2">
    <Link
      href="/about/thebrand"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      The Brand
    </Link>
    <Link
      href="/about/showroom"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Showroom
    </Link>
    <Link
      href="/about/press"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Press
    </Link>
    <Link
      href="/about/stocklist"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Stocklist
    </Link>
  </div>
</div>

     <div>
  <h4 className="font-heading text-base mb-4">Customer Care</h4>
  {[
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' }
  ].map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="block text-sm text-gray-900 hover:text-[#c6b197] mb-2 transition"
    >
      {item.name}
    </Link>
  ))}
</div>

       <div>
  <h4 className="font-heading text-base mb-4">Social</h4>
  <div className="space-y-2">
    <Link
      href="https://www.instagram.com/themirah.ae?igsh=MWI5dnVkc2ozeHVqcA%3D%3D&utm_source=qr"
      target="_blank"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Instagram
    </Link>
    <Link
      href="https://www.snapchat.com/add/themirah.ae?share_id=XdjB1JpXSy6HKRNgOc7aTA&locale=en_AE"
      target="_blank"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Snapchat
    </Link>
    <Link
      href="https://www.tiktok.com/@themirah?_t=ZS-90jBPaqPshO&_r=1"
      target="_blank"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      TikTok
    </Link>
    <Link
      href="https://www.facebook.com/share/1BR8dT1tXK/?mibextid=wwXIfr"
      target="_blank"
      className="block text-sm text-gray-900 hover:text-[#c6b197] transition"
    >
      Facebook
    </Link>
  </div>
</div>

      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © 2025 Mirah. All rights reserved.
      </div>
    </footer>
  );
}