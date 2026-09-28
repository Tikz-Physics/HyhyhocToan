import { CURRICULUM_ZONES } from '../src/data/curriculumData.js';

console.log('==================================================');
console.log('AUDITING ALL CURRICULUM ZONES AND BASIC QUESTIONS');
console.log('==================================================');

let totalBasic = 0;
let errors = [];

CURRICULUM_ZONES.forEach((zone) => {
  console.log(`\nZone: ${zone.title} (${zone.id}) - ${zone.basicLevels.length} basic levels`);
  totalBasic += zone.basicLevels.length;

  zone.basicLevels.forEach((lvl) => {
    // 1. Question text
    if (!lvl.question || lvl.question.trim().length === 0) {
      errors.push(`[${zone.id}] ${lvl.id} has empty question`);
    }

    // 2. Options
    if (!Array.isArray(lvl.options) || lvl.options.length < 2) {
      errors.push(`[${zone.id}] ${lvl.id} has invalid options: ${JSON.stringify(lvl.options)}`);
    }

    // 3. Target / Answer
    const target = lvl.targetNumber ?? lvl.correctNumber ?? lvl.correctAnswer;
    if (target === undefined && lvl.correctIndex === undefined) {
      errors.push(`[${zone.id}] ${lvl.id} has no answer target or correctIndex`);
    }

    // 4. Verify target exists in options
    if (lvl.options && target !== undefined) {
      const foundInOptions = lvl.options.some((opt) => {
        if (String(opt).trim() === String(target).trim()) return true;
        if (!isNaN(Number(opt)) && !isNaN(Number(target)) && Number(opt) === Number(target)) return true;
        return false;
      });
      if (!foundInOptions) {
        errors.push(`[${zone.id}] ${lvl.id} target "${target}" NOT found in options ${JSON.stringify(lvl.options)}`);
      }
    }

    // 5. If correctIndex, verify bounds
    if (lvl.correctIndex !== undefined) {
      if (lvl.correctIndex < 0 || lvl.correctIndex >= lvl.options.length) {
        errors.push(`[${zone.id}] ${lvl.id} correctIndex ${lvl.correctIndex} out of bounds for options length ${lvl.options.length}`);
      }
    }

    // 6. Hint
    if (!lvl.hint || lvl.hint.trim().length === 0) {
      errors.push(`[${zone.id}] ${lvl.id} has missing hint`);
    }

    const answerStr = target !== undefined ? target : lvl.options[lvl.correctIndex];
    console.log(`  [OK] ${lvl.id}: "${lvl.title}" | Options: ${lvl.options.length} | Ans: ${answerStr}`);
  });
});

console.log('--------------------------------------------------');
console.log(`TOTAL BASIC QUESTIONS: ${totalBasic}`);
if (errors.length === 0) {
  console.log('🎉 TẤT CẢ CÁC CÂU HỎI CƠ BẢN ĐẠT CHUẨN 100%! KHÔNG CÓ BẤT KỲ LỖI NÀO!');
} else {
  console.error('❌ PHÁT HIỆN LỖI:', errors);
  process.exit(1);
}
