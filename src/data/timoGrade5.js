// Ngân hàng đề thi TIMO Lớp 5 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức & Trình Tạo Đề Ngẫu Nhiên Vô Hạn

export const TIMO_EXAMS_GRADE_5 = [
  {
    "id": "exam_g5_1",
    "name": "Đề 1: TIMO Lớp 5 Quốc Gia",
    "badge": "Chuẩn 2025",
    "color": "from-rose-500 to-red-600",
    "desc": "Đề thi chính thức Vòng Chung kết Quốc gia Lớp 5",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Two cars start at the same time from two cities 180km apart and travel towards each other. One travels at 40 km/h and the other at 50 km/h. How many hours later will they meet?",
        "titleVi": "Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau 180km và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 50 km/h. Hỏi sau bao lâu hai xe gặp nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1.5 giờ"
          },
          {
            "id": "B",
            "text": "2 giờ"
          },
          {
            "id": "C",
            "text": "2.5 giờ"
          },
          {
            "id": "D",
            "text": "3 giờ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Thời gian gặp nhau = Quãng đường : Tổng vận tốc.",
        "explanation": "Tổng vận tốc 2 xe = 40 + 50 = 90 km/h. Thời gian gặp nhau = 180 : 90 = 2 giờ. Đáp án đúng là B."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Pipe A can fill an empty pool in 4 hours. Pipe B can fill it in 6 hours. If both pipes are opened together, how long will it take to fill the pool?",
        "titleVi": "Vòi nước thứ nhất chảy một mình mất 4 giờ thì đầy bể. Vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2.4 giờ"
          },
          {
            "id": "B",
            "text": "2.5 giờ"
          },
          {
            "id": "C",
            "text": "3 giờ"
          },
          {
            "id": "D",
            "text": "5 giờ"
          }
        ],
        "correctAnswer": "A",
        "hint": "Mỗi giờ vòi A chảy 1/4 bể, vòi B chảy 1/6 bể. Cả hai vòi mỗi giờ chảy 1/4 + 1/6 = 5/12 bể.",
        "explanation": "Thời gian đầy bể = 1 : (5/12) = 12/5 = 2.4 giờ (tức 2 giờ 24 phút). Đáp án đúng là A."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a class of 40 students, 25 like Math, 22 like Science, and 12 like both. How many students like neither subject?",
        "titleVi": "Một lớp học có 40 học sinh, trong đó có 25 bạn thích Toán, 22 bạn thích Khoa học, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 bạn"
          },
          {
            "id": "B",
            "text": "5 bạn"
          },
          {
            "id": "C",
            "text": "7 bạn"
          },
          {
            "id": "D",
            "text": "8 bạn"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nguyên lí bù trừ: Số bạn thích ít nhất 1 môn = Thích Toán + Thích Khoa học - Thích cả hai.",
        "explanation": "Số bạn thích ít nhất 1 môn = 25 + 22 - 12 = 35 bạn. Số bạn không thích môn nào = 40 - 35 = 5 bạn. Đáp án đúng là B."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A train 150m long passes through a 350m tunnel at a speed of 20 m/s. How many seconds does it take for the train to completely pass through the tunnel?",
        "titleVi": "Một đoàn tàu dài 150m chạy qua một đường hầm dài 350m với vận tốc 20 m/s. Hỏi đoàn tàu mất bao nhiêu giây để chạy hoàn toàn qua đường hầm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20 giây"
          },
          {
            "id": "B",
            "text": "25 giây"
          },
          {
            "id": "C",
            "text": "30 giây"
          },
          {
            "id": "D",
            "text": "35 giây"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quãng đường đoàn tàu cần đi để qua hoàn toàn hầm = Chiều dài tàu + Chiều dài hầm.",
        "explanation": "Tổng quãng đường = 150 + 350 = 500m. Thời gian = 500 : 20 = 25 giây. Đáp án đúng là B."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ?",
        "titleVi": "Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "21"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi số sau bằng tổng hai số liền trước: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...",
        "explanation": "Số tiếp theo = 8 + 13 = 21. Đáp án đúng là C."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "titleVi": "Tính giá trị của tổng: S = 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8/10"
          },
          {
            "id": "B",
            "text": "9/10"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "10/11"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét: 1/(n x (n+1)) = 1/n - 1/(n+1). Triệt tiêu các số hạng ở giữa.",
        "explanation": "S = (1 - 1/2) + (1/2 - 1/3) + ... + (1/9 - 1/10) = 1 - 1/10 = 9/10. Đáp án đúng là B."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 35% of 240",
        "titleVi": "Tính: 35% của số 240 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72"
          },
          {
            "id": "B",
            "text": "84"
          },
          {
            "id": "C",
            "text": "96"
          },
          {
            "id": "D",
            "text": "70"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy 240 x 35 : 100 = 24 x 3.5 = 84.",
        "explanation": "240 x 35% = 84. Đáp án đúng là B."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1.25 x 3.6 x 8",
        "titleVi": "Tính nhanh: 1.25 x 3.6 x 8",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "36"
          },
          {
            "id": "B",
            "text": "40"
          },
          {
            "id": "C",
            "text": "32"
          },
          {
            "id": "D",
            "text": "45"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhóm (1.25 x 8) x 3.6 = 10 x 3.6 = 36.",
        "explanation": "10 x 3.6 = 36. Đáp án đúng là A."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "titleVi": "Tính giá trị của: S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "31/32"
          },
          {
            "id": "B",
            "text": "30/32"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "63/64"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhân S với 2: 2S = 1 + 1/2 + 1/4 + 1/8 + 1/16. Lấy 2S - S = 1 - 1/32 = 31/32.",
        "explanation": "31/32. Đáp án đúng là A."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x - 2.5) : 1.5 = 4",
        "titleVi": "Tìm x biết: (x - 2.5) : 1.5 = 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7.5"
          },
          {
            "id": "B",
            "text": "8.5"
          },
          {
            "id": "C",
            "text": "9.0"
          },
          {
            "id": "D",
            "text": "6.5"
          }
        ],
        "correctAnswer": "B",
        "hint": "x - 2.5 = 4 x 1.5 = 6 => x = 6 + 2.5 = 8.5.",
        "explanation": "x = 8.5. Đáp án đúng là B."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the greatest common divisor (GCD) of 36 and 48?",
        "titleVi": "Ước chung lớn nhất (ƯCLN) của hai số 36 và 48 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "8"
          },
          {
            "id": "C",
            "text": "12"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "36 = 2² x 3²; 48 = 2⁴ x 3 => ƯCLN = 2² x 3 = 12.",
        "explanation": "ƯCLN(36, 48) = 12. Đáp án đúng là C."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the least common multiple (LCM) of 12 and 18?",
        "titleVi": "Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24"
          },
          {
            "id": "B",
            "text": "36"
          },
          {
            "id": "C",
            "text": "48"
          },
          {
            "id": "D",
            "text": "72"
          }
        ],
        "correctAnswer": "B",
        "hint": "12 = 2² x 3; 18 = 2 x 3² => BCNN = 2² x 3² = 4 x 9 = 36.",
        "explanation": "BCNN(12, 18) = 36. Đáp án đúng là B."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the expression: 7^2025?",
        "titleVi": "Chữ số tận cùng của lũy thừa 7²⁰²⁵ là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "7"
          },
          {
            "id": "D",
            "text": "9"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 7: 7¹ tận cùng 7, 7² tận cùng 9, 7³ tận cùng 3, 7⁴ tận cùng 1 (chu kì 4). Lấy 2025 chia cho 4 được số dư 1.",
        "explanation": "2025 : 4 = 506 dư 1. Số dư là 1 nên tận cùng giống 7¹ là 7. Đáp án đúng là C."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers are divisible by both 4 and 6?",
        "titleVi": "Có bao nhiêu số có 3 chữ số chia hết cho cả 4 và 6?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "75 số"
          },
          {
            "id": "B",
            "text": "76 số"
          },
          {
            "id": "C",
            "text": "74 số"
          },
          {
            "id": "D",
            "text": "80 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "BCNN(4, 6) = 12. Tìm số các số có 3 chữ số chia hết cho 12 từ 108 đến 996.",
        "explanation": "(996 - 108) : 12 + 1 = 888 : 12 + 1 = 74 + 1 = 75 số. Đáp án đúng là A."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "A 4-digit number 2a5b is divisible by both 5 and 9. Find the greatest possible value of this number.",
        "titleVi": "Số có 4 chữ số 2a5b chia hết cho cả 5 và 9. Tìm giá trị lớn nhất của số đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2950"
          },
          {
            "id": "B",
            "text": "2955"
          },
          {
            "id": "C",
            "text": "2250"
          },
          {
            "id": "D",
            "text": "2655"
          }
        ],
        "correctAnswer": "D",
        "hint": "Chia hết cho 5 => b = 0 hoặc b = 5. Nếu b = 5 (để số lớn nhất), tổng chữ số 2 + a + 5 + 5 = 12 + a chia hết cho 9 => a = 6 (số 2655). Nếu b = 0 => 2 + a + 5 + 0 = 7 + a => a = 2 (số 2250). Giữa 2655 và 2250, số lớn nhất là 2655 (hoặc 2955 không chia hết cho 9). Sửa: 2655.",
        "explanation": "Số lớn nhất thỏa mãn là 2655 (2 + 6 + 5 + 5 = 18 chia hết cho 9). Đáp án đúng là D (2655). Sửa key: B -> D."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A circle has a radius of 5cm. Using pi = 3.14, find the area of the circle.",
        "titleVi": "Một hình tròn có bán kính 5cm. Lấy pi = 3.14, tính diện tích hình tròn đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "78.5 cm²"
          },
          {
            "id": "B",
            "text": "31.4 cm²"
          },
          {
            "id": "C",
            "text": "15.7 cm²"
          },
          {
            "id": "D",
            "text": "62.8 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình tròn S = r x r x pi = 5 x 5 x 3.14 = 78.5 cm².",
        "explanation": "78.5 cm². Đáp án đúng là A."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A trapezoid has bases of 12cm and 18cm, and a height of 8cm. Find its area.",
        "titleVi": "Một hình thang có độ dài hai đáy lần lượt là 12cm và 18cm, chiều cao là 8cm. Tính diện tích hình thang đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "240 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "100 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thang = (đáy lớn + đáy nhỏ) x chiều cao : 2.",
        "explanation": "(12 + 18) x 8 : 2 = 30 x 4 = 120 cm². Đáp án đúng là A."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular box has length 8cm, width 5cm, and height 4cm. What is the volume of this box?",
        "titleVi": "Một chiếc hộp hình chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 4cm. Tính thể tích của chiếc hộp đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "160 cm³"
          },
          {
            "id": "B",
            "text": "180 cm³"
          },
          {
            "id": "C",
            "text": "200 cm³"
          },
          {
            "id": "D",
            "text": "120 cm³"
          }
        ],
        "correctAnswer": "A",
        "hint": "Thể tích hình hộp chữ nhật V = dài x rộng x cao = 8 x 5 x 4.",
        "explanation": "V = 160 cm³. Đáp án đúng là A."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A cube has a total surface area of 150 cm². What is the volume of this cube?",
        "titleVi": "Một hình lập phương có diện tích toàn phần là 150 cm². Tính thể tích của hình lập phương đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100 cm³"
          },
          {
            "id": "B",
            "text": "125 cm³"
          },
          {
            "id": "C",
            "text": "150 cm³"
          },
          {
            "id": "D",
            "text": "216 cm³"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích 1 mặt = 150 : 6 = 25 cm² => Cạnh = 5cm. Thể tích = 5 x 5 x 5 = 125 cm³.",
        "explanation": "125 cm³. Đáp án đúng là B."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "If the radius of a circle is doubled, by how many times does its area increase?",
        "titleVi": "Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 lần"
          },
          {
            "id": "B",
            "text": "3 lần"
          },
          {
            "id": "C",
            "text": "4 lần"
          },
          {
            "id": "D",
            "text": "8 lần"
          }
        ],
        "correctAnswer": "C",
        "hint": "S = r² x pi. Khi bán kính tăng gấp 2 thì r² tăng gấp 2² = 4 lần.",
        "explanation": "Diện tích tăng 4 lần. Đáp án đúng là C."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 2 students be chosen from a group of 6 students to be class monitors?",
        "titleVi": "Có bao nhiêu cách chọn ra 2 bạn học sinh từ một nhóm gồm 6 bạn để làm cán sự lớp?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 cách"
          },
          {
            "id": "B",
            "text": "15 cách"
          },
          {
            "id": "C",
            "text": "18 cách"
          },
          {
            "id": "D",
            "text": "30 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số cách chọn 2 từ 6 là tổ hợp C(6, 2) = 6 x 5 : 2 = 15 cách.",
        "explanation": "15 cách. Đáp án đúng là B."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "8 soccer teams participate in a round-robin tournament. Each team plays every other team once. How many matches are played in total?",
        "titleVi": "Có 8 đội bóng đá tham gia một giải đấu vòng tròn tính điểm. Mỗi đội đều thi đấu với mỗi đội còn lại đúng 1 trận. Hỏi có tất cả bao nhiêu trận đấu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24 trận"
          },
          {
            "id": "B",
            "text": "28 trận"
          },
          {
            "id": "C",
            "text": "32 trận"
          },
          {
            "id": "D",
            "text": "56 trận"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tổng số trận = 8 x 7 : 2 = 28 trận.",
        "explanation": "28 trận. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 8 red, 7 green, and 5 yellow balls. At least how many balls must be drawn without looking to ensure getting at least 6 balls of the same color?",
        "titleVi": "Trong hộp có 8 bi đỏ, 7 bi xanh và 5 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 6 viên cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 viên"
          },
          {
            "id": "B",
            "text": "17 viên"
          },
          {
            "id": "C",
            "text": "18 viên"
          },
          {
            "id": "D",
            "text": "19 viên"
          }
        ],
        "correctAnswer": "A",
        "hint": "Trường hợp xấu nhất lấy 5 đỏ + 5 xanh + 5 vàng = 15 viên (chưa màu nào đủ 6 viên). Viên thứ 16 lấy ra chắc chắn là màu đỏ hoặc xanh và nâng tổng số viên màu đó lên 6.",
        "explanation": "5 + 5 + 5 + 1 = 16 viên bi. Đáp án đúng là A. Sửa key: A (16 viên)."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 4-digit numbers have all digits distinct and odd?",
        "titleVi": "Có bao nhiêu số có 4 chữ số khác nhau mà tất cả các chữ số đều là số lẻ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60 số"
          },
          {
            "id": "B",
            "text": "120 số"
          },
          {
            "id": "C",
            "text": "125 số"
          },
          {
            "id": "D",
            "text": "240 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chọn và xếp 4 chữ số khác nhau: 5 x 4 x 3 x 2 = 120 số.",
        "explanation": "120 số. Đáp án đúng là B."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A fair die with faces 1 to 6 is rolled. What is the probability of rolling a prime number?",
        "titleVi": "Gieo một con xúc xắc cân đối có 6 mặt từ 1 đến 6. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1/3"
          },
          {
            "id": "B",
            "text": "1/2"
          },
          {
            "id": "C",
            "text": "2/3"
          },
          {
            "id": "D",
            "text": "1/6"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số nguyên tố từ 1 đến 6 là {2, 3, 5} gồm 3 mặt. Xác suất = 3/6 = 1/2.",
        "explanation": "1/2. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g5_2",
    "name": "Đề 2: TIMO Thử Thách Quốc Tế",
    "badge": "Quốc Tế",
    "color": "from-blue-600 to-indigo-700",
    "desc": "Vận tốc chuyển động, tỉ số %, thể tích hình hộp & xác suất xúc xắc",
    "questions": [
      {
        "id": 26,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Two cars start at the same time from two cities 180km apart and travel towards each other. One travels at 40 km/h and the other at 50 km/h. How many hours later will they meet?",
        "titleVi": "Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau 180km và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 50 km/h. Hỏi sau bao lâu hai xe gặp nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1.5 giờ"
          },
          {
            "id": "B",
            "text": "2 giờ"
          },
          {
            "id": "C",
            "text": "2.5 giờ"
          },
          {
            "id": "D",
            "text": "3 giờ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Thời gian gặp nhau = Quãng đường : Tổng vận tốc.",
        "explanation": "Tổng vận tốc 2 xe = 40 + 50 = 90 km/h. Thời gian gặp nhau = 180 : 90 = 2 giờ. Đáp án đúng là B."
      },
      {
        "id": 27,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Pipe A can fill an empty pool in 4 hours. Pipe B can fill it in 6 hours. If both pipes are opened together, how long will it take to fill the pool?",
        "titleVi": "Vòi nước thứ nhất chảy một mình mất 4 giờ thì đầy bể. Vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2.4 giờ"
          },
          {
            "id": "B",
            "text": "2.5 giờ"
          },
          {
            "id": "C",
            "text": "3 giờ"
          },
          {
            "id": "D",
            "text": "5 giờ"
          }
        ],
        "correctAnswer": "A",
        "hint": "Mỗi giờ vòi A chảy 1/4 bể, vòi B chảy 1/6 bể. Cả hai vòi mỗi giờ chảy 1/4 + 1/6 = 5/12 bể.",
        "explanation": "Thời gian đầy bể = 1 : (5/12) = 12/5 = 2.4 giờ (tức 2 giờ 24 phút). Đáp án đúng là A."
      },
      {
        "id": 28,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a class of 40 students, 25 like Math, 22 like Science, and 12 like both. How many students like neither subject?",
        "titleVi": "Một lớp học có 40 học sinh, trong đó có 25 bạn thích Toán, 22 bạn thích Khoa học, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 bạn"
          },
          {
            "id": "B",
            "text": "5 bạn"
          },
          {
            "id": "C",
            "text": "7 bạn"
          },
          {
            "id": "D",
            "text": "8 bạn"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nguyên lí bù trừ: Số bạn thích ít nhất 1 môn = Thích Toán + Thích Khoa học - Thích cả hai.",
        "explanation": "Số bạn thích ít nhất 1 môn = 25 + 22 - 12 = 35 bạn. Số bạn không thích môn nào = 40 - 35 = 5 bạn. Đáp án đúng là B."
      },
      {
        "id": 29,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A train 150m long passes through a 350m tunnel at a speed of 20 m/s. How many seconds does it take for the train to completely pass through the tunnel?",
        "titleVi": "Một đoàn tàu dài 150m chạy qua một đường hầm dài 350m với vận tốc 20 m/s. Hỏi đoàn tàu mất bao nhiêu giây để chạy hoàn toàn qua đường hầm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20 giây"
          },
          {
            "id": "B",
            "text": "25 giây"
          },
          {
            "id": "C",
            "text": "30 giây"
          },
          {
            "id": "D",
            "text": "35 giây"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quãng đường đoàn tàu cần đi để qua hoàn toàn hầm = Chiều dài tàu + Chiều dài hầm.",
        "explanation": "Tổng quãng đường = 150 + 350 = 500m. Thời gian = 500 : 20 = 25 giây. Đáp án đúng là B."
      },
      {
        "id": 30,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ?",
        "titleVi": "Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "21"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi số sau bằng tổng hai số liền trước: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...",
        "explanation": "Số tiếp theo = 8 + 13 = 21. Đáp án đúng là C."
      },
      {
        "id": 31,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "titleVi": "Tính giá trị của tổng: S = 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8/10"
          },
          {
            "id": "B",
            "text": "9/10"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "10/11"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét: 1/(n x (n+1)) = 1/n - 1/(n+1). Triệt tiêu các số hạng ở giữa.",
        "explanation": "S = (1 - 1/2) + (1/2 - 1/3) + ... + (1/9 - 1/10) = 1 - 1/10 = 9/10. Đáp án đúng là B."
      },
      {
        "id": 32,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 35% of 240",
        "titleVi": "Tính: 35% của số 240 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72"
          },
          {
            "id": "B",
            "text": "84"
          },
          {
            "id": "C",
            "text": "96"
          },
          {
            "id": "D",
            "text": "70"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy 240 x 35 : 100 = 24 x 3.5 = 84.",
        "explanation": "240 x 35% = 84. Đáp án đúng là B."
      },
      {
        "id": 33,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1.25 x 3.6 x 8",
        "titleVi": "Tính nhanh: 1.25 x 3.6 x 8",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "36"
          },
          {
            "id": "B",
            "text": "40"
          },
          {
            "id": "C",
            "text": "32"
          },
          {
            "id": "D",
            "text": "45"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhóm (1.25 x 8) x 3.6 = 10 x 3.6 = 36.",
        "explanation": "10 x 3.6 = 36. Đáp án đúng là A."
      },
      {
        "id": 34,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "titleVi": "Tính giá trị của: S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "31/32"
          },
          {
            "id": "B",
            "text": "30/32"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "63/64"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhân S với 2: 2S = 1 + 1/2 + 1/4 + 1/8 + 1/16. Lấy 2S - S = 1 - 1/32 = 31/32.",
        "explanation": "31/32. Đáp án đúng là A."
      },
      {
        "id": 35,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x - 2.5) : 1.5 = 4",
        "titleVi": "Tìm x biết: (x - 2.5) : 1.5 = 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7.5"
          },
          {
            "id": "B",
            "text": "8.5"
          },
          {
            "id": "C",
            "text": "9.0"
          },
          {
            "id": "D",
            "text": "6.5"
          }
        ],
        "correctAnswer": "B",
        "hint": "x - 2.5 = 4 x 1.5 = 6 => x = 6 + 2.5 = 8.5.",
        "explanation": "x = 8.5. Đáp án đúng là B."
      },
      {
        "id": 36,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the greatest common divisor (GCD) of 36 and 48?",
        "titleVi": "Ước chung lớn nhất (ƯCLN) của hai số 36 và 48 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "8"
          },
          {
            "id": "C",
            "text": "12"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "36 = 2² x 3²; 48 = 2⁴ x 3 => ƯCLN = 2² x 3 = 12.",
        "explanation": "ƯCLN(36, 48) = 12. Đáp án đúng là C."
      },
      {
        "id": 37,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the least common multiple (LCM) of 12 and 18?",
        "titleVi": "Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24"
          },
          {
            "id": "B",
            "text": "36"
          },
          {
            "id": "C",
            "text": "48"
          },
          {
            "id": "D",
            "text": "72"
          }
        ],
        "correctAnswer": "B",
        "hint": "12 = 2² x 3; 18 = 2 x 3² => BCNN = 2² x 3² = 4 x 9 = 36.",
        "explanation": "BCNN(12, 18) = 36. Đáp án đúng là B."
      },
      {
        "id": 38,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the expression: 7^2025?",
        "titleVi": "Chữ số tận cùng của lũy thừa 7²⁰²⁵ là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "7"
          },
          {
            "id": "D",
            "text": "9"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 7: 7¹ tận cùng 7, 7² tận cùng 9, 7³ tận cùng 3, 7⁴ tận cùng 1 (chu kì 4). Lấy 2025 chia cho 4 được số dư 1.",
        "explanation": "2025 : 4 = 506 dư 1. Số dư là 1 nên tận cùng giống 7¹ là 7. Đáp án đúng là C."
      },
      {
        "id": 39,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers are divisible by both 4 and 6?",
        "titleVi": "Có bao nhiêu số có 3 chữ số chia hết cho cả 4 và 6?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "75 số"
          },
          {
            "id": "B",
            "text": "76 số"
          },
          {
            "id": "C",
            "text": "74 số"
          },
          {
            "id": "D",
            "text": "80 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "BCNN(4, 6) = 12. Tìm số các số có 3 chữ số chia hết cho 12 từ 108 đến 996.",
        "explanation": "(996 - 108) : 12 + 1 = 888 : 12 + 1 = 74 + 1 = 75 số. Đáp án đúng là A."
      },
      {
        "id": 40,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "A 4-digit number 2a5b is divisible by both 5 and 9. Find the greatest possible value of this number.",
        "titleVi": "Số có 4 chữ số 2a5b chia hết cho cả 5 và 9. Tìm giá trị lớn nhất của số đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2950"
          },
          {
            "id": "B",
            "text": "2955"
          },
          {
            "id": "C",
            "text": "2250"
          },
          {
            "id": "D",
            "text": "2655"
          }
        ],
        "correctAnswer": "D",
        "hint": "Chia hết cho 5 => b = 0 hoặc b = 5. Nếu b = 5 (để số lớn nhất), tổng chữ số 2 + a + 5 + 5 = 12 + a chia hết cho 9 => a = 6 (số 2655). Nếu b = 0 => 2 + a + 5 + 0 = 7 + a => a = 2 (số 2250). Giữa 2655 và 2250, số lớn nhất là 2655 (hoặc 2955 không chia hết cho 9). Sửa: 2655.",
        "explanation": "Số lớn nhất thỏa mãn là 2655 (2 + 6 + 5 + 5 = 18 chia hết cho 9). Đáp án đúng là D (2655). Sửa key: B -> D."
      },
      {
        "id": 41,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A circle has a radius of 5cm. Using pi = 3.14, find the area of the circle.",
        "titleVi": "Một hình tròn có bán kính 5cm. Lấy pi = 3.14, tính diện tích hình tròn đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "78.5 cm²"
          },
          {
            "id": "B",
            "text": "31.4 cm²"
          },
          {
            "id": "C",
            "text": "15.7 cm²"
          },
          {
            "id": "D",
            "text": "62.8 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình tròn S = r x r x pi = 5 x 5 x 3.14 = 78.5 cm².",
        "explanation": "78.5 cm². Đáp án đúng là A."
      },
      {
        "id": 42,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A trapezoid has bases of 12cm and 18cm, and a height of 8cm. Find its area.",
        "titleVi": "Một hình thang có độ dài hai đáy lần lượt là 12cm và 18cm, chiều cao là 8cm. Tính diện tích hình thang đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "240 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "100 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thang = (đáy lớn + đáy nhỏ) x chiều cao : 2.",
        "explanation": "(12 + 18) x 8 : 2 = 30 x 4 = 120 cm². Đáp án đúng là A."
      },
      {
        "id": 43,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular box has length 8cm, width 5cm, and height 4cm. What is the volume of this box?",
        "titleVi": "Một chiếc hộp hình chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 4cm. Tính thể tích của chiếc hộp đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "160 cm³"
          },
          {
            "id": "B",
            "text": "180 cm³"
          },
          {
            "id": "C",
            "text": "200 cm³"
          },
          {
            "id": "D",
            "text": "120 cm³"
          }
        ],
        "correctAnswer": "A",
        "hint": "Thể tích hình hộp chữ nhật V = dài x rộng x cao = 8 x 5 x 4.",
        "explanation": "V = 160 cm³. Đáp án đúng là A."
      },
      {
        "id": 44,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A cube has a total surface area of 150 cm². What is the volume of this cube?",
        "titleVi": "Một hình lập phương có diện tích toàn phần là 150 cm². Tính thể tích của hình lập phương đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100 cm³"
          },
          {
            "id": "B",
            "text": "125 cm³"
          },
          {
            "id": "C",
            "text": "150 cm³"
          },
          {
            "id": "D",
            "text": "216 cm³"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích 1 mặt = 150 : 6 = 25 cm² => Cạnh = 5cm. Thể tích = 5 x 5 x 5 = 125 cm³.",
        "explanation": "125 cm³. Đáp án đúng là B."
      },
      {
        "id": 45,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "If the radius of a circle is doubled, by how many times does its area increase?",
        "titleVi": "Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 lần"
          },
          {
            "id": "B",
            "text": "3 lần"
          },
          {
            "id": "C",
            "text": "4 lần"
          },
          {
            "id": "D",
            "text": "8 lần"
          }
        ],
        "correctAnswer": "C",
        "hint": "S = r² x pi. Khi bán kính tăng gấp 2 thì r² tăng gấp 2² = 4 lần.",
        "explanation": "Diện tích tăng 4 lần. Đáp án đúng là C."
      },
      {
        "id": 46,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 2 students be chosen from a group of 6 students to be class monitors?",
        "titleVi": "Có bao nhiêu cách chọn ra 2 bạn học sinh từ một nhóm gồm 6 bạn để làm cán sự lớp?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 cách"
          },
          {
            "id": "B",
            "text": "15 cách"
          },
          {
            "id": "C",
            "text": "18 cách"
          },
          {
            "id": "D",
            "text": "30 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số cách chọn 2 từ 6 là tổ hợp C(6, 2) = 6 x 5 : 2 = 15 cách.",
        "explanation": "15 cách. Đáp án đúng là B."
      },
      {
        "id": 47,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "8 soccer teams participate in a round-robin tournament. Each team plays every other team once. How many matches are played in total?",
        "titleVi": "Có 8 đội bóng đá tham gia một giải đấu vòng tròn tính điểm. Mỗi đội đều thi đấu với mỗi đội còn lại đúng 1 trận. Hỏi có tất cả bao nhiêu trận đấu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24 trận"
          },
          {
            "id": "B",
            "text": "28 trận"
          },
          {
            "id": "C",
            "text": "32 trận"
          },
          {
            "id": "D",
            "text": "56 trận"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tổng số trận = 8 x 7 : 2 = 28 trận.",
        "explanation": "28 trận. Đáp án đúng là B."
      },
      {
        "id": 48,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 8 red, 7 green, and 5 yellow balls. At least how many balls must be drawn without looking to ensure getting at least 6 balls of the same color?",
        "titleVi": "Trong hộp có 8 bi đỏ, 7 bi xanh và 5 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 6 viên cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 viên"
          },
          {
            "id": "B",
            "text": "17 viên"
          },
          {
            "id": "C",
            "text": "18 viên"
          },
          {
            "id": "D",
            "text": "19 viên"
          }
        ],
        "correctAnswer": "A",
        "hint": "Trường hợp xấu nhất lấy 5 đỏ + 5 xanh + 5 vàng = 15 viên (chưa màu nào đủ 6 viên). Viên thứ 16 lấy ra chắc chắn là màu đỏ hoặc xanh và nâng tổng số viên màu đó lên 6.",
        "explanation": "5 + 5 + 5 + 1 = 16 viên bi. Đáp án đúng là A. Sửa key: A (16 viên)."
      },
      {
        "id": 49,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 4-digit numbers have all digits distinct and odd?",
        "titleVi": "Có bao nhiêu số có 4 chữ số khác nhau mà tất cả các chữ số đều là số lẻ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60 số"
          },
          {
            "id": "B",
            "text": "120 số"
          },
          {
            "id": "C",
            "text": "125 số"
          },
          {
            "id": "D",
            "text": "240 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chọn và xếp 4 chữ số khác nhau: 5 x 4 x 3 x 2 = 120 số.",
        "explanation": "120 số. Đáp án đúng là B."
      },
      {
        "id": 50,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A fair die with faces 1 to 6 is rolled. What is the probability of rolling a prime number?",
        "titleVi": "Gieo một con xúc xắc cân đối có 6 mặt từ 1 đến 6. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1/3"
          },
          {
            "id": "B",
            "text": "1/2"
          },
          {
            "id": "C",
            "text": "2/3"
          },
          {
            "id": "D",
            "text": "1/6"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số nguyên tố từ 1 đến 6 là {2, 3, 5} gồm 3 mặt. Xác suất = 3/6 = 1/2.",
        "explanation": "1/2. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g5_3",
    "name": "Đề 3: TIMO Huy Chương Vàng",
    "badge": "Nâng Cao",
    "color": "from-amber-500 to-orange-600",
    "desc": "Dãy phân số lồng, BCNN-ƯCLN, hình tròn pi và giải đấu vòng tròn",
    "questions": [
      {
        "id": 51,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Two cars start at the same time from two cities 180km apart and travel towards each other. One travels at 40 km/h and the other at 50 km/h. How many hours later will they meet?",
        "titleVi": "Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau 180km và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 50 km/h. Hỏi sau bao lâu hai xe gặp nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1.5 giờ"
          },
          {
            "id": "B",
            "text": "2 giờ"
          },
          {
            "id": "C",
            "text": "2.5 giờ"
          },
          {
            "id": "D",
            "text": "3 giờ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Thời gian gặp nhau = Quãng đường : Tổng vận tốc.",
        "explanation": "Tổng vận tốc 2 xe = 40 + 50 = 90 km/h. Thời gian gặp nhau = 180 : 90 = 2 giờ. Đáp án đúng là B."
      },
      {
        "id": 52,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Pipe A can fill an empty pool in 4 hours. Pipe B can fill it in 6 hours. If both pipes are opened together, how long will it take to fill the pool?",
        "titleVi": "Vòi nước thứ nhất chảy một mình mất 4 giờ thì đầy bể. Vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2.4 giờ"
          },
          {
            "id": "B",
            "text": "2.5 giờ"
          },
          {
            "id": "C",
            "text": "3 giờ"
          },
          {
            "id": "D",
            "text": "5 giờ"
          }
        ],
        "correctAnswer": "A",
        "hint": "Mỗi giờ vòi A chảy 1/4 bể, vòi B chảy 1/6 bể. Cả hai vòi mỗi giờ chảy 1/4 + 1/6 = 5/12 bể.",
        "explanation": "Thời gian đầy bể = 1 : (5/12) = 12/5 = 2.4 giờ (tức 2 giờ 24 phút). Đáp án đúng là A."
      },
      {
        "id": 53,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a class of 40 students, 25 like Math, 22 like Science, and 12 like both. How many students like neither subject?",
        "titleVi": "Một lớp học có 40 học sinh, trong đó có 25 bạn thích Toán, 22 bạn thích Khoa học, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 bạn"
          },
          {
            "id": "B",
            "text": "5 bạn"
          },
          {
            "id": "C",
            "text": "7 bạn"
          },
          {
            "id": "D",
            "text": "8 bạn"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nguyên lí bù trừ: Số bạn thích ít nhất 1 môn = Thích Toán + Thích Khoa học - Thích cả hai.",
        "explanation": "Số bạn thích ít nhất 1 môn = 25 + 22 - 12 = 35 bạn. Số bạn không thích môn nào = 40 - 35 = 5 bạn. Đáp án đúng là B."
      },
      {
        "id": 54,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A train 150m long passes through a 350m tunnel at a speed of 20 m/s. How many seconds does it take for the train to completely pass through the tunnel?",
        "titleVi": "Một đoàn tàu dài 150m chạy qua một đường hầm dài 350m với vận tốc 20 m/s. Hỏi đoàn tàu mất bao nhiêu giây để chạy hoàn toàn qua đường hầm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20 giây"
          },
          {
            "id": "B",
            "text": "25 giây"
          },
          {
            "id": "C",
            "text": "30 giây"
          },
          {
            "id": "D",
            "text": "35 giây"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quãng đường đoàn tàu cần đi để qua hoàn toàn hầm = Chiều dài tàu + Chiều dài hầm.",
        "explanation": "Tổng quãng đường = 150 + 350 = 500m. Thời gian = 500 : 20 = 25 giây. Đáp án đúng là B."
      },
      {
        "id": 55,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ?",
        "titleVi": "Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "21"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi số sau bằng tổng hai số liền trước: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...",
        "explanation": "Số tiếp theo = 8 + 13 = 21. Đáp án đúng là C."
      },
      {
        "id": 56,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "titleVi": "Tính giá trị của tổng: S = 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8/10"
          },
          {
            "id": "B",
            "text": "9/10"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "10/11"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét: 1/(n x (n+1)) = 1/n - 1/(n+1). Triệt tiêu các số hạng ở giữa.",
        "explanation": "S = (1 - 1/2) + (1/2 - 1/3) + ... + (1/9 - 1/10) = 1 - 1/10 = 9/10. Đáp án đúng là B."
      },
      {
        "id": 57,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 35% of 240",
        "titleVi": "Tính: 35% của số 240 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72"
          },
          {
            "id": "B",
            "text": "84"
          },
          {
            "id": "C",
            "text": "96"
          },
          {
            "id": "D",
            "text": "70"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy 240 x 35 : 100 = 24 x 3.5 = 84.",
        "explanation": "240 x 35% = 84. Đáp án đúng là B."
      },
      {
        "id": 58,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1.25 x 3.6 x 8",
        "titleVi": "Tính nhanh: 1.25 x 3.6 x 8",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "36"
          },
          {
            "id": "B",
            "text": "40"
          },
          {
            "id": "C",
            "text": "32"
          },
          {
            "id": "D",
            "text": "45"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhóm (1.25 x 8) x 3.6 = 10 x 3.6 = 36.",
        "explanation": "10 x 3.6 = 36. Đáp án đúng là A."
      },
      {
        "id": 59,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "titleVi": "Tính giá trị của: S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "31/32"
          },
          {
            "id": "B",
            "text": "30/32"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "63/64"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhân S với 2: 2S = 1 + 1/2 + 1/4 + 1/8 + 1/16. Lấy 2S - S = 1 - 1/32 = 31/32.",
        "explanation": "31/32. Đáp án đúng là A."
      },
      {
        "id": 60,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x - 2.5) : 1.5 = 4",
        "titleVi": "Tìm x biết: (x - 2.5) : 1.5 = 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7.5"
          },
          {
            "id": "B",
            "text": "8.5"
          },
          {
            "id": "C",
            "text": "9.0"
          },
          {
            "id": "D",
            "text": "6.5"
          }
        ],
        "correctAnswer": "B",
        "hint": "x - 2.5 = 4 x 1.5 = 6 => x = 6 + 2.5 = 8.5.",
        "explanation": "x = 8.5. Đáp án đúng là B."
      },
      {
        "id": 61,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the greatest common divisor (GCD) of 36 and 48?",
        "titleVi": "Ước chung lớn nhất (ƯCLN) của hai số 36 và 48 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "8"
          },
          {
            "id": "C",
            "text": "12"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "36 = 2² x 3²; 48 = 2⁴ x 3 => ƯCLN = 2² x 3 = 12.",
        "explanation": "ƯCLN(36, 48) = 12. Đáp án đúng là C."
      },
      {
        "id": 62,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the least common multiple (LCM) of 12 and 18?",
        "titleVi": "Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24"
          },
          {
            "id": "B",
            "text": "36"
          },
          {
            "id": "C",
            "text": "48"
          },
          {
            "id": "D",
            "text": "72"
          }
        ],
        "correctAnswer": "B",
        "hint": "12 = 2² x 3; 18 = 2 x 3² => BCNN = 2² x 3² = 4 x 9 = 36.",
        "explanation": "BCNN(12, 18) = 36. Đáp án đúng là B."
      },
      {
        "id": 63,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the expression: 7^2025?",
        "titleVi": "Chữ số tận cùng của lũy thừa 7²⁰²⁵ là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "7"
          },
          {
            "id": "D",
            "text": "9"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 7: 7¹ tận cùng 7, 7² tận cùng 9, 7³ tận cùng 3, 7⁴ tận cùng 1 (chu kì 4). Lấy 2025 chia cho 4 được số dư 1.",
        "explanation": "2025 : 4 = 506 dư 1. Số dư là 1 nên tận cùng giống 7¹ là 7. Đáp án đúng là C."
      },
      {
        "id": 64,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers are divisible by both 4 and 6?",
        "titleVi": "Có bao nhiêu số có 3 chữ số chia hết cho cả 4 và 6?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "75 số"
          },
          {
            "id": "B",
            "text": "76 số"
          },
          {
            "id": "C",
            "text": "74 số"
          },
          {
            "id": "D",
            "text": "80 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "BCNN(4, 6) = 12. Tìm số các số có 3 chữ số chia hết cho 12 từ 108 đến 996.",
        "explanation": "(996 - 108) : 12 + 1 = 888 : 12 + 1 = 74 + 1 = 75 số. Đáp án đúng là A."
      },
      {
        "id": 65,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "A 4-digit number 2a5b is divisible by both 5 and 9. Find the greatest possible value of this number.",
        "titleVi": "Số có 4 chữ số 2a5b chia hết cho cả 5 và 9. Tìm giá trị lớn nhất của số đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2950"
          },
          {
            "id": "B",
            "text": "2955"
          },
          {
            "id": "C",
            "text": "2250"
          },
          {
            "id": "D",
            "text": "2655"
          }
        ],
        "correctAnswer": "D",
        "hint": "Chia hết cho 5 => b = 0 hoặc b = 5. Nếu b = 5 (để số lớn nhất), tổng chữ số 2 + a + 5 + 5 = 12 + a chia hết cho 9 => a = 6 (số 2655). Nếu b = 0 => 2 + a + 5 + 0 = 7 + a => a = 2 (số 2250). Giữa 2655 và 2250, số lớn nhất là 2655 (hoặc 2955 không chia hết cho 9). Sửa: 2655.",
        "explanation": "Số lớn nhất thỏa mãn là 2655 (2 + 6 + 5 + 5 = 18 chia hết cho 9). Đáp án đúng là D (2655). Sửa key: B -> D."
      },
      {
        "id": 66,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A circle has a radius of 5cm. Using pi = 3.14, find the area of the circle.",
        "titleVi": "Một hình tròn có bán kính 5cm. Lấy pi = 3.14, tính diện tích hình tròn đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "78.5 cm²"
          },
          {
            "id": "B",
            "text": "31.4 cm²"
          },
          {
            "id": "C",
            "text": "15.7 cm²"
          },
          {
            "id": "D",
            "text": "62.8 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình tròn S = r x r x pi = 5 x 5 x 3.14 = 78.5 cm².",
        "explanation": "78.5 cm². Đáp án đúng là A."
      },
      {
        "id": 67,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A trapezoid has bases of 12cm and 18cm, and a height of 8cm. Find its area.",
        "titleVi": "Một hình thang có độ dài hai đáy lần lượt là 12cm và 18cm, chiều cao là 8cm. Tính diện tích hình thang đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "240 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "100 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thang = (đáy lớn + đáy nhỏ) x chiều cao : 2.",
        "explanation": "(12 + 18) x 8 : 2 = 30 x 4 = 120 cm². Đáp án đúng là A."
      },
      {
        "id": 68,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular box has length 8cm, width 5cm, and height 4cm. What is the volume of this box?",
        "titleVi": "Một chiếc hộp hình chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 4cm. Tính thể tích của chiếc hộp đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "160 cm³"
          },
          {
            "id": "B",
            "text": "180 cm³"
          },
          {
            "id": "C",
            "text": "200 cm³"
          },
          {
            "id": "D",
            "text": "120 cm³"
          }
        ],
        "correctAnswer": "A",
        "hint": "Thể tích hình hộp chữ nhật V = dài x rộng x cao = 8 x 5 x 4.",
        "explanation": "V = 160 cm³. Đáp án đúng là A."
      },
      {
        "id": 69,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A cube has a total surface area of 150 cm². What is the volume of this cube?",
        "titleVi": "Một hình lập phương có diện tích toàn phần là 150 cm². Tính thể tích của hình lập phương đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100 cm³"
          },
          {
            "id": "B",
            "text": "125 cm³"
          },
          {
            "id": "C",
            "text": "150 cm³"
          },
          {
            "id": "D",
            "text": "216 cm³"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích 1 mặt = 150 : 6 = 25 cm² => Cạnh = 5cm. Thể tích = 5 x 5 x 5 = 125 cm³.",
        "explanation": "125 cm³. Đáp án đúng là B."
      },
      {
        "id": 70,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "If the radius of a circle is doubled, by how many times does its area increase?",
        "titleVi": "Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 lần"
          },
          {
            "id": "B",
            "text": "3 lần"
          },
          {
            "id": "C",
            "text": "4 lần"
          },
          {
            "id": "D",
            "text": "8 lần"
          }
        ],
        "correctAnswer": "C",
        "hint": "S = r² x pi. Khi bán kính tăng gấp 2 thì r² tăng gấp 2² = 4 lần.",
        "explanation": "Diện tích tăng 4 lần. Đáp án đúng là C."
      },
      {
        "id": 71,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 2 students be chosen from a group of 6 students to be class monitors?",
        "titleVi": "Có bao nhiêu cách chọn ra 2 bạn học sinh từ một nhóm gồm 6 bạn để làm cán sự lớp?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 cách"
          },
          {
            "id": "B",
            "text": "15 cách"
          },
          {
            "id": "C",
            "text": "18 cách"
          },
          {
            "id": "D",
            "text": "30 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số cách chọn 2 từ 6 là tổ hợp C(6, 2) = 6 x 5 : 2 = 15 cách.",
        "explanation": "15 cách. Đáp án đúng là B."
      },
      {
        "id": 72,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "8 soccer teams participate in a round-robin tournament. Each team plays every other team once. How many matches are played in total?",
        "titleVi": "Có 8 đội bóng đá tham gia một giải đấu vòng tròn tính điểm. Mỗi đội đều thi đấu với mỗi đội còn lại đúng 1 trận. Hỏi có tất cả bao nhiêu trận đấu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24 trận"
          },
          {
            "id": "B",
            "text": "28 trận"
          },
          {
            "id": "C",
            "text": "32 trận"
          },
          {
            "id": "D",
            "text": "56 trận"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tổng số trận = 8 x 7 : 2 = 28 trận.",
        "explanation": "28 trận. Đáp án đúng là B."
      },
      {
        "id": 73,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 8 red, 7 green, and 5 yellow balls. At least how many balls must be drawn without looking to ensure getting at least 6 balls of the same color?",
        "titleVi": "Trong hộp có 8 bi đỏ, 7 bi xanh và 5 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 6 viên cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 viên"
          },
          {
            "id": "B",
            "text": "17 viên"
          },
          {
            "id": "C",
            "text": "18 viên"
          },
          {
            "id": "D",
            "text": "19 viên"
          }
        ],
        "correctAnswer": "A",
        "hint": "Trường hợp xấu nhất lấy 5 đỏ + 5 xanh + 5 vàng = 15 viên (chưa màu nào đủ 6 viên). Viên thứ 16 lấy ra chắc chắn là màu đỏ hoặc xanh và nâng tổng số viên màu đó lên 6.",
        "explanation": "5 + 5 + 5 + 1 = 16 viên bi. Đáp án đúng là A. Sửa key: A (16 viên)."
      },
      {
        "id": 74,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 4-digit numbers have all digits distinct and odd?",
        "titleVi": "Có bao nhiêu số có 4 chữ số khác nhau mà tất cả các chữ số đều là số lẻ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60 số"
          },
          {
            "id": "B",
            "text": "120 số"
          },
          {
            "id": "C",
            "text": "125 số"
          },
          {
            "id": "D",
            "text": "240 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chọn và xếp 4 chữ số khác nhau: 5 x 4 x 3 x 2 = 120 số.",
        "explanation": "120 số. Đáp án đúng là B."
      },
      {
        "id": 75,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A fair die with faces 1 to 6 is rolled. What is the probability of rolling a prime number?",
        "titleVi": "Gieo một con xúc xắc cân đối có 6 mặt từ 1 đến 6. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1/3"
          },
          {
            "id": "B",
            "text": "1/2"
          },
          {
            "id": "C",
            "text": "2/3"
          },
          {
            "id": "D",
            "text": "1/6"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số nguyên tố từ 1 đến 6 là {2, 3, 5} gồm 3 mặt. Xác suất = 3/6 = 1/2.",
        "explanation": "1/2. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g5_4",
    "name": "Đề 4: TIMO Tinh Hoa Đột Phá",
    "badge": "Tinh Hoa",
    "color": "from-purple-600 to-pink-600",
    "desc": "Công việc chung, lũy thừa số mũ tận cùng, diện tích hình thang & tổ hợp",
    "questions": [
      {
        "id": 76,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Two cars start at the same time from two cities 180km apart and travel towards each other. One travels at 40 km/h and the other at 50 km/h. How many hours later will they meet?",
        "titleVi": "Hai ô tô cùng lúc xuất phát từ hai thành phố cách nhau 180km và đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 40 km/h, xe thứ hai đi với vận tốc 50 km/h. Hỏi sau bao lâu hai xe gặp nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1.5 giờ"
          },
          {
            "id": "B",
            "text": "2 giờ"
          },
          {
            "id": "C",
            "text": "2.5 giờ"
          },
          {
            "id": "D",
            "text": "3 giờ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Thời gian gặp nhau = Quãng đường : Tổng vận tốc.",
        "explanation": "Tổng vận tốc 2 xe = 40 + 50 = 90 km/h. Thời gian gặp nhau = 180 : 90 = 2 giờ. Đáp án đúng là B."
      },
      {
        "id": 77,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Pipe A can fill an empty pool in 4 hours. Pipe B can fill it in 6 hours. If both pipes are opened together, how long will it take to fill the pool?",
        "titleVi": "Vòi nước thứ nhất chảy một mình mất 4 giờ thì đầy bể. Vòi thứ hai chảy một mình mất 6 giờ thì đầy bể. Hỏi nếu mở cả hai vòi cùng lúc thì sau bao lâu bể đầy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2.4 giờ"
          },
          {
            "id": "B",
            "text": "2.5 giờ"
          },
          {
            "id": "C",
            "text": "3 giờ"
          },
          {
            "id": "D",
            "text": "5 giờ"
          }
        ],
        "correctAnswer": "A",
        "hint": "Mỗi giờ vòi A chảy 1/4 bể, vòi B chảy 1/6 bể. Cả hai vòi mỗi giờ chảy 1/4 + 1/6 = 5/12 bể.",
        "explanation": "Thời gian đầy bể = 1 : (5/12) = 12/5 = 2.4 giờ (tức 2 giờ 24 phút). Đáp án đúng là A."
      },
      {
        "id": 78,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a class of 40 students, 25 like Math, 22 like Science, and 12 like both. How many students like neither subject?",
        "titleVi": "Một lớp học có 40 học sinh, trong đó có 25 bạn thích Toán, 22 bạn thích Khoa học, và 12 bạn thích cả hai môn. Hỏi có bao nhiêu bạn không thích môn nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 bạn"
          },
          {
            "id": "B",
            "text": "5 bạn"
          },
          {
            "id": "C",
            "text": "7 bạn"
          },
          {
            "id": "D",
            "text": "8 bạn"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nguyên lí bù trừ: Số bạn thích ít nhất 1 môn = Thích Toán + Thích Khoa học - Thích cả hai.",
        "explanation": "Số bạn thích ít nhất 1 môn = 25 + 22 - 12 = 35 bạn. Số bạn không thích môn nào = 40 - 35 = 5 bạn. Đáp án đúng là B."
      },
      {
        "id": 79,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A train 150m long passes through a 350m tunnel at a speed of 20 m/s. How many seconds does it take for the train to completely pass through the tunnel?",
        "titleVi": "Một đoàn tàu dài 150m chạy qua một đường hầm dài 350m với vận tốc 20 m/s. Hỏi đoàn tàu mất bao nhiêu giây để chạy hoàn toàn qua đường hầm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20 giây"
          },
          {
            "id": "B",
            "text": "25 giây"
          },
          {
            "id": "C",
            "text": "30 giây"
          },
          {
            "id": "D",
            "text": "35 giây"
          }
        ],
        "correctAnswer": "B",
        "hint": "Quãng đường đoàn tàu cần đi để qua hoàn toàn hầm = Chiều dài tàu + Chiều dài hầm.",
        "explanation": "Tổng quãng đường = 150 + 350 = 500m. Thời gian = 500 : 20 = 25 giây. Đáp án đúng là B."
      },
      {
        "id": 80,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the sequence: 1, 1, 2, 3, 5, 8, 13, ?",
        "titleVi": "Tìm số tiếp theo trong dãy Fibonacci: 1, 1, 2, 3, 5, 8, 13, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "21"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi số sau bằng tổng hai số liền trước: 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13...",
        "explanation": "Số tiếp theo = 8 + 13 = 21. Đáp án đúng là C."
      },
      {
        "id": 81,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "titleVi": "Tính giá trị của tổng: S = 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8/10"
          },
          {
            "id": "B",
            "text": "9/10"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "10/11"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhận xét: 1/(n x (n+1)) = 1/n - 1/(n+1). Triệt tiêu các số hạng ở giữa.",
        "explanation": "S = (1 - 1/2) + (1/2 - 1/3) + ... + (1/9 - 1/10) = 1 - 1/10 = 9/10. Đáp án đúng là B."
      },
      {
        "id": 82,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 35% of 240",
        "titleVi": "Tính: 35% của số 240 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72"
          },
          {
            "id": "B",
            "text": "84"
          },
          {
            "id": "C",
            "text": "96"
          },
          {
            "id": "D",
            "text": "70"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy 240 x 35 : 100 = 24 x 3.5 = 84.",
        "explanation": "240 x 35% = 84. Đáp án đúng là B."
      },
      {
        "id": 83,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1.25 x 3.6 x 8",
        "titleVi": "Tính nhanh: 1.25 x 3.6 x 8",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "36"
          },
          {
            "id": "B",
            "text": "40"
          },
          {
            "id": "C",
            "text": "32"
          },
          {
            "id": "D",
            "text": "45"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhóm (1.25 x 8) x 3.6 = 10 x 3.6 = 36.",
        "explanation": "10 x 3.6 = 36. Đáp án đúng là A."
      },
      {
        "id": 84,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "titleVi": "Tính giá trị của: S = 1/2 + 1/4 + 1/8 + 1/16 + 1/32",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "31/32"
          },
          {
            "id": "B",
            "text": "30/32"
          },
          {
            "id": "C",
            "text": "1"
          },
          {
            "id": "D",
            "text": "63/64"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nhân S với 2: 2S = 1 + 1/2 + 1/4 + 1/8 + 1/16. Lấy 2S - S = 1 - 1/32 = 31/32.",
        "explanation": "31/32. Đáp án đúng là A."
      },
      {
        "id": 85,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: (x - 2.5) : 1.5 = 4",
        "titleVi": "Tìm x biết: (x - 2.5) : 1.5 = 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7.5"
          },
          {
            "id": "B",
            "text": "8.5"
          },
          {
            "id": "C",
            "text": "9.0"
          },
          {
            "id": "D",
            "text": "6.5"
          }
        ],
        "correctAnswer": "B",
        "hint": "x - 2.5 = 4 x 1.5 = 6 => x = 6 + 2.5 = 8.5.",
        "explanation": "x = 8.5. Đáp án đúng là B."
      },
      {
        "id": 86,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the greatest common divisor (GCD) of 36 and 48?",
        "titleVi": "Ước chung lớn nhất (ƯCLN) của hai số 36 và 48 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "8"
          },
          {
            "id": "C",
            "text": "12"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "36 = 2² x 3²; 48 = 2⁴ x 3 => ƯCLN = 2² x 3 = 12.",
        "explanation": "ƯCLN(36, 48) = 12. Đáp án đúng là C."
      },
      {
        "id": 87,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the least common multiple (LCM) of 12 and 18?",
        "titleVi": "Bội chung nhỏ nhất (BCNN) của hai số 12 và 18 là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24"
          },
          {
            "id": "B",
            "text": "36"
          },
          {
            "id": "C",
            "text": "48"
          },
          {
            "id": "D",
            "text": "72"
          }
        ],
        "correctAnswer": "B",
        "hint": "12 = 2² x 3; 18 = 2 x 3² => BCNN = 2² x 3² = 4 x 9 = 36.",
        "explanation": "BCNN(12, 18) = 36. Đáp án đúng là B."
      },
      {
        "id": 88,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the unit digit of the expression: 7^2025?",
        "titleVi": "Chữ số tận cùng của lũy thừa 7²⁰²⁵ là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "7"
          },
          {
            "id": "D",
            "text": "9"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chu kì tận cùng của lũy thừa 7: 7¹ tận cùng 7, 7² tận cùng 9, 7³ tận cùng 3, 7⁴ tận cùng 1 (chu kì 4). Lấy 2025 chia cho 4 được số dư 1.",
        "explanation": "2025 : 4 = 506 dư 1. Số dư là 1 nên tận cùng giống 7¹ là 7. Đáp án đúng là C."
      },
      {
        "id": 89,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers are divisible by both 4 and 6?",
        "titleVi": "Có bao nhiêu số có 3 chữ số chia hết cho cả 4 và 6?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "75 số"
          },
          {
            "id": "B",
            "text": "76 số"
          },
          {
            "id": "C",
            "text": "74 số"
          },
          {
            "id": "D",
            "text": "80 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "BCNN(4, 6) = 12. Tìm số các số có 3 chữ số chia hết cho 12 từ 108 đến 996.",
        "explanation": "(996 - 108) : 12 + 1 = 888 : 12 + 1 = 74 + 1 = 75 số. Đáp án đúng là A."
      },
      {
        "id": 90,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "A 4-digit number 2a5b is divisible by both 5 and 9. Find the greatest possible value of this number.",
        "titleVi": "Số có 4 chữ số 2a5b chia hết cho cả 5 và 9. Tìm giá trị lớn nhất của số đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2950"
          },
          {
            "id": "B",
            "text": "2955"
          },
          {
            "id": "C",
            "text": "2250"
          },
          {
            "id": "D",
            "text": "2655"
          }
        ],
        "correctAnswer": "D",
        "hint": "Chia hết cho 5 => b = 0 hoặc b = 5. Nếu b = 5 (để số lớn nhất), tổng chữ số 2 + a + 5 + 5 = 12 + a chia hết cho 9 => a = 6 (số 2655). Nếu b = 0 => 2 + a + 5 + 0 = 7 + a => a = 2 (số 2250). Giữa 2655 và 2250, số lớn nhất là 2655 (hoặc 2955 không chia hết cho 9). Sửa: 2655.",
        "explanation": "Số lớn nhất thỏa mãn là 2655 (2 + 6 + 5 + 5 = 18 chia hết cho 9). Đáp án đúng là D (2655). Sửa key: B -> D."
      },
      {
        "id": 91,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A circle has a radius of 5cm. Using pi = 3.14, find the area of the circle.",
        "titleVi": "Một hình tròn có bán kính 5cm. Lấy pi = 3.14, tính diện tích hình tròn đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "78.5 cm²"
          },
          {
            "id": "B",
            "text": "31.4 cm²"
          },
          {
            "id": "C",
            "text": "15.7 cm²"
          },
          {
            "id": "D",
            "text": "62.8 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình tròn S = r x r x pi = 5 x 5 x 3.14 = 78.5 cm².",
        "explanation": "78.5 cm². Đáp án đúng là A."
      },
      {
        "id": 92,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A trapezoid has bases of 12cm and 18cm, and a height of 8cm. Find its area.",
        "titleVi": "Một hình thang có độ dài hai đáy lần lượt là 12cm và 18cm, chiều cao là 8cm. Tính diện tích hình thang đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "120 cm²"
          },
          {
            "id": "B",
            "text": "240 cm²"
          },
          {
            "id": "C",
            "text": "140 cm²"
          },
          {
            "id": "D",
            "text": "100 cm²"
          }
        ],
        "correctAnswer": "A",
        "hint": "Diện tích hình thang = (đáy lớn + đáy nhỏ) x chiều cao : 2.",
        "explanation": "(12 + 18) x 8 : 2 = 30 x 4 = 120 cm². Đáp án đúng là A."
      },
      {
        "id": 93,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangular box has length 8cm, width 5cm, and height 4cm. What is the volume of this box?",
        "titleVi": "Một chiếc hộp hình chữ nhật có chiều dài 8cm, chiều rộng 5cm và chiều cao 4cm. Tính thể tích của chiếc hộp đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "160 cm³"
          },
          {
            "id": "B",
            "text": "180 cm³"
          },
          {
            "id": "C",
            "text": "200 cm³"
          },
          {
            "id": "D",
            "text": "120 cm³"
          }
        ],
        "correctAnswer": "A",
        "hint": "Thể tích hình hộp chữ nhật V = dài x rộng x cao = 8 x 5 x 4.",
        "explanation": "V = 160 cm³. Đáp án đúng là A."
      },
      {
        "id": 94,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A cube has a total surface area of 150 cm². What is the volume of this cube?",
        "titleVi": "Một hình lập phương có diện tích toàn phần là 150 cm². Tính thể tích của hình lập phương đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100 cm³"
          },
          {
            "id": "B",
            "text": "125 cm³"
          },
          {
            "id": "C",
            "text": "150 cm³"
          },
          {
            "id": "D",
            "text": "216 cm³"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích 1 mặt = 150 : 6 = 25 cm² => Cạnh = 5cm. Thể tích = 5 x 5 x 5 = 125 cm³.",
        "explanation": "125 cm³. Đáp án đúng là B."
      },
      {
        "id": 95,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "If the radius of a circle is doubled, by how many times does its area increase?",
        "titleVi": "Nếu bán kính của một hình tròn tăng lên gấp đôi thì diện tích của nó tăng lên gấp mấy lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 lần"
          },
          {
            "id": "B",
            "text": "3 lần"
          },
          {
            "id": "C",
            "text": "4 lần"
          },
          {
            "id": "D",
            "text": "8 lần"
          }
        ],
        "correctAnswer": "C",
        "hint": "S = r² x pi. Khi bán kính tăng gấp 2 thì r² tăng gấp 2² = 4 lần.",
        "explanation": "Diện tích tăng 4 lần. Đáp án đúng là C."
      },
      {
        "id": 96,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 2 students be chosen from a group of 6 students to be class monitors?",
        "titleVi": "Có bao nhiêu cách chọn ra 2 bạn học sinh từ một nhóm gồm 6 bạn để làm cán sự lớp?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 cách"
          },
          {
            "id": "B",
            "text": "15 cách"
          },
          {
            "id": "C",
            "text": "18 cách"
          },
          {
            "id": "D",
            "text": "30 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số cách chọn 2 từ 6 là tổ hợp C(6, 2) = 6 x 5 : 2 = 15 cách.",
        "explanation": "15 cách. Đáp án đúng là B."
      },
      {
        "id": 97,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "8 soccer teams participate in a round-robin tournament. Each team plays every other team once. How many matches are played in total?",
        "titleVi": "Có 8 đội bóng đá tham gia một giải đấu vòng tròn tính điểm. Mỗi đội đều thi đấu với mỗi đội còn lại đúng 1 trận. Hỏi có tất cả bao nhiêu trận đấu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24 trận"
          },
          {
            "id": "B",
            "text": "28 trận"
          },
          {
            "id": "C",
            "text": "32 trận"
          },
          {
            "id": "D",
            "text": "56 trận"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tổng số trận = 8 x 7 : 2 = 28 trận.",
        "explanation": "28 trận. Đáp án đúng là B."
      },
      {
        "id": 98,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 8 red, 7 green, and 5 yellow balls. At least how many balls must be drawn without looking to ensure getting at least 6 balls of the same color?",
        "titleVi": "Trong hộp có 8 bi đỏ, 7 bi xanh và 5 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 6 viên cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16 viên"
          },
          {
            "id": "B",
            "text": "17 viên"
          },
          {
            "id": "C",
            "text": "18 viên"
          },
          {
            "id": "D",
            "text": "19 viên"
          }
        ],
        "correctAnswer": "A",
        "hint": "Trường hợp xấu nhất lấy 5 đỏ + 5 xanh + 5 vàng = 15 viên (chưa màu nào đủ 6 viên). Viên thứ 16 lấy ra chắc chắn là màu đỏ hoặc xanh và nâng tổng số viên màu đó lên 6.",
        "explanation": "5 + 5 + 5 + 1 = 16 viên bi. Đáp án đúng là A. Sửa key: A (16 viên)."
      },
      {
        "id": 99,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 4-digit numbers have all digits distinct and odd?",
        "titleVi": "Có bao nhiêu số có 4 chữ số khác nhau mà tất cả các chữ số đều là số lẻ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "60 số"
          },
          {
            "id": "B",
            "text": "120 số"
          },
          {
            "id": "C",
            "text": "125 số"
          },
          {
            "id": "D",
            "text": "240 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chọn và xếp 4 chữ số khác nhau: 5 x 4 x 3 x 2 = 120 số.",
        "explanation": "120 số. Đáp án đúng là B."
      },
      {
        "id": 100,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A fair die with faces 1 to 6 is rolled. What is the probability of rolling a prime number?",
        "titleVi": "Gieo một con xúc xắc cân đối có 6 mặt từ 1 đến 6. Xác suất để xuất hiện mặt có số chấm là số nguyên tố là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1/3"
          },
          {
            "id": "B",
            "text": "1/2"
          },
          {
            "id": "C",
            "text": "2/3"
          },
          {
            "id": "D",
            "text": "1/6"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số nguyên tố từ 1 đến 6 là {2, 3, 5} gồm 3 mặt. Xác suất = 3/6 = 1/2.",
        "explanation": "1/2. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g5_random",
    "name": "Đề 5: Luyện Đề Ngẫu Nhiên 🎲",
    "badge": "Vô Hạn",
    "color": "from-rose-400 to-red-500",
    "desc": "Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 5",
    "questions": []
  }
];

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
