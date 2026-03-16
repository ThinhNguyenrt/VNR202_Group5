import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import bacHoImage from '../assets/bachothammienbac.jpg';
import xeTangImage from '../assets/xetang.jpg';
import hoiNghiParisImage from '../assets/hoinghiparis.jpeg';

// 3 trụ cột chiến lược
const pillars = [
  {
    id: 1,
    tab: 'Xây dựng Hậu phương miền Bắc',
    strategy: 'Đưa miền Bắc lên Chủ Nghĩa Xã hội',
    analysis:
      'Tại Đại hội Đại biểu toàn quốc lần thứ III (1960), Đảng khẳng định cách mạng XHCN ở miền Bắc có vai trò quyết định nhất đối với sự phát triển của toàn bộ cách mạng Việt Nam. Miền Bắc không chỉ tự bảo vệ mình trước chiến tranh phá hoại của Mỹ, mà còn thực hiện lý tưởng "Thóc không thiếu một cân, quân không thiếu một người", trở thành hậu phương vĩ đại cung cấp sức người, sức của cho tiền tuyến miền Nam.',
    imageUrl: bacHoImage,
    caption: 'Bác hồ thăm công trình thủy lợi lớn nhất miền Bắc 20-9-1958',
  },
  {
    id: 2,
    tab: 'Tiền tuyến miền Nam',
    strategy: 'Cách mạng dân tộc dân chủ nhân dân',
    analysis:
      'Từ Hội nghị Trung ương 15 (1959), Đảng đánh giá không thể chỉ đấu tranh hòa bình, mà phải sử dụng bạo lực cách mạng, kết hợp đấu tranh chính trị với đấu tranh vũ trang.',
    method:
      'Vận dụng linh hoạt nghệ thuật "Ba mũi giáp công" (Quân sự, Chính trị, Binh vận) để đánh địch trên cả 3 vùng chiến lược. Nhờ sự chuyển hướng đúng đắn này, tiền tuyến miền Nam đã lần lượt bẻ gãy các chiến lược tàn bạo của Mỹ từ "Chiến tranh đặc biệt" đến "Chiến tranh cục bộ" và "Việt Nam hóa chiến tranh".',
    imageUrl: xeTangImage,
    caption: 'Xe tăng húc đổ cổng Dinh Độc Lập',
  },
  {
    id: 3,
    tab: 'Mặt trận ngoại giao',
    strategy:
      'Kết hợp chặt chẽ giữa sức mạnh quân sự trên chiến trường và đàm phán trên bàn hội nghị',
    analysis:
      'Sự kiện ký kết Hiệp định Paris năm 1973 là một bước ngoặt lịch sử. Đây là kết quả của chiến thắng vĩ đại "Điện Biên Phủ trên không" cuối năm 1972, buộc Mỹ phải rút quân. Nghệ thuật ngoại giao đã hiện thực hóa trọn vẹn tư tưởng của Bác Hồ: "Đánh cho Mỹ cút", tạo tiền đề tất yếu để hai năm sau ta tiến lên "Đánh cho Ngụy nhào" (1975).',
    imageUrl: hoiNghiParisImage,
    caption: 'Lễ ký kết hiệp định Paris 1973',
  },
];

// 5 bài học trọng tâm (flip cards)
const keyLessons = [
  {
    id: 1,
    title: 'Giương cao ngọn cờ Độc lập dân tộc và Chủ nghĩa xã hội',
    content: `Kết hợp Độc lập dân tộc (để tập hợp dân miền Nam) và Chủ nghĩa xã hội (để xây dựng hậu phương miền Bắc).`,
  },
  {
    id: 2,
    title: 'Tìm ra phương pháp đấu tranh đúng đắn, sáng tạo',
    content: `Sáng tạo, không máy móc. Kết hợp đấu tranh vũ trang với khởi nghĩa quần chúng; đánh vào cả sinh lực và ý chí địch.`,
  },
  {
    id: 3,
    title: 'Công tác tổ chức và lãnh đạo chiến tranh',
    content: `Nghệ thuật chớp thời cơ. Sự chỉ đạo nhạy bén, quyết đoán từ Bộ Chính trị giúp giải phóng miền Nam thần tốc trong mùa Xuân 1975.`,
  },
  {
    id: 4,
    title: 'Hết sức coi trọng công tác xây dựng Đảng',
    content: `Giữ vững quyền lãnh đạo tuyệt đối. Luôn "tự soi, tự sửa", thẳng thắn nhìn nhận khuyết điểm để ngày càng vững mạnh hơn.`,
  },
  {
    id: 5,
    title: 'Nghệ thuật ngoại giao khôn khéo',
    content: `Chiến lược "Vừa đánh, vừa đàm". Kiên định độc lập nhưng linh hoạt tạo "lối thoát danh dự" cho đối phương để đạt mục tiêu Mỹ rút quân.`,
  },
];

