import Image from 'next/image';

export default function CollectionSection() {
  const items = [
    { title: 'Spring Collection', image: '/pic4.JPG' },
    { title: 'Fall & Winter', image: '/pic2.JPG' },
    { title: 'Bridal & Evening', image: '/pic3.JPG' },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl tracking-wider mb-3">New Arrivals</h2>
        <p className="text-base text-gray-600 mb-12">
          Discover our latest designs where sophistication meets timeless elegance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={600}
                className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
