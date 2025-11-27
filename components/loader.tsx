// components/loader.tsx
"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-brand border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  );
}

