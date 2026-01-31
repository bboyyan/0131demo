import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['The Brand', 'Treatments', 'Membership', 'Contact'];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-playfair font-bold text-white tracking-[0.15em] drop-shadow-sm z-50 pointer-events-auto select-none">
          LUMIÈRE <span className="text-rose-200 font-light italic">Spa</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white/5 backdrop-blur-md px-10 py-4 rounded-full border border-white/10 space-x-10 items-center hover:bg-white/10 transition-all duration-300">
          {menuItems.map((item) => (
            <a key={item} href="#" className="text-xs font-medium text-white/90 hover:text-white transition-colors tracking-[0.2em] uppercase font-sans">
              {item}
            </a>
          ))}
          <div className="w-px h-3 bg-white/20 mx-2"></div>
          <button className="text-white/90 text-xs font-bold hover:text-white transition-colors tracking-widest uppercase cursor-pointer">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50 relative p-2 bg-white/10 backdrop-blur rounded-full active:scale-95 transition-transform cursor-pointer" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-neutral-900/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {menuItems.map((item, idx) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="text-2xl font-playfair text-white tracking-widest italic"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
