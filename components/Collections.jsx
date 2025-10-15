import Image from 'next/image';

export default function Collections() {
  const collections = [
    { title: 'New Arrivals', image: '/pic2.JPG' },
    { title: 'Bridal', image: '/pic3.JPG' },
    { title: 'Ready To Wear', image: '/pic4.JPG' },
    { title: 'Accessories', image: '/pic1.JPG' },
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-6 text-center">
      {/* Heading */}
      <h2 className="font-[Poppins] text-4xl md:text-5xl tracking-wide mb-14 text-gray-900">
        Our Collections
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {collections.map((collection) => (
          <div
            key={collection.title}
            className="relative group overflow-hidden rounded-md cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            {/* Image */}
            <Image
              src={collection.image}
              alt={collection.title}
              width={500}
              height={600}
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Title Overlay (like in your HTML) */}
            <h3 className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 text-sm md:text-base uppercase tracking-wide rounded-sm transition-all duration-500 group-hover:bg-black/70">
              {collection.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
