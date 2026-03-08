import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-gold">Về Dự Án</h3>
            <p className="text-gray-300 leading-relaxed">
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
            <h3 className="text-xl font-bold mb-4 text-gold">Môn Học</h3>
            <ul className="space-y-2 text-gray-300">
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
            <h3 className="text-xl font-bold mb-4 text-gold">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-gold cursor-pointer transition-colors">→ Trang chủ</li>
              <li className="hover:text-gold cursor-pointer transition-colors">→ Bài học</li>
              <li className="hover:text-gold cursor-pointer transition-colors">→ Minigame</li>
              <li className="hover:text-gold cursor-pointer transition-colors">→ Liên hệ</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2 text-gold">
              <span className="text-2xl">⭐</span>
              <span className="text-lg font-semibold">Lời Cảm Ơn</span>
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Cảm ơn các thế hệ cha anh đã hi sinh vì độc lập, tự do của Tổ quốc. 
              Cảm ơn quý thầy cô đã truyền đạt những bài học quý báu này cho thế hệ trẻ.
            </p>
            <div className="flex justify-center space-x-8 mt-6">
              <span className="text-4xl">🇻🇳</span>
              <span className="text-4xl">❤️</span>
              <span className="text-4xl">✊</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>© 2026 Dự án Lịch Sử Đảng. Được phát triển với React & Tailwind CSS.</p>
          <p className="mt-2">
            "Không có gì quý hơn độc lập, tự do" - Chủ tịch Hồ Chí Minh
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
