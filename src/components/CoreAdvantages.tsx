import { motion } from 'motion/react';

const advantages = [
  'Powerful Natural Cooling – Reduce temperature by 7‑10°C',
  'Fresh, Oxygen‑Rich Air – Circulate outdoor air for health',
  'Energy Efficiency – Save up to 90% electricity',
  'Durability You Can Trust – Rugged, low‑maintenance',
  'Design That Fits In – Industrial strength, modern aesthetics',
];

export default function CoreAdvantages() {
  return (
    <section className="py-12 bg-positivus-grey overflow-hidden" id="core-advantages">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-positivus-dark mb-4 text-center">
          Our Core Advantages
        </h2>
        <div className="relative h-12">
          {/* Marquee container */}
          <div className="absolute inset-0 flex items-center">
            <div className="marquee flex space-x-12 text-positivus-dark whitespace-nowrap text-lg font-medium">
              {advantages.map((txt, i) => (
                <span key={i}>{txt}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
