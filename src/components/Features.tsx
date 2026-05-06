import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function Features() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="features">
      {/* Energy Efficient Air Coolers */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <SectionHeader
          title="Energy‑efficient air coolers"
          description="Cover up to 2500 sq ft. with powerful, consistent cooling – perfect for homes, businesses, and industrial spaces."
        />
        <p className="mt-6 text-lg text-positivus-dark max-w-3xl">
          Our coolers deliver up to 80% energy savings compared to traditional AC units while maintaining
          precise temperature control. Designed for low power consumption – as low as 1 unit in 5 hours.
        </p>
      </motion.div>

      {/* Why Choose Kapsun Air Coolers? */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-positivus-dark">Why Choose Kapsun Air Coolers?</h3>
          <ul className="list-disc list-inside space-y-2 text-positivus-dark">
            <li><span className="font-medium">Powerful Coverage</span> – Cool spaces up to 2500 sq ft. with consistent temperature control.</li>
            <li><span className="font-medium">Energy Efficient</span> – Consume as low as 1 unit in 5 hours, saving up to 80% electricity.</li>
            <li><span className="font-medium">Innovative Design</span> – Advanced cooling technology with superior build quality.</li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-64 h-64 bg-positivus-green rounded-full flex items-center justify-center">
            {/* Placeholder for an illustration or 3‑D model */}
            <span className="text-4xl font-black text-positivus-dark">KAP</span>
          </div>
        </div>
      </motion.div>

      {/* Perfect For Any Environment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold text-center text-positivus-dark mb-8">
          Perfect For Any Environment
        </h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border-2 border-positivus-dark rounded-xl">
            <svg className="mx-auto mb-4 w-12 h-12 text-positivus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10-5h4a1 1 0 011 1v4m-7 5h-4a1 1 0 01-1-1v-3m10 0h3a1 1 0 011 1v3" /></svg>
            <h4 className="font-medium text-positivus-dark">Industrial</h4>
            <p className="text-sm text-positivus-dark">Large‑scale factories and warehouses.</p>
          </div>
          <div className="p-6 border-2 border-positivus-dark rounded-xl">
            <svg className="mx-auto mb-4 w-12 h-12 text-positivus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.333 0-4 .667-4 2v4c0 1.333 2.667 2 4 2s4-.667 4-2v-4c0-1.333-2.667-2-4-2z" /></svg>
            <h4 className="font-medium text-positivus-dark">Commercial</h4>
            <p className="text-sm text-positivus-dark">Retail, offices, hospitality.</p>
          </div>
          <div className="p-6 border-2 border-positivus-dark rounded-xl">
            <svg className="mx-auto mb-4 w-12 h-12 text-positivus-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <h4 className="font-medium text-positivus-dark">Residential</h4>
            <p className="text-sm text-positivus-dark">Homes and apartments.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
