import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-crimson to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">⭐</span>
            </div>
            <span className="text-crimson font-bold text-xl">Kháng Chiến 1954-1975</span>
          </motion.div>

          <ul className="hidden md:flex space-x-8">
            {[
              { name: 'Trang chủ', id: 'home' },
              { name: 'Bài học', id: 'lessons' },
              { name: 'Liên hệ', id: 'contact' },
              { name: 'Minigame', id: 'minigame' },
              { name: 'Phụ Lục AI', id: 'ai-appendix' },
            ].map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.1, color: '#FFD700' }}
                className="cursor-pointer text-gray-700 hover:text-gold font-medium transition-colors"
                onClick={() => scrollToSection(item.id)}
              >
                {item.name}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
