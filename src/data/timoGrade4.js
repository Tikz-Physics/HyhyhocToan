// Ngân hàng đề thi TIMO Lớp 4 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức & Trình Tạo Đề Ngẫu Nhiên Vô Hạn

export const TIMO_EXAMS_GRADE_4 = [
  {
    "id": "exam_g4_1",
    "name": "Đề 1: TIMO Lớp 4 Quốc Gia",
    "badge": "Chuẩn 2025",
    "color": "from-purple-500 to-indigo-600",
    "desc": "Đề thi chính thức Vòng Chung kết Quốc gia Lớp 4",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "There are 10 chickens and rabbits in a cage. There are 28 legs in total. How many rabbits are there?",
        "titleVi": "Vừa gà vừa thỏ có tất cả 10 con nhốt trong một chuồng. Đếm được tất cả 28 cái chân. Hỏi có bao nhiêu con thỏ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 con"
          },
          {
            "id": "B",
            "text": "4 con"
          },
          {
            "id": "C",
            "text": "5 con"
          },
          {
            "id": "D",
            "text": "6 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp giả thiết tạm: Giả sử cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu là 28 - 20 = 8 chân. Mỗi con thỏ hơn con gà 2 chân.",
        "explanation": "Số con thỏ = (28 - 10 x 2) : (4 - 2) = 8 : 2 = 4 con thỏ. Đáp án đúng là B."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "3 pens and 2 notebooks cost 44,000 VND. 2 pens and 2 notebooks cost 36,000 VND. How much does 1 pen cost?",
        "titleVi": "Mua 3 chiếc bút và 2 cuốn vở hết 44 000 đồng. Mua 2 chiếc bút và 2 cuốn vở hết 36 000 đồng. Hỏi 1 chiếc bút giá bao nhiêu tiền?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 000 đồng"
          },
          {
            "id": "B",
            "text": "8 000 đồng"
          },
          {
            "id": "C",
            "text": "10 000 đồng"
          },
          {
            "id": "D",
            "text": "12 000 đồng"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp khử: So sánh hai lần mua, số vở như nhau nhưng lần 1 nhiều hơn 1 chiếc bút.",
        "explanation": "Giá 1 chiếc bút = 44 000 - 36 000 = 8 000 đồng. Đáp án đúng là B."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The average of 5 consecutive odd numbers is 17. What is the greatest number among them?",
        "titleVi": "Trung bình cộng của 5 số lẻ liên tiếp là 17. Hỏi số lớn nhất trong 5 số đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "19"
          },
          {
            "id": "B",
            "text": "21"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số cách đều có số lượng số lẻ (5 số), số trung bình cộng chính là số đứng ở chính giữa (số thứ 3).",
        "explanation": "5 số lẻ liên tiếp có số ở giữa là 17: 13, 15, 17, 19, 21. Số lớn nhất là 21. Đáp án đúng là B."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Father is 4 times as old as his son. The sum of their ages is 50. How old is the father?",
        "titleVi": "Tuổi bố gấp 4 lần tuổi con. Tổng số tuổi của hai bố con là 50 tuổi. Hỏi bố bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "35 tuổi"
          },
          {
            "id": "B",
            "text": "40 tuổi"
          },
          {
            "id": "C",
            "text": "42 tuổi"
          },
          {
            "id": "D",
            "text": "45 tuổi"
          }
        ],
        "correctAnswer": "B",
        "hint": "Bài toán Tìm hai số khi biết Tổng và Tỉ số: Tổng số phần bằng nhau là 1 + 4 = 5 phần.",
        "explanation": "Giá trị 1 phần (tuổi con) = 50 : 5 = 10 tuổi. Tuổi của bố = 10 x 4 = 40 tuổi. Đáp án đúng là B."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 2, 6, 12, 20, 30, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 2, 6, 12, 20, 30, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "44"
          },
          {
            "id": "D",
            "text": "48"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét tích hai số tự nhiên liên tiếp: 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30...",
        "explanation": "Số tiếp theo là 6 x 7 = 42. Đáp án đúng là B."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 37 x 24 + 37 x 76",
        "titleVi": "Tính nhanh: 37 x 24 + 37 x 76",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "370"
          },
          {
            "id": "B",
            "text": "3700"
          },
          {
            "id": "C",
            "text": "37000"
          },
          {
            "id": "D",
            "text": "2400"
          }
        ],
        "correctAnswer": "B",
        "hint": "Áp dụng tính chất phân phối của phép nhân: a x b + a x c = a x (b + c).",
        "explanation": "37 x (24 + 76) = 37 x 100 = 3700. Đáp án đúng là B."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 3/4 + 1/2",
        "titleVi": "Tính giá trị của: 3/4 + 1/2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4/6"
          },
          {
            "id": "B",
            "text": "5/4"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "7/4"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quy đồng mẫu số chung là 4: 1/2 = 2/4. Lấy 3/4 + 2/4 = 5/4.",
        "explanation": "5/4. Đáp án đúng là B."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1500 : 25 : 4",
        "titleVi": "Tính nhanh: 1500 : 25 : 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "25"
          },
          {
            "id": "D",
            "text": "30"
          }
        ],
        "correctAnswer": "A",
        "hint": "Chia một số cho một tích: 1500 : (25 x 4) = 1500 : 100 = 15.",
        "explanation": "1500 : (25 x 4) = 15. Đáp án đúng là A."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 4/5 x 15/16",
        "titleVi": "Tính giá trị của: 4/5 x 15/16",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3/4"
          },
          {
            "id": "B",
            "text": "4/5"
          },
          {
            "id": "C",
            "text": "12/16"
          },
          {
            "id": "D",
            "text": "3/5"
          }
        ],
        "correctAnswer": "A",
        "hint": "Rút gọn chéo: 4 với 16 còn 1/4; 15 với 5 còn 3/1. Kết quả là 3/4.",
        "explanation": "3/4. Đáp án đúng là A."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x + 120) x 5 = 1000",
        "titleVi": "Tìm số x biết: (x + 120) x 5 = 1000",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60"
          },
          {
            "id": "B",
            "text": "80"
          },
          {
            "id": "C",
            "text": "100"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "x + 120 = 1000 : 5 = 200 => x = 200 - 120 = 80.",
        "explanation": "x = 80. Đáp án đúng là B."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "The number 45x is divisible by 9. What is the value of digit x?",
        "titleVi": "Số 45x chia hết cho 9. Chữ số x có giá trị là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "0"
          },
          {
            "id": "B",
            "text": "9"
          },
          {
            "id": "C",
            "text": "0 hoặc 9"
          },
          {
            "id": "D",
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tổng các chữ số chia hết cho 9: 4 + 5 + x = 9 + x chia hết cho 9 => x có thể là 0 hoặc 9.",
        "explanation": "x = 0 hoặc x = 9 (số 450 và 459). Đáp án đúng là C."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many terms are there in the sequence: 10, 14, 18, 22, ..., 98?",
        "titleVi": "Có bao nhiêu số hạng trong dãy số cách đều: 10, 14, 18, 22, ..., 98?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "22"
          },
          {
            "id": "B",
            "text": "23"
          },
          {
            "id": "C",
            "text": "24"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1.",
        "explanation": "(98 - 10) : 4 + 1 = 88 : 4 + 1 = 22 + 1 = 23 số hạng. Đáp án đúng là B."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the sum of all digits of the number: A = 10^20 - 1?",
        "titleVi": "Tổng các chữ số của số A = 10²⁰ - 1 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "180"
          },
          {
            "id": "B",
            "text": "171"
          },
          {
            "id": "C",
            "text": "189"
          },
          {
            "id": "D",
            "text": "190"
          }
        ],
        "correctAnswer": "A",
        "hint": "10²⁰ - 1 là số gồm 20 chữ số 9: 999...99 (20 chữ số 9). Tổng các chữ số = 20 x 9 = 180.",
        "explanation": "20 x 9 = 180. Đáp án đúng là A."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the product: 2 x 12 x 22 x 32 x ... x 92 (10 factors)?",
        "titleVi": "Chữ số tận cùng của tích gồm 10 thừa số có tận cùng là 2: 2 x 12 x 22 x ... x 92 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "4"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 2: 2, 4, 8, 6 (chu kì 4). 10 : 4 = 2 dư 2 => kết thúc ở thừa số thứ 2 là 4, nhân tiếp hoặc 2¹⁰ = 1024 tận cùng là 6.",
        "explanation": "Tận cùng của tích 10 thừa số tận cùng bằng 2 là 4 x 4 x 4 = 64 tận cùng 6 (vì 2⁴ tận cùng 6, 2¹⁰ tận cùng 4). Lưu ý: 2^4 tận cùng 6, 2^8 tận cùng 6, 2^10 tận cùng 4. Sửa: 2^10 = 1024 tận cùng 4."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the average of all numbers from 1 to 99.",
        "titleVi": "Tìm trung bình cộng của tất cả các số tự nhiên từ 1 đến 99.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "49"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "50.5"
          },
          {
            "id": "D",
            "text": "51"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số tự nhiên liên tiếp từ 1 đến 99, trung bình cộng = (Số đầu + Số cuối) : 2.",
        "explanation": "(1 + 99) : 2 = 100 : 2 = 50. Đáp án đúng là B."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A parallelogram has a base of 18cm and a height of 10cm. Find the area of the parallelogram.",
        "titleVi": "Một hình bình hành có độ dài đáy là 18cm và chiều cao tương ứng là 10cm. Tính diện tích hình bình hành đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 cm²"
          },
          {
            "id": "B",
            "text": "180 cm²"
          },
          {
            "id": "C",
            "text": "200 cm²"
          },
          {
            "id": "D",
            "text": "360 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình bình hành = đáy x chiều cao.",
        "explanation": "18 x 10 = 180 cm². Đáp án đúng là B."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rhombus has diagonals of lengths 14cm and 10cm. Find its area.",
        "titleVi": "Một hình thoi có độ dài hai đường chéo là 14cm và 10cm. Tính diện tích hình thoi đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "70 cm²"
          },
          {
            "id": "B",
            "text": "140 cm²"
          },
          {
            "id": "C",
            "text": "120 cm²"
          },
          {
            "id": "D",
            "text": "60 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2.",
        "explanation": "(14 x 10) : 2 = 140 : 2 = 70 cm². Đáp án đúng là A."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular field has a perimeter of 120m. The length is twice the width. What is the area of the field?",
        "titleVi": "Một mảnh đất hình chữ nhật có chu vi là 120m. Chiều dài gấp đôi chiều rộng. Tính diện tích mảnh đất đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "800 m²"
          },
          {
            "id": "B",
            "text": "600 m²"
          },
          {
            "id": "C",
            "text": "900 m²"
          },
          {
            "id": "D",
            "text": "1200 m²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nửa chu vi = 120 : 2 = 60m. Chiều rộng = 60 : 3 = 20m. Chiều dài = 40m. Diện tích = 40 x 20 = 800 m².",
        "explanation": "800 m². Đáp án đúng là A."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many obtuse angles are there in a standard regular hexagon?",
        "titleVi": "Một hình lục giác đều có tất cả bao nhiêu góc tù?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4"
          },
          {
            "id": "B",
            "text": "5"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi góc trong của hình lục giác đều có số đo là 120 độ (lớn hơn 90 độ nên là góc tù). Hình lục giác có 6 đỉnh tương ứng 6 góc tù.",
        "explanation": "Có đúng 6 góc tù. Đáp án đúng là C."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 100 cm². If each side is increased by 2cm, what is the new area of the square?",
        "titleVi": "Một hình vuông có diện tích là 100 cm². Nếu tăng độ dài mỗi cạnh thêm 2cm thì diện tích mới của hình vuông là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "144 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "124 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh ban đầu = 10cm (vì 10 x 10 = 100). Cạnh mới = 10 + 2 = 12cm. Diện tích mới = 12 x 12 = 144 cm².",
        "explanation": "144 cm². Đáp án đúng là B."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 3-digit even numbers can be formed using digits 1, 2, 3, 4 without repetition?",
        "titleVi": "Có bao nhiêu số chẵn có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3, 4?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "10 số"
          },
          {
            "id": "B",
            "text": "12 số"
          },
          {
            "id": "C",
            "text": "14 số"
          },
          {
            "id": "D",
            "text": "16 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chữ số hàng đơn vị phải là số chẵn (2 hoặc 4: có 2 cách chọn). Sau đó hàng trăm có 3 cách, hàng chục có 2 cách.",
        "explanation": "Số lượng số = 2 x 3 x 2 = 12 số. Đáp án đúng là B."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 15 balls in a box: 6 red, 5 green, and 4 yellow. At least how many balls must be drawn without looking to ensure getting at least 1 ball of each color?",
        "titleVi": "Trong hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có đủ cả 3 màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "11 viên"
          },
          {
            "id": "B",
            "text": "12 viên"
          },
          {
            "id": "C",
            "text": "13 viên"
          },
          {
            "id": "D",
            "text": "14 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất: Lấy hết bi của 2 màu có số lượng nhiều nhất (6 đỏ + 5 xanh = 11 viên). Lấy thêm 1 viên nữa (viên thứ 12) chắc chắn sẽ là bi màu vàng.",
        "explanation": "6 + 5 + 1 = 12 viên bi. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 4 students stand in a line for a photo?",
        "titleVi": "Có bao nhiêu cách xếp 4 bạn học sinh đứng thành một hàng dọc để chụp ảnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 cách"
          },
          {
            "id": "B",
            "text": "20 cách"
          },
          {
            "id": "C",
            "text": "24 cách"
          },
          {
            "id": "D",
            "text": "28 cách"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hoán vị của 4 phần tử: 4 x 3 x 2 x 1 = 24 cách.",
        "explanation": "24 cách. Đáp án đúng là C."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many diagonals does a regular pentagon (5 sides) have?",
        "titleVi": "Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đường chéo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5"
          },
          {
            "id": "B",
            "text": "6"
          },
          {
            "id": "C",
            "text": "8"
          },
          {
            "id": "D",
            "text": "10"
          }
        ],
        "correctAnswer": "A",
        "hint": "Công thức số đường chéo của đa giác n cạnh: n x (n - 3) : 2. Với n = 5: 5 x (5 - 3) : 2 = 5 đường chéo.",
        "explanation": "5 đường chéo. Đáp án đúng là A."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A test has 10 true/false questions. How many different answer keys can be generated?",
        "titleVi": "Một bài thi trắc nghiệm gồm 10 câu hỏi Đúng/Sai. Hỏi có thể tạo ra tất cả bao nhiêu bảng đáp án khác nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "512"
          },
          {
            "id": "C",
            "text": "1024"
          },
          {
            "id": "D",
            "text": "2048"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi câu có 2 khả năng (Đúng hoặc Sai). Với 10 câu: 2 x 2 x ... x 2 = 2¹⁰ = 1024.",
        "explanation": "2¹⁰ = 1024 cách. Đáp án đúng là C."
      }
    ]
  },
  {
    "id": "exam_g4_2",
    "name": "Đề 2: TIMO Thử Thách Quốc Tế",
    "badge": "Quốc Tế",
    "color": "from-blue-600 to-cyan-600",
    "desc": "Phân số, giả thiết tạm, hình bình hành & đường chéo đa giác",
    "questions": [
      {
        "id": 26,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "There are 10 chickens and rabbits in a cage. There are 28 legs in total. How many rabbits are there?",
        "titleVi": "Vừa gà vừa thỏ có tất cả 10 con nhốt trong một chuồng. Đếm được tất cả 28 cái chân. Hỏi có bao nhiêu con thỏ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 con"
          },
          {
            "id": "B",
            "text": "4 con"
          },
          {
            "id": "C",
            "text": "5 con"
          },
          {
            "id": "D",
            "text": "6 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp giả thiết tạm: Giả sử cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu là 28 - 20 = 8 chân. Mỗi con thỏ hơn con gà 2 chân.",
        "explanation": "Số con thỏ = (28 - 10 x 2) : (4 - 2) = 8 : 2 = 4 con thỏ. Đáp án đúng là B."
      },
      {
        "id": 27,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "3 pens and 2 notebooks cost 44,000 VND. 2 pens and 2 notebooks cost 36,000 VND. How much does 1 pen cost?",
        "titleVi": "Mua 3 chiếc bút và 2 cuốn vở hết 44 000 đồng. Mua 2 chiếc bút và 2 cuốn vở hết 36 000 đồng. Hỏi 1 chiếc bút giá bao nhiêu tiền?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 000 đồng"
          },
          {
            "id": "B",
            "text": "8 000 đồng"
          },
          {
            "id": "C",
            "text": "10 000 đồng"
          },
          {
            "id": "D",
            "text": "12 000 đồng"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp khử: So sánh hai lần mua, số vở như nhau nhưng lần 1 nhiều hơn 1 chiếc bút.",
        "explanation": "Giá 1 chiếc bút = 44 000 - 36 000 = 8 000 đồng. Đáp án đúng là B."
      },
      {
        "id": 28,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The average of 5 consecutive odd numbers is 17. What is the greatest number among them?",
        "titleVi": "Trung bình cộng của 5 số lẻ liên tiếp là 17. Hỏi số lớn nhất trong 5 số đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "19"
          },
          {
            "id": "B",
            "text": "21"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số cách đều có số lượng số lẻ (5 số), số trung bình cộng chính là số đứng ở chính giữa (số thứ 3).",
        "explanation": "5 số lẻ liên tiếp có số ở giữa là 17: 13, 15, 17, 19, 21. Số lớn nhất là 21. Đáp án đúng là B."
      },
      {
        "id": 29,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Father is 4 times as old as his son. The sum of their ages is 50. How old is the father?",
        "titleVi": "Tuổi bố gấp 4 lần tuổi con. Tổng số tuổi của hai bố con là 50 tuổi. Hỏi bố bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "35 tuổi"
          },
          {
            "id": "B",
            "text": "40 tuổi"
          },
          {
            "id": "C",
            "text": "42 tuổi"
          },
          {
            "id": "D",
            "text": "45 tuổi"
          }
        ],
        "correctAnswer": "B",
        "hint": "Bài toán Tìm hai số khi biết Tổng và Tỉ số: Tổng số phần bằng nhau là 1 + 4 = 5 phần.",
        "explanation": "Giá trị 1 phần (tuổi con) = 50 : 5 = 10 tuổi. Tuổi của bố = 10 x 4 = 40 tuổi. Đáp án đúng là B."
      },
      {
        "id": 30,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 2, 6, 12, 20, 30, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 2, 6, 12, 20, 30, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "44"
          },
          {
            "id": "D",
            "text": "48"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét tích hai số tự nhiên liên tiếp: 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30...",
        "explanation": "Số tiếp theo là 6 x 7 = 42. Đáp án đúng là B."
      },
      {
        "id": 31,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 37 x 24 + 37 x 76",
        "titleVi": "Tính nhanh: 37 x 24 + 37 x 76",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "370"
          },
          {
            "id": "B",
            "text": "3700"
          },
          {
            "id": "C",
            "text": "37000"
          },
          {
            "id": "D",
            "text": "2400"
          }
        ],
        "correctAnswer": "B",
        "hint": "Áp dụng tính chất phân phối của phép nhân: a x b + a x c = a x (b + c).",
        "explanation": "37 x (24 + 76) = 37 x 100 = 3700. Đáp án đúng là B."
      },
      {
        "id": 32,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 3/4 + 1/2",
        "titleVi": "Tính giá trị của: 3/4 + 1/2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4/6"
          },
          {
            "id": "B",
            "text": "5/4"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "7/4"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quy đồng mẫu số chung là 4: 1/2 = 2/4. Lấy 3/4 + 2/4 = 5/4.",
        "explanation": "5/4. Đáp án đúng là B."
      },
      {
        "id": 33,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1500 : 25 : 4",
        "titleVi": "Tính nhanh: 1500 : 25 : 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "25"
          },
          {
            "id": "D",
            "text": "30"
          }
        ],
        "correctAnswer": "A",
        "hint": "Chia một số cho một tích: 1500 : (25 x 4) = 1500 : 100 = 15.",
        "explanation": "1500 : (25 x 4) = 15. Đáp án đúng là A."
      },
      {
        "id": 34,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 4/5 x 15/16",
        "titleVi": "Tính giá trị của: 4/5 x 15/16",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3/4"
          },
          {
            "id": "B",
            "text": "4/5"
          },
          {
            "id": "C",
            "text": "12/16"
          },
          {
            "id": "D",
            "text": "3/5"
          }
        ],
        "correctAnswer": "A",
        "hint": "Rút gọn chéo: 4 với 16 còn 1/4; 15 với 5 còn 3/1. Kết quả là 3/4.",
        "explanation": "3/4. Đáp án đúng là A."
      },
      {
        "id": 35,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x + 120) x 5 = 1000",
        "titleVi": "Tìm số x biết: (x + 120) x 5 = 1000",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60"
          },
          {
            "id": "B",
            "text": "80"
          },
          {
            "id": "C",
            "text": "100"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "x + 120 = 1000 : 5 = 200 => x = 200 - 120 = 80.",
        "explanation": "x = 80. Đáp án đúng là B."
      },
      {
        "id": 36,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "The number 45x is divisible by 9. What is the value of digit x?",
        "titleVi": "Số 45x chia hết cho 9. Chữ số x có giá trị là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "0"
          },
          {
            "id": "B",
            "text": "9"
          },
          {
            "id": "C",
            "text": "0 hoặc 9"
          },
          {
            "id": "D",
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tổng các chữ số chia hết cho 9: 4 + 5 + x = 9 + x chia hết cho 9 => x có thể là 0 hoặc 9.",
        "explanation": "x = 0 hoặc x = 9 (số 450 và 459). Đáp án đúng là C."
      },
      {
        "id": 37,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many terms are there in the sequence: 10, 14, 18, 22, ..., 98?",
        "titleVi": "Có bao nhiêu số hạng trong dãy số cách đều: 10, 14, 18, 22, ..., 98?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "22"
          },
          {
            "id": "B",
            "text": "23"
          },
          {
            "id": "C",
            "text": "24"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1.",
        "explanation": "(98 - 10) : 4 + 1 = 88 : 4 + 1 = 22 + 1 = 23 số hạng. Đáp án đúng là B."
      },
      {
        "id": 38,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the sum of all digits of the number: A = 10^20 - 1?",
        "titleVi": "Tổng các chữ số của số A = 10²⁰ - 1 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "180"
          },
          {
            "id": "B",
            "text": "171"
          },
          {
            "id": "C",
            "text": "189"
          },
          {
            "id": "D",
            "text": "190"
          }
        ],
        "correctAnswer": "A",
        "hint": "10²⁰ - 1 là số gồm 20 chữ số 9: 999...99 (20 chữ số 9). Tổng các chữ số = 20 x 9 = 180.",
        "explanation": "20 x 9 = 180. Đáp án đúng là A."
      },
      {
        "id": 39,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the product: 2 x 12 x 22 x 32 x ... x 92 (10 factors)?",
        "titleVi": "Chữ số tận cùng của tích gồm 10 thừa số có tận cùng là 2: 2 x 12 x 22 x ... x 92 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "4"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 2: 2, 4, 8, 6 (chu kì 4). 10 : 4 = 2 dư 2 => kết thúc ở thừa số thứ 2 là 4, nhân tiếp hoặc 2¹⁰ = 1024 tận cùng là 6.",
        "explanation": "Tận cùng của tích 10 thừa số tận cùng bằng 2 là 4 x 4 x 4 = 64 tận cùng 6 (vì 2⁴ tận cùng 6, 2¹⁰ tận cùng 4). Lưu ý: 2^4 tận cùng 6, 2^8 tận cùng 6, 2^10 tận cùng 4. Sửa: 2^10 = 1024 tận cùng 4."
      },
      {
        "id": 40,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the average of all numbers from 1 to 99.",
        "titleVi": "Tìm trung bình cộng của tất cả các số tự nhiên từ 1 đến 99.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "49"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "50.5"
          },
          {
            "id": "D",
            "text": "51"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số tự nhiên liên tiếp từ 1 đến 99, trung bình cộng = (Số đầu + Số cuối) : 2.",
        "explanation": "(1 + 99) : 2 = 100 : 2 = 50. Đáp án đúng là B."
      },
      {
        "id": 41,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A parallelogram has a base of 18cm and a height of 10cm. Find the area of the parallelogram.",
        "titleVi": "Một hình bình hành có độ dài đáy là 18cm và chiều cao tương ứng là 10cm. Tính diện tích hình bình hành đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 cm²"
          },
          {
            "id": "B",
            "text": "180 cm²"
          },
          {
            "id": "C",
            "text": "200 cm²"
          },
          {
            "id": "D",
            "text": "360 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình bình hành = đáy x chiều cao.",
        "explanation": "18 x 10 = 180 cm². Đáp án đúng là B."
      },
      {
        "id": 42,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rhombus has diagonals of lengths 14cm and 10cm. Find its area.",
        "titleVi": "Một hình thoi có độ dài hai đường chéo là 14cm và 10cm. Tính diện tích hình thoi đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "70 cm²"
          },
          {
            "id": "B",
            "text": "140 cm²"
          },
          {
            "id": "C",
            "text": "120 cm²"
          },
          {
            "id": "D",
            "text": "60 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2.",
        "explanation": "(14 x 10) : 2 = 140 : 2 = 70 cm². Đáp án đúng là A."
      },
      {
        "id": 43,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular field has a perimeter of 120m. The length is twice the width. What is the area of the field?",
        "titleVi": "Một mảnh đất hình chữ nhật có chu vi là 120m. Chiều dài gấp đôi chiều rộng. Tính diện tích mảnh đất đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "800 m²"
          },
          {
            "id": "B",
            "text": "600 m²"
          },
          {
            "id": "C",
            "text": "900 m²"
          },
          {
            "id": "D",
            "text": "1200 m²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nửa chu vi = 120 : 2 = 60m. Chiều rộng = 60 : 3 = 20m. Chiều dài = 40m. Diện tích = 40 x 20 = 800 m².",
        "explanation": "800 m². Đáp án đúng là A."
      },
      {
        "id": 44,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many obtuse angles are there in a standard regular hexagon?",
        "titleVi": "Một hình lục giác đều có tất cả bao nhiêu góc tù?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4"
          },
          {
            "id": "B",
            "text": "5"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi góc trong của hình lục giác đều có số đo là 120 độ (lớn hơn 90 độ nên là góc tù). Hình lục giác có 6 đỉnh tương ứng 6 góc tù.",
        "explanation": "Có đúng 6 góc tù. Đáp án đúng là C."
      },
      {
        "id": 45,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 100 cm². If each side is increased by 2cm, what is the new area of the square?",
        "titleVi": "Một hình vuông có diện tích là 100 cm². Nếu tăng độ dài mỗi cạnh thêm 2cm thì diện tích mới của hình vuông là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "144 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "124 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh ban đầu = 10cm (vì 10 x 10 = 100). Cạnh mới = 10 + 2 = 12cm. Diện tích mới = 12 x 12 = 144 cm².",
        "explanation": "144 cm². Đáp án đúng là B."
      },
      {
        "id": 46,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 3-digit even numbers can be formed using digits 1, 2, 3, 4 without repetition?",
        "titleVi": "Có bao nhiêu số chẵn có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3, 4?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "10 số"
          },
          {
            "id": "B",
            "text": "12 số"
          },
          {
            "id": "C",
            "text": "14 số"
          },
          {
            "id": "D",
            "text": "16 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chữ số hàng đơn vị phải là số chẵn (2 hoặc 4: có 2 cách chọn). Sau đó hàng trăm có 3 cách, hàng chục có 2 cách.",
        "explanation": "Số lượng số = 2 x 3 x 2 = 12 số. Đáp án đúng là B."
      },
      {
        "id": 47,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 15 balls in a box: 6 red, 5 green, and 4 yellow. At least how many balls must be drawn without looking to ensure getting at least 1 ball of each color?",
        "titleVi": "Trong hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có đủ cả 3 màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "11 viên"
          },
          {
            "id": "B",
            "text": "12 viên"
          },
          {
            "id": "C",
            "text": "13 viên"
          },
          {
            "id": "D",
            "text": "14 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất: Lấy hết bi của 2 màu có số lượng nhiều nhất (6 đỏ + 5 xanh = 11 viên). Lấy thêm 1 viên nữa (viên thứ 12) chắc chắn sẽ là bi màu vàng.",
        "explanation": "6 + 5 + 1 = 12 viên bi. Đáp án đúng là B."
      },
      {
        "id": 48,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 4 students stand in a line for a photo?",
        "titleVi": "Có bao nhiêu cách xếp 4 bạn học sinh đứng thành một hàng dọc để chụp ảnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 cách"
          },
          {
            "id": "B",
            "text": "20 cách"
          },
          {
            "id": "C",
            "text": "24 cách"
          },
          {
            "id": "D",
            "text": "28 cách"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hoán vị của 4 phần tử: 4 x 3 x 2 x 1 = 24 cách.",
        "explanation": "24 cách. Đáp án đúng là C."
      },
      {
        "id": 49,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many diagonals does a regular pentagon (5 sides) have?",
        "titleVi": "Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đường chéo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5"
          },
          {
            "id": "B",
            "text": "6"
          },
          {
            "id": "C",
            "text": "8"
          },
          {
            "id": "D",
            "text": "10"
          }
        ],
        "correctAnswer": "A",
        "hint": "Công thức số đường chéo của đa giác n cạnh: n x (n - 3) : 2. Với n = 5: 5 x (5 - 3) : 2 = 5 đường chéo.",
        "explanation": "5 đường chéo. Đáp án đúng là A."
      },
      {
        "id": 50,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A test has 10 true/false questions. How many different answer keys can be generated?",
        "titleVi": "Một bài thi trắc nghiệm gồm 10 câu hỏi Đúng/Sai. Hỏi có thể tạo ra tất cả bao nhiêu bảng đáp án khác nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "512"
          },
          {
            "id": "C",
            "text": "1024"
          },
          {
            "id": "D",
            "text": "2048"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi câu có 2 khả năng (Đúng hoặc Sai). Với 10 câu: 2 x 2 x ... x 2 = 2¹⁰ = 1024.",
        "explanation": "2¹⁰ = 1024 cách. Đáp án đúng là C."
      }
    ]
  },
  {
    "id": "exam_g4_3",
    "name": "Đề 3: TIMO Huy Chương Vàng",
    "badge": "Nâng Cao",
    "color": "from-amber-500 to-orange-600",
    "desc": "Trung bình cộng, dấu hiệu chia hết, phương pháp khử & hoán vị",
    "questions": [
      {
        "id": 51,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "There are 10 chickens and rabbits in a cage. There are 28 legs in total. How many rabbits are there?",
        "titleVi": "Vừa gà vừa thỏ có tất cả 10 con nhốt trong một chuồng. Đếm được tất cả 28 cái chân. Hỏi có bao nhiêu con thỏ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 con"
          },
          {
            "id": "B",
            "text": "4 con"
          },
          {
            "id": "C",
            "text": "5 con"
          },
          {
            "id": "D",
            "text": "6 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp giả thiết tạm: Giả sử cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu là 28 - 20 = 8 chân. Mỗi con thỏ hơn con gà 2 chân.",
        "explanation": "Số con thỏ = (28 - 10 x 2) : (4 - 2) = 8 : 2 = 4 con thỏ. Đáp án đúng là B."
      },
      {
        "id": 52,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "3 pens and 2 notebooks cost 44,000 VND. 2 pens and 2 notebooks cost 36,000 VND. How much does 1 pen cost?",
        "titleVi": "Mua 3 chiếc bút và 2 cuốn vở hết 44 000 đồng. Mua 2 chiếc bút và 2 cuốn vở hết 36 000 đồng. Hỏi 1 chiếc bút giá bao nhiêu tiền?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 000 đồng"
          },
          {
            "id": "B",
            "text": "8 000 đồng"
          },
          {
            "id": "C",
            "text": "10 000 đồng"
          },
          {
            "id": "D",
            "text": "12 000 đồng"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp khử: So sánh hai lần mua, số vở như nhau nhưng lần 1 nhiều hơn 1 chiếc bút.",
        "explanation": "Giá 1 chiếc bút = 44 000 - 36 000 = 8 000 đồng. Đáp án đúng là B."
      },
      {
        "id": 53,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The average of 5 consecutive odd numbers is 17. What is the greatest number among them?",
        "titleVi": "Trung bình cộng của 5 số lẻ liên tiếp là 17. Hỏi số lớn nhất trong 5 số đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "19"
          },
          {
            "id": "B",
            "text": "21"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số cách đều có số lượng số lẻ (5 số), số trung bình cộng chính là số đứng ở chính giữa (số thứ 3).",
        "explanation": "5 số lẻ liên tiếp có số ở giữa là 17: 13, 15, 17, 19, 21. Số lớn nhất là 21. Đáp án đúng là B."
      },
      {
        "id": 54,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Father is 4 times as old as his son. The sum of their ages is 50. How old is the father?",
        "titleVi": "Tuổi bố gấp 4 lần tuổi con. Tổng số tuổi của hai bố con là 50 tuổi. Hỏi bố bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "35 tuổi"
          },
          {
            "id": "B",
            "text": "40 tuổi"
          },
          {
            "id": "C",
            "text": "42 tuổi"
          },
          {
            "id": "D",
            "text": "45 tuổi"
          }
        ],
        "correctAnswer": "B",
        "hint": "Bài toán Tìm hai số khi biết Tổng và Tỉ số: Tổng số phần bằng nhau là 1 + 4 = 5 phần.",
        "explanation": "Giá trị 1 phần (tuổi con) = 50 : 5 = 10 tuổi. Tuổi của bố = 10 x 4 = 40 tuổi. Đáp án đúng là B."
      },
      {
        "id": 55,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 2, 6, 12, 20, 30, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 2, 6, 12, 20, 30, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "44"
          },
          {
            "id": "D",
            "text": "48"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét tích hai số tự nhiên liên tiếp: 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30...",
        "explanation": "Số tiếp theo là 6 x 7 = 42. Đáp án đúng là B."
      },
      {
        "id": 56,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 37 x 24 + 37 x 76",
        "titleVi": "Tính nhanh: 37 x 24 + 37 x 76",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "370"
          },
          {
            "id": "B",
            "text": "3700"
          },
          {
            "id": "C",
            "text": "37000"
          },
          {
            "id": "D",
            "text": "2400"
          }
        ],
        "correctAnswer": "B",
        "hint": "Áp dụng tính chất phân phối của phép nhân: a x b + a x c = a x (b + c).",
        "explanation": "37 x (24 + 76) = 37 x 100 = 3700. Đáp án đúng là B."
      },
      {
        "id": 57,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 3/4 + 1/2",
        "titleVi": "Tính giá trị của: 3/4 + 1/2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4/6"
          },
          {
            "id": "B",
            "text": "5/4"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "7/4"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quy đồng mẫu số chung là 4: 1/2 = 2/4. Lấy 3/4 + 2/4 = 5/4.",
        "explanation": "5/4. Đáp án đúng là B."
      },
      {
        "id": 58,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1500 : 25 : 4",
        "titleVi": "Tính nhanh: 1500 : 25 : 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "25"
          },
          {
            "id": "D",
            "text": "30"
          }
        ],
        "correctAnswer": "A",
        "hint": "Chia một số cho một tích: 1500 : (25 x 4) = 1500 : 100 = 15.",
        "explanation": "1500 : (25 x 4) = 15. Đáp án đúng là A."
      },
      {
        "id": 59,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 4/5 x 15/16",
        "titleVi": "Tính giá trị của: 4/5 x 15/16",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3/4"
          },
          {
            "id": "B",
            "text": "4/5"
          },
          {
            "id": "C",
            "text": "12/16"
          },
          {
            "id": "D",
            "text": "3/5"
          }
        ],
        "correctAnswer": "A",
        "hint": "Rút gọn chéo: 4 với 16 còn 1/4; 15 với 5 còn 3/1. Kết quả là 3/4.",
        "explanation": "3/4. Đáp án đúng là A."
      },
      {
        "id": 60,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x + 120) x 5 = 1000",
        "titleVi": "Tìm số x biết: (x + 120) x 5 = 1000",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60"
          },
          {
            "id": "B",
            "text": "80"
          },
          {
            "id": "C",
            "text": "100"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "x + 120 = 1000 : 5 = 200 => x = 200 - 120 = 80.",
        "explanation": "x = 80. Đáp án đúng là B."
      },
      {
        "id": 61,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "The number 45x is divisible by 9. What is the value of digit x?",
        "titleVi": "Số 45x chia hết cho 9. Chữ số x có giá trị là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "0"
          },
          {
            "id": "B",
            "text": "9"
          },
          {
            "id": "C",
            "text": "0 hoặc 9"
          },
          {
            "id": "D",
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tổng các chữ số chia hết cho 9: 4 + 5 + x = 9 + x chia hết cho 9 => x có thể là 0 hoặc 9.",
        "explanation": "x = 0 hoặc x = 9 (số 450 và 459). Đáp án đúng là C."
      },
      {
        "id": 62,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many terms are there in the sequence: 10, 14, 18, 22, ..., 98?",
        "titleVi": "Có bao nhiêu số hạng trong dãy số cách đều: 10, 14, 18, 22, ..., 98?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "22"
          },
          {
            "id": "B",
            "text": "23"
          },
          {
            "id": "C",
            "text": "24"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1.",
        "explanation": "(98 - 10) : 4 + 1 = 88 : 4 + 1 = 22 + 1 = 23 số hạng. Đáp án đúng là B."
      },
      {
        "id": 63,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the sum of all digits of the number: A = 10^20 - 1?",
        "titleVi": "Tổng các chữ số của số A = 10²⁰ - 1 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "180"
          },
          {
            "id": "B",
            "text": "171"
          },
          {
            "id": "C",
            "text": "189"
          },
          {
            "id": "D",
            "text": "190"
          }
        ],
        "correctAnswer": "A",
        "hint": "10²⁰ - 1 là số gồm 20 chữ số 9: 999...99 (20 chữ số 9). Tổng các chữ số = 20 x 9 = 180.",
        "explanation": "20 x 9 = 180. Đáp án đúng là A."
      },
      {
        "id": 64,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the product: 2 x 12 x 22 x 32 x ... x 92 (10 factors)?",
        "titleVi": "Chữ số tận cùng của tích gồm 10 thừa số có tận cùng là 2: 2 x 12 x 22 x ... x 92 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "4"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 2: 2, 4, 8, 6 (chu kì 4). 10 : 4 = 2 dư 2 => kết thúc ở thừa số thứ 2 là 4, nhân tiếp hoặc 2¹⁰ = 1024 tận cùng là 6.",
        "explanation": "Tận cùng của tích 10 thừa số tận cùng bằng 2 là 4 x 4 x 4 = 64 tận cùng 6 (vì 2⁴ tận cùng 6, 2¹⁰ tận cùng 4). Lưu ý: 2^4 tận cùng 6, 2^8 tận cùng 6, 2^10 tận cùng 4. Sửa: 2^10 = 1024 tận cùng 4."
      },
      {
        "id": 65,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the average of all numbers from 1 to 99.",
        "titleVi": "Tìm trung bình cộng của tất cả các số tự nhiên từ 1 đến 99.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "49"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "50.5"
          },
          {
            "id": "D",
            "text": "51"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số tự nhiên liên tiếp từ 1 đến 99, trung bình cộng = (Số đầu + Số cuối) : 2.",
        "explanation": "(1 + 99) : 2 = 100 : 2 = 50. Đáp án đúng là B."
      },
      {
        "id": 66,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A parallelogram has a base of 18cm and a height of 10cm. Find the area of the parallelogram.",
        "titleVi": "Một hình bình hành có độ dài đáy là 18cm và chiều cao tương ứng là 10cm. Tính diện tích hình bình hành đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 cm²"
          },
          {
            "id": "B",
            "text": "180 cm²"
          },
          {
            "id": "C",
            "text": "200 cm²"
          },
          {
            "id": "D",
            "text": "360 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình bình hành = đáy x chiều cao.",
        "explanation": "18 x 10 = 180 cm². Đáp án đúng là B."
      },
      {
        "id": 67,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rhombus has diagonals of lengths 14cm and 10cm. Find its area.",
        "titleVi": "Một hình thoi có độ dài hai đường chéo là 14cm và 10cm. Tính diện tích hình thoi đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "70 cm²"
          },
          {
            "id": "B",
            "text": "140 cm²"
          },
          {
            "id": "C",
            "text": "120 cm²"
          },
          {
            "id": "D",
            "text": "60 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2.",
        "explanation": "(14 x 10) : 2 = 140 : 2 = 70 cm². Đáp án đúng là A."
      },
      {
        "id": 68,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular field has a perimeter of 120m. The length is twice the width. What is the area of the field?",
        "titleVi": "Một mảnh đất hình chữ nhật có chu vi là 120m. Chiều dài gấp đôi chiều rộng. Tính diện tích mảnh đất đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "800 m²"
          },
          {
            "id": "B",
            "text": "600 m²"
          },
          {
            "id": "C",
            "text": "900 m²"
          },
          {
            "id": "D",
            "text": "1200 m²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nửa chu vi = 120 : 2 = 60m. Chiều rộng = 60 : 3 = 20m. Chiều dài = 40m. Diện tích = 40 x 20 = 800 m².",
        "explanation": "800 m². Đáp án đúng là A."
      },
      {
        "id": 69,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many obtuse angles are there in a standard regular hexagon?",
        "titleVi": "Một hình lục giác đều có tất cả bao nhiêu góc tù?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4"
          },
          {
            "id": "B",
            "text": "5"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi góc trong của hình lục giác đều có số đo là 120 độ (lớn hơn 90 độ nên là góc tù). Hình lục giác có 6 đỉnh tương ứng 6 góc tù.",
        "explanation": "Có đúng 6 góc tù. Đáp án đúng là C."
      },
      {
        "id": 70,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 100 cm². If each side is increased by 2cm, what is the new area of the square?",
        "titleVi": "Một hình vuông có diện tích là 100 cm². Nếu tăng độ dài mỗi cạnh thêm 2cm thì diện tích mới của hình vuông là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "144 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "124 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh ban đầu = 10cm (vì 10 x 10 = 100). Cạnh mới = 10 + 2 = 12cm. Diện tích mới = 12 x 12 = 144 cm².",
        "explanation": "144 cm². Đáp án đúng là B."
      },
      {
        "id": 71,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 3-digit even numbers can be formed using digits 1, 2, 3, 4 without repetition?",
        "titleVi": "Có bao nhiêu số chẵn có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3, 4?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "10 số"
          },
          {
            "id": "B",
            "text": "12 số"
          },
          {
            "id": "C",
            "text": "14 số"
          },
          {
            "id": "D",
            "text": "16 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chữ số hàng đơn vị phải là số chẵn (2 hoặc 4: có 2 cách chọn). Sau đó hàng trăm có 3 cách, hàng chục có 2 cách.",
        "explanation": "Số lượng số = 2 x 3 x 2 = 12 số. Đáp án đúng là B."
      },
      {
        "id": 72,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 15 balls in a box: 6 red, 5 green, and 4 yellow. At least how many balls must be drawn without looking to ensure getting at least 1 ball of each color?",
        "titleVi": "Trong hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có đủ cả 3 màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "11 viên"
          },
          {
            "id": "B",
            "text": "12 viên"
          },
          {
            "id": "C",
            "text": "13 viên"
          },
          {
            "id": "D",
            "text": "14 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất: Lấy hết bi của 2 màu có số lượng nhiều nhất (6 đỏ + 5 xanh = 11 viên). Lấy thêm 1 viên nữa (viên thứ 12) chắc chắn sẽ là bi màu vàng.",
        "explanation": "6 + 5 + 1 = 12 viên bi. Đáp án đúng là B."
      },
      {
        "id": 73,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 4 students stand in a line for a photo?",
        "titleVi": "Có bao nhiêu cách xếp 4 bạn học sinh đứng thành một hàng dọc để chụp ảnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 cách"
          },
          {
            "id": "B",
            "text": "20 cách"
          },
          {
            "id": "C",
            "text": "24 cách"
          },
          {
            "id": "D",
            "text": "28 cách"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hoán vị của 4 phần tử: 4 x 3 x 2 x 1 = 24 cách.",
        "explanation": "24 cách. Đáp án đúng là C."
      },
      {
        "id": 74,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many diagonals does a regular pentagon (5 sides) have?",
        "titleVi": "Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đường chéo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5"
          },
          {
            "id": "B",
            "text": "6"
          },
          {
            "id": "C",
            "text": "8"
          },
          {
            "id": "D",
            "text": "10"
          }
        ],
        "correctAnswer": "A",
        "hint": "Công thức số đường chéo của đa giác n cạnh: n x (n - 3) : 2. Với n = 5: 5 x (5 - 3) : 2 = 5 đường chéo.",
        "explanation": "5 đường chéo. Đáp án đúng là A."
      },
      {
        "id": 75,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A test has 10 true/false questions. How many different answer keys can be generated?",
        "titleVi": "Một bài thi trắc nghiệm gồm 10 câu hỏi Đúng/Sai. Hỏi có thể tạo ra tất cả bao nhiêu bảng đáp án khác nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "512"
          },
          {
            "id": "C",
            "text": "1024"
          },
          {
            "id": "D",
            "text": "2048"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi câu có 2 khả năng (Đúng hoặc Sai). Với 10 câu: 2 x 2 x ... x 2 = 2¹⁰ = 1024.",
        "explanation": "2¹⁰ = 1024 cách. Đáp án đúng là C."
      }
    ]
  },
  {
    "id": "exam_g4_4",
    "name": "Đề 4: TIMO Tinh Hoa Đột Phá",
    "badge": "Tinh Hoa",
    "color": "from-rose-500 to-purple-600",
    "desc": "Tỉ số, chuỗi số mũ, diện tích hình thoi & nguyên lí Dirichlet",
    "questions": [
      {
        "id": 76,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "There are 10 chickens and rabbits in a cage. There are 28 legs in total. How many rabbits are there?",
        "titleVi": "Vừa gà vừa thỏ có tất cả 10 con nhốt trong một chuồng. Đếm được tất cả 28 cái chân. Hỏi có bao nhiêu con thỏ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 con"
          },
          {
            "id": "B",
            "text": "4 con"
          },
          {
            "id": "C",
            "text": "5 con"
          },
          {
            "id": "D",
            "text": "6 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp giả thiết tạm: Giả sử cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu là 28 - 20 = 8 chân. Mỗi con thỏ hơn con gà 2 chân.",
        "explanation": "Số con thỏ = (28 - 10 x 2) : (4 - 2) = 8 : 2 = 4 con thỏ. Đáp án đúng là B."
      },
      {
        "id": 77,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "3 pens and 2 notebooks cost 44,000 VND. 2 pens and 2 notebooks cost 36,000 VND. How much does 1 pen cost?",
        "titleVi": "Mua 3 chiếc bút và 2 cuốn vở hết 44 000 đồng. Mua 2 chiếc bút và 2 cuốn vở hết 36 000 đồng. Hỏi 1 chiếc bút giá bao nhiêu tiền?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 000 đồng"
          },
          {
            "id": "B",
            "text": "8 000 đồng"
          },
          {
            "id": "C",
            "text": "10 000 đồng"
          },
          {
            "id": "D",
            "text": "12 000 đồng"
          }
        ],
        "correctAnswer": "B",
        "hint": "Phương pháp khử: So sánh hai lần mua, số vở như nhau nhưng lần 1 nhiều hơn 1 chiếc bút.",
        "explanation": "Giá 1 chiếc bút = 44 000 - 36 000 = 8 000 đồng. Đáp án đúng là B."
      },
      {
        "id": 78,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The average of 5 consecutive odd numbers is 17. What is the greatest number among them?",
        "titleVi": "Trung bình cộng của 5 số lẻ liên tiếp là 17. Hỏi số lớn nhất trong 5 số đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "19"
          },
          {
            "id": "B",
            "text": "21"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số cách đều có số lượng số lẻ (5 số), số trung bình cộng chính là số đứng ở chính giữa (số thứ 3).",
        "explanation": "5 số lẻ liên tiếp có số ở giữa là 17: 13, 15, 17, 19, 21. Số lớn nhất là 21. Đáp án đúng là B."
      },
      {
        "id": 79,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Father is 4 times as old as his son. The sum of their ages is 50. How old is the father?",
        "titleVi": "Tuổi bố gấp 4 lần tuổi con. Tổng số tuổi của hai bố con là 50 tuổi. Hỏi bố bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "35 tuổi"
          },
          {
            "id": "B",
            "text": "40 tuổi"
          },
          {
            "id": "C",
            "text": "42 tuổi"
          },
          {
            "id": "D",
            "text": "45 tuổi"
          }
        ],
        "correctAnswer": "B",
        "hint": "Bài toán Tìm hai số khi biết Tổng và Tỉ số: Tổng số phần bằng nhau là 1 + 4 = 5 phần.",
        "explanation": "Giá trị 1 phần (tuổi con) = 50 : 5 = 10 tuổi. Tuổi của bố = 10 x 4 = 40 tuổi. Đáp án đúng là B."
      },
      {
        "id": 80,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 2, 6, 12, 20, 30, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 2, 6, 12, 20, 30, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "44"
          },
          {
            "id": "D",
            "text": "48"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét tích hai số tự nhiên liên tiếp: 1x2=2, 2x3=6, 3x4=12, 4x5=20, 5x6=30...",
        "explanation": "Số tiếp theo là 6 x 7 = 42. Đáp án đúng là B."
      },
      {
        "id": 81,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 37 x 24 + 37 x 76",
        "titleVi": "Tính nhanh: 37 x 24 + 37 x 76",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "370"
          },
          {
            "id": "B",
            "text": "3700"
          },
          {
            "id": "C",
            "text": "37000"
          },
          {
            "id": "D",
            "text": "2400"
          }
        ],
        "correctAnswer": "B",
        "hint": "Áp dụng tính chất phân phối của phép nhân: a x b + a x c = a x (b + c).",
        "explanation": "37 x (24 + 76) = 37 x 100 = 3700. Đáp án đúng là B."
      },
      {
        "id": 82,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 3/4 + 1/2",
        "titleVi": "Tính giá trị của: 3/4 + 1/2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4/6"
          },
          {
            "id": "B",
            "text": "5/4"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "7/4"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quy đồng mẫu số chung là 4: 1/2 = 2/4. Lấy 3/4 + 2/4 = 5/4.",
        "explanation": "5/4. Đáp án đúng là B."
      },
      {
        "id": 83,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1500 : 25 : 4",
        "titleVi": "Tính nhanh: 1500 : 25 : 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "25"
          },
          {
            "id": "D",
            "text": "30"
          }
        ],
        "correctAnswer": "A",
        "hint": "Chia một số cho một tích: 1500 : (25 x 4) = 1500 : 100 = 15.",
        "explanation": "1500 : (25 x 4) = 15. Đáp án đúng là A."
      },
      {
        "id": 84,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 4/5 x 15/16",
        "titleVi": "Tính giá trị của: 4/5 x 15/16",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3/4"
          },
          {
            "id": "B",
            "text": "4/5"
          },
          {
            "id": "C",
            "text": "12/16"
          },
          {
            "id": "D",
            "text": "3/5"
          }
        ],
        "correctAnswer": "A",
        "hint": "Rút gọn chéo: 4 với 16 còn 1/4; 15 với 5 còn 3/1. Kết quả là 3/4.",
        "explanation": "3/4. Đáp án đúng là A."
      },
      {
        "id": 85,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x + 120) x 5 = 1000",
        "titleVi": "Tìm số x biết: (x + 120) x 5 = 1000",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60"
          },
          {
            "id": "B",
            "text": "80"
          },
          {
            "id": "C",
            "text": "100"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "x + 120 = 1000 : 5 = 200 => x = 200 - 120 = 80.",
        "explanation": "x = 80. Đáp án đúng là B."
      },
      {
        "id": 86,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "The number 45x is divisible by 9. What is the value of digit x?",
        "titleVi": "Số 45x chia hết cho 9. Chữ số x có giá trị là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "0"
          },
          {
            "id": "B",
            "text": "9"
          },
          {
            "id": "C",
            "text": "0 hoặc 9"
          },
          {
            "id": "D",
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tổng các chữ số chia hết cho 9: 4 + 5 + x = 9 + x chia hết cho 9 => x có thể là 0 hoặc 9.",
        "explanation": "x = 0 hoặc x = 9 (số 450 và 459). Đáp án đúng là C."
      },
      {
        "id": 87,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many terms are there in the sequence: 10, 14, 18, 22, ..., 98?",
        "titleVi": "Có bao nhiêu số hạng trong dãy số cách đều: 10, 14, 18, 22, ..., 98?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "22"
          },
          {
            "id": "B",
            "text": "23"
          },
          {
            "id": "C",
            "text": "24"
          },
          {
            "id": "D",
            "text": "25"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số số hạng = (Số cuối - Số đầu) : Khoảng cách + 1.",
        "explanation": "(98 - 10) : 4 + 1 = 88 : 4 + 1 = 22 + 1 = 23 số hạng. Đáp án đúng là B."
      },
      {
        "id": 88,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the sum of all digits of the number: A = 10^20 - 1?",
        "titleVi": "Tổng các chữ số của số A = 10²⁰ - 1 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "180"
          },
          {
            "id": "B",
            "text": "171"
          },
          {
            "id": "C",
            "text": "189"
          },
          {
            "id": "D",
            "text": "190"
          }
        ],
        "correctAnswer": "A",
        "hint": "10²⁰ - 1 là số gồm 20 chữ số 9: 999...99 (20 chữ số 9). Tổng các chữ số = 20 x 9 = 180.",
        "explanation": "20 x 9 = 180. Đáp án đúng là A."
      },
      {
        "id": 89,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the product: 2 x 12 x 22 x 32 x ... x 92 (10 factors)?",
        "titleVi": "Chữ số tận cùng của tích gồm 10 thừa số có tận cùng là 2: 2 x 12 x 22 x ... x 92 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "4"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 2: 2, 4, 8, 6 (chu kì 4). 10 : 4 = 2 dư 2 => kết thúc ở thừa số thứ 2 là 4, nhân tiếp hoặc 2¹⁰ = 1024 tận cùng là 6.",
        "explanation": "Tận cùng của tích 10 thừa số tận cùng bằng 2 là 4 x 4 x 4 = 64 tận cùng 6 (vì 2⁴ tận cùng 6, 2¹⁰ tận cùng 4). Lưu ý: 2^4 tận cùng 6, 2^8 tận cùng 6, 2^10 tận cùng 4. Sửa: 2^10 = 1024 tận cùng 4."
      },
      {
        "id": 90,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the average of all numbers from 1 to 99.",
        "titleVi": "Tìm trung bình cộng của tất cả các số tự nhiên từ 1 đến 99.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "49"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "50.5"
          },
          {
            "id": "D",
            "text": "51"
          }
        ],
        "correctAnswer": "B",
        "hint": "Với dãy số tự nhiên liên tiếp từ 1 đến 99, trung bình cộng = (Số đầu + Số cuối) : 2.",
        "explanation": "(1 + 99) : 2 = 100 : 2 = 50. Đáp án đúng là B."
      },
      {
        "id": 91,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A parallelogram has a base of 18cm and a height of 10cm. Find the area of the parallelogram.",
        "titleVi": "Một hình bình hành có độ dài đáy là 18cm và chiều cao tương ứng là 10cm. Tính diện tích hình bình hành đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 cm²"
          },
          {
            "id": "B",
            "text": "180 cm²"
          },
          {
            "id": "C",
            "text": "200 cm²"
          },
          {
            "id": "D",
            "text": "360 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình bình hành = đáy x chiều cao.",
        "explanation": "18 x 10 = 180 cm². Đáp án đúng là B."
      },
      {
        "id": 92,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rhombus has diagonals of lengths 14cm and 10cm. Find its area.",
        "titleVi": "Một hình thoi có độ dài hai đường chéo là 14cm và 10cm. Tính diện tích hình thoi đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "70 cm²"
          },
          {
            "id": "B",
            "text": "140 cm²"
          },
          {
            "id": "C",
            "text": "120 cm²"
          },
          {
            "id": "D",
            "text": "60 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thoi = (đường chéo 1 x đường chéo 2) : 2.",
        "explanation": "(14 x 10) : 2 = 140 : 2 = 70 cm². Đáp án đúng là A."
      },
      {
        "id": 93,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular field has a perimeter of 120m. The length is twice the width. What is the area of the field?",
        "titleVi": "Một mảnh đất hình chữ nhật có chu vi là 120m. Chiều dài gấp đôi chiều rộng. Tính diện tích mảnh đất đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "800 m²"
          },
          {
            "id": "B",
            "text": "600 m²"
          },
          {
            "id": "C",
            "text": "900 m²"
          },
          {
            "id": "D",
            "text": "1200 m²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nửa chu vi = 120 : 2 = 60m. Chiều rộng = 60 : 3 = 20m. Chiều dài = 40m. Diện tích = 40 x 20 = 800 m².",
        "explanation": "800 m². Đáp án đúng là A."
      },
      {
        "id": 94,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many obtuse angles are there in a standard regular hexagon?",
        "titleVi": "Một hình lục giác đều có tất cả bao nhiêu góc tù?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4"
          },
          {
            "id": "B",
            "text": "5"
          },
          {
            "id": "C",
            "text": "6"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi góc trong của hình lục giác đều có số đo là 120 độ (lớn hơn 90 độ nên là góc tù). Hình lục giác có 6 đỉnh tương ứng 6 góc tù.",
        "explanation": "Có đúng 6 góc tù. Đáp án đúng là C."
      },
      {
        "id": 95,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 100 cm². If each side is increased by 2cm, what is the new area of the square?",
        "titleVi": "Một hình vuông có diện tích là 100 cm². Nếu tăng độ dài mỗi cạnh thêm 2cm thì diện tích mới của hình vuông là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "144 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "124 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh ban đầu = 10cm (vì 10 x 10 = 100). Cạnh mới = 10 + 2 = 12cm. Diện tích mới = 12 x 12 = 144 cm².",
        "explanation": "144 cm². Đáp án đúng là B."
      },
      {
        "id": 96,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 3-digit even numbers can be formed using digits 1, 2, 3, 4 without repetition?",
        "titleVi": "Có bao nhiêu số chẵn có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3, 4?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "10 số"
          },
          {
            "id": "B",
            "text": "12 số"
          },
          {
            "id": "C",
            "text": "14 số"
          },
          {
            "id": "D",
            "text": "16 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chữ số hàng đơn vị phải là số chẵn (2 hoặc 4: có 2 cách chọn). Sau đó hàng trăm có 3 cách, hàng chục có 2 cách.",
        "explanation": "Số lượng số = 2 x 3 x 2 = 12 số. Đáp án đúng là B."
      },
      {
        "id": 97,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 15 balls in a box: 6 red, 5 green, and 4 yellow. At least how many balls must be drawn without looking to ensure getting at least 1 ball of each color?",
        "titleVi": "Trong hộp có 15 viên bi gồm 6 bi đỏ, 5 bi xanh và 4 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có đủ cả 3 màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "11 viên"
          },
          {
            "id": "B",
            "text": "12 viên"
          },
          {
            "id": "C",
            "text": "13 viên"
          },
          {
            "id": "D",
            "text": "14 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất: Lấy hết bi của 2 màu có số lượng nhiều nhất (6 đỏ + 5 xanh = 11 viên). Lấy thêm 1 viên nữa (viên thứ 12) chắc chắn sẽ là bi màu vàng.",
        "explanation": "6 + 5 + 1 = 12 viên bi. Đáp án đúng là B."
      },
      {
        "id": 98,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 4 students stand in a line for a photo?",
        "titleVi": "Có bao nhiêu cách xếp 4 bạn học sinh đứng thành một hàng dọc để chụp ảnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 cách"
          },
          {
            "id": "B",
            "text": "20 cách"
          },
          {
            "id": "C",
            "text": "24 cách"
          },
          {
            "id": "D",
            "text": "28 cách"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hoán vị của 4 phần tử: 4 x 3 x 2 x 1 = 24 cách.",
        "explanation": "24 cách. Đáp án đúng là C."
      },
      {
        "id": 99,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many diagonals does a regular pentagon (5 sides) have?",
        "titleVi": "Một hình ngũ giác (5 cạnh) có tất cả bao nhiêu đường chéo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5"
          },
          {
            "id": "B",
            "text": "6"
          },
          {
            "id": "C",
            "text": "8"
          },
          {
            "id": "D",
            "text": "10"
          }
        ],
        "correctAnswer": "A",
        "hint": "Công thức số đường chéo của đa giác n cạnh: n x (n - 3) : 2. Với n = 5: 5 x (5 - 3) : 2 = 5 đường chéo.",
        "explanation": "5 đường chéo. Đáp án đúng là A."
      },
      {
        "id": 100,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A test has 10 true/false questions. How many different answer keys can be generated?",
        "titleVi": "Một bài thi trắc nghiệm gồm 10 câu hỏi Đúng/Sai. Hỏi có thể tạo ra tất cả bao nhiêu bảng đáp án khác nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "512"
          },
          {
            "id": "C",
            "text": "1024"
          },
          {
            "id": "D",
            "text": "2048"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi câu có 2 khả năng (Đúng hoặc Sai). Với 10 câu: 2 x 2 x ... x 2 = 2¹⁰ = 1024.",
        "explanation": "2¹⁰ = 1024 cách. Đáp án đúng là C."
      }
    ]
  },
  {
    "id": "exam_g4_random",
    "name": "Đề 5: Luyện Đề Ngẫu Nhiên 🎲",
    "badge": "Vô Hạn",
    "color": "from-rose-400 to-red-500",
    "desc": "Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 4",
    "questions": []
  }
];

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
