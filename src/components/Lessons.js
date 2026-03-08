import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lessons = [
  {
    id: 1,
    title: 'Độc Lập Tự Chủ & Đoàn Kết Quốc Tế',
    description: 'Tự lực cánh sinh là gốc, kết hợp sức mạnh dân tộc với sức mạnh quốc tế.',
    icon: '🌏',
    color: 'from-red-500 to-red-700',
    detail: 'Việt Nam luôn giữ vững nguyên tắc tự lực tự cường, đồng thời khéo léo tranh thủ sự ủng hộ của các nước xã hội chủ nghĩa và phong trào giải phóng dân tộc trên thế giới. Đây là nền tảng cho mọi thắng lợi.',
  },
  {
    id: 2,
    title: 'Kết Hợp Sức Mạnh Dân Tộc & Thời Đại',
    description: 'Kết hợp 3 tầng mặt trận: Việt Nam, Đông Dương, Nhân dân thế giới.',
    icon: '🤝',
    color: 'from-orange-500 to-orange-700',
    detail: 'Ba tầng mặt trận được xây dựng vững chắc: Mặt trận thống nhất dân tộc Việt Nam, Mặt trận đoàn kết Đông Dương (Việt-Lào-Campuchia), và Mặt trận nhân dân thế giới ủng hộ Việt Nam, tạo thành sức mạnh tổng hợp không thể đánh bại.',
  },
  {
    id: 3,
    title: 'Ứng Xử Khôn Khéo Với Nước Lớn',
    description: 'Khôn khéo, tế nhị, không làm mất mặt nước lớn trong đàm phán.',
    icon: '🎭',
    color: 'from-purple-500 to-purple-700',
    detail: 'Trong đàm phán Paris, Việt Nam rất khéo léo giữ "sĩ diện" cho Mỹ, giúp họ tìm được "lối thoát danh dự" khỏi chiến tranh. Đây là nghệ thuật ngoại giao cao, vừa đạt mục tiêu vừa không đẩy đối phương vào thế bí.',
  },
  {
    id: 4,
    title: 'Đoàn Kết Đông Dương',
    description: 'Việt - Miên - Lào liên minh chiến đấu chống kẻ thù chung.',
    icon: '⚔️',
    color: 'from-green-500 to-green-700',
    detail: 'Mối quan hệ đặc biệt Việt Nam - Lào - Campuchia được xây dựng trên cơ sở cùng có lợi, cùng chiến đấu chống chủ nghĩa đế quốc. Sự đoàn kết này là yếu tố quan trọng làm nên thắng lợi chung của các dân tộc Đông Dương.',
  },
  {
    id: 5,
    title: 'Sự Lãnh Đạo Của Đảng',
    description: 'Nhân tố quyết định mọi thắng lợi của cách mạng Việt Nam.',
    icon: '⭐',
    color: 'from-yellow-500 to-yellow-700',
    detail: 'Đảng Cộng sản Việt Nam với đường lối đúng đắn, sáng tạo, linh hoạt đã lãnh đạo nhân dân vượt qua mọi khó khăn thử thách. Vai trò lãnh đạo của Đảng là nhân tố quyết định, xuyên suốt mọi thắng lợi của cách mạng.',
  },
  {
    id: 6,
    title: 'Phối Hợp Quân Sự - Chính Trị - Ngoại Giao',
    description: 'Thắng lợi chiến trường là cơ sở cho thắng lợi ngoại giao.',
    icon: '⚖️',
    color: 'from-blue-500 to-blue-700',
    detail: 'Ba mặt trận đấu tranh được phối hợp chặt chẽ, trong đó quân sự là nòng cốt, chính trị là gốc, ngoại giao là mũi nhọn. Chiến thắng quân sự tạo thế và lực cho đấu tranh ngoại giao đạt hiệu quả cao.',
  },
  {
    id: 7,
    title: 'Nắm Bắt Thời Cơ',
    description: 'Chủ động tạo cục diện "vừa đánh, vừa đàm" (Mậu Thân 1968, Điện Biên Phủ trên không 1972).',
    icon: '⏰',
    color: 'from-indigo-500 to-indigo-700',
    detail: 'Tổng tiến công Mậu Thân 1968 và chiến dịch Điện Biên Phủ trên không 1972 là những thời điểm then chốt. Việt Nam chủ động tạo ra thế mạnh trên chiến trường, buộc Mỹ phải ngồi vào bàn đàm phán với tư thế có lợi cho ta.',
  },
  {
    id: 8,
    title: 'Vai Trò Nghiên Cứu Chiến Lược',
    description: 'Think tank CP-50 đóng vai trò quan trọng trong đàm phán Paris.',
    icon: '🧠',
    color: 'from-pink-500 to-pink-700',
    detail: 'Ban Cố vấn Chiến lược CP-50 đã nghiên cứu sâu, đưa ra các phương án, chiến lược đàm phán hiệu quả. Đây là bài học về tầm quan trọng của công tác nghiên cứu, tham mưu chiến lược trong ngoại giao.',
  },
  {
    id: 9,
    title: 'Tư Tưởng Ngoại Giao Hồ Chí Minh',
    description: 'Cội nguồn thắng lợi: "Dĩ bất biến, ứng vạn biến".',
    icon: '🕊️',
    color: 'from-teal-500 to-teal-700',
    detail: 'Tư tưởng ngoại giao Hồ Chí Minh là nền tảng triết lý cho mọi hoạt động đối ngoại: kiên định mục tiêu độc lập dân tộc, linh hoạt trong chiến lược chiến thuật, đạo đức trong quan hệ quốc tế, và luôn đặt lợi ích dân tộc lên hàng đầu.',
  },
];

