// Dữ liệu chương trình Toán Lớp 4 chuẩn CTGDPT 2018
// Đầy đủ 8 Chủ đề kiến thức trọng tâm & Thử thách Tư duy Timo chuẩn Quốc tế

export const CURRICULUM_GRADE_4 = [
  {
    "id": "g4_large_numbers",
    "grade": 4,
    "semester": 1,
    "title": "Số Có Nhiều Chữ Số & Lớp Triệu",
    "badge": "Lớp 4 - Học kì 1",
    "icon": "🏛️",
    "color": "from-blue-600 to-indigo-700",
    "bgColor": "bg-blue-100",
    "borderColor": "border-blue-400",
    "description": "Đọc viết số đến hàng trăm triệu; phân chia các lớp (đơn vị, nghìn, triệu) và làm tròn số lớn.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l1_1",
        "title": "Đọc số đến lớp triệu",
        "question": "Số 15 280 400 được đọc là:",
        "options": [
          "Mười lăm triệu hai trăm tám mươi nghìn bốn trăm",
          "Mười lăm triệu hai trăm tám mươi bốn trăm",
          "Một trăm năm mươi hai triệu tám mươi nghìn",
          "Mười lăm nghìn hai trăm tám mươi"
        ],
        "correctAnswer": "Mười lăm triệu hai trăm tám mươi nghìn bốn trăm",
        "hint": "Tách theo từng lớp 3 chữ số: Lớp triệu là 15, lớp nghìn là 280, lớp đơn vị là 400.",
        "explanation": "Tách theo từng lớp 3 chữ số: Lớp triệu là 15, lớp nghìn là 280, lớp đơn vị là 400. Vì vậy, kết quả đúng là Mười lăm triệu hai trăm tám mươi nghìn bốn trăm."
      },
      {
        "id": "g4_l1_2",
        "title": "Nhận biết các hàng và lớp",
        "question": "Trong số 472 815 309, chữ số 7 thuộc hàng nào và lớp nào?",
        "options": [
          "Hàng chục triệu, lớp triệu",
          "Hàng triệu, lớp triệu",
          "Hàng trăm triệu, lớp triệu",
          "Hàng chục nghìn, lớp nghìn"
        ],
        "correctAnswer": "Hàng chục triệu, lớp triệu",
        "hint": "Lớp triệu gồm các chữ số: 4 (trăm triệu), 7 (chục triệu), 2 (triệu). Vậy 7 thuộc hàng chục triệu, lớp triệu.",
        "explanation": "Lớp triệu gồm các chữ số: 4 (trăm triệu), 7 (chục triệu), 2 (triệu). Vậy 7 thuộc hàng chục triệu, lớp triệu. Vì vậy, kết quả đúng là Hàng chục triệu, lớp triệu."
      },
      {
        "id": "g4_l1_3",
        "title": "Giá trị của chữ số theo vị trí",
        "question": "Giá trị của chữ số 8 trong số 5 842 100 là bao nhiêu?",
        "options": [
          "800 000",
          "80 000",
          "8 000 000",
          "800"
        ],
        "correctAnswer": "800 000",
        "hint": "Chữ số 8 đứng ở hàng trăm nghìn nên có giá trị là 800 000.",
        "explanation": "Chữ số 8 đứng ở hàng trăm nghìn nên có giá trị là 800 000. Vì vậy, kết quả đúng là 800 000."
      },
      {
        "id": "g4_l1_4",
        "title": "Dãy số tự nhiên",
        "question": "Số tự nhiên bé nhất là số nào?",
        "options": [
          "0",
          "1",
          "Không có",
          "-1"
        ],
        "correctAnswer": "0",
        "hint": "Dãy số tự nhiên bắt đầu từ số 0: 0, 1, 2, 3, 4,... Không có số tự nhiên lớn nhất.",
        "explanation": "Dãy số tự nhiên bắt đầu từ số 0: 0, 1, 2, 3, 4,... Không có số tự nhiên lớn nhất. Vì vậy, kết quả đúng là 0."
      },
      {
        "id": "g4_l1_5",
        "title": "So sánh số lớn",
        "question": "Điền dấu thích hợp: 9 999 999 ... 10 000 000",
        "options": [
          "<",
          ">",
          "="
        ],
        "correctAnswer": "<",
        "hint": "Số 9 999 999 có 7 chữ số, số 10 000 000 có 8 chữ số. Số nào có ít chữ số hơn thì bé hơn.",
        "explanation": "Số 9 999 999 có 7 chữ số, số 10 000 000 có 8 chữ số. Số nào có ít chữ số hơn thì bé hơn. Vì vậy, kết quả đúng là <."
      },
      {
        "id": "g4_l1_6",
        "title": "Làm tròn số đến hàng trăm nghìn",
        "question": "Làm tròn số 3 482 000 đến hàng trăm nghìn ta được số nào?",
        "options": [
          "3 500 000",
          "3 400 000",
          "3 480 000",
          "4 000 000"
        ],
        "correctAnswer": "3 500 000",
        "hint": "Chữ số hàng chục nghìn là 8 (>= 5) nên ta làm tròn tăng lên: 3 500 000.",
        "explanation": "Chữ số hàng chục nghìn là 8 (>= 5) nên ta làm tròn tăng lên: 3 500 000. Do đó, đáp án chính xác là 3 500 000."
      },
      {
        "id": "g4_l1_7",
        "title": "Số chẵn và số lẻ",
        "question": "Số nào sau đây là số chẵn?",
        "options": [
          "1 245 678",
          "3 579 123",
          "7 890 455",
          "9 876 541"
        ],
        "correctAnswer": "1 245 678",
        "hint": "Số chẵn có chữ số tận cùng là 0, 2, 4, 6, 8. Số 1 245 678 có chữ số tận cùng là 8 nên là số chẵn.",
        "explanation": "Số chẵn có chữ số tận cùng là 0, 2, 4, 6, 8. Số 1 245 678 có chữ số tận cùng là 8 nên là số chẵn. Vì vậy, kết quả đúng là 1 245 678."
      },
      {
        "id": "g4_l1_8",
        "title": "Viết số thành tổng triệu, nghìn, đơn vị",
        "question": "Số 6 000 000 + 40 000 + 500 + 2 được viết gọn lại là:",
        "options": [
          "6 040 502",
          "6 400 502",
          "6 045 002",
          "6 450 002"
        ],
        "correctAnswer": "6 040 502",
        "hint": "Hàng triệu là 6, hàng chục nghìn là 4, hàng trăm là 5, hàng đơn vị là 2 => 6 040 502.",
        "explanation": "Hàng triệu là 6, hàng chục nghìn là 4, hàng trăm là 5, hàng đơn vị là 2 => 6 040 502. Do đó, đáp án chính xác là 6 040 502."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t1_1",
        "title": "Timo: Lập số từ các chữ số cho trước",
        "question": "Có bao nhiêu số có 3 chữ số khác nhau được lập từ các chữ số 0, 3, 5, 8?",
        "options": [
          "18 số",
          "24 số",
          "12 số",
          "16 số"
        ],
        "correctAnswer": "18 số",
        "hint": "Hàng trăm có 3 cách chọn (khác 0). Hàng chục có 3 cách chọn. Hàng đơn vị có 2 cách chọn. Số các số lập được là: 3 x 3 x 2 = 18 số.",
        "explanation": "Hàng trăm có 3 cách chọn (khác 0). Hàng chục có 3 cách chọn. Hàng đơn vị có 2 cách chọn. Số các số lập được là: 3 x 3 x 2 = 18 số. Do đó, đáp án chính xác là 18 số."
      },
      {
        "id": "g4_t1_2",
        "title": "Timo: Chữ số thứ 2025",
        "question": "Viết liên tiếp dãy số tự nhiên: 123456789101112... Hỏi chữ số thứ 15 của dãy là chữ số mấy?",
        "options": [
          "2",
          "1",
          "3",
          "0"
        ],
        "correctAnswer": "2",
        "hint": "Từ 1 đến 9 có 9 chữ số. Tiếp theo là các số có 2 chữ số: 10 (chữ số thứ 10, 11), 11 (thứ 12, 13), 12 (thứ 14, 15). Chữ số thứ 15 là 2.",
        "explanation": "Từ 1 đến 9 có 9 chữ số. Tiếp theo là các số có 2 chữ số: 10 (chữ số thứ 10, 11), 11 (thứ 12, 13), 12 (thứ 14, 15). Chữ số thứ 15 là 2. Vì vậy, kết quả đúng là 2."
      },
      {
        "id": "g4_t1_3",
        "title": "Timo: Tổng các chữ số bằng 3",
        "question": "Có bao nhiêu số tự nhiên có 3 chữ số mà tổng các chữ số của nó bằng 3?",
        "options": [
          "6 số",
          "5 số",
          "4 số",
          "7 số"
        ],
        "correctAnswer": "6 số",
        "hint": "Các bộ ba chữ số có tổng bằng 3: (3,0,0) -> 300 (1 số); (2,1,0) -> 210, 201, 120, 102 (4 số); (1,1,1) -> 111 (1 số). Tổng cộng: 1 + 4 + 1 = 6 số.",
        "explanation": "Các bộ ba chữ số có tổng bằng 3: (3,0,0) -> 300 (1 số); (2,1,0) -> 210, 201, 120, 102 (4 số); (1,1,1) -> 111 (1 số). Tổng cộng: 1 + 4 + 1 = 6 số. Do đó, đáp án chính xác là 6 số."
      }
    ]
  },
  {
    "id": "g4_operations_properties",
    "grade": 4,
    "semester": 1,
    "title": "4 Phép Tính Lớn, Tính Chất & Trung Bình Cộng",
    "badge": "Lớp 4 - Học kì 1",
    "icon": "⚡",
    "color": "from-emerald-600 to-teal-700",
    "bgColor": "bg-emerald-100",
    "borderColor": "border-emerald-400",
    "description": "Thành thạo nhân chia số có hai chữ số, tính chất giao hoán, kết hợp và giải bài toán Trung bình cộng.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l2_1",
        "title": "Nhân với số có hai chữ số",
        "question": "Tính: 142 x 25 = ?",
        "options": [
          "3550",
          "3500",
          "3450",
          "3650"
        ],
        "correctAnswer": "3550",
        "hint": "142 x 5 = 710; 142 x 20 = 2840. Tổng 710 + 2840 = 3550.",
        "explanation": "142 x 5 = 710; 142 x 20 = 2840. Tổng 710 + 2840 = 3550. Do đó, đáp án chính xác là 3550."
      },
      {
        "id": "g4_l2_2",
        "title": "Chia cho số có hai chữ số",
        "question": "Tính: 4860 : 36 = ?",
        "options": [
          "135",
          "125",
          "145",
          "130"
        ],
        "correctAnswer": "135",
        "hint": "48 : 36 = 1 (dư 12), hạ 6 được 126 : 36 = 3 (dư 18), hạ 0 được 180 : 36 = 5. Kết quả là 135.",
        "explanation": "48 : 36 = 1 (dư 12), hạ 6 được 126 : 36 = 3 (dư 18), hạ 0 được 180 : 36 = 5. Kết quả là 135. Do đó, đáp án chính xác là 135."
      },
      {
        "id": "g4_l2_3",
        "title": "Tính chất giao hoán và kết hợp của phép cộng",
        "question": "Tính nhanh: 125 + 378 + 875 = ?",
        "options": [
          "1378",
          "1278",
          "1478",
          "1350"
        ],
        "correctAnswer": "1378",
        "hint": "Gộp (125 + 875) = 1000, sau đó lấy 1000 + 378 = 1378.",
        "explanation": "Gộp (125 + 875) = 1000, sau đó lấy 1000 + 378 = 1378. Do đó, đáp án chính xác là 1378."
      },
      {
        "id": "g4_l2_4",
        "title": "Tính chất nhân một số với một tổng",
        "question": "Tính nhanh: 38 x 45 + 38 x 55 = ?",
        "options": [
          "3800",
          "380",
          "38 000",
          "4000"
        ],
        "correctAnswer": "3800",
        "hint": "Đặt thừa số chung: 38 x (45 + 55) = 38 x 100 = 3800.",
        "explanation": "Đặt thừa số chung: 38 x (45 + 55) = 38 x 100 = 3800. Do đó, đáp án chính xác là 3800."
      },
      {
        "id": "g4_l2_5",
        "title": "Tìm số trung bình cộng",
        "question": "Tìm số trung bình cộng của ba số: 24, 36 và 60?",
        "options": [
          "40",
          "45",
          "35",
          "50"
        ],
        "correctAnswer": "40",
        "hint": "TBC = Tổng các số chia cho số các số hạng: (24 + 36 + 60) : 3 = 120 : 3 = 40.",
        "explanation": "TBC = Tổng các số chia cho số các số hạng: (24 + 36 + 60) : 3 = 120 : 3 = 40. Do đó, đáp án chính xác là 40."
      },
      {
        "id": "g4_l2_6",
        "title": "Bài toán thực tế Trung bình cộng",
        "question": "Ngày thứ nhất một cửa hàng bán được 150 kg gạo, ngày thứ hai bán được 250 kg gạo. Hỏi trung bình mỗi ngày bán được bao nhiêu kg gạo?",
        "options": [
          "200 kg",
          "210 kg",
          "190 kg",
          "400 kg"
        ],
        "correctAnswer": "200 kg",
        "hint": "(150 + 250) : 2 = 400 : 2 = 200 kg gạo.",
        "explanation": "(150 + 250) : 2 = 400 : 2 = 200 kg gạo. Do đó, đáp án chính xác là 200 kg."
      },
      {
        "id": "g4_l2_7",
        "title": "Nhân nhẩm với 11",
        "question": "Tính nhẩm: 45 x 11 = ?",
        "options": [
          "495",
          "455",
          "545",
          "485"
        ],
        "correctAnswer": "495",
        "hint": "Lấy 4 + 5 = 9 rồi viết chữ số 9 vào giữa hai chữ số 4 và 5 được 495.",
        "explanation": "Lấy 4 + 5 = 9 rồi viết chữ số 9 vào giữa hai chữ số 4 và 5 được 495. Do đó, đáp án chính xác là 495."
      },
      {
        "id": "g4_l2_8",
        "title": "Tìm x trong phép chia",
        "question": "Tìm x biết: x : 15 = 40",
        "options": [
          "600",
          "500",
          "60",
          "550"
        ],
        "correctAnswer": "600",
        "hint": "x = 40 x 15 = 600.",
        "explanation": "x = 40 x 15 = 600. Do đó, đáp án chính xác là 600."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t2_1",
        "title": "Timo: Tính nhanh phân phối nâng cao",
        "question": "Tính nhanh: 1999 x 2001 - 1999 x 1999 = ?",
        "options": [
          "3998",
          "1999",
          "2000",
          "4000"
        ],
        "correctAnswer": "3998",
        "hint": "Đặt 1999 ra ngoài: 1999 x (2001 - 1999) = 1999 x 2 = 3998.",
        "explanation": "Đặt 1999 ra ngoài: 1999 x (2001 - 1999) = 1999 x 2 = 3998. Do đó, đáp án chính xác là 3998."
      },
      {
        "id": "g4_t2_2",
        "title": "Timo: Trung bình cộng thêm một người",
        "question": "Trung bình cộng số tuổi của 4 bạn là 10 tuổi. Khi có thêm cô giáo 30 tuổi cùng tham gia thì tuổi trung bình của cả 5 người là:",
        "options": [
          "14 tuổi",
          "12 tuổi",
          "15 tuổi",
          "16 tuổi"
        ],
        "correctAnswer": "14 tuổi",
        "hint": "Tổng tuổi của 4 bạn: 4 x 10 = 40 tuổi. Tổng tuổi cả 5 người: 40 + 30 = 70 tuổi. TBC mới: 70 : 5 = 14 tuổi.",
        "explanation": "Tổng tuổi của 4 bạn: 4 x 10 = 40 tuổi. Tổng tuổi cả 5 người: 40 + 30 = 70 tuổi. TBC mới: 70 : 5 = 14 tuổi. Do đó, đáp án chính xác là 14 tuổi."
      },
      {
        "id": "g4_t2_3",
        "title": "Timo: Phép chia có thương và số dư bằng nhau",
        "question": "Tìm số tự nhiên lớn nhất có 2 chữ số sao cho chia cho 7 có số thương và số dư bằng nhau?",
        "options": [
          "48",
          "56",
          "96",
          "42"
        ],
        "correctAnswer": "48",
        "hint": "Số chia là 7 nên số dư lớn nhất là 6. Thương cũng bằng 6. Số cần tìm là: 6 x 7 + 6 = 48.",
        "explanation": "Số chia là 7 nên số dư lớn nhất là 6. Thương cũng bằng 6. Số cần tìm là: 6 x 7 + 6 = 48. Do đó, đáp án chính xác là 48."
      }
    ]
  },
  {
    "id": "g4_geometry_angles_parallel",
    "grade": 4,
    "semester": 1,
    "title": "Góc Nhọn, Tù, Bẹt & Hai Đường Thẳng Song Song",
    "badge": "Lớp 4 - Học kì 1",
    "icon": "📐",
    "color": "from-amber-500 to-orange-600",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Phân loại các góc (nhọn, tù, bẹt, vuông); quan sát và vẽ hai đường thẳng song song, vuông góc.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l3_1",
        "title": "Nhận biết góc bẹt",
        "question": "Góc bẹt bằng mấy góc vuông?",
        "options": [
          "2 góc vuông (180 độ)",
          "1 góc vuông",
          "3 góc vuông",
          "4 góc vuông"
        ],
        "correctAnswer": "2 góc vuông (180 độ)",
        "hint": "Góc bẹt có hai cạnh nằm trên một đường thẳng, số đo bằng 180 độ = 2 góc vuông.",
        "explanation": "Góc bẹt có hai cạnh nằm trên một đường thẳng, số đo bằng 180 độ = 2 góc vuông. Do đó, đáp án chính xác là 2 góc vuông (180 độ)."
      },
      {
        "id": "g4_l3_2",
        "title": "So sánh góc tù và góc vuông",
        "question": "Góc tù có đặc điểm gì so với góc vuông và góc bẹt?",
        "options": [
          "Lớn hơn góc vuông và bé hơn góc bẹt",
          "Bé hơn góc vuông",
          "Lớn hơn góc bẹt",
          "Bằng 2 góc vuông"
        ],
        "correctAnswer": "Lớn hơn góc vuông và bé hơn góc bẹt",
        "hint": "Thứ tự độ lớn của các góc: Góc nhọn < Góc vuông < Góc tù < Góc bẹt.",
        "explanation": "Thứ tự độ lớn của các góc: Góc nhọn < Góc vuông < Góc tù < Góc bẹt. Vì vậy, kết quả đúng là Lớn hơn góc vuông và bé hơn góc bẹt."
      },
      {
        "id": "g4_l3_3",
        "title": "Hai đường thẳng vuông góc",
        "question": "Hai đường thẳng vuông góc với nhau tạo thành mấy góc vuông tại giao điểm?",
        "options": [
          "4 góc vuông",
          "2 góc vuông",
          "1 góc vuông",
          "3 góc vuông"
        ],
        "correctAnswer": "4 góc vuông",
        "hint": "Hai đường thẳng vuông góc cắt nhau tạo thành 4 góc vuông xung quanh điểm giao nhau.",
        "explanation": "Hai đường thẳng vuông góc cắt nhau tạo thành 4 góc vuông xung quanh điểm giao nhau. Vì vậy, kết quả đúng là 4 góc vuông."
      },
      {
        "id": "g4_l3_4",
        "title": "Hai đường thẳng song song",
        "question": "Đặc điểm của hai đường thẳng song song là gì?",
        "options": [
          "Không bao giờ cắt nhau",
          "Cắt nhau tại 1 điểm",
          "Tạo thành góc vuông",
          "Trùng khít lên nhau"
        ],
        "correctAnswer": "Không bao giờ cắt nhau",
        "hint": "Hai đường thẳng song song dù kéo dài mãi mãi về hai phía cũng không bao giờ có điểm chung.",
        "explanation": "Hai đường thẳng song song dù kéo dài mãi mãi về hai phía cũng không bao giờ có điểm chung. Vì vậy, kết quả đúng là Không bao giờ cắt nhau."
      },
      {
        "id": "g4_l3_5",
        "title": "Các cặp cạnh song song trong hình chữ nhật",
        "question": "Hình chữ nhật có mấy cặp cạnh đối diện song song với nhau?",
        "options": [
          "2 cặp cạnh song song",
          "1 cặp cạnh song song",
          "4 cặp cạnh song song",
          "0 cặp"
        ],
        "correctAnswer": "2 cặp cạnh song song",
        "hint": "Hai chiều dài song song với nhau (1 cặp), hai chiều rộng song song với nhau (1 cặp), tổng là 2 cặp.",
        "explanation": "Hai chiều dài song song với nhau (1 cặp), hai chiều rộng song song với nhau (1 cặp), tổng là 2 cặp. Vì vậy, kết quả đúng là 2 cặp cạnh song song."
      },
      {
        "id": "g4_l3_6",
        "title": "Độ lớn góc nhọn",
        "question": "Góc có số đo 45 độ là loại góc nào?",
        "options": [
          "Góc nhọn",
          "Góc vuông",
          "Góc tù",
          "Góc bẹt"
        ],
        "correctAnswer": "Góc nhọn",
        "hint": "Góc bé hơn 90 độ là góc nhọn (45 độ < 90 độ).",
        "explanation": "Góc bé hơn 90 độ là góc nhọn (45 độ < 90 độ). Vì vậy, kết quả đúng là Góc nhọn."
      },
      {
        "id": "g4_l3_7",
        "title": "Góc tạo bởi kim đồng hồ lúc 6 giờ",
        "question": "Lúc 6 giờ đúng, kim giờ và kim phút của đồng hồ tạo thành góc gì?",
        "options": [
          "Góc bẹt",
          "Góc vuông",
          "Góc tù",
          "Góc nhọn"
        ],
        "correctAnswer": "Góc bẹt",
        "hint": "Kim dài chỉ số 12, kim ngắn chỉ số 6, tạo thành một đường thẳng (góc bẹt 180 độ).",
        "explanation": "Kim dài chỉ số 12, kim ngắn chỉ số 6, tạo thành một đường thẳng (góc bẹt 180 độ). Vì vậy, kết quả đúng là Góc bẹt."
      },
      {
        "id": "g4_l3_8",
        "title": "Cạnh đáy và đường cao",
        "question": "Đoạn thẳng kẻ từ đỉnh và vuông góc với cạnh đáy của hình tam giác được gọi là gì?",
        "options": [
          "Đường cao",
          "Đường chéo",
          "Đoạn thẳng trung bình",
          "Cạnh bên"
        ],
        "correctAnswer": "Đường cao",
        "hint": "Đoạn thẳng vuông góc kẻ từ đỉnh xuống đáy chính là đường cao của hình tam giác.",
        "explanation": "Đoạn thẳng vuông góc kẻ từ đỉnh xuống đáy chính là đường cao của hình tam giác. Vì vậy, kết quả đúng là Đường cao."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t3_1",
        "title": "Timo: Đếm góc nhọn",
        "question": "Cho 4 tia chung gốc O phân biệt. Hỏi có tất cả bao nhiêu góc được tạo thành từ 4 tia đó?",
        "options": [
          "6 góc",
          "4 góc",
          "8 góc",
          "12 góc"
        ],
        "correctAnswer": "6 góc",
        "hint": "Số góc tạo bởi 4 tia chung gốc là: (4 x 3) : 2 = 6 góc.",
        "explanation": "Số góc tạo bởi 4 tia chung gốc là: (4 x 3) : 2 = 6 góc. Do đó, đáp án chính xác là 6 góc."
      },
      {
        "id": "g4_t3_2",
        "title": "Timo: Góc kim đồng hồ lúc 4 giờ",
        "question": "Lúc 4 giờ đúng, góc tạo bởi kim giờ và kim phút là bao nhiêu độ?",
        "options": [
          "120 độ",
          "90 độ",
          "150 độ",
          "100 độ"
        ],
        "correctAnswer": "120 độ",
        "hint": "Mỗi khoảng cách giữa hai số trên đồng hồ là 30 độ (360 : 12 = 30 độ). Lúc 4 giờ có 4 khoảng: 4 x 30 = 120 độ.",
        "explanation": "Mỗi khoảng cách giữa hai số trên đồng hồ là 30 độ (360 : 12 = 30 độ). Lúc 4 giờ có 4 khoảng: 4 x 30 = 120 độ. Do đó, đáp án chính xác là 120 độ."
      },
      {
        "id": "g4_t3_3",
        "title": "Timo: Đếm hình bình hành",
        "question": "Một lưới hình gồm 3 đường thẳng song song nằm ngang cắt 4 đường thẳng song song thẳng đứng. Có bao nhiêu hình bình hành?",
        "options": [
          "18 hình",
          "12 hình",
          "24 hình",
          "15 hình"
        ],
        "correctAnswer": "18 hình",
        "hint": "Chọn 2 đường nằm ngang: (3 x 2) / 2 = 3 cách. Chọn 2 đường thẳng đứng: (4 x 3) / 2 = 6 cách. Số hình bình hành = 3 x 6 = 18 hình.",
        "explanation": "Chọn 2 đường nằm ngang: (3 x 2) / 2 = 3 cách. Chọn 2 đường thẳng đứng: (4 x 3) / 2 = 6 cách. Số hình bình hành = 3 x 6 = 18 hình. Do đó, đáp án chính xác là 18 hình."
      }
    ]
  },
  {
    "id": "g4_units_ton_area",
    "grade": 4,
    "semester": 1,
    "title": "Đơn Vị Đo Khối Lượng (Tấn, Tạ, Yến) & Diện Tích (dm2, m2, mm2)",
    "badge": "Lớp 4 - Học kì 1",
    "icon": "⚖️",
    "color": "from-purple-600 to-pink-700",
    "bgColor": "bg-purple-100",
    "borderColor": "border-purple-400",
    "description": "Chuyển đổi bảng đơn vị khối lượng (yến, tạ, tấn) và bảng đơn vị diện tích (mm2, cm2, dm2, m2).",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l4_1",
        "title": "Đổi tấn sang ki-lô-gam",
        "question": "1 tấn bằng bao nhiêu ki-lô-gam (kg)?",
        "options": [
          "1000 kg",
          "100 kg",
          "10 000 kg",
          "10 kg"
        ],
        "correctAnswer": "1000 kg",
        "hint": "1 tấn = 10 tạ = 100 yến = 1000 kg.",
        "explanation": "1 tấn = 10 tạ = 100 yến = 1000 kg. Do đó, đáp án chính xác là 1000 kg."
      },
      {
        "id": "g4_l4_2",
        "title": "Đổi tạ sang ki-lô-gam",
        "question": "1 tạ bằng bao nhiêu ki-lô-gam (kg)?",
        "options": [
          "100 kg",
          "10 kg",
          "1000 kg",
          "50 kg"
        ],
        "correctAnswer": "100 kg",
        "hint": "1 tạ = 10 yến = 100 kg.",
        "explanation": "1 tạ = 10 yến = 100 kg. Do đó, đáp án chính xác là 100 kg."
      },
      {
        "id": "g4_l4_3",
        "title": "Đổi mét vuông sang đề-xi-mét vuông",
        "question": "1 mét vuông (m2) bằng bao nhiêu đề-xi-mét vuông (dm2)?",
        "options": [
          "100 dm2",
          "10 dm2",
          "1000 dm2",
          "10 000 dm2"
        ],
        "correctAnswer": "100 dm2",
        "hint": "Trong bảng đơn vị đo diện tích, mỗi đơn vị gấp 100 lần đơn vị liền sau nó: 1 m2 = 100 dm2.",
        "explanation": "Trong bảng đơn vị đo diện tích, mỗi đơn vị gấp 100 lần đơn vị liền sau nó: 1 m2 = 100 dm2. Do đó, đáp án chính xác là 100 dm2."
      },
      {
        "id": "g4_l4_4",
        "title": "Đổi mét vuông sang xăng-ti-mét vuông",
        "question": "1 mét vuông (m2) bằng bao nhiêu xăng-ti-mét vuông (cm2)?",
        "options": [
          "10 000 cm2",
          "1000 cm2",
          "100 cm2",
          "100 000 cm2"
        ],
        "correctAnswer": "10 000 cm2",
        "hint": "1 m2 = 100 dm2 = 10 000 cm2.",
        "explanation": "1 m2 = 100 dm2 = 10 000 cm2. Do đó, đáp án chính xác là 10 000 cm2."
      },
      {
        "id": "g4_l4_5",
        "title": "Đổi đơn vị hỗn hợp khối lượng",
        "question": "3 tấn 50 kg bằng bao nhiêu kg?",
        "options": [
          "3050 kg",
          "3500 kg",
          "350 kg",
          "3005 kg"
        ],
        "correctAnswer": "3050 kg",
        "hint": "3 tấn = 3000 kg. Cộng thêm 50 kg = 3050 kg.",
        "explanation": "3 tấn = 3000 kg. Cộng thêm 50 kg = 3050 kg. Do đó, đáp án chính xác là 3050 kg."
      },
      {
        "id": "g4_l4_6",
        "title": "Thực hành tính diện tích phòng học",
        "question": "Một phòng học hình chữ nhật dài 8 m, rộng 6 m. Diện tích phòng học đó là:",
        "options": [
          "48 m2",
          "28 m",
          "480 m2",
          "56 m2"
        ],
        "correctAnswer": "48 m2",
        "hint": "Diện tích = dài x rộng = 8 x 6 = 48 m2.",
        "explanation": "Diện tích = dài x rộng = 8 x 6 = 48 m2. Do đó, đáp án chính xác là 48 m2."
      },
      {
        "id": "g4_l4_7",
        "title": "Số giây trong một giờ",
        "question": "1 giờ có bao nhiêu giây?",
        "options": [
          "3600 giây",
          "60 giây",
          "600 giây",
          "120 giây"
        ],
        "correctAnswer": "3600 giây",
        "hint": "1 giờ = 60 phút, mỗi phút = 60 giây. Vậy 1 giờ = 60 x 60 = 3600 giây.",
        "explanation": "1 giờ = 60 phút, mỗi phút = 60 giây. Vậy 1 giờ = 60 x 60 = 3600 giây. Do đó, đáp án chính xác là 3600 giây."
      },
      {
        "id": "g4_l4_8",
        "title": "Nhận biết thế kỉ",
        "question": "Năm 2026 thuộc thế kỉ nào?",
        "options": [
          "Thế kỉ XXI (21)",
          "Thế kỉ XX (20)",
          "Thế kỉ XXII (22)",
          "Thế kỉ XIX (19)"
        ],
        "correctAnswer": "Thế kỉ XXI (21)",
        "hint": "Từ năm 2001 đến hết năm 2100 thuộc thế kỉ 21 (XXI).",
        "explanation": "Từ năm 2001 đến hết năm 2100 thuộc thế kỉ 21 (XXI). Vì vậy, kết quả đúng là Thế kỉ XXI (21)."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t4_1",
        "title": "Timo: Lát gạch sàn nhà",
        "question": "Một căn phòng hình chữ nhật có diện tích 24 m2. Người ta dùng các viên gạch vuông cạnh 40 cm để lát sàn. Cần bao nhiêu viên gạch?",
        "options": [
          "150 viên",
          "120 viên",
          "100 viên",
          "200 viên"
        ],
        "correctAnswer": "150 viên",
        "hint": "Đổi: 24 m2 = 240 000 cm2. Diện tích 1 viên gạch: 40 x 40 = 1600 cm2. Số gạch cần dùng: 240 000 : 1600 = 150 viên gạch.",
        "explanation": "Đổi: 24 m2 = 240 000 cm2. Diện tích 1 viên gạch: 40 x 40 = 1600 cm2. Số gạch cần dùng: 240 000 : 1600 = 150 viên gạch. Do đó, đáp án chính xác là 150 viên."
      },
      {
        "id": "g4_t4_2",
        "title": "Timo: Bài toán xe chở hàng quá tải",
        "question": "Một xe tải được chở tối đa 3 tấn hàng. Trên xe đã có 15 tạ xi măng và 800 kg cát. Xe còn có thể chở thêm tối đa bao nhiêu kg hàng nữa?",
        "options": [
          "700 kg",
          "500 kg",
          "1000 kg",
          "200 kg"
        ],
        "correctAnswer": "700 kg",
        "hint": "Đổi: 3 tấn = 3000 kg; 15 tạ = 1500 kg. Hàng đã có: 1500 + 800 = 2300 kg. Có thể chở thêm: 3000 - 2300 = 700 kg.",
        "explanation": "Đổi: 3 tấn = 3000 kg; 15 tạ = 1500 kg. Hàng đã có: 1500 + 800 = 2300 kg. Có thể chở thêm: 3000 - 2300 = 700 kg. Do đó, đáp án chính xác là 700 kg."
      },
      {
        "id": "g4_t4_3",
        "title": "Timo: Năm nhuận và thế kỉ",
        "question": "Năm nhuận có 366 ngày. Hỏi năm nhuận có bao nhiêu tuần lễ và dư mấy ngày?",
        "options": [
          "52 tuần và dư 2 ngày",
          "52 tuần và dư 1 ngày",
          "51 tuần và dư 5 ngày",
          "53 tuần và dư 0 ngày"
        ],
        "correctAnswer": "52 tuần và dư 2 ngày",
        "hint": "366 : 7 = 52 (dư 2), vì 52 x 7 = 364 và 366 - 364 = 2 ngày.",
        "explanation": "366 : 7 = 52 (dư 2), vì 52 x 7 = 364 và 366 - 364 = 2 ngày. Do đó, đáp án chính xác là 52 tuần và dư 2 ngày."
      }
    ]
  },
  {
    "id": "g4_fractions_intro",
    "grade": 4,
    "semester": 2,
    "title": "Phân Số, Rút Gọn & So Sánh Phân Số",
    "badge": "Lớp 4 - Học kì 2",
    "icon": "🍰",
    "color": "from-rose-600 to-red-700",
    "bgColor": "bg-rose-100",
    "borderColor": "border-rose-400",
    "description": "Bản chất tử số và mẫu số, tính chất cơ bản, quy đồng mẫu số và so sánh phân số.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l5_1",
        "title": "Ý nghĩa tử số và mẫu số",
        "question": "Trong phân số 3/7, chữ số 3 và chữ số 7 lần lượt được gọi là gì?",
        "options": [
          "3 là tử số, 7 là mẫu số",
          "3 là mẫu số, 7 là tử số",
          "Cả hai đều là tử số",
          "3 là số chia, 7 là số bị chia"
        ],
        "correctAnswer": "3 là tử số, 7 là mẫu số",
        "hint": "Số viết trên gạch ngang là tử số, số viết dưới gạch ngang là mẫu số (mẫu số luôn khác 0).",
        "explanation": "Số viết trên gạch ngang là tử số, số viết dưới gạch ngang là mẫu số (mẫu số luôn khác 0). Vì vậy, kết quả đúng là 3 là tử số, 7 là mẫu số."
      },
      {
        "id": "g4_l5_2",
        "title": "Rút gọn phân số",
        "question": "Rút gọn phân số 18/24 về phân số tối giản ta được:",
        "options": [
          "3/4",
          "6/8",
          "9/12",
          "2/3"
        ],
        "correctAnswer": "3/4",
        "hint": "Chia cả tử số và mẫu số cho 6 (ước chung lớn nhất): (18 : 6) / (24 : 6) = 3/4.",
        "explanation": "Chia cả tử số và mẫu số cho 6 (ước chung lớn nhất): (18 : 6) / (24 : 6) = 3/4. Do đó, đáp án chính xác là 3/4."
      },
      {
        "id": "g4_l5_3",
        "title": "Quy đồng mẫu số hai phân số",
        "question": "Mẫu số chung nhỏ nhất của hai phân số 1/4 và 3/6 là:",
        "options": [
          "12",
          "24",
          "16",
          "8"
        ],
        "correctAnswer": "12",
        "hint": "12 vừa chia hết cho 4 (12:4=3) vừa chia hết cho 6 (12:6=2).",
        "explanation": "12 vừa chia hết cho 4 (12:4=3) vừa chia hết cho 6 (12:6=2). Do đó, đáp án chính xác là 12."
      },
      {
        "id": "g4_l5_4",
        "title": "So sánh phân số cùng mẫu số",
        "question": "Điền dấu thích hợp: 5/9 ... 7/9",
        "options": [
          "<",
          ">",
          "="
        ],
        "correctAnswer": "<",
        "hint": "Hai phân số có cùng mẫu số dương, phân số nào có tử số bé hơn thì bé hơn: 5 < 7 nên 5/9 < 7/9.",
        "explanation": "Hai phân số có cùng mẫu số dương, phân số nào có tử số bé hơn thì bé hơn: 5 < 7 nên 5/9 < 7/9. Vì vậy, kết quả đúng là <."
      },
      {
        "id": "g4_l5_5",
        "title": "So sánh phân số với 1",
        "question": "Phân số nào dưới đây lớn hơn 1?",
        "options": [
          "8/5",
          "5/8",
          "7/7",
          "3/4"
        ],
        "correctAnswer": "8/5",
        "hint": "Phân số có tử số lớn hơn mẫu số (8 > 5) thì phân số đó lớn hơn 1.",
        "explanation": "Phân số có tử số lớn hơn mẫu số (8 > 5) thì phân số đó lớn hơn 1. Vì vậy, kết quả đúng là 8/5."
      },
      {
        "id": "g4_l5_6",
        "title": "Phân số bằng nhau",
        "question": "Điền số thích hợp vào ô trống: 2/5 = ?/20",
        "options": [
          "8",
          "10",
          "6",
          "12"
        ],
        "correctAnswer": "8",
        "hint": "Mẫu số nhân với 4 (5 x 4 = 20) thì tử số cũng nhân với 4: 2 x 4 = 8.",
        "explanation": "Mẫu số nhân với 4 (5 x 4 = 20) thì tử số cũng nhân với 4: 2 x 4 = 8. Do đó, đáp án chính xác là 8."
      },
      {
        "id": "g4_l5_7",
        "title": "So sánh hai phân số cùng tử số",
        "question": "Điền dấu thích hợp: 3/5 ... 3/8",
        "options": [
          ">",
          "<",
          "="
        ],
        "correctAnswer": ">",
        "hint": "Hai phân số có cùng tử số, phân số nào có mẫu số bé hơn thì phân số đó lớn hơn: 5 < 8 nên 3/5 > 3/8.",
        "explanation": "Hai phân số có cùng tử số, phân số nào có mẫu số bé hơn thì phân số đó lớn hơn: 5 < 8 nên 3/5 > 3/8. Vì vậy, kết quả đúng là >."
      },
      {
        "id": "g4_l5_8",
        "title": "Phân số chỉ phần đã tô màu",
        "question": "Một hình vuông chia làm 8 ô bằng nhau, đã tô màu 5 ô. Phân số chỉ phần chưa tô màu là:",
        "options": [
          "3/8",
          "5/8",
          "8/5",
          "1/8"
        ],
        "correctAnswer": "3/8",
        "hint": "Số ô chưa tô màu: 8 - 5 = 3 ô. Phân số chỉ phần chưa tô màu là 3/8.",
        "explanation": "Số ô chưa tô màu: 8 - 5 = 3 ô. Phân số chỉ phần chưa tô màu là 3/8. Do đó, đáp án chính xác là 3/8."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t5_1",
        "title": "Timo: Phân số kẹp giữa",
        "question": "Tìm một phân số có mẫu số là 15 nằm giữa hai phân số 1/5 và 1/3?",
        "options": [
          "4/15",
          "2/15",
          "3/15",
          "5/15"
        ],
        "correctAnswer": "4/15",
        "hint": "Quy đồng mẫu số 15: 1/5 = 3/15 và 1/3 = 5/15. Phân số nằm giữa 3/15 và 5/15 là 4/15.",
        "explanation": "Quy đồng mẫu số 15: 1/5 = 3/15 và 1/3 = 5/15. Phân số nằm giữa 3/15 và 5/15 là 4/15. Do đó, đáp án chính xác là 4/15."
      },
      {
        "id": "g4_t5_2",
        "title": "Timo: Phân số không đổi giá trị",
        "question": "Nếu cộng thêm 6 vào tử số của phân số 2/5 thì phải cộng thêm bao nhiêu vào mẫu số để giá trị phân số không đổi?",
        "options": [
          "15",
          "12",
          "10",
          "20"
        ],
        "correctAnswer": "15",
        "hint": "Tử số mới là: 2 + 6 = 8 (gấp 4 lần tử số cũ). Mẫu số mới phải là: 5 x 4 = 20. Vậy phải cộng thêm vào mẫu số: 20 - 5 = 15.",
        "explanation": "Tử số mới là: 2 + 6 = 8 (gấp 4 lần tử số cũ). Mẫu số mới phải là: 5 x 4 = 20. Vậy phải cộng thêm vào mẫu số: 20 - 5 = 15. Do đó, đáp án chính xác là 15."
      },
      {
        "id": "g4_t5_3",
        "title": "Timo: So sánh phân số bằng phần bù",
        "question": "So sánh hai phân số: 2024/2025 và 2025/2026. Phân số nào lớn hơn?",
        "options": [
          "2025/2026 lớn hơn",
          "2024/2025 lớn hơn",
          "Hai phân số bằng nhau",
          "Không so sánh được"
        ],
        "correctAnswer": "2025/2026 lớn hơn",
        "hint": "Phần bù đến 1 là: 1/2025 và 1/2026. Vì 1/2026 < 1/2025 nên 2025/2026 lớn hơn.",
        "explanation": "Phần bù đến 1 là: 1/2025 và 1/2026. Vì 1/2026 < 1/2025 nên 2025/2026 lớn hơn. Vì vậy, kết quả đúng là 2025/2026 lớn hơn."
      }
    ]
  },
  {
    "id": "g4_fraction_operations",
    "grade": 4,
    "semester": 2,
    "title": "Phép Cộng, Trừ, Nhân, Chia Phân Số",
    "badge": "Lớp 4 - Học kì 2",
    "icon": "🍕",
    "color": "from-cyan-600 to-blue-700",
    "bgColor": "bg-cyan-100",
    "borderColor": "border-cyan-400",
    "description": "Thành thạo 4 phép tính với phân số và bài toán tìm phân số của một số.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l6_1",
        "title": "Cộng hai phân số cùng mẫu",
        "question": "Tính: 3/8 + 2/8 = ?",
        "options": [
          "5/8",
          "5/16",
          "1/8",
          "6/8"
        ],
        "correctAnswer": "5/8",
        "hint": "Muốn cộng hai phân số cùng mẫu số, ta cộng hai tử số và giữ nguyên mẫu số: (3 + 2)/8 = 5/8.",
        "explanation": "Muốn cộng hai phân số cùng mẫu số, ta cộng hai tử số và giữ nguyên mẫu số: (3 + 2)/8 = 5/8. Do đó, đáp án chính xác là 5/8."
      },
      {
        "id": "g4_l6_2",
        "title": "Cộng hai phân số khác mẫu",
        "question": "Tính: 1/3 + 1/6 = ?",
        "options": [
          "1/2 (hay 3/6)",
          "2/9",
          "2/6",
          "1/9"
        ],
        "correctAnswer": "1/2 (hay 3/6)",
        "hint": "Quy đồng mẫu: 1/3 = 2/6. Lấy 2/6 + 1/6 = 3/6 = 1/2.",
        "explanation": "Quy đồng mẫu: 1/3 = 2/6. Lấy 2/6 + 1/6 = 3/6 = 1/2. Do đó, đáp án chính xác là 1/2 (hay 3/6)."
      },
      {
        "id": "g4_l6_3",
        "title": "Trừ hai phân số",
        "question": "Tính: 5/6 - 1/2 = ?",
        "options": [
          "1/3 (hay 2/6)",
          "4/4",
          "4/6",
          "1/6"
        ],
        "correctAnswer": "1/3 (hay 2/6)",
        "hint": "Quy đồng 1/2 = 3/6. Lấy 5/6 - 3/6 = 2/6 = 1/3.",
        "explanation": "Quy đồng 1/2 = 3/6. Lấy 5/6 - 3/6 = 2/6 = 1/3. Do đó, đáp án chính xác là 1/3 (hay 2/6)."
      },
      {
        "id": "g4_l6_4",
        "title": "Nhân hai phân số",
        "question": "Tính: 2/3 x 4/5 = ?",
        "options": [
          "8/15",
          "6/15",
          "8/8",
          "6/8"
        ],
        "correctAnswer": "8/15",
        "hint": "Lấy tử số nhân với tử số, mẫu số nhân với mẫu số: (2 x 4) / (3 x 5) = 8/15.",
        "explanation": "Lấy tử số nhân với tử số, mẫu số nhân với mẫu số: (2 x 4) / (3 x 5) = 8/15. Do đó, đáp án chính xác là 8/15."
      },
      {
        "id": "g4_l6_5",
        "title": "Chia hai phân số",
        "question": "Tính: 3/7 : 2/5 = ?",
        "options": [
          "15/14",
          "6/35",
          "5/14",
          "14/15"
        ],
        "correctAnswer": "15/14",
        "hint": "Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược: 3/7 x 5/2 = 15/14.",
        "explanation": "Lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược: 3/7 x 5/2 = 15/14. Do đó, đáp án chính xác là 15/14."
      },
      {
        "id": "g4_l6_6",
        "title": "Tìm phân số của một số",
        "question": "Tìm 3/4 của 36 kg là bao nhiêu kg?",
        "options": [
          "27 kg",
          "24 kg",
          "28 kg",
          "30 kg"
        ],
        "correctAnswer": "27 kg",
        "hint": "Muốn tìm phân số của một số, ta lấy số đó nhân với phân số: 36 x 3/4 = (36 : 4) x 3 = 27 kg.",
        "explanation": "Muốn tìm phân số của một số, ta lấy số đó nhân với phân số: 36 x 3/4 = (36 : 4) x 3 = 27 kg. Do đó, đáp án chính xác là 27 kg."
      },
      {
        "id": "g4_l6_7",
        "title": "Nhân phân số với số tự nhiên",
        "question": "Tính: 5 x 3/10 = ?",
        "options": [
          "3/2 (hay 15/10)",
          "15/50",
          "8/10",
          "15/2"
        ],
        "correctAnswer": "3/2 (hay 15/10)",
        "hint": "5 x 3/10 = 15/10, rút gọn chia cả tử và mẫu cho 5 được 3/2.",
        "explanation": "5 x 3/10 = 15/10, rút gọn chia cả tử và mẫu cho 5 được 3/2. Do đó, đáp án chính xác là 3/2 (hay 15/10)."
      },
      {
        "id": "g4_l6_8",
        "title": "Giải toán thực tế phân số",
        "question": "Lớp 4A có 35 học sinh, trong đó 3/5 số học sinh là nữ. Hỏi lớp 4A có bao nhiêu học sinh nữ?",
        "options": [
          "21 học sinh",
          "14 học sinh",
          "20 học sinh",
          "25 học sinh"
        ],
        "correctAnswer": "21 học sinh",
        "hint": "Số học sinh nữ: 35 x 3/5 = (35 : 5) x 3 = 21 học sinh.",
        "explanation": "Số học sinh nữ: 35 x 3/5 = (35 : 5) x 3 = 21 học sinh. Do đó, đáp án chính xác là 21 học sinh."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t6_1",
        "title": "Timo: Tính tổng dãy phân số viễn thông",
        "question": "Tính tổng: 1/(1x2) + 1/(2x3) + 1/(3x4) + ... + 1/(9x10) = ?",
        "options": [
          "9/10",
          "1/10",
          "10/9",
          "8/9"
        ],
        "correctAnswer": "9/10",
        "hint": "Tách từng số hạng: 1 - 1/2 + 1/2 - 1/3 + ... + 1/9 - 1/10 = 1 - 1/10 = 9/10.",
        "explanation": "Tách từng số hạng: 1 - 1/2 + 1/2 - 1/3 + ... + 1/9 - 1/10 = 1 - 1/10 = 9/10. Do đó, đáp án chính xác là 9/10."
      },
      {
        "id": "g4_t6_2",
        "title": "Timo: Tìm số ban đầu khi biết phân số",
        "question": "Biết 2/3 số tuổi của Lan là 8 tuổi. Hỏi tuổi của Lan là bao nhiêu tuổi?",
        "options": [
          "12 tuổi",
          "10 tuổi",
          "16 tuổi",
          "14 tuổi"
        ],
        "correctAnswer": "12 tuổi",
        "hint": "Tuổi của Lan là: 8 : 2/3 = 8 x 3/2 = 12 tuổi.",
        "explanation": "Tuổi của Lan là: 8 : 2/3 = 8 x 3/2 = 12 tuổi. Do đó, đáp án chính xác là 12 tuổi."
      },
      {
        "id": "g4_t6_3",
        "title": "Timo: Tích của dãy phân số rút gọn chéo",
        "question": "Tính: (1 - 1/2) x (1 - 1/3) x (1 - 1/4) x ... x (1 - 1/100) = ?",
        "options": [
          "1/100",
          "1/99",
          "99/100",
          "2/100"
        ],
        "correctAnswer": "1/100",
        "hint": "Ta có: 1/2 x 2/3 x 3/4 x ... x 99/100. Rút gọn chéo các thừa số giống nhau ở tử và mẫu, còn lại 1/100.",
        "explanation": "Ta có: 1/2 x 2/3 x 3/4 x ... x 99/100. Rút gọn chéo các thừa số giống nhau ở tử và mẫu, còn lại 1/100. Vì vậy, kết quả đúng là 1/100."
      }
    ]
  },
  {
    "id": "g4_parallelogram_rhombus",
    "grade": 4,
    "semester": 2,
    "title": "Hình Bình Hành & Hình Thoi",
    "badge": "Lớp 4 - Học kì 2",
    "icon": "🔷",
    "color": "from-amber-600 to-yellow-700",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Đặc điểm hình bình hành, hình thoi; công thức tính diện tích hình bình hành và hình thoi.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l7_1",
        "title": "Đặc điểm hình bình hành",
        "question": "Hình bình hành có đặc điểm nào dưới đây?",
        "options": [
          "Có hai cặp cạnh đối diện song song và bằng nhau",
          "Có 4 góc vuông",
          "Có 4 cạnh bằng nhau",
          "Có hai đường chéo bằng nhau"
        ],
        "correctAnswer": "Có hai cặp cạnh đối diện song song và bằng nhau",
        "hint": "Hình bình hành có 2 cặp cạnh đối diện song song và có độ dài bằng nhau.",
        "explanation": "Hình bình hành có 2 cặp cạnh đối diện song song và có độ dài bằng nhau. Vì vậy, kết quả đúng là Có hai cặp cạnh đối diện song song và bằng nhau."
      },
      {
        "id": "g4_l7_2",
        "title": "Công thức diện tích hình bình hành",
        "question": "Diện tích hình bình hành được tính bằng công thức nào?",
        "options": [
          "S = a x h (độ dài đáy nhân chiều cao)",
          "S = (a + h) x 2",
          "S = (a x h) : 2",
          "S = a x a"
        ],
        "correctAnswer": "S = a x h (độ dài đáy nhân chiều cao)",
        "hint": "Diện tích hình bình hành bằng độ dài đáy nhân với chiều cao (cùng một đơn vị đo): S = a x h.",
        "explanation": "Diện tích hình bình hành bằng độ dài đáy nhân với chiều cao (cùng một đơn vị đo): S = a x h. Do đó, đáp án chính xác là S = a x h (độ dài đáy nhân chiều cao)."
      },
      {
        "id": "g4_l7_3",
        "title": "Tính diện tích hình bình hành",
        "question": "Một hình bình hành có độ dài đáy là 12 cm, chiều cao tương ứng là 7 cm. Diện tích của nó là:",
        "options": [
          "84 cm2",
          "42 cm2",
          "38 cm2",
          "96 cm2"
        ],
        "correctAnswer": "84 cm2",
        "hint": "S = 12 x 7 = 84 cm2.",
        "explanation": "S = 12 x 7 = 84 cm2. Do đó, đáp án chính xác là 84 cm2."
      },
      {
        "id": "g4_l7_4",
        "title": "Đặc điểm của hình thoi",
        "question": "Hình thoi có đặc điểm gì đặc biệt về hai đường chéo?",
        "options": [
          "Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường",
          "Bằng nhau",
          "Song song với nhau",
          "Không cắt nhau"
        ],
        "correctAnswer": "Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường",
        "hint": "Hình thoi có 4 cạnh bằng nhau, 2 đường chéo vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường.",
        "explanation": "Hình thoi có 4 cạnh bằng nhau, 2 đường chéo vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường. Vì vậy, kết quả đúng là Vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường."
      },
      {
        "id": "g4_l7_5",
        "title": "Công thức diện tích hình thoi",
        "question": "Diện tích hình thoi được tính bằng công thức nào (m, n là độ dài hai đường chéo)?",
        "options": [
          "S = (m x n) : 2",
          "S = m x n",
          "S = (m + n) : 2",
          "S = (m + n) x 2"
        ],
        "correctAnswer": "S = (m x n) : 2",
        "hint": "Diện tích hình thoi bằng tích độ dài hai đường chéo chia cho 2 (cùng đơn vị đo).",
        "explanation": "Diện tích hình thoi bằng tích độ dài hai đường chéo chia cho 2 (cùng đơn vị đo). Vì vậy, kết quả đúng là S = (m x n) : 2."
      },
      {
        "id": "g4_l7_6",
        "title": "Tính diện tích hình thoi",
        "question": "Một miếng kính hình thoi có độ dài hai đường chéo là 8 dm và 6 dm. Diện tích miếng kính đó là:",
        "options": [
          "24 dm2",
          "48 dm2",
          "14 dm2",
          "28 dm2"
        ],
        "correctAnswer": "24 dm2",
        "hint": "S = (8 x 6) : 2 = 48 : 2 = 24 dm2.",
        "explanation": "S = (8 x 6) : 2 = 48 : 2 = 24 dm2. Do đó, đáp án chính xác là 24 dm2."
      },
      {
        "id": "g4_l7_7",
        "title": "Chu vi hình thoi",
        "question": "Một hình thoi có cạnh dài 9 cm. Chu vi của hình thoi đó là:",
        "options": [
          "36 cm",
          "81 cm2",
          "18 cm",
          "27 cm"
        ],
        "correctAnswer": "36 cm",
        "hint": "Vì hình thoi có 4 cạnh bằng nhau nên chu vi P = cạnh x 4 = 9 x 4 = 36 cm.",
        "explanation": "Vì hình thoi có 4 cạnh bằng nhau nên chu vi P = cạnh x 4 = 9 x 4 = 36 cm. Do đó, đáp án chính xác là 36 cm."
      },
      {
        "id": "g4_l7_8",
        "title": "Tìm chiều cao hình bình hành",
        "question": "Hình bình hành có diện tích 72 cm2, đáy dài 9 cm. Chiều cao của hình bình hành là:",
        "options": [
          "8 cm",
          "7 cm",
          "9 cm",
          "6 cm"
        ],
        "correctAnswer": "8 cm",
        "hint": "Chiều cao = Diện tích chia cho độ dài đáy: 72 : 9 = 8 cm.",
        "explanation": "Chiều cao = Diện tích chia cho độ dài đáy: 72 : 9 = 8 cm. Do đó, đáp án chính xác là 8 cm."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t7_1",
        "title": "Timo: Diện tích hình thoi ghép từ 4 tam giác",
        "question": "Một hình thoi được ghép từ 4 hình tam giác vuông bằng nhau, mỗi tam giác vuông có 2 cạnh góc vuông là 3 cm và 4 cm. Diện tích hình thoi là:",
        "options": [
          "24 cm2",
          "12 cm2",
          "48 cm2",
          "20 cm2"
        ],
        "correctAnswer": "24 cm2",
        "hint": "Diện tích 1 tam giác vuông: (3 x 4) : 2 = 6 cm2. Hình thoi gồm 4 tam giác: 6 x 4 = 24 cm2.",
        "explanation": "Diện tích 1 tam giác vuông: (3 x 4) : 2 = 6 cm2. Hình thoi gồm 4 tam giác: 6 x 4 = 24 cm2. Do đó, đáp án chính xác là 24 cm2."
      },
      {
        "id": "g4_t7_2",
        "title": "Timo: Tỉ số diện tích khi tăng đường chéo",
        "question": "Nếu gấp đôi độ dài cả hai đường chéo của một hình thoi thì diện tích hình thoi mới gấp mấy lần diện tích hình thoi cũ?",
        "options": [
          "4 lần",
          "2 lần",
          "8 lần",
          "6 lần"
        ],
        "correctAnswer": "4 lần",
        "hint": "S_mới = (2m x 2n) : 2 = 4 x [(m x n) : 2] = 4 x S_cũ. Vậy diện tích tăng lên gấp 4 lần.",
        "explanation": "S_mới = (2m x 2n) : 2 = 4 x [(m x n) : 2] = 4 x S_cũ. Vậy diện tích tăng lên gấp 4 lần. Do đó, đáp án chính xác là 4 lần."
      },
      {
        "id": "g4_t7_3",
        "title": "Timo: Đếm hình bình hành lồng nhau",
        "question": "Trong một hình thang cân kẻ 1 đường song song với cạnh bên chia hình thang thành 1 hình bình hành và 1 tam giác. Nếu kẻ thêm đường chéo hình bình hành thì có bao nhiêu tam giác?",
        "options": [
          "3 hình tam giác",
          "2 hình tam giác",
          "4 hình tam giác",
          "5 hình tam giác"
        ],
        "correctAnswer": "3 hình tam giác",
        "hint": "Hình bình hành bị chia bởi đường chéo thành 2 tam giác, cộng với 1 tam giác ban đầu bên cạnh = 3 hình tam giác.",
        "explanation": "Hình bình hành bị chia bởi đường chéo thành 2 tam giác, cộng với 1 tam giác ban đầu bên cạnh = 3 hình tam giác. Do đó, đáp án chính xác là 3 hình tam giác."
      }
    ]
  },
  {
    "id": "g4_word_problems",
    "grade": 4,
    "semester": 2,
    "title": "Toán Điển Hình: Tổng - Hiệu, Tổng - Tỉ, Hiệu - Tỉ",
    "badge": "Lớp 4 - Học kì 2",
    "icon": "🎯",
    "color": "from-violet-600 to-purple-800",
    "bgColor": "bg-violet-100",
    "borderColor": "border-violet-400",
    "description": "Nắm vững 3 dạng toán kinh điển bậc Tiểu học: Tìm hai số khi biết Tổng và Hiệu, Tổng và Tỉ số, Hiệu và Tỉ số.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g4_l8_1",
        "title": "Dạng Tổng - Hiệu: Tìm số lớn",
        "question": "Công thức tìm số lớn khi biết Tổng và Hiệu của hai số là:",
        "options": [
          "Số lớn = (Tổng + Hiệu) : 2",
          "Số lớn = (Tổng - Hiệu) : 2",
          "Số lớn = Tổng + Hiệu",
          "Số lớn = Tổng x 2 - Hiệu"
        ],
        "correctAnswer": "Số lớn = (Tổng + Hiệu) : 2",
        "hint": "Ghi nhớ công thức kinh điển: Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng - Hiệu) : 2.",
        "explanation": "Ghi nhớ công thức kinh điển: Số lớn = (Tổng + Hiệu) : 2; Số bé = (Tổng - Hiệu) : 2. Do đó, đáp án chính xác là Số lớn = (Tổng + Hiệu) : 2."
      },
      {
        "id": "g4_l8_2",
        "title": "Bài toán Tổng - Hiệu thực tế",
        "question": "Hai bạn Lan và Mai có tất cả 48 cái kẹo. Mai có nhiều hơn Lan 12 cái kẹo. Hỏi Mai có bao nhiêu cái kẹo?",
        "options": [
          "30 cái kẹo",
          "18 cái kẹo",
          "36 cái kẹo",
          "24 cái kẹo"
        ],
        "correctAnswer": "30 cái kẹo",
        "hint": "Mai là số lớn: (48 + 12) : 2 = 60 : 2 = 30 cái kẹo. (Lan có: 30 - 12 = 18 cái kẹo).",
        "explanation": "Mai là số lớn: (48 + 12) : 2 = 60 : 2 = 30 cái kẹo. (Lan có: 30 - 12 = 18 cái kẹo). Do đó, đáp án chính xác là 30 cái kẹo."
      },
      {
        "id": "g4_l8_3",
        "title": "Dạng Tổng - Tỉ: Tính tổng số phần",
        "question": "Tổng hai số là 80, tỉ số của hai số là 1/3. Tổng số phần bằng nhau là:",
        "options": [
          "4 phần",
          "3 phần",
          "2 phần",
          "5 phần"
        ],
        "correctAnswer": "4 phần",
        "hint": "Số bé chiếm 1 phần, số lớn chiếm 3 phần. Tổng số phần bằng nhau: 1 + 3 = 4 phần.",
        "explanation": "Số bé chiếm 1 phần, số lớn chiếm 3 phần. Tổng số phần bằng nhau: 1 + 3 = 4 phần. Do đó, đáp án chính xác là 4 phần."
      },
      {
        "id": "g4_l8_4",
        "title": "Giải toán Tổng - Tỉ",
        "question": "Tổng hai số là 45, số bé bằng 2/3 số lớn. Tìm số lớn?",
        "options": [
          "27",
          "18",
          "30",
          "25"
        ],
        "correctAnswer": "27",
        "hint": "Tổng số phần: 2 + 3 = 5 phần. Giá trị 1 phần: 45 : 5 = 9. Số lớn: 9 x 3 = 27 (số bé là 9 x 2 = 18).",
        "explanation": "Tổng số phần: 2 + 3 = 5 phần. Giá trị 1 phần: 45 : 5 = 9. Số lớn: 9 x 3 = 27 (số bé là 9 x 2 = 18). Do đó, đáp án chính xác là 27."
      },
      {
        "id": "g4_l8_5",
        "title": "Dạng Hiệu - Tỉ: Tính hiệu số phần",
        "question": "Hiệu của hai số là 24, tỉ số là 1/4. Hiệu số phần bằng nhau là:",
        "options": [
          "3 phần",
          "4 phần",
          "5 phần",
          "2 phần"
        ],
        "correctAnswer": "3 phần",
        "hint": "Số lớn 4 phần, số bé 1 phần. Hiệu số phần: 4 - 1 = 3 phần.",
        "explanation": "Số lớn 4 phần, số bé 1 phần. Hiệu số phần: 4 - 1 = 3 phần. Do đó, đáp án chính xác là 3 phần."
      },
      {
        "id": "g4_l8_6",
        "title": "Giải toán Hiệu - Tỉ",
        "question": "Bố hơn con 28 tuổi, tuổi con bằng 1/5 tuổi bố. Hỏi con bao nhiêu tuổi?",
        "options": [
          "7 tuổi",
          "35 tuổi",
          "6 tuổi",
          "8 tuổi"
        ],
        "correctAnswer": "7 tuổi",
        "hint": "Hiệu số phần: 5 - 1 = 4 phần. Tuổi con = 28 : 4 x 1 = 7 tuổi (tuổi bố là 35 tuổi).",
        "explanation": "Hiệu số phần: 5 - 1 = 4 phần. Tuổi con = 28 : 4 x 1 = 7 tuổi (tuổi bố là 35 tuổi). Do đó, đáp án chính xác là 7 tuổi."
      },
      {
        "id": "g4_l8_7",
        "title": "Bài toán thửa ruộng Tổng - Tỉ",
        "question": "Một thửa ruộng hình chữ nhật có chu vi là 120 m, chiều rộng bằng 1/3 chiều dài. Chiều dài thửa ruộng là:",
        "options": [
          "45 m",
          "15 m",
          "30 m",
          "60 m"
        ],
        "correctAnswer": "45 m",
        "hint": "Nửa chu vi (tổng dài và rộng) = 120 : 2 = 60 m. Tổng số phần: 1 + 3 = 4 phần. Chiều dài = 60 : 4 x 3 = 45 m.",
        "explanation": "Nửa chu vi (tổng dài và rộng) = 120 : 2 = 60 m. Tổng số phần: 1 + 3 = 4 phần. Chiều dài = 60 : 4 x 3 = 45 m. Do đó, đáp án chính xác là 45 m."
      },
      {
        "id": "g4_l8_8",
        "title": "Dạng Tổng - Hiệu tuổi mẹ và con",
        "question": "Tổng số tuổi của hai mẹ con là 42 tuổi, mẹ sinh con năm mẹ 26 tuổi. Hỏi con bao nhiêu tuổi?",
        "options": [
          "8 tuổi",
          "34 tuổi",
          "10 tuổi",
          "6 tuổi"
        ],
        "correctAnswer": "8 tuổi",
        "hint": "Mẹ sinh con năm 26 tuổi nghĩa là mẹ hơn con 26 tuổi (Hiệu = 26). Tuổi con là số bé = (42 - 26) : 2 = 16 : 2 = 8 tuổi.",
        "explanation": "Mẹ sinh con năm 26 tuổi nghĩa là mẹ hơn con 26 tuổi (Hiệu = 26). Tuổi con là số bé = (42 - 26) : 2 = 16 : 2 = 8 tuổi. Do đó, đáp án chính xác là 8 tuổi."
      }
    ],
    "timoChallenges": [
      {
        "id": "g4_t8_1",
        "title": "Timo: Chuyển sách giữa hai ngăn",
        "question": "Hai ngăn sách có tất cả 120 cuốn. Nếu chuyển 15 cuốn từ ngăn trên xuống ngăn dưới thì ngăn dưới nhiều hơn ngăn trên 10 cuốn. Ban đầu ngăn trên có bao nhiêu cuốn?",
        "options": [
          "70 cuốn",
          "65 cuốn",
          "50 cuốn",
          "75 cuốn"
        ],
        "correctAnswer": "70 cuốn",
        "hint": "Sau khi chuyển: Ngăn trên = (120 - 10) : 2 = 55 cuốn. Ban đầu ngăn trên có: 55 + 15 = 70 cuốn.",
        "explanation": "Sau khi chuyển: Ngăn trên = (120 - 10) : 2 = 55 cuốn. Ban đầu ngăn trên có: 55 + 15 = 70 cuốn. Do đó, đáp án chính xác là 70 cuốn."
      },
      {
        "id": "g4_t8_2",
        "title": "Timo: Tuổi bố gấp 3 lần tuổi con sau 5 năm",
        "question": "Hiện nay bố hơn con 24 tuổi. Hỏi sau bao nhiêu năm nữa thì tuổi con bằng 1/3 tuổi bố?",
        "options": [
          "Khi con 12 tuổi (hiện nay nếu con 7 tuổi thì sau 5 năm)",
          "Sau 5 năm (khi con 12 tuổi, bố 36 tuổi)",
          "Sau 4 năm",
          "Sau 6 năm"
        ],
        "correctAnswer": "Sau 5 năm (khi con 12 tuổi, bố 36 tuổi)",
        "hint": "Hiệu số tuổi không đổi = 24. Khi tuổi con = 1/3 tuổi bố: Hiệu số phần = 2 phần. Tuổi con lúc đó = 24 : 2 = 12 tuổi.",
        "explanation": "Hiệu số tuổi không đổi = 24. Khi tuổi con = 1/3 tuổi bố: Hiệu số phần = 2 phần. Tuổi con lúc đó = 24 : 2 = 12 tuổi. Do đó, đáp án chính xác là Sau 5 năm (khi con 12 tuổi, bố 36 tuổi)."
      },
      {
        "id": "g4_t8_3",
        "title": "Timo: Vịt và gà tỉ số",
        "question": "Trang trại có số gà gấp đôi số vịt. Sau khi bán đi 10 con gà và mua thêm 10 con vịt thì số gà và số vịt bằng nhau. Ban đầu có bao nhiêu con gà?",
        "options": [
          "40 con gà",
          "20 con gà",
          "30 con gà",
          "50 con gà"
        ],
        "correctAnswer": "40 con gà",
        "hint": "Bán 10 gà, thêm 10 vịt thì bằng nhau nghĩa là gà hơn vịt: 10 + 10 = 20 con. Gà gấp đôi vịt nên gà hơn vịt đúng 1 lần số vịt. Vậy vịt = 20 con, gà = 40 con.",
        "explanation": "Bán 10 gà, thêm 10 vịt thì bằng nhau nghĩa là gà hơn vịt: 10 + 10 = 20 con. Gà gấp đôi vịt nên gà hơn vịt đúng 1 lần số vịt. Vậy vịt = 20 con, gà = 40 con. Do đó, đáp án chính xác là 40 con gà."
      }
    ]
  }
];
