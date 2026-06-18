import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kreasi-studio.id",
    href: "mailto:hello@kreasi-studio.id",
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 812-3456-7890",
    href: "tel:+6281234567890",
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: "Jakarta, Indonesia",
    href: null,
  },
  {
    icon: Clock,
    label: "Jam Kerja",
    value: "Senin - Jumat, 09:00 - 18:00",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Hubungi"
        highlight="Kami"
        description="Siap memulai proyek atau punya pertanyaan? Jangan ragu untuk menghubungi kami."
      />

      <section className="py-24 px-6 sm:px-8">
        <div className="max-w-[980px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Kirim Pesan
              </p>
              <h2 className="h2-apple text-[#1D1D1F] mb-8">
                Mari Berbicara
              </h2>
              <ContactForm />
            </div>

            <div>
              <p className="text-[12px] font-semibold text-[#0066CC] uppercase tracking-wider mb-3">
                Kontak
              </p>
              <h2 className="h2-apple text-[#1D1D1F] mb-8">
                Informasi Kami
              </h2>
              <div className="space-y-5 mb-10">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F5F5F7] rounded-[10px] flex items-center justify-center shrink-0">
                      <item.icon
                        className="text-[#1D1D1F]"
                        size={17}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="text-[12px] text-[#636366] mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[15px] text-[#1D1D1F] font-medium hover:text-[#0071E3] transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[15px] text-[#1D1D1F] font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-[#F5F5F7] rounded-[16px]">
                <h3 className="text-[15px] font-semibold text-[#1D1D1F] mb-2">
                  Konsultasi Gratis
                </h3>
                <p className="caption-apple text-[#636366]">
                  Kami menawarkan sesi konsultasi gratis untuk membahas
                  kebutuhan IT Anda. Tanpa komitmen, langsung dapat insight
                  dan rekomendasi solusi yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
