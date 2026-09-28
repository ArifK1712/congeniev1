import { EventTypesSection } from "@/components/EventTypesSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { EnterpriseScaleSection } from "@/components/EnterpriseScaleSection";
import { CtaSection } from "@/components/CtaSection";
import { LifecycleSection } from "@/components/LifecycleSection";
import Image from "next/image";
import { Icon, Section } from "@/components/ui";
import { Header, HeroHeading, ScrollReveal } from "@/components/interactive";

const modules = [
  ["people", "Registration"],
  ["shield", "Vetting"],
  ["check", "Payments"],
  ["calendar", "Agenda"],
  ["badge", "Badges"],
  ["grid", "Exhibitors"],
  ["chat", "Communication"],
  ["people", "Meetings"],
  ["chart", "Reports"],
];
const heroBgHeadings = [
  "Conferences",
  "Exhibitions",
  "Corporate Events",
  "Webinars",
  "Associations",
  "Hybrid Events",
];
const bgMarqueeItems = [...heroBgHeadings, ...heroBgHeadings];



const coreCapabilities = [
  {
    title: "Registration & Attendees",
    desc: "Dynamic forms, attendee types, payments, approvals and complete attendee management.",
    img: "/images/registration_desk_v2.jpg",
    offset: ""
  },
  {
    title: "Exhibitors & Networking",
    desc: "Exhibitor management, meeting scheduler, leads and networking experiences.",
    img: "/images/exhibition_networking_v2.jpg",
    offset: "lg:translate-y-12"
  },
  {
    title: "Agenda & Content",
    desc: "Sessions, speakers, workshops, locations and engaging event programs.",
    img: "/images/conference_speaker_v2.jpg",
    offset: ""
  },
  {
    title: "On-site Operations",
    desc: "Check-in, badges, QR scanning, access control and smooth event execution.",
    img: "/images/badge_scanning_v2.jpg",
    offset: "lg:translate-y-12"
  }
];

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed left-[20px] -top-[100px] z-[100] bg-white p-[12px] border border-[var(--purple)] focus:top-[12px]">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* ── 1. HERO ── */}
        <Section id="home" className="pt-[48px] sm:pt-[64px] !pb-0 overflow-clip relative bg-[linear-gradient(150deg,#fff_12%,#fbf9ff_40%,#d6c0ff_58%,#843df5_76%,#faf8ff_80%,#fff_100%)]">
          {/* Subtle fade to white at the bottom so it blends into the next section */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

          <div className="relative w-full max-w-[1100px] mx-auto z-[5] mt-[10px] sm:mt-[20px]">
            <div className="text-center relative z-10 px-4 sm:px-4 md:px-6 lg:px-8">
              <HeroHeading />
              <div className="w-full flex justify-center mt-[14px]">
                <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--muted)] leading-[1.6] max-w-[800px] text-center m-0">
                  Plan, manage, and deliver in-person, virtual, and hybrid events with absolute confidence. ConGenie brings your entire event lifecycle together — all in one powerful enterprise platform.
                </p>
              </div>
              <div className="flex justify-center gap-[9px] sm:gap-[12px] mt-[22px]">
                <a className="button pill" href="#platform">
                  Request a demo{" "}
                  <span className="text-[18px] sm:text-[16px] leading-none" aria-hidden="true">
                    →
                  </span>
                </a>

              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[1100px] mx-auto z-[2] mt-[30px] md:mt-[60px] px-4 sm:px-6 lg:px-8">
            {/* Background Marquee */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[380vw] sm:w-[320vw] pointer-events-none select-none z-0 overflow-hidden flex justify-center items-center py-[40px] motion-reduce:hidden" aria-hidden="true">
              <div className="flex items-center shrink-0 w-max whitespace-nowrap will-change-transform animate-hero-marquee">
                <div className="flex items-center shrink-0 font-[family-name:var(--font-heading),var(--font-body),-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-[190px] sm:text-[180px] md:text-[170px] lg:text-[160px] xl:text-[clamp(140px,10.5vw,175px)] font-semibold leading-[1.3] py-[16px] sm:py-[20px] md:py-[24px] lg:py-[26px] xl:py-[30px] tracking-[-0.03em] text-[#843DF5] opacity-[0.06] whitespace-nowrap">
                  {bgMarqueeItems.map((title, i) => (
                    <span
                      key={`bg-${title}-${i}`}
                      className="inline-flex items-center"
                    >
                      {title}
                      <span className="inline-block mx-[0.38em] opacity-50 font-normal">·</span>
                    </span>
                  ))}
                </div>
                <div className="flex items-center shrink-0 font-[family-name:var(--font-heading),var(--font-body),-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,sans-serif] text-[190px] sm:text-[180px] md:text-[170px] lg:text-[160px] xl:text-[clamp(140px,10.5vw,175px)] font-semibold leading-[1.3] py-[16px] sm:py-[20px] md:py-[24px] lg:py-[26px] xl:py-[30px] tracking-[-0.03em] text-[#843DF5] opacity-[0.06] whitespace-nowrap" aria-hidden="true">
                  {bgMarqueeItems.map((title, i) => (
                    <span
                      key={`dup-${title}-${i}`}
                      className="inline-flex items-center"
                    >
                      {title}
                      <span className="inline-block mx-[0.38em] opacity-50 font-normal">·</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Screenshot Image (Cropped and Faded) */}
            <div className="relative z-10 overflow-hidden max-h-[350px] sm:max-h-[450px] md:max-h-[500px] rounded-t-[12px] md:rounded-t-[16px]">
              {/* Fallback image for users who prefer reduced motion */}
              <Image 
                src="/images/dashboard-screenshot.png" 
                alt="ConGenie Dashboard Static Fallback" 
                width={2880} 
                height={1600} 
                className="w-full h-auto object-cover object-top border-t border-l border-r border-[#e8defc] rounded-t-[12px] md:rounded-t-[16px] hidden motion-reduce:block" 
                priority 
              />
              {/* Autoplaying video for default experience */}
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/images/dashboard-screenshot.png"
                className="w-full h-auto object-cover object-top border-t border-l border-r border-[#e8defc] rounded-t-[12px] md:rounded-t-[16px] block motion-reduce:hidden"
              >
                <source src="/video/promo.mp4" type="video/mp4" />
                <Image 
                  src="/images/dashboard-screenshot.png" 
                  alt="ConGenie Dashboard" 
                  width={2880} 
                  height={1600} 
                  className="w-full h-auto object-cover object-top" 
                />
              </video>
              {/* Fade Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </Section>

        <LifecycleSection />

        {/* ── 4. CORE CAPABILITIES ── */}
        <section id="capabilities" className="bg-white py-16 lg:py-20 relative overflow-hidden">
          <div className="container max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            
            {/* Desktop: 2-column flex/grid. Mobile: stack content first, then images */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-center">
              
              {/* Mobile Content (Hidden on Desktop) */}
              <div className="w-full lg:hidden flex flex-col justify-center gap-8">

                <h2 className="font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#181521] text-balance">
                  Everything your event needs. Connected.
                </h2>
                <p className="text-[1rem] md:text-[1.125rem] text-[var(--muted)] leading-[1.65]">
                  Manage registration, attendees, exhibitors, content and on-site operations without stitching together multiple systems. ConGenie brings it all together in one unified platform.
                </p>
                <p className="text-[1rem] md:text-[1.125rem] font-semibold text-[var(--purple)]">
                  One platform that connects registration, attendees, exhibitors, content, and on-site operations — end to end.
                </p>
              </div>

              {/* Left Side: Staggered Image Collage (60%) */}
              <div className="w-full lg:w-[58%] xl:w-[50%] shrink-0">
                <ScrollReveal selector=".reveal-collage-item" stagger={0.15}>
                  <div className="w-full">
                    {/* Mobile Layout (1 Column, Flat Order) */}
                    <div className="flex md:hidden flex-col gap-4">
                      {coreCapabilities.map((cap, index) => (
                        <div key={cap.title} className="reveal-collage-item relative overflow-hidden rounded-2xl group aspect-square w-full">
                          <Image src={cap.img} alt={cap.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#181521]/95 via-[#181521]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                          <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end h-full">
                            <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                              <h3 className="text-white text-xl font-bold tracking-tight mb-0 leading-tight drop-shadow-sm">{cap.title}</h3>
                              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                <div className="overflow-hidden">
                                  <p className="text-white/85 text-[14px] leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cap.desc}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop & Tablet Layout (2 Columns, Staggered) */}
                    <div className="hidden md:flex items-start gap-5 lg:gap-6">
                      {/* Left Column */}
                      <div className="flex flex-col gap-5 lg:gap-6 w-1/2">
                        {coreCapabilities.filter((_, i) => i % 2 === 0).map((cap, index) => (
                          <div key={cap.title} className="reveal-collage-item relative overflow-hidden rounded-2xl group aspect-square w-full">
                            <Image src={cap.img} alt={cap.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 50vw, 30vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181521]/95 via-[#181521]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                            <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end h-full">
                              <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                <h3 className="text-white text-xl lg:text-2xl font-bold tracking-tight mb-0 leading-tight drop-shadow-sm">{cap.title}</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                  <div className="overflow-hidden">
                                    <p className="text-white/85 text-sm lg:text-[15px] leading-relaxed pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cap.desc}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right Column */}
                      <div className="flex flex-col gap-5 lg:gap-6 w-1/2 pt-10 lg:pt-14">
                        {coreCapabilities.filter((_, i) => i % 2 !== 0).map((cap, index) => (
                          <div key={cap.title} className="reveal-collage-item relative overflow-hidden rounded-2xl group aspect-square w-full">
                            <Image src={cap.img} alt={cap.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 768px) 50vw, 30vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#181521]/95 via-[#181521]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                            <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end h-full">
                              <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                                <h3 className="text-white text-xl lg:text-2xl font-bold tracking-tight mb-0 leading-tight drop-shadow-sm">{cap.title}</h3>
                                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                  <div className="overflow-hidden">
                                    <p className="text-white/85 text-sm lg:text-[15px] leading-relaxed pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cap.desc}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Side: Desktop Content (40%) */}
              <div className="hidden lg:flex w-full lg:w-[42%] xl:w-[50%] flex-col justify-center gap-4">
                <ScrollReveal selector=".reveal-content" stagger={0.1}>

                  <h2 className="reveal-content font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.5rem,4vw,3.75rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#181521] text-balance max-w-2xl">
                    Everything your event needs. Connected.
                  </h2>
                  <p className="reveal-content text-[1.125rem] text-[var(--muted)] leading-[1.65] max-w-xl">
                    Manage registration, attendees, exhibitors, content and on-site operations without stitching together multiple systems. ConGenie brings it all together in one unified platform.
                  </p>
                  <p className="reveal-content text-[1.125rem] font-semibold text-[var(--purple)] max-w-xl">
                    One platform that connects registration, attendees, exhibitors, content, and on-site operations — end to end.
                  </p>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>


        {/* ── 5. ENTERPRISE FLEXIBILITY ── */}
        <section id="flexibility" className="bg-[#faf9ff] py-16 lg:py-20 relative overflow-hidden">
          {/* Subtle background shape */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#f0ebff] opacity-40 blur-[120px] pointer-events-none" aria-hidden="true" />

          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20">

              {/* ── LEFT: Text content ── */}
              <div className="w-full lg:w-[40%] shrink-0">
                <ScrollReveal selector=".flex-reveal" stagger={0.1}>
                  <h2 className="flex-reveal font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-[-0.025em] leading-[1.15] text-[#181521]">
                    Built for complex events. Flexible by design.
                  </h2>

                  <p className="flex-reveal text-[1.0625rem] lg:text-[1.125rem] text-[var(--muted)] leading-[1.65] mt-8 lg:mt-4 max-w-lg">
                    Configure registrations, workflows, permissions and event operations around the way your organization works.
                  </p>

                  {/* Capability points */}
                  <div className="flex-reveal mt-10 space-y-4">

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                        <Icon name="sliders" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">Flexible configuration</h3>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                        <Icon name="git-branch" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">Custom workflows</h3>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                        <Icon name="people" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">Teams & permissions</h3>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

              {/* ── RIGHT: Product visual ── */}
              <div className="w-full lg:flex-1 relative">
                <ScrollReveal selector=".product-reveal" stagger={0.12}>

                  {/* Floating label: Multiple Event Types — top left */}
                  <div className="product-reveal hidden sm:flex absolute -top-5 left-4 lg:-left-4 z-20 items-center gap-3 bg-white border border-neutral-200 rounded-xl shadow-sm px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                      <Icon name="calendar" className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#181521] leading-none">Multiple Event Types</p>
                      <p className="text-[11px] text-[var(--muted)] mt-0.5">In-person, Virtual, Hybrid</p>
                    </div>
                  </div>

                  {/* Main product UI */}
                  <div className="product-reveal mt-8 sm:mt-12 lg:mt-0 relative w-full h-auto">
                    <Image
                      src="/images/flexibility_laptop.jpg"
                      alt="ConGenie Event Setup Interface"
                      width={1200}
                      height={900}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Floating label: Role-Based Access — bottom left */}
                  <div className="product-reveal hidden sm:flex absolute -bottom-4 left-6 lg:-left-2 z-20 items-center gap-3 bg-white border border-neutral-200 rounded-xl shadow-sm px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                      <Icon name="shield" className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#181521] leading-none">Role-Based Access</p>
                      <p className="text-[11px] text-[var(--muted)] mt-0.5">Admins, Teams, Partners, Ushers</p>
                    </div>
                    <svg className="w-4 h-4 text-neutral-300 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                  </div>

                  {/* Floating label: Approval Rules — top right */}
                  <div className="product-reveal hidden sm:flex absolute -top-5 right-4 lg:-right-4 z-20 items-center gap-3 bg-white border border-neutral-200 rounded-xl shadow-sm px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-[#f4efff] text-[var(--purple)] flex items-center justify-center shrink-0">
                      <Icon name="git-branch" className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#181521] leading-none">Approval Rules</p>
                      <p className="text-[11px] text-[var(--muted)] mt-0.5">Custom workflows</p>
                    </div>
                    <svg className="w-4 h-4 text-neutral-300 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
                  </div>

                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>


        {/* ── 6. AI ASSISTANT ── */}
        <section id="ai-assistant" className="bg-white py-16 lg:py-20 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

              {/* ── LEFT: Product visual ── */}
              <div className="w-full lg:w-[54%] shrink-0 relative">
                <ScrollReveal selector=".ai-visual-reveal" stagger={0.1}>
                  <div className="ai-visual-reveal relative w-full h-auto rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-neutral-100 bg-[#f8f9fb]">
                    <Image
                      src="/images/ai_assistant_desk.jpg"
                      alt="ConGenie AI Event Assistant Interface on a laptop"
                      width={1200}
                      height={900}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </ScrollReveal>
              </div>

              {/* ── RIGHT: Text content ── */}
              <div className="w-full lg:w-[46%] shrink-0">
                <ScrollReveal selector=".ai-content-reveal" stagger={0.1}>
                  <h2 className="ai-content-reveal font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.25rem,3.5vw,3rem)] font-bold tracking-[-0.025em] leading-[1.15] text-[#181521]">
                    Less manual work.<br />
                    More time for the event.
                  </h2>

                  <p className="ai-content-reveal text-[1.0625rem] lg:text-[1.125rem] text-[var(--muted)] leading-[1.65] mt-8 lg:mt-4 max-w-lg">
                    AI works inside ConGenie to help your team create events faster, configure experiences and give attendees instant access to the information they need.
                  </p>

                  <div className="ai-content-reveal mt-10 lg:mt-12 space-y-4">
                    
                    {/* Item 1 */}
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 text-[var(--purple)]">
                        <Icon name="sparkle" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">AI-assisted Event Creation</h3>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 text-[var(--purple)]">
                        <Icon name="document" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">Smarter Registration Setup</h3>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center shrink-0 text-[var(--purple)]">
                        <Icon name="chat" className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--purple)] tracking-[-0.01em] m-0 leading-none">Attendee Concierge</h3>
                    </div>

                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </section>

        {/* 6. ENTERPRISE SCALE */}
        <EnterpriseScaleSection />

        {/* 7. INTEGRATIONS */}
        <IntegrationsSection />

        {/* 7. EVENT TYPES */}
        <EventTypesSection />

        {/* 8. CTA */}
        <CtaSection />
      </main>
      {/* ── FOOTER ── */}
      <footer className="bg-white py-16 lg:py-20 border-t border-[#ede8f5]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
          
          {/* Top: 5 Columns Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 w-full mb-[60px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#181521] text-[15px] mb-2">Platform</h4>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Overview</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Features</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">AI & Automation</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Integrations</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Event Management</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Reporting & Analytics</a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#181521] text-[15px] mb-2">Solutions</h4>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Conferences & Summits</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Exhibitions & Trade Shows</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Corporate Events</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Virtual & Hybrid Events</a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#181521] text-[15px] mb-2">Enterprise</h4>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Multi-Event Management</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Custom Workflows</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Roles & Permissions</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Multi-Language Support</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Enterprise Scale</a>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#181521] text-[15px] mb-2">Resources</h4>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Insights</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Help & Support</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Contact</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Request a Demo</a>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-[#181521] text-[15px] mb-2">Company</h4>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">About</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-[14px] text-[#706a80] hover:text-[var(--purple)] transition-colors duration-200">Terms of Use</a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-[30px] border-t border-[#ede8f5] text-[13.5px] text-[#89829e] gap-4 md:gap-0">
            <p>© 2026 ConGenie. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-[var(--purple)] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--purple)] transition-colors duration-200">Terms of Use</a>
              <span className="text-[#ede8f5]" aria-hidden="true">|</span>
              <a href="#" aria-label="LinkedIn" className="text-[#a49db5] hover:text-[var(--purple)] transition-colors duration-200 flex">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
