// Automated test suite for "Vương Quốc Toán Học Lớp 1"
// Tests all data structures, assets, curriculum questions, answers, and Timo questions

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    testsPassed++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    testsFailed++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

async function runTests() {
  console.log('=====================================================');
  console.log('🔍 BẮT ĐẦU KIỂM THỬ TOÀN DIỆN HỆ THỐNG TOÁN LỚP 1');
  console.log('=====================================================\n');

  // TEST 1: Load Curriculum Data
  console.log('--- TEST NHÓM 1: Dữ liệu 6 Khu Vườn Học Tập ---');
  const { CURRICULUM_ZONES, BADGES_DATA } = await import('./src/data/curriculumData.js');
  assert(Array.isArray(CURRICULUM_ZONES) && CURRICULUM_ZONES.length >= 6, `Có đúng các khu vườn toán học (thực tế: ${CURRICULUM_ZONES.length} khu vườn)`);

  CURRICULUM_ZONES.forEach((zone) => {
    assert(zone.id && zone.title && zone.icon, `Khu vườn ${zone.title} (${zone.id}) có đầy đủ tiêu đề và biểu tượng`);
    assert(zone.basicLevels.length >= 2, `Khu vườn ${zone.title} có ít nhất 2 bài học trực quan (thực tế: ${zone.basicLevels.length})`);
    assert(zone.timoChallenges.length >= 2, `Khu vườn ${zone.title} có bài thử thách Timo đan xen (thực tế: ${zone.timoChallenges.length})`);

    // Verify basic levels options
    zone.basicLevels.forEach((lvl) => {
      assert(Array.isArray(lvl.options) && lvl.options.length >= 2, `Bài ${lvl.id}: có danh sách lựa chọn (${lvl.options.length} lựa chọn)`);
      if (lvl.targetNumber !== undefined) {
        assert(lvl.options.includes(lvl.targetNumber), `Bài ${lvl.id}: đáp án mục tiêu (${lvl.targetNumber}) nằm trong danh sách lựa chọn`);
      }
      if (lvl.correctAnswer !== undefined) {
        assert(lvl.options.includes(lvl.correctAnswer), `Bài ${lvl.id}: đáp án đúng (${lvl.correctAnswer}) nằm trong danh sách lựa chọn`);
      }
      if (lvl.correctNumber !== undefined) {
        assert(lvl.options.includes(lvl.correctNumber), `Bài ${lvl.id}: số đúng (${lvl.correctNumber}) nằm trong danh sách lựa chọn`);
      }
    });

    // Verify Timo challenges in zone
    zone.timoChallenges.forEach((tc) => {
      assert(Array.isArray(tc.options) && tc.options.length >= 2, `Timo ${tc.id}: có các phương án lựa chọn`);
      assert(tc.correctIndex >= 0 && tc.correctIndex < tc.options.length, `Timo ${tc.id}: correctIndex hợp lệ (${tc.correctIndex})`);
      assert(tc.hint && tc.explanation, `Timo ${tc.id}: có cả gợi ý và giải thích chi tiết`);
      if (tc.image) {
        const fullImgPath = path.join(__dirname, 'public', tc.image);
        assert(fs.existsSync(fullImgPath), `Timo ${tc.id}: ảnh minh họa tồn tại trên đĩa (${tc.image})`);
      }
    });
  });

  // TEST 2: Timo Dedicated Exam Data (25 questions)
  console.log('\n--- TEST NHÓM 2: Đề Thi Chuẩn TIMO 2025 (25 Câu 5 Phần) ---');
  const { TIMO_SECTIONS, TIMO_EXAM_2025 } = await import('./src/data/timoQuestions.js');
  assert(Array.isArray(TIMO_SECTIONS) && TIMO_SECTIONS.length === 6, 'Có đủ danh mục 5 chuyên đề + tất cả');
  assert(Array.isArray(TIMO_EXAM_2025) && TIMO_EXAM_2025.length === 25, 'Đề thi Timo có chính xác 25 câu hỏi chuẩn quốc tế');

  let totalPoints = 0;
  TIMO_EXAM_2025.forEach((q) => {
    totalPoints += q.points;
    assert(q.titleVi && q.titleVi.length > 5, `Câu ${q.id}: có tiêu đề tiếng Việt đầy đủ`);
    assert(q.titleEn && q.titleEn.length > 5, `Câu ${q.id}: có tiêu đề tiếng Anh song ngữ`);
    assert(Array.isArray(q.options) && q.options.length === 4, `Câu ${q.id}: có đúng 4 phương án A, B, C, D`);
    const validOptIds = q.options.map(o => o.id);
    assert(validOptIds.includes(q.correctAnswer), `Câu ${q.id}: đáp án đúng (${q.correctAnswer}) nằm trong các phương án`);
    assert(q.explanation && q.explanation.length > 5, `Câu ${q.id}: có lời giải thích chi tiết Mẹo của Dino`);

    if (q.image) {
      const fullImgPath = path.join(__dirname, 'public', q.image);
      assert(fs.existsSync(fullImgPath), `Câu ${q.id}: hình ảnh đề thi tồn tại (${q.image})`);
    }
  });

  assert(totalPoints === 100, `Tổng điểm kỳ thi Timo là 100 điểm chuẩn (thực tế: ${totalPoints})`);

  // TEST 3: SoundManager API tests
  console.log('\n--- TEST NHÓM 3: Hệ thống Âm Thanh & Giọng Đọc Web Audio / TTS ---');
  const { soundManager } = await import('./src/utils/soundManager.js');
  assert(soundManager !== null, 'SoundManager khởi tạo thành công');
  assert(typeof soundManager.playCorrect === 'function', 'Có phương thức playCorrect');
  assert(typeof soundManager.playWrong === 'function', 'Có phương thức playWrong');
  assert(typeof soundManager.playPop === 'function', 'Có phương thức playPop');
  assert(typeof soundManager.playFanfare === 'function', 'Có phương thức playFanfare');
  assert(typeof soundManager.speak === 'function', 'Có phương thức speak (Web Speech TTS)');
  assert(typeof soundManager.toggleSound === 'function', 'Có phương thức toggleSound');
  assert(typeof soundManager.toggleVoice === 'function', 'Có phương thức toggleVoice');

  // Test toggles
  soundManager.toggleSound();
  const s2 = soundManager.toggleSound();
  assert(s2 === true, 'Nút bật/tắt âm thanh hoạt động đảo trạng thái chuẩn xác');

  // TEST 4: Badges and Pets configuration
  console.log('\n--- TEST NHÓM 4: Hệ thống Phần Thưởng & Huy Hiệu ---');
  assert(Array.isArray(BADGES_DATA) && BADGES_DATA.length >= 5, 'Có ít nhất 5 huy hiệu thành tích');
  BADGES_DATA.forEach(b => {
    assert(b.id && b.name && b.requiredStars > 0, `Huy hiệu ${b.name}: yêu cầu ${b.requiredStars} ⭐`);
  });

  // TEST 5: Launcher Script Check
  console.log('\n--- TEST NHÓM 5: File Khởi Động Nhanh .bat ---');
  const batPath = path.join(__dirname, '..', 'CHAY_WEB_TOAN_LOP_1.bat');
  assert(fs.existsSync(batPath), 'File CHAY_WEB_TOAN_LOP_1.bat tồn tại trên thư mục gốc');

  console.log('\n=====================================================');
  console.log(`📊 TỔNG KẾT: ${testsPassed} bài kiểm tra ĐẠT | ${testsFailed} bài THẤT BẠI`);
  console.log('=====================================================');

  if (testsFailed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Lỗi khi chạy test suite:', err);
  process.exit(1);
});
