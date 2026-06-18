import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description:
      "Kami tidak hanya membangun produk, tapi solusi yang menghasilkan dampak nyata bagi bisnis.",
  },
  {
    icon: Eye,
    title: "Transparansi",
    description:
      "Komunikasi terbuka di setiap tahap proyek. Anda selalu tahu progress dan tantangan yang ada.",
  },
  {
    icon: Heart,
    title: "Passion for Quality",
    description:
      "Kami tidak puas dengan yang biasa-biasa saja. Setiap baris kode dirancang dengan teliti.",
  },
];

const team = [
  {
    name: "Adi Prasetyo",
    role: "Founder & CEO",
    description:
      "10+ tahun pengalaman di bidang software engineering dan IT consulting.",
  },
  {
    name: "Rina Wulandari",
    role: "CTO",
    description:
      "Expert dalam cloud architecture dan AI/ML dengan pengalaman di startup & enterprise.",
  },
  {
    name: "Budi Santoso",
    role: "Lead Developer",
    description:
      "Full-stack developer yang ahli dalam React, Node.js, dan mobile development.",
  },
  {
    name: "Maya Putri",
    role: "UI/UX Designer",
    description:
      "Desainer yang berfokus pada user experience dan design system yang konsisten.",
  },
];

const milestones = [
  { year: "2019", event: "Kreasi Studio didirikan" },
  { year: "2020", event: "10+ proyek selesai" },
  { year: "2022", event: "Tim berkembang menjadi 15 orang" },
  { year: "2024", event: "50+ klien puas" },
  { year: "2026", event: "Ekspansi ke AI/ML Solutions" },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Tentang"
        highlight="Kreasi Studio"
        description="Kami adalah tim passionate yang berkomitmen membantu bisnis Anda tumbuh melalui solusi teknologi yang inovatif."
      />

      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Visi & Misi
              </p>
              <h2 className="h2-apple text-[#1D1D1F] mb-6">
                Teknologi sebagai Enabler
              </h2>
              <p className="body-apple text-[#636366] mb-4">
                Kreasi Studio hadir dengan visi untuk menjadi partner IT
                terpercaya bagi bisnis di Indonesia. Kami percaya bahwa
                teknologi harus menjadi enabler, bukan penghalang.
              </p>
              <p className="body-apple text-[#636366]">
                Misi kami adalah menyediakan solusi IT yang tidak hanya
                fungsional, tetapi juga scalable, maintainable, dan
                memberikan ROI yang jelas bagi setiap klien.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, value: "50+", label: "Proyek Selesai" },
                { icon: Users, value: "15+", label: "Tim Ahli" },
                { icon: TrendingUp, value: "7", label: "Tahun Pengalaman" },
                { icon: Target, value: "100%", label: "Komitmen Kualitas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-[#F5F5F7] rounded-[16px] text-center"
                >
                  <stat.icon
                    className="text-[#0071E3] mx-auto mb-3"
                    size={24}
                    strokeWidth={1.5}
                  />
                  <div className="text-[28px] font-bold text-[#1D1D1F] tracking-[-0.02em]">
                    {stat.value}
                  </div>
                  <div className="caption-apple text-[#636366]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Nilai-Nilai
              </p>
              <h2 className="h2-apple text-[#1D1D1F]">Yang Kami Pegang</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="p-7 bg-white/80 backdrop-blur-sm rounded-[16px] border border-black/[0.06] text-center"
                >
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-[12px] flex items-center justify-center mx-auto mb-5">
                    <value.icon
                      className="text-[#1D1D1F]"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="h3-apple text-[#1D1D1F] mb-2 text-[16px]">
                    {value.title}
                  </h3>
                  <p className="caption-apple text-[#636366]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Perjalanan
              </p>
              <h2 className="h2-apple text-[#1D1D1F]">Kisah Kami</h2>
            </div>
            <div className="max-w-[480px] mx-auto">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex gap-5 mb-6 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#0071E3] rounded-full flex items-center justify-center text-white text-[12px] font-semibold">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-black/[0.08] mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-[12px] font-semibold text-[#0071E3] mb-0.5">
                      {milestone.year}
                    </div>
                    <div className="body-apple text-[#1D1D1F]">
                      {milestone.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Tim
              </p>
              <h2 className="h2-apple text-[#1D1D1F]">Orang-Orang Hebat</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="p-6 bg-[#F5F5F7] rounded-[16px] text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-black/[0.06]">
                    <span className="text-xl font-semibold text-[#0071E3]">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-0.5">
                    {member.name}
                  </h3>
                  <div className="text-[12px] text-[#0071E3] font-medium mb-2">
                    {member.role}
                  </div>
                  <p className="caption-apple text-[#636366]">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ingin Bergabung?"
        description="Kami selalu mencari talenta terbaik untuk bergabung bersama membangun solusi IT yang inovatif."
        buttonText="Hubungi Kami"
        buttonHref="/contact"
      />
    </>
  );
}
