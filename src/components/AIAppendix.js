import React from 'react';
import { motion } from 'framer-motion';

const AIAppendix = () => {
  const aiTools = [
    {
      title: 'Trợ Lý AI Lịch Sử',
      description: 'Hỏi đáp về các sự kiện, nhân vật và bài học từ cuộc kháng chiến',
      icon: '🤖',
    },
    {
      title: 'Phân Tích Sâu',
      description: 'AI phân tích các chiến lược quân sự và chính trị trong thời kỳ kháng chiến',
      icon: '📊',
    },
    {
      title: 'Tài Liệu Tham Khảo',
      description: 'Kho tài liệu số hóa, được AI tổ chức và dễ dàng tìm kiếm',
      icon: '📚',
    },
  ];

  return (
    <section id="ai-appendix" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            🤖 Phụ Lục AI
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Công nghệ AI hỗ trợ học tập và nghiên cứu lịch sử một cách hiện đại và hiệu quả
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-lg"
            >
              <div className="text-6xl mb-4">{tool.icon}</div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-primary">{tool.title}</h3>
              <p className="text-gray-700">{tool.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-red-700 rounded-2xl p-8 text-center shadow-2xl border-2 border-secondary/50"
        >
          <h3 className="text-3xl font-serif font-bold mb-4 text-white">Trải Nghiệm AI Tương Tác</h3>
          <p className="text-lg font-sans mb-6 opacity-90 text-white">
            Đặt câu hỏi về bất kỳ khía cạnh nào của cuộc kháng chiến chống Mỹ và nhận được câu trả lời chi tiết từ AI
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-primary font-sans font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
              Bắt Đầu Trò Chuyện
            </button>
            <button className="bg-transparent border-2 border-white text-white font-sans font-bold py-3 px-6 rounded-full hover:bg-white/10 transition-all">
              Xem Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-600"
        >
          <p className="text-sm">
            * Tính năng AI đang trong giai đoạn phát triển. Thông tin được cung cấp chỉ mang tính tham khảo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAppendix;
