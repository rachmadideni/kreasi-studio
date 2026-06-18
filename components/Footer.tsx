import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Apps", href: "/services" },
    { label: "Cloud & Infrastructure", href: "/services" },
    { label: "AI/ML Solutions", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1F] text-white">
      <div className="max-w-[980px] mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-white rounded-[8px] flex items-center justify-center">
                <span className="text-[#1D1D1F] font-semibold text-xs">
                  K
                </span>
              </div>
              <span className="text-[17px] font-semibold tracking-[-0.02em]">
                Kreasi Studio
              </span>
            </Link>
            <p className="text-[13px] text-[#98989D] leading-relaxed mb-5">
              Solusi IT terpercaya untuk mengakselerasi transformasi digital
              bisnis Anda.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:hello@kreasi-studio.id"
                className="flex items-center gap-2.5 text-[12px] text-[#98989D] hover:text-white transition-colors duration-200"
              >
                <Mail size={13} strokeWidth={1.5} /> hello@kreasi-studio.id
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-2.5 text-[12px] text-[#98989D] hover:text-white transition-colors duration-200"
              >
                <Phone size={13} strokeWidth={1.5} /> +62 812-3456-7890
              </a>
              <div className="flex items-center gap-2.5 text-[12px] text-[#98989D]">
                <MapPin size={13} strokeWidth={1.5} /> Jakarta, Indonesia
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[12px] font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#98989D] hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
        <div className="max-w-[980px] mx-auto px-6 sm:px-8 py-5">
          <p className="text-center text-[12px] text-[#98989D]">
            &copy; {new Date().getFullYear()} Kreasi Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
