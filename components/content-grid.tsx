"use client";
import Image from "next/image";
import Link from "next/link";

export default function ContentGrid() {
  const cards = [
    { 
      img: "/card-1.png", 
      title: "Responsive Design",
      description:
        "We delivered a fully responsive system that adapts fluidly across all breakpoints, ensuring the product feels native on every device—from ultra-wide monitors to compact mobile screens.",
      link: "/work/responsive" 
    },
    { 
      img: "/card-2.png", 
      title: "Performance",
      description:
        "Using advanced code-splitting, asset minification, and optimized rendering paths, we boosted load speeds by 47%. The result is a frictionless, instant-feeling user experience.",
      link: "/work/performance" 
    },
    { 
      img: "/card-3.png", 
      title: "Pixel Perfect",
      description:
        "Every layout, component, and micro-interaction was crafted to perfectly match UI spec. We refined spacing, alignment, and motion to achieve a clean, premium visual finish.",
      link: "/work/pixel-perfect" 
    },
  ];

  return (
    <div>
      <a className="text-brand text-sm" href="#">Featured</a>

      <h2 className="h1-design text-2xl mt-3">Our work</h2>

      <p className="text-gray-600 mt-4 max-w-2xl">
        Selected case studies showing our approach.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all bg-white"
          >
            <Image
              src={c.img}
              alt={c.title}
              width={800}
              height={220}
              style={{ objectFit: "cover", width: "100%", height: "220px" }}
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{c.title}</h3>

              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {c.description}
              </p>

              <Link
                href={c.link}
                className="text-brand mt-3 inline-block font-medium hover:opacity-80"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
const cards = [
  { 
    img: "/card-1.png",
    title: "Responsive Design",
    description:
      "We delivered a fully responsive system that adapts fluidly across all breakpoints, ensuring the product feels native on every device—from ultra-wide monitors to compact mobile screens.",
    link: "/case/responsive-design"
  },
  { 
    img: "/card-2.png",
    title: "Performance",
    description:
      "Using advanced code-splitting, asset minification, and optimized rendering paths, we boosted load speeds by 47%. The result is a frictionless, instant-feeling user experience.",
    link: "/case/performance"
  },
  { 
    img: "/card-3.png",
    title: "Pixel Perfect",
    description:
      "Every layout, component, and micro-interaction was crafted to perfectly match UI spec. We refined spacing, alignment, and motion to achieve a clean, premium visual finish.",
    link: "/case/pixel-perfect"
  },
];
