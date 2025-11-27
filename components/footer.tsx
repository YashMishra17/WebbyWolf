// components/footer.tsx
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex justify-between items-center">
        <div>© {new Date().getFullYear()} WebbyWolf — Demo</div>
        <div>Built with Next.js & Tailwind</div>
      </div>
    </footer>
  );
}
