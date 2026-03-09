import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Minigame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'Cuộc kháng chiến chống Mỹ diễn ra trong giai đoạn nào?',
      options: ['1945-1954', '1954-1975', '1965-1973', '1946-1954'],
      correct: 1,
    },
    {
      question: 'Chiến dịch nào đánh dấu đỉnh cao của cuộc kháng chiến?',
      options: ['Điện Biên Phủ', 'Hồ Chí Minh', 'Tết Mậu Thân', 'Biên Giới'],
      correct: 1,
    },
    {
      question: 'Hiệp định Paris được ký kết năm nào?',
      options: ['1973', '1975', '1972', '1974'],
      correct: 0,
    },
    {
      question: 'Yếu tố nào đóng vai trò quyết định trong thắng lợi?',
      options: ['Sức mạnh quân sự', 'Đoàn kết dân tộc', 'Vũ khí hiện đại', 'Hỗ trợ quốc tế'],
      correct: 1,
    },
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
    <section id="minigame" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            🎮 Minigame Kiểm Tra
          </h2>
          <p className="text-xl text-gray-600">
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
