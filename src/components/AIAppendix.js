import React from 'react';
import { motion } from 'framer-motion';

const AIAppendix = () => {
  const aiUsage = [
    {
      title: 'Claude Sonnet 4.5',
      description: 'Hỗ trợ animation, tối ưu hóa giao diện cho trang web',
      icon: '🤖',
      features: [
        'Tạo hiệu ứng chuyển động mượt mà',
        'Tối ưu hóa trải nghiệm người dùng',
        'Thiết kế giao diện đẹp mắt và chuyên nghiệp',
        'Cải thiện tính tương tác của website'
      ],
      color: 'from-purple-600 to-blue-600'
    },
    {
      title: 'Gemini Pro',
      description: 'Hỗ trợ cung cấp thêm nội dung, gợi ý cách trình bày nội dung cho trang web',
      icon: '✨',
      features: [
        'Cung cấp nội dung lịch sử chi tiết',
        'Gợi ý cách trình bày thông tin hiệu quả',
        'Phân tích và tổ chức nội dung logic',
        'Đề xuất cách tiếp cận sáng tạo'
      ],
      color: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="ai-appendix" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            📋 Báo Cáo Sử Dụng AI
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Tổng hợp các công nghệ AI được sử dụng trong quá trình phát triển website
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {aiUsage.map((ai, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className={`text-6xl mb-6 bg-gradient-to-r ${ai.color} bg-clip-text text-transparent`}>
                {ai.icon}
              </div>
              <h3 className={`text-3xl font-serif font-bold mb-4 bg-gradient-to-r ${ai.color} bg-clip-text text-transparent`}>
                {ai.title}
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {ai.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-primary text-lg mb-3">Chức năng chính:</h4>
                {ai.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-secondary text-xl mt-1">✓</span>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AIAppendix;
