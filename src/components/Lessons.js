import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Dữ liệu 6 bài học kinh nghiệm
const lessons = [
  {
    id: 1,
    title: 'Độc Lập Tự Chủ & Đoàn Kết Quốc Tế',
    description: [
      'Tự lực cánh sinh là gốc - Không phụ thuộc hoàn toàn vào ngoại lực',
      'Kết hợp sức mạnh dân tộc với sức mạnh thời đại',
      'Tranh thủ ủng hộ quốc tế nhưng không đánh mất chủ quyền',
      'Nguyên tắc: "Tự lực tự cường, tranh thủ sự ủng hộ quốc tế"',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 2,
    title: 'Ba Tầng Mặt Trận Đấu Tranh',
    description: [
      'Mặt trận thống nhất dân tộc Việt Nam - Nền tảng cốt lõi',
      'Mặt trận đoàn kết Đông Dương (Việt-Lào-Campuchia)',
      'Mặt trận nhân dân thế giới ủng hộ Việt Nam',
      'Sức mạnh tổng hợp không thể đánh bại',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
  },
  {
    id: 3,
    title: 'Nghệ Thuật Ngoại Giao Khôn Khéo',
    description: [
      'Khéo léo giữ "sĩ diện" cho đối phương trong đàm phán',
      'Tạo "lối thoát danh dự" cho Mỹ tại Hội nghị Paris',
      'Vừa kiên định mục tiêu, vừa linh hoạt chiến thuật',
      'Không đẩy đối phương vào thế bí - Nghệ thuật cao nhất',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 4,
    title: 'Phối Hợp 3 Mặt Trận: Quân Sự - Chính Trị - Ngoại Giao',
    description: [
      'Quân sự là nòng cốt - Tạo thế mạnh trên chiến trường',
      'Chính trị là gốc - Sức mạnh nhân dân và hệ thống',
      'Ngoại giao là mũi nhọn - Tranh thủ thắng lợi pháp lý',
      'Ba mặt trận phối hợp chặt chẽ, hỗ trợ lẫn nhau',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80',
  },
  {
    id: 5,
    title: 'Nắm Bắt Và Tạo Ra Thời Cơ Chiến Lược',
    description: [
      'Tổng tiến công Mậu Thân 1968 - Bước ngoặt lịch sử',
      'Chiến dịch Điện Biên Phủ trên không 1972 - Đòn quyết định',
      'Chủ động tạo cục diện "vừa đánh, vừa đàm"',
      'Buộc Mỹ phải ngồi vào bàn đàm phán với tư thế có lợi',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80',
  },
  {
    id: 6,
    title: 'Tư Tưởng Ngoại Giao Hồ Chí Minh',
    description: [
      'Kiên định mục tiêu độc lập dân tộc - "Dĩ bất biến"',
      'Linh hoạt chiến lược chiến thuật - "Ứng vạn biến"',
      'Đạo đức là nền tảng trong quan hệ quốc tế',
      'Luôn đặt lợi ích dân tộc lên hàng đầu',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&q=80',
  },
];

const Lessons = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Theo dõi vị trí scroll để cập nhật section hiện tại
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(Math.min(newSection, lessons.length));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="lessons" className="relative bg-zinc-950 scroll-smooth">
      {/* Thanh tiến trình scroll cố định */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 origin-left z-50 shadow-lg shadow-red-500/50"
        style={{ scaleX }}
      />

      {/* Indicator bài học hiện tại */}
      <div className="fixed top-8 right-8 z-40 bg-zinc-900/90 backdrop-blur-md border border-yellow-600/30 rounded-xl px-6 py-3 shadow-2xl">
        <p className="text-yellow-500 font-sans font-bold text-sm">
          Bài học {Math.min(currentSection + 1, lessons.length)}/{lessons.length}
        </p>
      </div>

      {/* Section giới thiệu */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center z-10 max-w-5xl"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-8">
            Bài học kinh nghiệm
          </h1>
          <div className="h-1 w-64 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-8"></div>
          <p className="text-2xl md:text-3xl text-gray-300 font-sans leading-relaxed mb-12">
            Những giá trị vượt thời gian từ cuộc kháng chiến chống Mỹ cứu nước
          </p>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-yellow-500 text-4xl"
          >
            ↓
          </motion.div>
          <p className="text-yellow-500/70 font-sans mt-4 text-sm">Cuộn xuống để khám phá</p>
        </motion.div>
      </section>

      {/* Các bài học - Mỗi section full screen */}
      {lessons.map((lesson, index) => (
        <section
          key={lesson.id}
          id={`bai-hoc-${lesson.id}`}
          className="min-h-screen flex items-center px-4 py-20 relative"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Nội dung bên trái */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="inline-block bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 mb-6">
                  <span className="text-yellow-400 font-sans font-bold text-sm">
                    #{lesson.id}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                  {lesson.title}
                </h2>
                
                <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-yellow-500 rounded-full mb-8"></div>
                
                <ul className="space-y-5">
                  {lesson.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.8 }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="text-yellow-500 text-2xl mt-1 group-hover:scale-125 transition-transform">
                        ✦
                      </span>
                      <p className="text-gray-300 text-lg md:text-xl font-sans leading-relaxed group-hover:text-yellow-100 transition-colors">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Hình ảnh bên phải */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl border-2 border-yellow-600/30 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent rounded-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Section kết thúc */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950/20 to-zinc-950"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-5xl"
        >
          <div className="bg-gradient-to-br from-red-900/40 to-zinc-900/40 backdrop-blur-xl border border-yellow-600/30 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-yellow-400 mb-8 italic">
              "Những bài học này không chỉ thuộc về quá khứ,<br />
              mà còn là kim nam châm soi đường<br />
              cho hiện tại và tương lai."
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-sans">
              Giá trị lịch sử và thời đại
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Lessons;
