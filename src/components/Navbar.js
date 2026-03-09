import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Bài học', path: '/bai-hoc' },
    { name: 'Liên hệ', path: '/lien-he' },
    { name: 'Minigame', path: '/minigame' },
    { name: 'Phụ Lục AI', path: '/phu-luc-ai' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-[10px] shadow-lg'
          : 'bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">⭐</span>
              </div>
              <span className="text-primary font-serif font-bold text-xl">Kháng Chiến 1954-1975</span>
            </motion.div>
          </Link>

          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.li
                  className={`relative cursor-pointer font-sans font-medium transition-colors group ${
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {item.name}
                  {/* Underline animation */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gray-200 w-full">
        <motion.div
          className="h-full bg-secondary"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
