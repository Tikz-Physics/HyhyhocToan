// Tổng hợp dữ liệu chương trình Toán Tiểu Học từ Lớp 1 đến Lớp 5 chuẩn CTGDPT 2018
// Đầy đủ 2 Học kì cho mỗi khối lớp kèm Thử thách Tư duy Timo chuẩn Quốc tế

import { CURRICULUM_GRADE_1, BADGES_DATA } from './curriculumGrade1';
import { CURRICULUM_GRADE_2 } from './curriculumGrade2';
import { CURRICULUM_GRADE_3 } from './curriculumGrade3';
import { CURRICULUM_GRADE_4 } from './curriculumGrade4';
import { CURRICULUM_GRADE_5 } from './curriculumGrade5';

export { BADGES_DATA };

// Cấu hình các khối lớp từ Lớp 1 đến Lớp 5
export const GRADE_CONFIGS = [
  { grade: 1, label: 'Lớp 1', badge: 'Lớp 1 🎈', icon: '🎈', color: 'from-amber-400 to-orange-500', desc: 'Số đến 100, cộng trừ cơ bản & hình khối' },
  { grade: 2, label: 'Lớp 2', badge: 'Lớp 2 🚀', icon: '🚀', color: 'from-blue-400 to-indigo-500', desc: 'Số đến 1000, bảng nhân chia 2 và 5, dm m km' },
  { grade: 3, label: 'Lớp 3', badge: 'Lớp 3 🌟', icon: '🌟', color: 'from-emerald-400 to-teal-500', desc: 'Bảng nhân chia 3-9, chu vi diện tích, tiền VN' },
  { grade: 4, label: 'Lớp 4', badge: 'Lớp 4 ⚡', icon: '⚡', color: 'from-purple-500 to-indigo-600', desc: 'Số lớn, phân số, hình bình hành thoi, tổng tỉ' },
  { grade: 5, label: 'Lớp 5', badge: 'Lớp 5 👑', icon: '👑', color: 'from-rose-500 to-red-600', desc: 'Số thập phân, tỉ số %, hình tròn khối hộp, vận tốc' },
];

export const CURRICULUM_BY_GRADE = {
  1: CURRICULUM_GRADE_1,
  2: CURRICULUM_GRADE_2,
  3: CURRICULUM_GRADE_3,
  4: CURRICULUM_GRADE_4,
  5: CURRICULUM_GRADE_5,
};

// Helper lấy danh sách chủ đề theo khối lớp (mặc định Lớp 1)
export const getCurriculumZones = (grade = 1) => {
  return CURRICULUM_BY_GRADE[Number(grade)] || CURRICULUM_GRADE_1;
};

// Mặc định xuất CURRICULUM_ZONES (Lớp 1) để tương thích ngược 100%
export const CURRICULUM_ZONES = CURRICULUM_GRADE_1;
