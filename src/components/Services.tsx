import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    title: 'Precision Cooling Matrix',
    bg: 'bg-positivus-grey',
    labelBg: 'bg-positivus-green',
    iconBg: 'bg-positivus-dark',
    iconColor: 'text-positivus-green',
    textColor: 'text-positivus-dark',
  },
  {
    title: 'High-Velocity Air Flow',
    bg: 'bg-positivus-green',
    labelBg: 'bg-white',
    iconBg: 'bg-positivus-dark',
    iconColor: 'text-positivus-green',
    textColor: 'text-positivus-dark',
  },
  {
    title: 'Smart IoT Integration',
    bg: 'bg-positivus-dark',
    labelBg: 'bg-white',
    iconBg: 'bg-white',
    iconColor: 'text-positivus-dark',
    textColor: 'text-white',
  },
  {
    title: 'Sustainable Water Usage',
    bg: 'bg-positivus-grey',
    labelBg: 'bg-positivus-green',
    iconBg: 'bg-positivus-dark',
    iconColor: 'text-positivus-green',
    textColor: 'text-positivus-dark',
  },
  {
    title: 'Low Acoustic Signature',
    bg: 'bg-positivus-green',
    labelBg: 'bg-white',
    iconBg: 'bg-positivus-dark',
    iconColor: 'text-positivus-green',
    textColor: 'text-positivus-dark',
  },
  {
    title: 'Ultra-Durable Chassis',
    bg: 'bg-positivus-dark',
    labelBg: 'bg-positivus-green',
    iconBg: 'bg-white',
    iconColor: 'text-positivus-dark',
    textColor: 'text-white',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="Engineering" 
        description="Our coolers are built on a foundation of scientific principles and rigorous testing. We prioritize thermodynamics and durability." 
      />

      <div className="grid md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`p-12 rounded-[3rem] border-2 border-positivus-dark shadow-[0px_5px_0px_0px_#191A23] flex justify-between items-center ${service.bg}`}
          >
            <div className="flex flex-col h-full justify-between gap-20">
              <div className="space-y-1">
                {service.title.split(' ').map((word, i) => (
                  <div key={i} className={`${service.labelBg} px-2 inline-block rounded-md`}>
                    <span className={`text-3xl font-bold ${service.textColor === 'text-white' && i === 0 ? 'text-black' : service.textColor}`}>
                       {word}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <div className={`${service.iconBg} p-3 rounded-full ${service.iconColor} group-hover:rotate-45 transition-transform`}>
                  <ArrowUpRight size={24} />
                </div>
                <span className={`text-xl font-medium ${service.textColor}`}>White-paper</span>
              </div>
            </div>

            <div className="hidden sm:block">
              {/* Engineering Illustration placeholder */}
              <div className="w-40 h-40 relative">
                <div className={`absolute inset-0 border-4 border-dashed border-positivus-dark/20 rounded-full`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 ${service.labelBg} rounded-xl border-4 border-positivus-dark flex items-center justify-center`}>
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-8 h-8 rounded-full border-4 border-positivus-dark bg-white" 
                    />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
