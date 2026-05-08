import { motion } from 'motion/react';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export default function Navbar({ onNavigate, currentView }: NavbarProps) {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About us', id: 'about' },
    { name: 'Products', id: 'products' },
    { name: 'Contact us', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b-2 border-positivus-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-4 hover:opacity-80 transition-opacity shrink-0"
          >
            
            {/* LOGO */}
            <div className="w-24 h-24 min-w-[96px] min-h-[96px] flex items-center justify-center overflow-hidden rounded-xl bg-white p-2">
              <img
                src="https://im.ge/i/whatsapp-image-2026-05-08-at-95925-am-QM1jntW"
                alt="Kapsun Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* BRAND NAME */}
            <span className="text-3xl font-black text-positivus-dark tracking-tighter uppercase whitespace-nowrap">
              Kapsun
            </span>

          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors font-medium ${
                  currentView === link.id
                    ? 'text-positivus-green underline underline-offset-4 decoration-2'
                    : 'text-positivus-dark hover:text-positivus-green'
                }`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-positivus-dark text-positivus-dark px-6 py-3 rounded-xl font-medium hover:bg-positivus-dark hover:text-white transition-all"
            >
              B2B Inquiry
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}