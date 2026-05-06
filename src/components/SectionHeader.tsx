import { motion } from 'motion/react';

interface SectionHeaderProps {
  title: string;
  description: string;
  textColor?: string;
}

export default function SectionHeader({ title, description, textColor = 'text-positivus-dark' }: SectionHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mb-16 px-4">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-positivus-green px-2 rounded-lg"
      >
        <span className="text-4xl font-bold text-positivus-dark">{title}</span>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`text-lg max-w-xl text-center md:text-left ${textColor}`}
      >
        {description}
      </motion.p>
    </div>
  );
}
