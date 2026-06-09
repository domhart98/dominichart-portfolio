"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  imgSources: string[];
}

export default function ResumeEntry({
  imgSources,
}: CarouselProps) {

  const [activeSlide, setActiveSlide] = useState(0);

  console.log(imgSources);
  console.log(activeSlide);
  console.log(imgSources[activeSlide]);

  return (
    <div className="relative max-w-5xl mx-auto">
        {/* Image */}
        <div className="w-[800px] h-[450px] overflow-hidden rounded-2xl
                        border border-white/10 bg-white/[0.03] 
                        backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,.15)]
                        transition-all duration-500">
            <Image className="w-full h-full object-cover" 
                   src={imgSources[activeSlide]} alt="" width={800} height={450}/>
        </div>
        {/* Previous */}
        <button
            onClick={() =>
                setActiveSlide(activeSlide === 0 ? imgSources.length - 1 : activeSlide - 1)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50
                       backdrop-blur-sm text-white transition-all duration-300 hover:bg-purple-500">
            ←
        </button>
        {/* After */}
        <button
            onClick={() =>
                setActiveSlide(activeSlide === imgSources.length - 1 ? 0 : activeSlide + 1)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50
                       backdrop-blur-sm text-white transition-all duration-300 hover:bg-purple-500">
            →
        </button>
        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-6">
            {imgSources.map((_, index) => (
            <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`
                h-2 rounded-full transition-all duration-300
                ${
                    activeSlide === index
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-white/20"
                }
                `}
            />
        ))}
        </div>
    </div>
  );
}