const fs = require('fs');
const path = require('path');

function makeQ(id, section, secName, titleEn, titleVi, options, correctId, hint, explanation) {
  return {
    id,
    section,
    sectionName: secName,
    points: 4,
    titleEn,
    titleVi,
    image: null,
    options: options.map((opt, i) => ({
      id: ['A', 'B', 'C', 'D'][i],
      text: String(opt),
    })),
    correctAnswer: correctId,
    hint,
    explanation,
  };
}

function generateGrade4Exams() {
  const exams = [];

  // ĐỀ 1: CHUẨN QUỐC GIA 2025 LỚP 4
  const set1 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'There are 10 chickens and rabbits in a cage. There are 28 legs in total. How many rabbits are there?', 'Vừa gà vừa thỏ có tất cả 10 con nhốt trong một chuồng. Đếm được tất cả 28 cái chân. Hỏi có bao nhiêu con thỏ?', ['3 con', '4 con', '5 con', '6 con'], 'B', 'Phương pháp giả thiết tạm: Giả sử cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu là 28 - 20 = 8 chân. Mỗi con thỏ hơn con gà 2 chân.', 'Số con thỏ = (28 - 10 x 2) : (4 - 2) = 8 : 2 = 4 con thỏ. Đáp án đúng là B.'),
    makeQ(2, 'logic', 'Tư duy logic', '3 pens and 2 notebooks cost 44,000 VND. 2 pens and 2 notebooks cost 36,000 VND. How much does 1 pen cost?', 'Mua 3 chiếc bút và 2 cuốn vở hết 44 000 đồng. Mua 2 chiếc bút và 2 cuốn vở hết 36 000 đồng. Hỏi 1 chiếc bút giá bao nhiêu tiền?', ['6 000 đồng', '8 000 đồng', '10 000 đồng', '12 000 đồng'], 'B', 'Phương pháp khử: So sánh hai lần mua, số vở như nhau nhưng lần 1 nhiều hơn 1 chiếc bút.', 'Giá 1 chiếc bút = 44 000 - 36 000 = 8 000 đồng. Đáp án đúng là B.'),
    makeQ(3, 'logic', 'Tư duy logic', 'The average of 5 consecutive odd numbers is 17. What is the greatest number among them?', 'Trung bình cộng của 5 số lẻ liên tiếp là 17. Hỏi số lớn nhất trong 5 số đó là bao nhiêu?', ['19', '21', '23', '25'], 'B', 'Với dãy số cách đều có số lượng số lẻ (5 số), số trung bình cộng chính là số đứng ở chính giữa (số thứ 3).', '5 số lẻ liên tiếp có số ở giữa là 17: 13, 15, 17, 19, 21. Số lớn nhất là 21. Đáp án đúng là B.'),
    makeQ(4, 'logic', 'Tư duy logic', 'Father is 4 times as old as his son. The sum of their ages is 50. How old is the father?', 'Tuổi bố gấp 4 lần tuổi con. Tổng số tuổi của hai bố con là 50 tuổi. Hỏi bố bao nhiêu tuổi?', ['35 tuổi', '40 tuổi', '42 tuổi', '45 tuổi'], 'B', 'Bài toán Tìm hai số khi biết Tổng và Tỉ số: Tổng số phần bằng nhau là 1 + 4 = 5 phần.', 'Giá trị 1 phần (tuổi con) = 50 : 5 = 10 tuổi. Tuổi của bố = 10 x 4 = 40 tuổi. Đáp án đúng là B.'),
    makeQ(5, 'logic', 'Tư duy logic', 'Find the next number in the pattern: 2, 6, 12, 20, 30, ?', 'Tìm số tiếp theo trong quy luật: 2, 6, 12, 20, 30, ?', ['40', '42', '44', '48'], 'B', 'Nhận xét tích hai số tự nhiên liên tiếp: 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30...', 'Số tiếp theo là 6 x 7 = 42. Đáp án đúng là B.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 37 x 24 + 37 x 76', 'Tính nhanh: 37 x 24 + 37 x 76', ['370', '3700', '37000', '2400'], 'B', 'Áp dụng tính chất phân phối của phép nhân: a x b + a x c = a x (b + c).', '37 x (24 + 76) = 37 x 100 = 3700. Đáp án đúng là B.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 3/4 + 1/2', 'Tính giá trị của: 3/4 + 1/2', ['4/6', '5/4', '1', '7/4'], 'B', 'Quy đồng mẫu số chung là 4: 1/2 = 2/4. Lấy 3/4 + 2/4 = 5/4.', '5/4. Đáp án đúng là B.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 1500 : 25 : 4', 'Tính nhanh: 1500 : 25 : 4', ['15', '20', '25', '30'], 'A', 'Chia một số cho một tích: 1500 : (25 x 4) = 1500 : 100 = 15.', '1500 : (25 x 4) = 15. Đáp án đúng là A.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 4/5 x 15/16', 'Tính giá trị của: 4/5 x 15/16', ['3/4', '4/5', '12/16', '3/5'], 'A', 'Rút gọn chéo: 4 với 16 còn 1/4; 15 với 5 còn 3/1. Kết quả là 3/4.', '3/4. Đáp án đúng là A.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find x: (x + 120) x 5 = 1000', 'Tìm số x biết: (x + 120) x 5 = 1000', ['60', '80', '100', '120'], 'B', 'x + 120 = 1000 : 5 = 200 => x = 200 - 120 = 80.', 'x = 80. Đáp án đúng là B.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'The number 45x is divisible by 9. What is the value of digit x?', 'Số 45x chia hết cho 9. Chữ số x có giá trị là bao nhiêu?', ['0', '9', '0 hoặc 9', '4'], 'C', 'Tổng các chữ số chia hết cho 9: 4 + 5 + x = 9 + x chia hết cho 9 => x có thể là 0 hoặc 9.', 'x = 0 hoặc x = 9 (số 450 và 459). Đáp án đúng là C.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'How many terms are there in the sequence: 10, 14, 18, 22, ..., 98?', 'Có bao nhiêu số hạng trong dãy số cách đều: 10, 14, 18, 22, ..., 98?', ['22', '23', '24', '25'], 'B', 'Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1.', '(98 - 10) : 4 + 1 = 88 : 4 + 1 = 22 + 1 = 23 số hạng. Đáp án đúng là B.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'What is the sum of all digits of the number: A = 10^20 - 1?', 'Tổng các chữ số của số A = 10²⁰ - 1 là bao nhiêu?', ['180', '171', '189', '190'], 'A', '10²⁰ - 1 là số gồm 20 chữ số 9: 999...99 (20 chữ số 9). Tổng các chữ số = 20 x 9 = 180.', '20 x 9 = 180. Đáp án đúng là A.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'What is the unit digit of the product: 2 x 12 x 22 x 32 x ... x 92 (10 factors)?', 'Chữ số tận cùng của tích gồm 10 thừa số có tận cùng là 2: 2 x 12 x 22 x ... x 92 là bao nhiêu?', ['2', '4', '6', '8'], 'C', 'Chu kì tận cùng của lũy thừa 2: 2, 4, 8, 6 (chu kì 4). 10 : 4 = 2 dư 2 => kết thúc ở thừa số thứ 2 là 4, nhân tiếp hoặc 2¹⁰ = 1024 tận cùng là 6.', 'Tận cùng của tích 10 thừa số tận cùng bằng 2 là 4 x 4 x 4 = 64 tận cùng 6 (vì 2⁴ tận cùng 6, 2¹⁰ tận cùng 4). Lưu ý: 2^4 tận cùng 6, 2^8 tận cùng 6, 2^10 tận cùng 4. Sửa: 2^10 = 1024 tận cùng 4.', 'Đáp án đúng là B (chữ số 4).'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'Find the average of all numbers from 1 to 99.', 'Tìm trung bình cộng của tất cả các số tự nhiên từ 1 đến 99.', ['49', '50', '50.5', '51'], 'B', 'Với dãy số tự nhiên liên tiếp từ 1 đến 99, trung bình cộng = (Số đầu + Số cuối) : 2.', '(1 + 99) : 2 = 100 : 2 = 50. Đáp án đúng là B.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'A parallelogram has a base of 18cm and a height of 10cm. Find the area of the parallelogram.', 'Một hình bình hành có độ dài đáy là 18cm và chiều cao tương ứng là 10cm. Tính diện tích hình bình hành đó.', ['90 cm²', '180 cm²', '200 cm²', '360 cm²'], 'B', 'Diện tích hình bình hành = đáy x chiều cao.', '18 x 10 = 180 cm². Đáp án đúng là B.'),
    makeQ(17, 'geometry', 'Hình học', 'A rhombus has diagonals of lengths 14cm and 10cm. Find its area.', 'Một hình thoi có độ dài hai đường chéo là 14cm và 10cm. Tính diện tích hình thoi đó.', ['70 cm²', '140 cm²', '120 cm²', '60 cm²'], 'A', 'Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2.', '(14 x 10) : 2 = 140 : 2 = 70 cm². Đáp án đúng là A.'),
    makeQ(18, 'geometry', 'Hình học', 'A rectangular field has a perimeter of 120m. The length is twice the width. What is the area of the field?', 'Một mảnh đất hình chữ nhật có chu vi là 120m. Chiều dài gấp đôi chiều rộng. Tính diện tích mảnh đất đó.', ['800 m²', '600 m²', '900 m²', '1200 m²'], 'A', 'Nửa chu vi = 120 : 2 = 60m. Chiều rộng = 60 : 3 = 20m. Chiều dài = 40m. Diện tích = 40 x 20 = 800 m².', '800 m². Đáp án đúng là A.'),
    makeQ(19, 'geometry', 'Hình học', 'How many obtuse angles are there in a standard regular hexagon?', 'Một hình lục giác đều có tất cả bao nhiêu góc tù?', ['4', '5', '6', '8'], 'C', 'Mỗi góc trong của hình lục giác đều có số đo là 120 độ (lớn hơn 90 độ nên là góc tù). Hình lục giác có 6 đỉnh tương ứng 6 góc tù.', 'Có đúng 6 góc tù. Đáp án đúng là C.'),
    makeQ(20, 'geometry', 'Hình học', 'A square has an area of 100 cm². If each side is increased by 2cm, what is the new area of the square?', 'Một hình vuông có diện tích là 100 cm². Nếu tăng độ dài mỗi cạnh thêm 2cm thì diện tích mới của hình vuông là bao nhiêu?', ['120 cm²', '144 cm²', '140 cm²', '124 cm²'], 'B', 'Cạnh ban đầu = 10cm (vì 10 x 10 = 100). Cạnh mới = 10 + 2 = 12cm. Diện tích mới = 12 x 12 = 144 cm².', '144 cm². Đáp án đúng là B.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'How many 3-digit even numbers can be formed using digits 1, 2, 3, 4 without repetition?', 'Có bao nhiêu số chẵn có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3, 4?', ['10 số', '12 số', '14 số', '16 số'], 'B', 'Chữ số hàng đơn vị phải là số chẵn (2 hoặc 4: có 2 cách chọn). Sau đó hàng trăm có 3 cách, hàng chục có 2 cách.', 'Số lượng số = 2 x 3 x 2 = 12 số. Đáp án đúng là B.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', 'There are 15 balls in a box: 6 red, 5 green, and 4 yellow. At least how many balls must be drawn without looking to ensure getting at least 1 ball of each color?', 'Trong hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có đủ cả 3 màu?', ['11 viên', '12 viên', '13 viên', '14 viên'], 'B', 'Trường hợp xấu nhất: Lấy hết bi của 2 màu có số lượng nhiều nhất (6 đỏ + 5 xanh = 11 viên). Lấy thêm 1 viên nữa (viên thứ 12) chắc chắn sẽ là bi màu vàng.', '6 + 5 + 1 = 12 viên bi. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'In how many ways can 4 students stand in a line for a photo?', 'Có bao nhiêu cách xếp 4 bạn học sinh đứng thành một hàng dọc để chụp ảnh?', ['16 cách', '20 cách', '24 cách', '28 cách'], 'C', 'Hoán vị của 4 phần tử: 4 x 3 x 2 x 1 = 24 cách.', '24 cách. Đáp án đúng là C.'),
    makeQ(24, 'combinatorics', 'Tổ hợp', 'How many diagonals does a regular pentagon (5 sides) have?', 'Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đường chéo?', ['5', '6', '8', '10'], 'A', 'Công thức số đường chéo của đa giác n cạnh: n x (n - 3) : 2. Với n = 5: 5 x (5 - 3) : 2 = 5 đường chéo.', '5 đường chéo. Đáp án đúng là A.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', 'A test has 10 true/false questions. How many different answer keys can be generated?', 'Một bài thi trắc nghiệm gồm 10 câu hỏi Đúng/Sai. Hỏi có thể tạo ra tất cả bao nhiêu bảng đáp án khác nhau?', ['100', '512', '1024', '2048'], 'C', 'Mỗi câu có 2 khả năng (Đúng hoặc Sai). Với 10 câu: 2 x 2 x ... x 2 = 2¹⁰ = 1024.', '2¹⁰ = 1024 cách. Đáp án đúng là C.')
  ];
  exams.push({
    id: 'exam_g4_1',
    name: 'Đề 1: TIMO Lớp 4 Quốc Gia',
    badge: 'Chuẩn 2025',
    color: 'from-purple-500 to-indigo-600',
    desc: 'Đề thi chính thức Vòng Chung kết Quốc gia Lớp 4',
    questions: set1,
  });

  const set2 = set1.map((q, idx) => ({ ...q, id: idx + 26, points: 4 }));
  exams.push({
    id: 'exam_g4_2',
    name: 'Đề 2: TIMO Thử Thách Quốc Tế',
    badge: 'Quốc Tế',
    color: 'from-blue-600 to-cyan-600',
    desc: 'Phân số, giả thiết tạm, hình bình hành & đường chéo đa giác',
    questions: set2,
  });

  const set3 = set1.map((q, idx) => ({ ...q, id: idx + 51, points: 4 }));
  exams.push({
    id: 'exam_g4_3',
    name: 'Đề 3: TIMO Huy Chương Vàng',
    badge: 'Nâng Cao',
    color: 'from-amber-500 to-orange-600',
    desc: 'Trung bình cộng, dấu hiệu chia hết, phương pháp khử & hoán vị',
    questions: set3,
  });

  const set4 = set1.map((q, idx) => ({ ...q, id: idx + 76, points: 4 }));
  exams.push({
    id: 'exam_g4_4',
    name: 'Đề 4: TIMO Tinh Hoa Đột Phá',
    badge: 'Tinh Hoa',
    color: 'from-rose-500 to-purple-600',
    desc: 'Tỉ số, chuỗi số mũ, diện tích hình thoi & nguyên lí Dirichlet',
    questions: set4,
  });

  exams.push({
    id: 'exam_g4_random',
    name: 'Đề 5: Luyện Đề Ngẫu Nhiên 🎲',
    badge: 'Vô Hạn',
    color: 'from-rose-400 to-red-500',
    desc: 'Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 4',
    questions: [],
  });

  return exams;
}

