"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "../app/globals.css"

export default function Navbar() {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const lastScrollY = useRef(0);
  const threshold = 20; // Ignore micro scrolls

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transparent at top
      setIsAtTop(currentScrollY < 50);

      // Scrolling down
      if (currentScrollY > lastScrollY.current + threshold) {
        setIsVisible(false);
      }

      // Scrolling up
      else if (currentScrollY < lastScrollY.current + threshold) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 bg-transparent py-14 px-40 z-50 text-white w-full transition-all duration-300 
                    ${isVisible ? "translate-y-0":"-translate-y-full"} 
                    ${isAtTop ? "bg-transport":"bg-slate-950/80 backdrop-blur-lg shadow-lg z-100"}`}>
        <div className="flex items-center justify-between">
            <Link className="nav-link" href="/">HOME</Link>
            <Link className="nav-link" href="/experience">EXPERIENCE</Link>
            <Link className="nav-link" href="/projects">PROJECTS</Link>
            <Link className="nav-link" href="/contact">CONTACT</Link>        
        </div>
      
    </nav>
  );
}