// Flip Card component
const FlipCard = ({ lesson }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer h-[320px] sm:h-[300px]"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          position: 'relative',
          height: '100%',
        }}
      >
        {/* Mặt trước */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-zinc-900 border border-yellow-600/30 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center shadow-xl hover:border-yellow-500/60 transition-colors"
        >
          <span className="text-yellow-500 text-3xl font-serif font-bold mb-4">
            #{lesson.id}
          </span>
          <h3 className="text-base sm:text-lg font-serif font-bold text-white text-center leading-snug">
            {lesson.title}
          </h3>
          <p className="text-yellow-500/60 text-sm mt-5 font-sans flex items-center gap-1">
            <span>↻</span> Nhấn để xem nội dung
          </p>
        </div>

        {/* Mặt sau */}
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 bg-gradient-to-br from-red-950/80 to-zinc-900 border border-red-600/40 rounded-2xl p-4 sm:p-6 flex flex-col justify-center shadow-xl"
        >
          <p className="text-gray-200 font-sans text-sm sm:text-[15px] leading-relaxed whitespace-pre-line overflow-y-auto pr-1">
            {lesson.content}
          </p>
          <p className="text-yellow-500/60 text-sm mt-4 font-sans text-right">
            ↻ Nhấn để lật lại
          </p>
        </div>
      </div>
    </div>
  );
};

const Lessons = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const activePillar = pillars[activeTab];

  return (
    <div id="lessons" className="relative bg-zinc-950 scroll-smooth">
      {/* Thanh tiến trình scroll cố định */}
      <motion.div
        className="fixed top-[60px] md:top-[72px] left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 origin-left z-40 shadow-lg shadow-red-500/50"
        style={{ scaleX }}
      />

      {/* Section giới thiệu */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-24 md:pt-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center z-10 max-w-5xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-8">
            Bài học kinh nghiệm
          </h1>
          <div className="h-1 w-40 sm:w-64 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-sans leading-relaxed mb-12 px-2">
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

      {/* ===== 3 Trụ cột chiến lược – Tabs ===== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-4">
              3 Trụ cột chiến lược
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto"></div>
          </motion.div>

          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-zinc-900/70 border border-yellow-600/20 rounded-2xl p-2 mb-8">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 px-4 rounded-xl font-sans font-semibold text-sm md:text-base text-left sm:text-center transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-red-700 to-red-600 text-white shadow-lg shadow-red-500/30'
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-zinc-800/50'
                }`}
              >
                <span className="mr-2 text-yellow-500">{index + 1}.</span>
                {pillar.tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start"
          >
            {/* Text */}
            <div className="bg-zinc-900/70 backdrop-blur-sm border border-yellow-600/20 rounded-2xl p-5 sm:p-6 md:p-8 space-y-6">
              <div>
                <span className="inline-block text-xs font-sans font-bold text-yellow-500 uppercase tracking-widest mb-2">
                  Chiến lược
                </span>
                <p className="text-lg sm:text-xl font-serif font-semibold text-yellow-300">
                  {activePillar.strategy}
                </p>
              </div>
              <div className="h-px bg-yellow-600/20"></div>
              <div>
                <span className="inline-block text-xs font-sans font-bold text-red-400 uppercase tracking-widest mb-2">
                  Phân tích quyết sách
                </span>
                <p className="text-gray-300 font-sans text-base leading-relaxed">
                  {activePillar.analysis}
                </p>
              </div>
              {activePillar.method && (
                <>
                  <div className="h-px bg-yellow-600/20"></div>
                  <div>
                    <span className="inline-block text-xs font-sans font-bold text-blue-400 uppercase tracking-widest mb-2">
                      Phương pháp đấu tranh
                    </span>
                    <p className="text-gray-300 font-sans text-base leading-relaxed">
                      {activePillar.method}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <figure className="relative">
                <img
                  src={activePillar.imageUrl}
                  alt={activePillar.tab}
                  className="relative w-full h-64 sm:h-72 md:h-80 object-cover rounded-2xl shadow-2xl border-2 border-yellow-600/30 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <figcaption className="mt-3 text-center text-sm text-gray-400 font-sans italic">
                  {activePillar.caption}
                </figcaption>
              </figure>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== Bài học trọng tâm – Flip Cards ===== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-4">
              Bài học trọng tâm
            </h2>
            <div className="h-1 w-40 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400 font-sans">Nhấn vào từng thẻ để khám phá nội dung</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyLessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FlipCard lesson={lesson} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section kết thúc */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-red-950/20 to-zinc-950"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-5xl"
        >
          <div className="bg-gradient-to-br from-red-900/40 to-zinc-900/40 backdrop-blur-xl border border-yellow-600/30 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-yellow-400 mb-8 italic leading-relaxed">
              "Những bài học này không chỉ thuộc về quá khứ, mà còn là kim nam châm soi đường cho hiện tại và tương lai."
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-300 font-sans">Giá trị lịch sử và thời đại</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Lessons;
