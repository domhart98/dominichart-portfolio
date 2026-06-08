'use client';

import { useEffect, useState } from "react";

export default function Typewriter() {
  const titles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Security Analyst",
    "Cloud Enthusiast",
  ];

  const [text, setText] = useState("");
  const [currentTitle, setCurrentTitle] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(title.substring(0, text.length + 1));

        if (text === title) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(title.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, deleting, currentTitle]);

  return (
    <span className="text-gradient-custom">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}