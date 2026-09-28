"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Icon } from "./ui";
import { Menu, X, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (e: React.MouseEvent, label: string) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  const navItems = [
    {
      label: "Platform",
      dropdown: [
        "Platform Overview",
        "Registration & Attendees",
        "Agenda & Content",
        "Exhibitors & Networking",
        "On-site Operations",
        "Communications",
        "AI Capabilities",
        "Analytics & Reporting",
      ]
    },
    {
      label: "Solutions",
      dropdown: [
        "PCOs & Event Agencies",
        "Associations",
        "Corporate Event Teams",
        "Exhibition Organizers",
        "Enterprise Event Programs",
        "Conferences",
        "Exhibitions & Trade Shows",
        "Corporate Events",
        "In-Person Events",
        "Virtual Events",
        "Hybrid Events",
      ]
    },
    {
      label: "Enterprise",
      dropdown: [
        "Enterprise Overview",
        "Multi-Event Management",
        "Custom Workflows",
        "Teams & Permissions",
        "White-Label Experiences",
        "Governance & Auditability",
        "Enterprise Support",
      ]
    },
    {
      label: "Integrations",
      dropdown: [
        "Integrations Overview",
        "CRM & Marketing",
        "Payments",
        "Email & Messaging",
        "Streaming",
        "Analytics",
        "APIs & Webhooks",
      ]
    },
    {
      label: "Resources",
      dropdown: [
        "Customer Stories",
        "Blog",
        "Guides & Reports",
        "Event Resources",
        "Help Center",
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open && window.innerWidth <= 900) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <div className="h-[82px] relative z-50">
      <header className={`z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] outline-none border-none ${scrolled ? 'fixed top-[14px] left-0 right-0 mx-auto w-[calc(100%-32px)] max-w-[1200px] bg-[rgba(255,255,255,0.90)] backdrop-blur-[28px] backdrop-saturate-[200%] rounded-[14px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_14px_32px_-4px_rgba(107,70,193,0.09),inset_0_0_0_1px_rgba(255,255,255,0.9)] z-[100]' : 'absolute top-0 left-0 right-0 mx-auto w-full bg-[rgba(255,255,255,0.82)] backdrop-blur-[16px] backdrop-saturate-[180%]'}`}>
        <div className={`mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between outline-none border-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex-wrap min-[900px]:flex-nowrap gap-[24px] ${scrolled ? 'w-full min-h-[58px] py-[6px]' : 'container min-h-[82px]'}`}>
          <a href="#home" className="inline-flex items-center gap-[6px] text-[20px] font-bold tracking-[-0.07em] relative z-[201]" aria-label="ConGenie home">
            <Image className={`transition-all duration-300 h-auto ${scrolled ? 'w-[120px] sm:w-[130px]' : 'w-[130px] sm:w-[150px]'}`} src="/images/congenie-logo.png" alt="ConGenie" width={400} height={160} priority />
          </a>
          <button className="max-[900px]:flex hidden relative z-[201] bg-transparent border-none text-[#181521] items-center justify-center p-[6px] rounded-[8px] ml-auto transition-colors duration-200 hover:bg-[#f4f0fa] hover:text-[var(--purple)]" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X strokeWidth={1.5} size={24} /> : <Menu strokeWidth={1.5} size={24} />}
          </button>
          <nav id="main-navigation" className={`flex items-center transition-all duration-[0.35s] ease-[cubic-bezier(0.16,1,0.3,1)] max-[900px]:fixed max-[900px]:inset-0 max-[900px]:w-full max-[900px]:h-[100dvh] max-[900px]:bg-white max-[900px]:flex-col max-[900px]:pt-[100px] max-[900px]:pb-[40px] max-[900px]:px-6 sm:max-[900px]:px-10 max-[900px]:items-start max-[900px]:z-[200] max-[900px]:duration-200 max-[900px]:ease-out max-[900px]:origin-top motion-reduce:transition-none ${open ? 'max-[900px]:scale-100 max-[900px]:opacity-100 max-[900px]:visible' : 'max-[900px]:scale-[0.98] max-[900px]:opacity-0 max-[900px]:pointer-events-none max-[900px]:invisible'} ${scrolled ? 'gap-[22px] max-[900px]:gap-[20px]' : 'gap-[28px] max-[900px]:gap-[20px]'}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="group relative w-full min-[900px]:w-auto">
                <a href="#" onClick={(e) => toggleDropdown(e, item.label)} className={`transition-all duration-200 hover:text-[var(--purple)] flex items-center max-[900px]:text-[16.5px] max-[900px]:font-medium max-[900px]:w-full max-[900px]:justify-between max-[900px]:border-b max-[900px]:border-[#f2ecfa] max-[900px]:pb-[16px] ${scrolled ? 'text-[13.5px] text-[#181324] font-medium opacity-100' : 'text-[#4b4657] text-[var(--text-small)]'}`}>
                  {item.label}
                  <ChevronDown size={14} strokeWidth={2.5} className={`ml-1 transition-transform duration-200 ${scrolled ? 'opacity-80' : 'opacity-60'} min-[901px]:group-hover:rotate-180 ${openDropdown === item.label ? 'max-[900px]:rotate-180' : ''}`} aria-hidden="true" />
                </a>
                <div className={`absolute top-[100%] mt-2 w-64 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible min-[901px]:group-hover:opacity-100 min-[901px]:group-hover:visible transition-all duration-200 z-50 p-2 max-[900px]:static max-[900px]:w-full max-[900px]:shadow-none max-[900px]:bg-transparent max-[900px]:mt-2 max-[900px]:p-0 max-[900px]:border-none ${openDropdown === item.label ? 'max-[900px]:block max-[900px]:opacity-100 max-[900px]:visible' : 'max-[900px]:hidden max-[900px]:opacity-0 max-[900px]:invisible'} ${['Integrations', 'Resources'].includes(item.label) ? 'right-[-16px]' : 'left-[-16px]'}`}>
                  <div className="flex flex-col gap-[2px]">
                    {item.dropdown.map(d => (
                      <a key={d} href="#" onClick={() => setOpen(false)} className="px-3 py-2 text-[14px] text-[#4b4657] hover:text-[var(--purple)] hover:bg-[#f4f0fa] rounded-lg transition-colors font-normal">
                        {d}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <div className={`flex items-center max-[900px]:hidden ${scrolled ? 'gap-[14px]' : 'gap-[16px]'}`}>
            <a className={`button small ${scrolled ? 'min-h-[38px] py-[7px] px-[18px] text-[13px]' : ''}`} href="#platform">Request a Demo</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export function HeroHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const words = ["confidence", "precision", "scale", "ease", "impact"];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Initial load animation for the whole heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    );

    const spans = headingRef.current?.querySelectorAll('.rotating-word');
    if (!spans || spans.length === 0) return;

    // Set initial states for words
    gsap.set(spans, { opacity: 0, y: 30 });
    gsap.set(spans[0], { opacity: 1, y: 0 });

    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      const currentSpan = spans[currentIndex];
      currentIndex = (currentIndex + 1) % spans.length;
      const nextSpan = spans[currentIndex];
      
      gsap.to(currentSpan, { y: -30, opacity: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(nextSpan, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut" });
    }, 2000);

    return () => clearInterval(intervalId);
  }, { scope: headingRef });

  return (
    <h1 ref={headingRef} className="opacity-0 font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(3rem,5.5vw,4.75rem)] font-bold leading-[1.1] tracking-[-0.035em]">
      Run every event with<br/>
      <span className="relative inline-flex justify-center w-full text-[var(--purple)] mt-[4px]">
        {words.map((word, i) => (
           <span key={word} className="rotating-word absolute left-0 right-0 text-center" style={{ opacity: i === 0 ? 1 : 0 }}>
             {word}
           </span>
        ))}
        {/* Invisible placeholder to maintain vertical layout height */}
        <span className="invisible select-none pointer-events-none">confidence</span>
      </span>
    </h1>
  );
}


export function ScrollReveal({ children, selector = ".reveal-item", stagger = 0.1, start = "top 85%" }: { children: React.ReactNode, selector?: string, stagger?: number, start?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(selector);
    if (items.length === 0) return;

    gsap.set(items, { opacity: 0, y: 15 });
    
    ScrollTrigger.batch(items, {
      start: start,
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: stagger,
          ease: "power2.out",
          overwrite: true
        });
      },
      once: true
    });
  }, { scope: containerRef });

  return <div ref={containerRef} className="contents">{children}</div>;
}