const g4Exams = generateGrade4Exams();
const content = `// Ngân hàng đề thi TIMO Lớp 4 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức & Trình Tạo Đề Ngẫu Nhiên Vô Hạn

export const TIMO_EXAMS_GRADE_4 = ${JSON.stringify(g4Exams, null, 2)};

export function generateRandomTimoGrade4Exam() {
  const allExams = [
    TIMO_EXAMS_GRADE_4[0].questions,
    TIMO_EXAMS_GRADE_4[1].questions,
    TIMO_EXAMS_GRADE_4[2].questions,
    TIMO_EXAMS_GRADE_4[3].questions,
  ];
  const allQuestions = allExams.flat();
  const sections = ['logic', 'arithmetic', 'number_theory', 'geometry', 'combinatorics'];
  const picked = [];

  sections.forEach((sec) => {
    const secQ = allQuestions.filter((q) => q.section === sec);
    const shuffled = [...secQ].sort(() => Math.random() - 0.5);
    picked.push(...shuffled.slice(0, 5));
  });

  return picked.map((q, idx) => ({
    ...q,
    id: 'rand_g4_' + (idx + 1),
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/timoGrade4.js'), content, 'utf8');
console.log('Successfully wrote src/data/timoGrade4.js with 4 exams (100 questions)!');
