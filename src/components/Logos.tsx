import { motion } from 'motion/react';

import SectionHeader from './SectionHeader';

export default function Logos() {
  const partners = [
    { name: 'Amazon Robotics', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon.svg' },
    { name: 'Dribbble Labs', logo: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg' },
    { name: 'HubSpot Industrial', logo: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg' },
    { name: 'Notion HQ', logo: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
    { name: 'Netflix Tech', logo: 'https://cdn.worldvectorlogo.com/logos/netflix-3.svg' },
    { name: 'Zoom Global', logo: 'https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg' },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="partners">
      <SectionHeader 
        title="Engineering Partners" 
        description="Our high-performance cooling infrastructure is trusted by technology leaders across the globe to maintain mission-critical operations."
      />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-16">
        {partners.map((partner) => (
          <div 
            key={partner.name} 
            className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all group cursor-default"
          >
            <div className="h-16 w-full flex items-center justify-center p-2 mb-4 bg-positivus-grey/50 rounded-2xl border-2 border-transparent group-hover:border-positivus-green group-hover:bg-white transition-all">
               <img 
                 src={partner.logo} 
                 alt={partner.name} 
                 className="max-h-full max-w-[100px] opacity-40 group-hover:opacity-100 transition-all pointer-events-none"
                 referrerPolicy="no-referrer"
               />
            </div>
            <span className="text-[10px] font-black text-positivus-dark/30 group-hover:text-positivus-dark transition-colors uppercase tracking-[0.2em] text-center">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
