import { Plus, Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const links = ['Home', 'About us', 'Products', 'Contact us'];

  return (
    <footer className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-positivus-dark text-white rounded-t-[3rem] p-12 md:p-20 space-y-16">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2">
              <div className="bg-positivus-green text-positivus-dark p-1 rounded-sm">
                <Plus size={24} strokeWidth={3} />
              </div>
              <span className="text-3xl font-bold tracking-tight uppercase">Kapsun</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
              {links.map((link) => (
                <a key={link} href="#" className="underline-offset-4 hover:underline hover:text-positivus-green transition-all">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Social icons rendered below */}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Us Section */}
            <div className="space-y-4">
              <div className="bg-positivus-green text-positivus-dark px-2 inline-block rounded-md">
                <span className="text-xl font-bold">Contact Us</span>
              </div>
              <p className="text-lg"><strong>Phone:</strong> +91 93777 39050</p>
              <p className="text-lg"><strong>Email:</strong> inquiry@kapsun.com</p>
              <p className="text-lg"><strong>Address:</strong> Raj Estate, B/h Sabar Guest House, Sarkhej‑Sanand Cross Road, Sarkhej, Ahmedabad, Gujarat 382210, India</p>
            </div>

            {/* Product Inquiry Section */}
            <div className="space-y-4">
              <div className="bg-positivus-green text-positivus-dark px-2 inline-block rounded-md">
                <span className="text-xl font-bold">Product Inquiry</span>
              </div>
              <p className="text-lg"><strong>Phone 1:</strong> +91 93777 39050</p>
              <p className="text-lg"><strong>Phone 2:</strong> +91 93749 39050</p>
              <p className="text-lg"><strong>Email:</strong> inquiry@kapsun.com</p>
            </div>

            {/* Export Inquiries Section */}
            <div className="space-y-4">
              <div className="bg-positivus-green text-positivus-dark px-2 inline-block rounded-md">
                <span className="text-xl font-bold">Export Inquiries</span>
              </div>
              <p className="text-lg"><strong>Phone:</strong> +91 60000 90050</p>
              <p className="text-lg"><strong>Email:</strong> export@kapsun.com</p>
              <p className="text-lg"><strong>Contact Person:</strong> Mr. Paresh Kapoor – +91 98240 39050 – kapsun.com@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@kapsunaircooler" target="_blank" rel="noopener noreferrer" className="bg-white text-positivus-dark p-2 rounded-full hover:bg-positivus-green transition-colors">
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/company/kapsunaircoolers/" target="_blank" rel="noopener noreferrer" className="bg-white text-positivus-dark p-2 rounded-full hover:bg-positivus-green transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/kapsunaircooler/" target="_blank" rel="noopener noreferrer" className="bg-white text-positivus-dark p-2 rounded-full hover:bg-positivus-green transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/kapsunaircoolers/" target="_blank" rel="noopener noreferrer" className="bg-white text-positivus-dark p-2 rounded-full hover:bg-positivus-green transition-colors">
              <Facebook size={20} />
            </a>
          </div>

          {/* Newsletter Section */}
          <div className="bg-gray-800/50 p-12 rounded-[2.5rem]">
            <div className="flex flex-col md:flex-row gap-6">
              <input 
                type="email" 
                placeholder="Subscribe for Technical Updates" 
                className="flex-1 bg-transparent border-2 border-white rounded-2xl p-5 focus:outline-none focus:ring-4 focus:ring-positivus-green/30 transition-all font-medium text-lg" 
              />
              <button className="bg-positivus-green text-positivus-dark px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row gap-8 justify-between text-lg text-white/60">
            <div className="flex gap-8">
              <span>© 2024 Kapsun Air Coolers. Engineering excellence as standard.</span>
              <a href="#" className="hover:text-white transition-colors">Technical Privacy</a>
            </div>
            <span>Built by Kapsun Engineering Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
