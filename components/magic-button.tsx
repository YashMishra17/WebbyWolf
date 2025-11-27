"use client";

import { motion } from "framer-motion";
import React from "react";

interface MagicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MagicButton({ children, onClick, className }: MagicButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </motion.button>
  );
}
