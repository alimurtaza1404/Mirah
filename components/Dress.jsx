'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DressesCategoryPage() {
  const [dresses, setDresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/categories/dresses.json') // ✅ correct path
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
      <h1 className="text-4xl font-semibold mb-10 text-center">Dresses</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {dresses.map((item) => (
          <Link key={item.id} href={`/shop/category/${item.handle}`}>
            <div className="group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-gray-600">{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
