"use client";

import Image from "next/image";
import banner from "@/assets/banner.png";
import Link from "next/link";
import Lottie from "lottie-react";
// import animalAnimation from "@/assets/cow-animation.json"; // Tomar download kora JSON path

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:h-[80vh] mx-auto flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="max-w-xl text-white text-center md:text-left order-2 md:order-1">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-400 mb-4 leading-tight">
            Buy Qurbani Animals Easily
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-200">
            Find the best animals for your Qurbani this Eid and experience a hassle-free booking process from home. 🐄
          </p>

          <Link href={'/all-animals'}>
            <button className="btn btn-success btn-lg text-white w-full sm:w-auto shadow-lg hover:scale-105 transition-transform">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Lottie Animation Side */}
        <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] order-1 md:order-2">
          {/* <Lottie 
            animationData={animalAnimation} 
            loop={true} 
            className="drop-shadow-2xl"
          /> */}
        </div>

      </div>
    </section>
  );
}