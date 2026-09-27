// Ngân hàng đề thi TIMO Lớp 3 chuẩn Quốc tế
// Bao gồm 4 Bộ Đề Thi Chính Thức & Trình Tạo Đề Ngẫu Nhiên Vô Hạn

export const TIMO_EXAMS_GRADE_3 = [
  {
    "id": "exam_g3_1",
    "name": "Đề 1: TIMO Lớp 3 Quốc Gia",
    "badge": "Chuẩn 2025",
    "color": "from-emerald-400 to-teal-500",
    "desc": "Đề thi chính thức Vòng Chung kết Quốc gia Lớp 3",
    "questions": [
      {
        "id": 1,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A tree trunk is 12 meters long. It is sawed into 2-meter logs. If each saw cut takes 3 minutes, how many minutes will it take to finish?",
        "titleVi": "Một khúc gỗ dài 12m được cưa thành các đoạn ngắn dài 2m. Biết mỗi lần cưa mất 3 phút. Hỏi cưa xong khúc gỗ mất bao nhiêu phút?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18 phút"
          },
          {
            "id": "B",
            "text": "15 phút"
          },
          {
            "id": "C",
            "text": "12 phút"
          },
          {
            "id": "D",
            "text": "21 phút"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính số đoạn gỗ trước: 12 : 2 = 6 đoạn. Số lần cưa = số đoạn - 1 = 5 lần.",
        "explanation": "Số đoạn gỗ = 12 : 2 = 6 đoạn. Số lần cưa = 6 - 1 = 5 lần. Thời gian cưa = 5 x 3 = 15 phút. Đáp án đúng là B."
      },
      {
        "id": 2,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The sum of ages of Mary and her mother is 40. Her mother is 30 years older than Mary. How old is Mary?",
        "titleVi": "Tổng số tuổi của hai mẹ con Mary là 40 tuổi. Mẹ hơn Mary 30 tuổi. Hỏi Mary bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 tuổi"
          },
          {
            "id": "B",
            "text": "10 tuổi"
          },
          {
            "id": "C",
            "text": "8 tuổi"
          },
          {
            "id": "D",
            "text": "6 tuổi"
          }
        ],
        "correctAnswer": "A",
        "hint": "Bài toán tìm hai số khi biết Tổng và Hiệu: Tuổi con = (Tổng - Hiệu) : 2.",
        "explanation": "Tuổi của Mary = (40 - 30) : 2 = 5 tuổi. Đáp án đúng là A."
      },
      {
        "id": 3,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Today is Tuesday, March 3rd. What day of the week is March 24th of the same year?",
        "titleVi": "Hôm nay là Thứ Ba ngày 3 tháng 3. Hỏi ngày 24 tháng 3 cùng năm đó là thứ mấy?",
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
            "text": "Thứ Tư"
          },
          {
            "id": "D",
            "text": "Thứ Năm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khoảng cách giữa hai ngày là 24 - 3 = 21 ngày. 21 chia hết cho 7 nên đúng tròn 3 tuần.",
        "explanation": "21 : 7 = 3 tuần tròn nên ngày 24 tháng 3 cũng rơi vào đúng Thứ Ba. Đáp án đúng là B."
      },
      {
        "id": 4,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a basketball tournament, each win gives 3 points, a draw gives 1 point, and a loss gives 0 points. Team Tiger won 4 matches, drew 2, and lost 1. How many points did they get?",
        "titleVi": "Trong một giải đấu, mỗi trận thắng được 3 điểm, hòa được 1 điểm, thua được 0 điểm. Đội Hổ thắng 4 trận, hòa 2 trận và thua 1 trận. Hỏi đội Hổ được tất cả bao nhiêu điểm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 điểm"
          },
          {
            "id": "B",
            "text": "13 điểm"
          },
          {
            "id": "C",
            "text": "14 điểm"
          },
          {
            "id": "D",
            "text": "15 điểm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính điểm từng loại: Thắng = 4 x 3 = 12 điểm; Hòa = 2 x 1 = 2 điểm; Thua = 0 điểm.",
        "explanation": "Tổng số điểm = 12 + 2 + 0 = 14 điểm. Đáp án đúng là C."
      },
      {
        "id": 5,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 1, 4, 9, 16, 25, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 1, 4, 9, 16, 25, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "34"
          },
          {
            "id": "C",
            "text": "36"
          },
          {
            "id": "D",
            "text": "49"
          }
        ],
        "correctAnswer": "C",
        "hint": "Nhận xét: 1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25...",
        "explanation": "Số tiếp theo là 6 x 6 = 36. Đáp án đúng là C."
      },
      {
        "id": 6,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 125 x 4 + 250",
        "titleVi": "Tính giá trị của: 125 x 4 + 250",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "700"
          },
          {
            "id": "B",
            "text": "750"
          },
          {
            "id": "C",
            "text": "800"
          },
          {
            "id": "D",
            "text": "650"
          }
        ],
        "correctAnswer": "B",
        "hint": "125 x 4 = 500, sau đó 500 + 250 = 750.",
        "explanation": "125 x 4 + 250 = 500 + 250 = 750. Đáp án đúng là B."
      },
      {
        "id": 7,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 848 : 4 - 112",
        "titleVi": "Tính giá trị của: 848 : 4 - 112",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "102"
          },
          {
            "id": "C",
            "text": "104"
          },
          {
            "id": "D",
            "text": "110"
          }
        ],
        "correctAnswer": "A",
        "hint": "848 : 4 = 212, sau đó 212 - 112 = 100.",
        "explanation": "212 - 112 = 100. Đáp án đúng là A."
      },
      {
        "id": 8,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 7 x 8 + 6 x 9",
        "titleVi": "Tính giá trị của: 7 x 8 + 6 x 9",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "110"
          },
          {
            "id": "C",
            "text": "112"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "7 x 8 = 56; 6 x 9 = 54; 56 + 54 = 110.",
        "explanation": "56 + 54 = 110. Đáp án đúng là B."
      },
      {
        "id": 9,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: (36 + 28) : 8 + 15",
        "titleVi": "Tính giá trị của: (36 + 28) : 8 + 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "21"
          },
          {
            "id": "B",
            "text": "22"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính trong ngoặc trước: 36 + 28 = 64. 64 : 8 = 8. 8 + 15 = 23.",
        "explanation": "64 : 8 + 15 = 8 + 15 = 23. Đáp án đúng là C."
      },
      {
        "id": 10,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: x : 6 = 145 (remainder 3)",
        "titleVi": "Tìm x biết: x : 6 = 145 (dư 3)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "870"
          },
          {
            "id": "B",
            "text": "873"
          },
          {
            "id": "C",
            "text": "867"
          },
          {
            "id": "D",
            "text": "875"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số bị chia = Thương x Số chia + Số dư: x = 145 x 6 + 3.",
        "explanation": "145 x 6 = 870; 870 + 3 = 873. Đáp án đúng là B."
      },
      {
        "id": 11,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "In a division with a divisor of 8, what is the greatest possible remainder?",
        "titleVi": "Trong một phép chia có số chia là 8, số dư lớn nhất có thể có là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "7"
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
        "hint": "Số dư luôn nhỏ hơn số chia. Số lớn nhất nhỏ hơn 8 là 7.",
        "explanation": "Số dư lớn nhất là 7. Đáp án đúng là B."
      },
      {
        "id": 12,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers have 0 as their units digit?",
        "titleVi": "Có bao nhiêu số có 3 chữ số mà chữ số hàng đơn vị là 0?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 số"
          },
          {
            "id": "B",
            "text": "100 số"
          },
          {
            "id": "C",
            "text": "80 số"
          },
          {
            "id": "D",
            "text": "99 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hàng trăm có 9 cách chọn (1-9), hàng chục có 10 cách chọn (0-9), hàng đơn vị có 1 cách (0).",
        "explanation": "9 x 10 x 1 = 90 số (từ 100 đến 990). Đáp án đúng là A."
      },
      {
        "id": 13,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all numbers in the sequence: 5, 10, 15, 20, 25, 30, 35, 40.",
        "titleVi": "Tính tổng dãy số cách đều: 5 + 10 + 15 + 20 + 25 + 30 + 35 + 40.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "170"
          },
          {
            "id": "B",
            "text": "180"
          },
          {
            "id": "C",
            "text": "190"
          },
          {
            "id": "D",
            "text": "200"
          }
        ],
        "correctAnswer": "B",
        "hint": "Ghép cặp: (5 + 40) + (10 + 35) + (15 + 30) + (20 + 25) = 45 x 4 = 180.",
        "explanation": "Tổng = 180. Đáp án đúng là B."
      },
      {
        "id": 14,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the last digit of the product: 1 x 3 x 5 x 7 x 9 x 11 x 13?",
        "titleVi": "Chữ số tận cùng của tích các số lẻ: 1 x 3 x 5 x 7 x 9 x 11 x 13 là chữ số nào?",
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
            "text": "5"
          },
          {
            "id": "D",
            "text": "7"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tích của số 5 với bất kì số lẻ nào đều có chữ số tận cùng là 5.",
        "explanation": "Chữ số tận cùng là 5. Đáp án đúng là C."
      },
      {
        "id": 15,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert: 4km 75m = ? m",
        "titleVi": "Đổi: 4km 75m = ? m",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "475m"
          },
          {
            "id": "B",
            "text": "4075m"
          },
          {
            "id": "C",
            "text": "4750m"
          },
          {
            "id": "D",
            "text": "40075m"
          }
        ],
        "correctAnswer": "B",
        "hint": "1km = 1000m => 4km = 4000m. 4000 + 75 = 4075m.",
        "explanation": "4075m. Đáp án đúng là B."
      },
      {
        "id": 16,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 15cm and a width of 8cm. Find the area of the rectangle.",
        "titleVi": "Một hình chữ nhật có chiều dài 15cm và chiều rộng 8cm. Tính diện tích hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "110 cm²"
          },
          {
            "id": "B",
            "text": "120 cm²"
          },
          {
            "id": "C",
            "text": "130 cm²"
          },
          {
            "id": "D",
            "text": "46 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình chữ nhật = chiều dài x chiều rộng.",
        "explanation": "Diện tích = 15 x 8 = 120 cm². Đáp án đúng là B."
      },
      {
        "id": 17,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 64 cm². What is the perimeter of this square?",
        "titleVi": "Một hình vuông có diện tích là 64 cm². Tính chu vi hình vuông đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "28cm"
          },
          {
            "id": "B",
            "text": "32cm"
          },
          {
            "id": "C",
            "text": "36cm"
          },
          {
            "id": "D",
            "text": "40cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh x Cạnh = 64 => Cạnh = 8cm (vì 8 x 8 = 64). Chu vi = 8 x 4 = 32cm.",
        "explanation": "Chu vi = 32cm. Đáp án đúng là B."
      },
      {
        "id": 18,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "The radius of a circle is 7cm. What is the diameter of this circle?",
        "titleVi": "Bán kính của một hình tròn là 7cm. Đường kính của hình tròn đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14cm"
          },
          {
            "id": "B",
            "text": "21cm"
          },
          {
            "id": "C",
            "text": "28cm"
          },
          {
            "id": "D",
            "text": "3.5cm"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đường kính gấp đôi bán kính: d = 2 x r.",
        "explanation": "Đường kính = 7 x 2 = 14cm. Đáp án đúng là A."
      },
      {
        "id": 19,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many small 1cm cubes are needed to build a larger 3x3x3 cube?",
        "titleVi": "Cần bao nhiêu khối lập phương nhỏ cạnh 1cm để xếp thành một khối lập phương lớn kích thước 3x3x3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "9 khối"
          },
          {
            "id": "B",
            "text": "18 khối"
          },
          {
            "id": "C",
            "text": "27 khối"
          },
          {
            "id": "D",
            "text": "36 khối"
          }
        ],
        "correctAnswer": "C",
        "hint": "Thể tích = 3 x 3 x 3 = 27 khối nhỏ.",
        "explanation": "27 khối. Đáp án đúng là C."
      },
      {
        "id": 20,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A wire of length 48cm is bent into an equilateral triangle. What is the length of one side?",
        "titleVi": "Một đoạn dây dài 48cm được uốn thành một hình tam giác đều có 3 cạnh bằng nhau. Hỏi độ dài mỗi cạnh là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12cm"
          },
          {
            "id": "B",
            "text": "14cm"
          },
          {
            "id": "C",
            "text": "16cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Độ dài mỗi cạnh = Chu vi : 3 = 48 : 3.",
        "explanation": "48 : 3 = 16cm. Đáp án đúng là C."
      },
      {
        "id": 21,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 3-digit numbers can be formed using digits 2, 4, 6, 8 without repetition?",
        "titleVi": "Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ 4 chữ số: 2, 4, 6, 8?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 số"
          },
          {
            "id": "B",
            "text": "18 số"
          },
          {
            "id": "C",
            "text": "24 số"
          },
          {
            "id": "D",
            "text": "36 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hàng trăm có 4 cách chọn, hàng chục có 3 cách, hàng đơn vị có 2 cách.",
        "explanation": "4 x 3 x 2 = 24 số. Đáp án đúng là C."
      },
      {
        "id": 22,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 6 red, 6 blue, and 6 yellow balls. At least how many balls must be drawn without looking to ensure getting 3 balls of the same color?",
        "titleVi": "Trong hộp có 6 bi đỏ, 6 bi xanh và 6 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 3 viên bi cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 viên"
          },
          {
            "id": "B",
            "text": "7 viên"
          },
          {
            "id": "C",
            "text": "8 viên"
          },
          {
            "id": "D",
            "text": "9 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 2 đỏ + 2 xanh + 2 vàng = 6 viên. Viên thứ 7 chắc chắn tạo thành 3 viên cùng màu.",
        "explanation": "Theo nguyên lí Dirichlet: 3 x 2 + 1 = 7 viên. Đáp án đúng là B."
      },
      {
        "id": 23,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 3 roads from city A to B, and 4 roads from city B to C. How many different round trips can be made from A to C and back to A without using any road twice?",
        "titleVi": "Có 3 con đường từ A đến B và 4 con đường từ B đến C. Có bao nhiêu cách đi từ A đến C rồi quay về A mà không đi qua con đường nào quá 1 lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72 cách"
          },
          {
            "id": "B",
            "text": "36 cách"
          },
          {
            "id": "C",
            "text": "48 cách"
          },
          {
            "id": "D",
            "text": "24 cách"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đi: 3 x 4 = 12 cách. Về: 3 x 2 = 6 cách (không lặp đường đã đi). Tổng = 12 x 6 = 72 cách.",
        "explanation": "72 cách. Đáp án đúng là A."
      },
      {
        "id": 24,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In a group of 37 students, at least how many were born in the same month?",
        "titleVi": "Trong một nhóm gồm 37 học sinh, chắc chắn có ít nhất bao nhiêu bạn sinh vào cùng một tháng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 bạn"
          },
          {
            "id": "B",
            "text": "3 bạn"
          },
          {
            "id": "C",
            "text": "4 bạn"
          },
          {
            "id": "D",
            "text": "5 bạn"
          }
        ],
        "correctAnswer": "C",
        "hint": "Một năm có 12 tháng. 37 : 12 = 3 dư 1. Theo nguyên lí Dirichlet, có ít nhất 3 + 1 = 4 bạn sinh cùng tháng.",
        "explanation": "3 + 1 = 4 bạn. Đáp án đúng là C."
      },
      {
        "id": 25,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers are there where the tens digit is greater than the units digit?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45 số"
          },
          {
            "id": "B",
            "text": "50 số"
          },
          {
            "id": "C",
            "text": "36 số"
          },
          {
            "id": "D",
            "text": "40 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nếu hàng chục là 1: có số 10 (1 số); hàng chục là 2: 20, 21 (2 số)... hàng chục là 9: 90..98 (9 số). Tổng = 1 + 2 + ... + 9 = 45 số.",
        "explanation": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 số. Đáp án đúng là A."
      }
    ]
  },
  {
    "id": "exam_g3_2",
    "name": "Đề 2: TIMO Thử Thách Quốc Tế",
    "badge": "Quốc Tế",
    "color": "from-blue-500 to-indigo-600",
    "desc": "Diện tích hình vuông, chữ số tận cùng, bài toán cưa gỗ & bốc kẹo",
    "questions": [
      {
        "id": 26,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A tree trunk is 12 meters long. It is sawed into 2-meter logs. If each saw cut takes 3 minutes, how many minutes will it take to finish?",
        "titleVi": "Một khúc gỗ dài 12m được cưa thành các đoạn ngắn dài 2m. Biết mỗi lần cưa mất 3 phút. Hỏi cưa xong khúc gỗ mất bao nhiêu phút?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18 phút"
          },
          {
            "id": "B",
            "text": "15 phút"
          },
          {
            "id": "C",
            "text": "12 phút"
          },
          {
            "id": "D",
            "text": "21 phút"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính số đoạn gỗ trước: 12 : 2 = 6 đoạn. Số lần cưa = số đoạn - 1 = 5 lần.",
        "explanation": "Số đoạn gỗ = 12 : 2 = 6 đoạn. Số lần cưa = 6 - 1 = 5 lần. Thời gian cưa = 5 x 3 = 15 phút. Đáp án đúng là B."
      },
      {
        "id": 27,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The sum of ages of Mary and her mother is 40. Her mother is 30 years older than Mary. How old is Mary?",
        "titleVi": "Tổng số tuổi của hai mẹ con Mary là 40 tuổi. Mẹ hơn Mary 30 tuổi. Hỏi Mary bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 tuổi"
          },
          {
            "id": "B",
            "text": "10 tuổi"
          },
          {
            "id": "C",
            "text": "8 tuổi"
          },
          {
            "id": "D",
            "text": "6 tuổi"
          }
        ],
        "correctAnswer": "A",
        "hint": "Bài toán tìm hai số khi biết Tổng và Hiệu: Tuổi con = (Tổng - Hiệu) : 2.",
        "explanation": "Tuổi của Mary = (40 - 30) : 2 = 5 tuổi. Đáp án đúng là A."
      },
      {
        "id": 28,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Today is Tuesday, March 3rd. What day of the week is March 24th of the same year?",
        "titleVi": "Hôm nay là Thứ Ba ngày 3 tháng 3. Hỏi ngày 24 tháng 3 cùng năm đó là thứ mấy?",
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
            "text": "Thứ Tư"
          },
          {
            "id": "D",
            "text": "Thứ Năm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khoảng cách giữa hai ngày là 24 - 3 = 21 ngày. 21 chia hết cho 7 nên đúng tròn 3 tuần.",
        "explanation": "21 : 7 = 3 tuần tròn nên ngày 24 tháng 3 cũng rơi vào đúng Thứ Ba. Đáp án đúng là B."
      },
      {
        "id": 29,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a basketball tournament, each win gives 3 points, a draw gives 1 point, and a loss gives 0 points. Team Tiger won 4 matches, drew 2, and lost 1. How many points did they get?",
        "titleVi": "Trong một giải đấu, mỗi trận thắng được 3 điểm, hòa được 1 điểm, thua được 0 điểm. Đội Hổ thắng 4 trận, hòa 2 trận và thua 1 trận. Hỏi đội Hổ được tất cả bao nhiêu điểm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 điểm"
          },
          {
            "id": "B",
            "text": "13 điểm"
          },
          {
            "id": "C",
            "text": "14 điểm"
          },
          {
            "id": "D",
            "text": "15 điểm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính điểm từng loại: Thắng = 4 x 3 = 12 điểm; Hòa = 2 x 1 = 2 điểm; Thua = 0 điểm.",
        "explanation": "Tổng số điểm = 12 + 2 + 0 = 14 điểm. Đáp án đúng là C."
      },
      {
        "id": 30,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 1, 4, 9, 16, 25, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 1, 4, 9, 16, 25, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "34"
          },
          {
            "id": "C",
            "text": "36"
          },
          {
            "id": "D",
            "text": "49"
          }
        ],
        "correctAnswer": "C",
        "hint": "Nhận xét: 1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25...",
        "explanation": "Số tiếp theo là 6 x 6 = 36. Đáp án đúng là C."
      },
      {
        "id": 31,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 125 x 4 + 250",
        "titleVi": "Tính giá trị của: 125 x 4 + 250",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "700"
          },
          {
            "id": "B",
            "text": "750"
          },
          {
            "id": "C",
            "text": "800"
          },
          {
            "id": "D",
            "text": "650"
          }
        ],
        "correctAnswer": "B",
        "hint": "125 x 4 = 500, sau đó 500 + 250 = 750.",
        "explanation": "125 x 4 + 250 = 500 + 250 = 750. Đáp án đúng là B."
      },
      {
        "id": 32,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 848 : 4 - 112",
        "titleVi": "Tính giá trị của: 848 : 4 - 112",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "102"
          },
          {
            "id": "C",
            "text": "104"
          },
          {
            "id": "D",
            "text": "110"
          }
        ],
        "correctAnswer": "A",
        "hint": "848 : 4 = 212, sau đó 212 - 112 = 100.",
        "explanation": "212 - 112 = 100. Đáp án đúng là A."
      },
      {
        "id": 33,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 7 x 8 + 6 x 9",
        "titleVi": "Tính giá trị của: 7 x 8 + 6 x 9",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "110"
          },
          {
            "id": "C",
            "text": "112"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "7 x 8 = 56; 6 x 9 = 54; 56 + 54 = 110.",
        "explanation": "56 + 54 = 110. Đáp án đúng là B."
      },
      {
        "id": 34,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: (36 + 28) : 8 + 15",
        "titleVi": "Tính giá trị của: (36 + 28) : 8 + 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "21"
          },
          {
            "id": "B",
            "text": "22"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính trong ngoặc trước: 36 + 28 = 64. 64 : 8 = 8. 8 + 15 = 23.",
        "explanation": "64 : 8 + 15 = 8 + 15 = 23. Đáp án đúng là C."
      },
      {
        "id": 35,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: x : 6 = 145 (remainder 3)",
        "titleVi": "Tìm x biết: x : 6 = 145 (dư 3)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "870"
          },
          {
            "id": "B",
            "text": "873"
          },
          {
            "id": "C",
            "text": "867"
          },
          {
            "id": "D",
            "text": "875"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số bị chia = Thương x Số chia + Số dư: x = 145 x 6 + 3.",
        "explanation": "145 x 6 = 870; 870 + 3 = 873. Đáp án đúng là B."
      },
      {
        "id": 36,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "In a division with a divisor of 8, what is the greatest possible remainder?",
        "titleVi": "Trong một phép chia có số chia là 8, số dư lớn nhất có thể có là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "7"
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
        "hint": "Số dư luôn nhỏ hơn số chia. Số lớn nhất nhỏ hơn 8 là 7.",
        "explanation": "Số dư lớn nhất là 7. Đáp án đúng là B."
      },
      {
        "id": 37,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers have 0 as their units digit?",
        "titleVi": "Có bao nhiêu số có 3 chữ số mà chữ số hàng đơn vị là 0?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 số"
          },
          {
            "id": "B",
            "text": "100 số"
          },
          {
            "id": "C",
            "text": "80 số"
          },
          {
            "id": "D",
            "text": "99 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hàng trăm có 9 cách chọn (1-9), hàng chục có 10 cách chọn (0-9), hàng đơn vị có 1 cách (0).",
        "explanation": "9 x 10 x 1 = 90 số (từ 100 đến 990). Đáp án đúng là A."
      },
      {
        "id": 38,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all numbers in the sequence: 5, 10, 15, 20, 25, 30, 35, 40.",
        "titleVi": "Tính tổng dãy số cách đều: 5 + 10 + 15 + 20 + 25 + 30 + 35 + 40.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "170"
          },
          {
            "id": "B",
            "text": "180"
          },
          {
            "id": "C",
            "text": "190"
          },
          {
            "id": "D",
            "text": "200"
          }
        ],
        "correctAnswer": "B",
        "hint": "Ghép cặp: (5 + 40) + (10 + 35) + (15 + 30) + (20 + 25) = 45 x 4 = 180.",
        "explanation": "Tổng = 180. Đáp án đúng là B."
      },
      {
        "id": 39,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the last digit of the product: 1 x 3 x 5 x 7 x 9 x 11 x 13?",
        "titleVi": "Chữ số tận cùng của tích các số lẻ: 1 x 3 x 5 x 7 x 9 x 11 x 13 là chữ số nào?",
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
            "text": "5"
          },
          {
            "id": "D",
            "text": "7"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tích của số 5 với bất kì số lẻ nào đều có chữ số tận cùng là 5.",
        "explanation": "Chữ số tận cùng là 5. Đáp án đúng là C."
      },
      {
        "id": 40,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert: 4km 75m = ? m",
        "titleVi": "Đổi: 4km 75m = ? m",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "475m"
          },
          {
            "id": "B",
            "text": "4075m"
          },
          {
            "id": "C",
            "text": "4750m"
          },
          {
            "id": "D",
            "text": "40075m"
          }
        ],
        "correctAnswer": "B",
        "hint": "1km = 1000m => 4km = 4000m. 4000 + 75 = 4075m.",
        "explanation": "4075m. Đáp án đúng là B."
      },
      {
        "id": 41,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 15cm and a width of 8cm. Find the area of the rectangle.",
        "titleVi": "Một hình chữ nhật có chiều dài 15cm và chiều rộng 8cm. Tính diện tích hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "110 cm²"
          },
          {
            "id": "B",
            "text": "120 cm²"
          },
          {
            "id": "C",
            "text": "130 cm²"
          },
          {
            "id": "D",
            "text": "46 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình chữ nhật = chiều dài x chiều rộng.",
        "explanation": "Diện tích = 15 x 8 = 120 cm². Đáp án đúng là B."
      },
      {
        "id": 42,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 64 cm². What is the perimeter of this square?",
        "titleVi": "Một hình vuông có diện tích là 64 cm². Tính chu vi hình vuông đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "28cm"
          },
          {
            "id": "B",
            "text": "32cm"
          },
          {
            "id": "C",
            "text": "36cm"
          },
          {
            "id": "D",
            "text": "40cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh x Cạnh = 64 => Cạnh = 8cm (vì 8 x 8 = 64). Chu vi = 8 x 4 = 32cm.",
        "explanation": "Chu vi = 32cm. Đáp án đúng là B."
      },
      {
        "id": 43,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "The radius of a circle is 7cm. What is the diameter of this circle?",
        "titleVi": "Bán kính của một hình tròn là 7cm. Đường kính của hình tròn đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14cm"
          },
          {
            "id": "B",
            "text": "21cm"
          },
          {
            "id": "C",
            "text": "28cm"
          },
          {
            "id": "D",
            "text": "3.5cm"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đường kính gấp đôi bán kính: d = 2 x r.",
        "explanation": "Đường kính = 7 x 2 = 14cm. Đáp án đúng là A."
      },
      {
        "id": 44,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many small 1cm cubes are needed to build a larger 3x3x3 cube?",
        "titleVi": "Cần bao nhiêu khối lập phương nhỏ cạnh 1cm để xếp thành một khối lập phương lớn kích thước 3x3x3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "9 khối"
          },
          {
            "id": "B",
            "text": "18 khối"
          },
          {
            "id": "C",
            "text": "27 khối"
          },
          {
            "id": "D",
            "text": "36 khối"
          }
        ],
        "correctAnswer": "C",
        "hint": "Thể tích = 3 x 3 x 3 = 27 khối nhỏ.",
        "explanation": "27 khối. Đáp án đúng là C."
      },
      {
        "id": 45,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A wire of length 48cm is bent into an equilateral triangle. What is the length of one side?",
        "titleVi": "Một đoạn dây dài 48cm được uốn thành một hình tam giác đều có 3 cạnh bằng nhau. Hỏi độ dài mỗi cạnh là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12cm"
          },
          {
            "id": "B",
            "text": "14cm"
          },
          {
            "id": "C",
            "text": "16cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Độ dài mỗi cạnh = Chu vi : 3 = 48 : 3.",
        "explanation": "48 : 3 = 16cm. Đáp án đúng là C."
      },
      {
        "id": 46,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 3-digit numbers can be formed using digits 2, 4, 6, 8 without repetition?",
        "titleVi": "Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ 4 chữ số: 2, 4, 6, 8?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 số"
          },
          {
            "id": "B",
            "text": "18 số"
          },
          {
            "id": "C",
            "text": "24 số"
          },
          {
            "id": "D",
            "text": "36 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hàng trăm có 4 cách chọn, hàng chục có 3 cách, hàng đơn vị có 2 cách.",
        "explanation": "4 x 3 x 2 = 24 số. Đáp án đúng là C."
      },
      {
        "id": 47,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 6 red, 6 blue, and 6 yellow balls. At least how many balls must be drawn without looking to ensure getting 3 balls of the same color?",
        "titleVi": "Trong hộp có 6 bi đỏ, 6 bi xanh và 6 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 3 viên bi cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 viên"
          },
          {
            "id": "B",
            "text": "7 viên"
          },
          {
            "id": "C",
            "text": "8 viên"
          },
          {
            "id": "D",
            "text": "9 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 2 đỏ + 2 xanh + 2 vàng = 6 viên. Viên thứ 7 chắc chắn tạo thành 3 viên cùng màu.",
        "explanation": "Theo nguyên lí Dirichlet: 3 x 2 + 1 = 7 viên. Đáp án đúng là B."
      },
      {
        "id": 48,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 3 roads from city A to B, and 4 roads from city B to C. How many different round trips can be made from A to C and back to A without using any road twice?",
        "titleVi": "Có 3 con đường từ A đến B và 4 con đường từ B đến C. Có bao nhiêu cách đi từ A đến C rồi quay về A mà không đi qua con đường nào quá 1 lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72 cách"
          },
          {
            "id": "B",
            "text": "36 cách"
          },
          {
            "id": "C",
            "text": "48 cách"
          },
          {
            "id": "D",
            "text": "24 cách"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đi: 3 x 4 = 12 cách. Về: 3 x 2 = 6 cách (không lặp đường đã đi). Tổng = 12 x 6 = 72 cách.",
        "explanation": "72 cách. Đáp án đúng là A."
      },
      {
        "id": 49,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In a group of 37 students, at least how many were born in the same month?",
        "titleVi": "Trong một nhóm gồm 37 học sinh, chắc chắn có ít nhất bao nhiêu bạn sinh vào cùng một tháng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 bạn"
          },
          {
            "id": "B",
            "text": "3 bạn"
          },
          {
            "id": "C",
            "text": "4 bạn"
          },
          {
            "id": "D",
            "text": "5 bạn"
          }
        ],
        "correctAnswer": "C",
        "hint": "Một năm có 12 tháng. 37 : 12 = 3 dư 1. Theo nguyên lí Dirichlet, có ít nhất 3 + 1 = 4 bạn sinh cùng tháng.",
        "explanation": "3 + 1 = 4 bạn. Đáp án đúng là C."
      },
      {
        "id": 50,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers are there where the tens digit is greater than the units digit?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45 số"
          },
          {
            "id": "B",
            "text": "50 số"
          },
          {
            "id": "C",
            "text": "36 số"
          },
          {
            "id": "D",
            "text": "40 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nếu hàng chục là 1: có số 10 (1 số); hàng chục là 2: 20, 21 (2 số)... hàng chục là 9: 90..98 (9 số). Tổng = 1 + 2 + ... + 9 = 45 số.",
        "explanation": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 số. Đáp án đúng là A."
      }
    ]
  },
  {
    "id": "exam_g3_3",
    "name": "Đề 3: TIMO Huy Chương Vàng",
    "badge": "Nâng Cao",
    "color": "from-amber-500 to-yellow-600",
    "desc": "Tổng và tỉ số, chu vi diện tích hình học, nguyên lí chim bồ câu",
    "questions": [
      {
        "id": 51,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A tree trunk is 12 meters long. It is sawed into 2-meter logs. If each saw cut takes 3 minutes, how many minutes will it take to finish?",
        "titleVi": "Một khúc gỗ dài 12m được cưa thành các đoạn ngắn dài 2m. Biết mỗi lần cưa mất 3 phút. Hỏi cưa xong khúc gỗ mất bao nhiêu phút?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18 phút"
          },
          {
            "id": "B",
            "text": "15 phút"
          },
          {
            "id": "C",
            "text": "12 phút"
          },
          {
            "id": "D",
            "text": "21 phút"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính số đoạn gỗ trước: 12 : 2 = 6 đoạn. Số lần cưa = số đoạn - 1 = 5 lần.",
        "explanation": "Số đoạn gỗ = 12 : 2 = 6 đoạn. Số lần cưa = 6 - 1 = 5 lần. Thời gian cưa = 5 x 3 = 15 phút. Đáp án đúng là B."
      },
      {
        "id": 52,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The sum of ages of Mary and her mother is 40. Her mother is 30 years older than Mary. How old is Mary?",
        "titleVi": "Tổng số tuổi của hai mẹ con Mary là 40 tuổi. Mẹ hơn Mary 30 tuổi. Hỏi Mary bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 tuổi"
          },
          {
            "id": "B",
            "text": "10 tuổi"
          },
          {
            "id": "C",
            "text": "8 tuổi"
          },
          {
            "id": "D",
            "text": "6 tuổi"
          }
        ],
        "correctAnswer": "A",
        "hint": "Bài toán tìm hai số khi biết Tổng và Hiệu: Tuổi con = (Tổng - Hiệu) : 2.",
        "explanation": "Tuổi của Mary = (40 - 30) : 2 = 5 tuổi. Đáp án đúng là A."
      },
      {
        "id": 53,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Today is Tuesday, March 3rd. What day of the week is March 24th of the same year?",
        "titleVi": "Hôm nay là Thứ Ba ngày 3 tháng 3. Hỏi ngày 24 tháng 3 cùng năm đó là thứ mấy?",
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
            "text": "Thứ Tư"
          },
          {
            "id": "D",
            "text": "Thứ Năm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khoảng cách giữa hai ngày là 24 - 3 = 21 ngày. 21 chia hết cho 7 nên đúng tròn 3 tuần.",
        "explanation": "21 : 7 = 3 tuần tròn nên ngày 24 tháng 3 cũng rơi vào đúng Thứ Ba. Đáp án đúng là B."
      },
      {
        "id": 54,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a basketball tournament, each win gives 3 points, a draw gives 1 point, and a loss gives 0 points. Team Tiger won 4 matches, drew 2, and lost 1. How many points did they get?",
        "titleVi": "Trong một giải đấu, mỗi trận thắng được 3 điểm, hòa được 1 điểm, thua được 0 điểm. Đội Hổ thắng 4 trận, hòa 2 trận và thua 1 trận. Hỏi đội Hổ được tất cả bao nhiêu điểm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 điểm"
          },
          {
            "id": "B",
            "text": "13 điểm"
          },
          {
            "id": "C",
            "text": "14 điểm"
          },
          {
            "id": "D",
            "text": "15 điểm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính điểm từng loại: Thắng = 4 x 3 = 12 điểm; Hòa = 2 x 1 = 2 điểm; Thua = 0 điểm.",
        "explanation": "Tổng số điểm = 12 + 2 + 0 = 14 điểm. Đáp án đúng là C."
      },
      {
        "id": 55,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 1, 4, 9, 16, 25, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 1, 4, 9, 16, 25, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "34"
          },
          {
            "id": "C",
            "text": "36"
          },
          {
            "id": "D",
            "text": "49"
          }
        ],
        "correctAnswer": "C",
        "hint": "Nhận xét: 1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25...",
        "explanation": "Số tiếp theo là 6 x 6 = 36. Đáp án đúng là C."
      },
      {
        "id": 56,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 125 x 4 + 250",
        "titleVi": "Tính giá trị của: 125 x 4 + 250",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "700"
          },
          {
            "id": "B",
            "text": "750"
          },
          {
            "id": "C",
            "text": "800"
          },
          {
            "id": "D",
            "text": "650"
          }
        ],
        "correctAnswer": "B",
        "hint": "125 x 4 = 500, sau đó 500 + 250 = 750.",
        "explanation": "125 x 4 + 250 = 500 + 250 = 750. Đáp án đúng là B."
      },
      {
        "id": 57,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 848 : 4 - 112",
        "titleVi": "Tính giá trị của: 848 : 4 - 112",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "102"
          },
          {
            "id": "C",
            "text": "104"
          },
          {
            "id": "D",
            "text": "110"
          }
        ],
        "correctAnswer": "A",
        "hint": "848 : 4 = 212, sau đó 212 - 112 = 100.",
        "explanation": "212 - 112 = 100. Đáp án đúng là A."
      },
      {
        "id": 58,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 7 x 8 + 6 x 9",
        "titleVi": "Tính giá trị của: 7 x 8 + 6 x 9",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "110"
          },
          {
            "id": "C",
            "text": "112"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "7 x 8 = 56; 6 x 9 = 54; 56 + 54 = 110.",
        "explanation": "56 + 54 = 110. Đáp án đúng là B."
      },
      {
        "id": 59,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: (36 + 28) : 8 + 15",
        "titleVi": "Tính giá trị của: (36 + 28) : 8 + 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "21"
          },
          {
            "id": "B",
            "text": "22"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính trong ngoặc trước: 36 + 28 = 64. 64 : 8 = 8. 8 + 15 = 23.",
        "explanation": "64 : 8 + 15 = 8 + 15 = 23. Đáp án đúng là C."
      },
      {
        "id": 60,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: x : 6 = 145 (remainder 3)",
        "titleVi": "Tìm x biết: x : 6 = 145 (dư 3)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "870"
          },
          {
            "id": "B",
            "text": "873"
          },
          {
            "id": "C",
            "text": "867"
          },
          {
            "id": "D",
            "text": "875"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số bị chia = Thương x Số chia + Số dư: x = 145 x 6 + 3.",
        "explanation": "145 x 6 = 870; 870 + 3 = 873. Đáp án đúng là B."
      },
      {
        "id": 61,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "In a division with a divisor of 8, what is the greatest possible remainder?",
        "titleVi": "Trong một phép chia có số chia là 8, số dư lớn nhất có thể có là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "7"
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
        "hint": "Số dư luôn nhỏ hơn số chia. Số lớn nhất nhỏ hơn 8 là 7.",
        "explanation": "Số dư lớn nhất là 7. Đáp án đúng là B."
      },
      {
        "id": 62,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers have 0 as their units digit?",
        "titleVi": "Có bao nhiêu số có 3 chữ số mà chữ số hàng đơn vị là 0?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 số"
          },
          {
            "id": "B",
            "text": "100 số"
          },
          {
            "id": "C",
            "text": "80 số"
          },
          {
            "id": "D",
            "text": "99 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hàng trăm có 9 cách chọn (1-9), hàng chục có 10 cách chọn (0-9), hàng đơn vị có 1 cách (0).",
        "explanation": "9 x 10 x 1 = 90 số (từ 100 đến 990). Đáp án đúng là A."
      },
      {
        "id": 63,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all numbers in the sequence: 5, 10, 15, 20, 25, 30, 35, 40.",
        "titleVi": "Tính tổng dãy số cách đều: 5 + 10 + 15 + 20 + 25 + 30 + 35 + 40.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "170"
          },
          {
            "id": "B",
            "text": "180"
          },
          {
            "id": "C",
            "text": "190"
          },
          {
            "id": "D",
            "text": "200"
          }
        ],
        "correctAnswer": "B",
        "hint": "Ghép cặp: (5 + 40) + (10 + 35) + (15 + 30) + (20 + 25) = 45 x 4 = 180.",
        "explanation": "Tổng = 180. Đáp án đúng là B."
      },
      {
        "id": 64,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the last digit of the product: 1 x 3 x 5 x 7 x 9 x 11 x 13?",
        "titleVi": "Chữ số tận cùng của tích các số lẻ: 1 x 3 x 5 x 7 x 9 x 11 x 13 là chữ số nào?",
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
            "text": "5"
          },
          {
            "id": "D",
            "text": "7"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tích của số 5 với bất kì số lẻ nào đều có chữ số tận cùng là 5.",
        "explanation": "Chữ số tận cùng là 5. Đáp án đúng là C."
      },
      {
        "id": 65,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert: 4km 75m = ? m",
        "titleVi": "Đổi: 4km 75m = ? m",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "475m"
          },
          {
            "id": "B",
            "text": "4075m"
          },
          {
            "id": "C",
            "text": "4750m"
          },
          {
            "id": "D",
            "text": "40075m"
          }
        ],
        "correctAnswer": "B",
        "hint": "1km = 1000m => 4km = 4000m. 4000 + 75 = 4075m.",
        "explanation": "4075m. Đáp án đúng là B."
      },
      {
        "id": 66,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 15cm and a width of 8cm. Find the area of the rectangle.",
        "titleVi": "Một hình chữ nhật có chiều dài 15cm và chiều rộng 8cm. Tính diện tích hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "110 cm²"
          },
          {
            "id": "B",
            "text": "120 cm²"
          },
          {
            "id": "C",
            "text": "130 cm²"
          },
          {
            "id": "D",
            "text": "46 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình chữ nhật = chiều dài x chiều rộng.",
        "explanation": "Diện tích = 15 x 8 = 120 cm². Đáp án đúng là B."
      },
      {
        "id": 67,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 64 cm². What is the perimeter of this square?",
        "titleVi": "Một hình vuông có diện tích là 64 cm². Tính chu vi hình vuông đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "28cm"
          },
          {
            "id": "B",
            "text": "32cm"
          },
          {
            "id": "C",
            "text": "36cm"
          },
          {
            "id": "D",
            "text": "40cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh x Cạnh = 64 => Cạnh = 8cm (vì 8 x 8 = 64). Chu vi = 8 x 4 = 32cm.",
        "explanation": "Chu vi = 32cm. Đáp án đúng là B."
      },
      {
        "id": 68,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "The radius of a circle is 7cm. What is the diameter of this circle?",
        "titleVi": "Bán kính của một hình tròn là 7cm. Đường kính của hình tròn đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14cm"
          },
          {
            "id": "B",
            "text": "21cm"
          },
          {
            "id": "C",
            "text": "28cm"
          },
          {
            "id": "D",
            "text": "3.5cm"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đường kính gấp đôi bán kính: d = 2 x r.",
        "explanation": "Đường kính = 7 x 2 = 14cm. Đáp án đúng là A."
      },
      {
        "id": 69,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many small 1cm cubes are needed to build a larger 3x3x3 cube?",
        "titleVi": "Cần bao nhiêu khối lập phương nhỏ cạnh 1cm để xếp thành một khối lập phương lớn kích thước 3x3x3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "9 khối"
          },
          {
            "id": "B",
            "text": "18 khối"
          },
          {
            "id": "C",
            "text": "27 khối"
          },
          {
            "id": "D",
            "text": "36 khối"
          }
        ],
        "correctAnswer": "C",
        "hint": "Thể tích = 3 x 3 x 3 = 27 khối nhỏ.",
        "explanation": "27 khối. Đáp án đúng là C."
      },
      {
        "id": 70,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A wire of length 48cm is bent into an equilateral triangle. What is the length of one side?",
        "titleVi": "Một đoạn dây dài 48cm được uốn thành một hình tam giác đều có 3 cạnh bằng nhau. Hỏi độ dài mỗi cạnh là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12cm"
          },
          {
            "id": "B",
            "text": "14cm"
          },
          {
            "id": "C",
            "text": "16cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Độ dài mỗi cạnh = Chu vi : 3 = 48 : 3.",
        "explanation": "48 : 3 = 16cm. Đáp án đúng là C."
      },
      {
        "id": 71,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 3-digit numbers can be formed using digits 2, 4, 6, 8 without repetition?",
        "titleVi": "Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ 4 chữ số: 2, 4, 6, 8?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 số"
          },
          {
            "id": "B",
            "text": "18 số"
          },
          {
            "id": "C",
            "text": "24 số"
          },
          {
            "id": "D",
            "text": "36 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hàng trăm có 4 cách chọn, hàng chục có 3 cách, hàng đơn vị có 2 cách.",
        "explanation": "4 x 3 x 2 = 24 số. Đáp án đúng là C."
      },
      {
        "id": 72,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 6 red, 6 blue, and 6 yellow balls. At least how many balls must be drawn without looking to ensure getting 3 balls of the same color?",
        "titleVi": "Trong hộp có 6 bi đỏ, 6 bi xanh và 6 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 3 viên bi cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 viên"
          },
          {
            "id": "B",
            "text": "7 viên"
          },
          {
            "id": "C",
            "text": "8 viên"
          },
          {
            "id": "D",
            "text": "9 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 2 đỏ + 2 xanh + 2 vàng = 6 viên. Viên thứ 7 chắc chắn tạo thành 3 viên cùng màu.",
        "explanation": "Theo nguyên lí Dirichlet: 3 x 2 + 1 = 7 viên. Đáp án đúng là B."
      },
      {
        "id": 73,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 3 roads from city A to B, and 4 roads from city B to C. How many different round trips can be made from A to C and back to A without using any road twice?",
        "titleVi": "Có 3 con đường từ A đến B và 4 con đường từ B đến C. Có bao nhiêu cách đi từ A đến C rồi quay về A mà không đi qua con đường nào quá 1 lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72 cách"
          },
          {
            "id": "B",
            "text": "36 cách"
          },
          {
            "id": "C",
            "text": "48 cách"
          },
          {
            "id": "D",
            "text": "24 cách"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đi: 3 x 4 = 12 cách. Về: 3 x 2 = 6 cách (không lặp đường đã đi). Tổng = 12 x 6 = 72 cách.",
        "explanation": "72 cách. Đáp án đúng là A."
      },
      {
        "id": 74,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In a group of 37 students, at least how many were born in the same month?",
        "titleVi": "Trong một nhóm gồm 37 học sinh, chắc chắn có ít nhất bao nhiêu bạn sinh vào cùng một tháng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 bạn"
          },
          {
            "id": "B",
            "text": "3 bạn"
          },
          {
            "id": "C",
            "text": "4 bạn"
          },
          {
            "id": "D",
            "text": "5 bạn"
          }
        ],
        "correctAnswer": "C",
        "hint": "Một năm có 12 tháng. 37 : 12 = 3 dư 1. Theo nguyên lí Dirichlet, có ít nhất 3 + 1 = 4 bạn sinh cùng tháng.",
        "explanation": "3 + 1 = 4 bạn. Đáp án đúng là C."
      },
      {
        "id": 75,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers are there where the tens digit is greater than the units digit?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45 số"
          },
          {
            "id": "B",
            "text": "50 số"
          },
          {
            "id": "C",
            "text": "36 số"
          },
          {
            "id": "D",
            "text": "40 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nếu hàng chục là 1: có số 10 (1 số); hàng chục là 2: 20, 21 (2 số)... hàng chục là 9: 90..98 (9 số). Tổng = 1 + 2 + ... + 9 = 45 số.",
        "explanation": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 số. Đáp án đúng là A."
      }
    ]
  },
  {
    "id": "exam_g3_4",
    "name": "Đề 4: TIMO Tinh Hoa Đột Phá",
    "badge": "Tinh Hoa",
    "color": "from-purple-500 to-pink-600",
    "desc": "Tổ hợp hoán vị, hình lập phương 3D & biểu thức có ngoặc",
    "questions": [
      {
        "id": 76,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "A tree trunk is 12 meters long. It is sawed into 2-meter logs. If each saw cut takes 3 minutes, how many minutes will it take to finish?",
        "titleVi": "Một khúc gỗ dài 12m được cưa thành các đoạn ngắn dài 2m. Biết mỗi lần cưa mất 3 phút. Hỏi cưa xong khúc gỗ mất bao nhiêu phút?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "18 phút"
          },
          {
            "id": "B",
            "text": "15 phút"
          },
          {
            "id": "C",
            "text": "12 phút"
          },
          {
            "id": "D",
            "text": "21 phút"
          }
        ],
        "correctAnswer": "B",
        "hint": "Tính số đoạn gỗ trước: 12 : 2 = 6 đoạn. Số lần cưa = số đoạn - 1 = 5 lần.",
        "explanation": "Số đoạn gỗ = 12 : 2 = 6 đoạn. Số lần cưa = 6 - 1 = 5 lần. Thời gian cưa = 5 x 3 = 15 phút. Đáp án đúng là B."
      },
      {
        "id": 77,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "The sum of ages of Mary and her mother is 40. Her mother is 30 years older than Mary. How old is Mary?",
        "titleVi": "Tổng số tuổi của hai mẹ con Mary là 40 tuổi. Mẹ hơn Mary 30 tuổi. Hỏi Mary bao nhiêu tuổi?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 tuổi"
          },
          {
            "id": "B",
            "text": "10 tuổi"
          },
          {
            "id": "C",
            "text": "8 tuổi"
          },
          {
            "id": "D",
            "text": "6 tuổi"
          }
        ],
        "correctAnswer": "A",
        "hint": "Bài toán tìm hai số khi biết Tổng và Hiệu: Tuổi con = (Tổng - Hiệu) : 2.",
        "explanation": "Tuổi của Mary = (40 - 30) : 2 = 5 tuổi. Đáp án đúng là A."
      },
      {
        "id": 78,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Today is Tuesday, March 3rd. What day of the week is March 24th of the same year?",
        "titleVi": "Hôm nay là Thứ Ba ngày 3 tháng 3. Hỏi ngày 24 tháng 3 cùng năm đó là thứ mấy?",
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
            "text": "Thứ Tư"
          },
          {
            "id": "D",
            "text": "Thứ Năm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Khoảng cách giữa hai ngày là 24 - 3 = 21 ngày. 21 chia hết cho 7 nên đúng tròn 3 tuần.",
        "explanation": "21 : 7 = 3 tuần tròn nên ngày 24 tháng 3 cũng rơi vào đúng Thứ Ba. Đáp án đúng là B."
      },
      {
        "id": 79,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "In a basketball tournament, each win gives 3 points, a draw gives 1 point, and a loss gives 0 points. Team Tiger won 4 matches, drew 2, and lost 1. How many points did they get?",
        "titleVi": "Trong một giải đấu, mỗi trận thắng được 3 điểm, hòa được 1 điểm, thua được 0 điểm. Đội Hổ thắng 4 trận, hòa 2 trận và thua 1 trận. Hỏi đội Hổ được tất cả bao nhiêu điểm?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 điểm"
          },
          {
            "id": "B",
            "text": "13 điểm"
          },
          {
            "id": "C",
            "text": "14 điểm"
          },
          {
            "id": "D",
            "text": "15 điểm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính điểm từng loại: Thắng = 4 x 3 = 12 điểm; Hòa = 2 x 1 = 2 điểm; Thua = 0 điểm.",
        "explanation": "Tổng số điểm = 12 + 2 + 0 = 14 điểm. Đáp án đúng là C."
      },
      {
        "id": 80,
        "section": "logic",
        "sectionName": "Tư duy logic",
        "points": 4,
        "titleEn": "Find the next number in the pattern: 1, 4, 9, 16, 25, ?",
        "titleVi": "Tìm số tiếp theo trong quy luật: 1, 4, 9, 16, 25, ?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "30"
          },
          {
            "id": "B",
            "text": "34"
          },
          {
            "id": "C",
            "text": "36"
          },
          {
            "id": "D",
            "text": "49"
          }
        ],
        "correctAnswer": "C",
        "hint": "Nhận xét: 1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25...",
        "explanation": "Số tiếp theo là 6 x 6 = 36. Đáp án đúng là C."
      },
      {
        "id": 81,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 125 x 4 + 250",
        "titleVi": "Tính giá trị của: 125 x 4 + 250",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "700"
          },
          {
            "id": "B",
            "text": "750"
          },
          {
            "id": "C",
            "text": "800"
          },
          {
            "id": "D",
            "text": "650"
          }
        ],
        "correctAnswer": "B",
        "hint": "125 x 4 = 500, sau đó 500 + 250 = 750.",
        "explanation": "125 x 4 + 250 = 500 + 250 = 750. Đáp án đúng là B."
      },
      {
        "id": 82,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 848 : 4 - 112",
        "titleVi": "Tính giá trị của: 848 : 4 - 112",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "102"
          },
          {
            "id": "C",
            "text": "104"
          },
          {
            "id": "D",
            "text": "110"
          }
        ],
        "correctAnswer": "A",
        "hint": "848 : 4 = 212, sau đó 212 - 112 = 100.",
        "explanation": "212 - 112 = 100. Đáp án đúng là A."
      },
      {
        "id": 83,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: 7 x 8 + 6 x 9",
        "titleVi": "Tính giá trị của: 7 x 8 + 6 x 9",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "100"
          },
          {
            "id": "B",
            "text": "110"
          },
          {
            "id": "C",
            "text": "112"
          },
          {
            "id": "D",
            "text": "120"
          }
        ],
        "correctAnswer": "B",
        "hint": "7 x 8 = 56; 6 x 9 = 54; 56 + 54 = 110.",
        "explanation": "56 + 54 = 110. Đáp án đúng là B."
      },
      {
        "id": 84,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Calculate: (36 + 28) : 8 + 15",
        "titleVi": "Tính giá trị của: (36 + 28) : 8 + 15",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "21"
          },
          {
            "id": "B",
            "text": "22"
          },
          {
            "id": "C",
            "text": "23"
          },
          {
            "id": "D",
            "text": "24"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tính trong ngoặc trước: 36 + 28 = 64. 64 : 8 = 8. 8 + 15 = 23.",
        "explanation": "64 : 8 + 15 = 8 + 15 = 23. Đáp án đúng là C."
      },
      {
        "id": 85,
        "section": "arithmetic",
        "sectionName": "Số học",
        "points": 4,
        "titleEn": "Find x: x : 6 = 145 (remainder 3)",
        "titleVi": "Tìm x biết: x : 6 = 145 (dư 3)",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "870"
          },
          {
            "id": "B",
            "text": "873"
          },
          {
            "id": "C",
            "text": "867"
          },
          {
            "id": "D",
            "text": "875"
          }
        ],
        "correctAnswer": "B",
        "hint": "Số bị chia = Thương x Số chia + Số dư: x = 145 x 6 + 3.",
        "explanation": "145 x 6 = 870; 870 + 3 = 873. Đáp án đúng là B."
      },
      {
        "id": 86,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "In a division with a divisor of 8, what is the greatest possible remainder?",
        "titleVi": "Trong một phép chia có số chia là 8, số dư lớn nhất có thể có là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "6"
          },
          {
            "id": "B",
            "text": "7"
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
        "hint": "Số dư luôn nhỏ hơn số chia. Số lớn nhất nhỏ hơn 8 là 7.",
        "explanation": "Số dư lớn nhất là 7. Đáp án đúng là B."
      },
      {
        "id": 87,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "How many 3-digit numbers have 0 as their units digit?",
        "titleVi": "Có bao nhiêu số có 3 chữ số mà chữ số hàng đơn vị là 0?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "90 số"
          },
          {
            "id": "B",
            "text": "100 số"
          },
          {
            "id": "C",
            "text": "80 số"
          },
          {
            "id": "D",
            "text": "99 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Hàng trăm có 9 cách chọn (1-9), hàng chục có 10 cách chọn (0-9), hàng đơn vị có 1 cách (0).",
        "explanation": "9 x 10 x 1 = 90 số (từ 100 đến 990). Đáp án đúng là A."
      },
      {
        "id": 88,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Find the sum of all numbers in the sequence: 5, 10, 15, 20, 25, 30, 35, 40.",
        "titleVi": "Tính tổng dãy số cách đều: 5 + 10 + 15 + 20 + 25 + 30 + 35 + 40.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "170"
          },
          {
            "id": "B",
            "text": "180"
          },
          {
            "id": "C",
            "text": "190"
          },
          {
            "id": "D",
            "text": "200"
          }
        ],
        "correctAnswer": "B",
        "hint": "Ghép cặp: (5 + 40) + (10 + 35) + (15 + 30) + (20 + 25) = 45 x 4 = 180.",
        "explanation": "Tổng = 180. Đáp án đúng là B."
      },
      {
        "id": 89,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "What is the last digit of the product: 1 x 3 x 5 x 7 x 9 x 11 x 13?",
        "titleVi": "Chữ số tận cùng của tích các số lẻ: 1 x 3 x 5 x 7 x 9 x 11 x 13 là chữ số nào?",
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
            "text": "5"
          },
          {
            "id": "D",
            "text": "7"
          }
        ],
        "correctAnswer": "C",
        "hint": "Tích của số 5 với bất kì số lẻ nào đều có chữ số tận cùng là 5.",
        "explanation": "Chữ số tận cùng là 5. Đáp án đúng là C."
      },
      {
        "id": 90,
        "section": "number_theory",
        "sectionName": "Lý thuyết số",
        "points": 4,
        "titleEn": "Convert: 4km 75m = ? m",
        "titleVi": "Đổi: 4km 75m = ? m",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "475m"
          },
          {
            "id": "B",
            "text": "4075m"
          },
          {
            "id": "C",
            "text": "4750m"
          },
          {
            "id": "D",
            "text": "40075m"
          }
        ],
        "correctAnswer": "B",
        "hint": "1km = 1000m => 4km = 4000m. 4000 + 75 = 4075m.",
        "explanation": "4075m. Đáp án đúng là B."
      },
      {
        "id": 91,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A rectangle has a length of 15cm and a width of 8cm. Find the area of the rectangle.",
        "titleVi": "Một hình chữ nhật có chiều dài 15cm và chiều rộng 8cm. Tính diện tích hình chữ nhật đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "110 cm²"
          },
          {
            "id": "B",
            "text": "120 cm²"
          },
          {
            "id": "C",
            "text": "130 cm²"
          },
          {
            "id": "D",
            "text": "46 cm²"
          }
        ],
        "correctAnswer": "B",
        "hint": "Diện tích hình chữ nhật = chiều dài x chiều rộng.",
        "explanation": "Diện tích = 15 x 8 = 120 cm². Đáp án đúng là B."
      },
      {
        "id": 92,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A square has an area of 64 cm². What is the perimeter of this square?",
        "titleVi": "Một hình vuông có diện tích là 64 cm². Tính chu vi hình vuông đó.",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "28cm"
          },
          {
            "id": "B",
            "text": "32cm"
          },
          {
            "id": "C",
            "text": "36cm"
          },
          {
            "id": "D",
            "text": "40cm"
          }
        ],
        "correctAnswer": "B",
        "hint": "Cạnh x Cạnh = 64 => Cạnh = 8cm (vì 8 x 8 = 64). Chu vi = 8 x 4 = 32cm.",
        "explanation": "Chu vi = 32cm. Đáp án đúng là B."
      },
      {
        "id": 93,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "The radius of a circle is 7cm. What is the diameter of this circle?",
        "titleVi": "Bán kính của một hình tròn là 7cm. Đường kính của hình tròn đó là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "14cm"
          },
          {
            "id": "B",
            "text": "21cm"
          },
          {
            "id": "C",
            "text": "28cm"
          },
          {
            "id": "D",
            "text": "3.5cm"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đường kính gấp đôi bán kính: d = 2 x r.",
        "explanation": "Đường kính = 7 x 2 = 14cm. Đáp án đúng là A."
      },
      {
        "id": 94,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "How many small 1cm cubes are needed to build a larger 3x3x3 cube?",
        "titleVi": "Cần bao nhiêu khối lập phương nhỏ cạnh 1cm để xếp thành một khối lập phương lớn kích thước 3x3x3?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "9 khối"
          },
          {
            "id": "B",
            "text": "18 khối"
          },
          {
            "id": "C",
            "text": "27 khối"
          },
          {
            "id": "D",
            "text": "36 khối"
          }
        ],
        "correctAnswer": "C",
        "hint": "Thể tích = 3 x 3 x 3 = 27 khối nhỏ.",
        "explanation": "27 khối. Đáp án đúng là C."
      },
      {
        "id": 95,
        "section": "geometry",
        "sectionName": "Hình học",
        "points": 4,
        "titleEn": "A wire of length 48cm is bent into an equilateral triangle. What is the length of one side?",
        "titleVi": "Một đoạn dây dài 48cm được uốn thành một hình tam giác đều có 3 cạnh bằng nhau. Hỏi độ dài mỗi cạnh là bao nhiêu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12cm"
          },
          {
            "id": "B",
            "text": "14cm"
          },
          {
            "id": "C",
            "text": "16cm"
          },
          {
            "id": "D",
            "text": "18cm"
          }
        ],
        "correctAnswer": "C",
        "hint": "Độ dài mỗi cạnh = Chu vi : 3 = 48 : 3.",
        "explanation": "48 : 3 = 16cm. Đáp án đúng là C."
      },
      {
        "id": 96,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many different 3-digit numbers can be formed using digits 2, 4, 6, 8 without repetition?",
        "titleVi": "Có bao nhiêu số có 3 chữ số khác nhau có thể lập được từ 4 chữ số: 2, 4, 6, 8?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "12 số"
          },
          {
            "id": "B",
            "text": "18 số"
          },
          {
            "id": "C",
            "text": "24 số"
          },
          {
            "id": "D",
            "text": "36 số"
          }
        ],
        "correctAnswer": "C",
        "hint": "Hàng trăm có 4 cách chọn, hàng chục có 3 cách, hàng đơn vị có 2 cách.",
        "explanation": "4 x 3 x 2 = 24 số. Đáp án đúng là C."
      },
      {
        "id": 97,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "A box contains 6 red, 6 blue, and 6 yellow balls. At least how many balls must be drawn without looking to ensure getting 3 balls of the same color?",
        "titleVi": "Trong hộp có 6 bi đỏ, 6 bi xanh và 6 bi vàng. Cần lấy ít nhất bao nhiêu viên bi mà không nhìn để chắc chắn có 3 viên bi cùng màu?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "5 viên"
          },
          {
            "id": "B",
            "text": "7 viên"
          },
          {
            "id": "C",
            "text": "8 viên"
          },
          {
            "id": "D",
            "text": "9 viên"
          }
        ],
        "correctAnswer": "B",
        "hint": "Trường hợp xấu nhất lấy 2 đỏ + 2 xanh + 2 vàng = 6 viên. Viên thứ 7 chắc chắn tạo thành 3 viên cùng màu.",
        "explanation": "Theo nguyên lí Dirichlet: 3 x 2 + 1 = 7 viên. Đáp án đúng là B."
      },
      {
        "id": 98,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "There are 3 roads from city A to B, and 4 roads from city B to C. How many different round trips can be made from A to C and back to A without using any road twice?",
        "titleVi": "Có 3 con đường từ A đến B và 4 con đường từ B đến C. Có bao nhiêu cách đi từ A đến C rồi quay về A mà không đi qua con đường nào quá 1 lần?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "72 cách"
          },
          {
            "id": "B",
            "text": "36 cách"
          },
          {
            "id": "C",
            "text": "48 cách"
          },
          {
            "id": "D",
            "text": "24 cách"
          }
        ],
        "correctAnswer": "A",
        "hint": "Đi: 3 x 4 = 12 cách. Về: 3 x 2 = 6 cách (không lặp đường đã đi). Tổng = 12 x 6 = 72 cách.",
        "explanation": "72 cách. Đáp án đúng là A."
      },
      {
        "id": 99,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "In a group of 37 students, at least how many were born in the same month?",
        "titleVi": "Trong một nhóm gồm 37 học sinh, chắc chắn có ít nhất bao nhiêu bạn sinh vào cùng một tháng?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "2 bạn"
          },
          {
            "id": "B",
            "text": "3 bạn"
          },
          {
            "id": "C",
            "text": "4 bạn"
          },
          {
            "id": "D",
            "text": "5 bạn"
          }
        ],
        "correctAnswer": "C",
        "hint": "Một năm có 12 tháng. 37 : 12 = 3 dư 1. Theo nguyên lí Dirichlet, có ít nhất 3 + 1 = 4 bạn sinh cùng tháng.",
        "explanation": "3 + 1 = 4 bạn. Đáp án đúng là C."
      },
      {
        "id": 100,
        "section": "combinatorics",
        "sectionName": "Tổ hợp",
        "points": 4,
        "titleEn": "How many 2-digit numbers are there where the tens digit is greater than the units digit?",
        "titleVi": "Có bao nhiêu số có 2 chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị?",
        "image": null,
        "options": [
          {
            "id": "A",
            "text": "45 số"
          },
          {
            "id": "B",
            "text": "50 số"
          },
          {
            "id": "C",
            "text": "36 số"
          },
          {
            "id": "D",
            "text": "40 số"
          }
        ],
        "correctAnswer": "A",
        "hint": "Nếu hàng chục là 1: có số 10 (1 số); hàng chục là 2: 20, 21 (2 số)... hàng chục là 9: 90..98 (9 số). Tổng = 1 + 2 + ... + 9 = 45 số.",
        "explanation": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 số. Đáp án đúng là A."
      }
    ]
  },
  {
    "id": "exam_g3_random",
    "name": "Đề 5: Luyện Đề Ngẫu Nhiên 🎲",
    "badge": "Vô Hạn",
    "color": "from-rose-400 to-red-500",
    "desc": "Tự động tạo 25 câu hỏi mới từ ngân hàng 100 câu Lớp 3",
    "questions": []
  }
];

export function generateRandomTimoGrade3Exam() {
  const allExams = [
    TIMO_EXAMS_GRADE_3[0].questions,
    TIMO_EXAMS_GRADE_3[1].questions,
    TIMO_EXAMS_GRADE_3[2].questions,
    TIMO_EXAMS_GRADE_3[3].questions,
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
    id: 'rand_g3_' + (idx + 1),
  }));
}
