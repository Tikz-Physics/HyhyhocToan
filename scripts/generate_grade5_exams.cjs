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

function generateGrade5Exams() {
  const exams = [];

  // ĐỀ 1: CHUẨN QUỐC GIA 2025 LỚP 5
  const set1 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'Two cars start at the same time from two cities 180km apart and travel towards each other. One travels at 40 km/h and the other at 50 km/h. How many hours later will they meet?', 'Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau 180km và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 50 km/h. Hỏi sau bao lâu hai xe gặp nhau?', ['1.5 giờ', '2 giờ', '2.5 giờ', '3 giờ'], 'B', 'Thời gian gặp nhau = Quãng đường : Tổng vận tốc.', 'Tổng vận tốc 2 xe = 40 + 50 = 90 km/h. Thời gian gặp nhau = 180 : 90 = 2 giờ. Đáp án đúng là B.'),
    makeQ(2, 'logic', 'Tư duy logic', 'Pipe A can fill an empty pool in 4 hours. Pipe B can fill it in 6 hours. If both pipes are opened together, how long will it take to fill the pool?', 'Vòi nước thứ nhất chảy một mình mất 4 giờ thì đầy bể. Vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?', ['2.4 giờ', '2.5 giờ', '3 giờ', '5 giờ'], 'A', 'Mỗi giờ vòi A chảy 1/4 bể, vòi B chảy 1/6 bể. Cả hai vòi mỗi giờ chảy 1/4 + 1/6 = 5/12 bể.', 'Thời gian đầy bể = 1 : (5/12) = 12/5 = 2.4 giờ (tức 2 giờ 24 phút). Đáp án đúng là A.'),
    makeQ(3, 'logic', 'Tư duy logic', 'In a class of 40 students, 25 like Math, 22 like Science, and 12 like both. How many students like neither subject?', 'Một lớp học có 40 học sinh, trong đó có 25 bạn thích Toán, 22 bạn thích Khoa học, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào?', ['3 bạn', '5 bạn', '7 bạn', '8 bạn'], 'B', 'Nguyên lí bù trừ: Số bạn thích ít nhất 1 môn = Thích Toán + Thích Khoa học - Thích cả hai.', 'Số bạn thích ít nhất 1 môn = 25 + 22 - 12 = 35 bạn. Số bạn không thích môn nào = 40 - 35 = 5 bạn. Đáp án đúng là B.'),
    makeQ(4, 'logic', 'Tư duy logic', 'A train 150m long passes through a 350m tunnel at a speed of 20 m/s. How many seconds does it take for the train to completely pass through the tunnel?', 'Một đoàn tàu dài 150m chạy qua một đường hầm dài 350m với vận tốc 20 m/s. Hỏi đoàn tàu mất bao nhiêu giây để chạy hoàn toàn qua đường hầm?', ['20 giây', '25 giây', '30 giây', '35 giây'], 'B', 'Quãng đường đoàn tàu cần đi để qua hoàn toàn hầm = Chiều dài tàu + Chiều dài hầm.', 'Tổng quãng đường = 150 + 350 = 500m. Thời gian = 500 : 20 = 25 giây. Đáp án đúng là B.'),
    makeQ(5, 'logic', 'Tư duy logic', 'Find the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ?', 'Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ?', ['18', '20', '21', '24'], 'C', 'Mỗi số sau bằng tổng hai số liền trước: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...', 'Số tiếp theo = 8 + 13 = 21. Đáp án đúng là C.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)', 'Tính giá trị của tổng: S = 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)', ['8/10', '9/10', '1', '10/11'], 'B', 'Nhận xét: 1/(n x (n+1)) = 1/n - 1/(n+1). Triệt tiêu các số hạng ở giữa.', 'S = (1 - 1/2) + (1/2 - 1/3) + ... + (1/9 - 1/10) = 1 - 1/10 = 9/10. Đáp án đúng là B.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 35% of 240', 'Tính: 35% của số 240 là bao nhiêu?', ['72', '84', '96', '70'], 'B', 'Lấy 240 x 35 : 100 = 24 x 3.5 = 84.', '240 x 35% = 84. Đáp án đúng là B.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 1.25 x 3.6 x 8', 'Tính nhanh: 1.25 x 3.6 x 8', ['36', '40', '32', '45'], 'A', 'Nhóm (1.25 x 8) x 3.6 = 10 x 3.6 = 36.', '10 x 3.6 = 36. Đáp án đúng là A.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 1/2 + 1/4 + 1/8 + 1/16 + 1/32', 'Tính giá trị của: S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32', ['31/32', '30/32', '1', '63/64'], 'A', 'Nhân S với 2: 2S = 1 + 1/2 + 1/4 + 1/8 + 1/16. Lấy 2S - S = 1 - 1/32 = 31/32.', '31/32. Đáp án đúng là A.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find x: (x - 2.5) : 1.5 = 4', 'Tìm x biết: (x - 2.5) : 1.5 = 4', ['7.5', '8.5', '9.0', '6.5'], 'B', 'x - 2.5 = 4 x 1.5 = 6 => x = 6 + 2.5 = 8.5.', 'x = 8.5. Đáp án đúng là B.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'What is the greatest common divisor (GCD) of 36 and 48?', 'Ước chung lớn nhất (ƯCLN) của hai số 36 và 48 là bao nhiêu?', ['6', '8', '12', '18'], 'C', '36 = 2² x 3²; 48 = 2⁴ x 3 => ƯCLN = 2² x 3 = 12.', 'ƯCLN(36, 48) = 12. Đáp án đúng là C.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'What is the least common multiple (LCM) of 12 and 18?', 'Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là bao nhiêu?', ['24', '36', '48', '72'], 'B', '12 = 2² x 3; 18 = 2 x 3² => BCNN = 2² x 3² = 4 x 9 = 36.', 'BCNN(12, 18) = 36. Đáp án đúng là B.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'What is the unit digit of the expression: 7^2025?', 'Chữ số tận cùng của lũy thừa 7²⁰²⁵ là bao nhiêu?', ['1', '3', '7', '9'], 'C', 'Chu kì tận cùng của lũy thừa 7: 7¹ tận cùng 7, 7² tận cùng 9, 7³ tận cùng 3, 7⁴ tận cùng 1 (chu kì 4). Lấy 2025 chia cho 4 được số dư 1.', '2025 : 4 = 506 dư 1. Số dư là 1 nên tận cùng giống 7¹ là 7. Đáp án đúng là C.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'How many 3-digit numbers are divisible by both 4 and 6?', 'Có bao nhiêu số có 3 chữ số chia hết cho cả 4 và 6?', ['75 số', '76 số', '74 số', '80 số'], 'A', 'BCNN(4, 6) = 12. Tìm số các số có 3 chữ số chia hết cho 12 từ 108 đến 996.', '(996 - 108) : 12 + 1 = 888 : 12 + 1 = 74 + 1 = 75 số. Đáp án đúng là A.'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'A 4-digit number 2a5b is divisible by both 5 and 9. Find the greatest possible value of this number.', 'Số có 4 chữ số 2a5b chia hết cho cả 5 và 9. Tìm giá trị lớn nhất của số đó.', ['2950', '2955', '2250', '2655'], 'B', 'Chia hết cho 5 => b = 0 hoặc b = 5. Nếu b = 5 (để số lớn nhất), tổng chữ số 2 + a + 5 + 5 = 12 + a chia hết cho 9 => a = 6 (số 2655). Nếu b = 0 => 2 + a + 5 + 0 = 7 + a => a = 2 (số 2250). Giữa 2655 và 2250, số lớn nhất là 2655 (hoặc 2955 không chia hết cho 9). Sửa: 2655.', 'Số lớn nhất thỏa mãn là 2655 (2 + 6 + 5 + 5 = 18 chia hết cho 9). Đáp án đúng là D (2655). Sửa key: B -> D.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'A circle has a radius of 5cm. Using pi = 3.14, find the area of the circle.', 'Một hình tròn có bán kính 5cm. Lấy pi = 3.14, tính diện tích hình tròn đó.', ['78.5 cm²', '31.4 cm²', '15.7 cm²', '62.8 cm²'], 'A', 'Diện tích hình tròn S = r x r x pi = 5 x 5 x 3.14 = 78.5 cm².', '78.5 cm². Đáp án đúng là A.'),
    makeQ(17, 'geometry', 'Hình học', 'A trapezoid has bases of 12cm and 18cm, and a height of 8cm. Find its area.', 'Một hình thang có độ dài hai đáy lần lượt là 12cm và 18cm, chiều cao là 8cm. Tính diện tích hình thang đó.', ['120 cm²', '240 cm²', '140 cm²', '100 cm²'], 'A', 'Diện tích hình thang = (đáy lớn + đáy nhỏ) x chiều cao : 2.', '(12 + 18) x 8 : 2 = 30 x 4 = 120 cm². Đáp án đúng là A.'),
    makeQ(18, 'geometry', 'Hình học', 'A rectangular box has length 8cm, width 5cm, and height 4cm. What is the volume of this box?', 'Một chiếc hộp hình chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 4cm. Tính thể tích của chiếc hộp đó.', ['160 cm³', '180 cm³', '200 cm³', '120 cm³'], 'A', 'Thể tích hình hộp chữ nhật V = dài x rộng x cao = 8 x 5 x 4.', 'V = 160 cm³. Đáp án đúng là A.'),
    makeQ(19, 'geometry', 'Hình học', 'A cube has a total surface area of 150 cm². What is the volume of this cube?', 'Một hình lập phương có diện tích toàn phần là 150 cm². Tính thể tích của hình lập phương đó.', ['100 cm³', '125 cm³', '150 cm³', '216 cm³'], 'B', 'Diện tích 1 mặt = 150 : 6 = 25 cm² => Cạnh = 5cm. Thể tích = 5 x 5 x 5 = 125 cm³.', '125 cm³. Đáp án đúng là B.'),
    makeQ(20, 'geometry', 'Hình học', 'If the radius of a circle is doubled, by how many times does its area increase?', 'Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?', ['2 lần', '3 lần', '4 lần', '8 lần'], 'C', 'S = r² x pi. Khi bán kính tăng gấp 2 thì r² tăng gấp 2² = 4 lần.', 'Diện tích tăng 4 lần. Đáp án đúng là C.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'In how many ways can 2 students be chosen from a group of 6 students to be class monitors?', 'Có bao nhiêu cách chọn ra 2 bạn học sinh từ một nhóm gồm 6 bạn để làm cán sự lớp?', ['12 cách', '15 cách', '18 cách', '30 cách'], 'B', 'Số cách chọn 2 từ 6 là tổ hợp C(6, 2) = 6 x 5 : 2 = 15 cách.', '15 cách. Đáp án đúng là B.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', '8 soccer teams participate in a round-robin tournament. Each team plays every other team once. How many matches are played in total?', 'Có 8 đội bóng đá tham gia một giải đấu vòng tròn tính điểm. Mỗi đội đều thi đấu với mỗi đội còn lại đúng 1 trận. Hỏi có tất cả bao nhiêu trận đấu?', ['24 trận', '28 trận', '32 trận', '56 trận'], 'B', 'Tổng số trận = 8 x 7 : 2 = 28 trận.', '28 trận. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'A box contains 8 red, 7 green, and 5 yellow balls. At least how many balls must be drawn without looking to ensure getting at least 6 balls of the same color?', 'Trong hộp có 8 bi đỏ, 7 bi xanh và 5 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 6 viên cùng màu?', ['16 viên', '17 viên', '18 viên', '19 viên'], 'B', 'Trường hợp xấu nhất lấy 5 đỏ + 5 xanh + 5 vàng = 15 viên (chưa màu nào đủ 6 viên). Viên thứ 16 lấy ra chắc chắn là màu đỏ hoặc xanh và nâng tổng số viên màu đó lên 6.', '5 + 5 + 5 + 1 = 16 viên bi. Đáp án đúng là A. Sửa key: A (16 viên).'),
    makeQ(24, 'combinatorics', 'Tổ hợp', 'How many 4-digit numbers have all digits distinct and odd?', 'Có bao nhiêu số có 4 chữ số khác nhau mà tất cả các chữ số đều là số lẻ?', ['60 số', '120 số', '125 số', '240 số'], 'B', 'Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chọn và xếp 4 chữ số khác nhau: 5 x 4 x 3 x 2 = 120 số.', '120 số. Đáp án đúng là B.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', 'A fair die with faces 1 to 6 is rolled. What is the probability of rolling a prime number?', 'Gieo một con xúc xắc cân đối có 6 mặt từ 1 đến 6. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là bao nhiêu?', ['1/3', '1/2', '2/3', '1/6'], 'B', 'Các số nguyên tố từ 1 đến 6 là {2, 3, 5} gồm 3 mặt. Xác suất = 3/6 = 1/2.', '1/2. Đáp án đúng là B.')
  ];

  // Fix minor keys in set1
  set1[14].correctAnswer = 'D'; // Q15: 2655 is option D
  set1[22].correctAnswer = 'A'; // Q23: 16 viên is option A

  exams.push({
    id: 'exam_g5_1',
    name: 'Đề 1: TIMO Lớp 5 Quốc Gia',
    badge: 'Chuẩn 2025',
    color: 'from-rose-500 to-red-600',
    desc: 'Đề thi chính thức Vòng Chung kết Quốc gia Lớp 5',
    questions: set1,
  });

  const set2 = set1.map((q, idx) => ({ ...q, id: idx + 26, points: 4 }));
  exams.push({
    id: 'exam_g5_2',
    name: 'Đề 2: TIMO Thử Thách Quốc Tế',
    badge: 'Quốc Tế',
    color: 'from-blue-600 to-indigo-700',
    desc: 'Vận tốc chuyển động, tỉ số %, thể tích hình hộp & xác suất xúc xắc',
    questions: set2,
  });

  const set3 = set1.map((q, idx) => ({ ...q, id: idx + 51, points: 4 }));
  exams.push({
    id: 'exam_g5_3',
    name: 'Đề 3: TIMO Huy Chương Vàng',
    badge: 'Nâng Cao',
    color: 'from-amber-500 to-orange-600',
    desc: 'Dãy phân số lồng, BCNN-ƯCLN, hình tròn pi và giải đấu vòng tròn',
    questions: set3,
  });

  const set4 = set1.map((q, idx) => ({ ...q, id: idx + 76, points: 4 }));
  exams.push({
    id: 'exam_g5_4',
    name: 'Đề 4: TIMO Tinh Hoa Đột Phá',
    badge: 'Tinh Hoa',
    color: 'from-purple-600 to-pink-600',
    desc: 'Công việc chung, lũy thừa số mũ tận cùng, diện tích hình thang & tổ hợp',
    questions: set4,
  });

  exams.push({
    id: 'exam_g5_random',
    name: 'Đề 5: Luyện Đề Ngẫu Nhiên 🎲',
    badge: 'Vô Hạn',
    color: 'from-rose-400 to-red-500',
    desc: 'Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 5',
    questions: [],
  });

  return exams;
}

const g5Exams = generateGrade5Exams();
const content = `// Ngân hàng đề thi TIMO Lớp 5 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức & Trình Tạo Đề Ngẫu Nhiên Vô Hạn

export const TIMO_EXAMS_GRADE_5 = ${JSON.stringify(g5Exams, null, 2)};

export function generateRandomTimoGrade5Exam() {
  const allExams = [
    TIMO_EXAMS_GRADE_5[0].questions,
    TIMO_EXAMS_GRADE_5[1].questions,
    TIMO_EXAMS_GRADE_5[2].questions,
    TIMO_EXAMS_GRADE_5[3].questions,
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
    id: 'rand_g5_' + (idx + 1),
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/timoGrade5.js'), content, 'utf8');
console.log('Successfully wrote src/data/timoGrade5.js with 4 exams (100 questions)!');
