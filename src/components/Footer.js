import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50"></div>
      
      <footer className="bg-footer-bg text-footer-text py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Về Dự Án</h3>
              <p className="leading-relaxed font-sans">
                Dự án website giáo dục về bài học kinh nghiệm từ cuộc kháng chiến chống Mỹ 
                (1954-1975), phục vụ môn học Lịch Sử Đảng Cộng Sản Việt Nam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Môn Học</h3>
              <ul className="space-y-2 font-sans">
                <li>📖 Lịch Sử Đảng Cộng Sản Việt Nam</li>
                <li>🎓 Chương trình Đại học</li>
                <li>📅 Học kỳ I, Năm học 2025-2026</li>
                <li>👨‍🏫 Giảng viên hướng dẫn</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-serif font-bold mb-4 text-secondary">Liên Kết Nhanh</h3>
              <ul className="space-y-2 font-sans">
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
                  <Link to="/phu-luc-ai">→ Phụ Lục AI</Link>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Tham khảo section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border-t border-gray-800 pt-6 mt-6"
          >
            <div className="text-center">
              <p className="text-sm font-sans mb-2">
                © 2026 Lịch Sử Đảng Cộng Sản Việt Nam. Được phát triển với React & Tailwind CSS
              </p>
              <p className="text-xs opacity-70">
                Tham khảo: Tạp chí Nghiên cứu Quốc tế, Viện Hàn lâm Khoa học Xã hội Việt Nam
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
