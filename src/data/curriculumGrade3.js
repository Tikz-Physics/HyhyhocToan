// Dữ liệu chương trình Toán Lớp 3 chuẩn CTGDPT 2018
// Đầy đủ 8 Chủ đề kiến thức trọng tâm & Thử thách Tư duy Timo chuẩn Quốc tế

export const CURRICULUM_GRADE_3 = [
  {
    "id": "g3_multiplication_division_tables",
    "grade": 3,
    "semester": 1,
    "title": "Bảng Nhân, Chia 3, 4, 6, 7, 8, 9 & Gấp Số Lần",
    "badge": "Lớp 3 - Học kì 1",
    "icon": "✖️",
    "color": "from-blue-500 to-indigo-600",
    "bgColor": "bg-blue-100",
    "borderColor": "border-blue-400",
    "description": "Thành thạo bảng nhân chia từ 3 đến 9; giải toán gấp lên nhiều lần và giảm đi nhiều lần.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l1_1",
        "title": "Bảng nhân 7",
        "question": "Tính: 7 x 8 = ?",
        "options": [
          "56",
          "54",
          "48",
          "63"
        ],
        "correctAnswer": "56",
        "hint": "7 nhân 8 bằng 56 trong bảng nhân 7.",
        "explanation": "7 nhân 8 bằng 56 trong bảng nhân 7. Vì vậy, kết quả đúng là 56."
      },
      {
        "id": "g3_l1_2",
        "title": "Bảng chia 9",
        "question": "Tính: 72 : 9 = ?",
        "options": [
          "8",
          "9",
          "7",
          "6"
        ],
        "correctAnswer": "8",
        "hint": "Vì 9 x 8 = 72 nên 72 : 9 = 8.",
        "explanation": "Vì 9 x 8 = 72 nên 72 : 9 = 8. Do đó, đáp án chính xác là 8."
      },
      {
        "id": "g3_l1_3",
        "title": "Toán gấp lên nhiều lần",
        "question": "Đoạn thẳng thứ nhất dài 6 cm. Đoạn thẳng thứ hai dài gấp 4 lần đoạn thẳng thứ nhất. Đoạn thẳng thứ hai dài:",
        "options": [
          "24 cm",
          "10 cm",
          "18 cm",
          "30 cm"
        ],
        "correctAnswer": "24 cm",
        "hint": "Muốn gấp một số lên nhiều lần, ta lấy số đó nhân với số lần: 6 x 4 = 24 cm.",
        "explanation": "Muốn gấp một số lên nhiều lần, ta lấy số đó nhân với số lần: 6 x 4 = 24 cm. Do đó, đáp án chính xác là 24 cm."
      },
      {
        "id": "g3_l1_4",
        "title": "Toán giảm đi nhiều lần",
        "question": "Một bao ngô nặng 45 kg, sau khi xay xát khối lượng giảm đi 5 lần. Khối lượng còn lại là:",
        "options": [
          "9 kg",
          "40 kg",
          "8 kg",
          "7 kg"
        ],
        "correctAnswer": "9 kg",
        "hint": "Muốn giảm một số đi nhiều lần, ta lấy số đó chia cho số lần: 45 : 5 = 9 kg.",
        "explanation": "Muốn giảm một số đi nhiều lần, ta lấy số đó chia cho số lần: 45 : 5 = 9 kg. Do đó, đáp án chính xác là 9 kg."
      },
      {
        "id": "g3_l1_5",
        "title": "So sánh số lớn gấp mấy lần số bé",
        "question": "Mẹ 36 tuổi, con 6 tuổi. Hỏi tuổi mẹ gấp mấy lần tuổi con?",
        "options": [
          "6 lần",
          "30 lần",
          "7 lần",
          "5 lần"
        ],
        "correctAnswer": "6 lần",
        "hint": "Muốn biết số lớn gấp mấy lần số bé, ta lấy số lớn chia cho số bé: 36 : 6 = 6 lần.",
        "explanation": "Muốn biết số lớn gấp mấy lần số bé, ta lấy số lớn chia cho số bé: 36 : 6 = 6 lần. Do đó, đáp án chính xác là 6 lần."
      },
      {
        "id": "g3_l1_6",
        "title": "Tính giá trị biểu thức",
        "question": "Tính giá trị biểu thức: 42 : 6 + 18 x 2 = ?",
        "options": [
          "43",
          "50",
          "36",
          "45"
        ],
        "correctAnswer": "43",
        "hint": "Thực hiện nhân chia trước, cộng trừ sau: 42 : 6 = 7; 18 x 2 = 36. Lấy 7 + 36 = 43.",
        "explanation": "Thực hiện nhân chia trước, cộng trừ sau: 42 : 6 = 7; 18 x 2 = 36. Lấy 7 + 36 = 43. Do đó, đáp án chính xác là 43."
      },
      {
        "id": "g3_l1_7",
        "title": "Tìm x trong phép chia có dư",
        "question": "Trong phép chia có dư với số chia là 8, số dư lớn nhất có thể là số nào?",
        "options": [
          "7",
          "8",
          "9",
          "6"
        ],
        "correctAnswer": "7",
        "hint": "Số dư luôn luôn nhỏ hơn số chia. Với số chia là 8 thì số dư lớn nhất là 7.",
        "explanation": "Số dư luôn luôn nhỏ hơn số chia. Với số chia là 8 thì số dư lớn nhất là 7. Vì vậy, kết quả đúng là 7."
      },
      {
        "id": "g3_l1_8",
        "title": "Phép nhân với số có một chữ số",
        "question": "Tính: 124 x 3 = ?",
        "options": [
          "372",
          "362",
          "382",
          "364"
        ],
        "correctAnswer": "372",
        "hint": "3 x 4 = 12 viết 2 nhớ 1; 3 x 2 = 6 thêm 1 là 7; 3 x 1 = 3. Kết quả là 372.",
        "explanation": "3 x 4 = 12 viết 2 nhớ 1; 3 x 2 = 6 thêm 1 là 7; 3 x 1 = 3. Kết quả là 372. Do đó, đáp án chính xác là 372."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t1_1",
        "title": "Timo: Gà và Chó (Toán Giả thiết tạm)",
        "question": "Vừa gà vừa chó có tất cả 10 con, đếm được 28 cái chân. Hỏi có bao nhiêu con chó?",
        "options": [
          "4 con chó",
          "6 con chó",
          "5 con chó",
          "3 con chó"
        ],
        "correctAnswer": "4 con chó",
        "hint": "Nếu cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu: 28 - 20 = 8 chân. Mỗi con chó hơn gà: 4 - 2 = 2 chân. Số chó: 8 : 2 = 4 con.",
        "explanation": "Nếu cả 10 con đều là gà thì có 10 x 2 = 20 chân. Số chân thiếu: 28 - 20 = 8 chân. Mỗi con chó hơn gà: 4 - 2 = 2 chân. Số chó: 8 : 2 = 4 con. Do đó, đáp án chính xác là 4 con chó."
      },
      {
        "id": "g3_t1_2",
        "title": "Timo: Trồng cây hai đầu đường",
        "question": "Một con đường dài 40 m. Người ta trồng cây cách nhau 5 m ở cả 2 bên đường (hai đầu đường đều có cây). Hỏi trồng tất cả bao nhiêu cây?",
        "options": [
          "18 cây",
          "9 cây",
          "16 cây",
          "20 cây"
        ],
        "correctAnswer": "18 cây",
        "hint": "Một bên đường có: (40 : 5) + 1 = 9 cây. Cả hai bên đường có: 9 x 2 = 18 cây.",
        "explanation": "Một bên đường có: (40 : 5) + 1 = 9 cây. Cả hai bên đường có: 9 x 2 = 18 cây. Do đó, đáp án chính xác là 18 cây."
      },
      {
        "id": "g3_t1_3",
        "title": "Timo: Chữ số tận cùng của tích",
        "question": "Tích 1 x 3 x 5 x 7 x 9 x 11 x ... x 99 có chữ số tận cùng là chữ số mấy?",
        "options": [
          "5",
          "0",
          "1",
          "9"
        ],
        "correctAnswer": "5",
        "hint": "Tích các số lẻ liên tiếp có chứa thừa số 5 luôn có chữ số tận cùng là 5.",
        "explanation": "Tích các số lẻ liên tiếp có chứa thừa số 5 luôn có chữ số tận cùng là 5. Vì vậy, kết quả đúng là 5."
      }
    ]
  },
  {
    "id": "g3_geometry_right_angles",
    "grade": 3,
    "semester": 1,
    "title": "Góc Vuông, Góc Không Vuông & Hình Tròn",
    "badge": "Lớp 3 - Học kì 1",
    "icon": "📐",
    "color": "from-amber-400 to-orange-500",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Dùng ê-ke nhận biết góc vuông, góc nhọn, góc tù; tâm, bán kính, đường kính của hình tròn.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l2_1",
        "title": "Dụng cụ kiểm tra góc vuông",
        "question": "Dụng cụ nào được dùng phổ biến để kiểm tra và vẽ góc vuông?",
        "options": [
          "Thước ê-ke",
          "Thước dây",
          "Com-pa",
          "Cân đồng hồ"
        ],
        "correctAnswer": "Thước ê-ke",
        "hint": "Thước ê-ke có một góc vuông chuẩn, dùng để đặt vào kiểm tra góc.",
        "explanation": "Thước ê-ke có một góc vuông chuẩn, dùng để đặt vào kiểm tra góc. Vì vậy, kết quả đúng là Thước ê-ke."
      },
      {
        "id": "g3_l2_2",
        "title": "Nhận biết các loại góc",
        "question": "Góc bé hơn góc vuông được gọi là góc gì?",
        "options": [
          "Góc nhọn",
          "Góc tù",
          "Góc bẹt",
          "Góc vuông"
        ],
        "correctAnswer": "Góc nhọn",
        "hint": "Góc nhọn có độ mở bé hơn góc vuông. Góc tù có độ mở lớn hơn góc vuông.",
        "explanation": "Góc nhọn có độ mở bé hơn góc vuông. Góc tù có độ mở lớn hơn góc vuông. Vì vậy, kết quả đúng là Góc nhọn."
      },
      {
        "id": "g3_l2_3",
        "title": "Số góc vuông trong hình chữ nhật",
        "question": "Một hình chữ nhật có bao nhiêu góc vuông?",
        "options": [
          "4 góc vuông",
          "2 góc vuông",
          "3 góc vuông",
          "0 góc vuông"
        ],
        "correctAnswer": "4 góc vuông",
        "hint": "Hình chữ nhật có 4 đỉnh và tại mỗi đỉnh đều là một góc vuông.",
        "explanation": "Hình chữ nhật có 4 đỉnh và tại mỗi đỉnh đều là một góc vuông. Vì vậy, kết quả đúng là 4 góc vuông."
      },
      {
        "id": "g3_l2_4",
        "title": "Mối quan hệ giữa bán kính và đường kính",
        "question": "Trong một hình tròn, độ dài đường kính so với bán kính như thế nào?",
        "options": [
          "Gấp 2 lần bán kính",
          "Bằng bán kính",
          "Gấp 3 lần bán kính",
          "Bằng một nửa bán kính"
        ],
        "correctAnswer": "Gấp 2 lần bán kính",
        "hint": "Đường kính đi qua tâm và dài gấp 2 lần bán kính: d = 2 x r.",
        "explanation": "Đường kính đi qua tâm và dài gấp 2 lần bán kính: d = 2 x r. Do đó, đáp án chính xác là Gấp 2 lần bán kính."
      },
      {
        "id": "g3_l2_5",
        "title": "Tính bán kính hình tròn",
        "question": "Hình tròn có đường kính là 16 cm thì bán kính của nó dài bao nhiêu cm?",
        "options": [
          "8 cm",
          "32 cm",
          "4 cm",
          "16 cm"
        ],
        "correctAnswer": "8 cm",
        "hint": "Bán kính bằng đường kính chia cho 2: 16 : 2 = 8 cm.",
        "explanation": "Bán kính bằng đường kính chia cho 2: 16 : 2 = 8 cm. Do đó, đáp án chính xác là 8 cm."
      },
      {
        "id": "g3_l2_6",
        "title": "Tâm của hình tròn",
        "question": "Tâm O của hình tròn là gì của đường kính AB?",
        "options": [
          "Trung điểm của đoạn thẳng AB",
          "Điểm ngoài đoạn thẳng AB",
          "Điểm bất kì",
          "Đầu mút của đoạn thẳng AB"
        ],
        "correctAnswer": "Trung điểm của đoạn thẳng AB",
        "hint": "Tâm O nằm chính giữa đoạn thẳng nối hai điểm đối diện trên đường tròn, nên O là trung điểm của AB.",
        "explanation": "Tâm O nằm chính giữa đoạn thẳng nối hai điểm đối diện trên đường tròn, nên O là trung điểm của AB. Vì vậy, kết quả đúng là Trung điểm của đoạn thẳng AB."
      },
      {
        "id": "g3_l2_7",
        "title": "Đếm góc vuông trong tam giác vuông",
        "question": "Một hình tam giác vuông có bao nhiêu góc vuông?",
        "options": [
          "1 góc vuông",
          "2 góc vuông",
          "3 góc vuông",
          "0 góc vuông"
        ],
        "correctAnswer": "1 góc vuông",
        "hint": "Tam giác vuông có đúng 1 góc vuông và 2 góc nhọn.",
        "explanation": "Tam giác vuông có đúng 1 góc vuông và 2 góc nhọn. Vì vậy, kết quả đúng là 1 góc vuông."
      },
      {
        "id": "g3_l2_8",
        "title": "Com-pa dùng để làm gì?",
        "question": "Dụng cụ nào được dùng để vẽ hình tròn?",
        "options": [
          "Com-pa",
          "Thước thẳng",
          "Ê-ke",
          "Kéo"
        ],
        "correctAnswer": "Com-pa",
        "hint": "Com-pa có 1 chân kim cắm vào tâm và 1 đầu bút chì để quay vẽ vòng tròn.",
        "explanation": "Com-pa có 1 chân kim cắm vào tâm và 1 đầu bút chì để quay vẽ vòng tròn. Vì vậy, kết quả đúng là Com-pa."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t2_1",
        "title": "Timo: Góc tạo bởi kim đồng hồ",
        "question": "Lúc 3 giờ đúng, hai kim giờ và kim phút của đồng hồ tạo thành góc gì?",
        "options": [
          "Góc vuông",
          "Góc nhọn",
          "Góc tù",
          "Góc bẹt"
        ],
        "correctAnswer": "Góc vuông",
        "hint": "Lúc 3 giờ, kim dài chỉ số 12 và kim ngắn chỉ số 3, hai kim vuông góc với nhau tạo thành góc 90 độ (góc vuông).",
        "explanation": "Lúc 3 giờ, kim dài chỉ số 12 và kim ngắn chỉ số 3, hai kim vuông góc với nhau tạo thành góc 90 độ (góc vuông). Vì vậy, kết quả đúng là Góc vuông."
      },
      {
        "id": "g3_t2_2",
        "title": "Timo: Đếm hình tam giác",
        "question": "Một hình vuông được kẻ 2 đường chéo cắt nhau tại tâm. Hỏi có tất cả bao nhiêu hình tam giác?",
        "options": [
          "8 hình tam giác",
          "4 hình tam giác",
          "6 hình tam giác",
          "10 hình tam giác"
        ],
        "correctAnswer": "8 hình tam giác",
        "hint": "Có 4 tam giác nhỏ đơn lẻ + 4 tam giác to tạo bởi 2 tam giác nhỏ gộp lại = 8 hình tam giác.",
        "explanation": "Có 4 tam giác nhỏ đơn lẻ + 4 tam giác to tạo bởi 2 tam giác nhỏ gộp lại = 8 hình tam giác. Do đó, đáp án chính xác là 8 hình tam giác."
      },
      {
        "id": "g3_t2_3",
        "title": "Timo: Nối các điểm trên đường tròn",
        "question": "Trên một đường tròn lấy 4 điểm phân biệt. Nối từng cặp điểm lại với nhau. Có tất cả bao nhiêu đoạn thẳng?",
        "options": [
          "6 đoạn thẳng",
          "4 đoạn thẳng",
          "8 đoạn thẳng",
          "5 đoạn thẳng"
        ],
        "correctAnswer": "6 đoạn thẳng",
        "hint": "Số đoạn thẳng nối 4 điểm là: (4 x 3) : 2 = 6 đoạn thẳng.",
        "explanation": "Số đoạn thẳng nối 4 điểm là: (4 x 3) : 2 = 6 đoạn thẳng. Do đó, đáp án chính xác là 6 đoạn thẳng."
      }
    ]
  },
  {
    "id": "g3_numbers_to_10000",
    "grade": 3,
    "semester": 1,
    "title": "Các Số Đến 10.000 & Phép Tính 4 Chữ Số",
    "badge": "Lớp 3 - Học kì 1",
    "icon": "🔢",
    "color": "from-emerald-500 to-teal-600",
    "bgColor": "bg-emerald-100",
    "borderColor": "border-emerald-400",
    "description": "Đọc viết cấu tạo số 4 chữ số, so sánh và thực hiện 4 phép tính trong phạm vi 10.000.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l3_1",
        "title": "Đọc số có 4 chữ số",
        "question": "Số gồm 5 nghìn, 3 trăm, 0 chục và 7 đơn vị được viết là:",
        "options": [
          "5307",
          "5370",
          "5037",
          "3507"
        ],
        "correctAnswer": "5307",
        "hint": "Viết lần lượt từ hàng nghìn đến hàng đơn vị: 5 nghìn, 3 trăm, 0 chục, 7 đơn vị viết là 5307.",
        "explanation": "Viết lần lượt từ hàng nghìn đến hàng đơn vị: 5 nghìn, 3 trăm, 0 chục, 7 đơn vị viết là 5307. Vì vậy, kết quả đúng là 5307."
      },
      {
        "id": "g3_l3_2",
        "title": "Số liền sau của 9999",
        "question": "Số liền sau của số 9999 là số nào?",
        "options": [
          "10 000",
          "9998",
          "1000",
          "10 001"
        ],
        "correctAnswer": "10 000",
        "hint": "9999 + 1 = 10 000 (mười nghìn hay một vạn).",
        "explanation": "9999 + 1 = 10 000 (mười nghìn hay một vạn). Do đó, đáp án chính xác là 10 000."
      },
      {
        "id": "g3_l3_3",
        "title": "Phép cộng trong phạm vi 10 000",
        "question": "Tính: 4325 + 2468 = ?",
        "options": [
          "6793",
          "6783",
          "6893",
          "6791"
        ],
        "correctAnswer": "6793",
        "hint": "Cộng từ phải sang trái: 5+8=13 viết 3 nhớ 1; 2+6=8 thêm 1=9; 3+4=7; 4+2=6. Kết quả là 6793.",
        "explanation": "Cộng từ phải sang trái: 5+8=13 viết 3 nhớ 1; 2+6=8 thêm 1=9; 3+4=7; 4+2=6. Kết quả là 6793. Do đó, đáp án chính xác là 6793."
      },
      {
        "id": "g3_l3_4",
        "title": "Phép trừ trong phạm vi 10 000",
        "question": "Tính: 7540 - 3285 = ?",
        "options": [
          "4255",
          "4265",
          "4355",
          "4245"
        ],
        "correctAnswer": "4255",
        "hint": "Đặt tính thẳng cột và trừ cẩn thận từ hàng đơn vị sang hàng nghìn: 7540 - 3285 = 4255.",
        "explanation": "Đặt tính thẳng cột và trừ cẩn thận từ hàng đơn vị sang hàng nghìn: 7540 - 3285 = 4255. Do đó, đáp án chính xác là 4255."
      },
      {
        "id": "g3_l3_5",
        "title": "Làm tròn số đến hàng trăm",
        "question": "Làm tròn số 4872 đến hàng trăm ta được số nào?",
        "options": [
          "4900",
          "4800",
          "5000",
          "4870"
        ],
        "correctAnswer": "4900",
        "hint": "Chữ số hàng chục là 7 (>= 5) nên ta làm tròn lên thành 4900.",
        "explanation": "Chữ số hàng chục là 7 (>= 5) nên ta làm tròn lên thành 4900. Do đó, đáp án chính xác là 4900."
      },
      {
        "id": "g3_l3_6",
        "title": "Nhân số có 4 chữ số với 1 chữ số",
        "question": "Tính: 2105 x 4 = ?",
        "options": [
          "8420",
          "8400",
          "8425",
          "8520"
        ],
        "correctAnswer": "8420",
        "hint": "4 x 5 = 20 viết 0 nhớ 2; 4 x 0 = 0 thêm 2 = 2; 4 x 1 = 4; 4 x 2 = 8. Kết quả là 8420.",
        "explanation": "4 x 5 = 20 viết 0 nhớ 2; 4 x 0 = 0 thêm 2 = 2; 4 x 1 = 4; 4 x 2 = 8. Kết quả là 8420. Do đó, đáp án chính xác là 8420."
      },
      {
        "id": "g3_l3_7",
        "title": "Chia số có 4 chữ số cho 1 chữ số",
        "question": "Tính: 6480 : 8 = ?",
        "options": [
          "810",
          "801",
          "81",
          "8100"
        ],
        "correctAnswer": "810",
        "hint": "64 : 8 = 8; 8 : 8 = 1; 0 : 8 = 0. Kết quả là 810.",
        "explanation": "64 : 8 = 8; 8 : 8 = 1; 0 : 8 = 0. Kết quả là 810. Do đó, đáp án chính xác là 810."
      },
      {
        "id": "g3_l3_8",
        "title": "Tìm x trong biểu thức",
        "question": "Tìm x biết: x - 1500 = 4200",
        "options": [
          "5700",
          "2700",
          "5600",
          "6700"
        ],
        "correctAnswer": "5700",
        "hint": "Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: 4200 + 1500 = 5700.",
        "explanation": "Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: 4200 + 1500 = 5700. Do đó, đáp án chính xác là 5700."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t3_1",
        "title": "Timo: Số lớn nhất có 4 chữ số khác nhau",
        "question": "Tìm tổng của số lớn nhất có 4 chữ số khác nhau và số bé nhất có 4 chữ số khác nhau?",
        "options": [
          "10 910",
          "10 899",
          "11 110",
          "10 999"
        ],
        "correctAnswer": "10 899",
        "hint": "Số lớn nhất có 4 chữ số khác nhau là 9876. Số bé nhất là 1023. Tổng: 9876 + 1023 = 10 899.",
        "explanation": "Số lớn nhất có 4 chữ số khác nhau là 9876. Số bé nhất là 1023. Tổng: 9876 + 1023 = 10 899. Do đó, đáp án chính xác là 10 899."
      },
      {
        "id": "g3_t3_2",
        "title": "Timo: Tìm số bị xóa chữ số",
        "question": "Nếu xóa chữ số 5 ở tận cùng bên phải của một số thì được số mới kém số cũ 401 đơn vị. Số ban đầu là số nào?",
        "options": [
          "445",
          "455",
          "405",
          "415"
        ],
        "correctAnswer": "445",
        "hint": "Xóa chữ số 5 tận cùng tức là số đó giảm đi 10 lần và 5 đơn vị. Số mới là: (401 - 5) : 9 = 44. Vậy số ban đầu là 445.",
        "explanation": "Xóa chữ số 5 tận cùng tức là số đó giảm đi 10 lần và 5 đơn vị. Số mới là: (401 - 5) : 9 = 44. Vậy số ban đầu là 445. Do đó, đáp án chính xác là 445."
      },
      {
        "id": "g3_t3_3",
        "title": "Timo: Phép cộng đảo ngược chữ số",
        "question": "Biết AB + BA = 154 và A - B = 2. Tìm giá trị của A và B?",
        "options": [
          "A = 8, B = 6",
          "A = 9, B = 7",
          "A = 7, B = 5",
          "A = 8, B = 7"
        ],
        "correctAnswer": "A = 8, B = 6",
        "hint": "AB + BA = 11 x (A + B) = 154 => A + B = 14. Kết hợp A - B = 2 ta tìm được A = 8 và B = 6.",
        "explanation": "AB + BA = 11 x (A + B) = 154 => A + B = 14. Kết hợp A - B = 2 ta tìm được A = 8 và B = 6. Do đó, đáp án chính xác là A = 8, B = 6."
      }
    ]
  },
  {
    "id": "g3_units_mm_g_ml",
    "grade": 3,
    "semester": 1,
    "title": "Đơn Vị Đo: mm, Gam, ml & Nhiệt Độ",
    "badge": "Lớp 3 - Học kì 1",
    "icon": "🧪",
    "color": "from-purple-500 to-pink-600",
    "bgColor": "bg-purple-100",
    "borderColor": "border-purple-400",
    "description": "Chuyển đổi và tính toán với mi-li-mét (mm), gam (g), mi-li-lít (ml) và nhiệt độ độ C.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l4_1",
        "title": "Đổi mi-li-mét sang xăng-ti-mét",
        "question": "1 xăng-ti-mét (cm) bằng bao nhiêu mi-li-mét (mm)?",
        "options": [
          "10 mm",
          "100 mm",
          "1 mm",
          "1000 mm"
        ],
        "correctAnswer": "10 mm",
        "hint": "Trên thước kẻ thông thường, mỗi vạch nhỏ nhất tương ứng 1 mm, 1 cm gồm 10 vạch nhỏ đó.",
        "explanation": "Trên thước kẻ thông thường, mỗi vạch nhỏ nhất tương ứng 1 mm, 1 cm gồm 10 vạch nhỏ đó. Vì vậy, kết quả đúng là 10 mm."
      },
      {
        "id": "g3_l4_2",
        "title": "Đổi gam sang ki-lô-gam",
        "question": "1 ki-lô-gam (kg) bằng bao nhiêu gam (g)?",
        "options": [
          "1000 g",
          "100 g",
          "10 g",
          "500 g"
        ],
        "correctAnswer": "1000 g",
        "hint": "Ghi nhớ đơn vị đo khối lượng: 1 kg = 1000 g.",
        "explanation": "Ghi nhớ đơn vị đo khối lượng: 1 kg = 1000 g. Do đó, đáp án chính xác là 1000 g."
      },
      {
        "id": "g3_l4_3",
        "title": "Đổi lít sang mi-li-lít",
        "question": "1 lít (l) bằng bao nhiêu mi-li-lít (ml)?",
        "options": [
          "1000 ml",
          "100 ml",
          "10 ml",
          "500 ml"
        ],
        "correctAnswer": "1000 ml",
        "hint": "Dung tích 1 chai nước 1 lít tương đương 1000 ml.",
        "explanation": "Dung tích 1 chai nước 1 lít tương đương 1000 ml. Vì vậy, kết quả đúng là 1000 ml."
      },
      {
        "id": "g3_l4_4",
        "title": "Nhiệt kế đo nhiệt độ",
        "question": "Nước đóng băng (hóa đá) ở nhiệt độ bao nhiêu độ C?",
        "options": [
          "0 độ C",
          "100 độ C",
          "37 độ C",
          "10 độ C"
        ],
        "correctAnswer": "0 độ C",
        "hint": "Nước tinh khiết đóng băng ở 0 độ C và sôi ở 100 độ C.",
        "explanation": "Nước tinh khiết đóng băng ở 0 độ C và sôi ở 100 độ C. Vì vậy, kết quả đúng là 0 độ C."
      },
      {
        "id": "g3_l4_5",
        "title": "Tính toán với đơn vị gam",
        "question": "Một gói kẹo nặng 250 g, một gói bánh nặng 450 g. Cả hai gói nặng bao nhiêu gam?",
        "options": [
          "700 g",
          "600 g",
          "800 g",
          "650 g"
        ],
        "correctAnswer": "700 g",
        "hint": "Cộng khối lượng hai gói: 250 + 450 = 700 g.",
        "explanation": "Cộng khối lượng hai gói: 250 + 450 = 700 g. Do đó, đáp án chính xác là 700 g."
      },
      {
        "id": "g3_l4_6",
        "title": "Phép trừ mi-li-lít",
        "question": "Bình nước có 1000 ml nước, bạn Bình uống hết 350 ml. Trong bình còn lại bao nhiêu ml nước?",
        "options": [
          "650 ml",
          "750 ml",
          "550 ml",
          "600 ml"
        ],
        "correctAnswer": "650 ml",
        "hint": "Lấy lượng nước ban đầu trừ đi lượng đã uống: 1000 - 350 = 650 ml.",
        "explanation": "Lấy lượng nước ban đầu trừ đi lượng đã uống: 1000 - 350 = 650 ml. Do đó, đáp án chính xác là 650 ml."
      },
      {
        "id": "g3_l4_7",
        "title": "Đổi tổng hợp đơn vị",
        "question": "2 kg 500 g bằng bao nhiêu gam?",
        "options": [
          "2500 g",
          "2050 g",
          "250 g",
          "2005 g"
        ],
        "correctAnswer": "2500 g",
        "hint": "2 kg = 2000 g, cộng thêm 500 g là 2500 g.",
        "explanation": "2 kg = 2000 g, cộng thêm 500 g là 2500 g. Do đó, đáp án chính xác là 2500 g."
      },
      {
        "id": "g3_l4_8",
        "title": "Độ dài đo bằng mm",
        "question": "Bề dày của một cuốn sách toán là 8 mm. 5 cuốn sách như thế xếp chồng lên nhau dày bao nhiêu mm?",
        "options": [
          "40 mm",
          "45 mm",
          "35 mm",
          "40 cm"
        ],
        "correctAnswer": "40 mm",
        "hint": "Phép nhân: 8 x 5 = 40 mm (tương đương 4 cm).",
        "explanation": "Phép nhân: 8 x 5 = 40 mm (tương đương 4 cm). Do đó, đáp án chính xác là 40 mm."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t4_1",
        "title": "Timo: Cân nặng quả dưa và quả dứa",
        "question": "1 quả dưa hấu và 1 quả dứa nặng 3500 g. Quả dưa hấu nặng hơn quả dứa 1500 g. Quả dưa hấu nặng bao nhiêu gam?",
        "options": [
          "2500 g",
          "2000 g",
          "1000 g",
          "3000 g"
        ],
        "correctAnswer": "2500 g",
        "hint": "Bài toán Tổng - Hiệu: Quả dưa hấu là số lớn = (Tổng + Hiệu) : 2 = (3500 + 1500) : 2 = 2500 g.",
        "explanation": "Bài toán Tổng - Hiệu: Quả dưa hấu là số lớn = (Tổng + Hiệu) : 2 = (3500 + 1500) : 2 = 2500 g. Do đó, đáp án chính xác là 2500 g."
      },
      {
        "id": "g3_t4_2",
        "title": "Timo: Chia nước từ thùng to",
        "question": "Có một bình 800 ml và một cốc 150 ml. Cần rót ít nhất bao nhiêu lần cốc đầy để bình tràn nước?",
        "options": [
          "6 lần",
          "5 lần",
          "7 lần",
          "4 lần"
        ],
        "correctAnswer": "6 lần",
        "hint": "5 lần cốc đầy mới được: 150 x 5 = 750 ml (< 800 ml). Phải rót lần thứ 6 thì lượng nước mới vượt qua 800 ml.",
        "explanation": "5 lần cốc đầy mới được: 150 x 5 = 750 ml (< 800 ml). Phải rót lần thứ 6 thì lượng nước mới vượt qua 800 ml. Do đó, đáp án chính xác là 6 lần."
      },
      {
        "id": "g3_t4_3",
        "title": "Timo: Băng dính nối nhau bị chồng mép",
        "question": "Hai dải băng giấy mỗi dải dài 20 cm được dán nối với nhau, phần mép dán chồng lên nhau dài 3 cm. Băng giấy mới dài bao nhiêu cm?",
        "options": [
          "37 cm",
          "40 cm",
          "34 cm",
          "38 cm"
        ],
        "correctAnswer": "37 cm",
        "hint": "Tổng chiều dài hai dải băng: 20 + 20 = 40 cm. Trừ đi phần dán đè lên nhau 3 cm: 40 - 3 = 37 cm.",
        "explanation": "Tổng chiều dài hai dải băng: 20 + 20 = 40 cm. Trừ đi phần dán đè lên nhau 3 cm: 40 - 3 = 37 cm. Do đó, đáp án chính xác là 37 cm."
      }
    ]
  },
  {
    "id": "g3_numbers_to_100000",
    "grade": 3,
    "semester": 2,
    "title": "Các Số Đến 100.000 & 4 Phép Tính Lớn",
    "badge": "Lớp 3 - Học kì 2",
    "icon": "💎",
    "color": "from-rose-500 to-red-600",
    "bgColor": "bg-rose-100",
    "borderColor": "border-rose-400",
    "description": "Thành thạo cấu tạo số 5 chữ số, so sánh và thực hiện phép tính cộng trừ nhân chia trong phạm vi 100.000.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l5_1",
        "title": "Đọc số có 5 chữ số",
        "question": "Số 85 412 được đọc là:",
        "options": [
          "Tám mươi lăm nghìn bốn trăm mười hai",
          "Tám mươi lăm nghìn bốn trăm hai mươi",
          "Tám trăm năm mươi nghìn bốn trăm mười hai",
          "Tám mươi năm nghìn bốn trăm mười hai"
        ],
        "correctAnswer": "Tám mươi lăm nghìn bốn trăm mười hai",
        "hint": "Tách theo lớp nghìn và lớp đơn vị: 85 nghìn, 412 đơn vị.",
        "explanation": "Tách theo lớp nghìn và lớp đơn vị: 85 nghìn, 412 đơn vị. Vì vậy, kết quả đúng là Tám mươi lăm nghìn bốn trăm mười hai."
      },
      {
        "id": "g3_l5_2",
        "title": "Số lớn nhất có 5 chữ số",
        "question": "Số lớn nhất có 5 chữ số là số nào?",
        "options": [
          "99 999",
          "100 000",
          "98 765",
          "99 990"
        ],
        "correctAnswer": "99 999",
        "hint": "Số lớn nhất có 5 chữ số gồm toàn các chữ số 9: 99 999.",
        "explanation": "Số lớn nhất có 5 chữ số gồm toàn các chữ số 9: 99 999. Vì vậy, kết quả đúng là 99 999."
      },
      {
        "id": "g3_l5_3",
        "title": "Phép cộng số có 5 chữ số",
        "question": "Tính: 32 450 + 15 320 = ?",
        "options": [
          "47 770",
          "47 750",
          "48 770",
          "46 770"
        ],
        "correctAnswer": "47 770",
        "hint": "Đặt tính thẳng hàng: 32 450 + 15 320 = 47 770.",
        "explanation": "Đặt tính thẳng hàng: 32 450 + 15 320 = 47 770. Do đó, đáp án chính xác là 47 770."
      },
      {
        "id": "g3_l5_4",
        "title": "Phép trừ có nhớ trong phạm vi 100 000",
        "question": "Tính: 68 500 - 24 180 = ?",
        "options": [
          "44 320",
          "44 420",
          "43 320",
          "44 380"
        ],
        "correctAnswer": "44 320",
        "hint": "68 500 - 24 180 = 44 320.",
        "explanation": "68 500 - 24 180 = 44 320. Do đó, đáp án chính xác là 44 320."
      },
      {
        "id": "g3_l5_5",
        "title": "Nhân số có 5 chữ số với số có 1 chữ số",
        "question": "Tính: 12 300 x 3 = ?",
        "options": [
          "36 900",
          "36 600",
          "39 900",
          "36 000"
        ],
        "correctAnswer": "36 900",
        "hint": "12 300 x 3 = 36 900.",
        "explanation": "12 300 x 3 = 36 900. Do đó, đáp án chính xác là 36 900."
      },
      {
        "id": "g3_l5_6",
        "title": "Chia số có 5 chữ số",
        "question": "Tính: 48 600 : 6 = ?",
        "options": [
          "8100",
          "8010",
          "810",
          "8060"
        ],
        "correctAnswer": "8100",
        "hint": "48 : 6 = 8, 6 : 6 = 1, 00 : 6 = 00 => 8100.",
        "explanation": "48 : 6 = 8, 6 : 6 = 1, 00 : 6 = 00 => 8100. Do đó, đáp án chính xác là 8100."
      },
      {
        "id": "g3_l5_7",
        "title": "Làm tròn số đến hàng nghìn",
        "question": "Làm tròn số 34 680 đến hàng nghìn ta được số nào?",
        "options": [
          "35 000",
          "34 000",
          "34 700",
          "30 000"
        ],
        "correctAnswer": "35 000",
        "hint": "Chữ số hàng trăm là 6 (>= 5) nên ta làm tròn tăng lên thành 35 000.",
        "explanation": "Chữ số hàng trăm là 6 (>= 5) nên ta làm tròn tăng lên thành 35 000. Do đó, đáp án chính xác là 35 000."
      },
      {
        "id": "g3_l5_8",
        "title": "Số nhỏ nhất có 5 chữ số khác nhau",
        "question": "Số nhỏ nhất có 5 chữ số khác nhau là số nào?",
        "options": [
          "10 234",
          "10 000",
          "12 345",
          "10 243"
        ],
        "correctAnswer": "10 234",
        "hint": "Chữ số đầu tiên phải khác 0 nên chọn 1, sau đó chọn lần lượt các chữ số bé nhất còn lại: 0, 2, 3, 4 => 10 234.",
        "explanation": "Chữ số đầu tiên phải khác 0 nên chọn 1, sau đó chọn lần lượt các chữ số bé nhất còn lại: 0, 2, 3, 4 => 10 234. Do đó, đáp án chính xác là 10 234."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t5_1",
        "title": "Timo: Tính nhanh dãy số cách đều",
        "question": "Tính tổng dãy số: 10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 = ?",
        "options": [
          "450",
          "400",
          "500",
          "490"
        ],
        "correctAnswer": "450",
        "hint": "Ghép cặp: (10 + 90) + (20 + 80) + (30 + 70) + (40 + 60) + 50 = 100 x 4 + 50 = 450.",
        "explanation": "Ghép cặp: (10 + 90) + (20 + 80) + (30 + 70) + (40 + 60) + 50 = 100 x 4 + 50 = 450. Do đó, đáp án chính xác là 450."
      },
      {
        "id": "g3_t5_2",
        "title": "Timo: Phép chia có số dư lớn nhất",
        "question": "Một số chia cho 7 có thương là 1245 và số dư lớn nhất có thể. Số bị chia đó là:",
        "options": [
          "8721",
          "8715",
          "8720",
          "8722"
        ],
        "correctAnswer": "8721",
        "hint": "Số chia là 7 nên số dư lớn nhất là 6. Số bị chia = 1245 x 7 + 6 = 8715 + 6 = 8721.",
        "explanation": "Số chia là 7 nên số dư lớn nhất là 6. Số bị chia = 1245 x 7 + 6 = 8715 + 6 = 8721. Do đó, đáp án chính xác là 8721."
      },
      {
        "id": "g3_t5_3",
        "title": "Timo: Đếm trang sách",
        "question": "Một cuốn truyện tranh có 60 trang. Hỏi người ta phải dùng bao nhiêu chữ số để đánh số trang cuốn truyện đó?",
        "options": [
          "111",
          "120",
          "105",
          "99"
        ],
        "correctAnswer": "111",
        "hint": "Trang 1-9: 9 chữ số. Trang 10-60: (60 - 10 + 1) x 2 = 51 x 2 = 102 chữ số. Tổng: 9 + 102 = 111 chữ số.",
        "explanation": "Trang 1-9: 9 chữ số. Trang 10-60: (60 - 10 + 1) x 2 = 51 x 2 = 102 chữ số. Tổng: 9 + 102 = 111 chữ số. Do đó, đáp án chính xác là 111."
      }
    ]
  },
  {
    "id": "g3_perimeter_area",
    "grade": 3,
    "semester": 2,
    "title": "Chu Vi & Diện Tích Hình Vuông, Hình Chữ Nhật",
    "badge": "Lớp 3 - Học kì 2",
    "icon": "📏",
    "color": "from-cyan-500 to-blue-600",
    "bgColor": "bg-cyan-100",
    "borderColor": "border-cyan-400",
    "description": "Nắm vững công thức tính chu vi, diện tích hình vuông, hình chữ nhật và đơn vị cm2.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l6_1",
        "title": "Công thức chu vi hình chữ nhật",
        "question": "Muốn tính chu vi hình chữ nhật ta làm thế nào?",
        "options": [
          "Lấy chiều dài cộng chiều rộng (cùng đơn vị đo) rồi nhân với 2",
          "Lấy chiều dài nhân chiều rộng",
          "Lấy chiều dài cộng chiều rộng",
          "Lấy độ dài một cạnh nhân với 4"
        ],
        "correctAnswer": "Lấy chiều dài cộng chiều rộng (cùng đơn vị đo) rồi nhân với 2",
        "hint": "Công thức: P = (dài + rộng) x 2.",
        "explanation": "Công thức: P = (dài + rộng) x 2. Do đó, đáp án chính xác là Lấy chiều dài cộng chiều rộng (cùng đơn vị đo) rồi nhân với 2."
      },
      {
        "id": "g3_l6_2",
        "title": "Tính chu vi hình chữ nhật",
        "question": "Một hình chữ nhật có chiều dài 8 cm, chiều rộng 5 cm. Chu vi hình chữ nhật đó là:",
        "options": [
          "26 cm",
          "40 cm",
          "13 cm",
          "28 cm"
        ],
        "correctAnswer": "26 cm",
        "hint": "P = (8 + 5) x 2 = 13 x 2 = 26 cm.",
        "explanation": "P = (8 + 5) x 2 = 13 x 2 = 26 cm. Do đó, đáp án chính xác là 26 cm."
      },
      {
        "id": "g3_l6_3",
        "title": "Tính diện tích hình chữ nhật",
        "question": "Hình chữ nhật có chiều dài 9 cm, chiều rộng 4 cm. Diện tích hình chữ nhật là:",
        "options": [
          "36 cm2",
          "26 cm",
          "36 cm",
          "13 cm2"
        ],
        "correctAnswer": "36 cm2",
        "hint": "S = dài x rộng = 9 x 4 = 36 cm2 (xăng-ti-mét vuông).",
        "explanation": "S = dài x rộng = 9 x 4 = 36 cm2 (xăng-ti-mét vuông). Do đó, đáp án chính xác là 36 cm2."
      },
      {
        "id": "g3_l6_4",
        "title": "Tính chu vi hình vuông",
        "question": "Một tấm bìa hình vuông có cạnh dài 6 cm. Chu vi của tấm bìa đó là:",
        "options": [
          "24 cm",
          "36 cm2",
          "12 cm",
          "18 cm"
        ],
        "correctAnswer": "24 cm",
        "hint": "Chu vi hình vuông bằng độ dài cạnh nhân với 4: 6 x 4 = 24 cm.",
        "explanation": "Chu vi hình vuông bằng độ dài cạnh nhân với 4: 6 x 4 = 24 cm. Do đó, đáp án chính xác là 24 cm."
      },
      {
        "id": "g3_l6_5",
        "title": "Tính diện tích hình vuông",
        "question": "Hình vuông có cạnh 7 cm thì diện tích của nó là bao nhiêu?",
        "options": [
          "49 cm2",
          "28 cm",
          "49 cm",
          "14 cm2"
        ],
        "correctAnswer": "49 cm2",
        "hint": "Diện tích hình vuông bằng cạnh nhân với chính nó: 7 x 7 = 49 cm2.",
        "explanation": "Diện tích hình vuông bằng cạnh nhân với chính nó: 7 x 7 = 49 cm2. Do đó, đáp án chính xác là 49 cm2."
      },
      {
        "id": "g3_l6_6",
        "title": "Tìm cạnh hình vuông khi biết chu vi",
        "question": "Một mảnh đất hình vuông có chu vi là 32 m. Độ dài cạnh mảnh đất đó là:",
        "options": [
          "8 m",
          "16 m",
          "4 m",
          "64 m"
        ],
        "correctAnswer": "8 m",
        "hint": "Cạnh hình vuông bằng chu vi chia cho 4: 32 : 4 = 8 m.",
        "explanation": "Cạnh hình vuông bằng chu vi chia cho 4: 32 : 4 = 8 m. Do đó, đáp án chính xác là 8 m."
      },
      {
        "id": "g3_l6_7",
        "title": "Tìm chiều rộng hình chữ nhật",
        "question": "Một hình chữ nhật có diện tích 48 cm2, chiều dài là 8 cm. Chiều rộng hình chữ nhật là:",
        "options": [
          "6 cm",
          "8 cm",
          "7 cm",
          "5 cm"
        ],
        "correctAnswer": "6 cm",
        "hint": "Chiều rộng = Diện tích chia cho chiều dài: 48 : 8 = 6 cm.",
        "explanation": "Chiều rộng = Diện tích chia cho chiều dài: 48 : 8 = 6 cm. Do đó, đáp án chính xác là 6 cm."
      },
      {
        "id": "g3_l6_8",
        "title": "Ghép hình chữ nhật từ hai hình vuông",
        "question": "Ghép 2 miếng bìa hình vuông cạnh 4 cm lại thành 1 hình chữ nhật. Diện tích hình chữ nhật đó là:",
        "options": [
          "32 cm2",
          "24 cm2",
          "16 cm2",
          "36 cm2"
        ],
        "correctAnswer": "32 cm2",
        "hint": "Diện tích mỗi hình vuông: 4 x 4 = 16 cm2. Hai hình ghép lại: 16 x 2 = 32 cm2.",
        "explanation": "Diện tích mỗi hình vuông: 4 x 4 = 16 cm2. Hai hình ghép lại: 16 x 2 = 32 cm2. Do đó, đáp án chính xác là 32 cm2."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t6_1",
        "title": "Timo: Tăng cạnh hình vuông tính diện tích",
        "question": "Nếu tăng cạnh của một hình vuông lên gấp 3 lần thì diện tích của hình vuông đó tăng lên gấp mấy lần?",
        "options": [
          "9 lần",
          "3 lần",
          "6 lần",
          "12 lần"
        ],
        "correctAnswer": "9 lần",
        "hint": "Diện tích mới = (cạnh x 3) x (cạnh x 3) = (cạnh x cạnh) x 9. Vậy diện tích tăng 9 lần.",
        "explanation": "Diện tích mới = (cạnh x 3) x (cạnh x 3) = (cạnh x cạnh) x 9. Vậy diện tích tăng 9 lần. Do đó, đáp án chính xác là 9 lần."
      },
      {
        "id": "g3_t6_2",
        "title": "Timo: Cắt hình chữ nhật thành hình vuông",
        "question": "Một tờ giấy hình chữ nhật có chiều dài 18 cm, chiều rộng 12 cm. Người ta cắt ra một hình vuông lớn nhất có thể từ tờ giấy đó. Diện tích phần giấy còn lại là:",
        "options": [
          "72 cm2",
          "144 cm2",
          "60 cm2",
          "216 cm2"
        ],
        "correctAnswer": "72 cm2",
        "hint": "Hình vuông lớn nhất có cạnh bằng chiều rộng là 12 cm. Diện tích tờ giấy: 18 x 12 = 216 cm2. Diện tích hình vuông: 12 x 12 = 144 cm2. Phần còn lại: 216 - 144 = 72 cm2.",
        "explanation": "Hình vuông lớn nhất có cạnh bằng chiều rộng là 12 cm. Diện tích tờ giấy: 18 x 12 = 216 cm2. Diện tích hình vuông: 12 x 12 = 144 cm2. Phần còn lại: 216 - 144 = 72 cm2. Do đó, đáp án chính xác là 72 cm2."
      },
      {
        "id": "g3_t6_3",
        "title": "Timo: Chu vi hình ghép chữ L",
        "question": "Một hình chữ L được tạo thành từ 3 hình vuông bằng nhau có cạnh 5 cm. Chu vi của hình chữ L đó là bao nhiêu?",
        "options": [
          "40 cm",
          "30 cm",
          "45 cm",
          "35 cm"
        ],
        "correctAnswer": "40 cm",
        "hint": "Hình chữ L gồm 8 cạnh ngoài của các hình vuông (mỗi cạnh 5 cm). Chu vi = 8 x 5 = 40 cm.",
        "explanation": "Hình chữ L gồm 8 cạnh ngoài của các hình vuông (mỗi cạnh 5 cm). Chu vi = 8 x 5 = 40 cm. Do đó, đáp án chính xác là 40 cm."
      }
    ]
  },
  {
    "id": "g3_vietnamese_currency",
    "grade": 3,
    "semester": 2,
    "title": "Tiền Việt Nam & Bài Toán Mua Sắm Thực Tế",
    "badge": "Lớp 3 - Học kì 2",
    "icon": "💵",
    "color": "from-amber-500 to-yellow-600",
    "bgColor": "bg-amber-100",
    "borderColor": "border-amber-400",
    "description": "Nhận biết các tờ tiền Việt Nam, cộng trừ mệnh giá tiền và giải bài toán đi chợ mua sắm thực tế.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l7_1",
        "title": "Nhận biết mệnh giá tiền",
        "question": "Tờ tiền giấy nào sau đây có mệnh giá lớn nhất?",
        "options": [
          "100 000 đồng",
          "50 000 đồng",
          "20 000 đồng",
          "10 000 đồng"
        ],
        "correctAnswer": "100 000 đồng",
        "hint": "100 000 đồng là số có 6 chữ số, lớn nhất trong 4 phương án.",
        "explanation": "100 000 đồng là số có 6 chữ số, lớn nhất trong 4 phương án. Vì vậy, kết quả đúng là 100 000 đồng."
      },
      {
        "id": "g3_l7_2",
        "title": "Đổi tiền",
        "question": "Một tờ 10 000 đồng đổi được bao nhiêu tờ 2 000 đồng?",
        "options": [
          "5 tờ",
          "2 tờ",
          "4 tờ",
          "10 tờ"
        ],
        "correctAnswer": "5 tờ",
        "hint": "10 000 : 2 000 = 5 tờ.",
        "explanation": "10 000 : 2 000 = 5 tờ. Do đó, đáp án chính xác là 5 tờ."
      },
      {
        "id": "g3_l7_3",
        "title": "Tính tổng tiền",
        "question": "Nam có 2 tờ 20 000 đồng và 1 tờ 10 000 đồng. Hỏi Nam có tất cả bao nhiêu tiền?",
        "options": [
          "50 000 đồng",
          "40 000 đồng",
          "30 000 đồng",
          "60 000 đồng"
        ],
        "correctAnswer": "50 000 đồng",
        "hint": "20 000 x 2 + 10 000 = 40 000 + 10 000 = 50 000 đồng.",
        "explanation": "20 000 x 2 + 10 000 = 40 000 + 10 000 = 50 000 đồng. Do đó, đáp án chính xác là 50 000 đồng."
      },
      {
        "id": "g3_l7_4",
        "title": "Tính tiền trả lại",
        "question": "Mai mua một chiếc bút chì giá 6 000 đồng. Mai đưa cô bán hàng tờ 10 000 đồng. Cô bán hàng phải trả lại Mai bao nhiêu tiền?",
        "options": [
          "4 000 đồng",
          "3 000 đồng",
          "5 000 đồng",
          "6 000 đồng"
        ],
        "correctAnswer": "4 000 đồng",
        "hint": "Số tiền thừa nhận lại: 10 000 - 6 000 = 4 000 đồng.",
        "explanation": "Số tiền thừa nhận lại: 10 000 - 6 000 = 4 000 đồng. Do đó, đáp án chính xác là 4 000 đồng."
      },
      {
        "id": "g3_l7_5",
        "title": "Mua nhiều đồ dùng học tập",
        "question": "Một quyển vở giá 8 000 đồng, một hộp sáp màu giá 15 000 đồng. Mua cả hai thứ hết bao nhiêu tiền?",
        "options": [
          "23 000 đồng",
          "25 000 đồng",
          "21 000 đồng",
          "24 000 đồng"
        ],
        "correctAnswer": "23 000 đồng",
        "hint": "8 000 + 15 000 = 23 000 đồng.",
        "explanation": "8 000 + 15 000 = 23 000 đồng. Do đó, đáp án chính xác là 23 000 đồng."
      },
      {
        "id": "g3_l7_6",
        "title": "Mua nhiều cái cùng loại",
        "question": "Một cây kem giá 5 000 đồng. Hỏi mua 4 cây kem như thế hết bao nhiêu tiền?",
        "options": [
          "20 000 đồng",
          "15 000 đồng",
          "25 000 đồng",
          "18 000 đồng"
        ],
        "correctAnswer": "20 000 đồng",
        "hint": "5 000 x 4 = 20 000 đồng.",
        "explanation": "5 000 x 4 = 20 000 đồng. Do đó, đáp án chính xác là 20 000 đồng."
      },
      {
        "id": "g3_l7_7",
        "title": "So sánh giá tiền",
        "question": "Cặp sách giá 85 000 đồng, hộp bút giá 35 000 đồng. Cặp sách đắt hơn hộp bút bao nhiêu tiền?",
        "options": [
          "50 000 đồng",
          "40 000 đồng",
          "60 000 đồng",
          "45 000 đồng"
        ],
        "correctAnswer": "50 000 đồng",
        "hint": "Lấy giá cặp sách trừ giá hộp bút: 85 000 - 35 000 = 50 000 đồng.",
        "explanation": "Lấy giá cặp sách trừ giá hộp bút: 85 000 - 35 000 = 50 000 đồng. Do đó, đáp án chính xác là 50 000 đồng."
      },
      {
        "id": "g3_l7_8",
        "title": "Tiết kiệm tiền nuôi lợn nhựa",
        "question": "Mỗi ngày Bình bỏ lợn tiết kiệm 2 000 đồng. Sau 1 tuần lễ (7 ngày), Bình tiết kiệm được bao nhiêu tiền?",
        "options": [
          "14 000 đồng",
          "12 000 đồng",
          "10 000 đồng",
          "16 000 đồng"
        ],
        "correctAnswer": "14 000 đồng",
        "hint": "2 000 x 7 = 14 000 đồng.",
        "explanation": "2 000 x 7 = 14 000 đồng. Do đó, đáp án chính xác là 14 000 đồng."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t7_1",
        "title": "Timo: Trả tiền vừa đúng",
        "question": "Cần trả đúng 27 000 đồng mà chỉ dùng các tờ tiền 10 000 đồng, 5 000 đồng và 2 000 đồng. Cách dùng ít tờ tiền nhất là bao nhiêu tờ?",
        "options": [
          "4 tờ",
          "5 tờ",
          "3 tờ",
          "6 tờ"
        ],
        "correctAnswer": "4 tờ",
        "hint": "Dùng: 2 tờ 10 000đ + 1 tờ 5 000đ + 1 tờ 2 000đ = 27 000đ. Tổng cộng 4 tờ tiền (ít nhất).",
        "explanation": "Dùng: 2 tờ 10 000đ + 1 tờ 5 000đ + 1 tờ 2 000đ = 27 000đ. Tổng cộng 4 tờ tiền (ít nhất). Do đó, đáp án chính xác là 4 tờ."
      },
      {
        "id": "g3_t7_2",
        "title": "Timo: Mua 3 tặng 1",
        "question": "Cửa hàng có chương trình: Mua 3 gói bánh tặng 1 gói bánh. Giá 1 gói là 10 000 đồng. Muốn có đủ 8 gói bánh thì cần trả bao nhiêu tiền?",
        "options": [
          "60 000 đồng",
          "80 000 đồng",
          "70 000 đồng",
          "50 000 đồng"
        ],
        "correctAnswer": "60 000 đồng",
        "hint": "Mua 3 được 4. Mua 6 được 8. Vậy chỉ cần mua và trả tiền cho 6 gói: 6 x 10 000 = 60 000 đồng.",
        "explanation": "Mua 3 được 4. Mua 6 được 8. Vậy chỉ cần mua và trả tiền cho 6 gói: 6 x 10 000 = 60 000 đồng. Do đó, đáp án chính xác là 60 000 đồng."
      },
      {
        "id": "g3_t7_3",
        "title": "Timo: Bài toán mua bút chì và tẩy",
        "question": "Mua 2 cái bút chì và 3 cục tẩy hết 19 000 đồng. Mua 2 cái bút chì và 5 cục tẩy hết 25 000 đồng. Giá 1 cục tẩy là:",
        "options": [
          "3 000 đồng",
          "2 000 đồng",
          "4 000 đồng",
          "5 000 đồng"
        ],
        "correctAnswer": "3 000 đồng",
        "hint": "Phần chênh lệch do 2 cục tẩy: 25 000 - 19 000 = 6 000 đồng. Giá 1 cục tẩy: 6 000 : 2 = 3 000 đồng.",
        "explanation": "Phần chênh lệch do 2 cục tẩy: 25 000 - 19 000 = 6 000 đồng. Giá 1 cục tẩy: 6 000 : 2 = 3 000 đồng. Do đó, đáp án chính xác là 3 000 đồng."
      }
    ]
  },
  {
    "id": "g3_data_statistics",
    "grade": 3,
    "semester": 2,
    "title": "Thu Thập Số Liệu & Khả Năng Xảy Ra",
    "badge": "Lớp 3 - Học kì 2",
    "icon": "📊",
    "color": "from-violet-500 to-purple-700",
    "bgColor": "bg-violet-100",
    "borderColor": "border-violet-400",
    "description": "Đọc và phân tích bảng số liệu thống kê, làm quen các biến cố chắc chắn, có thể, không thể.",
    "timoCount": 3,
    "basicLevels": [
      {
        "id": "g3_l8_1",
        "title": "Đọc bảng số liệu",
        "question": "Quan sát bảng số học sinh giỏi các tổ: Tổ 1: 5 bạn, Tổ 2: 7 bạn, Tổ 3: 4 bạn, Tổ 4: 6 bạn. Tổ nào có nhiều học sinh giỏi nhất?",
        "options": [
          "Tổ 2",
          "Tổ 1",
          "Tổ 4",
          "Tổ 3"
        ],
        "correctAnswer": "Tổ 2",
        "hint": "Tổ 2 có 7 bạn, số lớn nhất trong 4 tổ.",
        "explanation": "Tổ 2 có 7 bạn, số lớn nhất trong 4 tổ. Vì vậy, kết quả đúng là Tổ 2."
      },
      {
        "id": "g3_l8_2",
        "title": "Tính tổng số liệu",
        "question": "Tổng số học sinh giỏi của cả 4 tổ ở câu trên là bao nhiêu bạn?",
        "options": [
          "22 bạn",
          "20 bạn",
          "24 bạn",
          "21 bạn"
        ],
        "correctAnswer": "22 bạn",
        "hint": "5 + 7 + 4 + 6 = 22 bạn.",
        "explanation": "5 + 7 + 4 + 6 = 22 bạn. Do đó, đáp án chính xác là 22 bạn."
      },
      {
        "id": "g3_l8_3",
        "title": "Sự kiện Chắc chắn",
        "question": "Trong hộp có 10 viên bi đều màu đỏ. Không nhìn vào hộp, bốc ra 1 viên bi. Sự kiện \"Bốc được viên bi màu đỏ\" là:",
        "options": [
          "Chắc chắn xảy ra",
          "Có thể xảy ra",
          "Không thể xảy ra",
          "Chưa biết"
        ],
        "correctAnswer": "Chắc chắn xảy ra",
        "hint": "Vì tất cả các viên bi trong hộp đều là màu đỏ nên chắc chắn bốc được bi đỏ.",
        "explanation": "Vì tất cả các viên bi trong hộp đều là màu đỏ nên chắc chắn bốc được bi đỏ. Vì vậy, kết quả đúng là Chắc chắn xảy ra."
      },
      {
        "id": "g3_l8_4",
        "title": "Sự kiện Không thể",
        "question": "Trong hộp chỉ có bi xanh và bi đỏ. Sự kiện \"Bốc được 1 viên bi vàng\" là:",
        "options": [
          "Không thể xảy ra",
          "Chắc chắn xảy ra",
          "Có thể xảy ra",
          "Chắc chắn đúng"
        ],
        "correctAnswer": "Không thể xảy ra",
        "hint": "Trong hộp không hề có bi vàng nào nên không thể bốc được bi vàng.",
        "explanation": "Trong hộp không hề có bi vàng nào nên không thể bốc được bi vàng. Vì vậy, kết quả đúng là Không thể xảy ra."
      },
      {
        "id": "g3_l8_5",
        "title": "Sự kiện Có thể",
        "question": "Gieo một con xúc xắc 6 mặt (từ 1 đến 6 chấm). Sự kiện \"Xuất hiện mặt 5 chấm\" là:",
        "options": [
          "Có thể xảy ra",
          "Chắc chắn xảy ra",
          "Không thể xảy ra",
          "Không bao giờ"
        ],
        "correctAnswer": "Có thể xảy ra",
        "hint": "Mặt 5 chấm có thể xuất hiện hoặc không xuất hiện, tùy vào lần gieo.",
        "explanation": "Mặt 5 chấm có thể xuất hiện hoặc không xuất hiện, tùy vào lần gieo. Vì vậy, kết quả đúng là Có thể xảy ra."
      },
      {
        "id": "g3_l8_6",
        "title": "So sánh số liệu",
        "question": "Theo thống kê: Tháng 1 bán được 120 quyển sách, Tháng 2 bán được 180 quyển sách. Tháng 2 bán nhiều hơn Tháng 1 bao nhiêu quyển?",
        "options": [
          "60 quyển",
          "80 quyển",
          "50 quyển",
          "70 quyển"
        ],
        "correctAnswer": "60 quyển",
        "hint": "180 - 120 = 60 quyển sách.",
        "explanation": "180 - 120 = 60 quyển sách. Do đó, đáp án chính xác là 60 quyển."
      },
      {
        "id": "g3_l8_7",
        "title": "Tung đồng xu",
        "question": "Tung một đồng xu có 2 mặt Sấp và Ngửa. Có mấy khả năng có thể xảy ra về mặt xuất hiện?",
        "options": [
          "2 khả năng (mặt Sấp hoặc mặt Ngửa)",
          "1 khả năng",
          "3 khả năng",
          "4 khả năng"
        ],
        "correctAnswer": "2 khả năng (mặt Sấp hoặc mặt Ngửa)",
        "hint": "Đồng xu có 2 mặt nên có 2 khả năng xuất hiện khi rơi xuống.",
        "explanation": "Đồng xu có 2 mặt nên có 2 khả năng xuất hiện khi rơi xuống. Vì vậy, kết quả đúng là 2 khả năng (mặt Sấp hoặc mặt Ngửa)."
      },
      {
        "id": "g3_l8_8",
        "title": "Phân tích bảng cây xanh",
        "question": "Bảng theo dõi số cây trồng của khối 3: Lớp 3A: 45 cây, Lớp 3B: 38 cây, Lớp 3C: 42 cây. Trung bình mỗi lớp trồng được bao nhiêu cây?",
        "options": [
          "41 hoặc tổng là 125 cây",
          "Tổng số cây là 125 cây",
          "Cả 3 lớp trồng được 125 cây",
          "125 cây"
        ],
        "correctAnswer": "Cả 3 lớp trồng được 125 cây",
        "hint": "Cả 3 lớp trồng được: 45 + 38 + 42 = 125 cây.",
        "explanation": "Cả 3 lớp trồng được: 45 + 38 + 42 = 125 cây. Do đó, đáp án chính xác là Cả 3 lớp trồng được 125 cây."
      }
    ],
    "timoChallenges": [
      {
        "id": "g3_t8_1",
        "title": "Timo: Nguyên lý Dirichlet (Bốc bi trong bóng tối)",
        "question": "Trong túi có 5 viên bi đỏ và 4 viên bi xanh. Hỏi không nhìn vào túi, cần bốc ít nhất bao nhiêu viên bi để chắc chắn có ít nhất 1 viên bi đỏ?",
        "options": [
          "5 viên bi",
          "4 viên bi",
          "6 viên bi",
          "2 viên bi"
        ],
        "correctAnswer": "5 viên bi",
        "hint": "Trường hợp xấu nhất là bốc phải toàn bi xanh (4 viên bi xanh). Khi đó bốc thêm 1 viên nữa (viên thứ 5) thì chắc chắn là bi đỏ: 4 + 1 = 5 viên.",
        "explanation": "Trường hợp xấu nhất là bốc phải toàn bi xanh (4 viên bi xanh). Khi đó bốc thêm 1 viên nữa (viên thứ 5) thì chắc chắn là bi đỏ: 4 + 1 = 5 viên. Do đó, đáp án chính xác là 5 viên bi."
      },
      {
        "id": "g3_t8_2",
        "title": "Timo: Bốc đôi tất cùng màu",
        "question": "Trong ngăn kéo có 6 chiếc tất trắng và 6 chiếc tất đen. Cần lấy ra ít nhất bao nhiêu chiếc tất để chắc chắn có một đôi tất cùng màu?",
        "options": [
          "3 chiếc",
          "2 chiếc",
          "4 chiếc",
          "7 chiếc"
        ],
        "correctAnswer": "3 chiếc",
        "hint": "Có 2 màu tất (trắng và đen). Bốc 3 chiếc thì theo nguyên lý Dirichlet chắc chắn có ít nhất 2 chiếc cùng màu.",
        "explanation": "Có 2 màu tất (trắng và đen). Bốc 3 chiếc thì theo nguyên lý Dirichlet chắc chắn có ít nhất 2 chiếc cùng màu. Vì vậy, kết quả đúng là 3 chiếc."
      },
      {
        "id": "g3_t8_3",
        "title": "Timo: Tính số trận đấu vòng tròn",
        "question": "Có 4 đội bóng thi đấu vòng tròn 1 lượt (mỗi đội đều gặp các đội còn lại đúng 1 trận). Hỏi có tất cả bao nhiêu trận đấu diễn ra?",
        "options": [
          "6 trận đấu",
          "8 trận đấu",
          "4 trận đấu",
          "12 trận đấu"
        ],
        "correctAnswer": "6 trận đấu",
        "hint": "Số trận đấu = (4 x 3) : 2 = 6 trận đấu.",
        "explanation": "Số trận đấu = (4 x 3) : 2 = 6 trận đấu. Do đó, đáp án chính xác là 6 trận đấu."
      }
    ]
  }
];
