import {
  Globe,
  Smartphone,
  Cloud,
  Brain,
  CheckCircle,
} from "lucide-react";
import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Kami membangun website modern yang cepat, responsif, dan SEO-friendly. Dari company profile hingga e-commerce complex.",
    types: ["Internal App", "Landing Page", "E-Commerce", "Company Profile"],
    features: [
      "Custom design sesuai brand identity",
      "Responsive untuk semua device",
      "SEO optimized untuk visibilitas maksimal",
      "Performa tinggi dengan Core Web Vitals",
      "Integrasi payment gateway & API",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Aplikasi mobile native dan cross-platform dengan UX yang intuitif. Kami bangun apps yang users love.",
    types: ["Internal App", "Customer App", "E-Commerce App"],
    features: [
      "Cross-platform (iOS & Android) atau native",
      "UI/UX yang intuitif dan engaging",
      "Offline capability",
      "Push notification & analytics",
      "App Store & Play Store deployment",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Migrasi ke cloud, optimasi infrastruktur, dan setup DevOps untuk operasional yang lebih efisien.",
    types: ["Cloud Migration", "DevOps Setup", "Server Management"],
    features: [
      "Cloud migration & setup",
      "CI/CD pipeline automation",
      "Container orchestration",
      "Monitoring & alerting",
      "Cost optimization",
    ],
  },
  {
    icon: Brain,
    title: "AI/ML Solutions",
    description:
      "Solusi kecerdasan buatan untuk otomasi proses, prediksi, analisis data, dan personalisasi pelanggan.",
    types: ["Chatbot", "Automation", "Analytics", "Custom Model"],
    features: [
      "Custom AI chatbot & virtual assistant",
      "Predictive analytics",
      "Natural Language Processing",
      "Computer vision solutions",
      "AI-powered automation workflows",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Konsultasi",
    description: "Diskusi kebutuhan, goals, dan tantangan bisnis Anda.",
  },
  {
    step: "02",
    title: "Analisis & Planning",
    description: "Analisis requirement dan merancang solusi teknis terbaik.",
  },
  {
    step: "03",
    title: "Desain",
    description: "Wireframe, mockup, dan design system yang presisi.",
  },
  {
    step: "04",
    title: "Development",
    description: "Agile development dengan sprint review berkala.",
  },
  {
    step: "05",
    title: "Testing & QA",
    description: "Quality assurance menyeluruh sebelum deployment.",
  },
  {
    step: "06",
    title: "Launch & Support",
    description: "Deployment dan dukungan teknis pasca-launch.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Layanan"
        highlight="Kami"
        description="Solusi IT end-to-end untuk mengakselerasi transformasi digital bisnis Anda."
      />

      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-[980px] mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="p-8 bg-white rounded-[16px] border border-black/[0.06]">
                  <div className="w-12 h-12 bg-[#F5F5F7] rounded-[12px] flex items-center justify-center mb-5">
                    <service.icon
                      className="text-[#0071E3]"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="h3-apple text-[#1D1D1F] mb-2">
                    {service.title}
                  </h3>
                  <p className="body-apple text-[#636366] text-[15px] mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.types.map((type) => (
                      <span
                        key={type}
                        className="px-2.5 py-1 bg-[#F5F5F7] text-[#636366] text-[11px] font-medium rounded-full"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[14px] text-[#636366]"
                      >
                        <CheckCircle
                          size={15}
                          className="text-[#0071E3] mt-0.5 shrink-0"
                          strokeWidth={1.5}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={`${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <div className="aspect-[4/3] bg-[#F5F5F7] rounded-[16px] flex items-center justify-center border border-black/[0.06]">
                  <div className="text-center p-8">
                    <service.icon
                      className="text-[#0071E3] mx-auto mb-4"
                      size={48}
                      strokeWidth={1}
                    />
                    <h3 className="text-[20px] font-semibold text-[#1D1D1F] tracking-[-0.02em] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-[#636366]">
                      {service.types.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 bg-[#F5F5F7]">
        <div className="max-w-[980px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
              Proses
            </p>
            <h2 className="h2-apple text-[#1D1D1F] mb-4">
              Cara Kerja Kami
            </h2>
            <p className="body-apple text-[#636366] max-w-[480px] mx-auto">
              Proses yang terstruktur untuk memastikan kualitas dan efisiensi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative p-7 bg-white rounded-[16px] border border-black/[0.06]"
              >
                <div className="text-[48px] font-bold text-[#0071E3]/10 absolute top-4 right-5 leading-none">
                  {step.step}
                </div>
                <h3 className="h3-apple text-[#1D1D1F] mb-2 relative text-[16px]">
                  {step.title}
                </h3>
                <p className="caption-apple text-[#636366] relative">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Butuh Solusi IT yang Tepat?"
        description="Ceritakan kebutuhan bisnis Anda. Kami akan membantu menemukan solusi terbaik."
        buttonText="Diskusi Gratis"
      />
    </>
  );
}
