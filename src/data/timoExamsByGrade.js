// Hệ thống Ngân hàng Đề thi Đấu trường TIMO Toán Tiểu học từ Lớp 1 đến Lớp 5
// Chuẩn Quốc tế với 5 Chuyên đề: Tư duy logic, Số học, Lý thuyết số, Hình học, Tổ hợp
// Mỗi khối lớp gồm 4 Bộ đề chính thức (100 câu độc bản) + 1 Đề vô hạn tạo ngẫu nhiên

import { TIMO_SECTIONS, TIMO_EXAMS as TIMO_EXAMS_GRADE_1, generateRandomTimoExam as generateRandomG1, TIMO_EXAM_SET_1 } from './timoQuestions.js';
import { TIMO_EXAMS_GRADE_2, generateRandomTimoGrade2Exam } from './timoGrade2.js';
import { TIMO_EXAMS_GRADE_3, generateRandomTimoGrade3Exam } from './timoGrade3.js';
import { TIMO_EXAMS_GRADE_4, generateRandomTimoGrade4Exam } from './timoGrade4.js';
import { TIMO_EXAMS_GRADE_5, generateRandomTimoGrade5Exam } from './timoGrade5.js';

export { TIMO_SECTIONS, TIMO_EXAM_SET_1 };

export const ALL_TIMO_EXAMS_BY_GRADE = {
  1: TIMO_EXAMS_GRADE_1,
  2: TIMO_EXAMS_GRADE_2,
  3: TIMO_EXAMS_GRADE_3,
  4: TIMO_EXAMS_GRADE_4,
  5: TIMO_EXAMS_GRADE_5,
};

export const ALL_RANDOM_GENERATORS_BY_GRADE = {
  1: generateRandomG1,
  2: generateRandomTimoGrade2Exam,
  3: generateRandomTimoGrade3Exam,
  4: generateRandomTimoGrade4Exam,
  5: generateRandomTimoGrade5Exam,
};

/**
 * Lấy danh sách 5 bộ đề thi theo khối lớp (1 - 5)
 */
export function getTimoExamsByGrade(grade = 1) {
  const g = Number(grade) || 1;
  return ALL_TIMO_EXAMS_BY_GRADE[g] || TIMO_EXAMS_GRADE_1;
}

/**
 * Sinh đề thi ngẫu nhiên 25 câu cân đối 5 chuyên đề theo khối lớp
 */
export function generateRandomTimoExamByGrade(grade = 1) {
  const g = Number(grade) || 1;
  const generator = ALL_RANDOM_GENERATORS_BY_GRADE[g] || generateRandomG1;
  return generator();
}
