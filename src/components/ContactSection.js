import React from 'react';
import { motion } from 'framer-motion';
import ngoaigiaoImage from '../assets/ngoaigiao.jpg';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-red-700 to-accent"
    >
      <div className="container mx-auto px-4">
        {/* Phần Ngoại giao cây tre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            🌏 Ngoại Giao Việt Nam Trong Kỷ Nguyên Vươn Mình
          </h2>
          <div className="h-1 w-32 bg-secondary rounded-full mx-auto mb-8"></div>
        </motion.div>

        {/* Ngoại giao cây tre */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-secondary/50"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🎋</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-center text-accent mb-6">
              "Ngoại Giao Cây Tre"
            </h3>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              Giống như cây tre Việt Nam - vững gốc rễ, thân mềm dẻo, ngọn vươn cao - ngoại giao 
              nước ta kết hợp sức mạnh nội lực với khả năng ứng xử linh hoạt trong bối cảnh quốc tế đa chiều.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-2 border-accent/30"
              >
                <div className="text-4xl text-center mb-3">🌱</div>
                <h4 className="font-serif font-bold text-center text-accent mb-2">Rễ Vững</h4>
                <p className="text-gray-600 font-sans text-center text-sm">
                  Độc lập tự chủ, lợi ích dân tộc là nền tảng
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-2 border-accent/30"
              >
                <div className="text-4xl text-center mb-3">🎋</div>
                <h4 className="font-serif font-bold text-center text-accent mb-2">Thân Dẻo</h4>
                <p className="text-gray-600 font-sans text-center text-sm">
                  Linh hoạt, sáng tạo trong chiến lược, chiến thuật
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md border-2 border-accent/30"
              >
                <div className="text-4xl text-center mb-3">☀️</div>
                <h4 className="font-serif font-bold text-center text-accent mb-2">Ngọn Cao</h4>
                <p className="text-gray-600 font-sans text-center text-sm">
                  Hướng tới hòa bình, hợp tác, phát triển
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Hình ảnh ngoại giao */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img 
              src={ngoaigiaoImage} 
              alt="Ngoại giao Việt Nam" 
              className="rounded-2xl shadow-2xl max-w-full h-auto transition-all hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Vận dụng bài học lịch sử */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-secondary/50"
          >
            <h3 className="text-3xl font-serif font-bold text-center mb-6 text-primary">
              ✨ Vận Dụng Bài Học Lịch Sử Vào Thực Tiễn
            </h3>
            <div className="space-y-4 text-lg font-sans leading-relaxed">
              <div className="bg-red-50 rounded-xl p-6 border-l-4 border-primary">
                <p className="mb-4">
                  <strong>🎯 Tự tin, tự lực, tự cường:</strong> Tinh thần độc lập tự chủ trong chính sách 
                  đối ngoại, không phụ thuộc vào một nước lớn nào, đa phương hóa, đa dạng hóa quan hệ quốc tế.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                <p className="mb-4">
                  <strong>🤝 Kết hợp sức mạnh:</strong> Hội nhập quốc tế sâu rộng, đồng thời giữ vững 
                  bản sắc dân tộc. Việt Nam là "bạn, đối tác tin cậy" của cộng đồng quốc tế.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border-l-4 border-accent">
                <p>
                  <strong>💎 Kho tàng kinh nghiệm:</strong> Thắng lợi 1975 không chỉ là niềm tự hào 
                  lịch sử mà còn là nguồn cảm hứng, bài học quý báu cho công tác ngoại giao, giúp 
                  Việt Nam vượt qua thách thức và hội nhập thành công trong thế kỷ 21.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
