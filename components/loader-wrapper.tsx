// components/loader-wrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep loader for a short period to display animation, then show content.
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return <>{children}</>;
}
