import React from 'react';
import { motion } from 'framer-motion';
import ngoaigiaoImage from '../assets/ngoaigiao.jpg';
import covid19Image from '../assets/covid19.jpg';
import wtoImage from '../assets/wto.webp';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Phần Ngoại giao cây tre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-6">
            🌏 Ngoại giao Việt Nam trong kỷ nguyên vươn mình
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-8"></div>
        </motion.div>

        {/* Ngoại giao cây tre */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-600/30"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🎋</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-center text-yellow-400 mb-6">
              "Ngoại giao cây tre"
            </h3>
            <p className="text-lg font-sans text-gray-300 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              Giống như cây tre Việt Nam - vững gốc rễ, thân mềm dẻo, ngọn vươn cao - ngoại giao 
              nước ta kết hợp sức mạnh nội lực với khả năng ứng xử linh hoạt trong bối cảnh quốc tế đa chiều.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-xl shadow-md border border-green-600/30 backdrop-blur-sm"
              >
                <div className="text-4xl text-center mb-3">🌱</div>
                <h4 className="font-serif font-bold text-center text-green-400 mb-2">Rễ vững</h4>
                <p className="text-gray-300 font-sans text-center text-sm">
                  Độc lập tự chủ, lợi ích dân tộc là nền tảng
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-xl shadow-md border border-green-600/30 backdrop-blur-sm"
              >
                <div className="text-4xl text-center mb-3">🎋</div>
                <h4 className="font-serif font-bold text-center text-green-400 mb-2">Thân dẻo</h4>
                <p className="text-gray-300 font-sans text-center text-sm">
                  Linh hoạt, sáng tạo trong chiến lược, chiến thuật
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 p-6 rounded-xl shadow-md border border-green-600/30 backdrop-blur-sm"
              >
                <div className="text-4xl text-center mb-3">☀️</div>
                <h4 className="font-serif font-bold text-center text-green-400 mb-2">Ngọn cao</h4>
                <p className="text-gray-300 font-sans text-center text-sm">
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
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src={ngoaigiaoImage} 
                alt="Ngoại giao Việt Nam" 
                className="relative rounded-2xl shadow-2xl max-w-full h-auto transition-all hover:scale-[1.02] border-2 border-yellow-600/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Liên hệ thực tiễn */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-600/30"
          >
            <h3 className="text-3xl font-serif font-bold text-center mb-6 text-yellow-400">
              🔗 Liên hệ thực tiễn
            </h3>
            <div className="space-y-4 text-lg font-sans leading-relaxed">
              <div className="bg-emerald-900/30 rounded-xl p-6 border-l-4 border-emerald-500 backdrop-blur-sm">
                <h4 className="font-serif font-bold text-emerald-400 mb-3 text-xl">🤗 Vận dụng bài học "Đại đoàn kết toàn dân tộc"</h4>
                <p className="mb-3 text-gray-300">
                  Trong đại dịch COVID-19 hoặc các đợt thiên tai, tinh thần đoàn kết, tương thân tương ái của người Việt lại được khơi dậy mạnh mẽ như thời kháng chiến.
                </p>
                <p className="text-gray-400">
                  Phát huy vai trò của Mặt trận Tổ quốc Việt Nam trong việc tập hợp sức mạnh các tầng lớp nhân dân, kiều bào nước ngoài để xây dựng đất nước.
                </p>
              </div>
              
              <div className="bg-sky-900/30 rounded-xl p-6 border-l-4 border-sky-500 backdrop-blur-sm">
                <h4 className="font-serif font-bold text-sky-400 mb-3 text-xl">🌐 Vận dụng bài học "Kết hợp sức mạnh dân tộc với sức mạnh thời đại"</h4>
                <p className="mb-3 text-gray-300">
                  Việt Nam hiện nay kiên trì đường lối đối ngoại "ngoại giao cây tre": đa phương hóa, đa dạng hóa quan hệ quốc tế, là bạn, là đối tác tin cậy của các nước.
                </p>
                <p className="text-gray-400">
                  Chủ động hội nhập kinh tế quốc tế (gia nhập WTO, các hiệp định tự do thương mại CPTPP, EVFTA...) để tranh thủ nguồn vốn, công nghệ và thị trường.
                </p>
              </div>
              
              <div className="bg-rose-900/30 rounded-xl p-6 border-l-4 border-rose-500 backdrop-blur-sm">
                <h4 className="font-serif font-bold text-rose-400 mb-3 text-xl">🏛️ Vận dụng bài học "Sự lãnh đạo đúng đắn của Đảng"</h4>
                <p className="mb-3 text-gray-300">
                  Đảng không ngừng tự đổi mới, chỉnh đốn, quyết liệt trong công tác phòng chống tham nhũng, tiêu cực để củng cố niềm tin của nhân dân.
                </p>
                <p className="text-gray-400">
                  Kiên định mục tiêu độc lập dân tộc gắn liền với CNXH trong bối cảnh tình hình thế giới có nhiều biến động phức tạp.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vận dụng bài học lịch sử */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/60 to-orange-500/60 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                src={covid19Image}
                alt="Đoàn kết toàn dân trong đại dịch COVID-19"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-red-500/30 shadow-xl"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-600/60 to-cyan-500/60 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                src={wtoImage}
                alt="Việt Nam hội nhập kinh tế quốc tế với WTO"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-sky-500/30 shadow-xl"
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-600/30"
          >
            <h3 className="text-3xl font-serif font-bold text-center mb-6 text-yellow-400">
              ✨ Vận dụng bài học lịch sử vào thực tiễn
            </h3>
            <div className="space-y-4 text-lg font-sans leading-relaxed">
              <div className="bg-red-900/30 rounded-xl p-6 border-l-4 border-red-500 backdrop-blur-sm">
                <p className="mb-4 text-gray-300">
                  <strong className="text-red-400">🎯 Tự tin, tự lực, tự cường:</strong> Tinh thần độc lập tự chủ trong chính sách 
                  đối ngoại, không phụ thuộc vào một nước lớn nào, đa phương hóa, đa dạng hóa quan hệ quốc tế.
                </p>
              </div>
              
              <div className="bg-blue-900/30 rounded-xl p-6 border-l-4 border-blue-500 backdrop-blur-sm">
                <p className="mb-4 text-gray-300">
                  <strong className="text-blue-400">🤝 Kết hợp sức mạnh:</strong> Hội nhập quốc tế sâu rộng, đồng thời giữ vững 
                  bản sắc dân tộc. Việt Nam là "bạn, đối tác tin cậy" của cộng đồng quốc tế.
                </p>
              </div>
              
              <div className="bg-green-900/30 rounded-xl p-6 border-l-4 border-green-500 backdrop-blur-sm">
                <p className="text-gray-300">
                  <strong className="text-green-400">💎 Kho tàng kinh nghiệm:</strong> Thắng lợi 1975 không chỉ là niềm tự hào 
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
