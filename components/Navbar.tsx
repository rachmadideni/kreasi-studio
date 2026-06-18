"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Ripple from "./Ripple";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/[0.06]"
          : "bg-white/70 backdrop-blur-xl"
      )}
    >
      <div className="max-w-[980px] mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-12">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-[#1D1D1F] rounded-[8px] flex items-center justify-center">
              <span className="text-white font-semibold text-xs">K</span>
            </div>
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-[#1D1D1F]">
              Kreasi Studio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-[12px] font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#0071E3]"
                    : "text-[#1D1D1F]/70 hover:text-[#1D1D1F]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Ripple className="rounded-full">
              <Link
                href="/contact"
                className="inline-flex px-4 py-1.5 bg-[#0071E3] text-white text-[12px] font-medium rounded-full hover:bg-[#0077ED] transition-colors duration-200"
              >
                Hubungi Kami
              </Link>
            </Ripple>
          </div>

          <button
            className="md:hidden p-1.5 text-[#1D1D1F]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-xl border-b border-black/[0.06]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "block py-2.5 text-[14px] font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-[#0071E3]"
                    : "text-[#1D1D1F]/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Ripple className="rounded-full">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center mt-3 px-5 py-2.5 bg-[#0071E3] text-white text-[13px] font-medium rounded-full"
              >
                Hubungi Kami
              </Link>
            </Ripple>
          </div>
        </div>
      )}
    </nav>
  );
}
