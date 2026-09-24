"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, Store, Calendar, Video, ArrowRight, User, Speech, Users2, LayoutDashboard } from "lucide-react";

type EventType = {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  agenda: {
    eventTitle: string;
    sessions: {
      title: string;
      location: string;
      time: string;
      icon: React.ElementType;
    }[];
  };
};

const eventTypes: EventType[] = [
  {
    id: "conferences",
    title: "Conferences & Summits",
    desc: "Deliver impactful, large-scale events with ease.",
    icon: Users,
    image: "/images/event_conference.jpg",
    agenda: {
      eventTitle: "Global Summit 2026",
      sessions: [
        { title: "Keynote Session", location: "Main Auditorium", time: "09:00 AM", icon: User },
        { title: "Panel Discussion", location: "Conference Hall A", time: "11:00 AM", icon: Users2 },
        { title: "Networking Lounge", location: "Exhibition Area", time: "01:00 PM", icon: Speech },
        { title: "Product Showcase", location: "Expo Hall", time: "03:00 PM", icon: LayoutDashboard }
      ]
    }
  },
  {
    id: "exhibitions",
    title: "Exhibitions & Trade Shows",
    desc: "Connect exhibitors, sponsors and attendees effectively.",
    icon: Store,
    image: "/images/event_exhibition.jpg",
    agenda: {
      eventTitle: "Tech Expo 2026",
      sessions: [
        { title: "Floor Opens", location: "Main Hall", time: "09:00 AM", icon: LayoutDashboard },
        { title: "Sponsor Highlights", location: "Stage 2", time: "11:30 AM", icon: Speech },
        { title: "B2B Meetings", location: "VIP Lounge", time: "02:00 PM", icon: Users2 },
        { title: "Closing Mixer", location: "Networking Zone", time: "04:30 PM", icon: User }
      ]
    }
  },
  {
    id: "corporate",
    title: "Corporate Events",
    desc: "Power internal and external events of any size.",
    icon: Calendar,
    image: "/images/event_corporate.jpg",
    agenda: {
      eventTitle: "Leadership Offsite",
      sessions: [
        { title: "Strategy Review", location: "Boardroom A", time: "08:30 AM", icon: User },
        { title: "Team Workshops", location: "Breakout Rooms", time: "10:45 AM", icon: Users2 },
        { title: "Lunch & Learn", location: "Dining Hall", time: "12:30 PM", icon: Speech },
        { title: "Q&A Townhall", location: "Main Stage", time: "02:15 PM", icon: LayoutDashboard }
      ]
    }
  },
  {
    id: "virtual",
    title: "Virtual & Hybrid Events",
    desc: "Engage audiences anywhere in the world.",
    icon: Video,
    image: "/images/event_virtual_grid.jpg",
    agenda: {
      eventTitle: "Global Broadcast",
      sessions: [
        { title: "Welcome Stream", location: "Main Channel", time: "10:00 AM", icon: Video },
        { title: "Live Q&A", location: "Track 1", time: "11:30 AM", icon: Speech },
        { title: "Digital Booths", location: "Expo Tab", time: "01:00 PM", icon: LayoutDashboard },
        { title: "Virtual Happy Hour", location: "Networking Rooms", time: "03:00 PM", icon: Users2 }
      ]
    }
  }
];

export function EventTypesSection() {
  const [activeTab, setActiveTab] = useState<EventType>(eventTypes[0]);

  return (
    <section className="bg-[#faf9ff] py-16 lg:py-20 relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Top Area */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-6 lg:mb-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-[45%] shrink-0 flex flex-col items-start gap-5 lg:gap-4">
            <h2 className="font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-[-0.025em] leading-[1.1] text-[#181521]">
              One platform.<br />
              Every kind of event.
            </h2>
            <p className="text-[1.0625rem] lg:text-[1.125rem] text-[#4b4657] leading-[1.65] max-w-lg">
              From global conferences and trade shows to corporate meetings and virtual experiences, ConGenie adapts to the way your events work.
            </p>
            <button className="button mb-4 mt-2">
              Explore Event Types <span aria-hidden="true">→</span>
            </button>
            
            <div className="flex items-center gap-8 lg:gap-12 flex-wrap mt-4">
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-[#181521] tracking-tight">Global</span>
                <span className="text-[13px] text-[#6b6576] font-medium mt-1">In-Person, Virtual & Hybrid</span>
              </div>
              <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold text-[#181521] tracking-tight">All Sizes</span>
                <span className="text-[13px] text-[#6b6576] font-medium mt-1">From 50 to 50,000+ Attendees</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual Area */}
          <div className="w-full lg:w-[55%] relative">
            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              {eventTypes.map((type) => (
                <div 
                  key={type.id} 
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeTab.id === type.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority={type.id === "conferences"}
                  />
                  {/* Overlay gradient to ensure card pops */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mt-10 lg:mt-12 relative z-30">
          {eventTypes.map((type) => {
            const isActive = activeTab.id === type.id;
            
            return (
              <div 
                key={type.id}
                onMouseEnter={() => setActiveTab(type)}
                onClick={() => setActiveTab(type)}
                className={`relative bg-white rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 flex flex-col h-full ${
                  isActive 
                    ? 'border-[var(--purple)] shadow-[0_12px_24px_rgba(107,70,193,0.1)] ring-1 ring-[var(--purple)]/20' 
                    : 'border-gray-100 hover:border-[var(--purple)]/40 hover:shadow-lg'
                }`}
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col h-full flex-1">
                  <h4 className="font-bold text-[#181521] text-[17px] mb-2">{type.title}</h4>
                  <p className="text-[1.0625rem] lg:text-[1.125rem] text-[#4b4657] leading-[1.65] mb-8">{type.desc}</p>
                  
                  <div className={`mt-auto w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors ${
                    isActive ? 'bg-purple-100 text-[var(--purple)]' : 'bg-gray-50 text-gray-400'
                  }`}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
