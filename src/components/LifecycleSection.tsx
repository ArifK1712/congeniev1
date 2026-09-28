import Image from "next/image";

const stats = [
  { value: "10K+",  label: "Events Delivered" },
  { value: "250K+", label: "Registrations" },
  { value: "40+",   label: "Countries" },
  { value: "200+",  label: "Clients" },
];

const lifecycleStages = [
  {
    num: "01",
    title: "Plan",
    icon: "calendar",
    features: ["Event Setup", "Agenda", "Event Website"],
  },
  {
    num: "02",
    title: "Register",
    icon: "document",
    features: ["Dynamic Forms", "Payments", "Attendee Management"],
  },
  {
    num: "03",
    title: "Engage",
    icon: "users",
    features: ["Meetings", "Exhibitors", "Communications"],
  },
  {
    num: "04",
    title: "Operate",
    icon: "settings",
    features: ["Check-in", "Badges", "QR Scanning"],
  },
  {
    num: "05",
    title: "Analyze",
    icon: "bar-chart",
    features: ["Live Insights", "Reports", "Exports & API"],
  },
];

export function LifecycleSection() {
  return (
    <section id="lifecycle" className="bg-white py-16 lg:py-20 overflow-hidden">
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">

        {/* ── DESKTOP 3-COLUMN LAYOUT ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start">

          {/* ── LEFT: Heading + Stats ── */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center">
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.1] text-[#181521] mb-4">
              One platform for the entire event lifecycle.
            </h2>

            {/* Supporting text */}
            <p className="text-[1rem] md:text-[1.125rem] text-[var(--muted)] leading-[1.65] mb-8">
              From planning to post-event insights, manage everything in one connected place.
            </p>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, i) => {
                const isLeft = i % 2 === 0;
                const isTop = i < 2;
                return (
                  <div
                    key={stat.label}
                    className={`py-5 flex flex-col gap-1
                      ${isLeft ? "pr-6 border-r border-[#ede8f8]" : "pl-6"}
                      ${isTop ? "border-b border-[#ede8f8]" : ""}
                    `}
                  >
                    <strong className="font-[family-name:var(--font-heading),sans-serif] text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-[var(--purple)] tracking-[-0.02em] leading-none">
                      {stat.value}
                    </strong>
                    <span className="text-[0.8rem] text-[var(--muted)] font-medium">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── CENTER: Pre-shaped conference image ── */}
          <div className="w-full lg:w-[34%] flex items-center justify-center lg:px-2 xl:px-4 order-first lg:order-none">
            <div className="relative w-full max-w-[340px] lg:max-w-none mx-auto">
              <Image
                src="/images/lifecycle-event.png"
                alt="Conference event"
                width={840}
                height={980}
                sizes="(max-width: 768px) 340px, (max-width: 1280px) 34vw, 440px"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT: Vertical lifecycle timeline ── */}
          <div className="w-full lg:w-[36%] lg:pl-8 xl:pl-12">
            <div className="relative">
              {/* Vertical connecting line */}
              <div
                className="absolute left-[19px] top-[36px] bottom-[36px] w-[1px] bg-[#e0d8f5]"
                aria-hidden="true"
              />

              <ol className="relative flex flex-col gap-0 list-none m-0 p-0">
                {lifecycleStages.map((stage, i) => (
                  <li key={stage.num} className="relative flex items-start gap-4 pb-7 last:pb-0">

                    {/* Step number bubble on the line */}
                    <div className="relative z-10 flex flex-col items-center shrink-0 mt-1">
                      <div className="w-[38px] h-[38px] rounded-full border border-[#e0d8f5] bg-white flex items-center justify-center">
                        <span className="text-[10px] font-semibold text-[#9a8fc0] tracking-[0.06em]">
                          {stage.num}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[3px] pt-[6px]">
                      <h3 className="text-xl font-semibold text-[#181521] tracking-[-0.01em] leading-tight m-0">
                        {stage.title}
                      </h3>
                      <p className="text-[1rem] md:text-[1.125rem] text-[var(--muted)] leading-[1.6] m-0">
                        {stage.features.join(" · ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>{/* end 3-col */}
      </div>
    </section>
  );
}
