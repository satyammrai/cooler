import { motion } from 'motion/react';

import SectionHeader from './SectionHeader';

export default function Logos() {
  const partners = [
    { name: 'Amazon Robotics', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
    { name: 'Dribbble Labs', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
    { name: 'HubSpot Industrial', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
    { name: 'Notion HQ', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
    { name: 'Netflix Tech', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
    { name: 'Zoom Global', logo: 'https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW' },
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
                 className="max-h-full max-w-25 opacity-40 group-hover:opacity-100 transition-all pointer-events-none"
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
