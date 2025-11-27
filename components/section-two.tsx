'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SectionTwo() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <a className="text-brand text-sm font-medium" href="#">Why choose us</a>
        <h2 className="h1-design text-2xl mt-3">We design fast, beautiful interfaces</h2>
        <p className="text-gray-600 mt-4 max-w-md">We focus on accessibility, performance and pixel-perfect execution so recruiters love your work.</p>

        <div className="mt-8 space-y-4">
          {[1,2,3].map(i => (
            <motion.div key={i} whileHover={{ y: -4 }} className="flex gap-4 items-start">
              <div className="w-20 h-14 bg-gray-100 rounded-md overflow-hidden">
                <Image src="/card-1.png" alt="thumb" width={160} height={100} style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h3 className="font-semibold">Feature {i}</h3>
                <p className="text-sm text-gray-600">Short description that matches the design layout and spacing.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="h-80 md:h-[420px]">
        <Image src="/section-img.png" alt="section image" width={800} height={1000} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
}
