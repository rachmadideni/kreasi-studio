import Link from "next/link";
import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Ripple from "@/components/Ripple";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Website modern, cepat, dan responsif yang dirancang untuk mengkonversi pengunjung menjadi pelanggan.",
    types: ["Internal App", "Landing Page", "E-Commerce"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Aplikasi mobile iOS dan Android dengan performa tinggi dan pengalaman pengguna yang mulus.",
    types: ["Internal App", "Customer App"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Infrastruktur cloud yang scalable, aman, dan cost-effective untuk mendukung pertumbuhan bisnis.",
    types: ["Cloud Migration", "DevOps Setup"],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Solusi kecerdasan buatan untuk otomasi proses, analisis data, dan pengambilan keputusan yang lebih baik.",
    types: ["Chatbot", "Automation", "Analytics"],
  },
];

const whyUs = [
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description:
      "Tim developer dan engineer dengan pengalaman 5+ tahun di berbagai industri.",
  },
  {
    icon: Zap,
    title: "Teknologi Terkini",
    description:
      "Menggunakan tools dan framework terbaru untuk hasil yang optimal.",
  },
  {
    icon: Shield,
    title: "Kualitas Terjamin",
    description:
      "Testing menyeluruh dan dokumentasi lengkap di setiap proyek.",
  },
  {
    icon: CheckCircle,
    title: "Support 24/7",
    description:
      "Dukungan teknis setelah launch untuk memastikan sistem berjalan lancar.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Solusi IT untuk"
        highlight="Bisnis Anda"
        description="Kami membantu bisnis Anda tumbuh dengan solusi teknologi yang tepat sasaran. Dari web development hingga AI, kami hadir sebagai partner IT terpercaya."
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Ripple className="rounded-full">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3 bg-[#0071E3] text-white text-[14px] font-medium rounded-full hover:bg-[#0077ED] transition-all duration-200 hover:shadow-lg hover:shadow-[#0071E3]/20"
            >
              Mulai Proyek
            </Link>
          </Ripple>
          <Ripple className="rounded-full" color="rgba(0, 113, 227, 0.1)">
            <Link
              href="/portfolio"
              className="inline-flex px-7 py-3 bg-white text-[#1D1D1F] text-[14px] font-medium rounded-full border border-black/[0.08] hover:border-[#0071E3]/30 transition-all duration-200"
            >
              Lihat Portfolio
            </Link>
          </Ripple>
        </div>
      </Hero>

      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
              Layanan
            </p>
            <h2 className="h2-apple text-[#1D1D1F] mb-4">
              Solusi untuk Setiap Kebutuhan
            </h2>
            <p className="body-apple text-[#636366] max-w-[480px] mx-auto">
              Teknologi yang tepat untuk mengakselerasi pertumbuhan bisnis
              Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[#0071E3] text-[14px] font-medium hover:gap-2.5 transition-all duration-200"
            >
              Lihat Semua Layanan <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 bg-[#F5F5F7]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
              Keunggulan
            </p>
            <h2 className="h2-apple text-[#1D1D1F] mb-4">
              Mengapa Kreasi Studio?
            </h2>
            <p className="body-apple text-[#636366] max-w-[480px] mx-auto">
              Komitmen kami untuk memberikan yang terbaik bagi setiap klien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="relative text-center p-7 bg-gradient-to-br from-white via-white to-[#F0F7FF] rounded-[16px] border border-[#0071E3]/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#0071E3]/5 rounded-full -translate-y-10 translate-x-10" />
                <div className="relative">
                  <div className="w-12 h-12 bg-[#0071E3]/10 rounded-[12px] flex items-center justify-center mx-auto mb-5">
                    <item.icon
                      className="text-[#0071E3]"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="h3-apple text-[#1D1D1F] mb-2 text-[16px]">
                    {item.title}
                  </h3>
                  <p className="caption-apple text-[#636366]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Siap Memulai Proyek?"
        description="Konsultasikan kebutuhan IT Anda kepada kami. Tanpa biaya, tanpa komitmen."
        buttonText="Konsultasi Gratis"
      />
    </>
  );
}
