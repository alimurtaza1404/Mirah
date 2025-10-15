import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/pic1.JPG"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>
      <div className="relative z-10 max-w-xl flex flex-col items-center justify-center translate-y-16">
        <h1 className="font-heading text-5xl tracking-wider mb-2">Luxury Modest Fashion</h1>
        <p className="text-lg mb-6">Where modern silhouettes meet timeless elegance.</p>
        <button className="bg-[#c6b197] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#b79d82] transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}