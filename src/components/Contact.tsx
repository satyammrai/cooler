import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader 
        title="Consultation" 
        description="Connect with Our Engineering Team: Let's Discuss Your Thermodynamics and Airflow Requirements" 
      />

      <div className="bg-positivus-grey rounded-[3rem] p-12 md:p-16 flex flex-col lg:flex-row gap-20 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-12 z-10"
        >
          <div className="flex gap-8">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="type" className="w-6 h-6 accent-positivus-green" defaultChecked />
              <span className="text-xl font-medium">B2B Request</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" name="type" className="w-6 h-6 accent-positivus-green" />
              <span className="text-xl font-medium">Tech Support</span>
            </label>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className="block text-lg font-medium">Lead Engineer / Company Name</label>
              <input 
                type="text" 
                placeholder="Ex: John Doe, Thermal Solutions LLC" 
                className="w-full bg-white border-2 border-positivus-dark rounded-2xl p-5 focus:outline-none focus:ring-4 focus:ring-positivus-green/30 transition-all font-medium text-lg" 
              />
            </div>
            <div className="space-y-3">
              <label className="block text-lg font-medium">Professional Email*</label>
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                className="w-full bg-white border-2 border-positivus-dark rounded-2xl p-5 focus:outline-none focus:ring-4 focus:ring-positivus-green/30 transition-all font-medium text-lg" 
              />
            </div>
            <div className="space-y-3">
              <label className="block text-lg font-medium">Technical Brief*</label>
              <textarea 
                rows={6}
                placeholder="Specify your thermodynamics requirements or project scope" 
                required
                className="w-full bg-white border-2 border-positivus-dark rounded-2xl p-5 focus:outline-none focus:ring-4 focus:ring-positivus-green/30 transition-all font-medium text-lg" 
              />
            </div>
            <button className="w-full bg-positivus-dark text-white p-5 rounded-2xl text-xl font-medium hover:bg-positivus-green hover:text-positivus-dark transition-all">
              Initialize Consultation
            </button>
          </form>
        </motion.div>

        <div className="hidden lg:flex flex-1 items-center justify-center relative">
           <div className="w-[120%] absolute -right-20 pointer-events-none opacity-20 lg:opacity-100">
              <div className="w-full aspect-square flex items-center justify-center">
                 <motion.div 
                   animate={{ rotate: [0, 5, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                   className="w-[80%] h-[80%] bg-positivus-green rounded-[3rem] border-4 border-positivus-dark relative flex items-center justify-center p-8 shadow-[20px_20px_0px_0px_#191A23]"
                 >
                    <div className="w-full h-full border-4 border-dashed border-positivus-dark/30 rounded-2xl flex flex-col items-center justify-center gap-8">
                       <div className="grid grid-cols-2 gap-4 w-1/2">
                          <div className="aspect-square bg-white border-4 border-positivus-dark rounded-xl" />
                          <div className="aspect-square bg-positivus-dark rounded-xl" />
                       </div>
                       <div className="w-3/4 h-6 bg-positivus-dark rounded-full" />
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
