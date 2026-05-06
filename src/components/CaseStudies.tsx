import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

const cases = [
  {
    description: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    description: "For a B2B software company, we developed an SEO strategy that increased organic search ranking by 50% within six months.",
  },
  {
    description: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and engagement by 50%.",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="Case Studies" 
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies" 
      />

      <div className="bg-positivus-dark rounded-[3rem] p-12 md:p-16 text-white grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col justify-between gap-8 ${index !== 0 ? 'md:pl-16' : ''} ${index !== cases.length - 1 ? 'md:pr-16 pb-12 md:pb-0' : 'pt-12 md:pt-0'}`}
          >
            <p className="text-lg leading-relaxed">
              {item.description}
            </p>
            <div className="flex items-center gap-4 text-positivus-green group cursor-pointer">
              <span className="text-xl font-medium">Learn more</span>
              <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
