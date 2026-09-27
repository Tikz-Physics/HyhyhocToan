// Dữ liệu chương trình Toán Lớp 2 chuẩn CTGDPT 2018
// Bao phủ 8 Chủ đề kiến thức trọng tâm & Thử thách Tư duy Timo chuẩn Quốc tế

export const CURRICULUM_GRADE_2 = [
  {
    "id": "g2_numbers_to_1000",
    "grade": 2,
    "semester": 1,
    "title": "Các Số Đến 1000 & Cấu Tạo Số",
    "badge": "Lớp 2 - Học kì 1",
    "icon": "🔢",
    "color": "from-blue-400 to-indigo-500",
    "bgColor": "bg-blue-100",
    "borderColor": "border-blue-400",
    "description": "Đọc viết các số có 3 chữ số, số trăm - chục - đơn vị, so sánh và thứ tự số trong phạm vi 1000.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l1_1",
        "title": "Đọc số có 3 chữ số",
        "question": "Số gồm 3 trăm, 4 chục và 5 đơn vị được viết là:",
        "options": [
          "345",
          "354",
          "435",
          "543"
        ],
        "correctAnswer": "345",
        "hint": "Viết số theo thứ tự từ hàng trăm, hàng chục đến hàng đơn vị: 3 trăm, 4 chục, 5 đơn vị viết là 345."
      },
      {
        "id": "g2_l1_2",
        "title": "Cấu tạo số",
        "question": "Số 682 gồm mấy trăm, mấy chục và mấy đơn vị?",
        "options": [
          "6 trăm, 8 chục, 2 đơn vị",
          "6 trăm, 2 chục, 8 đơn vị",
          "8 trăm, 6 chục, 2 đơn vị",
          "2 trăm, 8 chục, 6 đơn vị"
        ],
        "correctAnswer": "6 trăm, 8 chục, 2 đơn vị",
        "hint": "Chữ số 6 ở hàng trăm, chữ số 8 ở hàng chục, chữ số 2 ở hàng đơn vị."
      },
      {
        "id": "g2_l1_3",
        "title": "Tìm số tròn trăm",
        "question": "Số tròn trăm liền sau của số 400 là số nào?",
        "options": [
          "401",
          "410",
          "500",
          "300"
        ],
        "correctAnswer": "500",
        "hint": "Các số tròn trăm cách nhau 100 đơn vị: 100, 200, 300, 400, 500,..."
      },
      {
        "id": "g2_l1_4",
        "title": "So sánh số có 3 chữ số",
        "question": "Điền dấu thích hợp vào chỗ chấm: 578 ... 587",
        "options": [
          "<",
          ">",
          "="
        ],
        "correctAnswer": "<",
        "hint": "Hai số cùng có chữ số hàng trăm là 5. So sánh hàng chục: 7 < 8 nên 578 < 587."
      },
      {
        "id": "g2_l1_5",
        "title": "Số liền trước số tròn chục",
        "question": "Số liền trước của số 250 là số nào?",
        "options": [
          "249",
          "251",
          "240",
          "260"
        ],
        "correctAnswer": "249",
        "hint": "Muốn tìm số liền trước của một số, ta lấy số đó bớt đi 1 đơn vị: 250 - 1 = 249."
      },
      {
        "id": "g2_l1_6",
        "title": "Số lớn nhất có 3 chữ số khác nhau",
        "question": "Số lớn nhất có 3 chữ số khác nhau là số nào?",
        "options": [
          "999",
          "987",
          "978",
          "897"
        ],
        "correctAnswer": "987",
        "hint": "Hàng trăm chọn chữ số lớn nhất là 9, hàng chục chọn chữ số khác 9 lớn nhất là 8, hàng đơn vị chọn 7."
      },
      {
        "id": "g2_l1_7",
        "title": "Viết số thành tổng các trăm, chục, đơn vị",
        "question": "Số 709 được viết thành tổng là:",
        "options": [
          "700 + 9",
          "700 + 90",
          "70 + 9",
          "7 + 9"
        ],
        "correctAnswer": "700 + 9",
        "hint": "Số 709 gồm 7 trăm, 0 chục và 9 đơn vị, nên 709 = 700 + 9."
      },
      {
        "id": "g2_l1_8",
        "title": "Sắp xếp dãy số tăng dần",
        "question": "Dãy số nào dưới đây được sắp xếp theo thứ tự từ bé đến lớn?",
        "options": [
          "125, 215, 340, 501",
          "501, 340, 215, 125",
          "215, 125, 340, 501",
          "125, 340, 215, 501"
        ],
        "correctAnswer": "125, 215, 340, 501",
        "hint": "So sánh chữ số hàng trăm để xếp từ bé đến lớn: 1 < 2 < 3 < 5."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t1_1",
        "title": "Timo: Tìm số bí ẩn từ manh mối",
        "question": "Tôi là số có 3 chữ số. Chữ số hàng trăm là 4. Chữ số hàng chục gấp đôi chữ số hàng trăm. Chữ số hàng đơn vị là 1. Tôi là số mấy?",
        "options": [
          "481",
          "441",
          "421",
          "841"
        ],
        "correctAnswer": "481",
        "hint": "Hàng trăm là 4. Chữ số hàng chục gấp đôi: 4 x 2 = 8. Hàng đơn vị là 1. Vậy số đó là 481."
      },
      {
        "id": "g2_t1_2",
        "title": "Timo: Quy luật dãy số",
        "question": "Quan sát dãy số: 105, 110, 115, 120, ? . Số tiếp theo là số mấy?",
        "options": [
          "125",
          "130",
          "122",
          "135"
        ],
        "correctAnswer": "125",
        "hint": "Mỗi số trong dãy đều tăng thêm 5 đơn vị: 120 + 5 = 125."
      },
      {
        "id": "g2_t1_3",
        "title": "Timo: Đếm chữ số",
        "question": "Để viết các số từ 1 đến 20, người ta phải dùng tất cả bao nhiêu chữ số?",
        "options": [
          "29",
          "31",
          "20",
          "30"
        ],
        "correctAnswer": "31",
        "hint": "Từ 1 đến 9 có 9 số có 1 chữ số (9 chữ số). Từ 10 đến 20 có 11 số có 2 chữ số (11 x 2 = 22 chữ số). Tổng: 9 + 22 = 31 chữ số."
      }
    ]
  },
  {
    "id": "g2_addition_subtraction_100",
    "grade": 2,
    "semester": 1,
    "title": "Phép Cộng, Trừ Có Nhớ Trong Phạm Vi 100",
    "badge": "Lớp 2 - Học kì 1",
    "icon": "➕",
    "color": "from-emerald-400 to-teal-500",
    "bgColor": "bg-emerald-100",
    "borderColor": "border-emerald-400",
    "description": "Thành thạo cộng trừ có nhớ trong phạm vi 100, giải bài toán nhiều hơn, ít hơn thực tế.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l2_1",
        "title": "Phép cộng có nhớ dạng 26 + 5",
        "question": "Kết quả của phép tính 37 + 8 là:",
        "options": [
          "45",
          "44",
          "46",
          "35"
        ],
        "correctAnswer": "45",
        "hint": "7 cộng 8 bằng 15, viết 5 nhớ 1. 3 thêm 1 bằng 4. Kết quả là 45."
      },
      {
        "id": "g2_l2_2",
        "title": "Phép cộng có nhớ dạng 38 + 25",
        "question": "Tính: 48 + 36 = ?",
        "options": [
          "84",
          "74",
          "82",
          "94"
        ],
        "correctAnswer": "84",
        "hint": "8 + 6 = 14, viết 4 nhớ 1. 4 + 3 = 7, thêm 1 bằng 8. Kết quả là 84."
      },
      {
        "id": "g2_l2_3",
        "title": "Phép trừ có nhớ dạng 52 - 7",
        "question": "Kết quả của phép tính 63 - 9 là:",
        "options": [
          "54",
          "56",
          "52",
          "64"
        ],
        "correctAnswer": "54",
        "hint": "3 không trừ được 9, lấy 13 trừ 9 bằng 4, viết 4 nhớ 1. 6 trừ 1 bằng 5. Kết quả là 54."
      },
      {
        "id": "g2_l2_4",
        "title": "Phép trừ có nhớ dạng 71 - 35",
        "question": "Tính: 82 - 47 = ?",
        "options": [
          "35",
          "45",
          "37",
          "43"
        ],
        "correctAnswer": "35",
        "hint": "12 trừ 7 bằng 5, viết 5 nhớ 1. 4 thêm 1 bằng 5, 8 trừ 5 bằng 3. Kết quả là 35."
      },
      {
        "id": "g2_l2_5",
        "title": "Bài toán nhiều hơn",
        "question": "Mai có 28 bông hoa, Lan có nhiều hơn Mai 9 bông hoa. Hỏi Lan có bao nhiêu bông hoa?",
        "options": [
          "37 bông hoa",
          "19 bông hoa",
          "36 bông hoa",
          "38 bông hoa"
        ],
        "correctAnswer": "37 bông hoa",
        "hint": "Muốn tìm số hoa của Lan, ta lấy số hoa của Mai cộng thêm 9: 28 + 9 = 37 bông hoa."
      },
      {
        "id": "g2_l2_6",
        "title": "Bài toán ít hơn",
        "question": "Đàn vịt có 65 con, đàn gà ít hơn đàn vịt 18 con. Hỏi đàn gà có bao nhiêu con?",
        "options": [
          "47 con",
          "57 con",
          "43 con",
          "83 con"
        ],
        "correctAnswer": "47 con",
        "hint": "Đàn gà ít hơn nên ta làm phép trừ: 65 - 18 = 47 con."
      },
      {
        "id": "g2_l2_7",
        "title": "Tìm thành phần chưa biết",
        "question": "Tìm x biết: x + 29 = 74",
        "options": [
          "45",
          "55",
          "93",
          "103"
        ],
        "correctAnswer": "45",
        "hint": "Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: 74 - 29 = 45."
      },
      {
        "id": "g2_l2_8",
        "title": "Tính giá trị biểu thức",
        "question": "Tính: 100 - 45 + 18 = ?",
        "options": [
          "73",
          "63",
          "55",
          "83"
        ],
        "correctAnswer": "73",
        "hint": "Thực hiện từ trái sang phải: 100 - 45 = 55, sau đó 55 + 18 = 73."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t2_1",
        "title": "Timo: Phép tính hình vẽ con vật",
        "question": "Biết 🐶 + 🐶 = 16 và 🐶 + 🐱 = 15. Hỏi 🐱 bằng bao nhiêu?",
        "options": [
          "7",
          "8",
          "9",
          "6"
        ],
        "correctAnswer": "7",
        "hint": "🐶 + 🐶 = 16 nên mỗi chú cún 🐶 = 8. Vì 8 + 🐱 = 15 nên chú mèo 🐱 = 15 - 8 = 7."
      },
      {
        "id": "g2_t2_2",
        "title": "Timo: Bài toán chuyển số viên kẹo",
        "question": "Bình có 24 viên kẹo, An có 16 viên kẹo. Hỏi Bình phải cho An bao nhiêu viên kẹo để hai bạn có số kẹo bằng nhau?",
        "options": [
          "4 viên",
          "8 viên",
          "2 viên",
          "6 viên"
        ],
        "correctAnswer": "4 viên",
        "hint": "Bình nhiều hơn An: 24 - 16 = 8 viên. Để bằng nhau, Bình chia đôi số kẹo nhiều hơn: 8 : 2 = 4 viên kẹo."
      },
      {
        "id": "g2_t2_3",
        "title": "Timo: Tính nhanh tổng dãy",
        "question": "Tính nhanh tổng: 11 + 22 + 33 + 77 + 88 + 89 = ?",
        "options": [
          "320",
          "310",
          "300",
          "330"
        ],
        "correctAnswer": "320",
        "hint": "Ghép cặp tròn trăm: (11 + 89) = 100, (22 + 88) = 110, (33 + 77) = 110. Tổng = 100 + 110 + 110 = 320."
      }
    ]
  },
  {
    "id": "g2_geometry_points_lines",
    "grade": 2,
    "semester": 1,
    "title": "Điểm, Đoạn Thẳng & Đường Gấp Khúc",
    "badge": "Lớp 2 - Học kì 1",
    "icon": "📐",
    "color": "from-amber-400 to-orange-500",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Nhận biết điểm, đoạn thẳng, 3 điểm thẳng hàng và tính độ dài đường gấp khúc.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l3_1",
        "title": "Ba điểm thẳng hàng",
        "question": "Ba điểm được gọi là thẳng hàng khi nào?",
        "options": [
          "Cùng nằm trên một đường thẳng",
          "Nằm ở ba vị trí bất kì",
          "Tạo thành một hình tam giác",
          "Nằm trên hai đường thẳng song song"
        ],
        "correctAnswer": "Cùng nằm trên một đường thẳng",
        "hint": "Ba điểm cùng nằm trên một đường thẳng thì ba điểm đó thẳng hàng."
      },
      {
        "id": "g2_l3_2",
        "title": "Độ dài đường gấp khúc",
        "question": "Đường gấp khúc ABC có AB = 15 cm, BC = 24 cm. Độ dài đường gấp khúc ABC là:",
        "options": [
          "39 cm",
          "38 cm",
          "40 cm",
          "29 cm"
        ],
        "correctAnswer": "39 cm",
        "hint": "Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng của nó: 15 + 24 = 39 cm."
      },
      {
        "id": "g2_l3_3",
        "title": "Đường gấp khúc gồm 3 đoạn thẳng",
        "question": "Đường gấp khúc MNPQ có MN = 12 cm, NP = 18 cm, PQ = 25 cm. Độ dài đường gấp khúc MNPQ là:",
        "options": [
          "55 cm",
          "45 cm",
          "50 cm",
          "60 cm"
        ],
        "correctAnswer": "55 cm",
        "hint": "Cộng độ dài 3 đoạn thẳng: 12 + 18 + 25 = 30 + 25 = 55 cm."
      },
      {
        "id": "g2_l3_4",
        "title": "Đếm đoạn thẳng",
        "question": "Trên một đoạn thẳng AB có lấy thêm điểm C ở giữa. Hỏi có tất cả bao nhiêu đoạn thẳng?",
        "options": [
          "3 đoạn thẳng",
          "2 đoạn thẳng",
          "4 đoạn thẳng",
          "1 đoạn thẳng"
        ],
        "correctAnswer": "3 đoạn thẳng",
        "hint": "Gồm có 3 đoạn thẳng: đoạn AC, đoạn CB và đoạn thẳng lớn AB."
      },
      {
        "id": "g2_l3_5",
        "title": "Đoạn thẳng cắt nhau",
        "question": "Hai đoạn thẳng cắt nhau tại mấy điểm?",
        "options": [
          "1 điểm",
          "2 điểm",
          "3 điểm",
          "Vô số điểm"
        ],
        "correctAnswer": "1 điểm",
        "hint": "Hai đoạn thẳng cắt nhau thì giao điểm chung của chúng là 1 điểm duy nhất."
      },
      {
        "id": "g2_l3_6",
        "title": "So sánh độ dài đoạn thẳng",
        "question": "Đoạn thẳng AB dài 4 dm, đoạn thẳng CD dài 38 cm. Đoạn thẳng nào dài hơn?",
        "options": [
          "Đoạn thẳng AB dài hơn",
          "Đoạn thẳng CD dài hơn",
          "Hai đoạn thẳng dài bằng nhau",
          "Không so sánh được"
        ],
        "correctAnswer": "Đoạn thẳng AB dài hơn",
        "hint": "Đổi: 4 dm = 40 cm. Vì 40 cm > 38 cm nên đoạn thẳng AB dài hơn đoạn thẳng CD."
      },
      {
        "id": "g2_l3_7",
        "title": "Đường gấp khúc khép kín",
        "question": "Đường gấp khúc khép kín gồm 3 đoạn thẳng tạo thành hình gì?",
        "options": [
          "Hình tam giác",
          "Hình tứ giác",
          "Hình chữ nhật",
          "Hình vuông"
        ],
        "correctAnswer": "Hình tam giác",
        "hint": "Đường gấp khúc khép kín gồm 3 đoạn thẳng chính là các cạnh của một hình tam giác."
      },
      {
        "id": "g2_l3_8",
        "title": "Tìm độ dài đoạn thẳng còn lại",
        "question": "Đường gấp khúc ABC dài 60 cm. Biết đoạn AB dài 35 cm. Hỏi đoạn BC dài bao nhiêu cm?",
        "options": [
          "25 cm",
          "35 cm",
          "95 cm",
          "20 cm"
        ],
        "correctAnswer": "25 cm",
        "hint": "Lấy tổng độ dài đường gấp khúc trừ đi đoạn AB: 60 - 35 = 25 cm."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t3_1",
        "title": "Timo: Đếm đoạn thẳng nâng cao",
        "question": "Trên một đường thẳng lấy 5 điểm phân biệt. Hỏi có tất cả bao nhiêu đoạn thẳng nối giữa 2 điểm bất kì?",
        "options": [
          "10 đoạn thẳng",
          "8 đoạn thẳng",
          "12 đoạn thẳng",
          "5 đoạn thẳng"
        ],
        "correctAnswer": "10 đoạn thẳng",
        "hint": "Số đoạn thẳng tạo bởi 5 điểm là: 4 + 3 + 2 + 1 = 10 đoạn thẳng."
      },
      {
        "id": "g2_t3_2",
        "title": "Timo: Cắt đoạn dây",
        "question": "Một sợi dây dài 20 cm. Người ta cắt 4 nhát để chia đều sợi dây. Hỏi mỗi đoạn dây dài bao nhiêu cm?",
        "options": [
          "4 cm",
          "5 cm",
          "6 cm",
          "3 cm"
        ],
        "correctAnswer": "4 cm",
        "hint": "Cắt 4 nhát thì sợi dây chia thành: 4 + 1 = 5 đoạn bằng nhau. Mỗi đoạn dài: 20 : 5 = 4 cm."
      },
      {
        "id": "g2_t3_3",
        "title": "Timo: Trồng cây hai đầu đường",
        "question": "Người ta trồng 6 cây dọc theo một lối đi thẳng, cây nọ cách cây kia 3 mét. Hai đầu đường đều có cây. Con đường đó dài bao nhiêu mét?",
        "options": [
          "15 m",
          "18 m",
          "12 m",
          "21 m"
        ],
        "correctAnswer": "15 m",
        "hint": "6 cây thì có 5 khoảng cách giữa các cây. Chiều dài con đường là: 5 x 3 = 15 mét."
      }
    ]
  },
  {
    "id": "g2_units_dm_m_km_kg_l",
    "grade": 2,
    "semester": 1,
    "title": "Đơn Vị Đo: dm, m, km, kg, Lít",
    "badge": "Lớp 2 - Học kì 1",
    "icon": "⚖️",
    "color": "from-purple-400 to-pink-500",
    "bgColor": "bg-purple-100",
    "borderColor": "border-purple-400",
    "description": "Chuyển đổi và tính toán với các đơn vị đo độ dài (dm, m, km), khối lượng (kg) và dung tích (lít).",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l4_1",
        "title": "Đổi xăng-ti-mét sang đề-xi-mét",
        "question": "1 đề-xi-mét (dm) bằng bao nhiêu xăng-ti-mét (cm)?",
        "options": [
          "10 cm",
          "100 cm",
          "1 cm",
          "1000 cm"
        ],
        "correctAnswer": "10 cm",
        "hint": "Ghi nhớ bảng đơn vị đo: 1 dm = 10 cm."
      },
      {
        "id": "g2_l4_2",
        "title": "Đổi mét sang xăng-ti-mét",
        "question": "1 mét (m) bằng bao nhiêu xăng-ti-mét (cm)?",
        "options": [
          "100 cm",
          "10 cm",
          "1000 cm",
          "50 cm"
        ],
        "correctAnswer": "100 cm",
        "hint": "1 m = 10 dm = 100 cm."
      },
      {
        "id": "g2_l4_3",
        "title": "Đơn vị đo khoảng cách lớn: Ki-lô-mét",
        "question": "1 ki-lô-mét (km) bằng bao nhiêu mét (m)?",
        "options": [
          "1000 m",
          "100 m",
          "10 m",
          "10000 m"
        ],
        "correctAnswer": "1000 m",
        "hint": "1 km = 1000 m, dùng để đo khoảng cách giữa các thành phố."
      },
      {
        "id": "g2_l4_4",
        "title": "Phép tính với lít",
        "question": "Một can chứa 15 lít dầu, mẹ rót ra 6 lít dầu. Trong can còn lại bao nhiêu lít dầu?",
        "options": [
          "9 lít",
          "8 lít",
          "10 lít",
          "21 lít"
        ],
        "correctAnswer": "9 lít",
        "hint": "Lấy số dầu ban đầu trừ đi số dầu đã rót ra: 15 - 6 = 9 lít."
      },
      {
        "id": "g2_l4_5",
        "title": "Tính khối lượng ki-lô-gam",
        "question": "Bao gạo to nặng 35 kg, bao gạo bé nặng 18 kg. Cả hai bao gạo nặng bao nhiêu ki-lô-gam?",
        "options": [
          "53 kg",
          "43 kg",
          "52 kg",
          "63 kg"
        ],
        "correctAnswer": "53 kg",
        "hint": "Cộng khối lượng hai bao gạo: 35 + 18 = 53 kg."
      },
      {
        "id": "g2_l4_6",
        "title": "So sánh đơn vị đo độ dài",
        "question": "Điền dấu thích hợp: 3 m 5 cm ... 350 cm",
        "options": [
          "<",
          ">",
          "="
        ],
        "correctAnswer": "<",
        "hint": "Đổi: 3 m 5 cm = 305 cm. So sánh 305 cm < 350 cm."
      },
      {
        "id": "g2_l4_7",
        "title": "Cân thăng bằng",
        "question": "Đĩa cân bên trái có 1 quả dưa hấu, đĩa cân bên phải có hai quả cân loại 2 kg và 3 kg. Hai đĩa cân thăng bằng. Hỏi quả dưa hấu nặng bao nhiêu kg?",
        "options": [
          "5 kg",
          "6 kg",
          "1 kg",
          "4 kg"
        ],
        "correctAnswer": "5 kg",
        "hint": "Đĩa cân thăng bằng nghĩa là khối lượng hai bên bằng nhau: 2 kg + 3 kg = 5 kg."
      },
      {
        "id": "g2_l4_8",
        "title": "Tính độ dài đường đi",
        "question": "Quãng đường từ nhà An đến trường dài 2 km, quãng đường từ trường đến bưu điện dài 3 km. Quãng đường từ nhà An qua trường rồi đến bưu điện dài:",
        "options": [
          "5 km",
          "6 km",
          "4 km",
          "1 km"
        ],
        "correctAnswer": "5 km",
        "hint": "Tổng chiều dài quãng đường: 2 km + 3 km = 5 km."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t4_1",
        "title": "Timo: Đong nước bằng ca",
        "question": "Có một ca 3 lít và một ca 5 lít. Làm thế nào để lấy được đúng 2 lít nước từ bể nước?",
        "options": [
          "Múc đầy ca 5 lít rồi rót sang ca 3 lít cho đầy",
          "Múc 1 ca 5 lít rồi đổ đi nửa ca",
          "Múc 2 ca 3 lít rồi đổ bớt",
          "Múc đầy ca 3 lít 2 lần"
        ],
        "correctAnswer": "Múc đầy ca 5 lít rồi rót sang ca 3 lít cho đầy",
        "hint": "Rót đầy ca 5 lít, sau đó đổ từ ca 5 lít sang ca 3 lít cho đến khi ca 3 lít đầy. Lượng nước còn lại trong ca 5 lít chính là: 5 - 3 = 2 lít."
      },
      {
        "id": "g2_t4_2",
        "title": "Timo: Cân nặng các con vật",
        "question": "Biết 1 con thỏ nặng bằng 2 con bồ câu. 1 con lợn nặng bằng 5 con thỏ. Hỏi 1 con lợn nặng bằng bao nhiêu con bồ câu?",
        "options": [
          "10 con bồ câu",
          "7 con bồ câu",
          "12 con bồ câu",
          "8 con bồ câu"
        ],
        "correctAnswer": "10 con bồ câu",
        "hint": "1 con thỏ = 2 con bồ câu. Vậy 5 con thỏ = 5 x 2 = 10 con bồ câu. Do đó 1 con lợn nặng bằng 10 con bồ câu."
      },
      {
        "id": "g2_t4_3",
        "title": "Timo: Thùng dầu giảm cân nặng",
        "question": "Một thùng đựng đầy dầu nặng 20 kg. Sau khi rót ra một nửa số dầu thì thùng và số dầu còn lại nặng 11 kg. Hỏi vỏ thùng nặng bao nhiêu kg?",
        "options": [
          "2 kg",
          "1 kg",
          "3 kg",
          "4 kg"
        ],
        "correctAnswer": "2 kg",
        "hint": "Một nửa số dầu nặng là: 20 - 11 = 9 kg. Toàn bộ số dầu nặng là: 9 x 2 = 18 kg. Vỏ thùng nặng: 20 - 18 = 2 kg."
      }
    ]
  },
  {
    "id": "g2_multiplication_tables",
    "grade": 2,
    "semester": 2,
    "title": "Làm Quen Phép Nhân - Bảng Nhân 2 & 5",
    "badge": "Lớp 2 - Học kì 2",
    "icon": "✖️",
    "color": "from-rose-400 to-red-500",
    "bgColor": "bg-rose-100",
    "borderColor": "border-rose-400",
    "description": "Bản chất phép nhân từ tổng các số hạng bằng nhau, bảng nhân 2 và bảng nhân 5.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l5_1",
        "title": "Chuyển tổng thành tích",
        "question": "Tổng 5 + 5 + 5 + 5 được viết dưới dạng phép nhân là:",
        "options": [
          "5 x 4",
          "5 x 5",
          "4 x 5",
          "5 + 4"
        ],
        "correctAnswer": "5 x 4",
        "hint": "Số 5 được lấy 4 lần nên ta viết là: 5 x 4."
      },
      {
        "id": "g2_l5_2",
        "title": "Bảng nhân 2",
        "question": "Tính: 2 x 7 = ?",
        "options": [
          "14",
          "12",
          "16",
          "18"
        ],
        "correctAnswer": "14",
        "hint": "2 nhân 7 bằng 14 (hoặc 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14)."
      },
      {
        "id": "g2_l5_3",
        "title": "Bảng nhân 5",
        "question": "Tính: 5 x 8 = ?",
        "options": [
          "40",
          "35",
          "45",
          "30"
        ],
        "correctAnswer": "40",
        "hint": "5 x 8 = 40. Các tích trong bảng nhân 5 luôn có tận cùng là 0 hoặc 5."
      },
      {
        "id": "g2_l5_4",
        "title": "Số chân các chú vịt",
        "question": "Mỗi chú vịt có 2 chân. Hỏi 9 chú vịt có tất cả bao nhiêu cái chân?",
        "options": [
          "18 cái chân",
          "16 cái chân",
          "20 cái chân",
          "14 cái chân"
        ],
        "correctAnswer": "18 cái chân",
        "hint": "Mỗi con vịt có 2 chân, 9 con vịt có: 2 x 9 = 18 cái chân."
      },
      {
        "id": "g2_l5_5",
        "title": "Số ngón tay của bàn tay",
        "question": "Mỗi bàn tay có 5 ngón. Hỏi 6 bàn tay có tất cả bao nhiêu ngón tay?",
        "options": [
          "30 ngón tay",
          "25 ngón tay",
          "35 ngón tay",
          "20 ngón tay"
        ],
        "correctAnswer": "30 ngón tay",
        "hint": "Phép tính: 5 x 6 = 30 ngón tay."
      },
      {
        "id": "g2_l5_6",
        "title": "Tính chất giao hoán của phép nhân",
        "question": "Kết quả của 2 x 5 so với 5 x 2 như thế nào?",
        "options": [
          "Bằng nhau (đều bằng 10)",
          "2 x 5 lớn hơn",
          "5 x 2 lớn hơn",
          "Không bằng nhau"
        ],
        "correctAnswer": "Bằng nhau (đều bằng 10)",
        "hint": "Khi đổi chỗ các thừa số trong một tích thì tích không thay đổi: 2 x 5 = 5 x 2 = 10."
      },
      {
        "id": "g2_l5_7",
        "title": "Thừa số và tích",
        "question": "Trong phép tính 5 x 6 = 30, số 30 được gọi là gì?",
        "options": [
          "Tích",
          "Thừa số",
          "Tổng",
          "Hiệu"
        ],
        "correctAnswer": "Tích",
        "hint": "Trong phép nhân: Thừa số x Thừa số = Tích. Vậy 30 là tích."
      },
      {
        "id": "g2_l5_8",
        "title": "Tính giá trị biểu thức nhân cộng",
        "question": "Tính: 2 x 8 + 14 = ?",
        "options": [
          "30",
          "28",
          "32",
          "34"
        ],
        "correctAnswer": "30",
        "hint": "Thực hiện phép nhân trước: 2 x 8 = 16, sau đó lấy 16 + 14 = 30."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t5_1",
        "title": "Timo: Đếm bánh xe",
        "question": "Trong bãi đỗ xe có 4 xe ô tô 4 bánh và 3 xe máy 2 bánh. Hỏi có tất cả bao nhiêu bánh xe?",
        "options": [
          "22 bánh xe",
          "20 bánh xe",
          "24 bánh xe",
          "18 bánh xe"
        ],
        "correctAnswer": "22 bánh xe",
        "hint": "4 ô tô có: 4 x 4 = 16 bánh. 3 xe máy có: 2 x 3 = 6 bánh. Tổng cộng: 16 + 6 = 22 bánh xe."
      },
      {
        "id": "g2_t5_2",
        "title": "Timo: Quy luật nhân nhân đôi",
        "question": "Một con vi khuẩn cứ sau 1 phút lại nhân đôi thành 2 con. Ban đầu có 1 con vi khuẩn, sau 3 phút sẽ có bao nhiêu con vi khuẩn?",
        "options": [
          "8 con",
          "6 con",
          "16 con",
          "4 con"
        ],
        "correctAnswer": "8 con",
        "hint": "Sau 1 phút: 1 x 2 = 2 con. Sau 2 phút: 2 x 2 = 4 con. Sau 3 phút: 4 x 2 = 8 con."
      },
      {
        "id": "g2_t5_3",
        "title": "Timo: Điền số vào hình tam giác số",
        "question": "Biết tích của hai số ở hai góc dưới bằng số ở đỉnh trên. Góc dưới là 5 và 7. Số ở đỉnh trên là:",
        "options": [
          "35",
          "12",
          "40",
          "25"
        ],
        "correctAnswer": "35",
        "hint": "Tích của hai số ở hai góc dưới là: 5 x 7 = 35."
      }
    ]
  },
  {
    "id": "g2_division_fractions",
    "grade": 2,
    "semester": 2,
    "title": "Phép Chia & Một Phần Mấy (1/2, 1/5)",
    "badge": "Lớp 2 - Học kì 2",
    "icon": "➗",
    "color": "from-cyan-400 to-blue-500",
    "bgColor": "bg-cyan-100",
    "borderColor": "border-cyan-400",
    "description": "Ý nghĩa phép chia, bảng chia 2, bảng chia 5 và nhận biết phân số một phần hai (1/2), một phần năm (1/5).",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l6_1",
        "title": "Bảng chia 2",
        "question": "Tính: 18 : 2 = ?",
        "options": [
          "9",
          "8",
          "7",
          "10"
        ],
        "correctAnswer": "9",
        "hint": "Vì 2 x 9 = 18 nên 18 : 2 = 9."
      },
      {
        "id": "g2_l6_2",
        "title": "Bảng chia 5",
        "question": "Tính: 35 : 5 = ?",
        "options": [
          "7",
          "6",
          "8",
          "5"
        ],
        "correctAnswer": "7",
        "hint": "Vì 5 x 7 = 35 nên 35 : 5 = 7."
      },
      {
        "id": "g2_l6_3",
        "title": "Nhận biết Một phần hai (1/2)",
        "question": "Một hình tròn được chia thành 2 phần bằng nhau, tô màu 1 phần. Đã tô màu mấy phần hình tròn?",
        "options": [
          "1/2 hình tròn",
          "1/3 hình tròn",
          "1/4 hình tròn",
          "1/5 hình tròn"
        ],
        "correctAnswer": "1/2 hình tròn",
        "hint": "Chia làm 2 phần bằng nhau, lấy 1 phần gọi là một phần hai, viết là 1/2."
      },
      {
        "id": "g2_l6_4",
        "title": "Nhận biết Một phần năm (1/5)",
        "question": "Có 20 cái kẹo, chia đều cho 5 bạn. Mỗi bạn nhận được bao nhiêu cái kẹo?",
        "options": [
          "4 cái kẹo",
          "5 cái kẹo",
          "3 cái kẹo",
          "6 cái kẹo"
        ],
        "correctAnswer": "4 cái kẹo",
        "hint": "Mỗi bạn nhận được một phần năm số kẹo: 20 : 5 = 4 cái kẹo."
      },
      {
        "id": "g2_l6_5",
        "title": "Tìm một phần hai của một số",
        "question": "Một phần hai của 16 chiếc bút chì là bao nhiêu chiếc bút chì?",
        "options": [
          "8 chiếc",
          "6 chiếc",
          "4 chiếc",
          "10 chiếc"
        ],
        "correctAnswer": "8 chiếc",
        "hint": "Muốn tìm một phần hai của 16, ta lấy 16 chia cho 2: 16 : 2 = 8 chiếc bút chì."
      },
      {
        "id": "g2_l6_6",
        "title": "Thành phần phép chia",
        "question": "Trong phép chia 40 : 5 = 8, số 40 được gọi là gì?",
        "options": [
          "Số bị chia",
          "Số chia",
          "Thương",
          "Số dư"
        ],
        "correctAnswer": "Số bị chia",
        "hint": "Trong phép chia: Số bị chia : Số chia = Thương. Số đứng đầu tiên là số bị chia."
      },
      {
        "id": "g2_l6_7",
        "title": "Chia đều vào các đĩa",
        "question": "Có 14 quả táo chia đều vào 2 đĩa. Hỏi mỗi đĩa có mấy quả táo?",
        "options": [
          "7 quả",
          "6 quả",
          "8 quả",
          "5 quả"
        ],
        "correctAnswer": "7 quả",
        "hint": "Phép chia: 14 : 2 = 7 quả táo."
      },
      {
        "id": "g2_l6_8",
        "title": "Tìm số bị chia",
        "question": "Tìm x biết: x : 2 = 8",
        "options": [
          "16",
          "10",
          "4",
          "14"
        ],
        "correctAnswer": "16",
        "hint": "Muốn tìm số bị chia, ta lấy thương nhân với số chia: 8 x 2 = 16."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t6_1",
        "title": "Timo: Chia kẹo có dư",
        "question": "Cô giáo có 17 quyển vở, thưởng đều cho 5 bạn có thành tích tốt. Hỏi mỗi bạn được mấy quyển vở và còn thừa mấy quyển?",
        "options": [
          "Mỗi bạn 3 quyển, thừa 2 quyển",
          "Mỗi bạn 3 quyển, thừa 1 quyển",
          "Mỗi bạn 4 quyển, thiếu 3 quyển",
          "Mỗi bạn 2 quyển, thừa 7 quyển"
        ],
        "correctAnswer": "Mỗi bạn 3 quyển, thừa 2 quyển",
        "hint": "17 : 5 = 3 (dư 2), vì 5 x 3 = 15 và 17 - 15 = 2."
      },
      {
        "id": "g2_t6_2",
        "title": "Timo: Cưa gỗ tính thời gian",
        "question": "Bác thợ mộc cưa một khúc gỗ thành 5 đoạn bằng nhau. Mỗi lần cưa mất 3 phút. Hỏi bác thợ cưa xong khúc gỗ mất bao nhiêu phút?",
        "options": [
          "12 phút",
          "15 phút",
          "10 phút",
          "18 phút"
        ],
        "correctAnswer": "12 phút",
        "hint": "Để cưa thành 5 đoạn thì chỉ cần cưa: 5 - 1 = 4 lần. Thời gian: 4 x 3 = 12 phút."
      },
      {
        "id": "g2_t6_3",
        "title": "Timo: Tìm số tự nhiên",
        "question": "Một số chia cho 5 được 6 và dư 4. Số đó là số nào?",
        "options": [
          "34",
          "30",
          "35",
          "26"
        ],
        "correctAnswer": "34",
        "hint": "Số bị chia = Thương x Số chia + Số dư = 6 x 5 + 4 = 30 + 4 = 34."
      }
    ]
  },
  {
    "id": "g2_shapes_3d",
    "grade": 2,
    "semester": 2,
    "title": "Khối Trụ, Khối Cầu & Hình Tứ Giác",
    "badge": "Lớp 2 - Học kì 2",
    "icon": "🎲",
    "color": "from-violet-400 to-purple-600",
    "bgColor": "bg-violet-100",
    "borderColor": "border-violet-400",
    "description": "Nhận biết đồ vật có dạng khối trụ, khối cầu; đếm các cạnh, góc và số hình tứ giác.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l7_1",
        "title": "Nhận dạng khối trụ",
        "question": "Đồ vật nào dưới đây có dạng khối trụ?",
        "options": [
          "Lon nước ngọt",
          "Quả bóng đá",
          "Hộp sữa vuông",
          "Cái nón lá"
        ],
        "correctAnswer": "Lon nước ngọt",
        "hint": "Lon nước ngọt, hộp sữa bột lon tròn, cây giò lụa tròn dài có dạng khối trụ."
      },
      {
        "id": "g2_l7_2",
        "title": "Nhận dạng khối cầu",
        "question": "Đồ vật nào dưới đây có dạng khối cầu?",
        "options": [
          "Quả địa cầu",
          "Quyển sách toán",
          "Hộp phấn viết bảng",
          "Cái bàn học"
        ],
        "correctAnswer": "Quả địa cầu",
        "hint": "Quả địa cầu, quả bóng, viên bi là những vật có dạng khối cầu."
      },
      {
        "id": "g2_l7_3",
        "title": "Đặc điểm khối trụ",
        "question": "Khối trụ có thể làm được hành động nào?",
        "options": [
          "Vừa trượt được vừa lăn được",
          "Chỉ lăn được, không trượt được",
          "Không lăn được",
          "Chỉ đứng yên một chỗ"
        ],
        "correctAnswer": "Vừa trượt được vừa lăn được",
        "hint": "Khối trụ khi đặt đứng thì trượt được (mặt phẳng tròn), khi đặt nằm ngang thì lăn được."
      },
      {
        "id": "g2_l7_4",
        "title": "Nhận biết hình tứ giác",
        "question": "Hình tứ giác là hình có mấy cạnh và mấy đỉnh?",
        "options": [
          "4 cạnh và 4 đỉnh",
          "3 cạnh và 3 đỉnh",
          "5 cạnh và 5 đỉnh",
          "4 cạnh và 3 đỉnh"
        ],
        "correctAnswer": "4 cạnh và 4 đỉnh",
        "hint": "Tứ giác có nghĩa là hình gồm 4 đoạn thẳng khép kín, có 4 cạnh và 4 đỉnh."
      },
      {
        "id": "g2_l7_5",
        "title": "Hình vuông có phải là tứ giác không?",
        "question": "Hình chữ nhật và hình vuông có phải là hình tứ giác không?",
        "options": [
          "Có, đều là hình tứ giác",
          "Không, là hình khác",
          "Chỉ hình chữ nhật là tứ giác",
          "Chỉ hình vuông là tứ giác"
        ],
        "correctAnswer": "Có, đều là hình tứ giác",
        "hint": "Hình chữ nhật và hình vuông đều có 4 cạnh nên đều là các hình tứ giác đặc biệt."
      },
      {
        "id": "g2_l7_6",
        "title": "Đếm hình tứ giác",
        "question": "Một hình chữ nhật được kẻ một đường thẳng chia đôi thành 2 hình vuông nhỏ. Hỏi có tất cả bao nhiêu hình tứ giác?",
        "options": [
          "3 hình tứ giác",
          "2 hình tứ giác",
          "4 hình tứ giác",
          "1 hình tứ giác"
        ],
        "correctAnswer": "3 hình tứ giác",
        "hint": "Có 2 hình vuông nhỏ (hình đơn) và 1 hình chữ nhật to bên ngoài (hình ghép), tổng là 3 hình."
      },
      {
        "id": "g2_l7_7",
        "title": "Phân loại hình khối",
        "question": "Khối cầu có mặt phẳng không?",
        "options": [
          "Không có mặt phẳng nào",
          "Có 1 mặt phẳng",
          "Có 2 mặt phẳng",
          "Có 6 mặt phẳng"
        ],
        "correctAnswer": "Không có mặt phẳng nào",
        "hint": "Khối cầu có bề mặt cong khép kín hoàn toàn, không có bất kì mặt phẳng nào."
      },
      {
        "id": "g2_l7_8",
        "title": "Gấp hình tạo khối",
        "question": "Tấm bìa hình chữ nhật cuộn tròn lại và thêm 2 đáy hình tròn sẽ tạo thành hình khối nào?",
        "options": [
          "Khối trụ",
          "Khối cầu",
          "Khối lập phương",
          "Khối hộp chữ nhật"
        ],
        "correctAnswer": "Khối trụ",
        "hint": "Cuộn bìa chữ nhật tạo thân trụ và 2 hình tròn làm 2 đáy sẽ thành khối trụ."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t7_1",
        "title": "Timo: Đếm khối lập phương bị ẩn",
        "question": "Xếp một khối kim tự tháp: tầng dưới có 4 khối hộp, tầng trên đặt 1 khối ở giữa. Hỏi có tất cả bao nhiêu khối lập phương?",
        "options": [
          "5 khối",
          "4 khối",
          "6 khối",
          "8 khối"
        ],
        "correctAnswer": "5 khối",
        "hint": "Tầng dưới có 4 khối + tầng trên có 1 khối = 5 khối lập phương."
      },
      {
        "id": "g2_t7_2",
        "title": "Timo: Đếm hình tam giác trong ngôi sao",
        "question": "Trong một ngôi sao 5 cánh thông thường, có bao nhiêu hình tam giác tạo bởi các cánh ngôi sao?",
        "options": [
          "5 hình tam giác",
          "6 hình tam giác",
          "8 hình tam giác",
          "10 hình tam giác"
        ],
        "correctAnswer": "5 hình tam giác",
        "hint": "Mỗi cánh của ngôi sao nhô ra tạo thành 1 hình tam giác nhọn, có 5 cánh là 5 hình tam giác."
      },
      {
        "id": "g2_t7_3",
        "title": "Timo: Cắt góc tờ giấy",
        "question": "Một tờ giấy hình chữ nhật có 4 góc. Dùng kéo cắt phăng đi 1 góc thì tờ giấy còn lại mấy góc?",
        "options": [
          "5 góc",
          "3 góc",
          "4 góc",
          "6 góc"
        ],
        "correctAnswer": "5 góc",
        "hint": "Khi cắt mất 1 góc, chỗ vết cắt xuất hiện thêm 2 góc mới, nên: 4 - 1 + 2 = 5 góc!"
      }
    ]
  },
  {
    "id": "g2_time_calendar",
    "grade": 2,
    "semester": 2,
    "title": "Giờ - Phút, Ngày - Tháng & Biểu Đồ Tranh",
    "badge": "Lớp 2 - Học kì 2",
    "icon": "⏰",
    "color": "from-yellow-400 to-amber-500",
    "bgColor": "bg-yellow-100",
    "borderColor": "border-yellow-400",
    "description": "Xem đồng hồ chính xác 15 phút, 30 phút, đọc lịch ngày - tháng và giải toán biểu đồ tranh.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g2_l8_1",
        "title": "Xem giờ chính xác 15 phút",
        "question": "Khi kim ngắn chỉ qua số 8 một chút, kim dài chỉ đúng vào số 3 thì đồng hồ chỉ mấy giờ?",
        "options": [
          "8 giờ 15 phút",
          "8 giờ 3 phút",
          "3 giờ 40 phút",
          "8 giờ 30 phút"
        ],
        "correctAnswer": "8 giờ 15 phút",
        "hint": "Kim dài chỉ số 3 tương ứng với 15 phút (3 x 5 = 15 phút). Đồng hồ chỉ 8 giờ 15 phút."
      },
      {
        "id": "g2_l8_2",
        "title": "Xem giờ rưỡi (30 phút)",
        "question": "Đồng hồ chỉ 10 giờ rưỡi tức là mấy giờ mấy phút?",
        "options": [
          "10 giờ 30 phút",
          "10 giờ 15 phút",
          "10 giờ 50 phút",
          "11 giờ 30 phút"
        ],
        "correctAnswer": "10 giờ 30 phút",
        "hint": "Giờ rưỡi tương đương với 30 phút, nên 10 giờ rưỡi là 10 giờ 30 phút."
      },
      {
        "id": "g2_l8_3",
        "title": "Số ngày trong tuần",
        "question": "Một tuần lễ có bao nhiêu ngày?",
        "options": [
          "7 ngày",
          "5 ngày",
          "6 ngày",
          "8 ngày"
        ],
        "correctAnswer": "7 ngày",
        "hint": "Một tuần có 7 ngày: Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật."
      },
      {
        "id": "g2_l8_4",
        "title": "Các tháng có 31 ngày",
        "question": "Tháng nào dưới đây có 31 ngày?",
        "options": [
          "Tháng 1",
          "Tháng 4",
          "Tháng 6",
          "Tháng 9"
        ],
        "correctAnswer": "Tháng 1",
        "hint": "Tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày. Các tháng 4, 6, 9, 11 có 30 ngày. Tháng 2 có 28 hoặc 29 ngày."
      },
      {
        "id": "g2_l8_5",
        "title": "Tính khoảng thời gian",
        "question": "Buổi chiều, lớp học múa bắt đầu lúc 15 giờ và kết thúc lúc 17 giờ. Buổi học kéo dài bao nhiêu giờ?",
        "options": [
          "2 giờ",
          "3 giờ",
          "1 giờ",
          "4 giờ"
        ],
        "correctAnswer": "2 giờ",
        "hint": "Thời gian kéo dài: 17 giờ - 15 giờ = 2 giờ."
      },
      {
        "id": "g2_l8_6",
        "title": "Biểu đồ tranh đếm hoa",
        "question": "Quan sát biểu đồ tranh: Mỗi bông hoa đỏ biểu thị cho 2 bông hoa. Bạn Lan hái được 4 biểu tượng bông hoa đỏ. Hỏi bạn Lan hái được bao nhiêu bông hoa?",
        "options": [
          "8 bông hoa",
          "4 bông hoa",
          "6 bông hoa",
          "10 bông hoa"
        ],
        "correctAnswer": "8 bông hoa",
        "hint": "Mỗi biểu tượng đại diện 2 bông hoa: 2 x 4 = 8 bông hoa."
      },
      {
        "id": "g2_l8_7",
        "title": "Ngày hôm qua, hôm nay, ngày mai",
        "question": "Nếu ngày mai là Thứ Năm thì hôm qua là Thứ mấy?",
        "options": [
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Sáu",
          "Thứ Hai"
        ],
        "correctAnswer": "Thứ Ba",
        "hint": "Ngày mai là Thứ Năm thì hôm nay là Thứ Tư. Hôm qua lùi 1 ngày là Thứ Ba."
      },
      {
        "id": "g2_l8_8",
        "title": "Giờ buổi tối (hệ 24 giờ)",
        "question": "8 giờ tối còn được gọi là mấy giờ?",
        "options": [
          "20 giờ",
          "18 giờ",
          "19 giờ",
          "21 giờ"
        ],
        "correctAnswer": "20 giờ",
        "hint": "Giờ buổi chiều/tối lấy giờ đó cộng thêm 12: 8 + 12 = 20 giờ."
      }
    ],
    "timoChallenges": [
      {
        "id": "g2_t8_1",
        "title": "Timo: Tính ngày trong tháng",
        "question": "Ngày 5 của một tháng là Thứ Ba. Hỏi ngày 19 của tháng đó là Thứ mấy?",
        "options": [
          "Thứ Ba",
          "Thứ Tư",
          "Thứ Hai",
          "Thứ Năm"
        ],
        "correctAnswer": "Thứ Ba",
        "hint": "Khoảng cách giữa ngày 19 và ngày 5 là: 19 - 5 = 14 ngày. Vì 14 chia hết cho 7 (đúng 2 tuần) nên ngày 19 vẫn rơi vào Thứ Ba."
      },
      {
        "id": "g2_t8_2",
        "title": "Timo: Đồng hồ chạy chậm",
        "question": "Một chiếc đồng hồ mỗi giờ chạy chậm 2 phút. Nếu đúng 8 giờ sáng chỉnh lại cho đúng thì đến 12 giờ trưa cùng ngày, đồng hồ chỉ mấy giờ?",
        "options": [
          "11 giờ 52 phút",
          "11 giờ 50 phút",
          "11 giờ 54 phút",
          "12 giờ 8 phút"
        ],
        "correctAnswer": "11 giờ 52 phút",
        "hint": "Từ 8 giờ đến 12 giờ là 4 tiếng. Sau 4 tiếng đồng hồ chậm: 4 x 2 = 8 phút. Vậy đồng hồ chỉ: 12 giờ bớt 8 phút = 11 giờ 52 phút."
      },
      {
        "id": "g2_t8_3",
        "title": "Timo: Ngày sinh nhật của Minh",
        "question": "Minh nói: \"Hôm qua là ngày cuối cùng của tháng 4\". Hỏi hôm nay là ngày mấy tháng mấy?",
        "options": [
          "Ngày 1 tháng 5",
          "Ngày 30 tháng 4",
          "Ngày 31 tháng 4",
          "Ngày 1 tháng 4"
        ],
        "correctAnswer": "Ngày 1 tháng 5",
        "hint": "Tháng 4 có 30 ngày. Ngày cuối cùng của tháng 4 là 30 tháng 4. Ngày liền sau đó chính là ngày 1 tháng 5."
      }
    ]
  }
];
