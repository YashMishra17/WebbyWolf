export default function PerformancePage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-900">Performance Optimization</h1>

      <p className="mt-4 text-gray-600 text-lg leading-relaxed">
        The core objective was to drastically reduce load times and improve runtime efficiency.
        Through fine-tuning of asset delivery, server-side rendering, and caching strategy,
        we achieved a 47% performance boost.
      </p>

      <h2 className="text-2xl font-semibold mt-10">Optimization Techniques</h2>
      <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
        <li>Advanced code-splitting via Next.js dynamic imports</li>
        <li>Static asset compression (Gzip + Brotli)</li>
        <li>Reduced bundle size by eliminating unused JS</li>
        <li>Implemented Smart Caching + CDN Edge Delivery</li>
      </ul>

      <p className="mt-10 text-gray-600">
        The final experience felt instant, even on slower networks and devices.
      </p>
    </div>
  );
}
