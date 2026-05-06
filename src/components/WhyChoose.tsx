import SectionHeader from './SectionHeader';
import { motion } from 'motion/react';

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="why-choose">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <SectionHeader
          title="Why Choose Kapsun Air Coolers?"
          description="Powerful coverage, energy efficiency, and innovative design set our coolers apart."
        />
        <ul className="list-disc list-inside space-y-3 text-positivus-dark mt-6">
          <li><span className="font-medium">Powerful Coverage</span> – Cool spaces up to 2500 sq ft. with consistent temperature control.</li>
          <li><span className="font-medium">Energy Efficient</span> – Consume as low as 1 unit in 5 hours, saving up to 80% electricity.</li>
          <li><span className="font-medium">Innovative Design</span> – Advanced cooling technology with superior build quality.</li>
        </ul>
      </motion.div>
    </section>
  );
}
