"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Ripple from "./Ripple";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[12px] font-medium text-[#1D1D1F] mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-[10px] text-[14px] text-[#1D1D1F] placeholder:text-[#636366] focus:outline-none focus:border-[#0071E3]/30 focus:bg-white transition-all duration-200"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-[12px] font-medium text-[#1D1D1F] mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-[10px] text-[14px] text-[#1D1D1F] placeholder:text-[#636366] focus:outline-none focus:border-[#0071E3]/30 focus:bg-white transition-all duration-200"
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-[12px] font-medium text-[#1D1D1F] mb-2">
          Perusahaan
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-[10px] text-[14px] text-[#1D1D1F] placeholder:text-[#636366] focus:outline-none focus:border-[#0071E3]/30 focus:bg-white transition-all duration-200"
          placeholder="PT. Contoh Indonesia"
        />
      </div>
      <div>
        <label className="block text-[12px] font-medium text-[#1D1D1F] mb-2">
          Layanan yang Diminati
        </label>
        <select className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-[10px] text-[14px] text-[#1D1D1F] focus:outline-none focus:border-[#0071E3]/30 focus:bg-white transition-all duration-200 appearance-none">
          <option value="">Pilih layanan</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="cloud">Cloud & Infrastructure</option>
          <option value="ai">AI/ML Solutions</option>
          <option value="other">Lainnya</option>
        </select>
      </div>
      <div>
        <label className="block text-[12px] font-medium text-[#1D1D1F] mb-2">
          Pesan
        </label>
        <textarea
          rows={5}
          required
          className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-[10px] text-[14px] text-[#1D1D1F] placeholder:text-[#636366] focus:outline-none focus:border-[#0071E3]/30 focus:bg-white transition-all duration-200 resize-none"
          placeholder="Ceritakan tentang proyek atau kebutuhan Anda..."
        />
      </div>
      <Ripple className="rounded-full">
        <button
          type="submit"
          disabled={formStatus === "sending"}
          className="w-full sm:w-auto px-7 py-3 bg-[#0071E3] text-white text-[14px] font-medium rounded-full hover:bg-[#0077ED] transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0071E3]/20"
        >
          {formStatus === "sent" ? (
            "Terkirim!"
          ) : formStatus === "sending" ? (
            "Mengirim..."
          ) : (
            <>
              Kirim Pesan <Send size={14} strokeWidth={2} />
            </>
          )}
        </button>
      </Ripple>
    </form>
  );
}
