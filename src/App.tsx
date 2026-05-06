import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Services from './components/Services';
import GallerySection from './components/GallerySection';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import CTASection from './components/CTASection';
import VideoScrollSection from './components/VideoScrollSection';
import WorkingProcess from './components/WorkingProcess';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';
import { AnimatePresence, motion } from 'motion/react';

import { EngineeringAdvantages } from './components/ui/scrolling-animation';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedProductId]);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    setSelectedProductId(null);
  };

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setCurrentView('product-detail');
  };

  const selectedProduct = PRODUCTS.find(p => p.id === selectedProductId);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-positivus-green selection:text-positivus-dark">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      <main className="pt-24">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            >
              <Hero />
              <Logos />
              <GallerySection />
              <Services />
              <div id="products-preview">
                <Products onSelectProduct={handleSelectProduct} />
              </div>
              <CTASection />
              <VideoScrollSection />
              <WorkingProcess />
              <EngineeringAdvantages />
              <Team />
              <Testimonials />
              <Contact />
            </motion.div>
          )}

          {currentView === 'products' && (
            <motion.div 
              key="products"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="py-12"
            >
              <Products onSelectProduct={handleSelectProduct} />
              <CTASection />
            </motion.div>
          )}

          {currentView === 'about' && (
            <motion.div 
              key="about"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="py-12"
            >
              <WorkingProcess />
              <Team />
            </motion.div>
          )}

          {currentView === 'contact' && (
            <motion.div 
              key="contact"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="py-12"
            >
              <Contact />
            </motion.div>
          )}

          {currentView === 'product-detail' && selectedProduct && (
            <ProductDetail 
              key="detail"
              product={selectedProduct} 
              onBack={() => setCurrentView('products')} 
            />
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
