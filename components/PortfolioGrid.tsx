"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Ripple from "@/components/Ripple";

const categories = ["All", "Web", "Mobile", "Cloud", "AI/ML"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web",
    description:
      "Platform e-commerce full-featured dengan payment gateway, inventory management, dan analytics dashboard.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Midtrans"],
    color: "bg-[#0071E3]",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile",
    description:
      "Aplikasi mobile untuk booking dokter, konsultasi online, dan manajemen rekam medis pasien.",
    tags: ["React Native", "Firebase", "Node.js"],
    color: "bg-[#34C759]",
  },
  {
    title: "Cloud Migration - Fintech",
    category: "Cloud",
    description:
      "Migrasi infrastruktur on-premise ke AWS untuk perusahaan fintech dengan zero downtime.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
    color: "bg-[#FF9500]",
  },
  {
    title: "AI Customer Service",
    category: "AI/ML",
    description:
      "Chatbot AI yang melayani 10,000+ pelanggan dengan integrasi ke sistem CRM existing.",
    tags: ["OpenAI", "LangChain", "Python", "FastAPI"],
    color: "bg-[#AF52DE]",
  },
  {
    title: "Restaurant Ordering App",
    category: "Mobile",
    description:
      "Aplikasi pemesanan makanan online dengan fitur real-time tracking dan loyalty program.",
    tags: ["Flutter", "Firebase", "Stripe"],
    color: "bg-[#FF2D55]",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web",
    description:
      "Dashboard analytics real-time untuk SaaS platform dengan visualisasi data interaktif.",
    tags: ["React", "D3.js", "Go", "ClickHouse"],
    color: "bg-[#5856D6]",
  },
  {
    title: "Predictive Inventory System",
    category: "AI/ML",
    description:
      "Sistem prediksi stok barang menggunakan machine learning untuk retail chain 50+ outlet.",
    tags: ["Python", "TensorFlow", "PostgreSQL"],
    color: "bg-[#FF9500]",
  },
  {
    title: "DevOps Pipeline Setup",
    category: "Cloud",
    description:
      "Setup CI/CD pipeline lengkap untuk tim development 20+ developer dengan automated testing.",
    tags: ["GitHub Actions", "Docker", "AWS"],
    color: "bg-[#8E8E93]",
  },
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 px-6 sm:px-8">
      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1D1D1F] text-white"
                  : "bg-[#F5F5F7] text-[#636366] hover:text-[#1D1D1F]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-[16px] border border-black/[0.06] overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
            >
              <div
                className={`h-44 ${project.color} flex items-center justify-center`}
              >
                <span className="text-white text-5xl font-bold opacity-20">
                  {project.title[0]}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[16px] font-semibold text-[#1D1D1F] tracking-[-0.015em]">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={14}
                    className="text-[#636366] group-hover:text-[#0071E3] transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="inline-block px-2.5 py-0.5 bg-[#F5F5F7] text-[#636366] text-[11px] font-medium rounded-full mb-3">
                  {project.category}
                </span>
                <p className="caption-apple text-[#636366] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#F5F5F7] text-[#636366] text-[11px] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
