"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import "../app/globals.css"

const links = [
  { name: 'HOME', href: '/' },
  { name: 'EXPERIENCE', href: '/experience' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CONTACT', href: '/contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
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
    <nav className={`fixed top-0 bg-transparent px-6 py-4 z-50 text-white w-full transition-all duration-300 
                    ${isVisible ? "translate-y-0":"-translate-y-full"} 
                    ${isAtTop ? "bg-slate-950/80 backdrop-blur-lg shadow-lg z-100":"bg-slate-950/80 backdrop-blur-lg shadow-lg z-100"}
                    | md:py-10 md:px-40`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="https://dominichart.com/" className="md:hidden">
            <Image src={"/images/icons/HSS-logo.webp"} alt="" width={40} height={40}/>
          </a>
          

          {/* Desktop Links */}
          <div id="nav-links" className="hidden space-x-6 | md:flex md:justify-between md:w-full">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-indigo-600 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 hover:text-indigo-600 transition"
            >
              {open ? <Image src={"/images/icons/x-icon.svg"} alt="x icon" width={24} height={24}/> 
                      : <Image src={"/images/icons/menu-icon.svg"} alt="menu icon" width={24} height={24}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div>
          <div className="px-4 py-4 space-y-2 justify-items-center | md:hidden">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white font-light pt-6"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex justify-between mt-10">
            <div className="text-white text-xs font-light">
              <p>+1 (246) 835-6621</p>
              <p>dominic.am.hart@gmail.com</p>
            </div>
              <div className="flex flex-row text-white">
                <a className="smooth-scale-110" href="https://github.com/domhart98" target="_blank" rel="noopener noreferrer">
                  <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/github-logo.svg" alt="github icon" width={60} height={60}/>
                </a>
                <a className="smooth-scale-110" href="https://www.facebook.com/dominic.hart.35/" target="_blank" rel="noopener noreferrer">
                  <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/facebook-logo.svg" alt="github icon" width={60} height={60}/>
                </a>
                <a className="smooth-scale-110" href="https://www.linkedin.com/in/dominic-am-hart/" target="_blank" rel="noopener noreferrer">
                  <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/linkedin-logo.svg" alt="github icon" width={60} height={60}/>
                </a>
              </div>
            </div>
        </div>
      )}
    </nav>
  )
}