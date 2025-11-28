"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import MagicButton from "./magic-button";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -60]); // parallax for hero image

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    // Split headline into words
    const words = el.innerText.split(" ");
    el.innerHTML = words
      .map((w) => `<span class="hero-word inline-block mr-2">${w}</span>`)
      .join(" ");

    // Create GSAP timeline
    const tl = gsap.timeline();
    tl.from(".hero-word", {
      opacity: 0,
      y: 40,
      stagger: 0.08,
      duration: 0.6,
      ease: "power3.out",
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1
            ref={headlineRef}
            className="text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Build Stunning Digital Experiences
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Pixel-perfect UI, performant code, and advanced animations that feel
            premium.
          </p>
          <div className="mt-6 flex gap-4">
            <MagicButton>Get Started</MagicButton>
            <button className="px-6 py-3 rounded-lg border border-gray-300">
              Learn More
            </button>
          </div>
        </div>

        <motion.div style={{ y }}>
          <Image
            src="/hero-img.png"
            alt="hero"
            width={700}
            height={700}
            priority
            className="rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
