"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface HeroProps {
  title: string;
  highlight?: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export default function Hero({
  title,
  highlight,
  description,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={clsx(
        "pt-40 pb-24 px-6 sm:px-8 bg-[#F5F5F7]",
        className
      )}
    >
      <div className="max-w-[720px] mx-auto text-center">
        <h1 className="h1-apple text-[#1D1D1F] animate-slide-up">
          {title}
          {highlight && (
            <>
              <br />
              <span className="bg-gradient-to-r from-[#0071E3] to-[#2997FF] bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </h1>
        <p
          className="mt-6 body-apple text-[#636366] max-w-[520px] mx-auto animate-slide-up"
          style={{ animationDelay: "100ms" }}
        >
          {description}
        </p>
        {children && (
          <div
            className="mt-10 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
