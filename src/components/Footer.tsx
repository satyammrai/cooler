import { Plus, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const links = ['Home', 'About us', 'Products', 'Contact us'];

  return (
    <footer className="pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-positivus-dark text-white rounded-t-[3rem] p-12 md:p-20 space-y-16">
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
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="bg-white text-positivus-dark p-2 rounded-full hover:bg-positivus-green transition-colors">
                  <Icon size={20} fill="currentColor" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="bg-positivus-green text-positivus-dark px-2 inline-block rounded-md">
                 <span className="text-xl font-bold">Contact us:</span>
              </div>
              <p className="text-lg">Email: eng@kapsun-coolers.com</p>
              <p className="text-lg">Phone: +1 (800) KAPSUN-01</p>
              <p className="text-lg">Address: 77 Innovation Dr, Silicon Valley, CA 94025</p>
            </div>

            <div className="flex-1 w-full">
               <div className="bg-gray-800/50 p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-6">
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
          </div>

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
