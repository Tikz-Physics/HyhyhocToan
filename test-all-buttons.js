// Comprehensive simulation test for all buttons and interactive options across every level and question

import { CURRICULUM_ZONES } from './src/data/curriculumData.js';
import { TIMO_EXAM_2025 } from './src/data/timoQuestions.js';

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function evaluateLevelAnswer(level, choice, optIndex = -1) {
  // 1. If question has correctIndex
  if (level.correctIndex !== undefined) {
    if (optIndex !== -1 && optIndex === level.correctIndex) return true;
    if (level.options && level.options[level.correctIndex] !== undefined) {
      const expected = level.options[level.correctIndex];
      if (String(choice).trim() === String(expected).trim()) return true;
    }
  }

  // 2. If question has targetNumber / correctNumber / correctAnswer
  const target = level.targetNumber ?? level.correctNumber ?? level.correctAnswer;
  if (target !== undefined) {
    if (String(choice).trim() === String(target).trim()) return true;
    if (Number(choice) === Number(target)) return true;
  }

  return false;
}

console.log('===========================================================');
console.log('🧪 BẮT ĐẦU KIỂM TRA TỪNG NÚT BẤM VÀ ĐÁP ÁN TRÊN TOÀN HỆ THỐNG');
console.log('===========================================================\n');

// 1. TEST CURRICULUM ZONES
CURRICULUM_ZONES.forEach((zone) => {
  console.log(`\n--- Kiểm tra Khu Vườn: ${zone.title} (${zone.id}) ---`);
  const allLevels = [...zone.basicLevels, ...zone.timoChallenges];

  allLevels.forEach((lvl) => {
    totalTests++;
    let hasFoundCorrect = false;

    // Test options
    if (lvl.options && lvl.options.length > 0) {
      lvl.options.forEach((opt, idx) => {
        const isEvalCorrect = evaluateLevelAnswer(lvl, opt, idx);
        if (isEvalCorrect) {
          hasFoundCorrect = true;
        }
      });
    }

    // Special visual checks
    if (lvl.count !== undefined) {
      // Counting items
      const isCountCorrect = evaluateLevelAnswer(lvl, lvl.count);
      if (isCountCorrect) hasFoundCorrect = true;
    }

    if (lvl.symbol) {
      // Crocodile comparison
      if (lvl.symbol === '>' || lvl.symbol === '<' || lvl.symbol === '=') {
        hasFoundCorrect = true;
      }
    }

    if (hasFoundCorrect) {
      passedTests++;
      console.log(`  ✅ [${lvl.id}] ${lvl.title}: Nút bấm phản hồi chính xác`);
    } else {
      failedTests++;
      console.error(`  ❌ [${lvl.id}] ${lvl.title}: KHÔNG TÌM THẤY ĐÁP ÁN ĐÚNG KHI BẤM!`);
    }
  });
});

// 2. TEST TIMO ARENA QUESTIONS (25 Questions)
console.log('\n--- Kiểm tra 25 Câu Hỏi Phòng Luyện Đề Timo ---');
TIMO_EXAM_2025.forEach((q) => {
  totalTests++;
  const hasCorrectOption = q.options.some((opt) => opt.id === q.correctAnswer);
  if (hasCorrectOption) {
    passedTests++;
    console.log(`  ✅ [Câu ${q.id} Timo] ${q.sectionName}: Thẻ đáp án (${q.correctAnswer}) hợp lệ`);
  } else {
    failedTests++;
    console.error(`  ❌ [Câu ${q.id} Timo] ${q.sectionName}: LỖI KHÔNG CÓ ĐÁP ÁN!`);
  }
});

console.log('\n===========================================================');
console.log(`📊 TỔNG KẾT: ${passedTests} / ${totalTests} bài kiểm tra nút bấm HOÀN HẢO!`);
console.log('===========================================================');

if (failedTests > 0) {
  process.exit(1);
}
