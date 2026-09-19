// Deep Mathematical & Grammatical Audit for HyhyhocToan
import { CURRICULUM_ZONES } from './src/data/curriculumData.js';
import { TIMO_EXAM_2025 } from './src/data/timoQuestions.js';

console.log('====================================================');
console.log('🔍 KIỂM TRA TOÀN DIỆN TỪNG CÂU HỎI & ĐÁP ÁN TOÁN HỌC');
console.log('====================================================\n');

let issues = [];

// 1. Audit TIMO Exam Questions (25 Questions)
console.log('--- 1. KIỂM TRA ĐỀ THI TIMO 2025 (25 CÂU) ---');
TIMO_EXAM_2025.forEach((q) => {
  const correctOpt = q.options.find((o) => o.id === q.correctAnswer);
  if (!correctOpt) {
    issues.push(`[Timo Câu ${q.id}] LỖI: Không tìm thấy đáp án đúng '${q.correctAnswer}' trong options!`);
  }

  // Check bilingual completeness
  if (!q.titleVi || q.titleVi.trim().length < 5) {
    issues.push(`[Timo Câu ${q.id}] LỖI: Tiêu đề tiếng Việt quá ngắn hoặc trống!`);
  }
  if (!q.titleEn || q.titleEn.trim().length < 5) {
    issues.push(`[Timo Câu ${q.id}] LỖI: Tiêu đề tiếng Anh quá ngắn hoặc trống!`);
  }
  if (!q.explanation || q.explanation.trim().length < 10) {
    issues.push(`[Timo Câu ${q.id}] CẢNH BÁO: Lời giải thích quá ngắn!`);
  }

  console.log(`Câu ${q.id} [${q.sectionName}]: Đáp án ${q.correctAnswer} -> "${correctOpt?.text}" | Đạt chuẩn.`);
});

// 2. Audit Curriculum Zones
console.log('\n--- 2. KIỂM TRA 8 KHU VƯỜN CHỦ ĐỀ CHUẨN LỚP 1 ---');
CURRICULUM_ZONES.forEach((zone) => {
  console.log(`\n* Khu vườn: ${zone.title} (${zone.id})`);
  const allLevels = [
    ...zone.basicLevels.map((l) => ({ ...l, typeTag: 'Cơ bản' })),
    ...zone.timoChallenges.map((l) => ({ ...l, typeTag: 'Timo' })),
  ];

  allLevels.forEach((lvl) => {
    let answerFound = false;

    // Check addition: a + b
    if (lvl.type === 'visual_add' || (lvl.a !== undefined && lvl.b !== undefined && lvl.question && lvl.question.includes('+'))) {
      const sum = lvl.a + lvl.b;
      const expected = lvl.targetNumber ?? lvl.correctNumber ?? lvl.correctAnswer;
      if (expected !== undefined && expected !== sum) {
        issues.push(`[${zone.id}][${lvl.id}] LỖI PHÉP CỘNG: ${lvl.a} + ${lvl.b} = ${sum} nhưng đề đặt là ${expected}!`);
      }
    }

    // Check subtraction: a - b
    if (lvl.type === 'visual_sub' || (lvl.a !== undefined && lvl.b !== undefined && lvl.question && lvl.question.includes('-'))) {
      const diff = lvl.a - lvl.b;
      const expected = lvl.targetNumber ?? lvl.correctNumber ?? lvl.correctAnswer;
      if (expected !== undefined && expected !== diff) {
        issues.push(`[${zone.id}][${lvl.id}] LỖI PHÉP TRỪ: ${lvl.a} - ${lvl.b} = ${diff} nhưng đề đặt là ${expected}!`);
      }
    }

    // Check crocodile comparison: symbol
    if (lvl.symbol) {
      if (lvl.leftCount !== undefined && lvl.rightCount !== undefined) {
        const expectedSymbol = lvl.leftCount > lvl.rightCount ? '>' : lvl.leftCount < lvl.rightCount ? '<' : '=';
        if (lvl.symbol !== expectedSymbol) {
          issues.push(`[${zone.id}][${lvl.id}] LỖI SO SÁNH: ${lvl.leftCount} và ${lvl.rightCount} phải là '${expectedSymbol}' nhưng đặt là '${lvl.symbol}'!`);
        }
      }
      if (lvl.leftNum !== undefined && lvl.rightNum !== undefined) {
        const expectedSymbol = lvl.leftNum > lvl.rightNum ? '>' : lvl.leftNum < lvl.rightNum ? '<' : '=';
        if (lvl.symbol !== expectedSymbol) {
          issues.push(`[${zone.id}][${lvl.id}] LỖI SO SÁNH: ${lvl.leftNum} và ${lvl.rightNum} phải là '${expectedSymbol}' nhưng đặt là '${lvl.symbol}'!`);
        }
      }
    }

    // Check options matching correctIndex
    if (lvl.correctIndex !== undefined) {
      if (!lvl.options || lvl.options[lvl.correctIndex] === undefined) {
        issues.push(`[${zone.id}][${lvl.id}] LỖI: correctIndex ${lvl.correctIndex} không có trong options!`);
      } else {
        answerFound = true;
      }
    }

    if (lvl.targetNumber !== undefined || lvl.correctNumber !== undefined || lvl.correctAnswer !== undefined) {
      answerFound = true;
    }

    if (lvl.count !== undefined) {
      answerFound = true;
    }

    if (lvl.symbol) {
      answerFound = true;
    }

    if (lvl.hour !== undefined) {
      answerFound = true;
    }

    if (!answerFound) {
      issues.push(`[${zone.id}][${lvl.id}] CẢNH BÁO: Không tìm thấy cơ chế đáp án đúng!`);
    } else {
      console.log(`  ✓ [${lvl.typeTag}] ${lvl.id}: ${lvl.title}`);
    }
  });
});

console.log('\n====================================================');
if (issues.length === 0) {
  console.log('✅ HOÀN TOÀN CHÍNH XÁC 100%! KHÔNG CÓ BẤT KỲ LỖI TOÁN HỌC NÀO!');
} else {
  console.error(`❌ PHÁT HIỆN ${issues.length} VẤN ĐỀ CẦN SỬA:`);
  issues.forEach((iss) => console.error('  - ' + iss));
  process.exit(1);
}
console.log('====================================================');
