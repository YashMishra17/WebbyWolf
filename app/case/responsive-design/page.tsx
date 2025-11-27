export default function ResponsiveDesignPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-900">Responsive Design</h1>

      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        In this project, our goal was to ensure a seamless experience across all devices — 
        from ultra-wide monitors to compact mobile screens. We utilized fluid grids, 
        adaptive components, and CSS clamp() to ensure perfect scaling.
      </p>

      <h2 className="text-2xl font-semibold mt-10">Our Approach</h2>
      <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
        <li>Mobile-first architecture</li>
        <li>Flexible grid layout with CSS Grid & Flexbox</li>
        <li>Adaptive images optimized with Next.js Image</li>
        <li>Perfect spacing using REM-based scaling</li>
      </ul>

      <p className="mt-10 text-gray-600">
        This ensured the interface remained visually consistent, accessible, and easy to navigate across every device.
      </p>
    </div>
  );
}
