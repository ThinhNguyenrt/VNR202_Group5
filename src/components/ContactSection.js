import React from 'react';
import { motion } from 'framer-motion';
import ngoaigiaoImage from '../assets/ngoaigiao.jpg';
import caotocBacNamImage from '../assets/caotocbacnam.jpg';
import duanCaotocImage from '../assets/duancaotocbacnam.jpg';

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

        {/* Bài học kỷ nguyên hội nhập */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-yellow-600/30 space-y-6"
          >
            <p className="text-lg font-sans text-gray-200 leading-relaxed">
              <strong className="text-yellow-400">Khẳng định:</strong> Hào khí của Đại thắng Mùa Xuân 1975 không chỉ nằm lại trong lịch sử mà đã chuyển hóa thành kim chỉ nam cho kỷ nguyên hội nhập và phát triển hiện nay.
            </p>

            <div className="bg-red-900/30 rounded-xl p-6 border-l-4 border-red-500 backdrop-blur-sm">
              <h4 className="font-serif font-bold text-red-400 mb-3 text-xl">🛡️ Về đấu tranh và bảo vệ Tổ quốc</h4>
              <p className="text-gray-300 font-sans text-base leading-relaxed">
                Bài học về "đoàn kết quốc tế" và "thêm bạn bớt thù" trong kháng chiến nay được Đảng ta phát triển thành đường lối đối ngoại độc lập, tự chủ, "đa phương hóa, đa dạng hóa". Nhờ đó, Việt Nam từ một nước bị bao vây cấm vận đã vươn lên vị thế cao trên trường quốc tế, hội nhập sâu rộng.
              </p>
            </div>

            <div className="bg-sky-900/30 rounded-xl p-6 border-l-4 border-sky-500 backdrop-blur-sm">
              <h4 className="font-serif font-bold text-sky-400 mb-3 text-xl">🏛️ Về xây dựng Chủ nghĩa xã hội</h4>
              <p className="text-gray-300 font-sans text-base leading-relaxed">
                Bài học "Lấy dân làm gốc" và tinh thần tự phê bình trong "Xây dựng Đảng" tiếp tục là ngọn đuốc soi đường. Công cuộc chỉnh đốn Đảng, phòng chống tham nhũng, tiêu cực hiện nay chính là để củng cố niềm tin của nhân dân, tạo động lực phát triển nền kinh tế thị trường định hướng XHCN vững chắc.
              </p>
            </div>

            <div className="bg-yellow-900/30 rounded-xl p-6 border-l-4 border-yellow-500 backdrop-blur-sm">
              <h4 className="font-serif font-bold text-yellow-400 mb-3 text-xl">🚀 Dẫn chứng thực tiễn</h4>
              <p className="text-gray-300 font-sans text-base leading-relaxed">
                Tinh thần "tự lực tự cường", xẻ dọc Trường Sơn đi cứu nước của quân dân ta trên tuyến đường mòn Hồ Chí Minh năm xưa, nay đang được vận dụng mạnh mẽ vào khát vọng kiến thiết đất nước. Tiêu biểu là việc thần tốc xây dựng các công trình trọng điểm quốc gia như tuyến Cao tốc Bắc - Nam, nối liền mạch máu kinh tế, đưa đất nước tiến vào kỷ nguyên vươn mình.
              </p>
            </div>
          </motion.div>

          {/* Hình ảnh Cao tốc Bắc - Nam */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-6 mt-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/60 to-yellow-500/60 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                src={caotocBacNamImage}
                alt="Cao tốc Bắc - Nam"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-yellow-600/30 shadow-xl"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/60 to-yellow-500/60 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                src={duanCaotocImage}
                alt="Dự án Cao tốc Bắc - Nam"
                className="relative w-full aspect-[4/3] object-cover rounded-2xl border border-yellow-600/30 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