const Lessons = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  return (
    <section id="lessons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-crimson mb-4">
            Bài Học Kinh Nghiệm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những bài học quý báu từ cuộc kháng chiến chống Mỹ cứu nước vĩ đại của dân tộc,
            giá trị vượt thời gian cho các thế hệ mai sau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedLesson(lesson)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className={`h-32 bg-gradient-to-br ${lesson.color} flex items-center justify-center`}>
                <span className="text-6xl">{lesson.icon}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{lesson.title}</h3>
                <p className="text-gray-600 leading-relaxed">{lesson.description}</p>
              </div>
              <div className="px-6 pb-6">
                <div className="w-full h-1 bg-gradient-to-r from-crimson to-gold rounded-full"></div>
                <p className="text-sm text-gray-400 mt-2 text-center">👆 Nhấn để xem chi tiết</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal hiển thị chi tiết */}
        <AnimatePresence>
          {selectedLesson && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLesson(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className={`h-48 bg-gradient-to-br ${selectedLesson.color} flex items-center justify-center relative`}>
                  <span className="text-8xl">{selectedLesson.icon}</span>
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-all"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-crimson mb-4">
                    {selectedLesson.title}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-crimson to-gold rounded-full mb-6"></div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-crimson">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">📌 Tóm tắt</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedLesson.description}</p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">📖 Chi tiết & Dẫn chứng lịch sử</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedLesson.detail}</p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-gold">
                      <h3 className="font-bold text-gray-800 mb-2 text-lg">💡 Ý nghĩa thời đại</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Bài học này không chỉ có giá trị lịch sử mà còn là kim nam châm cho công tác 
                        ngoại giao hiện đại của Việt Nam, đặc biệt trong bối cảnh hội nhập quốc tế sâu rộng.
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedLesson(null)}
                    className="mt-8 w-full bg-crimson hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all"
                  >
                    Đóng
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-crimson to-red-700 text-white p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl font-bold italic mb-4">
              "Những bài học này không chỉ thuộc về quá khứ, mà còn là kim nam châm soi đường cho hiện tại và tương lai."
            </p>
            <p className="text-lg opacity-90">Giá trị lịch sử và thời đại</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lessons;
