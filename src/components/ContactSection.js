import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Phần Ngoại giao cây tre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-crimson mb-6">
            🌏 Ngoại Giao Việt Nam Trong Kỷ Nguyên Vươn Mình
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-crimson to-gold rounded-full mx-auto mb-8"></div>
        </motion.div>

        {/* Ngoại giao cây tre */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl border-2 border-green-200"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl">🎋</span>
            </div>
            <h3 className="text-3xl font-bold text-center text-green-800 mb-6">
              "Ngoại Giao Cây Tre"
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              Giống như cây tre Việt Nam - vững gốc rễ, thân mềm dẻo, ngọn vươn cao - ngoại giao 
              nước ta kết hợp sức mạnh nội lực với khả năng ứng xử linh hoạt trong bối cảnh quốc tế đa chiều.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-center mb-3">🌱</div>
                <h4 className="font-bold text-center text-green-700 mb-2">Rễ Vững</h4>
                <p className="text-gray-600 text-center text-sm">
                  Độc lập tự chủ, lợi ích dân tộc là nền tảng
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-center mb-3">🎋</div>
                <h4 className="font-bold text-center text-green-700 mb-2">Thân Dẻo</h4>
                <p className="text-gray-600 text-center text-sm">
                  Linh hoạt, sáng tạo trong chiến lược, chiến thuật
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-center mb-3">☀️</div>
                <h4 className="font-bold text-center text-green-700 mb-2">Ngọn Cao</h4>
                <p className="text-gray-600 text-center text-sm">
                  Hướng tới hòa bình, hợp tác, phát triển
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vận dụng bài học lịch sử */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-crimson to-red-700 rounded-2xl p-8 shadow-xl text-white"
          >
            <h3 className="text-3xl font-bold text-center mb-6">
              ✨ Vận Dụng Bài Học Lịch Sử Vào Thực Tiễn
            </h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="mb-4">
                  <strong>🎯 Tự tin, tự lực, tự cường:</strong> Tinh thần độc lập tự chủ trong chính sách 
                  đối ngoại, không phụ thuộc vào một nước lớn nào, đa phương hóa, đa dạng hóa quan hệ quốc tế.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p className="mb-4">
                  <strong>🤝 Kết hợp sức mạnh:</strong> Hội nhập quốc tế sâu rộng, đồng thời giữ vững 
                  bản sắc dân tộc. Việt Nam là "bạn, đối tác tin cậy" của cộng đồng quốc tế.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <p>
                  <strong>💎 Kho tàng kinh nghiệm:</strong> Thắng lợi 1975 không chỉ là niềm tự hào 
                  lịch sử mà còn là nguồn cảm hứng, bài học quý báu cho công tác ngoại giao, giúp 
                  Việt Nam vượt qua thách thức và hội nhập thành công trong thế kỷ 21.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Form liên hệ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            📬 Chia Sẻ Ý Kiến & Đóng Góp
          </h3>
          <p className="text-lg text-gray-600">
            Góp phần xây dựng kho tài liệu quý báu về lịch sử dân tộc
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Thông Tin Liên Hệ</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">lichsu.dang@edu.vn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Điện thoại</h4>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-800">Địa chỉ</h4>
                  <p className="text-gray-600">Trường Đại học, Thành phố Hà Nội</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-crimson to-red-700 rounded-xl text-white">
              <h4 className="font-bold text-xl mb-2">Giờ Làm Việc</h4>
              <p className="opacity-90">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
              <p className="opacity-90">Thứ 7 - Chủ nhật: Nghỉ</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Họ và Tên
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nội dung
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-crimson resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-crimson hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center justify-center h-full"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">
                    Gửi Thành Công!
                  </h3>
                  <p className="text-gray-600">
                    Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
