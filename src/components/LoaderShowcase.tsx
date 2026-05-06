import { useState } from 'react';
import { PremiumLoader } from './ui/premium-loader';

export function LoaderShowcase() {
  const [activeVariant, setActiveVariant] = useState<'star' | 'rings' | 'burst'>('star');

  const variants: Array<{ id: 'star' | 'rings' | 'burst'; name: string; description: string }> = [
    {
      id: 'star',
      name: 'Star Burst',
      description: 'Inspired by Kapsun logo - animated radiating points'
    },
    {
      id: 'rings',
      name: 'Concentric Rings',
      description: 'Ripple effect with rotating inner ring'
    },
    {
      id: 'burst',
      name: 'Pulse Burst',
      description: 'Radiating lines that pulse outward'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="space-y-10">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-bold text-positivus-dark">Premium Loaders</h2>
          <p className="text-lg text-positivus-dark/60">
            Select a loader variant to preview. Use in your application with PremiumLoader component.
          </p>
        </div>

        {/* Variant Selector */}
        <div className="grid md:grid-cols-3 gap-4">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setActiveVariant(variant.id)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                activeVariant === variant.id
                  ? 'border-positivus-green bg-positivus-green/10'
                  : 'border-positivus-dark/20 bg-white hover:border-positivus-green'
              }`}
            >
              <h3 className="text-xl font-bold text-positivus-dark mb-2">{variant.name}</h3>
              <p className="text-sm text-positivus-dark/60">{variant.description}</p>
            </button>
          ))}
        </div>

        {/* Size Preview */}
        <div className="bg-gradient-to-br from-positivus-grey to-white rounded-[3rem] p-16 border-2 border-positivus-dark space-y-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-positivus-dark mb-2">{activeVariant.toUpperCase()} - All Sizes</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-center justify-items-center">
            {/* Small */}
            <div className="space-y-4 text-center">
              <div className="bg-white border-2 border-positivus-dark rounded-2xl p-8 flex items-center justify-center h-32">
                <PremiumLoader size="sm" variant={activeVariant} text="" />
              </div>
              <p className="font-bold text-positivus-dark">Small</p>
              <p className="text-xs text-positivus-dark/60">w-12 h-12</p>
            </div>

            {/* Medium */}
            <div className="space-y-4 text-center">
              <div className="bg-white border-2 border-positivus-dark rounded-2xl p-8 flex items-center justify-center h-48">
                <PremiumLoader size="md" variant={activeVariant} text="Loading" />
              </div>
              <p className="font-bold text-positivus-dark">Medium</p>
              <p className="text-xs text-positivus-dark/60">w-20 h-20</p>
            </div>

            {/* Large */}
            <div className="space-y-4 text-center">
              <div className="bg-white border-2 border-positivus-dark rounded-2xl p-8 flex items-center justify-center h-64">
                <PremiumLoader size="lg" variant={activeVariant} text="Loading..." />
              </div>
              <p className="font-bold text-positivus-dark">Large</p>
              <p className="text-xs text-positivus-dark/60">w-32 h-32</p>
            </div>
          </div>
        </div>

        {/* Usage Code */}
        <div className="bg-positivus-dark text-white rounded-2xl p-8 space-y-4">
          <h3 className="text-xl font-bold">Usage</h3>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto text-sm">
{`import { PremiumLoader } from '@/components/ui/premium-loader';

// Basic
<PremiumLoader />

// With variant
<PremiumLoader variant="star" />

// With size
<PremiumLoader size="lg" />

// Full screen overlay
<PremiumLoader fullScreen text="Processing..." />

// All options
<PremiumLoader 
  size="lg"
  variant="burst"
  fullScreen={false}
  text="Loading Data..."
/>`}
          </pre>
        </div>

        {/* Full Screen Demo */}
        <div className="text-center">
          <button className="bg-positivus-green text-positivus-dark px-8 py-4 rounded-2xl font-bold hover:bg-positivus-dark hover:text-positivus-green border-2 border-positivus-dark transition-all">
            View Full Screen Demo
          </button>
        </div>
      </div>
    </section>
  );
}
