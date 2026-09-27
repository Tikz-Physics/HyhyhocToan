// Dữ liệu chương trình Toán Lớp 5 chuẩn CTGDPT 2018
// Bao phủ 8 Chủ đề kiến thức trọng tâm & Thử thách Tư duy Timo chuẩn Quốc tế

export const CURRICULUM_GRADE_5 = [
  {
    "id": "g5_decimals_intro",
    "grade": 5,
    "semester": 1,
    "title": "Số Thập Phân & So Sánh Số Thập Phân",
    "badge": "Lớp 5 - Học kì 1",
    "icon": "✨",
    "color": "from-blue-600 to-indigo-800",
    "bgColor": "bg-blue-100",
    "borderColor": "border-blue-400",
    "description": "Cấu tạo phần nguyên và phần thập phân, chuyển đổi phân số thập phân và so sánh các số thập phân.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l1_1",
        "title": "Cấu tạo số thập phân",
        "question": "Số thập phân 85,24 gồm mấy phần và được ngăn cách bởi dấu gì?",
        "options": [
          "Gồm phần nguyên (85) và phần thập phân (24), ngăn cách bởi dấu phẩy",
          "Gồm phần nguyên và phần số lẻ",
          "Chỉ có 1 phần duy nhất",
          "Gồm tử số và mẫu số"
        ],
        "correctAnswer": "Gồm phần nguyên (85) và phần thập phân (24), ngăn cách bởi dấu phẩy",
        "hint": "Mỗi số thập phân gồm hai phần: phần nguyên (đứng trước dấu phẩy) và phần thập phân (đứng sau dấu phẩy)."
      },
      {
        "id": "g5_l1_2",
        "title": "Hàng của số thập phân",
        "question": "Trong số 37,458, chữ số 5 thuộc hàng nào?",
        "options": [
          "Hàng phần trăm",
          "Hàng phần mười",
          "Hàng phần nghìn",
          "Hàng đơn vị"
        ],
        "correctAnswer": "Hàng phần trăm",
        "hint": "Sau dấu phẩy: chữ số đầu tiên (4) là hàng phần mười, chữ số thứ hai (5) là hàng phần trăm, chữ số thứ ba (8) là hàng phần nghìn."
      },
      {
        "id": "g5_l1_3",
        "title": "Chuyển phân số thập phân thành số thập phân",
        "question": "Phân số thập phân 75/100 được viết thành số thập phân là:",
        "options": [
          "0,75",
          "7,5",
          "0,075",
          "75,0"
        ],
        "correctAnswer": "0,75",
        "hint": "75 chia cho 100 ta lùi dấu phẩy sang trái 2 chữ số được 0,75."
      },
      {
        "id": "g5_l1_4",
        "title": "Chuyển hỗn số thành số thập phân",
        "question": "Hỗn số 3 và 4/10 được viết dưới dạng số thập phân là:",
        "options": [
          "3,4",
          "0,34",
          "34,0",
          "3,04"
        ],
        "correctAnswer": "3,4",
        "hint": "Phần nguyên là 3, 4/10 là 4 phần mười, viết là 3,4."
      },
      {
        "id": "g5_l1_5",
        "title": "So sánh số thập phân",
        "question": "Điền dấu thích hợp: 4,52 ... 4,519",
        "options": [
          ">",
          "<",
          "="
        ],
        "correctAnswer": ">",
        "hint": "Phần nguyên bằng nhau (4). Hàng phần mười bằng nhau (5). So sánh hàng phần trăm: 2 > 1 nên 4,52 > 4,519."
      },
      {
        "id": "g5_l1_6",
        "title": "Số thập phân bằng nhau",
        "question": "Nếu viết thêm chữ số 0 vào bên phải phần thập phân của một số thập phân thì:",
        "options": [
          "Giá trị của nó không thay đổi",
          "Số đó tăng lên 10 lần",
          "Số đó giảm đi 10 lần",
          "Trở thành số tự nhiên"
        ],
        "correctAnswer": "Giá trị của nó không thay đổi",
        "hint": "Ví dụ: 0,5 = 0,50 = 0,500. Viết thêm hoặc bỏ bớt chữ số 0 ở tận cùng bên phải phần thập phân thì giá trị không đổi."
      },
      {
        "id": "g5_l1_7",
        "title": "Sắp xếp số thập phân tăng dần",
        "question": "Dãy số thập phân nào dưới đây được sắp xếp từ bé đến lớn?",
        "options": [
          "0,25 ; 0,3 ; 0,45 ; 1,2",
          "1,2 ; 0,45 ; 0,3 ; 0,25",
          "0,3 ; 0,25 ; 0,45 ; 1,2",
          "0,45 ; 0,25 ; 0,3 ; 1,2"
        ],
        "correctAnswer": "0,25 ; 0,3 ; 0,45 ; 1,2",
        "hint": "0,25 < 0,30 < 0,45 < 1,20."
      },
      {
        "id": "g5_l1_8",
        "title": "Viết số đo độ dài dưới dạng số thập phân",
        "question": "5 m 6 dm được viết dưới dạng số thập phân với đơn vị mét là:",
        "options": [
          "5,6 m",
          "5,06 m",
          "56 m",
          "0,56 m"
        ],
        "correctAnswer": "5,6 m",
        "hint": "6 dm = 6/10 m = 0,6 m. Vậy 5 m 6 dm = 5,6 m."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t1_1",
        "title": "Timo: Tìm số thập phân giữa hai số",
        "question": "Có bao nhiêu số thập phân có một chữ số ở phần thập phân nằm giữa 3,5 và 4,2?",
        "options": [
          "6 số",
          "5 số",
          "7 số",
          "Vô số"
        ],
        "correctAnswer": "6 số",
        "hint": "Các số có 1 chữ số ở phần thập phân: 3,6 ; 3,7 ; 3,8 ; 3,9 ; 4,0 ; 4,1. Có tất cả 6 số."
      },
      {
        "id": "g5_t1_2",
        "title": "Timo: Số thập phân đối xứng",
        "question": "Tìm số tự nhiên x sao cho: 2,75 < x < 3,99 ?",
        "options": [
          "x = 3",
          "x = 4",
          "x = 2",
          "Không có"
        ],
        "correctAnswer": "x = 3",
        "hint": "Số tự nhiên duy nhất nằm giữa 2,75 và 3,99 là số 3."
      },
      {
        "id": "g5_t1_3",
        "title": "Timo: Dịch chuyển dấu phẩy",
        "question": "Nếu chuyển dấu phẩy của một số thập phân sang bên phải một chữ số thì số đó thay đổi như thế nào?",
        "options": [
          "Tăng lên gấp 10 lần",
          "Giảm đi 10 lần",
          "Tăng thêm 10 đơn vị",
          "Không đổi"
        ],
        "correctAnswer": "Tăng lên gấp 10 lần",
        "hint": "Chuyển dấu phẩy sang phải 1 chữ số tương đương nhân số đó với 10, nên số đó tăng lên 10 lần."
      }
    ]
  },
  {
    "id": "g5_decimal_operations",
    "grade": 5,
    "semester": 1,
    "title": "4 Phép Tính Với Số Thập Phân",
    "badge": "Lớp 5 - Học kì 1",
    "icon": "⚡",
    "color": "from-emerald-600 to-teal-800",
    "bgColor": "bg-emerald-100",
    "borderColor": "border-emerald-400",
    "description": "Thành thạo cộng, trừ, nhân, chia số thập phân; nhân chia nhẩm với 10, 100, 1000 và 0,1, 0,01.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l2_1",
        "title": "Cộng hai số thập phân",
        "question": "Tính: 45,78 + 32,5 = ?",
        "options": [
          "78,28",
          "77,28",
          "78,83",
          "88,28"
        ],
        "correctAnswer": "78,28",
        "hint": "Đặt tính thẳng cột các hàng và dấu phẩy: 45,78 + 32,50 = 78,28."
      },
      {
        "id": "g5_l2_2",
        "title": "Trừ hai số thập phân",
        "question": "Tính: 80,4 - 25,67 = ?",
        "options": [
          "54,73",
          "55,73",
          "54,83",
          "64,73"
        ],
        "correctAnswer": "54,73",
        "hint": "Viết thêm chữ số 0: 80,40 - 25,67 = 54,73."
      },
      {
        "id": "g5_l2_3",
        "title": "Nhân số thập phân với số tự nhiên",
        "question": "Tính: 12,4 x 5 = ?",
        "options": [
          "62",
          "62,5",
          "60",
          "6,2"
        ],
        "correctAnswer": "62",
        "hint": "124 x 5 = 620, lùi 1 chữ số thập phân được 62,0 hay 62."
      },
      {
        "id": "g5_l2_4",
        "title": "Nhân hai số thập phân",
        "question": "Tính: 2,5 x 0,4 = ?",
        "options": [
          "1",
          "10",
          "0,1",
          "0,01"
        ],
        "correctAnswer": "1",
        "hint": "25 x 4 = 100, cả hai thừa số có tổng cộng 2 chữ số thập phân nên lùi 2 hàng: 1,00 = 1."
      },
      {
        "id": "g5_l2_5",
        "title": "Chia số thập phân cho số tự nhiên",
        "question": "Tính: 21,6 : 6 = ?",
        "options": [
          "3,6",
          "36",
          "0,36",
          "3,4"
        ],
        "correctAnswer": "3,6",
        "hint": "21 : 6 = 3 (dư 3), đặt dấu phẩy vào thương, hạ 6 được 36 : 6 = 6. Kết quả là 3,6."
      },
      {
        "id": "g5_l2_6",
        "title": "Chia số tự nhiên cho số thập phân",
        "question": "Tính: 45 : 1,5 = ?",
        "options": [
          "30",
          "3",
          "300",
          "0,3"
        ],
        "correctAnswer": "30",
        "hint": "Bỏ dấu phẩy ở 1,5 và thêm chữ số 0 vào 45: 450 : 15 = 30."
      },
      {
        "id": "g5_l2_7",
        "title": "Nhân nhẩm với 0,1 ; 0,01",
        "question": "Tính nhẩm: 45,8 x 0,1 = ?",
        "options": [
          "4,58",
          "458",
          "0,458",
          "45,8"
        ],
        "correctAnswer": "4,58",
        "hint": "Nhân một số với 0,1 bằng chia số đó cho 10, chỉ việc dịch dấu phẩy sang trái 1 chữ số: 4,58."
      },
      {
        "id": "g5_l2_8",
        "title": "Tính nhanh biểu thức",
        "question": "Tính nhanh: 3,7 x 6,5 + 3,7 x 3,5 = ?",
        "options": [
          "37",
          "370",
          "3,7",
          "37,5"
        ],
        "correctAnswer": "37",
        "hint": "Đặt 3,7 làm thừa số chung: 3,7 x (6,5 + 3,5) = 3,7 x 10 = 37."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t2_1",
        "title": "Timo: Tìm số khi dịch dấu phẩy",
        "question": "Chuyển dấu phẩy của một số thập phân sang bên phải một hàng thì được số mới hơn số cũ 31,5 đơn vị. Số thập phân ban đầu là:",
        "options": [
          "3,5",
          "35",
          "0,35",
          "3,15"
        ],
        "correctAnswer": "3,5",
        "hint": "Số mới gấp 10 lần số cũ. Hiệu số phần: 10 - 1 = 9 phần. Số ban đầu: 31,5 : 9 = 3,5."
      },
      {
        "id": "g5_t2_2",
        "title": "Timo: Phép cộng nhầm dấu phẩy",
        "question": "Khi cộng một số tự nhiên với một số thập phân có một chữ số ở phần thập phân, một bạn quên đánh dấu phẩy nên được tổng là 235. Biết tổng đúng là 32,5. Số tự nhiên đó là:",
        "options": [
          "10",
          "22,5",
          "12",
          "15"
        ],
        "correctAnswer": "10",
        "hint": "Số thập phân bị tăng gấp 10 lần. Hiệu: 235 - 32,5 = 202,5 ứng với 9 lần số thập phân. Số thập phân = 202,5 : 9 = 22,5. Số tự nhiên: 32,5 - 22,5 = 10."
      },
      {
        "id": "g5_t2_3",
        "title": "Timo: Tính nhanh dãy số thập phân",
        "question": "Tính: 0,1 + 0,2 + 0,3 + ... + 0,9 = ?",
        "options": [
          "4,5",
          "5",
          "4",
          "4,8"
        ],
        "correctAnswer": "4,5",
        "hint": "(0,1 + 0,9) + (0,2 + 0,8) + (0,3 + 0,7) + (0,4 + 0,6) + 0,5 = 1 x 4 + 0,5 = 4,5."
      }
    ]
  },
  {
    "id": "g5_percentages",
    "grade": 5,
    "semester": 1,
    "title": "Tỉ Số Phần Trăm (%) & 3 Bài Toán Cơ Bản",
    "badge": "Lớp 5 - Học kì 1",
    "icon": "📊",
    "color": "from-amber-500 to-yellow-600",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Nắm chắc tỉ số phần trăm, giải 3 bài toán phần trăm kinh điển và các tình huống giảm giá, lãi suất.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l3_1",
        "title": "Khái niệm tỉ số phần trăm",
        "question": "Phân số 3/4 được viết dưới dạng tỉ số phần trăm là bao nhiêu?",
        "options": [
          "75%",
          "70%",
          "80%",
          "25%"
        ],
        "correctAnswer": "75%",
        "hint": "3 : 4 = 0,75 = 75%."
      },
      {
        "id": "g5_l3_2",
        "title": "Tìm tỉ số phần trăm của hai số",
        "question": "Lớp 5A có 40 học sinh, trong đó có 24 học sinh nữ. Hỏi học sinh nữ chiếm bao nhiêu phần trăm số học sinh cả lớp?",
        "options": [
          "60%",
          "55%",
          "65%",
          "50%"
        ],
        "correctAnswer": "60%",
        "hint": "24 : 40 = 0,6 = 60%."
      },
      {
        "id": "g5_l3_3",
        "title": "Tìm giá trị phần trăm của một số",
        "question": "Tìm 20% của 250 kg là bao nhiêu kg?",
        "options": [
          "50 kg",
          "45 kg",
          "55 kg",
          "25 kg"
        ],
        "correctAnswer": "50 kg",
        "hint": "Lấy 250 x 20 : 100 = 50 kg."
      },
      {
        "id": "g5_l3_4",
        "title": "Tìm một số khi biết giá trị phần trăm",
        "question": "Biết 30% diện tích một mảnh đất là 75 m2. Diện tích cả mảnh đất đó là:",
        "options": [
          "250 m2",
          "225 m2",
          "300 m2",
          "200 m2"
        ],
        "correctAnswer": "250 m2",
        "hint": "Diện tích cả mảnh đất: 75 : 30 x 100 = 250 m2."
      },
      {
        "id": "g5_l3_5",
        "title": "Bài toán giảm giá hàng bán",
        "question": "Một chiếc áo khoác có giá gốc 400 000 đồng, cửa hàng giảm giá 15%. Số tiền được giảm giá là:",
        "options": [
          "60 000 đồng",
          "40 000 đồng",
          "50 000 đồng",
          "70 000 đồng"
        ],
        "correctAnswer": "60 000 đồng",
        "hint": "Số tiền giảm: 400 000 x 15 : 100 = 60 000 đồng."
      },
      {
        "id": "g5_l3_6",
        "title": "Giá tiền sau khi giảm",
        "question": "Giá của chiếc áo khoác ở câu trên sau khi giảm giá 15% là bao nhiêu?",
        "options": [
          "340 000 đồng",
          "350 000 đồng",
          "360 000 đồng",
          "320 000 đồng"
        ],
        "correctAnswer": "340 000 đồng",
        "hint": "400 000 - 60 000 = 340 000 đồng."
      },
      {
        "id": "g5_l3_7",
        "title": "Lãi suất tiết kiệm ngân hàng",
        "question": "Bác Ba gửi tiết kiệm 50 000 000 đồng với lãi suất 0,5% mỗi tháng. Sau 1 tháng bác nhận được số tiền lãi là:",
        "options": [
          "250 000 đồng",
          "25 000 đồng",
          "500 000 đồng",
          "2 500 000 đồng"
        ],
        "correctAnswer": "250 000 đồng",
        "hint": "50 000 000 x 0,5 : 100 = 250 000 đồng."
      },
      {
        "id": "g5_l3_8",
        "title": "Tỉ số phần trăm vượt mức kế hoạch",
        "question": "Theo kế hoạch xưởng phải may 500 bộ quần áo, thực tế xưởng may được 550 bộ. Xưởng đã thực hiện được bao nhiêu % kế hoạch?",
        "options": [
          "110%",
          "105%",
          "115%",
          "120%"
        ],
        "correctAnswer": "110%",
        "hint": "550 : 500 = 1,1 = 110% (vượt mức 10%)."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t3_1",
        "title": "Timo: Tỉ số phần trăm diện tích hình vuông",
        "question": "Nếu tăng cạnh của một hình vuông lên 10% thì diện tích của nó tăng thêm bao nhiêu phần trăm?",
        "options": [
          "21%",
          "20%",
          "10%",
          "11%"
        ],
        "correctAnswer": "21%",
        "hint": "Cạnh mới = 110% = 1,1. Diện tích mới = 1,1 x 1,1 = 1,21 = 121%. Tăng thêm: 121% - 100% = 21%."
      },
      {
        "id": "g5_t3_2",
        "title": "Timo: Giảm giá rồi lại tăng giá",
        "question": "Một mặt hàng giảm giá 10%, sau đó một thời gian lại tăng giá 10%. Hỏi so với giá ban đầu, giá hiện tại như thế nào?",
        "options": [
          "Giảm 1%",
          "Bằng giá ban đầu",
          "Tăng 1%",
          "Tăng 2%"
        ],
        "correctAnswer": "Giảm 1%",
        "hint": "Giá sau giảm: 100% - 10% = 90%. Giá sau tăng: 90% x 110% = 99%. So với ban đầu bị giảm: 100% - 99% = 1%."
      },
      {
        "id": "g5_t3_3",
        "title": "Timo: Nước và muối trong dung dịch",
        "question": "Trong 200 g nước muối có chứa 10 g muối. Tỉ số phần trăm của muối trong dung dịch nước muối đó là:",
        "options": [
          "5%",
          "10%",
          "2%",
          "4%"
        ],
        "correctAnswer": "5%",
        "hint": "10 : 200 = 0,05 = 5%."
      }
    ]
  },
  {
    "id": "g5_triangle_trapezoid",
    "grade": 5,
    "semester": 1,
    "title": "Diện Tích Hình Tam Giác & Hình Thang",
    "badge": "Lớp 5 - Học kì 1",
    "icon": "📐",
    "color": "from-purple-600 to-pink-800",
    "bgColor": "bg-purple-100",
    "borderColor": "border-purple-400",
    "description": "Thành thạo công thức tính diện tích hình tam giác (S = a x h : 2) và diện tích hình thang (S = (a + b) x h : 2).",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l4_1",
        "title": "Công thức diện tích hình tam giác",
        "question": "Muốn tính diện tích hình tam giác ta làm thế nào?",
        "options": [
          "Lấy độ dài đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2",
          "Lấy độ dài đáy nhân chiều cao",
          "Lấy đáy cộng chiều cao rồi nhân 2",
          "Lấy 3 cạnh cộng lại"
        ],
        "correctAnswer": "Lấy độ dài đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2",
        "hint": "Công thức: S = (a x h) : 2."
      },
      {
        "id": "g5_l4_2",
        "title": "Tính diện tích hình tam giác",
        "question": "Một hình tam giác có độ dài đáy là 14 cm, chiều cao là 8 cm. Diện tích tam giác đó là:",
        "options": [
          "56 cm2",
          "112 cm2",
          "44 cm2",
          "22 cm2"
        ],
        "correctAnswer": "56 cm2",
        "hint": "S = (14 x 8) : 2 = 112 : 2 = 56 cm2."
      },
      {
        "id": "g5_l4_3",
        "title": "Diện tích tam giác vuông",
        "question": "Tam giác vuông có hai cạnh góc vuông dài 6 cm và 8 cm. Diện tích của tam giác vuông đó là:",
        "options": [
          "24 cm2",
          "48 cm2",
          "14 cm2",
          "28 cm2"
        ],
        "correctAnswer": "24 cm2",
        "hint": "Diện tích tam giác vuông bằng tích hai cạnh góc vuông chia cho 2: (6 x 8) : 2 = 24 cm2."
      },
      {
        "id": "g5_l4_4",
        "title": "Đặc điểm của hình thang",
        "question": "Hình thang là hình tứ giác có đặc điểm gì?",
        "options": [
          "Có một cặp cạnh đối diện song song",
          "Có 4 cạnh bằng nhau",
          "Có hai đường chéo bằng nhau",
          "Có 4 góc vuông"
        ],
        "correctAnswer": "Có một cặp cạnh đối diện song song",
        "hint": "Hai cạnh song song của hình thang được gọi là hai đáy (đáy lớn và đáy bé)."
      },
      {
        "id": "g5_l4_5",
        "title": "Công thức diện tích hình thang",
        "question": "Diện tích hình thang bằng gì?",
        "options": [
          "Tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị) rồi chia cho 2",
          "Đáy lớn nhân đáy bé chia cho 2",
          "Đáy lớn nhân chiều cao",
          "Đáy bé cộng đáy lớn rồi nhân chiều cao"
        ],
        "correctAnswer": "Tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị) rồi chia cho 2",
        "hint": "Công thức: S = [(a + b) x h] : 2."
      },
      {
        "id": "g5_l4_6",
        "title": "Tính diện tích hình thang",
        "question": "Một thửa ruộng hình thang có đáy lớn 20 m, đáy bé 12 m và chiều cao 10 m. Diện tích thửa ruộng là:",
        "options": [
          "160 m2",
          "320 m2",
          "150 m2",
          "240 m2"
        ],
        "correctAnswer": "160 m2",
        "hint": "S = [(20 + 12) x 10] : 2 = (32 x 10) : 2 = 160 m2."
      },
      {
        "id": "g5_l4_7",
        "title": "Tìm chiều cao tam giác",
        "question": "Hình tam giác có diện tích 45 cm2, đáy dài 10 cm. Chiều cao của tam giác là:",
        "options": [
          "9 cm",
          "4,5 cm",
          "18 cm",
          "8 cm"
        ],
        "correctAnswer": "9 cm",
        "hint": "h = (S x 2) : a = (45 x 2) : 10 = 90 : 10 = 9 cm."
      },
      {
        "id": "g5_l4_8",
        "title": "Hình thang vuông",
        "question": "Hình thang có một cạnh bên vuông góc với hai đáy được gọi là:",
        "options": [
          "Hình thang vuông",
          "Hình thang cân",
          "Hình chữ nhật",
          "Hình bình hành"
        ],
        "correctAnswer": "Hình thang vuông",
        "hint": "Cạnh bên vuông góc với hai đáy chính là chiều cao của hình thang vuông."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t4_1",
        "title": "Timo: Tỉ số diện tích hai tam giác chung chiều cao",
        "question": "Hai tam giác có cùng chiều cao, đáy tam giác thứ nhất gấp 3 lần đáy tam giác thứ hai. Tỉ số diện tích của hai tam giác là:",
        "options": [
          "3 lần",
          "9 lần",
          "6 lần",
          "Bằng nhau"
        ],
        "correctAnswer": "3 lần",
        "hint": "Vì diện tích tỉ lệ thuận với độ dài đáy khi cùng chiều cao nên đáy gấp 3 lần thì diện tích cũng gấp 3 lần."
      },
      {
        "id": "g5_t4_2",
        "title": "Timo: Tăng đáy tam giác",
        "question": "Một hình tam giác có đáy dài 12 cm. Nếu kéo dài đáy thêm 4 cm thì diện tích tăng thêm 20 cm2. Diện tích tam giác ban đầu là:",
        "options": [
          "60 cm2",
          "80 cm2",
          "40 cm2",
          "120 cm2"
        ],
        "correctAnswer": "60 cm2",
        "hint": "Chiều cao của tam giác: h = (20 x 2) : 4 = 10 cm. Diện tích ban đầu: (12 x 10) : 2 = 60 cm2."
      },
      {
        "id": "g5_t4_3",
        "title": "Timo: Cắt hình thang thành tam giác và bình hành",
        "question": "Một hình thang có đáy bé 6 cm, đáy lớn 10 cm, diện tích 48 cm2. Kẻ đường thẳng song song với cạnh bên chia hình thang thành 1 hình bình hành và 1 hình tam giác. Diện tích hình tam giác là:",
        "options": [
          "12 cm2",
          "24 cm2",
          "36 cm2",
          "16 cm2"
        ],
        "correctAnswer": "12 cm2",
        "hint": "Chiều cao hình thang: h = (48 x 2) : (6 + 10) = 96 : 16 = 6 cm. Đáy của hình tam giác là: 10 - 6 = 4 cm. Diện tích tam giác: (4 x 6) : 2 = 12 cm2."
      }
    ]
  },
  {
    "id": "g5_circle",
    "grade": 5,
    "semester": 2,
    "title": "Chu Vi & Diện Tích Hình Tròn",
    "badge": "Lớp 5 - Học kì 2",
    "icon": "⭕",
    "color": "from-rose-600 to-red-800",
    "bgColor": "bg-rose-100",
    "borderColor": "border-rose-400",
    "description": "Thành thạo công thức tính chu vi C = d x 3,14 và diện tích S = r x r x 3,14 của hình tròn.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l5_1",
        "title": "Công thức tính chu vi hình tròn",
        "question": "Chu vi hình tròn bán kính r được tính bằng công thức nào?",
        "options": [
          "C = r x 2 x 3,14",
          "C = r x r x 3,14",
          "C = r x 3,14",
          "C = (r + 2) x 3,14"
        ],
        "correctAnswer": "C = r x 2 x 3,14",
        "hint": "Chu vi C = d x 3,14 hoặc C = r x 2 x 3,14 (với số pi xấp xỉ 3,14)."
      },
      {
        "id": "g5_l5_2",
        "title": "Tính chu vi hình tròn",
        "question": "Một hình tròn có đường kính d = 10 cm. Chu vi của hình tròn đó là:",
        "options": [
          "31,4 cm",
          "62,8 cm",
          "78,5 cm2",
          "15,7 cm"
        ],
        "correctAnswer": "31,4 cm",
        "hint": "C = 10 x 3,14 = 31,4 cm."
      },
      {
        "id": "g5_l5_3",
        "title": "Công thức diện tích hình tròn",
        "question": "Diện tích hình tròn bán kính r được tính bằng công thức nào?",
        "options": [
          "S = r x r x 3,14",
          "S = r x 2 x 3,14",
          "S = d x 3,14",
          "S = r x r x 2"
        ],
        "correctAnswer": "S = r x r x 3,14",
        "hint": "Diện tích bằng bán kính nhân với bán kính rồi nhân với 3,14: S = r x r x 3,14."
      },
      {
        "id": "g5_l5_4",
        "title": "Tính diện tích hình tròn",
        "question": "Một hình tròn có bán kính r = 2 cm. Diện tích của nó là bao nhiêu?",
        "options": [
          "12,56 cm2",
          "6,28 cm2",
          "12,56 cm",
          "16 cm2"
        ],
        "correctAnswer": "12,56 cm2",
        "hint": "S = 2 x 2 x 3,14 = 4 x 3,14 = 12,56 cm2."
      },
      {
        "id": "g5_l5_5",
        "title": "Bánh xe lăn trên đường",
        "question": "Bánh xe đạp có đường kính 0,65 m. Khi bánh xe lăn được 1 vòng thì xe đi được quãng đường dài bao nhiêu?",
        "options": [
          "2,041 m",
          "4,082 m",
          "1,3 m",
          "2,5 m"
        ],
        "correctAnswer": "2,041 m",
        "hint": "Khi bánh xe lăn 1 vòng, quãng đường đi được chính bằng chu vi bánh xe: C = 0,65 x 3,14 = 2,041 m."
      },
      {
        "id": "g5_l5_6",
        "title": "Tìm bán kính khi biết chu vi",
        "question": "Hình tròn có chu vi là 18,84 cm. Bán kính của hình tròn là:",
        "options": [
          "3 cm",
          "6 cm",
          "4 cm",
          "2 cm"
        ],
        "correctAnswer": "3 cm",
        "hint": "r = C : 2 : 3,14 = 18,84 : 6,28 = 3 cm."
      },
      {
        "id": "g5_l5_7",
        "title": "Bán kính tăng gấp đôi",
        "question": "Nếu bán kính của một hình tròn tăng lên gấp 2 lần thì diện tích của nó tăng lên gấp mấy lần?",
        "options": [
          "4 lần",
          "2 lần",
          "8 lần",
          "6 lần"
        ],
        "correctAnswer": "4 lần",
        "hint": "S = r x r x 3,14. Khi r tăng 2 lần: S_mới = 2r x 2r x 3,14 = 4 x S_cũ. Vậy diện tích tăng 4 lần."
      },
      {
        "id": "g5_l5_8",
        "title": "Diện tích hình vành khăn",
        "question": "Hình vành khăn được giới hạn bởi 2 hình tròn đồng tâm có diện tích lần lượt là 50 cm2 và 20 cm2. Diện tích hình vành khăn là:",
        "options": [
          "30 cm2",
          "70 cm2",
          "100 cm2",
          "25 cm2"
        ],
        "correctAnswer": "30 cm2",
        "hint": "Lấy diện tích hình tròn to trừ diện tích hình tròn bé: 50 - 20 = 30 cm2."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t5_1",
        "title": "Timo: Diện tích phần cánh hoa 4 góc",
        "question": "Cho hình vuông cạnh 10 cm. Vẽ hình tròn nội tiếp tiếp xúc 4 cạnh của hình vuông. Diện tích phần nằm ngoài hình tròn nhưng ở trong hình vuông là:",
        "options": [
          "21,5 cm2",
          "78,5 cm2",
          "20 cm2",
          "25 cm2"
        ],
        "correctAnswer": "21,5 cm2",
        "hint": "Diện tích hình vuông: 10 x 10 = 100 cm2. Bán kính hình tròn: 10 : 2 = 5 cm. Diện tích hình tròn: 5 x 5 x 3,14 = 78,5 cm2. Phần ngoài: 100 - 78,5 = 21,5 cm2."
      },
      {
        "id": "g5_t5_2",
        "title": "Timo: Quãng đường bánh xe lăn 100 vòng",
        "question": "Bánh xe có bán kính 0,25 m. Hỏi khi bánh xe lăn được 100 vòng trên mặt đất thì xe đi được bao nhiêu mét?",
        "options": [
          "157 m",
          "78,5 m",
          "314 m",
          "125 m"
        ],
        "correctAnswer": "157 m",
        "hint": "Chu vi bánh xe: 0,25 x 2 x 3,14 = 1,57 m. Lăn 100 vòng: 1,57 x 100 = 157 m."
      },
      {
        "id": "g5_t5_3",
        "title": "Timo: Tỉ số chu vi khi diện tích gấp 9 lần",
        "question": "Hai hình tròn có diện tích gấp nhau 9 lần. Hỏi chu vi của chúng gấp nhau mấy lần?",
        "options": [
          "3 lần",
          "9 lần",
          "6 lần",
          "4,5 lần"
        ],
        "correctAnswer": "3 lần",
        "hint": "Diện tích gấp 9 lần => Bán kính gấp: căn bậc hai của 9 = 3 lần. Chu vi tỉ lệ thuận với bán kính nên cũng gấp 3 lần."
      }
    ]
  },
  {
    "id": "g5_3d_shapes_volume",
    "grade": 5,
    "semester": 2,
    "title": "Hình Khối & Thể Tích (cm3, dm3, m3)",
    "badge": "Lớp 5 - Học kì 2",
    "icon": "📦",
    "color": "from-cyan-600 to-blue-800",
    "bgColor": "bg-cyan-100",
    "borderColor": "border-cyan-400",
    "description": "Diện tích xung quanh, toàn phần và thể tích hình hộp chữ nhật, hình lập phương; quy đổi m3, dm3, lít, cm3.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l6_1",
        "title": "Quy đổi đề-xi-mét khối sang lít",
        "question": "1 đề-xi-mét khối (dm3) bằng bao nhiêu lít?",
        "options": [
          "1 lít",
          "10 lít",
          "100 lít",
          "1000 lít"
        ],
        "correctAnswer": "1 lít",
        "hint": "1 dm3 chính bằng đúng 1 lít nước (1 dm3 = 1 l = 1000 cm3)."
      },
      {
        "id": "g5_l6_2",
        "title": "Quy đổi mét khối sang đề-xi-mét khối",
        "question": "1 mét khối (m3) bằng bao nhiêu đề-xi-mét khối (dm3)?",
        "options": [
          "1000 dm3",
          "100 dm3",
          "10 dm3",
          "10 000 dm3"
        ],
        "correctAnswer": "1000 dm3",
        "hint": "Trong bảng đơn vị đo thể tích, mỗi đơn vị gấp 1000 lần đơn vị bé hơn liền sau nó: 1 m3 = 1000 dm3 = 1 000 000 cm3."
      },
      {
        "id": "g5_l6_3",
        "title": "Thể tích hình hộp chữ nhật",
        "question": "Công thức tính thể tích hình hộp chữ nhật có kích thước a, b, c (dài, rộng, cao) là:",
        "options": [
          "V = a x b x c",
          "V = (a + b) x c",
          "V = a x b + c",
          "V = (a + b + c) x 2"
        ],
        "correctAnswer": "V = a x b x c",
        "hint": "Thể tích hình hộp chữ nhật bằng chiều dài nhân chiều rộng nhân chiều cao: V = a x b x c."
      },
      {
        "id": "g5_l6_4",
        "title": "Tính thể tích hình hộp chữ nhật",
        "question": "Một hình hộp chữ nhật có dài 8 cm, rộng 5 cm, cao 6 cm. Thể tích của nó là:",
        "options": [
          "240 cm3",
          "120 cm3",
          "95 cm3",
          "240 cm2"
        ],
        "correctAnswer": "240 cm3",
        "hint": "V = 8 x 5 x 6 = 240 cm3."
      },
      {
        "id": "g5_l6_5",
        "title": "Thể tích hình lập phương",
        "question": "Một hình lập phương có cạnh dài 5 cm. Thể tích của hình lập phương đó là:",
        "options": [
          "125 cm3",
          "100 cm3",
          "25 cm3",
          "150 cm2"
        ],
        "correctAnswer": "125 cm3",
        "hint": "Thể tích hình lập phương V = a x a x a = 5 x 5 x 5 = 125 cm3."
      },
      {
        "id": "g5_l6_6",
        "title": "Diện tích toàn phần hình lập phương",
        "question": "Hình lập phương có cạnh 4 cm. Diện tích toàn phần của nó là:",
        "options": [
          "96 cm2",
          "64 cm3",
          "64 cm2",
          "16 cm2"
        ],
        "correctAnswer": "96 cm2",
        "hint": "Hình lập phương có 6 mặt bằng nhau. Diện tích toàn phần = (cạnh x cạnh) x 6 = (4 x 4) x 6 = 16 x 6 = 96 cm2."
      },
      {
        "id": "g5_l6_7",
        "title": "Tính dung tích bể cá",
        "question": "Một bể cá hình hộp chữ nhật dài 60 cm, rộng 40 cm, cao 50 cm. Bể có thể chứa tối đa bao nhiêu lít nước?",
        "options": [
          "120 lít",
          "12 lít",
          "1200 lít",
          "240 lít"
        ],
        "correctAnswer": "120 lít",
        "hint": "V = 60 x 40 x 50 = 120 000 cm3 = 120 dm3 = 120 lít."
      },
      {
        "id": "g5_l6_8",
        "title": "Số mặt và số đỉnh của hình hộp",
        "question": "Hình hộp chữ nhật có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?",
        "options": [
          "6 mặt, 8 đỉnh, 12 cạnh",
          "8 mặt, 6 đỉnh, 12 cạnh",
          "6 mặt, 12 đỉnh, 8 cạnh",
          "4 mặt, 4 đỉnh, 6 cạnh"
        ],
        "correctAnswer": "6 mặt, 8 đỉnh, 12 cạnh",
        "hint": "Hình hộp chữ nhật và hình lập phương đều có đúng 6 mặt, 8 đỉnh và 12 cạnh."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t6_1",
        "title": "Timo: Sơn các mặt khối lập phương nhỏ",
        "question": "Một khối lập phương lớn cạnh 3 cm được sơn đỏ toàn bộ bề mặt, sau đó cắt thành 27 khối lập phương nhỏ cạnh 1 cm. Có bao nhiêu khối nhỏ không bị sơn mặt nào?",
        "options": [
          "1 khối",
          "8 khối",
          "6 khối",
          "0 khối"
        ],
        "correctAnswer": "1 khối",
        "hint": "Khối nhỏ ở chính giữa tâm khối lớn không bị sơn mặt nào: (3 - 2) x (3 - 2) x (3 - 2) = 1 x 1 x 1 = 1 khối."
      },
      {
        "id": "g5_t6_2",
        "title": "Timo: Thả đá nước dâng cao",
        "question": "Một bể nước có đáy 20 cm x 15 cm. Khi thả một hòn non bộ vào bể thì nước dâng thêm 4 cm. Thể tích của hòn non bộ là:",
        "options": [
          "1200 cm3",
          "600 cm3",
          "800 cm3",
          "300 cm3"
        ],
        "correctAnswer": "1200 cm3",
        "hint": "Thể tích hòn non bộ chính bằng thể tích phần nước dâng lên: 20 x 15 x 4 = 1200 cm3."
      },
      {
        "id": "g5_t6_3",
        "title": "Timo: Thể tích tăng khi gấp đôi cạnh",
        "question": "Nếu tăng cạnh của một hình lập phương lên gấp 3 lần thì thể tích của nó tăng lên gấp mấy lần?",
        "options": [
          "27 lần",
          "9 lần",
          "3 lần",
          "18 lần"
        ],
        "correctAnswer": "27 lần",
        "hint": "V = (3a) x (3a) x (3a) = 27 x (a x a x a). Thể tích tăng 27 lần."
      }
    ]
  },
  {
    "id": "g5_motion_problems",
    "grade": 5,
    "semester": 2,
    "title": "Toán Chuyển Động Đều (v, s, t)",
    "badge": "Lớp 5 - Học kì 2",
    "icon": "🚗",
    "color": "from-amber-600 to-orange-700",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Nắm vững công thức v = s / t, s = v x t, t = s / v và các bài toán hai xe đi ngược chiều, cùng chiều đuổi nhau.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l7_1",
        "title": "Công thức tính vận tốc",
        "question": "Muốn tính vận tốc (v) của một chuyển động đều ta làm thế nào?",
        "options": [
          "Lấy quãng đường chia cho thời gian: v = s : t",
          "Lấy quãng đường nhân thời gian: v = s x t",
          "Lấy thời gian chia cho quãng đường: v = t : s",
          "Lấy quãng đường cộng thời gian"
        ],
        "correctAnswer": "Lấy quãng đường chia cho thời gian: v = s : t",
        "hint": "Vận tốc là quãng đường đi được trong 1 đơn vị thời gian: v = s : t."
      },
      {
        "id": "g5_l7_2",
        "title": "Tính vận tốc ô tô",
        "question": "Một ô tô đi được quãng đường 120 km trong thời gian 2,5 giờ. Vận tốc của ô tô đó là:",
        "options": [
          "48 km/giờ",
          "50 km/giờ",
          "60 km/giờ",
          "45 km/giờ"
        ],
        "correctAnswer": "48 km/giờ",
        "hint": "v = 120 : 2,5 = 48 km/giờ."
      },
      {
        "id": "g5_l7_3",
        "title": "Công thức tính quãng đường",
        "question": "Một người đi xe máy với vận tốc 42 km/giờ trong 3 giờ. Quãng đường người đó đi được là:",
        "options": [
          "126 km",
          "120 km",
          "136 km",
          "14 km"
        ],
        "correctAnswer": "126 km",
        "hint": "Quãng đường s = v x t = 42 x 3 = 126 km."
      },
      {
        "id": "g5_l7_4",
        "title": "Công thức tính thời gian",
        "question": "Một người đi bộ với vận tốc 5 km/giờ trên quãng đường 15 km. Thời gian người đó đi hết quãng đường là:",
        "options": [
          "3 giờ",
          "2 giờ",
          "4 giờ",
          "75 phút"
        ],
        "correctAnswer": "3 giờ",
        "hint": "Thời gian t = s : v = 15 : 5 = 3 giờ."
      },
      {
        "id": "g5_l7_5",
        "title": "Đổi đơn vị vận tốc km/h sang m/giây",
        "question": "Vận tốc 36 km/giờ tương đương với bao nhiêu mét/giây (m/s)?",
        "options": [
          "10 m/s",
          "1 m/s",
          "36 m/s",
          "60 m/s"
        ],
        "correctAnswer": "10 m/s",
        "hint": "36 km = 36 000 m; 1 giờ = 3600 giây. Vận tốc: 36 000 : 3600 = 10 m/s (quy tắc: chia cho 3,6)."
      },
      {
        "id": "g5_l7_6",
        "title": "Hai xe đi ngược chiều gặp nhau",
        "question": "Quãng đường AB dài 180 km. Hai ô tô xuất phát cùng một lúc từ A và B đi ngược chiều nhau. Xe thứ nhất đi với vận tốc 50 km/h, xe thứ hai đi 40 km/h. Sau bao lâu hai xe gặp nhau?",
        "options": [
          "2 giờ",
          "3 giờ",
          "1,5 giờ",
          "2,5 giờ"
        ],
        "correctAnswer": "2 giờ",
        "hint": "Tổng vận tốc hai xe: 50 + 40 = 90 km/h. Thời gian gặp nhau: t = s : (v1 + v2) = 180 : 90 = 2 giờ."
      },
      {
        "id": "g5_l7_7",
        "title": "Hai xe đi cùng chiều đuổi kịp nhau",
        "question": "Xe máy đi trước xe ô tô 30 km. Vận tốc ô tô là 60 km/h, vận tốc xe máy là 45 km/h. Sau bao lâu ô tô đuổi kịp xe máy?",
        "options": [
          "2 giờ",
          "1,5 giờ",
          "3 giờ",
          "1 giờ"
        ],
        "correctAnswer": "2 giờ",
        "hint": "Hiệu vận tốc: 60 - 45 = 15 km/h. Thời gian đuổi kịp: t = khoảng cách : hiệu vận tốc = 30 : 15 = 2 giờ."
      },
      {
        "id": "g5_l7_8",
        "title": "Chuyển động trên dòng nước",
        "question": "Một con thuyền có vận tốc thực khi nước yên lặng là 15 km/h, vận tốc dòng nước là 3 km/h. Vận tốc của thuyền khi đi xuôi dòng là:",
        "options": [
          "18 km/h",
          "12 km/h",
          "15 km/h",
          "21 km/h"
        ],
        "correctAnswer": "18 km/h",
        "hint": "Vận tốc xuôi dòng = Vận tốc thực + Vận tốc dòng nước = 15 + 3 = 18 km/h. (Ngược dòng = 15 - 3 = 12 km/h)."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t7_1",
        "title": "Timo: Đoàn tàu chui qua đường hầm",
        "question": "Một đoàn tàu dài 150 m chạy với vận tốc 36 km/h chui qua một cây cầu dài 450 m. Thời gian từ lúc đầu tàu vào cầu đến khi toa cuối ra khỏi cầu là:",
        "options": [
          "60 giây (1 phút)",
          "45 giây",
          "50 giây",
          "30 giây"
        ],
        "correctAnswer": "60 giây (1 phút)",
        "hint": "Đổi: 36 km/h = 10 m/s. Quãng đường đoàn tàu phải đi = Độ dài tàu + Độ dài cầu = 150 + 450 = 600 m. Thời gian: 600 : 10 = 60 giây = 1 phút."
      },
      {
        "id": "g5_t7_2",
        "title": "Timo: Chó chạy con thoi đón chủ",
        "question": "Hai người bạn cách nhau 12 km đi bộ lại gần nhau với cùng vận tốc 4 km/h. Chú chó chạy qua lại giữa hai người với vận tốc 10 km/h cho đến khi họ gặp nhau. Chú chó đã chạy được quãng đường là:",
        "options": [
          "15 km",
          "12 km",
          "18 km",
          "20 km"
        ],
        "correctAnswer": "15 km",
        "hint": "Thời gian hai người gặp nhau: 12 : (4 + 4) = 1,5 giờ. Quãng đường chú chó chạy trong 1,5 giờ: 10 x 1,5 = 15 km."
      },
      {
        "id": "g5_t7_3",
        "title": "Timo: Vận tốc trung bình cả đi lẫn về",
        "question": "Một người đi xe đạp từ A đến B với vận tốc 12 km/h và quay về từ B về A với vận tốc 20 km/h. Vận tốc trung bình của người đó trên cả quãng đường đi và về là:",
        "options": [
          "15 km/h",
          "16 km/h",
          "14 km/h",
          "18 km/h"
        ],
        "correctAnswer": "15 km/h",
        "hint": "Vận tốc trung bình = Tổng quãng đường chia cho Tổng thời gian: (2 x s) / (s/12 + s/20) = 2 / (8/60) = 2 x 60 / 8 = 15 km/h (không phải lấy 12 + 20 chia 2)."
      }
    ]
  },
  {
    "id": "g5_time_operations",
    "grade": 5,
    "semester": 2,
    "title": "Số Đo Thời Gian & Ôn Tập Toàn Diện Tiểu Học",
    "badge": "Lớp 5 - Học kì 2",
    "icon": "👑",
    "color": "from-violet-600 to-purple-900",
    "bgColor": "bg-violet-100",
    "borderColor": "border-violet-400",
    "description": "Thành thạo 4 phép tính với số đo thời gian và ôn tập các dạng toán trọng tâm sẵn sàng bước vào Lớp 6.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g5_l8_1",
        "title": "Cộng số đo thời gian",
        "question": "Tính: 3 giờ 25 phút + 2 giờ 40 phút = ?",
        "options": [
          "6 giờ 5 phút",
          "5 giờ 65 phút",
          "5 giờ 5 phút",
          "6 giờ 15 phút"
        ],
        "correctAnswer": "6 giờ 5 phút",
        "hint": "3 giờ + 2 giờ = 5 giờ; 25 phút + 40 phút = 65 phút = 1 giờ 5 phút. Tổng là 6 giờ 5 phút."
      },
      {
        "id": "g5_l8_2",
        "title": "Trừ số đo thời gian",
        "question": "Tính: 4 giờ 15 phút - 1 giờ 35 phút = ?",
        "options": [
          "2 giờ 40 phút",
          "2 giờ 20 phút",
          "3 giờ 40 phút",
          "2 giờ 50 phút"
        ],
        "correctAnswer": "2 giờ 40 phút",
        "hint": "Đổi: 4 giờ 15 phút = 3 giờ 75 phút. Lấy 3 giờ 75 phút - 1 giờ 35 phút = 2 giờ 40 phút."
      },
      {
        "id": "g5_l8_3",
        "title": "Nhân số đo thời gian",
        "question": "Tính: 1 giờ 15 phút x 4 = ?",
        "options": [
          "5 giờ",
          "4 giờ 60 phút",
          "4 giờ 45 phút",
          "6 giờ"
        ],
        "correctAnswer": "5 giờ",
        "hint": "1 giờ x 4 = 4 giờ; 15 phút x 4 = 60 phút = 1 giờ. Tổng = 4 + 1 = 5 giờ."
      },
      {
        "id": "g5_l8_4",
        "title": "Chia số đo thời gian",
        "question": "Tính: 7 giờ 30 phút : 3 = ?",
        "options": [
          "2 giờ 30 phút",
          "2 giờ 10 phút",
          "2 giờ 15 phút",
          "2 giờ 45 phút"
        ],
        "correctAnswer": "2 giờ 30 phút",
        "hint": "7 giờ : 3 = 2 giờ (dư 1 giờ = 60 phút). 60 + 30 = 90 phút : 3 = 30 phút. Kết quả là 2 giờ 30 phút."
      },
      {
        "id": "g5_l8_5",
        "title": "Đổi số thập phân của giờ sang phút",
        "question": "2,5 giờ bằng bao nhiêu phút?",
        "options": [
          "150 phút",
          "125 phút",
          "130 phút",
          "120 phút"
        ],
        "correctAnswer": "150 phút",
        "hint": "2,5 x 60 = 150 phút (hoặc 2 giờ = 120 phút, 0,5 giờ = 30 phút; 120 + 30 = 150 phút)."
      },
      {
        "id": "g5_l8_6",
        "title": "Bài toán tính giờ khởi hành",
        "question": "Chuyến tàu đi hết 3 giờ 45 phút và đến nơi lúc 11 giờ trưa. Chuyến tàu xuất phát lúc mấy giờ?",
        "options": [
          "7 giờ 15 phút",
          "7 giờ 45 phút",
          "8 giờ 15 phút",
          "8 giờ 45 phút"
        ],
        "correctAnswer": "7 giờ 15 phút",
        "hint": "11 giờ - 3 giờ 45 phút = 10 giờ 60 phút - 3 giờ 45 phút = 7 giờ 15 phút."
      },
      {
        "id": "g5_l8_7",
        "title": "Ôn tập tính giá trị biểu thức phân số",
        "question": "Tính: (1/2 + 1/3) x 6 = ?",
        "options": [
          "5",
          "6",
          "1",
          "5/6"
        ],
        "correctAnswer": "5",
        "hint": "1/2 + 1/3 = 5/6. Lấy 5/6 x 6 = 5."
      },
      {
        "id": "g5_l8_8",
        "title": "Ôn tập Tổng - Tỉ số thập phân",
        "question": "Tổng hai số là 15,4; số lớn gấp 3 lần số bé. Số lớn là:",
        "options": [
          "11,55",
          "3,85",
          "10,5",
          "12,4"
        ],
        "correctAnswer": "11,55",
        "hint": "Tổng số phần = 1 + 3 = 4 phần. Số bé = 15,4 : 4 = 3,85. Số lớn = 3,85 x 3 = 11,55."
      }
    ],
    "timoChallenges": [
      {
        "id": "g5_t8_1",
        "title": "Timo: Hai kim đồng hồ trùng nhau",
        "question": "Sau 12 giờ đúng, hai kim giờ và kim phút của đồng hồ sẽ trùng nhau lần tiếp theo sau bao lâu?",
        "options": [
          "1 giờ 5 phút 27 giây (1 và 1/11 giờ)",
          "1 giờ 5 phút",
          "1 giờ",
          "1 giờ 10 phút"
        ],
        "correctAnswer": "1 giờ 5 phút 27 giây (1 và 1/11 giờ)",
        "hint": "Trong 1 giờ kim phút đi 1 vòng (12 khoảng), kim giờ đi 1 khoảng. Hiệu vận tốc là 11/12 vòng/giờ. Thời gian = 1 : (11/12) = 12/11 giờ = 1 và 1/11 giờ ≈ 1 giờ 5 phút 27 giây."
      },
      {
        "id": "g5_t8_2",
        "title": "Timo: Bài toán công việc chung",
        "question": "Bác An làm một mình mất 4 giờ thì xong công việc. Bác Bình làm một mình mất 6 giờ thì xong. Nếu hai bác cùng làm thì sau bao lâu sẽ xong công việc?",
        "options": [
          "2,4 giờ (2 giờ 24 phút)",
          "5 giờ",
          "2 giờ",
          "3 giờ"
        ],
        "correctAnswer": "2,4 giờ (2 giờ 24 phút)",
        "hint": "Trong 1 giờ: Bác An làm 1/4 công việc, Bác Bình làm 1/6 công việc. Cùng làm trong 1 giờ: 1/4 + 1/6 = 5/12 công việc. Thời gian xong = 1 : 5/12 = 12/5 giờ = 2,4 giờ = 2 giờ 24 phút."
      },
      {
        "id": "g5_t8_3",
        "title": "Timo: Tìm số tự nhiên có 3 chữ số đặc biệt",
        "question": "Tìm số tự nhiên có 3 chữ số biết rằng nếu viết thêm chữ số 2 vào trước số đó thì được số mới gấp 9 lần số ban đầu?",
        "options": [
          "250",
          "225",
          "200",
          "125"
        ],
        "correctAnswer": "250",
        "hint": "Viết thêm chữ số 2 vào trước số có 3 chữ số nghĩa là cộng thêm 2000 đơn vị: 2abc = 2000 + abc = 9 x abc => 8 x abc = 2000 => abc = 2000 : 8 = 250."
      }
    ]
  }
];
