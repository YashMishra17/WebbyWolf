"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 z-50 backdrop-blur-lg bg-white/60 border-b border-white/20 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#0546D2]">
          WebbyWolf
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="group text-sm font-medium text-gray-700 hover:text-[#0546D2] relative"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#0546D2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#0546D2] text-white font-semibold"
          >
            Hire Us
          </Link>
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden bg-white/90 backdrop-blur-lg border-t border-white/20"
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-700 font-medium border-b border-gray-100/40"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 px-4 py-3 bg-[#0546D2] text-white text-center rounded-lg"
            >
              Hire Us
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
