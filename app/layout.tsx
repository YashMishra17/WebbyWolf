// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import LoaderWrapper from "../components/loader-wrapper";
import Navbar from "../components/navbar";

export const metadata: Metadata = {
  title: "WebbyWolf Landing",
  description: "Pixel-perfect landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LoaderWrapper>{children}</LoaderWrapper>
      </body>
    </html>
  );
}



