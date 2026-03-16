import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
      
      <footer className="bg-footer-bg text-footer-text py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 text-center md:text-left"
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Về dự án</h3>
              <p className="leading-relaxed font-sans text-sm sm:text-base">
                Dự án website về bài học kinh nghiệm từ cuộc kháng chiến chống Mỹ 
                (1954-1975)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Liên kết nhanh</h3>
              <ul className="space-y-2 font-sans text-sm sm:text-base">
                <li className="hover:text-secondary cursor-pointer transition-colors">
                  <Link to="/">→ Trang chủ</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                  <Link to="/bai-hoc">→ Bài học</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                  <Link to="/minigame">→ Minigame</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                  <Link to="/lien-he">→ Liên hệ</Link>
                </li>
                <li className="hover:text-secondary cursor-pointer transition-colors">
                  <Link to="/phu-luc-ai">→ Phụ lục AI</Link>
                </li>
              </ul>
            </motion.div>
          </div>
          
         
        </div>
      </footer>
    </>
  );
};

export default Footer;
