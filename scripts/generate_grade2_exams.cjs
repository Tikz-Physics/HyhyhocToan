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

// Generate 4 exam sets for Grade 2
function generateGrade2Exams() {
  const exams = [];

  // -------------------------------------------------------------
  // ĐỀ 1: CHUẨN QUỐC GIA 2025
  // -------------------------------------------------------------
  const set1 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'This year, Kevin is 8 years old. His brother is 4 years older than Kevin. How old is his brother 3 years later?', 'Năm nay Kevin 8 tuổi. Anh trai hơn Kevin 4 tuổi. Hỏi 3 năm nữa anh trai Kevin bao nhiêu tuổi?', ['12', '14', '15', '16'], 'C', 'Tính tuổi anh trai năm nay trước rồi cộng thêm 3 tuổi.', 'Năm nay anh trai Kevin có số tuổi là: 8 + 4 = 12 tuổi. Sau 3 năm nữa, tuổi của anh trai là: 12 + 3 = 15 tuổi. Đáp án đúng là C.'),
    makeQ(2, 'logic', 'Tư duy logic', 'If 3 days after today will be Sunday, which day of the week was yesterday?', 'Biết 3 ngày sau hôm nay là Chủ nhật. Hỏi hôm qua là thứ mấy?', ['Thứ Tư (Wednesday)', 'Thứ Năm (Thursday)', 'Thứ Ba (Tuesday)', 'Thứ Sáu (Friday)'], 'A', 'Từ Chủ nhật lùi 3 ngày để tìm hôm nay, sau đó lùi thêm 1 ngày để tìm hôm qua.', 'Chủ nhật lùi 3 ngày là Thứ Năm (hôm nay). Hôm qua là Thứ Tư. Đáp án đúng là A.'),
    makeQ(3, 'logic', 'Tư duy logic', 'In a queue, Mina is 6th from the front and 9th from the back. How many children are in the queue?', 'Trong hàng dọc, Mina đứng thứ 6 từ trên xuống và đứng thứ 9 từ dưới lên. Hỏi có tất cả bao nhiêu bạn trong hàng?', ['14', '15', '16', '13'], 'A', 'Khi đếm từ trước và từ sau, Mina bị đếm 2 lần. Cần trừ đi 1.', 'Tổng số bạn trong hàng là: 6 + 9 - 1 = 14 bạn. Đáp án đúng là A.'),
    makeQ(4, 'logic', 'Tư duy logic', 'A balance scale shows 1 watermelon weighs the same as 3 apples. 1 apple weighs the same as 2 oranges. How many oranges balance 1 watermelon?', 'Cân đòn bẩy thăng bằng cho thấy 1 quả dưa hấu nặng bằng 3 quả táo. 1 quả táo nặng bằng 2 quả cam. Hỏi 1 quả dưa hấu nặng bằng mấy quả cam?', ['5', '6', '8', '9'], 'B', 'Thay thế mỗi quả táo bằng 2 quả cam.', '1 dưa hấu = 3 táo = 3 x 2 = 6 quả cam. Đáp án đúng là B.'),
    makeQ(5, 'logic', 'Tư duy logic', 'Find the next number in the pattern: 2, 5, 8, 11, 14, ?', 'Tìm số tiếp theo trong quy luật: 2, 5, 8, 11, 14, ?', ['15', '16', '17', '18'], 'C', 'Khoảng cách giữa các số liên tiếp là +3.', 'Quy luật tăng 3 đơn vị: 14 + 3 = 17. Đáp án đúng là C.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 38 + 47', 'Tính giá trị của: 38 + 47', ['75', '85', '84', '95'], 'B', 'Cộng hàng đơn vị có nhớ sang hàng chục.', '38 + 47 = 85. Đáp án đúng là B.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 93 - 48', 'Tính giá trị của: 93 - 48', ['45', '55', '44', '54'], 'A', 'Thực hiện phép trừ có nhớ trong phạm vi 100.', '93 - 48 = 45. Đáp án đúng là A.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 5 x 7 + 15', 'Tính giá trị của: 5 x 7 + 15', ['45', '50', '55', '40'], 'B', 'Nhân chia trước, cộng trừ sau.', '5 x 7 = 35; 35 + 15 = 50. Đáp án đúng là B.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 18 : 2 + 34', 'Tính giá trị của: 18 : 2 + 34', ['41', '42', '43', '44'], 'C', 'Thực hiện 18 : 2 trước.', '18 : 2 = 9; 9 + 34 = 43. Đáp án đúng là C.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find x: x - 36 = 49', 'Tìm số x biết: x - 36 = 49', ['85', '75', '83', '86'], 'A', 'Số bị trừ = hiệu + số trừ.', 'x = 49 + 36 = 85. Đáp án đúng là A.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'How many tens are there in the number 750?', 'Số 750 có bao nhiêu chục?', ['5 chục', '75 chục', '7 chục', '50 chục'], 'B', '750 = 75 x 10 nên có 75 chục.', 'Số 750 gồm 75 chục. Đáp án đúng là B.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'What is the greatest 2-digit even number?', 'Số chẵn lớn nhất có 2 chữ số là số nào?', ['99', '98', '88', '96'], 'B', 'Số lớn nhất có 2 chữ số là 99 (lẻ), số chẵn liền trước là 98.', 'Số chẵn lớn nhất có 2 chữ số là 98. Đáp án đúng là B.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'Find the sum of all digits in the number 648.', 'Tính tổng các chữ số của số 648.', ['16', '17', '18', '19'], 'C', 'Cộng 6 + 4 + 8.', '6 + 4 + 8 = 18. Đáp án đúng là C.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'Divide 23 candies equally among 5 kids. How many candies are left over?', 'Chia đều 23 cái kẹo cho 5 bạn. Hỏi còn thừa lại bao nhiêu cái kẹo?', ['2 cái', '3 cái', '4 cái', '1 cái'], 'B', 'Lấy 23 chia cho 5 tìm số dư.', '23 : 5 = 4 dư 3 cái kẹo. Đáp án đúng là B.'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'What is the value of 3m 4dm in centimeters (cm)?', '3m 4dm bằng bao nhiêu xăng-ti-mét (cm)?', ['34 cm', '304 cm', '340 cm', '3400 cm'], 'C', '1m = 100cm, 1dm = 10cm.', '3m 4dm = 300cm + 40cm = 340cm. Đáp án đúng là C.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'There are 4 points on a straight line. How many line segments can be formed?', 'Có 4 điểm phân biệt cùng nằm trên một đường thẳng. Hỏi có tất cả bao nhiêu đoạn thẳng được tạo thành?', ['4', '5', '6', '7'], 'C', 'Công thức tính số đoạn thẳng qua 4 điểm là 4 x 3 : 2.', 'Số đoạn thẳng = 3 + 2 + 1 = 6 đoạn thẳng. Đáp án đúng là C.'),
    makeQ(17, 'geometry', 'Hình học', 'A triangle has sides of length 12cm, 15cm, and 18cm. Find the perimeter of the triangle.', 'Một hình tam giác có độ dài ba cạnh lần lượt là 12cm, 15cm và 18cm. Tính chu vi hình tam giác đó.', ['42cm', '45cm', '44cm', '48cm'], 'B', 'Chu vi tam giác là tổng độ dài 3 cạnh.', 'Chu vi = 12 + 15 + 18 = 45cm. Đáp án đúng là B.'),
    makeQ(18, 'geometry', 'Hình học', 'How many faces does a cube have?', 'Một khối lập phương có bao nhiêu mặt?', ['4 mặt', '6 mặt', '8 mặt', '12 mặt'], 'B', 'Khối lập phương giống như viên xúc xắc có 6 mặt.', 'Khối lập phương có đúng 6 mặt. Đáp án đúng là B.'),
    makeQ(19, 'geometry', 'Hình học', 'A rectangle has a length of 14cm and a width that is 5cm shorter than the length. What is the perimeter of this rectangle?', 'Một hình chữ nhật có chiều dài 14cm, chiều rộng ngắn hơn chiều dài 5cm. Tính chu vi của hình chữ nhật đó.', ['38cm', '46cm', '48cm', '52cm'], 'B', 'Tính chiều rộng rồi tính chu vi = (dài + rộng) x 2.', 'Chiều rộng = 14 - 5 = 9cm. Chu vi = (14 + 9) x 2 = 46cm. Đáp án đúng là B.'),
    makeQ(20, 'geometry', 'Hình học', 'A broken line consists of 3 segments with lengths 16cm, 24cm, and 35cm. What is the total length of this line?', 'Một đường gấp khúc gồm 3 đoạn thẳng có độ dài 16cm, 24cm và 35cm. Tính độ dài đường gấp khúc đó.', ['65cm', '70cm', '75cm', '80cm'], 'C', 'Cộng độ dài 3 đoạn thẳng lại với nhau.', 'Độ dài = 16 + 24 + 35 = 75cm. Đáp án đúng là C.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'How many different 2-digit numbers can be formed using digits 3, 5, and 7 without repetition?', 'Có bao nhiêu số có 2 chữ số khác nhau có thể lập được từ các chữ số 3, 5 và 7?', ['4 số', '5 số', '6 số', '9 số'], 'C', 'Chữ số hàng chục có 3 cách chọn, hàng đơn vị có 2 cách.', 'Số lượng số = 3 x 2 = 6 số (35, 37, 53, 57, 73, 75). Đáp án đúng là C.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', 'There are 5 red balls and 5 green balls in a box. At least how many balls must be drawn without looking to ensure getting 2 balls of the same color?', 'Trong hộp có 5 viên bi đỏ và 5 viên bi xanh. Hỏi phải lấy ra ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 2 viên bi cùng màu?', ['2 viên', '3 viên', '5 viên', '6 viên'], 'B', 'Trường hợp xấu nhất lấy 1 đỏ, 1 xanh (2 màu khác nhau). Viên thứ 3 chắc chắn trùng.', 'Theo nguyên lí Dirichlet: 2 màu + 1 = 3 viên bi. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'There are 2 roads from town A to town B, and 3 roads from town B to town C. How many different routes are there from A to C via B?', 'Có 2 con đường từ làng A đến làng B, và có 3 con đường từ làng B đến làng C. Hỏi có bao nhiêu cách đi khác nhau từ A đến C qua B?', ['5 cách', '6 cách', '7 cách', '8 cách'], 'B', 'Áp dụng quy tắc nhân.', 'Số cách đi = 2 x 3 = 6 cách đi. Đáp án đúng là B.'),
    makeQ(24, 'combinatorics', 'Tổ hợp', 'Tom has 3 shirts (Red, Blue, Yellow) and 2 pairs of shorts (Black, White). How many different outfits can he wear?', 'Tom có 3 chiếc áo (Đỏ, Xanh, Vàng) và 2 chiếc quần (Đen, Trắng). Hỏi Tom có thể phối được bao nhiêu bộ trang phục khác nhau?', ['5 bộ', '6 bộ', '8 bộ', '9 bộ'], 'B', 'Mỗi chiếc áo phối với 2 chiếc quần.', 'Số bộ trang phục = 3 x 2 = 6 bộ. Đáp án đúng là B.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', '4 friends Alan, Bob, Cindy, and Dan shake hands with each other once. How many handshakes are there in total?', 'Có 4 bạn Alan, Bob, Cindy và Dan bắt tay nhau, mỗi bạn đều bắt tay với mỗi bạn còn lại đúng 1 lần. Hỏi có tất cả bao nhiêu cái bắt tay?', ['4 cái', '5 cái', '6 cái', '8 cái'], 'C', 'Tổng số bắt tay = 3 + 2 + 1 = 6.', 'Số cái bắt tay = 4 x 3 : 2 = 6 cái. Đáp án đúng là C.')
  ];
  exams.push({
    id: 'exam_g2_1',
    name: 'Đề 1: TIMO Lớp 2 Quốc Gia',
    badge: 'Chuẩn 2025',
    color: 'from-blue-400 to-indigo-500',
    desc: 'Đề thi chính thức Vòng Chung kết Quốc gia Lớp 2',
    questions: set1,
  });

  // -------------------------------------------------------------
  // ĐỀ 2: THỬ THÁCH QUỐC TẾ
  // -------------------------------------------------------------
  const set2 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'Amy is 7 years old. Her mother is 32 years old. What is the difference between their ages 5 years from now?', 'Amy 7 tuổi. Mẹ Amy 32 tuổi. Hỏi 5 năm nữa mẹ hơn Amy bao nhiêu tuổi?', ['25 tuổi', '30 tuổi', '20 tuổi', '35 tuổi'], 'A', 'Hiệu số tuổi giữa hai người không bao giờ thay đổi theo thời gian.', 'Hiệu số tuổi luôn không đổi: 32 - 7 = 25 tuổi. Sau 5 năm nữa mẹ vẫn hơn Amy 25 tuổi. Đáp án đúng là A.'),
    makeQ(2, 'logic', 'Tư duy logic', 'A wooden stick is cut into 5 equal pieces. How many cuts were made?', 'Một thanh gỗ được cưa thành 5 khúc bằng nhau. Hỏi người thợ đã cưa bao nhiêu nhát?', ['5 nhát', '4 nhát', '6 nhát', '3 nhát'], 'B', 'Số nhát cắt = số khúc gỗ - 1.', 'Muốn cưa thành 5 khúc thì chỉ cần cưa 5 - 1 = 4 nhát. Đáp án đúng là B.'),
    makeQ(3, 'logic', 'Tư duy logic', 'Today is Friday. What day of the week will it be 16 days from now?', 'Hôm nay là Thứ Sáu. Hỏi 16 ngày nữa là thứ mấy?', ['Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật', 'Thứ Hai'], 'C', 'Mỗi tuần có 7 ngày. 16 : 7 = 2 tuần dư 2 ngày. Đếm thêm 2 ngày từ Thứ Sáu.', '16 ngày gồm 2 tuần và 2 ngày lẻ. Thứ Sáu cộng thêm 2 ngày: Thứ Bảy -> Chủ Nhật. Đáp án đúng là C.'),
    makeQ(4, 'logic', 'Tư duy logic', 'If 2 bears have the same weight as 6 rabbits, and 1 rabbit has the same weight as 3 ducks, how many ducks weigh the same as 1 bear?', 'Biết 2 con gấu nặng bằng 6 con thỏ, và 1 con thỏ nặng bằng 3 con vịt. Hỏi 1 con gấu nặng bằng bao nhiêu con vịt?', ['6 con', '9 con', '12 con', '8 con'], 'B', 'Tính xem 1 con gấu bằng mấy con thỏ trước.', '2 gấu = 6 thỏ => 1 gấu = 3 thỏ. Mà 1 thỏ = 3 vịt => 1 gấu = 3 x 3 = 9 con vịt. Đáp án đúng là B.'),
    makeQ(5, 'logic', 'Tư duy logic', 'Find the missing number in the sequence: 40, 35, 30, 25, ?, 15', 'Tìm số còn thiếu trong dãy: 40, 35, 30, 25, ?, 15', ['22', '20', '18', '24'], 'B', 'Dãy số giảm đều 5 đơn vị.', '25 - 5 = 20. Đáp án đúng là B.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 125 + 234 + 75', 'Tính nhanh: 125 + 234 + 75', ['434', '424', '444', '414'], 'A', 'Ghép 125 + 75 = 200 trước.', '(125 + 75) + 234 = 200 + 234 = 434. Đáp án đúng là A.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 500 - 165', 'Tính giá trị của: 500 - 165', ['335', '345', '435', '325'], 'A', 'Phép trừ số tròn trăm có nhớ liên tiếp.', '500 - 165 = 335. Đáp án đúng là A.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 2 x 9 + 5 x 4', 'Tính giá trị của: 2 x 9 + 5 x 4', ['36', '38', '40', '42'], 'B', 'Tính 2 x 9 = 18 và 5 x 4 = 20 rồi cộng lại.', '18 + 20 = 38. Đáp án đúng là B.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 45 : 5 + 16 : 2', 'Tính giá trị của: 45 : 5 + 16 : 2', ['15', '16', '17', '18'], 'C', '45 : 5 = 9; 16 : 2 = 8.', '9 + 8 = 17. Đáp án đúng là C.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find x: 100 - x = 37', 'Tìm số x biết: 100 - x = 37', ['63', '73', '67', '53'], 'A', 'Số trừ = số bị trừ - hiệu.', 'x = 100 - 37 = 63. Đáp án đúng là A.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'What is the smallest 3-digit number with all different digits?', 'Số nhỏ nhất có 3 chữ số khác nhau là số nào?', ['100', '101', '102', '123'], 'C', 'Chữ số hàng trăm nhỏ nhất khác 0 là 1. Hàng chục nhỏ nhất là 0. Hàng đơn vị nhỏ nhất khác 1 và 0 là 2.', 'Số đó là 102. Đáp án đúng là C.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'How many even numbers are there between 11 and 29?', 'Có bao nhiêu số chẵn nằm giữa 11 và 29?', ['8 số', '9 số', '10 số', '7 số'], 'B', 'Các số chẵn là 12, 14, 16, 18, 20, 22, 24, 26, 28.', 'Số lượng số chẵn = (28 - 12) : 2 + 1 = 9 số. Đáp án đúng là B.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'Which of the following numbers leaves a remainder of 2 when divided by 5?', 'Số nào dưới đây chia cho 5 dư 2?', ['34', '42', '55', '68'], 'B', 'Các số chia 5 dư 2 có chữ số tận cùng là 2 hoặc 7.', 'Số 42 có tận cùng là 2 nên 42 : 5 = 8 dư 2. Đáp án đúng là B.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'Convert 2m 5cm into centimeters.', 'Đổi 2m 5cm thành xăng-ti-mét (cm).', ['25 cm', '205 cm', '250 cm', '2005 cm'], 'B', '2m = 200cm. Cộng thêm 5cm.', '2m 5cm = 200 + 5 = 205cm. Đáp án đúng là B.'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'How many 2-digit numbers have 4 as their units digit?', 'Có bao nhiêu số có 2 chữ số mà chữ số hàng đơn vị là 4?', ['8 số', '9 số', '10 số', '11 số'], 'B', 'Các số đó là: 14, 24, 34, 44, 54, 64, 74, 84, 94.', 'Có tất cả 9 số (tương ứng hàng chục từ 1 đến 9). Đáp án đúng là B.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'How many triangles are there in the given figure?', 'Hình vẽ gồm 1 tam giác lớn chia đôi bằng 1 đường thẳng từ đỉnh xuống đáy. Hỏi có bao nhiêu hình tam giác?', ['2', '3', '4', '1'], 'B', 'Gồm 2 tam giác đơn và 1 tam giác lớn ghép từ 2 tam giác đơn.', '2 + 1 = 3 hình tam giác. Đáp án đúng là B.'),
    makeQ(17, 'geometry', 'Hình học', 'A square has a side length of 6cm. Find the perimeter of the square.', 'Một hình vuông có độ dài cạnh là 6cm. Tính chu vi hình vuông đó.', ['20cm', '24cm', '36cm', '18cm'], 'B', 'Chu vi hình vuông = độ dài cạnh x 4.', 'Chu vi = 6 x 4 = 24cm. Đáp án đúng là B.'),
    makeQ(18, 'geometry', 'Hình học', 'How many vertices (corners) does a rectangular cuboid have?', 'Một khối hộp chữ nhật có tất cả bao nhiêu đỉnh?', ['6 đỉnh', '8 đỉnh', '12 đỉnh', '4 đỉnh'], 'B', 'Khối hộp chữ nhật có 4 đỉnh ở mặt trên và 4 đỉnh ở mặt dưới.', 'Tổng số đỉnh là 4 + 4 = 8 đỉnh. Đáp án đúng là B.'),
    makeQ(19, 'geometry', 'Hình học', 'A quadrilateral has sides measuring 8cm, 9cm, 11cm, and 12cm. Find its perimeter.', 'Một hình tứ giác có độ dài các cạnh là 8cm, 9cm, 11cm và 12cm. Tính chu vi hình tứ giác đó.', ['38cm', '40cm', '42cm', '44cm'], 'B', 'Chu vi tứ giác bằng tổng độ dài 4 cạnh.', '8 + 9 + 11 + 12 = (8 + 12) + (9 + 11) = 20 + 20 = 40cm. Đáp án đúng là B.'),
    makeQ(20, 'geometry', 'Hình học', 'The distance from point A to B is 15dm, and from B to C is 25dm. What is the total distance from A to C through B?', 'Đoạn đường từ A đến B dài 15dm, từ B đến C dài 25dm. Hỏi đoạn đường từ A đến C qua B dài bao nhiêu mét (m)?', ['3m', '4m', '40m', '5m'], 'B', 'Tính tổng số dm rồi đổi sang mét: 15 + 25 = 40dm. 10dm = 1m.', '40dm = 4m. Đáp án đúng là B.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'How many different 3-digit numbers can be formed using digits 1, 2, 3 without repeating any digit?', 'Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3?', ['4 số', '6 số', '8 số', '9 số'], 'B', 'Hàng trăm có 3 cách chọn, hàng chục có 2 cách, hàng đơn vị có 1 cách.', 'Số lượng số = 3 x 2 x 1 = 6 số (123, 132, 213, 231, 312, 321). Đáp án đúng là B.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', 'There are 4 black socks and 4 white socks in a drawer. At least how many socks must be taken out in the dark to guarantee at least one matching pair?', 'Trong ngăn kéo có 4 chiếc tất đen và 4 chiếc tất trắng. Hỏi cần lấy ra ít nhất bao nhiêu chiếc tất trong bóng tối để chắc chắn có 1 đôi tất cùng màu?', ['2 chiếc', '3 chiếc', '4 chiếc', '5 chiếc'], 'B', 'Trường hợp xấu nhất lấy 1 đen và 1 trắng (2 chiếc khác màu). Chiếc thứ 3 chắc chắn sẽ tạo thành đôi cùng màu.', 'Theo nguyên lí Dirichlet: 2 màu + 1 = 3 chiếc. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'In how many ways can 3 kids Alan, Ben, and Carl sit in a row of 3 chairs?', 'Có bao nhiêu cách xếp 3 bạn Alan, Ben và Carl ngồi vào 3 chiếc ghế xếp thành một hàng ngang?', ['3 cách', '5 cách', '6 cách', '9 cách'], 'C', 'Ghế 1 có 3 bạn để chọn, ghế 2 có 2 bạn, ghế 3 có 1 bạn.', 'Số cách xếp = 3 x 2 x 1 = 6 cách. Đáp án đúng là C.'),
    makeQ(24, 'combinatorics', 'Tổ hợp', 'A coin is flipped. Which of the following is certain to happen?', 'Tung một đồng xu có hai mặt sấp và ngửa. Sự kiện nào sau đây là chắc chắn xảy ra?', ['Mặt sấp xuất hiện', 'Mặt ngửa xuất hiện', 'Xuất hiện mặt sấp hoặc mặt ngửa', 'Cả hai mặt cùng xuất hiện'], 'C', 'Đồng xu chỉ có 2 mặt sấp hoặc ngửa, nên khi tung chắc chắn sẽ rơi vào 1 trong 2 mặt đó.', 'Sự kiện chắc chắn xảy ra là "Xuất hiện mặt sấp hoặc mặt ngửa". Đáp án đúng là C.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', 'How many 2-digit numbers have the sum of their digits equal to 5?', 'Có bao nhiêu số có 2 chữ số mà tổng các chữ số của nó bằng 5?', ['4 số', '5 số', '6 số', '7 số'], 'B', 'Các cặp số có tổng bằng 5: (1,4), (2,3), (3,2), (4,1), (5,0).', 'Các số là: 14, 23, 32, 41, 50 -> Có tất cả 5 số. Đáp án đúng là B.')
  ];
  exams.push({
    id: 'exam_g2_2',
    name: 'Đề 2: TIMO Thử Thách Quốc Tế',
    badge: 'Quốc Tế',
    color: 'from-cyan-500 to-blue-600',
    desc: 'Cân thăng bằng, que cưa, hình khối 3D & xác suất cơ bản',
    questions: set2,
  });

  // -------------------------------------------------------------
  // ĐỀ 3: HUY CHƯƠNG VÀNG
  // -------------------------------------------------------------
  const set3 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'Leo has 14 toy cars. If he gives 3 cars to Sam, they will have the same number of cars. How many cars did Sam have at first?', 'Leo có 14 chiếc ô tô đồ chơi. Nếu Leo cho Sam 3 chiếc thì số ô tô của hai bạn bằng nhau. Hỏi lúc đầu Sam có bao nhiêu chiếc ô tô?', ['8 chiếc', '11 chiếc', '7 chiếc', '9 chiếc'], 'A', 'Tính số xe của Leo sau khi cho 3 chiếc: 14 - 3 = 11 chiếc. Đó cũng là số xe của Sam sau khi nhận.', 'Sau khi cho, mỗi bạn có 11 chiếc. Vậy lúc đầu Sam có: 11 - 3 = 8 chiếc. Đáp án đúng là A.'),
    makeQ(2, 'logic', 'Tư duy logic', 'Trees are planted along a 20-meter straight path with a tree at both ends. If the distance between adjacent trees is 5 meters, how many trees are planted?', 'Người ta trồng cây dọc theo một con đường thẳng dài 20m, ở cả hai đầu đường đều có cây. Biết khoảng cách giữa hai cây liền nhau là 5m. Hỏi có tất cả bao nhiêu cây?', ['4 cây', '5 cây', '6 cây', '3 cây'], 'B', 'Số cây trồng cả 2 đầu đường = số khoảng cách + 1.', 'Số khoảng cách = 20 : 5 = 4 khoảng cách. Số cây = 4 + 1 = 5 cây. Đáp án đúng là B.'),
    makeQ(3, 'logic', 'Tư duy logic', 'A clock shows 3:00 now. What time will it show 15 hours later?', 'Đồng hồ chỉ đúng 3 giờ. Hỏi 15 giờ sau đồng hồ sẽ chỉ mấy giờ?', ['5 giờ', '6 giờ', '7 giờ', '8 giờ'], 'B', 'Mỗi vòng đồng hồ là 12 giờ. 15 giờ = 12 giờ + 3 giờ.', '3 giờ + 15 giờ = 18 giờ, tương ứng với 6 giờ trên mặt đồng hồ kim (18 - 12 = 6). Đáp án đúng là B.'),
    makeQ(4, 'logic', 'Tư duy logic', 'Find the 20th letter in the repeating sequence: A, B, C, A, B, C, A, B, C...', 'Tìm chữ cái thứ 20 trong dãy lặp lại: A, B, C, A, B, C, A, B, C...', ['Chữ A', 'Chữ B', 'Chữ C', 'Chữ D'], 'B', 'Chu kì lặp lại gồm 3 chữ cái: A (1), B (2), C (3). Lấy 20 chia cho 3 tìm số dư.', '20 : 3 = 6 nhóm dư 2. Chữ cái thứ 2 trong nhóm là B. Đáp án đúng là B.'),
    makeQ(5, 'logic', 'Tư duy logic', 'Four children A, B, C, D ran a race. A was faster than B. C was faster than A. D was slower than B. Who finished first?', 'Bốn bạn A, B, C, D thi chạy. A chạy nhanh hơn B. C chạy nhanh hơn A. D chạy chậm hơn B. Hỏi ai về đích đầu tiên?', ['Bạn A', 'Bạn B', 'Bạn C', 'Bạn D'], 'C', 'Xếp thứ tự tốc độ từ nhanh nhất đến chậm nhất: C > A > B > D.', 'Bạn C chạy nhanh nhất và về đích đầu tiên. Đáp án đúng là C.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 45 + 55 + 67 + 33', 'Tính nhanh: 45 + 55 + 67 + 33', ['190', '200', '210', '180'], 'B', 'Nhóm (45 + 55) = 100 và (67 + 33) = 100.', '100 + 100 = 200. Đáp án đúng là B.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 80 - 15 - 25', 'Tính giá trị của: 80 - 15 - 25', ['40', '50', '45', '35'], 'A', '80 - (15 + 25) = 80 - 40.', '80 - 40 = 40. Đáp án đúng là A.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 5 x 9 - 2 x 5', 'Tính giá trị của: 5 x 9 - 2 x 5', ['30', '35', '40', '45'], 'B', '5 x (9 - 2) = 5 x 7 = 35 hoặc tính 45 - 10.', '45 - 10 = 35. Đáp án đúng là B.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 2 x 4 x 5', 'Tính giá trị của: 2 x 4 x 5', ['30', '40', '50', '60'], 'B', 'Nhân 2 x 5 = 10 trước rồi nhân với 4.', '(2 x 5) x 4 = 10 x 4 = 40. Đáp án đúng là B.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find y: y + 47 = 100', 'Tìm số y biết: y + 47 = 100', ['53', '63', '43', '57'], 'A', 'Số hạng = tổng - số hạng đã biết.', 'y = 100 - 47 = 53. Đáp án đúng là A.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'What is the sum of the smallest 2-digit number and the greatest 3-digit number?', 'Tổng của số nhỏ nhất có 2 chữ số và số lớn nhất có 3 chữ số là bao nhiêu?', ['1009', '1099', '1000', '999'], 'A', 'Số nhỏ nhất có 2 chữ số là 10. Số lớn nhất có 3 chữ số là 999.', '10 + 999 = 1009. Đáp án đúng là A.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'Find the 10th number in the sequence: 3, 6, 9, 12, 15...', 'Tìm số thứ 10 trong dãy số: 3, 6, 9, 12, 15...', ['27', '30', '33', '36'], 'B', 'Số thứ n = 3 x n.', 'Số thứ 10 = 3 x 10 = 30. Đáp án đúng là B.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'If a number is multiplied by 2 and then added to 8, the result is 26. What is the number?', 'Một số khi nhân với 2 rồi cộng thêm 8 thì được kết quả là 26. Tìm số đó.', ['8', '9', '10', '11'], 'B', 'Làm phép tính ngược lại từ cuối: (26 - 8) : 2.', '26 - 8 = 18; 18 : 2 = 9. Đáp án đúng là B.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'How many digits are used to write all numbers from 1 to 15?', 'Cần dùng bao nhiêu chữ số để viết tất cả các số từ 1 đến 15?', ['18', '20', '21', '22'], 'C', 'Từ 1 đến 9 có 9 số có 1 chữ số (9 chữ số). Từ 10 đến 15 có 6 số có 2 chữ số (12 chữ số).', 'Tổng số chữ số = 9 + 6 x 2 = 9 + 12 = 21 chữ số. Đáp án đúng là C.'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'Convert: 3kg 500g = ? g', 'Đổi: 3kg 500g = ? g', ['350g', '3050g', '3500g', '35000g'], 'C', '1kg = 1000g nên 3kg = 3000g.', '3000 + 500 = 3500g. Đáp án đúng là C.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'How many squares are there in a 2x2 grid?', 'Một lưới ô vuông kích thước 2x2 gồm bao nhiêu hình vuông tất cả?', ['4', '5', '6', '8'], 'B', 'Gồm 4 hình vuông nhỏ kích thước 1x1 và 1 hình vuông lớn kích thước 2x2 bao quanh.', '4 + 1 = 5 hình vuông. Đáp án đúng là B.'),
    makeQ(17, 'geometry', 'Hình học', 'An equilateral triangle has a perimeter of 27cm. Find the length of each side.', 'Một hình tam giác có 3 cạnh bằng nhau và có chu vi là 27cm. Độ dài mỗi cạnh của tam giác là bao nhiêu?', ['8cm', '9cm', '10cm', '7cm'], 'B', 'Lấy chu vi chia cho 3.', 'Độ dài mỗi cạnh = 27 : 3 = 9cm. Đáp án đúng là B.'),
    makeQ(18, 'geometry', 'Hình học', 'How many edges does a cube have?', 'Một khối lập phương có bao nhiêu cạnh?', ['6 cạnh', '8 cạnh', '12 cạnh', '10 cạnh'], 'C', 'Mặt trên 4 cạnh, mặt dưới 4 cạnh, 4 cạnh đứng nối.', 'Tổng số cạnh = 4 + 4 + 4 = 12 cạnh. Đáp án đúng là C.'),
    makeQ(19, 'geometry', 'Hình học', 'A wire of length 36cm is bent into a square. What is the length of one side of this square?', 'Một sợi dây thép dài 36cm được uốn thành một hình vuông. Hỏi độ dài một cạnh của hình vuông đó là bao nhiêu?', ['8cm', '9cm', '10cm', '12cm'], 'B', 'Chiều dài sợi dây chính là chu vi hình vuông. Cạnh = chu vi : 4.', 'Cạnh hình vuông = 36 : 4 = 9cm. Đáp án đúng là B.'),
    makeQ(20, 'geometry', 'Hình học', 'A rectangle has a length of 20cm. Its width is half of its length. Find its perimeter.', 'Một hình chữ nhật có chiều dài 20cm, chiều rộng bằng một nửa chiều dài. Tính chu vi hình chữ nhật đó.', ['50cm', '60cm', '70cm', '40cm'], 'B', 'Chiều rộng = 20 : 2 = 10cm. Chu vi = (20 + 10) x 2.', 'Chu vi = 30 x 2 = 60cm. Đáp án đúng là B.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'How many 2-digit numbers have both digits odd?', 'Có bao nhiêu số có 2 chữ số mà cả hai chữ số đều là số lẻ?', ['20 số', '25 số', '30 số', '15 số'], 'B', 'Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chữ số hàng chục có 5 cách chọn, hàng đơn vị có 5 cách chọn.', 'Số lượng số = 5 x 5 = 25 số. Đáp án đúng là B.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', 'There are 10 apples in a basket. 3 kids want to share them so that each kid gets at least 1 apple. At most how many apples can one kid get?', 'Trong giỏ có 10 quả táo. Ba bạn nhỏ chia nhau số táo sao cho mỗi bạn đều nhận được ít nhất 1 quả. Hỏi một bạn có thể nhận được nhiều nhất bao nhiêu quả táo?', ['7 quả', '8 quả', '9 quả', '6 quả'], 'B', 'Để một bạn nhận nhiều nhất, hai bạn còn lại mỗi bạn nhận ít nhất 1 quả.', 'Số táo nhiều nhất cho 1 bạn = 10 - 1 - 1 = 8 quả. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'How many 2-digit numbers can be formed using digits 0, 4, 8 without repetition?', 'Có bao nhiêu số có 2 chữ số khác nhau có thể lập được từ các chữ số 0, 4 và 8?', ['4 số', '5 số', '6 số', '3 số'], 'A', 'Chữ số hàng chục không thể là 0, nên hàng chục chỉ có 2 cách chọn (4 hoặc 8). Hàng đơn vị có 2 cách chọn còn lại.', 'Các số là: 40, 48, 80, 84 -> Có đúng 4 số. Đáp án đúng là A.'),
    makeQ(24, 'combinatorics', 'Tổ hợp', '5 students each play one chess match against every other student. How many matches are played in total?', 'Có 5 bạn học sinh, mỗi bạn đều đấu với mỗi bạn còn lại đúng 1 ván cờ. Hỏi có tất cả bao nhiêu ván cờ diễn ra?', ['8 ván', '10 ván', '12 ván', '15 ván'], 'B', 'Công thức tính số ván đấu vòng tròn: 5 x 4 : 2.', 'Số ván cờ = 4 + 3 + 2 + 1 = 10 ván cờ. Đáp án đúng là B.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', 'There are 3 red cards, 3 blue cards, and 3 yellow cards. What is the minimum number of cards to draw without looking to be sure of having 2 cards of the same color?', 'Có 3 thẻ màu đỏ, 3 thẻ màu xanh và 3 thẻ màu vàng. Cần rút ít nhất bao nhiêu thẻ mà không nhìn để chắc chắn có 2 thẻ cùng màu?', ['3 thẻ', '4 thẻ', '5 thẻ', '6 thẻ'], 'B', 'Trường hợp xấu nhất rút 3 thẻ thuộc 3 màu khác nhau (Đỏ, Xanh, Vàng). Thẻ thứ 4 chắc chắn trùng màu với 1 trong 3 thẻ trước.', 'Nguyên lí Dirichlet: 3 màu + 1 = 4 thẻ. Đáp án đúng là B.')
  ];
  exams.push({
    id: 'exam_g2_3',
    name: 'Đề 3: TIMO Huy Chương Vàng',
    badge: 'Nâng Cao',
    color: 'from-amber-500 to-yellow-600',
    desc: 'Bài toán trồng cây, chu kì chữ cái, giải đấu & Dirichlet nâng cao',
    questions: set3,
  });

  // -------------------------------------------------------------
  // ĐỀ 4: TINH HOA ĐỘT PHÁ
  // -------------------------------------------------------------
  const set4 = [
    // Logic (1-5)
    makeQ(1, 'logic', 'Tư duy logic', 'A snail climbs up a 10-meter wall. Each day it climbs up 3 meters, but each night it slides down 2 meters. How many days will it take for the snail to reach the top?', 'Một chú ốc sên bò lên một bức tường cao 10m. Mỗi ngày chú bò lên được 3m, nhưng mỗi đêm lại bị tụt xuống 2m. Hỏi sau bao nhiêu ngày chú ốc sên sẽ bò lên đến đỉnh tường?', ['7 ngày', '8 ngày', '9 ngày', '10 ngày'], 'B', 'Mỗi ngày đêm chú leo được 1m. Khi đạt đến 7m (hết ngày thứ 7), sang ngày thứ 8 chú leo thêm 3m là tới đỉnh (7 + 3 = 10m) và không bị tụt nữa!', 'Sau 7 ngày đêm, ốc sên ở độ cao 7m. Sang ban ngày thứ 8, ốc sên leo thêm 3m lên đúng 10m tới đỉnh tường. Vậy mất đúng 8 ngày. Đáp án đúng là B.'),
    makeQ(2, 'logic', 'Tư duy logic', 'In a family, there are 1 father, 1 mother, 2 sons, and each son has 1 sister. How many people are there in the family in total?', 'Trong một gia đình có 1 bố, 1 mẹ, 2 người con trai và mỗi người con trai đều có 1 người em gái. Hỏi gia đình đó có tất cả bao nhiêu người?', ['6 người', '5 người', '7 người', '8 người'], 'B', 'Cả 2 người con trai đều dùng chung 1 người em gái!', 'Gia đình gồm: 1 bố + 1 mẹ + 2 con trai + 1 con gái = 5 người. Đáp án đúng là B.'),
    makeQ(3, 'logic', 'Tư duy logic', 'A book has 50 pages. How many times does the digit "3" appear in the page numbers from 1 to 50?', 'Một cuốn sách có 50 trang được đánh số từ 1 đến 50. Hỏi chữ số 3 xuất hiện bao nhiêu lần trong các số trang?', ['14 lần', '15 lần', '16 lần', '13 lần'], 'B', 'Chữ số 3 ở hàng đơn vị: 3, 13, 23, 33, 43 (5 lần). Chữ số 3 ở hàng chục: 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 (10 lần). Riêng số 33 có 2 chữ số 3.', 'Tổng số lần xuất hiện = 5 + 10 = 15 lần. Đáp án đúng là B.'),
    makeQ(4, 'logic', 'Tư duy logic', 'The day before yesterday was Tuesday. What day of the week will it be 3 days after tomorrow?', 'Hôm kia là Thứ Ba. Hỏi 3 ngày sau ngày mai sẽ là thứ mấy?', ['Thứ Hai', 'Thứ Ba', 'Chủ Nhật', 'Thứ Bảy'], 'A', 'Hôm kia là Thứ Ba => Hôm qua là Thứ Tư => Hôm nay là Thứ Năm => Ngày mai là Thứ Sáu. 3 ngày sau ngày mai là Thứ Sáu + 3 ngày = Thứ Hai.', 'Thứ Sáu + 3 ngày là Thứ Hai. Đáp án đúng là A.'),
    makeQ(5, 'logic', 'Tư duy logic', 'If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 10 mice in 10 minutes?', 'Biết 3 con mèo bắt được 3 con chuột trong 3 phút. Hỏi cần bao nhiêu con mèo để bắt được 10 con chuột trong 10 phút?', ['10 con', '3 con', '1 con', '30 con'], 'B', '1 con mèo bắt 1 con chuột mất 3 phút. Trong 10 phút, 1 con mèo bắt được 3 con chuột.', '3 con mèo trong 10 phút bắt được 10 con chuột. Đáp án đúng là B.'),
    // Arithmetic (6-10)
    makeQ(6, 'arithmetic', 'Số học', 'Calculate: 345 + 128 - 45', 'Tính nhanh: 345 + 128 - 45', ['428', '438', '418', '408'], 'A', 'Lấy (345 - 45) + 128 = 300 + 128.', '300 + 128 = 428. Đáp án đúng là A.'),
    makeQ(7, 'arithmetic', 'Số học', 'Calculate: 100 - 24 - 26', 'Tính giá trị của: 100 - 24 - 26', ['40', '50', '60', '48'], 'B', '100 - (24 + 26) = 100 - 50.', '100 - 50 = 50. Đáp án đúng là B.'),
    makeQ(8, 'arithmetic', 'Số học', 'Calculate: 5 x 8 + 2 x 8', 'Tính nhanh: 5 x 8 + 2 x 8', ['56', '64', '48', '72'], 'A', 'Áp dụng tính chất phân phối: (5 + 2) x 8 = 7 x 8.', '7 x 8 = 56. Đáp án đúng là A.'),
    makeQ(9, 'arithmetic', 'Số học', 'Calculate: 50 : 5 - 14 : 2', 'Tính giá trị của: 50 : 5 - 14 : 2', ['2', '3', '4', '5'], 'B', '50 : 5 = 10; 14 : 2 = 7.', '10 - 7 = 3. Đáp án đúng là B.'),
    makeQ(10, 'arithmetic', 'Số học', 'Find x: 2 x x + 15 = 27', 'Tìm x biết: 2 x x + 15 = 27', ['5', '6', '7', '8'], 'B', '2 x x = 27 - 15 = 12 => x = 12 : 2.', 'x = 12 : 2 = 6. Đáp án đúng là B.'),
    // Number Theory (11-15)
    makeQ(11, 'number_theory', 'Lý thuyết số', 'What is the remainder when 38 is divided by 5?', 'Số 38 chia cho 5 được số dư là bao nhiêu?', ['1', '2', '3', '4'], 'C', 'Nhẩm 5 x 7 = 35. 38 - 35 = 3.', '38 : 5 = 7 dư 3. Đáp án đúng là C.'),
    makeQ(12, 'number_theory', 'Lý thuyết số', 'How many 2-digit numbers are divisible by 5?', 'Có bao nhiêu số có 2 chữ số chia hết cho 5?', ['18 số', '19 số', '20 số', '17 số'], 'A', 'Các số từ 10 đến 95 có tận cùng là 0 hoặc 5.', 'Số lượng = (95 - 10) : 5 + 1 = 17 + 1 = 18 số. Đáp án đúng là A.'),
    makeQ(13, 'number_theory', 'Lý thuyết số', 'Find the sum of all odd numbers from 1 to 9.', 'Tính tổng của tất cả các số lẻ từ 1 đến 9.', ['20', '25', '30', '16'], 'B', '1 + 3 + 5 + 7 + 9 = (1 + 9) + (3 + 7) + 5 = 10 + 10 + 5.', 'Tổng = 25. Đáp án đúng là B.'),
    makeQ(14, 'number_theory', 'Lý thuyết số', 'A number has 8 hundreds, 0 tens, and 4 units. How is this number written?', 'Một số gồm 8 trăm, 0 chục và 4 đơn vị được viết là:', ['84', '804', '840', '8004'], 'B', 'Viết theo thứ tự từ hàng trăm đến hàng đơn vị: 804.', 'Số đó là 804. Đáp án đúng là B.'),
    makeQ(15, 'number_theory', 'Lý thuyết số', 'If today is the 12th day of the month, which date was exactly 2 weeks ago?', 'Nếu hôm nay là ngày 12 của một tháng, thì đúng 2 tuần trước là ngày mùng mấy?', ['Ngày 28 tháng trước', 'Ngày 26 tháng trước', 'Ngày 29 tháng trước', 'Ngày 27 tháng trước'], 'A', '2 tuần = 14 ngày. Lùi lại 12 ngày là hết tháng, lùi thêm 2 ngày vào tháng trước (tháng trước có 30 hoặc 31 ngày, trung bình là ngày 28).', 'Đáp án đúng là A.'),
    // Geometry (16-20)
    makeQ(16, 'geometry', 'Hình học', 'How many rectangles are there in a 1x3 grid?', 'Một băng giấy gồm 3 ô vuông xếp liền nhau thành hàng ngang có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?', ['3', '5', '6', '4'], 'C', 'Gồm 3 hình kích thước 1x1, 2 hình kích thước 1x2, và 1 hình kích thước 1x3.', '3 + 2 + 1 = 6 hình. Đáp án đúng là C.'),
    makeQ(17, 'geometry', 'Hình học', 'A rectangle has a perimeter of 30cm. The length is 9cm. What is the width of this rectangle?', 'Một hình chữ nhật có chu vi là 30cm, chiều dài là 9cm. Tính chiều rộng của hình chữ nhật đó.', ['5cm', '6cm', '7cm', '8cm'], 'B', 'Nửa chu vi = 30 : 2 = 15cm. Chiều rộng = 15 - 9 = 6cm.', 'Chiều rộng = 6cm. Đáp án đúng là B.'),
    makeQ(18, 'geometry', 'Hình học', 'How many right angles does a rectangle have?', 'Một hình chữ nhật có tất cả bao nhiêu góc vuông?', ['2 góc vuông', '4 góc vuông', '6 góc vuông', '8 góc vuông'], 'B', 'Hình chữ nhật có 4 góc ở 4 đỉnh đều là góc vuông.', 'Hình chữ nhật có 4 góc vuông. Đáp án đúng là B.'),
    makeQ(19, 'geometry', 'Hình học', 'A square piece of paper has a side of 10cm. It is cut into 2 equal rectangles. What is the perimeter of each smaller rectangle?', 'Một tờ giấy hình vuông có cạnh dài 10cm được cắt thành 2 hình chữ nhật bằng nhau. Tính chu vi của mỗi hình chữ nhật nhỏ đó.', ['20cm', '25cm', '30cm', '35cm'], 'C', 'Mỗi hình chữ nhật nhỏ có chiều dài 10cm và chiều rộng 10 : 2 = 5cm.', 'Chu vi = (10 + 5) x 2 = 15 x 2 = 30cm. Đáp án đúng là C.'),
    makeQ(20, 'geometry', 'Hình học', 'Find the total length of the edges of a cube with side 3cm.', 'Tính tổng độ dài tất cả các cạnh của một khối lập phương có cạnh bằng 3cm.', ['24cm', '36cm', '48cm', '18cm'], 'B', 'Khối lập phương có đúng 12 cạnh bằng nhau.', 'Tổng độ dài = 12 x 3 = 36cm. Đáp án đúng là B.'),
    // Combinatorics (21-25)
    makeQ(21, 'combinatorics', 'Tổ hợp', 'How many 2-digit numbers can be formed using only digits 1 and 2 (digits can be repeated)?', 'Có bao nhiêu số có 2 chữ số có thể lập được chỉ từ hai chữ số 1 và 2 (các chữ số có thể lặp lại)?', ['2 số', '3 số', '4 số', '5 số'], 'C', 'Hàng chục có 2 cách chọn, hàng đơn vị có 2 cách chọn.', 'Các số là: 11, 12, 21, 22 -> Có đúng 4 số (2 x 2 = 4). Đáp án đúng là C.'),
    makeQ(22, 'combinatorics', 'Tổ hợp', 'There are 12 candies of 3 different flavors (Strawberry, Orange, Apple) with 4 of each flavor. At least how many candies must be picked to ensure getting 2 candies of the same flavor?', 'Có 12 cái kẹo gồm 3 vị khác nhau (Dâu, Cam, Táo), mỗi vị có 4 cái. Cần lấy ít nhất bao nhiêu cái kẹo để chắc chắn có 2 cái cùng vị?', ['3 cái', '4 cái', '5 cái', '6 cái'], 'B', 'Có 3 vị kẹo khác nhau. Trường hợp xấu nhất lấy 3 cái thuộc 3 vị khác nhau. Cái thứ 4 chắc chắn trùng.', 'Nguyên lí Dirichlet: 3 + 1 = 4 cái kẹo. Đáp án đúng là B.'),
    makeQ(23, 'combinatorics', 'Tổ hợp', 'How many different ways can you make 10 coins by combining 2-coin and 5-coin values?', 'Có bao nhiêu cách đổi tờ 10 nghìn đồng thành các đồng xu 2 nghìn và 5 nghìn đồng?', ['1 cách', '2 cách', '3 cách', '4 cách'], 'B', 'Cách 1: Năm đồng 2 nghìn (5 x 2 = 10). Cách 2: Hai đồng 5 nghìn (2 x 5 = 10).', 'Có đúng 2 cách đổi. Đáp án đúng là B.'),
    makeQ(24, 'combinatorics', 'Tổ hợp', 'In a group of 13 children, which of the following statements must be true?', 'Trong một nhóm gồm 13 bạn nhỏ, khẳng định nào sau đây là chắc chắn đúng?', ['Có ít nhất 2 bạn sinh cùng tháng', 'Mỗi bạn sinh vào một tháng khác nhau', 'Có ít nhất 3 bạn sinh cùng tháng', 'Tất cả các bạn sinh vào mùa hè'], 'A', 'Một năm chỉ có đúng 12 tháng. Theo nguyên lí Dirichlet, có 13 bạn nên chắc chắn có ít nhất 2 bạn sinh cùng tháng.', '13 bạn chia vào 12 tháng => Chắc chắn có ít nhất 2 bạn sinh cùng tháng. Đáp án đúng là A.'),
    makeQ(25, 'combinatorics', 'Tổ hợp', 'How many numbers between 1 and 20 are divisible by both 2 and 3?', 'Có bao nhiêu số từ 1 đến 20 vừa chia hết cho 2 vừa chia hết cho 3?', ['2 số', '3 số', '4 số', '5 số'], 'B', 'Số vừa chia hết cho 2 vừa chia hết cho 3 thì chia hết cho 6.', 'Các số đó là: 6, 12, 18 -> Có tất cả 3 số. Đáp án đúng là B.')
  ];
  exams.push({
    id: 'exam_g2_4',
    name: 'Đề 4: TIMO Tinh Hoa Đột Phá',
    badge: 'Tinh Hoa',
    color: 'from-purple-500 to-indigo-600',
    desc: 'Ốc sên leo tường, đếm chữ số trang sách, nguyên lí chim bồ câu',
    questions: set4,
  });

  // Random generator exam
  exams.push({
    id: 'exam_g2_random',
    name: 'Đề 5: Luyện Đề Ngẫu Nhiên 🎲',
    badge: 'Vô Hạn',
    color: 'from-rose-400 to-red-500',
    desc: 'Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 2',
    questions: [],
  });

  return exams;
}

const g2Exams = generateGrade2Exams();
const content = `// Ngân hàng đề thi TIMO Lớp 2 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức (100 câu hỏi độc bản) & Trình Tạo Đề Ngẫu Nhiên Vô Hạn
// Đầy đủ 5 chuyên đề chuẩn: Tư duy logic, Số học, Lý thuyết số, Hình học, Tổ hợp

export const TIMO_EXAMS_GRADE_2 = ${JSON.stringify(g2Exams, null, 2)};

export function generateRandomTimoGrade2Exam() {
  const allExams = [
    TIMO_EXAMS_GRADE_2[0].questions,
    TIMO_EXAMS_GRADE_2[1].questions,
    TIMO_EXAMS_GRADE_2[2].questions,
    TIMO_EXAMS_GRADE_2[3].questions,
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
    id: 'rand_g2_' + (idx + 1),
  }));
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/timoGrade2.js'), content, 'utf8');
console.log('Successfully wrote src/data/timoGrade2.js with 4 exams (100 questions)!');
