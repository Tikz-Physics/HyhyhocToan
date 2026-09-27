// Ngân hàng đề thi TIMO Lớp 2 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức (100 câu hỏi độc bản) & Trình Tạo Đề Ngẫu Nhiên Vô Hạn
// Đầy đủ 5 chuyên đề chuẩn: Tư duy logic, Số học, Lý thuyết số, Hình học, Tổ hợp

export const TIMO_EXAMS_GRADE_2 = [
  {
    "id": "exam_g2_1",
    "name": "Đề 1: TIMO Lớp 2 Quốc Gia",
    "badge": "Chuẩn 2025",
    "color": "from-blue-400 to-indigo-500",
    "desc": "Đề thi chính thức Vòng Chung kết Quốc gia Lớp 2",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "This year, Kevin is 8 years old. His brother is 4 years older than Kevin. How old is his brother 3 years later?",
        "titleVi": "Năm nay Kevin 8 tuổi. Anh trai hơn Kevin 4 tuổi. Hỏi 3 năm nữa anh trai Kevin bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12"
          },
          {
            "id": "B",
            "text": "14"
          },
          {
            "id": "C",
            "text": "15"
          },
          {
            "id": "D",
            "text": "16"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính tuổi anh trai năm nay trước rồi cộng thêm 3 tuổi.",
        "explanation": "Năm nay anh trai Kevin có số tuổi là: 8 + 4 = 12 tuổi. Sau 3 năm nữa, tuổi của anh trai là: 12 + 3 = 15 tuổi. Đáp án đúng là C."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "If 3 days after today will be Sunday, which day of the week was yesterday?",
        "titleVi": "Biết 3 ngày sau hôm nay là Chủ nhật. Hỏi hôm qua là thứ mấy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Thứ Tư (Wednesday)"
          },
          {
            "id": "B",
            "text": "Thứ Năm (Thursday)"
          },
          {
            "id": "C",
            "text": "Thứ Ba (Tuesday)"
          },
          {
            "id": "D",
            "text": "Thứ Sáu (Friday)"
          }
        ],
        "correctAnswer": "A",
        "hint": "Từ Chủ nhật lùi 3 ngày để tìm hôm nay, sau đó lùi thêm 1 ngày để tìm hôm qua.",
        "explanation": "Chủ nhật lùi 3 ngày là Thứ Năm (hôm nay). Hôm qua là Thứ Tư. Đáp án đúng là A."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a queue, Mina is 6th from the front and 9th from the back. How many children are in the queue?",
        "titleVi": "Trong hàng dọc, Mina đứng thứ 6 từ trên xuống và đứng thứ 9 từ dưới lên. Hỏi có tất cả bao nhiêu bạn trong hàng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14"
          },
          {
            "id": "B",
            "text": "15"
          },
          {
            "id": "C",
            "text": "16"
          },
          {
            "id": "D",
            "text": "13"
          }
        ],
        "correctAnswer": "A",
        "hint": "Khi đếm từ trước và từ sau, Mina bị đếm 2 lần. Cần trừ đi 1.",
        "explanation": "Tổng số bạn trong hàng là: 6 + 9 - 1 = 14 bạn. Đáp án đúng là A."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A balance scale shows 1 watermelon weighs the same as 3 apples. 1 apple weighs the same as 2 oranges. How many oranges balance 1 watermelon?",
        "titleVi": "Cân đòn bẩy thăng bằng cho thấy 1 quả dưa hấu nặng bằng 3 quả táo. 1 quả táo nặng bằng 2 quả cam. Hỏi 1 quả dưa hấu nặng bằng mấy quả cam?",
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
            "text": "9"
          }
        ],
        "correctAnswer": "B",
        "hint": "Thay thế mỗi quả táo bằng 2 quả cam.",
        "explanation": "1 dưa hấu = 3 táo = 3 x 2 = 6 quả cam. Đáp án đúng là B."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 2, 5, 8, 11, 14, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 2, 5, 8, 11, 14, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "16"
          },
          {
            "id": "C",
            "text": "17"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "Khoảng cách giữa các số liên tiếp là +3.",
        "explanation": "Quy luật tăng 3 đơn vị: 14 + 3 = 17. Đáp án đúng là C."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 38 + 47",
        "titleVi": "Tính giá trị của: 38 + 47",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "75"
          },
          {
            "id": "B",
            "text": "85"
          },
          {
            "id": "C",
            "text": "84"
          },
          {
            "id": "D",
            "text": "95"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cộng hàng đơn vị có nhớ sang hàng chục.",
        "explanation": "38 + 47 = 85. Đáp án đúng là B."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 93 - 48",
        "titleVi": "Tính giá trị của: 93 - 48",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45"
          },
          {
            "id": "B",
            "text": "55"
          },
          {
            "id": "C",
            "text": "44"
          },
          {
            "id": "D",
            "text": "54"
          }
        ],
        "correctAnswer": "A",
        "hint": "Thực hiện phép trừ có nhớ trong phạm vi 100.",
        "explanation": "93 - 48 = 45. Đáp án đúng là A."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 5 x 7 + 15",
        "titleVi": "Tính giá trị của: 5 x 7 + 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "55"
          },
          {
            "id": "D",
            "text": "40"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhân chia trước, cộng trừ sau.",
        "explanation": "5 x 7 = 35; 35 + 15 = 50. Đáp án đúng là B."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 18 : 2 + 34",
        "titleVi": "Tính giá trị của: 18 : 2 + 34",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "41"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "43"
          },
          {
            "id": "D",
            "text": "44"
          }
        ],
        "correctAnswer": "C",
        "hint": "Thực hiện 18 : 2 trước.",
        "explanation": "18 : 2 = 9; 9 + 34 = 43. Đáp án đúng là C."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: x - 36 = 49",
        "titleVi": "Tìm số x biết: x - 36 = 49",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "85"
          },
          {
            "id": "B",
            "text": "75"
          },
          {
            "id": "C",
            "text": "83"
          },
          {
            "id": "D",
            "text": "86"
          }
        ],
        "correctAnswer": "A",
        "hint": "Số bị trừ = hiệu + số trừ.",
        "explanation": "x = 49 + 36 = 85. Đáp án đúng là A."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many tens are there in the number 750?",
        "titleVi": "Số 750 có bao nhiêu chục?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 chục"
          },
          {
            "id": "B",
            "text": "75 chục"
          },
          {
            "id": "C",
            "text": "7 chục"
          },
          {
            "id": "D",
            "text": "50 chục"
          }
        ],
        "correctAnswer": "B",
        "hint": "750 = 75 x 10 nên có 75 chục.",
        "explanation": "Số 750 gồm 75 chục. Đáp án đúng là B."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the greatest 2-digit even number?",
        "titleVi": "Số chẵn lớn nhất có 2 chữ số là số nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "99"
          },
          {
            "id": "B",
            "text": "98"
          },
          {
            "id": "C",
            "text": "88"
          },
          {
            "id": "D",
            "text": "96"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số lớn nhất có 2 chữ số là 99 (lẻ), số chẵn liền trước là 98.",
        "explanation": "Số chẵn lớn nhất có 2 chữ số là 98. Đáp án đúng là B."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all digits in the number 648.",
        "titleVi": "Tính tổng các chữ số của số 648.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "16"
          },
          {
            "id": "B",
            "text": "17"
          },
          {
            "id": "C",
            "text": "18"
          },
          {
            "id": "D",
            "text": "19"
          }
        ],
        "correctAnswer": "C",
        "hint": "Cộng 6 + 4 + 8.",
        "explanation": "6 + 4 + 8 = 18. Đáp án đúng là C."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Divide 23 candies equally among 5 kids. How many candies are left over?",
        "titleVi": "Chia đều 23 cái kẹo cho 5 bạn. Hỏi còn thừa lại bao nhiêu cái kẹo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 cái"
          },
          {
            "id": "B",
            "text": "3 cái"
          },
          {
            "id": "C",
            "text": "4 cái"
          },
          {
            "id": "D",
            "text": "1 cái"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy 23 chia cho 5 tìm số dư.",
        "explanation": "23 : 5 = 4 dư 3 cái kẹo. Đáp án đúng là B."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the value of 3m 4dm in centimeters (cm)?",
        "titleVi": "3m 4dm bằng bao nhiêu xăng-ti-mét (cm)?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "34 cm"
          },
          {
            "id": "B",
            "text": "304 cm"
          },
          {
            "id": "C",
            "text": "340 cm"
          },
          {
            "id": "D",
            "text": "3400 cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "1m = 100cm, 1dm = 10cm.",
        "explanation": "3m 4dm = 300cm + 40cm = 340cm. Đáp án đúng là C."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "There are 4 points on a straight line. How many line segments can be formed?",
        "titleVi": "Có 4 điểm phân biệt cùng nằm trên một đường thẳng. Hỏi có tất cả bao nhiêu đoạn thẳng được tạo thành?",
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
            "text": "7"
          }
        ],
        "correctAnswer": "C",
        "hint": "Công thức tính số đoạn thẳng qua 4 điểm là 4 x 3 : 2.",
        "explanation": "Số đoạn thẳng = 3 + 2 + 1 = 6 đoạn thẳng. Đáp án đúng là C."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A triangle has sides of length 12cm, 15cm, and 18cm. Find the perimeter of the triangle.",
        "titleVi": "Một hình tam giác có độ dài ba cạnh lần lượt là 12cm, 15cm và 18cm. Tính chu vi hình tam giác đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "42cm"
          },
          {
            "id": "B",
            "text": "45cm"
          },
          {
            "id": "C",
            "text": "44cm"
          },
          {
            "id": "D",
            "text": "48cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chu vi tam giác là tổng độ dài 3 cạnh.",
        "explanation": "Chu vi = 12 + 15 + 18 = 45cm. Đáp án đúng là B."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many faces does a cube have?",
        "titleVi": "Một khối lập phương có bao nhiêu mặt?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 mặt"
          },
          {
            "id": "B",
            "text": "6 mặt"
          },
          {
            "id": "C",
            "text": "8 mặt"
          },
          {
            "id": "D",
            "text": "12 mặt"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khối lập phương giống như viên xúc xắc có 6 mặt.",
        "explanation": "Khối lập phương có đúng 6 mặt. Đáp án đúng là B."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 14cm and a width that is 5cm shorter than the length. What is the perimeter of this rectangle?",
        "titleVi": "Một hình chữ nhật có chiều dài 14cm, chiều rộng ngắn hơn chiều dài 5cm. Tính chu vi của hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "38cm"
          },
          {
            "id": "B",
            "text": "46cm"
          },
          {
            "id": "C",
            "text": "48cm"
          },
          {
            "id": "D",
            "text": "52cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính chiều rộng rồi tính chu vi = (dài + rộng) x 2.",
        "explanation": "Chiều rộng = 14 - 5 = 9cm. Chu vi = (14 + 9) x 2 = 46cm. Đáp án đúng là B."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A broken line consists of 3 segments with lengths 16cm, 24cm, and 35cm. What is the total length of this line?",
        "titleVi": "Một đường gấp khúc gồm 3 đoạn thẳng có độ dài 16cm, 24cm và 35cm. Tính độ dài đường gấp khúc đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "65cm"
          },
          {
            "id": "B",
            "text": "70cm"
          },
          {
            "id": "C",
            "text": "75cm"
          },
          {
            "id": "D",
            "text": "80cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Cộng độ dài 3 đoạn thẳng lại với nhau.",
        "explanation": "Độ dài = 16 + 24 + 35 = 75cm. Đáp án đúng là C."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 2-digit numbers can be formed using digits 3, 5, and 7 without repetition?",
        "titleVi": "Có bao nhiêu số có 2 chữ số khác nhau có thể lập được từ các chữ số 3, 5 và 7?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 số"
          },
          {
            "id": "B",
            "text": "5 số"
          },
          {
            "id": "C",
            "text": "6 số"
          },
          {
            "id": "D",
            "text": "9 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chữ số hàng chục có 3 cách chọn, hàng đơn vị có 2 cách.",
        "explanation": "Số lượng số = 3 x 2 = 6 số (35, 37, 53, 57, 73, 75). Đáp án đúng là C."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 5 red balls and 5 green balls in a box. At least how many balls must be drawn without looking to ensure getting 2 balls of the same color?",
        "titleVi": "Trong hộp có 5 viên bi đỏ và 5 viên bi xanh. Hỏi phải lấy ra ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 2 viên bi cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 viên"
          },
          {
            "id": "B",
            "text": "3 viên"
          },
          {
            "id": "C",
            "text": "5 viên"
          },
          {
            "id": "D",
            "text": "6 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 1 đỏ, 1 xanh (2 màu khác nhau). Viên thứ 3 chắc chắn trùng.",
        "explanation": "Theo nguyên lí Dirichlet: 2 màu + 1 = 3 viên bi. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 2 roads from town A to town B, and 3 roads from town B to town C. How many different routes are there from A to C via B?",
        "titleVi": "Có 2 con đường từ làng A đến làng B, và có 3 con đường từ làng B đến làng C. Hỏi có bao nhiêu cách đi khác nhau từ A đến C qua B?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 cách"
          },
          {
            "id": "B",
            "text": "6 cách"
          },
          {
            "id": "C",
            "text": "7 cách"
          },
          {
            "id": "D",
            "text": "8 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Áp dụng quy tắc nhân.",
        "explanation": "Số cách đi = 2 x 3 = 6 cách đi. Đáp án đúng là B."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "Tom has 3 shirts (Red, Blue, Yellow) and 2 pairs of shorts (Black, White). How many different outfits can he wear?",
        "titleVi": "Tom có 3 chiếc áo (Đỏ, Xanh, Vàng) và 2 chiếc quần (Đen, Trắng). Hỏi Tom có thể phối được bao nhiêu bộ trang phục khác nhau?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 bộ"
          },
          {
            "id": "B",
            "text": "6 bộ"
          },
          {
            "id": "C",
            "text": "8 bộ"
          },
          {
            "id": "D",
            "text": "9 bộ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Mỗi chiếc áo phối với 2 chiếc quần.",
        "explanation": "Số bộ trang phục = 3 x 2 = 6 bộ. Đáp án đúng là B."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "4 friends Alan, Bob, Cindy, and Dan shake hands with each other once. How many handshakes are there in total?",
        "titleVi": "Có 4 bạn Alan, Bob, Cindy và Dan bắt tay nhau, mỗi bạn đều bắt tay với mỗi bạn còn lại đúng 1 lần. Hỏi có tất cả bao nhiêu cái bắt tay?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 cái"
          },
          {
            "id": "B",
            "text": "5 cái"
          },
          {
            "id": "C",
            "text": "6 cái"
          },
          {
            "id": "D",
            "text": "8 cái"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tổng số bắt tay = 3 + 2 + 1 = 6.",
        "explanation": "Số cái bắt tay = 4 x 3 : 2 = 6 cái. Đáp án đúng là C."
      }
    ]
  },
  {
    "id": "exam_g2_2",
    "name": "Đề 2: TIMO Thử Thách Quốc Tế",
    "badge": "Quốc Tế",
    "color": "from-cyan-500 to-blue-600",
    "desc": "Cân thăng bằng, que cưa, hình khối 3D & xác suất cơ bản",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Amy is 7 years old. Her mother is 32 years old. What is the difference between their ages 5 years from now?",
        "titleVi": "Amy 7 tuổi. Mẹ Amy 32 tuổi. Hỏi 5 năm nữa mẹ hơn Amy bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "25 tuổi"
          },
          {
            "id": "B",
            "text": "30 tuổi"
          },
          {
            "id": "C",
            "text": "20 tuổi"
          },
          {
            "id": "D",
            "text": "35 tuổi"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hiệu số tuổi giữa hai người không bao giờ thay đổi theo thời gian.",
        "explanation": "Hiệu số tuổi luôn không đổi: 32 - 7 = 25 tuổi. Sau 5 năm nữa mẹ vẫn hơn Amy 25 tuổi. Đáp án đúng là A."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A wooden stick is cut into 5 equal pieces. How many cuts were made?",
        "titleVi": "Một thanh gỗ được cưa thành 5 khúc bằng nhau. Hỏi người thợ đã cưa bao nhiêu nhát?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 nhát"
          },
          {
            "id": "B",
            "text": "4 nhát"
          },
          {
            "id": "C",
            "text": "6 nhát"
          },
          {
            "id": "D",
            "text": "3 nhát"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số nhát cắt = số khúc gỗ - 1.",
        "explanation": "Muốn cưa thành 5 khúc thì chỉ cần cưa 5 - 1 = 4 nhát. Đáp án đúng là B."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Today is Friday. What day of the week will it be 16 days from now?",
        "titleVi": "Hôm nay là Thứ Sáu. Hỏi 16 ngày nữa là thứ mấy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Thứ Sáu"
          },
          {
            "id": "B",
            "text": "Thứ Bảy"
          },
          {
            "id": "C",
            "text": "Chủ Nhật"
          },
          {
            "id": "D",
            "text": "Thứ Hai"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi tuần có 7 ngày. 16 : 7 = 2 tuần dư 2 ngày. Đếm thêm 2 ngày từ Thứ Sáu.",
        "explanation": "16 ngày gồm 2 tuần và 2 ngày lẻ. Thứ Sáu cộng thêm 2 ngày: Thứ Bảy -> Chủ Nhật. Đáp án đúng là C."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "If 2 bears have the same weight as 6 rabbits, and 1 rabbit has the same weight as 3 ducks, how many ducks weigh the same as 1 bear?",
        "titleVi": "Biết 2 con gấu nặng bằng 6 con thỏ, và 1 con thỏ nặng bằng 3 con vịt. Hỏi 1 con gấu nặng bằng bao nhiêu con vịt?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 con"
          },
          {
            "id": "B",
            "text": "9 con"
          },
          {
            "id": "C",
            "text": "12 con"
          },
          {
            "id": "D",
            "text": "8 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính xem 1 con gấu bằng mấy con thỏ trước.",
        "explanation": "2 gấu = 6 thỏ => 1 gấu = 3 thỏ. Mà 1 thỏ = 3 vịt => 1 gấu = 3 x 3 = 9 con vịt. Đáp án đúng là B."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the missing number in the sequence: 40, 35, 30, 25, ?, 15",
        "titleVi": "Tìm số còn thiếu trong dãy: 40, 35, 30, 25, ?, 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "22"
          },
          {
            "id": "B",
            "text": "20"
          },
          {
            "id": "C",
            "text": "18"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "B",
        "hint": "Dãy số giảm đều 5 đơn vị.",
        "explanation": "25 - 5 = 20. Đáp án đúng là B."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 125 + 234 + 75",
        "titleVi": "Tính nhanh: 125 + 234 + 75",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "434"
          },
          {
            "id": "B",
            "text": "424"
          },
          {
            "id": "C",
            "text": "444"
          },
          {
            "id": "D",
            "text": "414"
          }
        ],
        "correctAnswer": "A",
        "hint": "Ghép 125 + 75 = 200 trước.",
        "explanation": "(125 + 75) + 234 = 200 + 234 = 434. Đáp án đúng là A."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 500 - 165",
        "titleVi": "Tính giá trị của: 500 - 165",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "335"
          },
          {
            "id": "B",
            "text": "345"
          },
          {
            "id": "C",
            "text": "435"
          },
          {
            "id": "D",
            "text": "325"
          }
        ],
        "correctAnswer": "A",
        "hint": "Phép trừ số tròn trăm có nhớ liên tiếp.",
        "explanation": "500 - 165 = 335. Đáp án đúng là A."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 2 x 9 + 5 x 4",
        "titleVi": "Tính giá trị của: 2 x 9 + 5 x 4",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "36"
          },
          {
            "id": "B",
            "text": "38"
          },
          {
            "id": "C",
            "text": "40"
          },
          {
            "id": "D",
            "text": "42"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính 2 x 9 = 18 và 5 x 4 = 20 rồi cộng lại.",
        "explanation": "18 + 20 = 38. Đáp án đúng là B."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 45 : 5 + 16 : 2",
        "titleVi": "Tính giá trị của: 45 : 5 + 16 : 2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "15"
          },
          {
            "id": "B",
            "text": "16"
          },
          {
            "id": "C",
            "text": "17"
          },
          {
            "id": "D",
            "text": "18"
          }
        ],
        "correctAnswer": "C",
        "hint": "45 : 5 = 9; 16 : 2 = 8.",
        "explanation": "9 + 8 = 17. Đáp án đúng là C."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: 100 - x = 37",
        "titleVi": "Tìm số x biết: 100 - x = 37",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "63"
          },
          {
            "id": "B",
            "text": "73"
          },
          {
            "id": "C",
            "text": "67"
          },
          {
            "id": "D",
            "text": "53"
          }
        ],
        "correctAnswer": "A",
        "hint": "Số trừ = số bị trừ - hiệu.",
        "explanation": "x = 100 - 37 = 63. Đáp án đúng là A."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the smallest 3-digit number with all different digits?",
        "titleVi": "Số nhỏ nhất có 3 chữ số khác nhau là số nào?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "101"
          },
          {
            "id": "C",
            "text": "102"
          },
          {
            "id": "D",
            "text": "123"
          }
        ],
        "correctAnswer": "C",
        "hint": "Chữ số hàng trăm nhỏ nhất khác 0 là 1. Hàng chục nhỏ nhất là 0. Hàng đơn vị nhỏ nhất khác 1 và 0 là 2.",
        "explanation": "Số đó là 102. Đáp án đúng là C."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many even numbers are there between 11 and 29?",
        "titleVi": "Có bao nhiêu số chẵn nằm giữa 11 và 29?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8 số"
          },
          {
            "id": "B",
            "text": "9 số"
          },
          {
            "id": "C",
            "text": "10 số"
          },
          {
            "id": "D",
            "text": "7 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số chẵn là 12, 14, 16, 18, 20, 22, 24, 26, 28.",
        "explanation": "Số lượng số chẵn = (28 - 12) : 2 + 1 = 9 số. Đáp án đúng là B."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Which of the following numbers leaves a remainder of 2 when divided by 5?",
        "titleVi": "Số nào dưới đây chia cho 5 dư 2?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "34"
          },
          {
            "id": "B",
            "text": "42"
          },
          {
            "id": "C",
            "text": "55"
          },
          {
            "id": "D",
            "text": "68"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số chia 5 dư 2 có chữ số tận cùng là 2 hoặc 7.",
        "explanation": "Số 42 có tận cùng là 2 nên 42 : 5 = 8 dư 2. Đáp án đúng là B."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert 2m 5cm into centimeters.",
        "titleVi": "Đổi 2m 5cm thành xăng-ti-mét (cm).",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "25 cm"
          },
          {
            "id": "B",
            "text": "205 cm"
          },
          {
            "id": "C",
            "text": "250 cm"
          },
          {
            "id": "D",
            "text": "2005 cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "2m = 200cm. Cộng thêm 5cm.",
        "explanation": "2m 5cm = 200 + 5 = 205cm. Đáp án đúng là B."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 2-digit numbers have 4 as their units digit?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà chữ số hàng đơn vị là 4?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8 số"
          },
          {
            "id": "B",
            "text": "9 số"
          },
          {
            "id": "C",
            "text": "10 số"
          },
          {
            "id": "D",
            "text": "11 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các số đó là: 14, 24, 34, 44, 54, 64, 74, 84, 94.",
        "explanation": "Có tất cả 9 số (tương ứng hàng chục từ 1 đến 9). Đáp án đúng là B."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many triangles are there in the given figure?",
        "titleVi": "Hình vẽ gồm 1 tam giác lớn chia đôi bằng 1 đường thẳng từ đỉnh xuống đáy. Hỏi có bao nhiêu hình tam giác?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "4"
          },
          {
            "id": "D",
            "text": "1"
          }
        ],
        "correctAnswer": "B",
        "hint": "Gồm 2 tam giác đơn và 1 tam giác lớn ghép từ 2 tam giác đơn.",
        "explanation": "2 + 1 = 3 hình tam giác. Đáp án đúng là B."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has a side length of 6cm. Find the perimeter of the square.",
        "titleVi": "Một hình vuông có độ dài cạnh là 6cm. Tính chu vi hình vuông đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20cm"
          },
          {
            "id": "B",
            "text": "24cm"
          },
          {
            "id": "C",
            "text": "36cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chu vi hình vuông = độ dài cạnh x 4.",
        "explanation": "Chu vi = 6 x 4 = 24cm. Đáp án đúng là B."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many vertices (corners) does a rectangular cuboid have?",
        "titleVi": "Một khối hộp chữ nhật có tất cả bao nhiêu đỉnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 đỉnh"
          },
          {
            "id": "B",
            "text": "8 đỉnh"
          },
          {
            "id": "C",
            "text": "12 đỉnh"
          },
          {
            "id": "D",
            "text": "4 đỉnh"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khối hộp chữ nhật có 4 đỉnh ở mặt trên và 4 đỉnh ở mặt dưới.",
        "explanation": "Tổng số đỉnh là 4 + 4 = 8 đỉnh. Đáp án đúng là B."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A quadrilateral has sides measuring 8cm, 9cm, 11cm, and 12cm. Find its perimeter.",
        "titleVi": "Một hình tứ giác có độ dài các cạnh là 8cm, 9cm, 11cm và 12cm. Tính chu vi hình tứ giác đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "38cm"
          },
          {
            "id": "B",
            "text": "40cm"
          },
          {
            "id": "C",
            "text": "42cm"
          },
          {
            "id": "D",
            "text": "44cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chu vi tứ giác bằng tổng độ dài 4 cạnh.",
        "explanation": "8 + 9 + 11 + 12 = (8 + 12) + (9 + 11) = 20 + 20 = 40cm. Đáp án đúng là B."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "The distance from point A to B is 15dm, and from B to C is 25dm. What is the total distance from A to C through B?",
        "titleVi": "Đoạn đường từ A đến B dài 15dm, từ B đến C dài 25dm. Hỏi đoạn đường từ A đến C qua B dài bao nhiêu mét (m)?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3m"
          },
          {
            "id": "B",
            "text": "4m"
          },
          {
            "id": "C",
            "text": "40m"
          },
          {
            "id": "D",
            "text": "5m"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính tổng số dm rồi đổi sang mét: 15 + 25 = 40dm. 10dm = 1m.",
        "explanation": "40dm = 4m. Đáp án đúng là B."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 3-digit numbers can be formed using digits 1, 2, 3 without repeating any digit?",
        "titleVi": "Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ các chữ số 1, 2, 3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 số"
          },
          {
            "id": "B",
            "text": "6 số"
          },
          {
            "id": "C",
            "text": "8 số"
          },
          {
            "id": "D",
            "text": "9 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Hàng trăm có 3 cách chọn, hàng chục có 2 cách, hàng đơn vị có 1 cách.",
        "explanation": "Số lượng số = 3 x 2 x 1 = 6 số (123, 132, 213, 231, 312, 321). Đáp án đúng là B."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 4 black socks and 4 white socks in a drawer. At least how many socks must be taken out in the dark to guarantee at least one matching pair?",
        "titleVi": "Trong ngăn kéo có 4 chiếc tất đen và 4 chiếc tất trắng. Hỏi cần lấy ra ít nhất bao nhiêu chiếc tất trong bóng tối để chắc chắn có 1 đôi tất cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 chiếc"
          },
          {
            "id": "B",
            "text": "3 chiếc"
          },
          {
            "id": "C",
            "text": "4 chiếc"
          },
          {
            "id": "D",
            "text": "5 chiếc"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 1 đen và 1 trắng (2 chiếc khác màu). Chiếc thứ 3 chắc chắn sẽ tạo thành đôi cùng màu.",
        "explanation": "Theo nguyên lí Dirichlet: 2 màu + 1 = 3 chiếc. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In how many ways can 3 kids Alan, Ben, and Carl sit in a row of 3 chairs?",
        "titleVi": "Có bao nhiêu cách xếp 3 bạn Alan, Ben và Carl ngồi vào 3 chiếc ghế xếp thành một hàng ngang?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 cách"
          },
          {
            "id": "B",
            "text": "5 cách"
          },
          {
            "id": "C",
            "text": "6 cách"
          },
          {
            "id": "D",
            "text": "9 cách"
          }
        ],
        "correctAnswer": "C",
        "hint": "Ghế 1 có 3 bạn để chọn, ghế 2 có 2 bạn, ghế 3 có 1 bạn.",
        "explanation": "Số cách xếp = 3 x 2 x 1 = 6 cách. Đáp án đúng là C."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A coin is flipped. Which of the following is certain to happen?",
        "titleVi": "Tung một đồng xu có hai mặt sấp và ngửa. Sự kiện nào sau đây là chắc chắn xảy ra?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Mặt sấp xuất hiện"
          },
          {
            "id": "B",
            "text": "Mặt ngửa xuất hiện"
          },
          {
            "id": "C",
            "text": "Xuất hiện mặt sấp hoặc mặt ngửa"
          },
          {
            "id": "D",
            "text": "Cả hai mặt cùng xuất hiện"
          }
        ],
        "correctAnswer": "C",
        "hint": "Đồng xu chỉ có 2 mặt sấp hoặc ngửa, nên khi tung chắc chắn sẽ rơi vào 1 trong 2 mặt đó.",
        "explanation": "Sự kiện chắc chắn xảy ra là \"Xuất hiện mặt sấp hoặc mặt ngửa\". Đáp án đúng là C."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers have the sum of their digits equal to 5?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà tổng các chữ số của nó bằng 5?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 số"
          },
          {
            "id": "B",
            "text": "5 số"
          },
          {
            "id": "C",
            "text": "6 số"
          },
          {
            "id": "D",
            "text": "7 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Các cặp số có tổng bằng 5: (1,4), (2,3), (3,2), (4,1), (5,0).",
        "explanation": "Các số là: 14, 23, 32, 41, 50 -> Có tất cả 5 số. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g2_3",
    "name": "Đề 3: TIMO Huy Chương Vàng",
    "badge": "Nâng Cao",
    "color": "from-amber-500 to-yellow-600",
    "desc": "Bài toán trồng cây, chu kì chữ cái, giải đấu & Dirichlet nâng cao",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Leo has 14 toy cars. If he gives 3 cars to Sam, they will have the same number of cars. How many cars did Sam have at first?",
        "titleVi": "Leo có 14 chiếc ô tô đồ chơi. Nếu Leo cho Sam 3 chiếc thì số ô tô của hai bạn bằng nhau. Hỏi lúc đầu Sam có bao nhiêu chiếc ô tô?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8 chiếc"
          },
          {
            "id": "B",
            "text": "11 chiếc"
          },
          {
            "id": "C",
            "text": "7 chiếc"
          },
          {
            "id": "D",
            "text": "9 chiếc"
          }
        ],
        "correctAnswer": "A",
        "hint": "Tính số xe của Leo sau khi cho 3 chiếc: 14 - 3 = 11 chiếc. Đó cũng là số xe của Sam sau khi nhận.",
        "explanation": "Sau khi cho, mỗi bạn có 11 chiếc. Vậy lúc đầu Sam có: 11 - 3 = 8 chiếc. Đáp án đúng là A."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Trees are planted along a 20-meter straight path with a tree at both ends. If the distance between adjacent trees is 5 meters, how many trees are planted?",
        "titleVi": "Người ta trồng cây dọc theo một con đường thẳng dài 20m, ở cả hai đầu đường đều có cây. Biết khoảng cách giữa hai cây liền nhau là 5m. Hỏi có tất cả bao nhiêu cây?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 cây"
          },
          {
            "id": "B",
            "text": "5 cây"
          },
          {
            "id": "C",
            "text": "6 cây"
          },
          {
            "id": "D",
            "text": "3 cây"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số cây trồng cả 2 đầu đường = số khoảng cách + 1.",
        "explanation": "Số khoảng cách = 20 : 5 = 4 khoảng cách. Số cây = 4 + 1 = 5 cây. Đáp án đúng là B."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A clock shows 3:00 now. What time will it show 15 hours later?",
        "titleVi": "Đồng hồ chỉ đúng 3 giờ. Hỏi 15 giờ sau đồng hồ sẽ chỉ mấy giờ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 giờ"
          },
          {
            "id": "B",
            "text": "6 giờ"
          },
          {
            "id": "C",
            "text": "7 giờ"
          },
          {
            "id": "D",
            "text": "8 giờ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Mỗi vòng đồng hồ là 12 giờ. 15 giờ = 12 giờ + 3 giờ.",
        "explanation": "3 giờ + 15 giờ = 18 giờ, tương ứng với 6 giờ trên mặt đồng hồ kim (18 - 12 = 6). Đáp án đúng là B."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the 20th letter in the repeating sequence: A, B, C, A, B, C, A, B, C...",
        "titleVi": "Tìm chữ cái thứ 20 trong dãy lặp lại: A, B, C, A, B, C, A, B, C...",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Chữ A"
          },
          {
            "id": "B",
            "text": "Chữ B"
          },
          {
            "id": "C",
            "text": "Chữ C"
          },
          {
            "id": "D",
            "text": "Chữ D"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chu kì lặp lại gồm 3 chữ cái: A (1), B (2), C (3). Lấy 20 chia cho 3 tìm số dư.",
        "explanation": "20 : 3 = 6 nhóm dư 2. Chữ cái thứ 2 trong nhóm là B. Đáp án đúng là B."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Four children A, B, C, D ran a race. A was faster than B. C was faster than A. D was slower than B. Who finished first?",
        "titleVi": "Bốn bạn A, B, C, D thi chạy. A chạy nhanh hơn B. C chạy nhanh hơn A. D chạy chậm hơn B. Hỏi ai về đích đầu tiên?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Bạn A"
          },
          {
            "id": "B",
            "text": "Bạn B"
          },
          {
            "id": "C",
            "text": "Bạn C"
          },
          {
            "id": "D",
            "text": "Bạn D"
          }
        ],
        "correctAnswer": "C",
        "hint": "Xếp thứ tự tốc độ từ nhanh nhất đến chậm nhất: C > A > B > D.",
        "explanation": "Bạn C chạy nhanh nhất và về đích đầu tiên. Đáp án đúng là C."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 45 + 55 + 67 + 33",
        "titleVi": "Tính nhanh: 45 + 55 + 67 + 33",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "190"
          },
          {
            "id": "B",
            "text": "200"
          },
          {
            "id": "C",
            "text": "210"
          },
          {
            "id": "D",
            "text": "180"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhóm (45 + 55) = 100 và (67 + 33) = 100.",
        "explanation": "100 + 100 = 200. Đáp án đúng là B."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 80 - 15 - 25",
        "titleVi": "Tính giá trị của: 80 - 15 - 25",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "45"
          },
          {
            "id": "D",
            "text": "35"
          }
        ],
        "correctAnswer": "A",
        "hint": "80 - (15 + 25) = 80 - 40.",
        "explanation": "80 - 40 = 40. Đáp án đúng là A."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 5 x 9 - 2 x 5",
        "titleVi": "Tính giá trị của: 5 x 9 - 2 x 5",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "35"
          },
          {
            "id": "C",
            "text": "40"
          },
          {
            "id": "D",
            "text": "45"
          }
        ],
        "correctAnswer": "B",
        "hint": "5 x (9 - 2) = 5 x 7 = 35 hoặc tính 45 - 10.",
        "explanation": "45 - 10 = 35. Đáp án đúng là B."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 2 x 4 x 5",
        "titleVi": "Tính giá trị của: 2 x 4 x 5",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "40"
          },
          {
            "id": "C",
            "text": "50"
          },
          {
            "id": "D",
            "text": "60"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nhân 2 x 5 = 10 trước rồi nhân với 4.",
        "explanation": "(2 x 5) x 4 = 10 x 4 = 40. Đáp án đúng là B."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find y: y + 47 = 100",
        "titleVi": "Tìm số y biết: y + 47 = 100",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "53"
          },
          {
            "id": "B",
            "text": "63"
          },
          {
            "id": "C",
            "text": "43"
          },
          {
            "id": "D",
            "text": "57"
          }
        ],
        "correctAnswer": "A",
        "hint": "Số hạng = tổng - số hạng đã biết.",
        "explanation": "y = 100 - 47 = 53. Đáp án đúng là A."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the sum of the smallest 2-digit number and the greatest 3-digit number?",
        "titleVi": "Tổng của số nhỏ nhất có 2 chữ số và số lớn nhất có 3 chữ số là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1009"
          },
          {
            "id": "B",
            "text": "1099"
          },
          {
            "id": "C",
            "text": "1000"
          },
          {
            "id": "D",
            "text": "999"
          }
        ],
        "correctAnswer": "A",
        "hint": "Số nhỏ nhất có 2 chữ số là 10. Số lớn nhất có 3 chữ số là 999.",
        "explanation": "10 + 999 = 1009. Đáp án đúng là A."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the 10th number in the sequence: 3, 6, 9, 12, 15...",
        "titleVi": "Tìm số thứ 10 trong dãy số: 3, 6, 9, 12, 15...",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "27"
          },
          {
            "id": "B",
            "text": "30"
          },
          {
            "id": "C",
            "text": "33"
          },
          {
            "id": "D",
            "text": "36"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số thứ n = 3 x n.",
        "explanation": "Số thứ 10 = 3 x 10 = 30. Đáp án đúng là B."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "If a number is multiplied by 2 and then added to 8, the result is 26. What is the number?",
        "titleVi": "Một số khi nhân với 2 rồi cộng thêm 8 thì được kết quả là 26. Tìm số đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8"
          },
          {
            "id": "B",
            "text": "9"
          },
          {
            "id": "C",
            "text": "10"
          },
          {
            "id": "D",
            "text": "11"
          }
        ],
        "correctAnswer": "B",
        "hint": "Làm phép tính ngược lại từ cuối: (26 - 8) : 2.",
        "explanation": "26 - 8 = 18; 18 : 2 = 9. Đáp án đúng là B."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many digits are used to write all numbers from 1 to 15?",
        "titleVi": "Cần dùng bao nhiêu chữ số để viết tất cả các số từ 1 đến 15?",
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
            "text": "22"
          }
        ],
        "correctAnswer": "C",
        "hint": "Từ 1 đến 9 có 9 số có 1 chữ số (9 chữ số). Từ 10 đến 15 có 6 số có 2 chữ số (12 chữ số).",
        "explanation": "Tổng số chữ số = 9 + 6 x 2 = 9 + 12 = 21 chữ số. Đáp án đúng là C."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert: 3kg 500g = ? g",
        "titleVi": "Đổi: 3kg 500g = ? g",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "350g"
          },
          {
            "id": "B",
            "text": "3050g"
          },
          {
            "id": "C",
            "text": "3500g"
          },
          {
            "id": "D",
            "text": "35000g"
          }
        ],
        "correctAnswer": "C",
        "hint": "1kg = 1000g nên 3kg = 3000g.",
        "explanation": "3000 + 500 = 3500g. Đáp án đúng là C."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many squares are there in a 2x2 grid?",
        "titleVi": "Một lưới ô vuông kích thước 2x2 gồm bao nhiêu hình vuông tất cả?",
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
        "correctAnswer": "B",
        "hint": "Gồm 4 hình vuông nhỏ kích thước 1x1 và 1 hình vuông lớn kích thước 2x2 bao quanh.",
        "explanation": "4 + 1 = 5 hình vuông. Đáp án đúng là B."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "An equilateral triangle has a perimeter of 27cm. Find the length of each side.",
        "titleVi": "Một hình tam giác có 3 cạnh bằng nhau và có chu vi là 27cm. Độ dài mỗi cạnh của tam giác là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8cm"
          },
          {
            "id": "B",
            "text": "9cm"
          },
          {
            "id": "C",
            "text": "10cm"
          },
          {
            "id": "D",
            "text": "7cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Lấy chu vi chia cho 3.",
        "explanation": "Độ dài mỗi cạnh = 27 : 3 = 9cm. Đáp án đúng là B."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many edges does a cube have?",
        "titleVi": "Một khối lập phương có bao nhiêu cạnh?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 cạnh"
          },
          {
            "id": "B",
            "text": "8 cạnh"
          },
          {
            "id": "C",
            "text": "12 cạnh"
          },
          {
            "id": "D",
            "text": "10 cạnh"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mặt trên 4 cạnh, mặt dưới 4 cạnh, 4 cạnh đứng nối.",
        "explanation": "Tổng số cạnh = 4 + 4 + 4 = 12 cạnh. Đáp án đúng là C."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A wire of length 36cm is bent into a square. What is the length of one side of this square?",
        "titleVi": "Một sợi dây thép dài 36cm được uốn thành một hình vuông. Hỏi độ dài một cạnh của hình vuông đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8cm"
          },
          {
            "id": "B",
            "text": "9cm"
          },
          {
            "id": "C",
            "text": "10cm"
          },
          {
            "id": "D",
            "text": "12cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chiều dài sợi dây chính là chu vi hình vuông. Cạnh = chu vi : 4.",
        "explanation": "Cạnh hình vuông = 36 : 4 = 9cm. Đáp án đúng là B."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 20cm. Its width is half of its length. Find its perimeter.",
        "titleVi": "Một hình chữ nhật có chiều dài 20cm, chiều rộng bằng một nửa chiều dài. Tính chu vi hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "50cm"
          },
          {
            "id": "B",
            "text": "60cm"
          },
          {
            "id": "C",
            "text": "70cm"
          },
          {
            "id": "D",
            "text": "40cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chiều rộng = 20 : 2 = 10cm. Chu vi = (20 + 10) x 2.",
        "explanation": "Chu vi = 30 x 2 = 60cm. Đáp án đúng là B."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers have both digits odd?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà cả hai chữ số đều là số lẻ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20 số"
          },
          {
            "id": "B",
            "text": "25 số"
          },
          {
            "id": "C",
            "text": "30 số"
          },
          {
            "id": "D",
            "text": "15 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 5 chữ số lẻ là {1, 3, 5, 7, 9}. Chữ số hàng chục có 5 cách chọn, hàng đơn vị có 5 cách chọn.",
        "explanation": "Số lượng số = 5 x 5 = 25 số. Đáp án đúng là B."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 10 apples in a basket. 3 kids want to share them so that each kid gets at least 1 apple. At most how many apples can one kid get?",
        "titleVi": "Trong giỏ có 10 quả táo. Ba bạn nhỏ chia nhau số táo sao cho mỗi bạn đều nhận được ít nhất 1 quả. Hỏi một bạn có thể nhận được nhiều nhất bao nhiêu quả táo?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7 quả"
          },
          {
            "id": "B",
            "text": "8 quả"
          },
          {
            "id": "C",
            "text": "9 quả"
          },
          {
            "id": "D",
            "text": "6 quả"
          }
        ],
        "correctAnswer": "B",
        "hint": "Để một bạn nhận nhiều nhất, hai bạn còn lại mỗi bạn nhận ít nhất 1 quả.",
        "explanation": "Số táo nhiều nhất cho 1 bạn = 10 - 1 - 1 = 8 quả. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers can be formed using digits 0, 4, 8 without repetition?",
        "titleVi": "Có bao nhiêu số có 2 chữ số khác nhau có thể lập được từ các chữ số 0, 4 và 8?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "4 số"
          },
          {
            "id": "B",
            "text": "5 số"
          },
          {
            "id": "C",
            "text": "6 số"
          },
          {
            "id": "D",
            "text": "3 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Chữ số hàng chục không thể là 0, nên hàng chục chỉ có 2 cách chọn (4 hoặc 8). Hàng đơn vị có 2 cách chọn còn lại.",
        "explanation": "Các số là: 40, 48, 80, 84 -> Có đúng 4 số. Đáp án đúng là A."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "5 students each play one chess match against every other student. How many matches are played in total?",
        "titleVi": "Có 5 bạn học sinh, mỗi bạn đều đấu với mỗi bạn còn lại đúng 1 ván cờ. Hỏi có tất cả bao nhiêu ván cờ diễn ra?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "8 ván"
          },
          {
            "id": "B",
            "text": "10 ván"
          },
          {
            "id": "C",
            "text": "12 ván"
          },
          {
            "id": "D",
            "text": "15 ván"
          }
        ],
        "correctAnswer": "B",
        "hint": "Công thức tính số ván đấu vòng tròn: 5 x 4 : 2.",
        "explanation": "Số ván cờ = 4 + 3 + 2 + 1 = 10 ván cờ. Đáp án đúng là B."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 3 red cards, 3 blue cards, and 3 yellow cards. What is the minimum number of cards to draw without looking to be sure of having 2 cards of the same color?",
        "titleVi": "Có 3 thẻ màu đỏ, 3 thẻ màu xanh và 3 thẻ màu vàng. Cần rút ít nhất bao nhiêu thẻ mà không nhìn để chắc chắn có 2 thẻ cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 thẻ"
          },
          {
            "id": "B",
            "text": "4 thẻ"
          },
          {
            "id": "C",
            "text": "5 thẻ"
          },
          {
            "id": "D",
            "text": "6 thẻ"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất rút 3 thẻ thuộc 3 màu khác nhau (Đỏ, Xanh, Vàng). Thẻ thứ 4 chắc chắn trùng màu với 1 trong 3 thẻ trước.",
        "explanation": "Nguyên lí Dirichlet: 3 màu + 1 = 4 thẻ. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g2_4",
    "name": "Đề 4: TIMO Tinh Hoa Đột Phá",
    "badge": "Tinh Hoa",
    "color": "from-purple-500 to-indigo-600",
    "desc": "Ốc sên leo tường, đếm chữ số trang sách, nguyên lí chim bồ câu",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A snail climbs up a 10-meter wall. Each day it climbs up 3 meters, but each night it slides down 2 meters. How many days will it take for the snail to reach the top?",
        "titleVi": "Một chú ốc sên bò lên một bức tường cao 10m. Mỗi ngày chú bò lên được 3m, nhưng mỗi đêm lại bị tụt xuống 2m. Hỏi sau bao nhiêu ngày chú ốc sên sẽ bò lên đến đỉnh tường?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "7 ngày"
          },
          {
            "id": "B",
            "text": "8 ngày"
          },
          {
            "id": "C",
            "text": "9 ngày"
          },
          {
            "id": "D",
            "text": "10 ngày"
          }
        ],
        "correctAnswer": "B",
        "hint": "Mỗi ngày đêm chú leo được 1m. Khi đạt đến 7m (hết ngày thứ 7), sang ngày thứ 8 chú leo thêm 3m là tới đỉnh (7 + 3 = 10m) và không bị tụt nữa!",
        "explanation": "Sau 7 ngày đêm, ốc sên ở độ cao 7m. Sang ban ngày thứ 8, ốc sên leo thêm 3m lên đúng 10m tới đỉnh tường. Vậy mất đúng 8 ngày. Đáp án đúng là B."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a family, there are 1 father, 1 mother, 2 sons, and each son has 1 sister. How many people are there in the family in total?",
        "titleVi": "Trong một gia đình có 1 bố, 1 mẹ, 2 người con trai và mỗi người con trai đều có 1 người em gái. Hỏi gia đình đó có tất cả bao nhiêu người?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6 người"
          },
          {
            "id": "B",
            "text": "5 người"
          },
          {
            "id": "C",
            "text": "7 người"
          },
          {
            "id": "D",
            "text": "8 người"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cả 2 người con trai đều dùng chung 1 người em gái!",
        "explanation": "Gia đình gồm: 1 bố + 1 mẹ + 2 con trai + 1 con gái = 5 người. Đáp án đúng là B."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A book has 50 pages. How many times does the digit \"3\" appear in the page numbers from 1 to 50?",
        "titleVi": "Một cuốn sách có 50 trang được đánh số từ 1 đến 50. Hỏi chữ số 3 xuất hiện bao nhiêu lần trong các số trang?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14 lần"
          },
          {
            "id": "B",
            "text": "15 lần"
          },
          {
            "id": "C",
            "text": "16 lần"
          },
          {
            "id": "D",
            "text": "13 lần"
          }
        ],
        "correctAnswer": "B",
        "hint": "Chữ số 3 ở hàng đơn vị: 3, 13, 23, 33, 43 (5 lần). Chữ số 3 ở hàng chục: 30, 31, 32, 33, 34, 35, 36, 37, 38, 39 (10 lần). Riêng số 33 có 2 chữ số 3.",
        "explanation": "Tổng số lần xuất hiện = 5 + 10 = 15 lần. Đáp án đúng là B."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The day before yesterday was Tuesday. What day of the week will it be 3 days after tomorrow?",
        "titleVi": "Hôm kia là Thứ Ba. Hỏi 3 ngày sau ngày mai sẽ là thứ mấy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Thứ Hai"
          },
          {
            "id": "B",
            "text": "Thứ Ba"
          },
          {
            "id": "C",
            "text": "Chủ Nhật"
          },
          {
            "id": "D",
            "text": "Thứ Bảy"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hôm kia là Thứ Ba => Hôm qua là Thứ Tư => Hôm nay là Thứ Năm => Ngày mai là Thứ Sáu. 3 ngày sau ngày mai là Thứ Sáu + 3 ngày = Thứ Hai.",
        "explanation": "Thứ Sáu + 3 ngày là Thứ Hai. Đáp án đúng là A."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 10 mice in 10 minutes?",
        "titleVi": "Biết 3 con mèo bắt được 3 con chuột trong 3 phút. Hỏi cần bao nhiêu con mèo để bắt được 10 con chuột trong 10 phút?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "10 con"
          },
          {
            "id": "B",
            "text": "3 con"
          },
          {
            "id": "C",
            "text": "1 con"
          },
          {
            "id": "D",
            "text": "30 con"
          }
        ],
        "correctAnswer": "B",
        "hint": "1 con mèo bắt 1 con chuột mất 3 phút. Trong 10 phút, 1 con mèo bắt được 3 con chuột.",
        "explanation": "3 con mèo trong 10 phút bắt được 10 con chuột. Đáp án đúng là B."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 345 + 128 - 45",
        "titleVi": "Tính nhanh: 345 + 128 - 45",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "428"
          },
          {
            "id": "B",
            "text": "438"
          },
          {
            "id": "C",
            "text": "418"
          },
          {
            "id": "D",
            "text": "408"
          }
        ],
        "correctAnswer": "A",
        "hint": "Lấy (345 - 45) + 128 = 300 + 128.",
        "explanation": "300 + 128 = 428. Đáp án đúng là A."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 100 - 24 - 26",
        "titleVi": "Tính giá trị của: 100 - 24 - 26",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "40"
          },
          {
            "id": "B",
            "text": "50"
          },
          {
            "id": "C",
            "text": "60"
          },
          {
            "id": "D",
            "text": "48"
          }
        ],
        "correctAnswer": "B",
        "hint": "100 - (24 + 26) = 100 - 50.",
        "explanation": "100 - 50 = 50. Đáp án đúng là B."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 5 x 8 + 2 x 8",
        "titleVi": "Tính nhanh: 5 x 8 + 2 x 8",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "56"
          },
          {
            "id": "B",
            "text": "64"
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
        "correctAnswer": "A",
        "hint": "Áp dụng tính chất phân phối: (5 + 2) x 8 = 7 x 8.",
        "explanation": "7 x 8 = 56. Đáp án đúng là A."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 50 : 5 - 14 : 2",
        "titleVi": "Tính giá trị của: 50 : 5 - 14 : 2",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2"
          },
          {
            "id": "B",
            "text": "3"
          },
          {
            "id": "C",
            "text": "4"
          },
          {
            "id": "D",
            "text": "5"
          }
        ],
        "correctAnswer": "B",
        "hint": "50 : 5 = 10; 14 : 2 = 7.",
        "explanation": "10 - 7 = 3. Đáp án đúng là B."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: 2 x x + 15 = 27",
        "titleVi": "Tìm x biết: 2 x x + 15 = 27",
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
            "text": "7"
          },
          {
            "id": "D",
            "text": "8"
          }
        ],
        "correctAnswer": "B",
        "hint": "2 x x = 27 - 15 = 12 => x = 12 : 2.",
        "explanation": "x = 12 : 2 = 6. Đáp án đúng là B."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the remainder when 38 is divided by 5?",
        "titleVi": "Số 38 chia cho 5 được số dư là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1"
          },
          {
            "id": "B",
            "text": "2"
          },
          {
            "id": "C",
            "text": "3"
          },
          {
            "id": "D",
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Nhẩm 5 x 7 = 35. 38 - 35 = 3.",
        "explanation": "38 : 5 = 7 dư 3. Đáp án đúng là C."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 2-digit numbers are divisible by 5?",
        "titleVi": "Có bao nhiêu số có 2 chữ số chia hết cho 5?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18 số"
          },
          {
            "id": "B",
            "text": "19 số"
          },
          {
            "id": "C",
            "text": "20 số"
          },
          {
            "id": "D",
            "text": "17 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Các số từ 10 đến 95 có tận cùng là 0 hoặc 5.",
        "explanation": "Số lượng = (95 - 10) : 5 + 1 = 17 + 1 = 18 số. Đáp án đúng là A."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all odd numbers from 1 to 9.",
        "titleVi": "Tính tổng của tất cả các số lẻ từ 1 đến 9.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20"
          },
          {
            "id": "B",
            "text": "25"
          },
          {
            "id": "C",
            "text": "30"
          },
          {
            "id": "D",
            "text": "16"
          }
        ],
        "correctAnswer": "B",
        "hint": "1 + 3 + 5 + 7 + 9 = (1 + 9) + (3 + 7) + 5 = 10 + 10 + 5.",
        "explanation": "Tổng = 25. Đáp án đúng là B."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "A number has 8 hundreds, 0 tens, and 4 units. How is this number written?",
        "titleVi": "Một số gồm 8 trăm, 0 chục và 4 đơn vị được viết là:",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "84"
          },
          {
            "id": "B",
            "text": "804"
          },
          {
            "id": "C",
            "text": "840"
          },
          {
            "id": "D",
            "text": "8004"
          }
        ],
        "correctAnswer": "B",
        "hint": "Viết theo thứ tự từ hàng trăm đến hàng đơn vị: 804.",
        "explanation": "Số đó là 804. Đáp án đúng là B."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "If today is the 12th day of the month, which date was exactly 2 weeks ago?",
        "titleVi": "Nếu hôm nay là ngày 12 của một tháng, thì đúng 2 tuần trước là ngày mùng mấy?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Ngày 28 tháng trước"
          },
          {
            "id": "B",
            "text": "Ngày 26 tháng trước"
          },
          {
            "id": "C",
            "text": "Ngày 29 tháng trước"
          },
          {
            "id": "D",
            "text": "Ngày 27 tháng trước"
          }
        ],
        "correctAnswer": "A",
        "hint": "2 tuần = 14 ngày. Lùi lại 12 ngày là hết tháng, lùi thêm 2 ngày vào tháng trước (tháng trước có 30 hoặc 31 ngày, trung bình là ngày 28).",
        "explanation": "Đáp án đúng là A."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many rectangles are there in a 1x3 grid?",
        "titleVi": "Một băng giấy gồm 3 ô vuông xếp liền nhau thành hàng ngang có tất cả bao nhiêu hình chữ nhật (kể cả hình vuông)?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3"
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
            "text": "4"
          }
        ],
        "correctAnswer": "C",
        "hint": "Gồm 3 hình kích thước 1x1, 2 hình kích thước 1x2, và 1 hình kích thước 1x3.",
        "explanation": "3 + 2 + 1 = 6 hình. Đáp án đúng là C."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a perimeter of 30cm. The length is 9cm. What is the width of this rectangle?",
        "titleVi": "Một hình chữ nhật có chu vi là 30cm, chiều dài là 9cm. Tính chiều rộng của hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5cm"
          },
          {
            "id": "B",
            "text": "6cm"
          },
          {
            "id": "C",
            "text": "7cm"
          },
          {
            "id": "D",
            "text": "8cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Nửa chu vi = 30 : 2 = 15cm. Chiều rộng = 15 - 9 = 6cm.",
        "explanation": "Chiều rộng = 6cm. Đáp án đúng là B."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many right angles does a rectangle have?",
        "titleVi": "Một hình chữ nhật có tất cả bao nhiêu góc vuông?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 góc vuông"
          },
          {
            "id": "B",
            "text": "4 góc vuông"
          },
          {
            "id": "C",
            "text": "6 góc vuông"
          },
          {
            "id": "D",
            "text": "8 góc vuông"
          }
        ],
        "correctAnswer": "B",
        "hint": "Hình chữ nhật có 4 góc ở 4 đỉnh đều là góc vuông.",
        "explanation": "Hình chữ nhật có 4 góc vuông. Đáp án đúng là B."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square piece of paper has a side of 10cm. It is cut into 2 equal rectangles. What is the perimeter of each smaller rectangle?",
        "titleVi": "Một tờ giấy hình vuông có cạnh dài 10cm được cắt thành 2 hình chữ nhật bằng nhau. Tính chu vi của mỗi hình chữ nhật nhỏ đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "20cm"
          },
          {
            "id": "B",
            "text": "25cm"
          },
          {
            "id": "C",
            "text": "30cm"
          },
          {
            "id": "D",
            "text": "35cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Mỗi hình chữ nhật nhỏ có chiều dài 10cm và chiều rộng 10 : 2 = 5cm.",
        "explanation": "Chu vi = (10 + 5) x 2 = 15 x 2 = 30cm. Đáp án đúng là C."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "Find the total length of the edges of a cube with side 3cm.",
        "titleVi": "Tính tổng độ dài tất cả các cạnh của một khối lập phương có cạnh bằng 3cm.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "24cm"
          },
          {
            "id": "B",
            "text": "36cm"
          },
          {
            "id": "C",
            "text": "48cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khối lập phương có đúng 12 cạnh bằng nhau.",
        "explanation": "Tổng độ dài = 12 x 3 = 36cm. Đáp án đúng là B."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers can be formed using only digits 1 and 2 (digits can be repeated)?",
        "titleVi": "Có bao nhiêu số có 2 chữ số có thể lập được chỉ từ hai chữ số 1 và 2 (các chữ số có thể lặp lại)?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 số"
          },
          {
            "id": "B",
            "text": "3 số"
          },
          {
            "id": "C",
            "text": "4 số"
          },
          {
            "id": "D",
            "text": "5 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hàng chục có 2 cách chọn, hàng đơn vị có 2 cách chọn.",
        "explanation": "Các số là: 11, 12, 21, 22 -> Có đúng 4 số (2 x 2 = 4). Đáp án đúng là C."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 12 candies of 3 different flavors (Strawberry, Orange, Apple) with 4 of each flavor. At least how many candies must be picked to ensure getting 2 candies of the same flavor?",
        "titleVi": "Có 12 cái kẹo gồm 3 vị khác nhau (Dâu, Cam, Táo), mỗi vị có 4 cái. Cần lấy ít nhất bao nhiêu cái kẹo để chắc chắn có 2 cái cùng vị?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "3 cái"
          },
          {
            "id": "B",
            "text": "4 cái"
          },
          {
            "id": "C",
            "text": "5 cái"
          },
          {
            "id": "D",
            "text": "6 cái"
          }
        ],
        "correctAnswer": "B",
        "hint": "Có 3 vị kẹo khác nhau. Trường hợp xấu nhất lấy 3 cái thuộc 3 vị khác nhau. Cái thứ 4 chắc chắn trùng.",
        "explanation": "Nguyên lí Dirichlet: 3 + 1 = 4 cái kẹo. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different ways can you make 10 coins by combining 2-coin and 5-coin values?",
        "titleVi": "Có bao nhiêu cách đổi tờ 10 nghìn đồng thành các đồng xu 2 nghìn và 5 nghìn đồng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "1 cách"
          },
          {
            "id": "B",
            "text": "2 cách"
          },
          {
            "id": "C",
            "text": "3 cách"
          },
          {
            "id": "D",
            "text": "4 cách"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cách 1: Năm đồng 2 nghìn (5 x 2 = 10). Cách 2: Hai đồng 5 nghìn (2 x 5 = 10).",
        "explanation": "Có đúng 2 cách đổi. Đáp án đúng là B."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In a group of 13 children, which of the following statements must be true?",
        "titleVi": "Trong một nhóm gồm 13 bạn nhỏ, khẳng định nào sau đây là chắc chắn đúng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "Có ít nhất 2 bạn sinh cùng tháng"
          },
          {
            "id": "B",
            "text": "Mỗi bạn sinh vào một tháng khác nhau"
          },
          {
            "id": "C",
            "text": "Có ít nhất 3 bạn sinh cùng tháng"
          },
          {
            "id": "D",
            "text": "Tất cả các bạn sinh vào mùa hè"
          }
        ],
        "correctAnswer": "A",
        "hint": "Một năm chỉ có đúng 12 tháng. Theo nguyên lí Dirichlet, có 13 bạn nên chắc chắn có ít nhất 2 bạn sinh cùng tháng.",
        "explanation": "13 bạn chia vào 12 tháng => Chắc chắn có ít nhất 2 bạn sinh cùng tháng. Đáp án đúng là A."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many numbers between 1 and 20 are divisible by both 2 and 3?",
        "titleVi": "Có bao nhiêu số từ 1 đến 20 vừa chia hết cho 2 vừa chia hết cho 3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 số"
          },
          {
            "id": "B",
            "text": "3 số"
          },
          {
            "id": "C",
            "text": "4 số"
          },
          {
            "id": "D",
            "text": "5 số"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số vừa chia hết cho 2 vừa chia hết cho 3 thì chia hết cho 6.",
        "explanation": "Các số đó là: 6, 12, 18 -> Có tất cả 3 số. Đáp án đúng là B."
      }
    ]
  },
  {
    "id": "exam_g2_random",
    "name": "Đề 5: Luyện Đề Ngẫu Nhiên 🎲",
    "badge": "Vô Hạn",
    "color": "from-rose-400 to-red-500",
    "desc": "Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 2",
    "questions": []
  }
];

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
