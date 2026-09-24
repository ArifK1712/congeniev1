"use client";

import { Icon } from "./ui";
import { ScrollReveal } from "./interactive";

export function EnterpriseScaleSection() {
  const capabilities = [
    {
      title: "Multi-event management",
      icon: "layers" // or 'grid' if layers doesn't match perfectly, but layers is overlapping squares
    },
    {
      title: "Large attendee volumes",
      icon: "users"
    },
    {
      title: "Multi-language experiences",
      icon: "globe"
    },
    {
      title: "Custom workflows",
      icon: "sliders"
    },
    {
      title: "Roles & permissions",
      icon: "shield"
    },
    {
      title: "Multiple teams & stakeholders",
      icon: "people"
    }
  ];

  return (
    <section className="bg-[#fcfaff] py-16 lg:py-20 relative overflow-hidden border-t border-[#f0ebf9]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-[45%] shrink-0">
            <ScrollReveal selector=".scale-reveal" stagger={0.1}>
              <h2 className="scale-reveal font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.5rem,4vw,3.75rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#181521] text-balance">
                Ready for events <br className="hidden sm:block" />
                of every scale.
              </h2>
              
              <p className="scale-reveal mt-8 lg:mt-4 text-[1.125rem] text-[var(--muted)] leading-[1.65] max-w-lg">
                From single conferences to complex global event programs, ConGenie gives teams the flexibility and control to manage changing requirements with confidence.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Side: Grid */}
          <div className="w-full lg:w-[55%] shrink-0">
            <ScrollReveal selector=".scale-card-reveal" stagger={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
                {capabilities.map((cap) => (
                  <div 
                    key={cap.title}
                    className="scale-card-reveal bg-white border border-[#f0ebf9] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center hover:border-[var(--purple)] hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f4efff] text-[var(--purple)] flex items-center justify-center mb-4 shrink-0">
                      <Icon name={cap.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#181521] leading-snug tracking-[-0.01em]">
                      {cap.title}
                    </h3>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
