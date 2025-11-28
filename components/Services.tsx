"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Web Development", desc: "Fast, modern, scalable websites.", icon: "💻" },
  { title: "UI/UX Design", desc: "Beautiful interfaces that convert.", icon: "🎨" },
  { title: "Brand Identity", desc: "Memorable brands and visual systems.", icon: "🚀" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Fix motion typing by using motion.div as HTMLMotionProps */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8"
        >
          What We Do
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/40 shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#0546D2] to-[#0A71FF] mb-4 text-2xl">
                {s.icon}
              </div>

              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-3">{s.desc}</p>

              <div className="mt-6 inline-flex items-center gap-2 text-[#0546D2] font-medium cursor-pointer">
                Learn more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
