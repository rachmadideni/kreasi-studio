import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <>
      <Hero
        title="Portfolio"
        highlight="Kami"
        description="Proyek-proyek yang telah kami kerjakan untuk berbagai klien di berbagai industri."
      />

      <PortfolioGrid />

      <CTASection
        title="Ingin Proyek Serupa?"
        description="Ceritakan visi Anda. Kami siap membantu mewujudkannya."
        buttonText="Mulai Diskusi"
      />
    </>
  );
}
