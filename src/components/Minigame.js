import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Minigame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'Trong nghệ thuật đàm phán tại Paris, tại sao Chủ tịch Hồ Chí Minh lại căn dặn đoàn đại biểu Việt Nam "không được làm Mỹ mất mặt"?',
      options: [
        'Vì lo ngại tiềm lực quân sự của Mỹ còn quá lớn.',
        'Để giữ thể diện cho một siêu cường, tạo điều kiện thuận lợi cho họ rút quân trong danh dự và đạt mục tiêu chấm dứt chiến tranh.',
        'Vì Việt Nam muốn duy trì quan hệ ngoại giao bí mật với Mỹ sau chiến tranh.',
        'Do áp lực từ các nước đồng minh lớn như Liên Xô và Trung Quốc.'
      ],
      correct: 1,
      explanation: 'Đây là bài học về sự khôn khéo với nước lớn. Mỹ là nước lớn đứng đầu thế giới tư bản, việc họ phải ngồi đàm phán đã là một thất bại. Ta chủ trương "nối nhịp cầu vàng" để họ rút quân mà không bị tổn thương sĩ diện quá mức, từ đó đạt được kết quả thực chất cho dân tộc.'
    },
    {
      question: 'Nhóm "think tank" đầu tiên của ngoại giao Việt Nam, đóng vai trò "túi khôn" soạn thảo các kịch bản đàm phán Paris có tên ký hiệu là gì?',
      options: [
        'Nhóm Đoàn kết Đông Dương.',
        'Tổ Giải pháp Ngoại giao.',
        'Nhóm CP-50.',
        'Tiểu ban Việt Nam 13.'
      ],
      correct: 2,
      explanation: 'CP-50 là đơn vị trực thuộc Bộ Chính trị, tập hợp những nhà ngoại giao xuất sắc để nghiên cứu sâu các phương án "đánh - đàm". Nhóm đã xây dựng các giải pháp hòa bình đột phá như giải pháp 10 điểm (1969) hay dự thảo Hiệp định Paris (1972).'
    },
    {
      question: 'Bài học kinh nghiệm nào là "kim chỉ nam" giúp Việt Nam nhận được viện trợ từ cả Liên Xô và Trung Quốc dù hai nước này đang chia rẽ sâu sắc?',
      options: [
        'Ưu tiên quyền lợi của các nước xã hội chủ nghĩa lên trên hết.',
        'Thực hiện chính sách "đi với bên này, chống bên kia" để tranh thủ lợi ích.',
        'Kiên trì đường lối độc lập, tự chủ, tự lực, tự cường gắn liền với đoàn kết quốc tế rộng rãi.',
        'Chờ đợi sự thỏa hiệp giữa các nước lớn để tìm kiếm giải pháp.'
      ],
      correct: 2,
      explanation: 'Trong bối cảnh mâu thuẫn Xô - Trung tăng cao, Việt Nam đã khéo léo giữ tình hữu nghị chân thành với cả hai, đồng thời kiên định tự quyết định đường lối kháng chiến của mình. Ta không để vấn đề Việt Nam rơi vào quỹ đạo thỏa hiệp của các nước lớn.'
    },
    {
      question: 'Mối quan hệ giữa mặt trận quân sự và mặt trận ngoại giao được Đảng ta xác định như thế nào trong Nghị quyết Trung ương 13 (1/1967)?',
      options: [
        'Ngoại giao hoàn toàn phụ thuộc và đi sau các thắng lợi quân sự.',
        'Đấu tranh ngoại giao chỉ là hình thức bổ trợ cho đấu tranh chính trị.',
        'Thắng lợi quân sự là nhân tố quyết định, làm cơ sở cho thắng lợi ngoại giao; nhưng ngoại giao có vai trò chủ động, tích cực và chiến lược.',
        'Ngoại giao có thể thay thế hoàn toàn đấu tranh quân sự để kết thúc chiến tranh sớm.'
      ],
      correct: 2,
      explanation: 'Đảng xác định "đánh thắng thì ngoại giao thắng nhiều". Tuy nhiên, ngoại giao không đơn thuần phản ánh chiến trường mà còn phải chủ động tấn công để tạo ra thế mạnh tổng hợp, tiêu biểu là việc mở ra cục diện "vừa đánh, vừa đàm" sau Tết Mậu Thân 1968.'
    },
    {
      question: 'Chiến thắng nào sau đây được coi là "đòn quyết định" buộc Mỹ phải ký Hiệp định Paris năm 1973 với các điều khoản gần như không thay đổi so với dự thảo ban đầu của ta?',
      options: [
        'Chiến dịch Đường 9 - Nam Lào (1971).',
        'Cuộc Tổng tiến công và nổi dậy Xuân - Hè 1972.',
        'Đại thắng mùa Xuân năm 1975.',
        'Trận "Điện Biên Phủ trên không" 12 ngày đêm cuối năm 1972.'
      ],
      correct: 3,
      explanation: 'Sau khi Mỹ mở chiến dịch ném bom ác liệt bằng B52 vào Hà Nội và Hải Phòng để ép ta chỉnh sửa Hiệp định, sự thất bại nặng nề của họ trong 12 ngày đêm đã buộc họ phải ký kết vào ngày 27/1/1973. Đây là minh chứng hùng hồn nhất cho bài học về "nắm bắt và tạo thời cơ".'
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  return (
    <section id="minigame" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 mb-4">
            Minigame 
          </h2>
          <p className="text-xl text-gray-300">
            Kiểm tra kiến thức của bạn về cuộc kháng chiến chống Mỹ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            {!showResult ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-semibold text-gray-600">
                    Câu {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-lg font-sans font-semibold text-primary">
                    Điểm: {score}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-8">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-lg text-left font-medium transition-all ${
                        selectedAnswer === null
                          ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                          : selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                          : index === questions[currentQuestion].correct
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>

                {selectedAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg"
                  >
                    <p className="text-sm font-semibold text-blue-800 mb-2">
                      {selectedAnswer === questions[currentQuestion].correct ? '✓ Chính xác!' : '✗ Chưa đúng'}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold">Giải thích:</span> {questions[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <h3 className="text-4xl font-serif font-bold text-primary mb-4">
                    Hoàn Thành! 🎉
                  </h3>
                  <p className="text-3xl font-semibold text-gray-700 mb-8">
                    Điểm số: {score}/{questions.length}
                  </p>
                  <p className="text-xl text-gray-600 mb-8">
                    {score === questions.length
                      ? 'Xuất sắc! Bạn đã nắm vững kiến thức!'
                      : score >= questions.length / 2
                      ? 'Tốt lắm! Hãy tiếp tục học hỏi!'
                      : 'Hãy xem lại các bài học nhé!'}
                  </p>
                  <button
                    onClick={resetGame}
                    className="bg-primary hover:bg-red-700 text-white font-sans font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
                  >
                    Chơi Lại
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Minigame;
