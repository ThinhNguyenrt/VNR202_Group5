import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-crimson mb-6">
              Bài Học Kinh Nghiệm
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-700 mb-8">
              Cuộc Kháng Chiến Chống Mỹ
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              (1954 - 1975)
            </p>
            
            {/* Bối cảnh lịch sử */}
            <div className="max-w-4xl mx-auto text-left bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-crimson mb-4">📜 Bối Cảnh Lịch Sử</h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Sau Hiệp định Geneva 1954, đất nước tạm thời chia làm hai miền:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-crimson">
                    <h4 className="font-bold text-crimson mb-2">🔴 Miền Bắc</h4>
                    <p className="text-base">Hậu phương lớn, xây dựng chế độ Xã hội Chủ nghĩa, làm cơ sở vững chắc cho cuộc đấu tranh giải phóng miền Nam.</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h4 className="font-bold text-blue-600 mb-2">🔵 Miền Nam</h4>
                    <p className="text-base">Tiền tuyến lớn, thực hiện cách mạng dân tộc dân chủ nhân dân, đấu tranh giành độc lập và tự do.</p>
                  </div>
                </div>
                <p className="text-center font-semibold text-crimson pt-4 text-xl">
                  🎯 Mục tiêu chung: Hòa bình, Thống nhất Tổ quốc
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 relative"
          >
            <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-r from-crimson to-red-700 rounded-2xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-6xl mb-4">🇻🇳</p>
                  <p className="text-2xl font-bold italic">
                    "Không có gì quý hơn độc lập, tự do"
                  </p>
                  <p className="text-lg mt-4 opacity-90">- Chủ tịch Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <button
              onClick={() => document.getElementById('lessons')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-crimson hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all"
            >
              Khám Phá Bài Học ↓
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
