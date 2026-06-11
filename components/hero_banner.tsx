'use client';

import Image from "next/image";
import headshot from "../public/images/Passport_Pic_March_2026_transparent.png";
import "./hero_banner.css";
import { useEffect } from "react";
import Typewriter from "./typewriter";

interface HeroBannerProps{
  title: string,
  subtitle: string,
  description: string,
  ctaLink: string,
  ctaText: string,
}

export default function HeroBanner({title, subtitle, description, ctaLink, ctaText}: HeroBannerProps) {
  return (
    <section className="relative text-slate-300 bg-[url('/images/aurora-gradient-5.webp')] pt-20 border-solid border-x-1 border-t-1 border-white mx-2 mt-2 rounded-xl | md:mx-4 md:mt-4">
      <div className="relative gap-6 px-6 | md:grid md:grid-cols-[3fr_2fr] md:px-20 md:gap-12 | lg:px-40">
        
        {/* Text Section */}
        <div className="@container relative pt-16 | md:pt-40">
          <h1 className="text-4xl font-medium text-white | md:text-7xl">
            {title}
          </h1>
          <h4 className="text-2xl text-gradient-custom | md:text-4xl">
            <Typewriter></Typewriter>
          </h4>
          <div className="flex flex-col @max-md:items-center | md:items-left">
            <p className="py-6 font-light text-xs w-full text-justify | md:py-10 md:text-[1rem]">
              {description}
            </p>
            <button className="w-[40%] text-white text-sm py-3 px-5 mb-2 rounded-full smooth-scale-110 bg-gradient-custom | md:py-4 md:px-8 md:mb-20 md:mt-2 md:text-lg md:w-[30%]">
              <a href={ctaLink} className="test">{ctaText}</a>
            </button>
          </div> 
          
        </div>

        {/* Image Section */}
        <div className="relative flex justify-items-center | md:items-end">
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