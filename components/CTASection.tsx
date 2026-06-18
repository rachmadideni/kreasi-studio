"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Ripple from "./Ripple";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = "Hubungi Kami",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 px-6 sm:px-8 bg-[#F5F5F7]">
      <div className="max-w-[640px] mx-auto text-center">
        <h2 className="h2-apple text-[#1D1D1F] mb-4">{title}</h2>
        <p className="body-apple text-[#636366] mb-10">{description}</p>
        <Ripple className="inline-flex rounded-full">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#0071E3] text-white text-[14px] font-medium rounded-full hover:bg-[#0077ED] transition-all duration-200 hover:shadow-lg hover:shadow-[#0071E3]/20"
          >
            {buttonText}
            <ArrowRight size={15} strokeWidth={2} />
          </Link>
        </Ripple>
      </div>
    </section>
  );
}
