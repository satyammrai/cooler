import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import SectionHeader from './SectionHeader';

const processes = [
  {
    id: '01',
    title: 'Thermal Analysis',
    content: 'We begin with computational fluid dynamics (CFD) to simulate air flow and heat dissipation patterns specific to the target environment.',
  },
  {
    id: '02',
    title: 'Material Science Selection',
    content: 'Our engineers select high-density honeycomb pads and aerospace-grade polymers for the chassis to ensure maximum evaporation and longevity.',
  },
  {
    id: '03',
    title: 'Prototyping & Stress Testing',
    content: 'Units undergo extreme temperature testing (up to 55°C) and endurance runs of 5,000+ hours to guarantee zero-fail performance.',
  },
  {
    id: '04',
    title: 'Smart Optimization',
    content: 'We calibrate humidity sensors and IoT modules to synchronize cooling power with ambient real-time data.',
  },
  {
    id: '05',
    title: 'Precision Assembly',
    content: 'Every Kapsun unit is assembled in our ISO-certified facility with rigorous quality control at 15 distinct checkpoints.',
  },
  {
    id: '06',
    title: 'Field Integration',
    content: 'Our support doesn’t end at delivery. We provide detailed installation benchmarks and performance monitoring software.',
  },
];

export default function WorkingProcess() {
  const [openId, setOpenId] = useState<string | null>('01');

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="R&D Process" 
        description="The Core Engineering Methodology Behind Every Kapsun Cooling System" 
      />

      <div className="space-y-6">
        {processes.map((item) => {
          const isOpen = openId === item.id;
          return (
            <motion.div
              key={item.id}
              initial={false}
              className={`rounded-[3rem] border-2 border-positivus-dark shadow-[0px_5px_0px_0px_#191A23] transition-colors overflow-hidden ${isOpen ? 'bg-positivus-green' : 'bg-positivus-grey hover:bg-positivus-green/50'}`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full px-12 py-10 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="text-4xl md:text-6xl font-bold">{item.id}</span>
                  <span className="text-2xl md:text-3xl font-bold">{item.title}</span>
                </div>
                <div className="bg-positivus-grey border-2 border-positivus-dark p-2 rounded-full">
                  {isOpen ? <Minus size={32} /> : <Plus size={32} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-12 pb-10">
                      <div className="h-0.5 bg-positivus-dark/20 mb-8" />
                      <p className="text-xl text-positivus-dark leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
