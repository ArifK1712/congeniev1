"use client";
import Image from "next/image";

export function IntegrationsSection() {
 const integrations = [
  { name: "Salesforce", logo: "/images/integrations/salesforce.svg" },
  { name: "HubSpot", logo: "/images/integrations/hubspot.svg" },
  { name: "Zoho", logo: "/images/integrations/zoho_custom.png" },
  { name: "Mailchimp", logo: "/images/integrations/mailchimp_intuit.png" },
  { name: "Webhooks", logo: "/images/integrations/webhook_custom.png" }
 ];

 return (
  <section className="py-16 lg:py-20 bg-white relative border-t border-[#ede8f5]">
   <div className="container mx-auto px-4 md:px-6 lg:px-8">
    
    {/* Section Header */}
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center mb-10">
     <h2 className="font-[family-name:var(--font-heading),Arial,sans-serif] text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-[-0.025em] leading-[1.1] text-[#181521] text-center">
      Connect ConGenie to the tools your team already uses.
     </h2>
     <p className="mt-8 lg:mt-4 text-[1.125rem] text-[#4b4657] leading-[1.65] max-w-2xl mx-auto text-center">
      Sync event data, automate workflows, and connect ConGenie with your sales, marketing, and communication stack.
     </p>
    </div>

    {/* Integration Cards */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
     {integrations.map((item) => (
      <div 
       key={item.name} 
       className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center w-[calc(50%-8px)] sm:w-[180px] lg:w-[200px] min-w-0 shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]"
      >
       <div className="h-12 sm:h-14 flex items-center justify-center mb-0 sm:mb-6 w-full relative min-w-0">
         <div className="relative w-full h-full flex items-center justify-center">
          <img
           src={item.logo}
           alt={`${item.name} logo`}
           className="max-h-full max-w-[90%] sm:max-w-[80%] object-contain"
          />
         </div>
       </div>
       <span className="hidden sm:block font-semibold text-[#181521] text-[14px] sm:text-[15px] text-center w-full truncate px-1">{item.name}</span>
      </div>
     ))}
    </div>

   </div>
  </section>
 );
}
