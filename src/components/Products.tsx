import { motion } from 'motion/react';
import { ArrowRight, Star, Flame, TrendingUp } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { PRODUCTS } from '../constants';

interface ProductsProps {
  onSelectProduct: (productId: string) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  // Separate products into two segments
  const antarcticaProducts = PRODUCTS.filter(p => p.segment === 'antarctica');
  const himalayaProducts = PRODUCTS.filter(p => p.segment === 'himalaya');

  const ProductCard = ({ product, index }: { product: typeof PRODUCTS[0], index: number }) => (
    <motion.div
      key={product.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={() => onSelectProduct(product.id)}
      className={`p-8 rounded-3xl border-3 border-slate-800 shadow-xl flex flex-col justify-between gap-8 cursor-pointer group transition-all hover:-translate-y-3 hover:shadow-2xl ${product.bg}`}
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex gap-2 flex-wrap">
            <span className={`${product.tagBg} text-slate-900 px-3 py-1 rounded-lg text-xs font-bold uppercase border-2 border-slate-800`}>
              {product.category}
            </span>
            {product.trending && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase border-2 border-slate-800 flex items-center gap-1">
                <Flame size={14} /> TRENDING
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 font-bold bg-white px-2 py-1 rounded-lg border-2 border-slate-800">
            <Star size={16} fill="currentColor" className="text-yellow-400" />
            <span className="text-slate-900">{product.rating}</span>
          </div>
        </div>

        {/* Product Image */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-800 aspect-video bg-white">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
          {product.warranty && (
            <div className="absolute bottom-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-lg border-2 border-slate-800">
              {product.warranty} Warranty
            </div>
          )}
        </div>
        
        {/* Product Name & Code */}
        <div>
          <h3 className="text-2xl font-black text-slate-900">
            {product.name}
          </h3>
          {product.modelCode && (
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Model: {product.modelCode}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm font-medium text-slate-700 line-clamp-2">
          {product.description}
        </p>
        
        {/* Features */}
        <ul className="space-y-2">
          {product.features.slice(0, 3).map(f => (
            <li key={f} className="flex items-center gap-2 text-slate-700 text-sm font-bold">
              <div className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Price and CTA */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t-2 border-slate-800">
        <span className="text-3xl font-black text-slate-900">{product.price}</span>
        <button className="p-3 rounded-full border-2 border-slate-800 bg-slate-900 text-white hover:bg-green-600 hover:border-green-600 group-hover:rotate-45 transition-all shadow-md hover:shadow-lg">
          <ArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-gradient-to-b from-white to-slate-50" id="products">
      <SectionHeader 
        title="Our Products" 
        description="Explore our comprehensive range of high-performance air coolers engineered for maximum cooling efficiency." 
      />

      {/* Antarctica Segment */}
      {antarcticaProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-700 text-white rounded-2xl p-8 mb-12 border-3 border-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={32} />
              <h2 className="text-4xl font-black">Antarctica Series</h2>
            </div>
            <p className="text-lg mt-3 opacity-95 max-w-2xl">Industrial-grade cooling powerhouses designed for extreme environments. Perfect for manufacturing, warehouses, and heavy-duty applications.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {antarcticaProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* Himalaya Segment */}
      {himalayaProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 text-white rounded-2xl p-8 mb-12 border-3 border-white shadow-xl">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={32} />
              <h2 className="text-4xl font-black">Himalaya Series</h2>
            </div>
            <p className="text-lg mt-3 opacity-95 max-w-2xl">Eco-friendly residential and commercial cooling solutions designed for comfort and efficiency. Perfect for homes, offices, and retail spaces.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {himalayaProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-12 border-3 border-white text-center shadow-2xl"
      >
        <h3 className="text-3xl font-black mb-4">Can't Find What You Need?</h3>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Our cooling experts are available to help you choose the perfect air cooler for your specific requirements.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-black py-4 px-8 rounded-xl border-3 border-white shadow-lg hover:shadow-xl transition-all text-lg">
          Contact Our Experts
        </button>
      </motion.div>
    </section>
  );
}
