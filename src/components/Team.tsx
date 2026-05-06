import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import SectionHeader from './SectionHeader';

const team = [
  {
    name: 'Dr. Arvin Kapsun',
    role: 'Chief Engineering Officer',
    experience: 'PhD in Thermal Dynamics from MIT. 20+ years leading industrial HVAC innovations and fluid simulation research.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    name: 'Elena Volkov',
    role: 'Head of R&D',
    experience: 'Expert in Material science and polymer engineering. Leads our regenerative honeycomb pad development program.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
  {
    name: 'Marcus Chen',
    role: 'Principal Fluid Dynamicist',
    experience: 'Fluid Dynamics specialist. Optimizes impeller blade geometry for maximum airflow with minimal acoustic signature.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
  },
];

export default function Team() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="Team" 
        description="Meet the skilled and experienced team behind our successful digital marketing strategies" 
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] border-2 border-positivus-dark shadow-[0px_5px_0px_0px_#191A23] space-y-8 bg-white"
          >
            <div className="flex justify-between items-start border-b-2 border-positivus-dark pb-8">
              <div className="flex gap-6 items-end">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-positivus-dark">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-positivus-dark/70 font-medium">{member.role}</p>
                </div>
              </div>
              <a href="#" className="bg-positivus-dark p-2 rounded-full text-positivus-green group hover:bg-positivus-green hover:text-positivus-dark transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-lg leading-relaxed">
              {member.experience}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <button className="bg-positivus-dark text-white px-8 py-5 rounded-2xl text-xl font-medium hover:bg-positivus-green hover:text-positivus-dark transition-all">
          See all team
        </button>
      </div>
    </section>
  );
}
