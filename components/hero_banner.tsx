'use client';

import Image from "next/image";
import headshot from "../public/images/Passport_Pic_March_2026_transparent.png";
import "./hero_banner.css";
import { useEffect } from "react";
import Typewriter from "./typewriter";

/**
 * HeroBanner Parameters
 * @param {string} title - Main header text
 * @param {string} subtitle - sub header text
 * @param {string} description - supporting text 
 * @param {string} ctaText - Call-to-action button text
 * @param {string} ctaLink - Call-to-action button link
 * @param {string} imageSrc - Background or side image
 */

export default function Hero_Banner({title, subtitle, description, ctaLink, ctaText}) {
  return (
    <section className="relative text-slate-300 bg-[url('/images/aurora-gradient-5.webp')] pt-20 border-solid border-x-1 border-t-1 border-white mx-4 mt-4 rounded-xl">
      <div className="columns-2 gap-6 px-40">
        
        {/* Text Section */}
        <div className="pt-40">
          <h1 className="text-6xl md:text-7xl font-medium text-white">
            {title}
          </h1>
          <h4 className="text-3xl md:text-4xl text-gradient-custom">
            <Typewriter></Typewriter>
          </h4>
          
          <p className="py-10 font-light">{description}</p>
          <button className="mb-6 text-white font-medium py-4 px-4 rounded-full smooth-scale-110 bg-gradient-custom px-8">
            <a href={ctaLink} className="test">{ctaText}</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="pt-20 justify-items-center">
          <Image
            src={headshot}
            alt="Hero banner illustration"
            width={600}
            height={400}
            className=""
            priority
          />
        </div>

        
      </div>
      <div className="absolute -bottom-20 left-0 w-full h-80 bg-[url('/images/aurora-gradient-5-flipped.jpg')] blur-[40px] opacity-50 
                      pointer-events-none -z-10"/>
      
    </section>
  );
}