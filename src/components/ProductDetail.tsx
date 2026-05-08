import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Cpu, Wind, Droplets, MessageCircle, Star, Zap, Leaf } from 'lucide-react';
import { Product } from '../constants';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  key?: string;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering:\n\n*${product.name}* (Model: ${product.modelCode})\nQuantity: ${quantity}\nPrice: ${product.price}\n\nPlease provide more details and confirm availability.`;
    const phoneNumber = '919958923926'; // WhatsApp number with country code
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-4 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-700 hover:text-green-600 transition-colors mb-12 font-bold group text-lg"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={24} />
          BACK TO PRODUCTS
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Section */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div className={`rounded-3xl border-4 border-slate-800 p-6 aspect-square relative shadow-2xl ${product.bg} overflow-hidden`}>
              <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-slate-800 shadow-inner bg-white flex items-center justify-center">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {product.trending && (
                <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-xl border-2 border-slate-800 font-black tracking-tighter shadow-lg z-10">
                  🔥 TRENDING
                </div>
              )}
              
              <div className="absolute top-6 right-6 flex gap-1 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border-2 border-slate-800 z-10">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-sm">{product.rating}</span>
              </div>

              <div className="absolute bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-xl border-2 border-slate-800 text-sm font-bold z-10">
                {product.warranty} Warranty
              </div>
            </div>

            {/* Quick Stats */}
            {product.benefits && (
              <div className="grid grid-cols-2 gap-3">
                {product.benefits.slice(0, 4).map((benefit, idx) => (
                  <div key={idx} className="bg-white border-2 border-slate-800 p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <p className="text-xs font-bold text-slate-600">{benefit}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details & Order Section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="space-y-8"
          >
            {/* Header Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase border-2 border-slate-800">
                  {product.category}
                </span>
                <span className="bg-slate-800 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase border-2 border-slate-800">
                  {product.segment.toUpperCase()}
                </span>
              </div>
              <h1 className="text-5xl font-black text-slate-900 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-black text-green-600 bg-green-50 inline-block px-6 py-3 rounded-2xl border-3 border-green-600">
                {product.price}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {product.description}
            </p>

            {/* Key Specs */}
            <div className="grid grid-cols-2 gap-4">
              {product.specs.map((spec) => (
                <div key={spec.label} className="bg-white border-2 border-slate-800 p-4 rounded-2xl hover:shadow-lg transition-all hover:border-green-500">
                  <p className="text-xs font-bold text-slate-600 uppercase mb-2">{spec.label}</p>
                  <p className="text-xl font-black text-slate-900">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-slate-900">
                <CheckCircle2 className="text-green-600 fill-green-600" size={28} />
                Key Features
              </h3>
              <div className="grid gap-2">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-white border-2 border-slate-800 p-3 rounded-lg font-bold text-slate-800 hover:bg-green-50 transition-colors">
                    <Zap className="text-green-600 flex-shrink-0" size={20} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Full Tech Specs */}
            {product.fullSpecs && (
              <details className="bg-slate-800 text-white rounded-2xl border-2 border-slate-900 overflow-hidden">
                <summary className="px-6 py-4 font-bold cursor-pointer hover:bg-slate-700 transition-colors flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <Cpu size={20} />
                    Full Technical Specifications
                  </span>
                  <span>➤</span>
                </summary>
                <div className="px-6 py-4 bg-slate-900 grid grid-cols-2 gap-4 border-t-2 border-slate-700">
                  {product.fullSpecs.map((spec) => (
                    <div key={spec.label}>
                      <p className="text-xs font-bold text-green-400 uppercase mb-1">{spec.label}</p>
                      <p className="font-bold">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}

            {/* Applications */}
            {product.applications && (
              <div className="space-y-3 bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Leaf className="text-blue-600" size={20} />
                  Ideal For
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {product.applications.map((app) => (
                    <li key={app} className="text-sm font-bold text-slate-700">✓ {app}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Order Section */}
            <div className="bg-white border-3 border-slate-800 rounded-3xl p-6 shadow-lg space-y-4">
              <h4 className="font-bold text-slate-900 text-lg">Place Your Order</h4>
              
              <div className="flex items-center gap-4">
                <label className="font-bold text-slate-700">Quantity:</label>
                <div className="flex items-center border-2 border-slate-800 rounded-xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 font-bold text-slate-900 hover:bg-slate-100"
                  >
                    −
                  </button>
                  <span className="px-6 font-bold text-lg text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 font-bold text-slate-900 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button 
                onClick={handleWhatsAppOrder}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl text-xl font-black border-3 border-slate-800 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                ORDER VIA WHATSAPP
              </button>

              <p className="text-center text-xs text-slate-600 font-bold">
                We'll respond within 2 hours on WhatsApp<br/>
                <span className="text-green-600 font-black">+91 9958923926</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
