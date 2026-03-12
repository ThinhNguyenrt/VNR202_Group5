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
      color: 'from-red-600 to-yellow-600'
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
      color: 'from-yellow-600 to-red-600'
    }
  ];

  return (
    <section id="ai-appendix" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500">
            📋 Báo Cáo Sử Dụng AI
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
              className="bg-zinc-900/70 rounded-2xl p-8 shadow-2xl border border-yellow-600/30 hover:border-yellow-500/50 transition-all backdrop-blur-sm"
            >
              <div className={`text-6xl mb-6`}>
                {ai.icon}
              </div>
              <h3 className={`text-3xl font-serif font-bold mb-4 bg-gradient-to-r ${ai.color} bg-clip-text text-transparent`}>
                {ai.title}
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {ai.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-bold text-yellow-400 text-lg mb-3">Chức năng chính:</h4>
                {ai.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-yellow-500 text-xl mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <p className="text-gray-300 group-hover:text-yellow-100 transition-colors">{feature}</p>
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
