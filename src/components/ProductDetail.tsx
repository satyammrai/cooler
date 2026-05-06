import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Cpu, Wind, Droplets } from 'lucide-react';
import { Product } from '../constants';
import { SketchfabViewer } from './ui/sketchfab-viewer';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  key?: string;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4 min-h-screen bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-positivus-dark hover:text-positivus-green transition-colors mb-12 font-bold group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          BACK TO DASHBOARD
        </button>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Technical View / 3D Model */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className={`rounded-[3rem] border-4 border-positivus-dark p-4 aspect-square relative shadow-[20px_20px_0px_0px_#191A23] ${product.bg} overflow-hidden`}
          >
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-2 border-positivus-dark shadow-inner bg-white">
              <SketchfabViewer 
                modelId="8e6355e260b841f0889ec1c6d5fca241" 
                title={product.name}
              />
            </div>
            
            <div className="absolute top-8 left-8 bg-positivus-green px-4 py-2 rounded-xl border-2 border-positivus-dark font-black tracking-tighter shadow-lg z-10 pointer-events-none">
              TS-77-DELTA
            </div>
            
            <div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border-2 border-positivus-dark text-[10px] font-black uppercase tracking-widest z-10 pointer-events-none">
              Interactive 3D View
            </div>
          </motion.div>

          {/* Technical Specs */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="bg-positivus-green px-3 py-1 rounded-lg text-sm font-bold uppercase border-2 border-positivus-dark">
                {product.category} Series
              </span>
              <h1 className="text-6xl font-black text-positivus-dark leading-none">
                {product.name}
              </h1>
              <p className="text-2xl font-bold text-positivus-green bg-positivus-dark inline-block px-4 py-1 rounded-md">
                {product.price}
              </p>
            </div>

            <p className="text-xl text-positivus-dark/80 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-positivus-grey p-6 rounded-2xl border-2 border-positivus-dark group hover:bg-positivus-green transition-colors">
                  <p className="text-sm font-bold uppercase opacity-50 mb-1">{spec.label}</p>
                  <p className="text-2xl font-black text-positivus-dark">{spec.value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <CheckCircle2 className="text-positivus-green fill-positivus-dark" size={32} />
                Key Engineering Features
              </h3>
              <div className="grid gap-3">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4 bg-white border-2 border-positivus-dark p-4 rounded-xl font-bold">
                    {feature.includes('Air') ? <Wind /> : feature.includes('Water') ? <Droplets /> : <Cpu />}
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-positivus-dark text-white p-6 rounded-3xl text-2xl font-black hover:bg-positivus-green hover:text-positivus-dark transition-all shadow-[10px_10px_0px_0px_#B9FF66]">
              INITIALIZE ORDER
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
