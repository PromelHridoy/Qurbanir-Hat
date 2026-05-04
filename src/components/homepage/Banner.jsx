import Image from "next/image";
import banner from "@/assets/banner.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:h-[80vh]  mx-auto flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={banner}
          alt="banner"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-xl text-white text-center md:text-left" >
          <h1 className="font-bol text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4">
            Buy Qurbani Animals Easily
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 text-gray-200">
            Find the best animals for your Qurbani this Eid 🐄
          </p>

          <Link href={'all-animals'}>
          <button className="btn  btn-success w-full sm:w-auto">
            Explore Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}