'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DressesCategoryPage() {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/categories/dresses.json')
      .then((res) => res.json())
      .then((data) => {
        setDresses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading JSON:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="min-h-screen bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading uppercase tracking-[0.25em] text-gray-900">
          Dresses
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Discover our collection of elegant and timeless dresses
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dresses.map((item) => (
          <Link 
            key={item.id} 
            href={`/shop/product/${item.id}`} // Updated to use product ID
            className="group cursor-pointer block"
          >
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Quick view badge */}
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-sm font-medium text-gray-700">
                  Quick View
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#c6b197] font-semibold text-lg mb-2">
                  {item.price}
                </p>
                <p className="text-gray-500 text-sm">
                  {item.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}