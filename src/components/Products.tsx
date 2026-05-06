import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PRODUCTS } from '../constants';

interface ProductsProps {
  onSelectProduct: (productId: string) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="products">
      <SectionHeader 
        title="Our Products" 
        description="Explore our range of high-performance air coolers engineered for maximum thermal displacement." 
      />

      <div className="grid md:grid-cols-3 gap-10">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onSelectProduct(product.id)}
            className={`p-10 rounded-[3rem] border-2 border-positivus-dark shadow-[0px_5px_0px_0px_#191A23] flex flex-col justify-between gap-10 cursor-pointer group transition-all hover:-translate-y-2 ${product.bg}`}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className={`${product.tagBg} px-3 py-1 rounded-lg text-sm font-bold uppercase border-2 border-positivus-dark`}>
                  {product.category}
                </span>
                <div className="flex items-center gap-1 font-bold">
                  <Star size={16} fill="currentColor" className="text-yellow-500" />
                  <span className={product.textColor}>{product.rating}</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border-2 border-positivus-dark aspect-video bg-white">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-positivus-dark/20 group-hover:bg-transparent transition-colors" />
              </div>
              
              <h3 className={`text-4xl font-bold ${product.textColor || 'text-positivus-dark'}`}>
                {product.name}
              </h3>

              <p className={`text-sm font-medium ${product.textColor || 'text-positivus-dark'} opacity-70 line-clamp-2`}>
                {product.description}
              </p>
              
              <ul className="space-y-3">
                {product.features.slice(0, 3).map(f => (
                  <li key={f} className={`flex items-center gap-2 ${product.textColor || 'text-positivus-dark'} opacity-80 font-medium`}>
                    <div className={`w-2 h-2 rounded-full ${product.textColor ? 'bg-white' : 'bg-positivus-dark'}`} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between mt-auto">
               <span className={`text-3xl font-black ${product.textColor || 'text-positivus-dark'}`}>{product.price}</span>
               <button className={`p-4 rounded-full border-2 border-positivus-dark ${product.textColor ? 'bg-white text-dark' : 'bg-positivus-dark text-white'} group-hover:rotate-[-45deg] transition-all`}>
                 <ArrowRight size={24} />
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
