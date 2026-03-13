import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import genevoImage from '../assets/genevo.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-zinc-950 pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-6">
              Bài học kinh nghiệm
            </h1>
            <div className="h-1 w-48 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-200 mb-8">
              Cuộc kháng chiến chống Mỹ
            </h2>
            <p className="text-xl md:text-2xl font-sans text-gray-400 mb-8">
              (1954 - 1975)
            </p>
            
            {/* Bối cảnh lịch sử */}
            <div className="max-w-4xl mx-auto text-left bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-600/30">
              <h3 className="text-2xl font-serif font-bold text-yellow-400 mb-4">📜 Bối cảnh lịch sử</h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed font-sans">
                <p>
                  Sau Hiệp định Geneva 1954, đất nước tạm thời chia làm hai miền:
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-red-900/30 p-6 rounded-xl border-l-4 border-red-600 backdrop-blur-sm transition-all hover:scale-105 hover:bg-red-900/40">
                    <h4 className="font-bold text-red-400 mb-2">🔴 Miền Bắc</h4>
                    <p className="text-base text-gray-300">Hậu phương lớn, xây dựng chế độ Xã hội Chủ nghĩa, làm cơ sở vững chắc cho cuộc đấu tranh giải phóng miền Nam.</p>
                  </div>
                  <div className="bg-blue-900/30 p-6 rounded-xl border-l-4 border-blue-500 backdrop-blur-sm transition-all hover:scale-105 hover:bg-blue-900/40">
                    <h4 className="font-bold text-blue-400 mb-2">🔵 Miền Nam</h4>
                    <p className="text-base text-gray-300">Tiền tuyến lớn, thực hiện cách mạng dân tộc dân chủ nhân dân, đấu tranh giành độc lập và tự do.</p>
                  </div>
                </div>
                <p className="text-center font-semibold text-yellow-400 pt-4 text-xl">
                  🎯 Mục tiêu chung: Hòa bình, Thống nhất Tổ quốc
                </p>
              </div>
            </div>

            {/* Hình ảnh Geneva */}
            <div className="mt-8 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img 
                  src={genevoImage} 
                  alt="Hiệp định Paris Geneva" 
                  className="relative rounded-2xl shadow-2xl max-w-full h-auto transition-all hover:scale-[1.02] border-2 border-yellow-600/30"
                />
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
            <div className="w-full max-w-4xl mx-auto h-96 bg-gradient-to-r from-red-900/60 to-red-800/60 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden relative border border-yellow-600/30">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-6xl mb-4">🇻🇳</p>
                  <p className="text-2xl md:text-3xl font-serif font-bold italic text-yellow-300">
                    "Không có gì quý hơn độc lập, tự do"
                  </p>
                  <p className="text-lg font-sans mt-4 text-gray-300">- Chủ tịch Hồ Chí Minh</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 mb-16"
          >
            <Link to="/bai-hoc">
              <button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-sans font-bold py-4 px-8 rounded-full shadow-lg shadow-red-500/30 transform hover:scale-105 transition-all border border-yellow-600/50"
              >
                Khám Phá Bài Học ↓
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
