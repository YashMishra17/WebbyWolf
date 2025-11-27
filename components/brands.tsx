'use client';
import Image from 'next/image';

export default function Brands() {
  const logos = ['/brand-1.png','/brand-2.png','/brand-3.png','/brand-4.png'];
  return (
    <div className="text-center py-10">
      <h3 className="h1-design text-xl md:text-2xl">Trusted by the best</h3>
      <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Companies that use our work</p>

      <div className="mt-10 grid grid-cols-3 md:grid-cols-4 gap-6 items-center">
        {logos.map((l,i) => (
          <div key={i} className="p-4 flex items-center justify-center">
            <Image src={l} alt={`logo-${i}`} width={140} height={48} style={{ objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
