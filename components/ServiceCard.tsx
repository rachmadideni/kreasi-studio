import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  types?: string[];
  children?: ReactNode;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  types,
  children,
}: ServiceCardProps) {
  return (
    <div className="group relative p-7 bg-gradient-to-br from-white via-white to-[#F0F7FF] rounded-[16px] border border-[#0071E3]/10 hover:border-[#0071E3]/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#0071E3]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2997FF]/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-500" />

      <div className="relative">
        <div className="w-11 h-11 bg-[#0071E3]/10 rounded-[12px] flex items-center justify-center mb-5 group-hover:bg-[#0071E3]/15 transition-colors duration-300">
          <Icon className="text-[#0071E3]" size={20} strokeWidth={1.5} />
        </div>
        <h3 className="h3-apple text-[#1D1D1F] mb-2">{title}</h3>
        <p className="body-apple text-[#636366] text-[15px] mb-4">
          {description}
        </p>
        {types && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {types.map((type) => (
              <span
                key={type}
                className="px-2.5 py-1 bg-[#0066CC]/8 text-[#0066CC] text-[11px] font-medium rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
