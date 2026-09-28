"use client";

import { ScrollReveal } from "./interactive";

export function CtaSection() {
  return (
    <section className="bg-[#030844] py-10 lg:py-12 relative overflow-hidden">
      {/* Left-Aligned Ambient Purple Glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[var(--purple)] opacity-40 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10">
        <ScrollReveal selector=".cta-reveal" stagger={0.1}>
          <div className="cta-reveal flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
            
            <h2 className="font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2rem,3.5vw,2.75rem)] font-bold tracking-[-0.02em] leading-[1.2] text-white text-balance max-w-2xl m-0">
              Ready?
            </h2>
            
            <div className="shrink-0">
              <a 
                href="#" 
                className="inline-flex items-center justify-center h-12 lg:h-[52px] px-8 rounded-full bg-white text-[#030844] text-[15px] lg:text-[16px] font-semibold tracking-[-0.01em] hover:bg-white/90 transition-all duration-300"
              >
                Request a Demo <span className="ml-2 font-normal" aria-hidden="true">→</span>
              </a>
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
