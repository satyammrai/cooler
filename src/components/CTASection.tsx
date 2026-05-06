import { motion } from 'motion/react';
import { SketchfabViewer } from './ui/sketchfab-viewer';

export default function CTASection() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="bg-positivus-grey rounded-[3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="space-y-8 max-w-lg z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-positivus-dark">
            Optimize your thermal efficiency
          </h2>
          <p className="text-lg text-positivus-dark">
            Connect with our core engineering team to receive a thermodynamic assessment and a customized cooling strategy for your facility.
          </p>
          <button className="bg-positivus-dark text-white px-8 py-5 rounded-2xl text-xl font-medium hover:bg-positivus-green hover:text-positivus-dark transition-all">
            Request Technical Proposal
          </button>
        </div>

        <div className="hidden md:block z-10">
          <div className="w-80 h-80 relative flex items-center justify-center">
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-full h-full bg-positivus-green rounded-[3rem] border-4 border-positivus-dark relative flex items-center justify-center p-4 shadow-[12px_12px_0px_0px_#191A23] overflow-hidden"
             >
                <div className="w-full h-full border-2 border-dashed border-positivus-dark/20 rounded-2xl relative overflow-hidden bg-white/50 backdrop-blur-sm">
                   <SketchfabViewer 
                     modelId="8e6355e260b841f0889ec1c6d5fca241" 
                     title="Kapsun Air Cooler Engineering Preview"
                   />
                </div>
             </motion.div>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-positivus-green rounded-full opacity-10" />
      </div>
    </section>
  );
}
