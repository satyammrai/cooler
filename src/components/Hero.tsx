import { motion } from 'motion/react';
import { SketchfabViewer } from './ui/sketchfab-viewer';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block bg-positivus-green px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest text-positivus-dark">
            Precision Thermodynamics
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-positivus-dark leading-[1.05]">
            Engineering the <span className="underline decoration-positivus-green decoration-8 underline-offset-8">Future</span> of Air Cooling
          </h1>
          <p className="text-lg md:text-xl text-positivus-dark/80 max-w-lg leading-relaxed">
            Kapsun delivers industry-leading air flow dynamics. Our core engineering team utilizes fluid simulation to maximize heat exchange efficiency in every unit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-positivus-dark text-white px-8 py-5 rounded-2xl text-xl font-medium hover:bg-positivus-green hover:text-positivus-dark transition-all border-2 border-positivus-dark">
              Explore Tech Specs
            </button>
            <button className="border-2 border-positivus-dark text-positivus-dark px-8 py-5 rounded-2xl text-xl font-medium hover:bg-positivus-dark hover:text-white transition-all">
              Watch Air-Flow Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square flex items-center justify-center">
            {/* 3D Model Viewer Replacement */}
            <div className="w-[90%] h-[90%] bg-white rounded-[3rem] relative overflow-hidden p-4 border-4 border-positivus-dark shadow-[12px_12px_0px_0px_#191A23]">
              <div className="w-full h-full border-2 border-dashed border-positivus-dark/20 rounded-2xl relative overflow-hidden bg-white">
                <SketchfabViewer 
                  modelId="8e6355e260b841f0889ec1c6d5fca241" 
                  title="Kapsun Air Cooler 3D Model"
                />
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-32 h-32 bg-positivus-green rounded-full -z-10 mix-blend-multiply border-4 border-positivus-dark flex items-center justify-center font-bold text-positivus-dark shadow-lg"
            >
              98% EFF
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 border-4 border-positivus-dark rounded-full -z-10 bg-white shadow-xl flex flex-col items-center justify-center p-4"
            >
               <span className="text-4xl font-black">4.9</span>
               <span className="text-xs font-bold uppercase">User Rating</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
