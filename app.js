/**
 * IT ROOKIE ARENA AI - V2.0 ARCHITECTURE JAVASCRIPT
 * Senior Fullstack Architect & EdTech UI/UX Designer Implementation
 * Features:
 *  - VirtualServerAPI (REST API client with 100% reliable LocalStorage fallback)
 *  - Pure Web Audio API SFX synthesizer
 *  - Triple Role Interface: Student Portal, Teacher Studio, Admin Console
 *  - 4 Interactive Windows Installation Simulators (Rufus, WinPE + VMD, Disk Mgmt BCD, WinRE Notepad)
 *  - 6 Real-world IT Helpdesk Tickets & 6 C/JS Code Bug challenges
 *  - AI Scaffolding Mentor (3-tier progressive hints with XP mechanics)
 *  - 3D Flip Flashcards & Personalized Error Notebook
 *  - Dynamic Subject Expansion (Admin additions appear immediately in all dropdowns)
 */

// ==========================================================================
// 1. EMBEDDED INITIAL DATABASE TEMPLATE (FOR ZERO-CONFIG 100% RELIABILITY)
// ==========================================================================
const DEFAULT_DATABASE = {
  users: [
    {
      id: "sv-k21-001",
      name: "Nguyễn Hoàng Nam",
      mssv: "21DTH01245",
      class: "K21-CNTT02",
      role: "student",
      avatar: "👨‍💻",
      level: "Chiến binh Săn Bug K21",
      xp: 340,
      streak: 5,
      completedTickets: ["ticket-01", "ticket-02", "ticket-04"],
      completedBugs: ["bug-01", "bug-03"],
      masteredFlashcards: ["fc-01", "fc-03"]
    },
    {
      id: "gv-k21-001",
      name: "ThS. Trần Minh Đức",
      mssv: "GV-K21-IT",
      class: "Bộ môn Kỹ thuật Máy tính",
      role: "teacher",
      avatar: "👨‍🏫",
      level: "Giảng viên Trưởng Bộ môn",
      xp: 2500,
      streak: 42
    },
    {
      id: "adm-k21-001",
      name: "K21 System Architect",
      mssv: "SYS-ADMIN",
      class: "Quản trị Hạ tầng IT",
      role: "admin",
      avatar: "⚡",
      level: "Root Administrator",
      xp: 9999,
      streak: 100
    }
  ],
  subjects: [
    {
      id: "sub-hw-os",
      code: "IT101",
      name: "Phần cứng & Cài đặt HĐH Thực chiến",
      icon: "💻",
      color: "#00f3ff",
      description: "Thực hành tháo lắp, chẩn đoán phần cứng, cấu hình BIOS/UEFI và 4 phương pháp cài đặt Windows chuẩn IT Helpdesk."
    },
    {
      id: "sub-code-bugs",
      code: "CS102",
      name: "Săn Bug Lập trình C & JavaScript K21",
      icon: "🐛",
      color: "#a855f7",
      description: "Nhận diện và sửa các lỗi tư duy thuật toán, cú pháp, con trỏ mảng, bất đồng bộ và bẫy DOM kinh điển."
    },
    {
      id: "sub-net-deploy",
      code: "NET201",
      name: "Mạng máy tính & Triển khai Văn phòng",
      icon: "🌐",
      color: "#10b981",
      description: "Bấm dây mạng chuẩn T568A/B, cấu hình Router/VLAN, cấp phát DHCP và xử lý sự cố mạng LAN/WLAN văn phòng."
    },
    {
      id: "sub-sql-db",
      code: "DB301",
      name: "Cơ sở dữ liệu SQL & Tối ưu Truy vấn",
      icon: "🗄️",
      color: "#f59e0b",
      description: "Thiết kế chuẩn hóa cơ sở dữ liệu, viết câu lệnh DDL/DML, gỡ lỗi JOIN và Indexing tối ưu hóa truy vấn."
    }
  ],
  stage1_it_tickets: [
    {
      id: "ticket-01",
      subjectId: "sub-hw-os",
      title: "BSOD: Inaccessible Boot Device sau khi cập nhật BIOS",
      severity: "High",
      userReport: "Kế toán phòng Tài vụ khởi động máy tính thì xuất hiện màn hình xanh Inaccessible Boot Device ngay sau khi IT cơ quan tự động cập nhật BIOS đêm qua.",
      symptoms: ["Màn hình xanh BSOD 0x0000007B", "Đèn ổ cứng nhấp nháy 1 lần rồi tắt ngúm", "Không thể vào Safe Mode"],
      category: "BIOS/Storage",
      xpReward: 50,
      diagnosticSteps: [
        "Vào BIOS kiểm tra SATA Controller Mode (AHCI vs RAID ON/VMD)",
        "Kiểm tra Boot Option Priorities xem có nhận đúng Windows Boot Manager",
        "Chuyển chế độ VMD/RAID sang AHCI hoặc ngược lại tùy thuộc driver ban đầu của Windows"
      ],
      correctActionIndex: 2,
      options: [
        "Cài lại toàn bộ Windows từ đầu và xóa sạch phân vùng",
        "Thay ổ cứng SSD mới vì ổ cứng cũ đã hỏng cell nhớ",
        "Vào BIOS chuyển SATA Operation / VMD Controller về đúng chuẩn ban đầu trước khi cập nhật (AHCI hoặc RAID On)",
        "Rút dây nguồn máy tính ra đợi 10 phút rồi cắm lại"
      ],
      explanation: "Khi cập nhật BIOS, bo mạch chủ thường reset về mặc định nhà sản xuất (ví dụ từ AHCI sang RAID On / Intel VMD hoặc ngược lại). Windows thiếu driver tương ứng lúc nạp kernel nên gây ra BSOD 0x7b. Chỉ cần chỉnh lại chế độ controller là boot bình thường."
    },
    {
      id: "ticket-02",
      subjectId: "sub-hw-os",
      title: "Laptop Intel Gen 12/13/14 không nhận ổ cứng NVMe khi cài Win",
      severity: "Critical",
      userReport: "Sinh viên mang laptop mới mua chip Core i7 Gen 13 đến phòng máy nhờ cài Win, nhưng đến bước chọn ổ đĩa thì bảng trống trơn (We couldn't find any drives).",
      symptoms: ["Bộ cài Windows 10/11 không thấy ổ SSD NVMe", "Trong BIOS vẫn hiển thị tên ổ cứng Micron/Samsung 512GB", "Bấm Rescan disk không có tác dụng"],
      category: "Driver / Intel VMD",
      xpReward: 60,
      diagnosticSteps: [
        "Xác định đây là kiến trúc Intel Gen 11-14 sử dụng công nghệ Intel Volume Management Device (Intel VMD)",
        "Chuẩn bị USB chứa driver Intel Rapid Storage Technology (IRST) VMD đã giải nén",
        "Bấm 'Load driver' trong trình cài đặt Windows và trỏ đến thư mục driver IRST"
      ],
      correctActionIndex: 1,
      options: [
        "Tháo nắp đáy laptop ra để cắm lại chân cắm M.2 PCIe",
        "Bấm 'Load driver', cắm USB chứa driver Intel RST VMD controller và chọn driver iaStorVD.sys",
        "Dùng lệnh clean all trong diskpart để format trắng SSD",
        "Format USB cài Win từ GPT về MBR để nhận diện chuẩn cũ"
      ],
      explanation: "Từ Intel Core thế hệ 11 trở lên, công nghệ Intel VMD quản lý trực tiếp bus PCIe NVMe. Bộ cài Windows gốc chưa tích hợp sẵn driver này. Cần Load driver Intel RST (VMD) hoặc tắt VMD Controller trong BIOS nếu không dùng RAID."
    },
    {
      id: "ticket-03",
      subjectId: "sub-hw-os",
      title: "Bật máy quạt quay vù vù, màn hình đen, phát 3 tiếng bíp ngắn",
      severity: "Medium",
      userReport: "Máy bàn văn phòng khoa CNTT sau kỳ nghỉ hè bật nguồn thì đèn nguồn sáng, quạt CPU quay tối đa nhưng màn hình không tín hiệu, loa mainboard kêu 3 tiếng bíp ngắn liên tục.",
      symptoms: ["Không xuất hình ra màn hình (No Signal)", "Bàn phím không sáng đèn NumLock", "Còi loa bo mạch chủ phát 3 tiếng Beep ngắn"],
      category: "Hardware / RAM",
      xpReward: 40,
      diagnosticSteps: [
        "Tra cứu mã Beep Code của bo mạch chủ (AMI BIOS: 3 bíp ngắn = lỗi đọc/ghi bộ nhớ RAM)",
        "Ngắt nguồn điện hoàn toàn, xả tĩnh điện",
        "Tháo thanh RAM, vệ sinh chân kim loại vàng bằng tẩy bút chì hoặc cồn Isopropyl 90 độ, cắm chặt lại vào khe A2/B2"
      ],
      correctActionIndex: 0,
      options: [
        "Tháo thanh RAM, vệ sinh sạch chân tiếp xúc bằng gôm tẩy/cồn chuyên dụng và cắm lại đúng khe ưu tiên",
        "Thay card đồ họa rời mới ngay lập tức",
        "Tháo pin CMOS ra ngâm nước muối để phục hồi điện áp",
        "Cài lại hệ điều hành Windows qua cổng LAN PXE Boot"
      ],
      explanation: "3 tiếng bíp ngắn (AMI BIOS) hoặc chuỗi bíp lặp lại báo hiệu lỗi bộ nhớ RAM (Memory parity error / Contact failure do ẩm mốc chân tiếp xúc). Vệ sinh chân RAM và kiểm tra khe cắm giải quyết 90% trường hợp."
    },
    {
      id: "ticket-04",
      subjectId: "sub-hw-os",
      title: "Báo lỗi 'The selected disk is of the GPT partition style' khi cài Win",
      severity: "High",
      userReport: "Chọn phân vùng cài Win thì nút Next bị mờ, thông báo: 'Windows cannot be installed to this disk. The selected disk is of the GPT partition style'. Máy khách có 2 ổ: C: cài Win và D: chứa 500GB đồ án tốt nghiệp.",
      symptoms: ["Không bấm được Next để cài đặt", "Khách hàng kiên quyết không được làm mất dữ liệu ổ D:", "Máy tính đang khởi động ở chế độ Legacy BIOS thay vì UEFI"],
      category: "Partition / UEFI-GPT",
      xpReward: 60,
      diagnosticSteps: [
        "Xác định xung đột: Ổ cứng chuẩn GPT nhưng bộ cài USB đang boot ở chế độ Legacy BIOS (hoặc ngược lại)",
        "Khởi động lại máy, bấm phím Boot Menu (F12/F11/Esc) và chọn dòng USB có tiền tố 'UEFI:'",
        "TUYỆT ĐỐI KHÔNG gõ lệnh diskpart -> clean vì sẽ xóa sạch cả ổ D đồ án"
      ],
      correctActionIndex: 2,
      options: [
        "Chạy Command Prompt gõ diskpart -> select disk 0 -> clean để chuyển sang MBR",
        "Format toàn bộ ổ cứng kể cả phân vùng D:",
        "Khởi động lại máy, mở Boot Menu và chọn đúng dòng USB có chữ 'UEFI' để boot đồng bộ chuẩn GPT",
        "Cài song song hệ điều hành Linux Ubuntu để tự sửa phân vùng"
      ],
      explanation: "Windows yêu cầu: Boot chuẩn UEFI phải đi với ổ GPT, boot Legacy BIOS phải đi với ổ MBR. Nếu ổ GPT mà boot USB ở chế độ Legacy sẽ báo lỗi này. Chỉ cần khởi động lại và chọn boot USB ở chuẩn 'UEFI: [Tên USB]' là cài đặt êm đẹp mà không mất dữ liệu ổ D."
    },
    {
      id: "ticket-05",
      subjectId: "sub-hw-os",
      title: "Máy nhiễm mã độc Bootloop, cần cứu dữ liệu Desktop khẩn cấp",
      severity: "Critical",
      userReport: "Máy Giám đốc bị dính mã độc khởi động liên tục đến logo Windows là tắt. Trên màn hình Desktop và thư mục Documents có tài liệu dự án chưa kịp sao lưu.",
      symptoms: ["Windows không thể vào Safe Mode", "Khởi động lặp lại vô tận", "Cần dữ liệu gấp trong vòng 30 phút"],
      category: "WinPE / Data Rescue",
      xpReward: 55,
      diagnosticSteps: [
        "Không được cài đè hay format phân vùng C trực tiếp",
        "Boot vào môi trường cứu hộ WinPE (như Anhdv Boot / DLC Boot) từ USB",
        "Mở File Explorer trong WinPE, truy cập đường dẫn C:\\Users\\[Username]\\Desktop và Documents để copy sang ổ cứng ngoài"
      ],
      correctActionIndex: 1,
      options: [
        "Dùng USB cài Windows bấm nút 'Install Now' và format ổ C ngay",
        "Boot vào USB WinPE, mở File Explorer copy toàn bộ dữ liệu Desktop/Documents sang USB hoặc ổ D trước khi xử lý",
        "Cắm ổ cứng sang máy tính khác đang hoạt động mà không bật phần mềm diệt virus",
        "Gõ lệnh format C: /q /x từ cửa sổ phục hồi"
      ],
      explanation: "Quy tắc vàng của kỹ thuật viên IT là 'Dữ liệu của khách hàng là ưu tiên số 1'. Phải dùng môi trường độc lập WinPE để mount ổ cứng và trích xuất dữ liệu quan trọng ra nơi an toàn trước khi tiến hành sửa chữa hay cài đặt lại."
    },
    {
      id: "ticket-06",
      subjectId: "sub-hw-os",
      title: "Máy bộ Dell cơ quan khóa mật khẩu BIOS, cấm cắm USB lạ",
      severity: "High",
      userReport: "Máy bộ Dell OptiPlex của cơ quan hành chính bị lỗi Windows, chính sách IT công ty khóa Password BIOS/Boot Menu và keo dán niêm phong cổng USB ngoài, nhưng cần cài lại Win gấp.",
      symptoms: ["Không thể bấm F2 hay F12 để chọn boot USB", "Windows cũ vẫn vào được màn hình Recovery WinRE", "Ổ cứng còn 40GB trống"],
      category: "Disk Management / BCD Injection",
      xpReward: 70,
      diagnosticSteps: [
        "Sử dụng kỹ thuật giải nén bộ cài ISO vào phân vùng ổ D:",
        "Hoặc chia một phân vùng 5-10GB trên ổ cứng, nạp bộ cứu hộ WinPE và add vào menu BCD của Windows Boot Manager",
        "Khởi động lại chọn trực tiếp Menu WinPE trên ổ cứng mà không cần cắm USB hay truy cập BIOS"
      ],
      correctActionIndex: 0,
      options: [
        "Chia phân vùng 5-10GB trên ổ cứng, nạp WinPE/ISO và thêm vào menu boot BCD qua EasyBCD/Bootice để boot trực tiếp từ ổ cứng",
        "Dùng kìm bẻ khóa thùng máy để tháo pin CMOS",
        "Đập bỏ ổ cứng thay máy mới",
        "Cắm điện 380V vào cổng mạng để ép BIOS reset"
      ],
      explanation: "Khi bị khóa BIOS và cấm boot USB, giải pháp đỉnh cao của Kỹ thuật viên là 'Menu Boot WinPE tại chỗ'. Ta phân vùng 5-10GB ngay trên ổ cứng, nạp file WIM hoặc bộ cài và dùng bcdedit / EasyBCD ghi một entry vào Windows Boot Manager. Khi bật máy, menu lựa chọn sẽ hiện ra mà không cần can thiệp phím BIOS."
    }
  ],
  stage2_code_bugs: [
    {
      "id": "bug-01",
      "subjectId": "sub-code-bugs",
      "title": "Bẫy gán biến trong điều kiện kiểm tra quyền Admin",
      "language": "c",
      "category": "Cú pháp & Logic toán tử",
      "difficulty": "Dễ",
      "xpReward": 40,
      "code": "#include <stdio.h>\n#include <stdbool.h>\n\nint main() {\n    bool isAdmin = false;\n    int userRole = 0; // 0: Guest, 1: Moderator, 2: Admin\n\n    // Kiểm tra quyền hạn truy cập hệ thống K21\n    if (isAdmin = true) {\n        printf(\"ACCESS GRANTED: Chao mung Admin he thong K21!\\n\");\n    } else {\n        printf(\"ACCESS DENIED: Ban khong co quyen truy cap!\\n\");\n    }\n    return 0;\n}",
      "bugLineNumber": 9,
      "hint1": "Quan sát kỹ toán tử trong câu lệnh điều kiện `if` tại dòng 9.",
      "hint2": "Trong ngôn ngữ C và JavaScript, toán tử `=` là phép GÁN giá trị, còn toán tử `==` mới là phép SO SÁNH bằng.",
      "hint3": "Sửa `if (isAdmin = true)` thành `if (isAdmin == true)` hoặc viết chuẩn Clean Code: `if (isAdmin)`.",
      "expectedFixedSnippet": "isAdmin == true",
      "explanation": "Lỗi cực kỳ phổ biến của sinh viên K21! Biểu thức `isAdmin = true` thực hiện phép gán giá trị `true` vào biến `isAdmin`, sau đó trả về giá trị `true`, khiến khối `if` luôn luôn chạy ngay cả khi ban đầu user là Guest."
    },
    {
      "id": "bug-02",
      "subjectId": "sub-code-bugs",
      "title": "Vòng lặp vô tận đóng băng CPU máy chủ K21",
      "language": "c",
      "category": "Vòng lặp & Biến đếm",
      "difficulty": "Dễ",
      "xpReward": 40,
      "code": "#include <stdio.h>\n\nint main() {\n    int count = 1;\n    int totalStudents = 5;\n\n    printf(\"Danh sach sinh vien K21 diem danh:\\n\");\n    while (count <= totalStudents) {\n        printf(\"Sinh vien thu %d da co mat.\\n\", count);\n        // Quen cap nhat buoc nhay tai day\n    }\n    printf(\"Hoan tat diem danh!\\n\");\n    return 0;\n}",
      "bugLineNumber": 10,
      "hint1": "Vòng lặp `while` cần một điều kiện dừng. Biến `count` thay đổi như thế nào sau mỗi lần lặp?",
      "hint2": "Biến `count` luôn có giá trị là 1, nên điều kiện `count <= totalStudents` mãi mãi đúng, gây ra vòng lặp vô tận (Infinite Loop).",
      "hint3": "Thêm lệnh tăng biến đếm `count++;` hoặc `count = count + 1;` vào bên trong thân vòng lặp `while`.",
      "expectedFixedSnippet": "count++",
      "explanation": "Khi viết vòng lặp `while`, nếu quên cập nhật biến đếm hoặc điều kiện thoát, chương trình sẽ treo vĩnh viễn, tiêu thụ 100% tài nguyên CPU."
    },
    {
      "id": "bug-03",
      "subjectId": "sub-code-bugs",
      "title": "Tràn mảng Off-By-One gây hỏng vùng nhớ Stack",
      "language": "c",
      "category": "Mảng & Vùng nhớ",
      "difficulty": "Trung bình",
      "xpReward": 50,
      "code": "#include <stdio.h>\n\nint main() {\n    // Mang diem thi 5 mon cua sinh vien K21\n    int scores[5] = {85, 90, 78, 92, 88};\n    int sum = 0;\n\n    // Duyet qua tat ca phan tu de tinh tong\n    for (int i = 0; i <= 5; i++) {\n        sum += scores[i];\n    }\n\n    printf(\"Tong diem: %d\\n\", sum);\n    return 0;\n}",
      "bugLineNumber": 9,
      "hint1": "Mảng có 5 phần tử thì chỉ số (index) hợp lệ chạy từ bao nhiêu đến bao nhiêu?",
      "hint2": "Trong C/C++, mảng có kích thước N thì index chạy từ 0 đến N-1. Ở đây N=5 nên index chỉ từ 0 đến 4. Tại `i = 5`, chương trình truy xuất ngoài vùng nhớ mảng (Buffer Overflow).",
      "hint3": "Đổi điều kiện dừng của vòng lặp từ `i <= 5` thành `i < 5`.",
      "expectedFixedSnippet": "i < 5",
      "explanation": "Lỗi 'Off-by-one error' (lệch 1 đơn vị). `scores[5]` truy cập vào ô nhớ nằm ngoài phạm vi mảng, đọc giá trị rác hoặc làm crash chương trình (Segmentation Fault)."
    },
    {
      "id": "bug-04",
      "subjectId": "sub-code-bugs",
      "title": "Phép chia số nguyên làm mất phần thập phân (Integer Truncation)",
      "language": "c",
      "category": "Kiểu dữ liệu & Ép kiểu",
      "difficulty": "Trung bình",
      "xpReward": 50,
      "code": "#include <stdio.h>\n\nint main() {\n    int tongDiem = 17;\n    int soMon = 2;\n    \n    // Tinh diem trung binh (ky vong: 8.5)\n    float diemTB = tongDiem / soMon;\n\n    printf(\"Diem trung binh mon: %.2f\\n\", diemTB); // Ket qua in ra: 8.00!\n    return 0;\n}",
      "bugLineNumber": 8,
      "hint1": "Biểu thức `tongDiem / soMon` đang thực hiện phép chia giữa hai biến có kiểu dữ liệu gì?",
      "hint2": "Trong C, phép chia `int / int` sẽ luôn cho kết quả là `int` (bị chặt cụt phần thập phân), sau đó mới gán vào biến `float`.",
      "hint3": "Cần ép kiểu ít nhất 1 toán hạng sang `float`, ví dụ: `(float)tongDiem / soMon` hoặc `(float)tongDiem / (float)soMon`.",
      "expectedFixedSnippet": "(float)tongDiem / soMon",
      "explanation": "Trong C, `17 / 2 = 8` (chứ không phải 8.5) vì cả 2 toán hạng đều là số nguyên. Sau đó số 8 được ép ngầm định thành `8.00`. Để giữ phần thập phân, cần ép kiểu rõ ràng: `(float)tongDiem / soMon`."
    },
    {
      "id": "bug-05",
      "subjectId": "sub-code-bugs",
      "title": "Quên trích xuất thuộc tính .value khi lấy dữ liệu DOM Input",
      "language": "javascript",
      "category": "JavaScript & DOM Manipulation",
      "difficulty": "Dễ",
      "xpReward": 45,
      "code": "// Kiem tra sinh vien K21 co du tuoi tham gia cuoc thi\nfunction checkEligibility() {\n    const ageInput = document.getElementById(\"student-age\");\n    \n    // Kiem tra do tuoi tren 18\n    if (ageInput >= 18) {\n        console.log(\"Du dieu kien tham gia Arena!\");\n        return true;\n    } else {\n        console.log(\"Chua du tuoi quy dinh!\");\n        return false;\n    }\n}",
      "bugLineNumber": 6,
      "hint1": "Hàm `document.getElementById` trả về đối tượng HTML Element chứ không phải giá trị người dùng nhập vào.",
      "hint2": "Để lấy chuỗi giá trị từ thẻ `<input>`, ta cần truy xuất thuộc tính `.value` của phần tử đó.",
      "hint3": "Sửa `ageInput >= 18` thành `Number(ageInput.value) >= 18` hoặc `parseInt(ageInput.value) >= 18`.",
      "expectedFixedSnippet": "ageInput.value >= 18",
      "explanation": "`ageInput` là một đối tượng `HTMLInputElement`. Khi so sánh đối tượng với số nguyên `18`, JavaScript sẽ ép kiểu thành `[object HTMLInputElement] >= 18`, kết quả luôn là `false`."
    },
    {
      "id": "bug-06",
      "subjectId": "sub-code-bugs",
      "title": "Sai thứ tự ưu tiên giữa toán tử AND (&&) và OR (||)",
      "language": "javascript",
      "category": "Logic Boolean & Toán tử",
      "difficulty": "Khó",
      "xpReward": 60,
      "code": "// He thong xet mien giam hoc phi K21\n// Yeu cau: La Sinh vien K21 VA (co hoc bong HOAC thuoc ho ngheo)\nfunction checkScholarship(isK21, hasMerit, isPoorHousehold) {\n    // Bug logic: && co do uu tien cao hon ||\n    if (isK21 && hasMerit || isPoorHousehold) {\n        return \"Duoc mien giam 100% hoc phi\";\n    }\n    return \"Khong thuoc dien mien giam\";\n}\n\n// Test case: Nguoi ngoai truong khong phai K21 (isK21 = false) nhung ho ngheo\nconsole.log(checkScholarship(false, false, true)); \n// Ket qua in ra mien giam la sai vi yeu cau tien quyet phai la K21!",
      "bugLineNumber": 5,
      "hint1": "Toán tử logic nào có độ ưu tiên cao hơn: `&&` hay `||`?",
      "hint2": "Trong JavaScript, `&&` có độ ưu tiên cao hơn `||`. Biểu thức `A && B || C` được tính là `(A && B) || C`. Do đó chỉ cần `C = true` là điều kiện tổng đúng ngay cả khi `A = false`.",
      "hint3": "Dùng cặp dấu ngoặc đơn `()` để gom nhóm điều kiện: `isK21 && (hasMerit || isPoorHousehold)`.",
      "expectedFixedSnippet": "isK21 && (hasMerit || isPoorHousehold)",
      "explanation": "Quy tắc ưu tiên toán tử: `&&` tương đương phép nhân logic, `||` tương đương phép cộng logic. Luôn dùng dấu ngoặc đơn `()` để thể hiện rõ ràng chủ ý của lập trình viên và tránh bẫy logic chết người."
    }
  ],
  flashcards: [
    {
      "id": "fc-01",
      "subjectId": "sub-hw-os",
      "front": "UEFI và GPT khác gì so với Legacy BIOS và MBR?",
      "back": "GPT hỗ trợ ổ cứng > 2TB (lên tới hàng ZB) và tạo được tới 128 phân vùng chính, đi kèm chuẩn boot UEFI tốc độ nhanh và bảo mật Secure Boot. Legacy BIOS + MBR chỉ hỗ trợ tối đa 2TB và tối đa 4 phân vùng Primary.",
      "category": "Kiến trúc máy tính"
    },
    {
      "id": "fc-02",
      "subjectId": "sub-hw-os",
      "front": "Tại sao CPU Intel Gen 11-14 cần driver Intel VMD/IRST khi cài Win?",
      "back": "Intel VMD (Volume Management Device) quản lý trực tiếp các làn PCIe NVMe để tối ưu tốc độ và RAID. Bản cài Windows nguyên gốc chưa tích hợp driver iaStorVD.sys, nếu không Load Driver thì bộ cài sẽ không thể nhìn thấy ổ SSD.",
      "category": "Lưu trữ NVMe"
    },
    {
      "id": "fc-03",
      "subjectId": "sub-code-bugs",
      "front": "Sự khác biệt giữa `==` và `===` trong JavaScript là gì?",
      "back": "`==` là so sánh lỏng lẻo (loose equality) - tự động ép kiểu dữ liệu trước khi so sánh (ví dụ '5' == 5 là true). `===` là so sánh nghiêm ngặt (strict equality) - kiểm tra cả giá trị VÀ kiểu dữ liệu (ví dụ '5' === 5 là false).",
      "category": "Lập trình Web"
    },
    {
      "id": "fc-04",
      "subjectId": "sub-code-bugs",
      "front": "Segmentation Fault trong ngôn ngữ C xảy ra khi nào?",
      "back": "Xảy ra khi chương trình cố gắng truy cập vào vùng nhớ mà nó không có quyền (dereference con trỏ NULL, truy cập mảng vượt quá kích thước, ghi đè vùng nhớ chỉ đọc hoặc tràn ngăn xếp stack).",
      "category": "Hệ thống C/C++"
    },
    {
      "id": "fc-05",
      "subjectId": "sub-net-deploy",
      "front": "Chuẩn bấm cáp mạng T568B theo thứ tự màu dây là gì?",
      "back": "1. Trắng Cam - 2. Cam - 3. Trắng Xanh Lá - 4. Xanh Dương - 5. Trắng Xanh Dương - 6. Xanh Lá - 7. Trắng Nâu - 8. Nâu.",
      "category": "Mạng máy tính"
    },
    {
      "id": "fc-06",
      "subjectId": "sub-sql-db",
      "front": "Khác biệt giữa `WHERE` và `HAVING` trong câu lệnh SQL?",
      "back": "`WHERE` lọc dữ liệu của từng dòng TRƯỚC KHI gom nhóm (không dùng được với hàm tổng hợp như SUM, COUNT, AVG). `HAVING` lọc kết quả SAU KHI đã gom nhóm bằng mệnh đề GROUP BY.",
      "category": "Cơ sở dữ liệu"
    }
  ],
  error_notebook: [
    {
      "id": "err-01",
      "userId": "sv-k21-001",
      "subjectId": "sub-hw-os",
      "itemId": "ticket-02",
      "itemTitle": "Laptop Intel Gen 12/13/14 không nhận ổ cứng NVMe khi cài Win",
      "mistakeMade": "Chọn xóa phân vùng sạch bằng Diskpart Clean thay vì Load driver Intel RST",
      "coreLesson": "Cần nhận diện CPU Intel Gen 11-14 sử dụng Intel VMD. Giải nén driver IRST vào USB và chọn 'Load Driver', không format bừa bãi.",
      "timestamp": "2026-10-20T19:30:00Z"
    },
    {
      "id": "err-02",
      "userId": "sv-k21-001",
      "subjectId": "sub-code-bugs",
      "itemId": "bug-06",
      "itemTitle": "Sai thứ tự ưu tiên giữa toán tử AND (&&) và OR (||)",
      "mistakeMade": "Không dùng dấu ngoặc đơn () để nhóm điều kiện",
      "coreLesson": "Toán tử && ưu tiên cao hơn ||. Luôn dùng () để kiểm soát thứ tự logic.",
      "timestamp": "2026-10-20T19:45:00Z"
    }
  ],
  system_logs: [
    {"timestamp": "2026-10-20T20:00:00Z", "method": "GET", "endpoint": "/subjects", "status": 200, "source": "System Bootstrap"},
    {"timestamp": "2026-10-20T20:00:02Z", "method": "GET", "endpoint": "/users/sv-k21-001", "status": 200, "source": "Auth Init"}
  ]
};

// ==========================================================================
// 2. VIRTUAL REST API SERVER CLIENT WITH 100% SMART AUTO-FALLBACK
// ==========================================================================
class VirtualServerAPI {
  constructor() {
    this.baseUrl = localStorage.getItem("it_arena_api_url") || "http://localhost:3000";
    this.isOnline = false;
    this.latency = 0;
    this.storageKey = "it_arena_db_v2";
    this.initLocalStorage();
  }

  initLocalStorage() {
    if (!localStorage.getItem(this.storageKey)) {
      localStorage.setItem(this.storageKey, JSON.stringify(DEFAULT_DATABASE));
    }
  }

  getLocalDb() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : JSON.parse(JSON.stringify(DEFAULT_DATABASE));
    } catch (e) {
      console.warn("LocalStorage corrupted, resetting to default:", e);
      return JSON.parse(JSON.stringify(DEFAULT_DATABASE));
    }
  }

  saveLocalDb(data) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  logTransaction(method, endpoint, status, source = "Client") {
    const logItem = {
      timestamp: new Date().toISOString(),
      method: method.toUpperCase(),
      endpoint,
      status,
      source
    };
    const db = this.getLocalDb();
    if (!db.system_logs) db.system_logs = [];
    db.system_logs.unshift(logItem);
    if (db.system_logs.length > 50) db.system_logs.pop();
    this.saveLocalDb(db);
    return logItem;
  }

  async checkConnection() {
    const startTime = performance.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);

      const res = await fetch(`${this.baseUrl}/subjects`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        this.isOnline = true;
        this.latency = Math.round(performance.now() - startTime);
        this.logTransaction("GET", "/subjects", res.status, "Connection Ping");
        return { online: true, latency: this.latency };
      }
      throw new Error(`HTTP ${res.status}`);
    } catch (err) {
      this.isOnline = false;
      this.latency = 0;
      this.logTransaction("PING", this.baseUrl, 0, "Auto-Fallback Local Active");
      return { online: false, latency: 0, reason: err.message };
    }
  }

  // RESTful GET
  async get(collection, queryParams = {}) {
    const queryString = new URLSearchParams(queryParams).toString();
    const endpoint = queryString ? `/${collection}?${queryString}` : `/${collection}`;

    if (this.isOnline) {
      try {
        const res = await fetch(`${this.baseUrl}${endpoint}`);
        if (res.ok) {
          const data = await res.json();
          this.logTransaction("GET", endpoint, res.status, "json-server");
          return data;
        }
      } catch (e) {
        console.warn(`Fetch ${endpoint} failed, falling back to LocalStorage:`, e);
      }
    }

    // Local Storage Fallback
    const db = this.getLocalDb();
    let result = db[collection] || [];
    
    // Filter locally if query parameters provided
    if (Object.keys(queryParams).length > 0) {
      result = result.filter(item => {
        return Object.entries(queryParams).every(([key, val]) => String(item[key]) === String(val));
      });
    }

    this.logTransaction("GET", endpoint, 200, "LocalStorage Fallback");
    return result;
  }

  // RESTful POST
  async post(collection, data) {
    const endpoint = `/${collection}`;
    if (!data.id) {
      data.id = `${collection.slice(0, 3)}-${Date.now()}`;
    }

    if (this.isOnline) {
      try {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        if (res.ok) {
          const saved = await res.json();
          this.logTransaction("POST", endpoint, res.status, "json-server");
          // Sync with local copy
          const db = this.getLocalDb();
          if (!db[collection]) db[collection] = [];
          db[collection].push(saved);
          this.saveLocalDb(db);
          return saved;
        }
      } catch (e) {
        console.warn(`POST ${endpoint} failed, saving to LocalStorage:`, e);
      }
    }

    const db = this.getLocalDb();
    if (!db[collection]) db[collection] = [];
    db[collection].push(data);
    this.saveLocalDb(db);
    this.logTransaction("POST", endpoint, 201, "LocalStorage Fallback");
    return data;
  }

  // RESTful PUT
  async put(collection, id, updatedData) {
    const endpoint = `/${collection}/${id}`;

    if (this.isOnline) {
      try {
        const res = await fetch(`${this.baseUrl}${endpoint}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData)
        });
        if (res.ok) {
          const saved = await res.json();
          this.logTransaction("PUT", endpoint, res.status, "json-server");
          const db = this.getLocalDb();
          if (db[collection]) {
            const idx = db[collection].findIndex(item => item.id === id);
            if (idx !== -1) db[collection][idx] = saved;
            this.saveLocalDb(db);
          }
          return saved;
        }
      } catch (e) {
        console.warn(`PUT ${endpoint} failed, falling back to LocalStorage:`, e);
      }
    }

    const db = this.getLocalDb();
    if (db[collection]) {
      const idx = db[collection].findIndex(item => item.id === id);
      if (idx !== -1) {
        db[collection][idx] = { ...db[collection][idx], ...updatedData };
        this.saveLocalDb(db);
        this.logTransaction("PUT", endpoint, 200, "LocalStorage Fallback");
        return db[collection][idx];
      }
    }
    return updatedData;
  }

  // RESTful DELETE
  async delete(collection, id) {
    const endpoint = `/${collection}/${id}`;

    if (this.isOnline) {
      try {
        const res = await fetch(`${this.baseUrl}${endpoint}`, { method: "DELETE" });
        if (res.ok) {
          this.logTransaction("DELETE", endpoint, res.status, "json-server");
          const db = this.getLocalDb();
          if (db[collection]) {
            db[collection] = db[collection].filter(item => item.id !== id);
            this.saveLocalDb(db);
          }
          return true;
        }
      } catch (e) {
        console.warn(`DELETE ${endpoint} failed, deleting in LocalStorage:`, e);
      }
    }

    const db = this.getLocalDb();
    if (db[collection]) {
      db[collection] = db[collection].filter(item => item.id !== id);
      this.saveLocalDb(db);
      this.logTransaction("DELETE", endpoint, 200, "LocalStorage Fallback");
      return true;
    }
    return false;
  }

  exportDbJson() {
    const db = this.getLocalDb();
    const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `it_arena_k21_db_snapshot_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importDbJson(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.subjects && parsed.users) {
        this.saveLocalDb(parsed);
        this.logTransaction("IMPORT", "/db.json", 200, "Manual DB Restore");
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  resetToDefault() {
    localStorage.setItem(this.storageKey, JSON.stringify(DEFAULT_DATABASE));
    this.logTransaction("RESET", "/db.json", 200, "Factory Reset Defaults");
  }
}

// ==========================================================================
// 3. SOUND EFFECTS SYNTHESIZER (PURE WEB AUDIO API - NO EXTERNAL MP3S)
// ==========================================================================
class SoundFX {
  constructor() {
    this.enabled = localStorage.getItem("it_arena_sfx_muted") !== "true";
    this.audioCtx = null;
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }

  playTone(freq, type, duration, gainVal = 0.08) {
    if (!this.enabled) return;
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context might fail silently in non-user-gesture situations
    }
  }

  click() {
    this.playTone(800, "sine", 0.06, 0.04);
  }

  success() {
    this.playTone(523.25, "sine", 0.1, 0.07); // C5
    setTimeout(() => this.playTone(659.25, "sine", 0.12, 0.08), 90); // E5
    setTimeout(() => this.playTone(783.99, "sine", 0.22, 0.09), 180); // G5
  }

  error() {
    this.playTone(220, "sawtooth", 0.18, 0.08);
    setTimeout(() => this.playTone(180, "sawtooth", 0.22, 0.08), 120);
  }

  hint() {
    this.playTone(440, "triangle", 0.08, 0.06);
    setTimeout(() => this.playTone(880, "sine", 0.15, 0.07), 80);
  }

  flip() {
    this.playTone(350, "sine", 0.08, 0.03);
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("it_arena_sfx_muted", (!this.enabled).toString());
    return this.enabled;
  }
}

// ==========================================================================
// 4. MAIN APPLICATION ARCHITECT & STATE CONTROLLER
// ==========================================================================
class AppController {
  constructor() {
    this.api = new VirtualServerAPI();
    this.sfx = new SoundFX();

    // App State
    this.currentRole = "student";
    this.currentUser = null;
    this.currentSubjectId = "sub-hw-os";
    this.currentView = "student-dashboard";
    this.searchQuery = "";

    // Data Cache
    this.subjects = [];
    this.users = [];
    this.tickets = [];
    this.bugs = [];
    this.flashcards = [];
    this.notebook = [];

    // Active sub-state for Bug Arena & Flashcards
    this.activeBugId = "bug-01";
    this.activeBugHintLevel = 0; // 0: None, 1, 2, 3
    this.activeFlashcardIndex = 0;

    // DOM Elements Cache
    this.dom = {
      appShell: document.getElementById("appShell"),
      sidebar: document.getElementById("sidebar"),
      sidebarBackdrop: document.getElementById("sidebarBackdrop"),
      mobileMenuBtn: document.getElementById("mobileMenuBtn"),
      roleSelector: document.getElementById("roleSelector"),
      navMenu: document.getElementById("navMenu"),
      topbarSubjectSelect: document.getElementById("topbarSubjectSelect"),
      currentSubjectIcon: document.getElementById("currentSubjectIcon"),
      topbarSearch: document.getElementById("topbarSearch"),
      btnSearchClear: document.getElementById("btnSearchClear"),
      btnSoundToggle: document.getElementById("btnSoundToggle"),
      soundIcon: document.getElementById("soundIcon"),
      userAvatar: document.getElementById("userAvatar"),
      userName: document.getElementById("userName"),
      userRolePill: document.getElementById("userRolePill"),
      userMssv: document.getElementById("userMssv"),
      userClass: document.getElementById("userClass"),
      userXp: document.getElementById("userXp"),
      userStreak: document.getElementById("userStreak"),
      btnEditProfile: document.getElementById("btnEditProfile"),
      workspaceContent: document.getElementById("workspaceContent"),
      // Sidebar Server Card
      serverDot: document.getElementById("serverDot"),
      serverStatusText: document.getElementById("serverStatusText"),
      serverBadge: document.getElementById("serverBadge"),
      serverEndpoint: document.getElementById("serverEndpoint"),
      serverLatency: document.getElementById("serverLatency"),
      btnTestServer: document.getElementById("btnTestServer"),
      btnOpenServerModal: document.getElementById("btnOpenServerModal"),
      // Badges
      badgeTicketsCount: document.getElementById("badgeTicketsCount"),
      badgeBugsCount: document.getElementById("badgeBugsCount"),
      badgeNotebookCount: document.getElementById("badgeNotebookCount"),
      // Modals & Toasts
      modalBackdrop: document.getElementById("modalBackdrop"),
      modalTitle: document.getElementById("modalTitle"),
      modalBody: document.getElementById("modalBody"),
      modalFooter: document.getElementById("modalFooter"),
      modalCloseBtn: document.getElementById("modalCloseBtn"),
      toastContainer: document.getElementById("toastContainer")
    };
  }

  async init() {
    this.bindEvents();
    this.updateSoundIcon();

    // Check virtual server & fetch bootstrap data
    await this.refreshServerStatus();
    await this.loadInitialData();

    // Setup initial role and user
    this.switchRole(this.currentRole, false);

    // Periodic Server Health Check
    setInterval(() => this.refreshServerStatus(false), 20000);
  }

  // ------------------------------------------------------------------------
  // EVENT BINDINGS
  // ------------------------------------------------------------------------
  bindEvents() {
    // Mobile Drawer
    this.dom.mobileMenuBtn.addEventListener("click", () => {
      this.dom.sidebar.classList.toggle("open");
      this.dom.sidebarBackdrop.classList.toggle("show");
    });
    this.dom.sidebarBackdrop.addEventListener("click", () => {
      this.dom.sidebar.classList.remove("open");
      this.dom.sidebarBackdrop.classList.remove("show");
    });

    // Role Switcher
    this.dom.roleSelector.addEventListener("change", (e) => {
      this.switchRole(e.target.value);
    });

    // Nav Menu Click Delegation
    this.dom.navMenu.addEventListener("click", (e) => {
      const navItem = e.target.closest(".nav-item");
      if (!navItem) return;
      const targetView = navItem.dataset.view;
      this.navigateTo(targetView);
      // Close mobile drawer on navigation
      this.dom.sidebar.classList.remove("open");
      this.dom.sidebarBackdrop.classList.remove("show");
    });

    // Subject Selector
    this.dom.topbarSubjectSelect.addEventListener("change", (e) => {
      this.currentSubjectId = e.target.value;
      this.updateSubjectIcon();
      this.sfx.click();
      this.renderCurrentView();
    });

    // Search Input
    this.dom.topbarSearch.addEventListener("input", (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      this.dom.btnSearchClear.style.display = this.searchQuery ? "block" : "none";
      this.renderCurrentView();
    });
    this.dom.btnSearchClear.addEventListener("click", () => {
      this.dom.topbarSearch.value = "";
      this.searchQuery = "";
      this.dom.btnSearchClear.style.display = "none";
      this.renderCurrentView();
    });

    // Sound FX Toggle
    this.dom.btnSoundToggle.addEventListener("click", () => {
      const enabled = this.sfx.toggle();
      this.updateSoundIcon();
      this.showToast(enabled ? "🔊 Đã bật âm thanh hiệu ứng" : "🔇 Đã tắt âm thanh hiệu ứng", "warning");
      if (enabled) this.sfx.click();
    });

    // Edit Profile Modal
    this.dom.btnEditProfile.addEventListener("click", () => {
      this.openEditProfileModal();
    });

    // Server Action Buttons
    this.dom.btnTestServer.addEventListener("click", async () => {
      this.sfx.click();
      this.showToast("Đang kiểm tra kết nối REST API Server...", "warning");
      await this.refreshServerStatus(true);
    });
    this.dom.btnOpenServerModal.addEventListener("click", () => {
      this.openServerConfigModal();
    });

    // Modal Close
    this.dom.modalCloseBtn.addEventListener("click", () => this.closeModal());
    this.dom.modalBackdrop.addEventListener("click", (e) => {
      if (e.target === this.dom.modalBackdrop) this.closeModal();
    });
  }

  updateSoundIcon() {
    this.dom.soundIcon.textContent = this.sfx.enabled ? "🔊" : "🔇";
  }

  // ------------------------------------------------------------------------
  // SERVER STATUS MONITORING
  // ------------------------------------------------------------------------
  async refreshServerStatus(showNotification = false) {
    this.dom.serverEndpoint.textContent = this.api.baseUrl;
    const result = await this.api.checkConnection();

    if (result.online) {
      this.dom.serverDot.className = "status-dot";
      this.dom.serverStatusText.textContent = "json-server Online";
      this.dom.serverBadge.textContent = "ONLINE";
      this.dom.serverBadge.className = "status-badge";
      this.dom.serverLatency.textContent = `${result.latency} ms`;
      if (showNotification) {
        this.showToast(`✓ Đã kết nối json-server (${this.api.baseUrl}) - Độ trễ ${result.latency}ms`, "success");
        this.sfx.success();
      }
    } else {
      this.dom.serverDot.className = "status-dot local-mode";
      this.dom.serverStatusText.textContent = "Local Fallback Mode";
      this.dom.serverBadge.textContent = "LOCAL STORE";
      this.dom.serverBadge.className = "status-badge local";
      this.dom.serverLatency.textContent = "0 ms (Offline Safe)";
      if (showNotification) {
        this.showToast(`ℹ️ Tự động chuyển LocalStorage an toàn (Không cần json-server)`, "warning");
      }
    }
  }

  // ------------------------------------------------------------------------
  // DATA LOADING
  // ------------------------------------------------------------------------
  async loadInitialData() {
    this.subjects = await this.api.get("subjects");
    this.users = await this.api.get("users");
    this.tickets = await this.api.get("stage1_it_tickets");
    this.bugs = await this.api.get("stage2_code_bugs");
    this.flashcards = await this.api.get("flashcards");
    this.notebook = await this.api.get("error_notebook");

    this.populateSubjectDropdown();
    this.updateBadges();
  }

  populateSubjectDropdown() {
    const select = this.dom.topbarSubjectSelect;
    select.innerHTML = "";
    this.subjects.forEach(sub => {
      const opt = document.createElement("option");
      opt.value = sub.id;
      opt.textContent = `${sub.icon} ${sub.code} - ${sub.name}`;
      select.appendChild(opt);
    });

    if (this.subjects.some(s => s.id === this.currentSubjectId)) {
      select.value = this.currentSubjectId;
    } else if (this.subjects.length > 0) {
      this.currentSubjectId = this.subjects[0].id;
      select.value = this.currentSubjectId;
    }
    this.updateSubjectIcon();
  }

  updateSubjectIcon() {
    const curSub = this.subjects.find(s => s.id === this.currentSubjectId);
    if (curSub) {
      this.dom.currentSubjectIcon.textContent = curSub.icon;
    }
  }

  updateBadges() {
    const subTickets = this.tickets.filter(t => t.subjectId === this.currentSubjectId);
    const subBugs = this.bugs.filter(b => b.subjectId === this.currentSubjectId);
    
    this.dom.badgeTicketsCount.textContent = subTickets.length || this.tickets.length;
    this.dom.badgeBugsCount.textContent = subBugs.length || this.bugs.length;
    
    const userErrors = this.notebook.filter(n => this.currentUser && n.userId === this.currentUser.id);
    this.dom.badgeNotebookCount.textContent = userErrors.length;
  }

  // ------------------------------------------------------------------------
  // ROLE SWITCHING & VIEW ROUTING
  // ------------------------------------------------------------------------
  switchRole(newRole, playSound = true) {
    this.currentRole = newRole;
    this.dom.roleSelector.value = newRole;

    // Pick active user according to role
    this.currentUser = this.users.find(u => u.role === newRole) || this.users[0];
    this.updateUserProfileDisplay();

    // Show/Hide sidebar nav groups based on role
    document.querySelectorAll(".nav-group").forEach(group => {
      const groupRole = group.dataset.role;
      group.style.display = (groupRole === newRole) ? "flex" : "none";
    });

    // Default view per role
    if (newRole === "student") {
      this.navigateTo("student-dashboard", false);
    } else if (newRole === "teacher") {
      this.navigateTo("teacher-dashboard", false);
    } else if (newRole === "admin") {
      this.navigateTo("admin-subjects", false);
    }

    if (playSound) {
      this.sfx.click();
      this.showToast(`Đã chuyển vai trò: ${this.getRoleVietnamese(newRole)}`, "success");
    }
  }

  getRoleVietnamese(role) {
    if (role === "student") return "Sinh viên K21";
    if (role === "teacher") return "Giảng viên (Teacher Studio)";
    if (role === "admin") return "Root Administrator";
    return role;
  }

  updateUserProfileDisplay() {
    if (!this.currentUser) return;
    this.dom.userAvatar.textContent = this.currentUser.avatar || "👨‍💻";
    this.dom.userName.textContent = this.currentUser.name;
    this.dom.userMssv.textContent = this.currentUser.mssv;
    this.dom.userClass.textContent = this.currentUser.class;
    this.dom.userXp.textContent = this.currentUser.xp || 0;
    this.dom.userStreak.textContent = this.currentUser.streak || 1;

    let roleName = "Sinh viên";
    if (this.currentUser.role === "teacher") roleName = "Giảng viên";
    if (this.currentUser.role === "admin") roleName = "Admin";
    this.dom.userRolePill.textContent = roleName;
  }

  navigateTo(viewName, playSound = true) {
    this.currentView = viewName;

    // Update active nav item class
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.dataset.view === viewName);
    });

    if (playSound) this.sfx.click();
    this.renderCurrentView();
  }

  // ------------------------------------------------------------------------
  // VIEW RENDERER DISPATCHER
  // ------------------------------------------------------------------------
  renderCurrentView() {
    const container = this.dom.workspaceContent;
    container.innerHTML = "";

    switch (this.currentView) {
      // Student Views
      case "student-dashboard":
        this.renderStudentDashboard(container);
        break;
      case "student-stage1":
        this.renderStudentStage1(container);
        break;
      case "student-stage2":
        this.renderStudentStage2(container);
        break;
      case "student-notebook":
        this.renderStudentNotebook(container);
        break;
      case "student-leaderboard":
        this.renderStudentLeaderboard(container);
        break;

      // Teacher Views
      case "teacher-dashboard":
        this.renderTeacherDashboard(container);
        break;
      case "teacher-crud":
        this.renderTeacherCrud(container);
        break;

      // Admin Views
      case "admin-subjects":
        this.renderAdminSubjects(container);
        break;
      case "admin-users":
        this.renderAdminUsers(container);
        break;
      case "admin-server":
        this.renderAdminServer(container);
        break;

      default:
        container.innerHTML = `<p>Giao diện đang được hoàn thiện...</p>`;
    }
  }

  // ========================================================================
  // 5. PHÂN HỆ 1: GIAO DIỆN SINH VIÊN (STUDENT PORTAL)
  // ========================================================================

  // VIEW: DASHBOARD CÁ NHÂN HÓA
  renderStudentDashboard(container) {
    const curSub = this.subjects.find(s => s.id === this.currentSubjectId) || this.subjects[0];
    const userTickets = this.currentUser.completedTickets || [];
    const userBugs = this.currentUser.completedBugs || [];
    const userErrors = this.notebook.filter(n => n.userId === this.currentUser.id);

    const html = `
      <div class="card-glass student-banner-card">
        <div class="student-banner-left">
          <h2>Xin chào, ${this.currentUser.name}! 🚀</h2>
          <p>MSSV: <strong style="color:var(--neon-cyan)">${this.currentUser.mssv}</strong> | Lớp: <strong>${this.currentUser.class}</strong> | Cấp bậc: <strong style="color:var(--neon-purple)">${this.currentUser.level}</strong></p>
          <p style="margin-top:6px; font-size:0.82rem;">Mục tiêu hôm nay: Chinh phục Ải 1 Helpdesk và xử lý ít nhất 2 ca săn bug C/JS để giữ chuỗi ngày Streak 🔥!</p>
        </div>
        <div class="student-banner-right">
          <div class="metric-box">
            <div class="metric-val">${this.currentUser.xp}</div>
            <div class="metric-lbl">Điểm XP</div>
          </div>
          <div class="metric-box">
            <div class="metric-val">${userTickets.length + userBugs.length}</div>
            <div class="metric-lbl">Đã Giải Quyết</div>
          </div>
          <div class="metric-box">
            <div class="metric-val" style="color:var(--neon-rose);">${userErrors.length}</div>
            <div class="metric-lbl">Lỗi Cần Ôn</div>
          </div>
        </div>
      </div>

      <!-- Bento Grid -->
      <div class="bento-grid">
        
        <!-- Multi-Subject Progress Overview -->
        <div class="col-8">
          <div class="card-glass">
            <div class="card-header-flex">
              <div class="card-title-group">
                <span class="card-title-icon">📚</span>
                <div>
                  <h3 class="card-title">Tiến Độ Theo Môn Học (Multi-Subject Tracker)</h3>
                  <p class="card-subtitle">Bấm vào môn bất kỳ để chuyển nhanh ngữ cảnh học tập</p>
                </div>
              </div>
            </div>

            <div class="subject-progress-grid">
              ${this.subjects.map(sub => {
                const subTickets = this.tickets.filter(t => t.subjectId === sub.id);
                const subBugs = this.bugs.filter(b => b.subjectId === sub.id);
                const totalItems = subTickets.length + subBugs.length;
                const completedItems = subTickets.filter(t => userTickets.includes(t.id)).length +
                                       subBugs.filter(b => userBugs.includes(b.id)).length;
                const percent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
                const isCurrent = sub.id === this.currentSubjectId;

                return `
                  <div class="subject-card ${isCurrent ? 'active' : ''}" style="${isCurrent ? 'border-color:var(--neon-cyan); box-shadow:var(--shadow-neon-cyan);' : ''}" data-sub-id="${sub.id}">
                    <div class="subject-card-top">
                      <span class="subject-card-icon">${sub.icon}</span>
                      <div>
                        <div class="subject-card-title">${sub.name}</div>
                        <div class="subject-card-code">${sub.code} • ${totalItems} Thử thách</div>
                      </div>
                    </div>
                    <div class="progress-bar-bg">
                      <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                    </div>
                    <div class="progress-meta">
                      <span>Hoàn thành: ${completedItems}/${totalItems}</span>
                      <strong style="color:var(--neon-cyan);">${percent}%</strong>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>

        <!-- Sổ tay lỗi sai cá nhân (Widget) -->
        <div class="col-4">
          <div class="card-glass">
            <div class="card-header-flex">
              <div class="card-title-group">
                <span class="card-title-icon">📓</span>
                <div>
                  <h3 class="card-title">Sổ Tay Lỗi Sai Riêng Bạn</h3>
                  <p class="card-subtitle">Tự động ghi nhận bẫy đã vướng phải</p>
                </div>
              </div>
              <button class="btn-cyber btn-secondary" id="btnViewAllErrors" style="font-size:0.75rem; padding:4px 10px;">Xem hết</button>
            </div>

            ${userErrors.length === 0 ? `
              <div style="text-align:center; padding:30px 10px; color:var(--text-dim);">
                <span style="font-size:2rem; display:block; margin-bottom:8px;">🎉</span>
                Tuyệt vời! Bạn chưa có lỗi sai nào chưa khắc phục.
              </div>
            ` : `
              <div class="notebook-list">
                ${userErrors.slice(0, 3).map(err => `
                  <div class="notebook-item">
                    <div class="notebook-info">
                      <div class="notebook-title">${err.itemTitle}</div>
                      <div class="notebook-mistake">❌ Sai lầm: ${err.mistakeMade}</div>
                      <div class="notebook-lesson">💡 Bài học: ${err.coreLesson}</div>
                    </div>
                  </div>
                `).join("")}
              </div>
            `}
          </div>
        </div>

        <!-- Ải 1 & Ải 2 Quick Launch Cards -->
        <div class="col-6">
          <div class="card-glass" style="background: linear-gradient(135deg, rgba(16, 28, 56, 0.8), rgba(8, 38, 54, 0.8));">
            <div class="card-header-flex">
              <div>
                <span style="font-size:0.75rem; font-weight:700; color:var(--neon-cyan); letter-spacing:0.8px;">THỰC CHIẾN ẢI 1</span>
                <h3 class="card-title" style="margin-top:4px;">IT Helpdesk & Phòng Giả lập 4 Cách Cài Win</h3>
                <p class="card-subtitle">Giải quyết 6 ca sự cố thực tế và phòng tương tác chuẩn K21</p>
              </div>
              <button class="btn-cyber btn-primary" id="btnLaunchStage1">Vào Ải 1 ➔</button>
            </div>
            <div style="display:flex; gap:10px; margin-top:14px; font-size:0.78rem; color:var(--text-muted);">
              <span>⚡ Tạo USB Rufus</span>
              <span>•</span>
              <span>⚡ Cứu hộ WinPE & Intel VMD</span>
              <span>•</span>
              <span>⚡ WinRE Notepad Run Setup</span>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div class="card-glass" style="background: linear-gradient(135deg, rgba(28, 16, 48, 0.8), rgba(36, 12, 42, 0.8));">
            <div class="card-header-flex">
              <div>
                <span style="font-size:0.75rem; font-weight:700; color:var(--neon-purple); letter-spacing:0.8px;">THỰC CHIẾN ẢI 2</span>
                <h3 class="card-title" style="margin-top:4px;">Đấu Trường Săn Bug C/JS & Flashcard 3D</h3>
                <p class="card-subtitle">Săn 6 lỗi kinh điển kết hợp AI Mentor gợi mở 3 cấp độ</p>
              </div>
              <button class="btn-cyber btn-primary" id="btnLaunchStage2" style="background:linear-gradient(135deg, var(--neon-purple), #ec4899); box-shadow:var(--shadow-neon-purple);">Vào Ải 2 ➔</button>
            </div>
            <div style="display:flex; gap:10px; margin-top:14px; font-size:0.78rem; color:var(--text-muted);">
              <span>🐛 Bẫy if (a = b)</span>
              <span>•</span>
              <span>🐛 Vòng lặp vô tận</span>
              <span>•</span>
              <span>🐛 AI Scaffolding Level 1-3</span>
            </div>
          </div>
        </div>

      </div>
    `;

    container.innerHTML = html;

    // Attach Dashboard Handlers
    container.querySelectorAll(".subject-card").forEach(card => {
      card.addEventListener("click", () => {
        this.currentSubjectId = card.dataset.subId;
        this.dom.topbarSubjectSelect.value = this.currentSubjectId;
        this.updateSubjectIcon();
        this.sfx.click();
        this.renderCurrentView();
      });
    });

    const btnViewAllErrors = container.querySelector("#btnViewAllErrors");
    if (btnViewAllErrors) {
      btnViewAllErrors.addEventListener("click", () => this.navigateTo("student-notebook"));
    }
    const btnLaunchStage1 = container.querySelector("#btnLaunchStage1");
    if (btnLaunchStage1) {
      btnLaunchStage1.addEventListener("click", () => this.navigateTo("student-stage1"));
    }
    const btnLaunchStage2 = container.querySelector("#btnLaunchStage2");
    if (btnLaunchStage2) {
      btnLaunchStage2.addEventListener("click", () => this.navigateTo("student-stage2"));
    }
  }

  // VIEW: ẢI 1 - IT HELPDESK & PHÒNG GIẢ LẬP 4 CÁCH CÀI WIN
  renderStudentStage1(container) {
    const filterTickets = this.tickets.filter(t => {
      const matchSubject = t.subjectId === this.currentSubjectId || !this.currentSubjectId;
      const matchSearch = !this.searchQuery || 
        t.title.toLowerCase().includes(this.searchQuery) || 
        t.category.toLowerCase().includes(this.searchQuery);
      return matchSubject && matchSearch;
    });

    const userCompleted = this.currentUser.completedTickets || [];

    const html = `
      <div class="card-glass" style="margin-bottom:20px; border-color:var(--neon-cyan);">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">🛠️ ẢI 1: IT HELPDESK & PHÒNG GIẢ LẬP 4 CÁCH CÀI WIN</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Trang bị kỹ năng giải quyết sự cố phần cứng, cứu dữ liệu sống chết và làm chủ 4 phương pháp cài Windows từ cơ bản đến nâng cao.
            </p>
          </div>
        </div>

        <!-- 4 CÁCH CÀI WIN INTERACTIVE SIMULATOR CARDS -->
        <h4 style="font-size:0.88rem; font-weight:700; text-transform:uppercase; color:var(--neon-blue); letter-spacing:0.8px; margin: 16px 0 10px;">
          ⚡ PHÒNG GIẢ LẬP TƯƠNG TÁC 4 CÁCH CÀI WINDOWS
        </h4>
        <div class="install-methods-grid">
          
          <!-- Cách 1: Rufus -->
          <div class="install-method-card" data-sim-method="1" style="--method-color: #00f3ff;">
            <div>
              <div class="method-number">CÁCH 1 • CHUẨN MỰC RUFUS</div>
              <div class="method-name">USB Boot Rufus UEFI-GPT vs Legacy-MBR</div>
              <div class="method-desc">Thực hành chọn chuẩn Boot và phân vùng. Trải nghiệm hệ thống cảnh báo đỏ khi Format nhầm ổ D DATA!</div>
            </div>
            <div class="method-card-footer">
              <span class="method-sim-tag">▶ Mở Giả Lập Rufus</span>
              <button class="btn-cyber btn-primary" style="padding:4px 10px; font-size:0.75rem;">Trải nghiệm</button>
            </div>
          </div>

          <!-- Cách 2: WinPE Data Rescue -->
          <div class="install-method-card" data-sim-method="2" style="--method-color: #10b981;">
            <div>
              <div class="method-number">CÁCH 2 • CỨU HỘ WINPE</div>
              <div class="method-name">WinPE Cứu Dữ Liệu & Nạp Intel VMD RST</div>
              <div class="method-desc">Cứu dữ liệu Desktop ổ C trước khi cài và nạp driver Intel VMD Gen 11-14 để nhận diện ổ SSD NVMe.</div>
            </div>
            <div class="method-card-footer">
              <span class="method-sim-tag">▶ Mở Giả Lập WinPE</span>
              <button class="btn-cyber btn-primary" style="padding:4px 10px; font-size:0.75rem; background:linear-gradient(135deg, #10b981, #059669);">Trải nghiệm</button>
            </div>
          </div>

          <!-- Cách 3: Menu Boot trên ổ cứng -->
          <div class="install-method-card" data-sim-method="3" style="--method-color: #a855f7;">
            <div>
              <div class="method-number">CÁCH 3 • KHÔNG CẦN CẮM USB</div>
              <div class="method-name">Tạo Menu Boot WinPE Trên Ổ Cứng</div>
              <div class="method-desc">Tách 5-10GB trong Disk Management + nạp BCD Boot Manager để trị máy công ty bị khóa mật khẩu BIOS.</div>
            </div>
            <div class="method-card-footer">
              <span class="method-sim-tag">▶ Giả Lập BCD & Chia Ổ</span>
              <button class="btn-cyber btn-primary" style="padding:4px 10px; font-size:0.75rem; background:linear-gradient(135deg, #a855f7, #7c3aed);">Trải nghiệm</button>
            </div>
          </div>

          <!-- Cách 4: WinRE Notepad Setup Trick -->
          <div class="install-method-card" data-sim-method="4" style="--method-color: #f59e0b;">
            <div>
              <div class="method-number">CÁCH 4 • CHIÊU THỨC IT ĐỈNH CAO</div>
              <div class="method-name">Cài Win Bằng WinRE Command & Notepad</div>
              <div class="method-desc">Giải nén ISO sang ổ D/E -> Shift Restart -> WinRE CMD -> Notepad File Save As -> All Files (*.*) -> Chạy setup.exe!</div>
            </div>
            <div class="method-card-footer">
              <span class="method-sim-tag">▶ Giả Lập WinRE Mở File</span>
              <button class="btn-cyber btn-primary" style="padding:4px 10px; font-size:0.75rem; background:linear-gradient(135deg, #f59e0b, #d97706);">Trải nghiệm</button>
            </div>
          </div>

        </div>
      </div>

      <!-- 6 IT HELPDESK TICKETS -->
      <div class="card-header-flex">
        <h3 class="card-title">🚨 6 CA TRỰC SỰ CỐ IT HELPDESK THỰC TẾ (${filterTickets.length} Ca)</h3>
        <span style="font-size:0.8rem; color:var(--text-muted);">Hoàn thành: <strong>${filterTickets.filter(t => userCompleted.includes(t.id)).length}/${filterTickets.length}</strong></span>
      </div>

      <div class="tickets-grid">
        ${filterTickets.map(ticket => {
          const isDone = userCompleted.includes(ticket.id);
          let sevClass = "severity-medium";
          if (ticket.severity === "Critical") sevClass = "severity-critical";
          if (ticket.severity === "High") sevClass = "severity-high";

          return `
            <div class="ticket-card ${isDone ? 'completed' : ''}" data-ticket-id="${ticket.id}">
              <div class="ticket-header">
                <span class="severity-pill ${sevClass}">${ticket.severity}</span>
                <span style="font-size:0.72rem; color:var(--neon-cyan); font-weight:700;">${ticket.category}</span>
              </div>
              <h4 class="ticket-title">${ticket.title}</h4>
              <div class="ticket-report">
                <strong>Mô tả người dùng:</strong> "${ticket.userReport}"
              </div>
              <div class="ticket-symptoms">
                ${ticket.symptoms.map(s => `<div class="symptom-item">${s}</div>`).join("")}
              </div>
              <div class="ticket-footer">
                <span class="ticket-reward">+${ticket.xpReward} XP</span>
                <button class="btn-cyber ${isDone ? 'btn-secondary' : 'btn-primary'} btn-solve-ticket" style="padding:6px 12px; font-size:0.8rem;">
                  ${isDone ? 'Xem Lại Ca Này' : 'Tiếp Nhận Ca Trực ➔'}
                </button>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    container.innerHTML = html;

    // Attach Simulator Modals
    container.querySelectorAll(".install-method-card").forEach(card => {
      card.addEventListener("click", () => {
        const methodNum = card.dataset.simMethod;
        this.openInstallSimulatorModal(methodNum);
      });
    });

    // Attach Ticket Solve Modals
    container.querySelectorAll(".btn-solve-ticket").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".ticket-card");
        const ticketId = card.dataset.ticketId;
        this.openSolveTicketModal(ticketId);
      });
    });
  }

  // MODAL: INTERACTIVE 4 CÁCH CÀI WIN SIMULATORS
  openInstallSimulatorModal(methodNum) {
    this.sfx.click();
    let title = "";
    let bodyHtml = "";

    if (methodNum === "1") {
      title = "🛠️ Giả Lập Cách 1: Tạo USB Boot Rufus (Chuẩn GPT vs MBR & Bẫy Format Ổ D)";
      bodyHtml = `
        <div class="sim-container">
          <p style="font-size:0.82rem; color:var(--text-muted);">
            Thực hành cấu hình phần mềm Rufus. Hãy lưu ý chọn đúng thiết bị USB đích và chuẩn phân vùng phù hợp với máy tính mục tiêu!
          </p>

          <div class="rufus-mockup">
            <div class="rufus-topbar">
              <span class="rufus-logo">⚡</span>
              <span class="rufus-title">Rufus 4.5.2180 (Portable)</span>
            </div>

            <!-- Device Selector (Crucial trap!) -->
            <div class="rufus-field-group">
              <label class="rufus-label">Device (Thiết bị đích sẽ bị FORMAT XÓA SẠCH DỮ LIỆU):</label>
              <select id="rufusDeviceSelect" class="rufus-select">
                <option value="usb-safe">Kingston DataTraveler 3.0 (32 GB) [F:\ USB TRẮNG]</option>
                <option value="hdd-danger">⚠️ Western Digital Red 2TB (D:\ DATA ĐỒ ÁN TỐT NGHIỆP K21) [CỰC KỲ NGUY HIỂM]</option>
              </select>
            </div>

            <div id="rufusWarningData" class="rufus-warning-box">
              🚨 <strong>CẢNH BÁO NGUY HIỂM:</strong> Bạn vừa chọn ổ D: DATA chứa đồ án tốt nghiệp! Nếu bấm START, toàn bộ dữ liệu 500GB sẽ bốc hơi vĩnh viễn!
            </div>

            <div class="rufus-field-group">
              <label class="rufus-label">Boot selection (Bộ cài):</label>
              <div style="display:flex; gap:8px;">
                <input type="text" class="rufus-input" value="Win11_23H2_Vietnamese_x64.iso" readonly style="flex:1;">
                <button class="btn-cyber btn-secondary" style="padding:4px 8px; font-size:0.75rem;">SELECT</button>
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
              <div class="rufus-field-group">
                <label class="rufus-label">Partition scheme (Định dạng phân vùng):</label>
                <select id="rufusPartitionSelect" class="rufus-select">
                  <option value="GPT">GPT (Chuẩn hiện đại cho máy UEFI)</option>
                  <option value="MBR">MBR (Chuẩn cũ cho máy Legacy BIOS)</option>
                </select>
              </div>
              <div class="rufus-field-group">
                <label class="rufus-label">Target system (Hệ thống mục tiêu):</label>
                <input type="text" id="rufusTargetSystem" class="rufus-input" value="UEFI (non CSM)" readonly>
              </div>
            </div>

            <div class="rufus-field-group" style="margin-top:10px;">
              <div class="progress-bar-bg" id="rufusProgressWrap" style="display:none; height:12px;">
                <div class="progress-bar-fill" id="rufusProgressBar" style="width:0%;"></div>
              </div>
              <div id="rufusStatusLog" style="font-size:0.72rem; color:var(--neon-cyan); margin-top:4px; font-family:var(--font-mono);">Sẵn sàng (Ready)</div>
            </div>
          </div>
        </div>
      `;

      this.showModal(title, bodyHtml, [
        {
          text: "Bắt đầu ghi USB (START)",
          class: "btn-primary",
          id: "btnStartRufus",
          onClick: () => this.handleRufusStart()
        }
      ]);

      // Handle Device select change
      const devSelect = document.getElementById("rufusDeviceSelect");
      const warnBox = document.getElementById("rufusWarningData");
      devSelect.addEventListener("change", () => {
        if (devSelect.value === "hdd-danger") {
          warnBox.style.display = "block";
          this.sfx.error();
        } else {
          warnBox.style.display = "none";
          this.sfx.click();
        }
      });

    } else if (methodNum === "2") {
      title = "🛠️ Giả Lập Cách 2: Tạo USB Cứu Hộ WinPE & Tích Hợp Intel VMD IRST";
      bodyHtml = `
        <div class="sim-container">
          <p style="font-size:0.82rem; color:var(--text-muted);">
            Hai kỹ năng sống còn của Kỹ thuật viên IT: Cứu file Desktop/Documents trước khi cài Win và nạp driver Intel VMD Controller thế hệ 11-14.
          </p>

          <div class="card-glass" style="background:#0c1424; padding:16px;">
            <h4 style="font-size:0.9rem; color:var(--neon-emerald); margin-bottom:10px;">BƯỚC 1: TRÍCH XUẤT DỮ LIỆU KHẨN CẤP KHỎI PHÂN VÙNG C:</h4>
            <div style="font-size:0.78rem; color:#cbd5e1; display:flex; flex-direction:column; gap:8px;">
              <label><input type="checkbox" id="chkDesktop" checked> C:\\Users\\SinhVienK21\\Desktop (File Word luận văn, Slide báo cáo) [8.5 GB]</label>
              <label><input type="checkbox" id="chkDocs" checked> C:\\Users\\SinhVienK21\\Documents (Database đồ án K21) [2.1 GB]</label>
              <label><input type="checkbox" id="chkDownloads"> C:\\Users\\SinhVienK21\\Downloads (File cài đặt game nặng) [65 GB - Có thể bỏ qua]</label>
            </div>
            <div style="margin-top:10px;">
              <button class="btn-cyber btn-success" id="btnRunRescueData" style="font-size:0.75rem;">Sao lưu sang ổ cứng ngoài E:\\Backup_K21</button>
              <span id="rescueStatus" style="font-size:0.75rem; margin-left:10px; color:var(--neon-cyan);"></span>
            </div>
          </div>

          <div class="card-glass" style="background:#0c1424; padding:16px; margin-top:10px;">
            <h4 style="font-size:0.9rem; color:var(--neon-cyan); margin-bottom:10px;">BƯỚC 2: TÍCH HỢP DRIVER INTEL VMD GEN 11-14 VÀO BỘ CÀI:</h4>
            <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:10px;">
              Nếu không tích hợp hoặc không chọn Load Driver, trình cài đặt Windows 10/11 sẽ không nhìn thấy bất kỳ ổ cứng NVMe nào!
            </p>
            <div style="display:flex; align-items:center; gap:10px;">
              <span style="font-size:1.4rem;">📁</span>
              <div style="flex:1; font-family:var(--font-mono); font-size:0.75rem; background:#070a12; padding:8px 12px; border-radius:4px; border:1px solid #334155;">
                D:\\Drivers\\Intel_RST_VMD_v19.5\\<strong>iaStorVD.inf</strong> (Intel RST VMD Controller)
              </div>
              <button class="btn-cyber btn-primary" id="btnInjectVmd" style="font-size:0.75rem;">Nạp Driver</button>
            </div>
            <div id="vmdStatus" style="font-size:0.75rem; margin-top:8px; color:var(--neon-emerald); font-weight:700;"></div>
          </div>
        </div>
      `;

      this.showModal(title, bodyHtml, [
        {
          text: "Đã hiểu nguyên lý",
          class: "btn-secondary",
          onClick: () => this.closeModal()
        }
      ]);

      const btnRescue = document.getElementById("btnRunRescueData");
      const rescueStatus = document.getElementById("rescueStatus");
      btnRescue.addEventListener("click", () => {
        btnRescue.disabled = true;
        rescueStatus.textContent = "⏳ Đang trích xuất dữ liệu Desktop & Documents...";
        this.sfx.click();
        setTimeout(() => {
          rescueStatus.textContent = "✓ 10.6 GB dữ liệu đã được sao lưu an toàn sang E:\\Backup_K21!";
          this.sfx.success();
          this.awardXp(15, "Cứu dữ liệu Desktop trước khi cài Win!");
        }, 1200);
      });

      const btnVmd = document.getElementById("btnInjectVmd");
      const vmdStatus = document.getElementById("vmdStatus");
      btnVmd.addEventListener("click", () => {
        btnVmd.disabled = true;
        this.sfx.click();
        vmdStatus.textContent = "✓ Đã nạp thành công iaStorVD.sys! Trình cài đặt Windows lập tức nhận diện ổ NVMe SSD Micron 512GB!";
        this.sfx.success();
        this.awardXp(20, "Nạp driver Intel VMD giải quyết lỗi không thấy ổ cứng NVMe!");
      });

    } else if (methodNum === "3") {
      title = "🛠️ Giả Lập Cách 3: Tạo Menu Boot WinPE Trên Ổ Cứng (Trị Máy Khóa BIOS)";
      bodyHtml = `
        <div class="sim-container">
          <p style="font-size:0.82rem; color:var(--text-muted);">
            Trường hợp máy cơ quan khóa mật khẩu BIOS, cấm cắm USB lạ: Ta chia 5-10GB ngay trên ổ cứng và nạp BCD Boot Manager để khởi động thẳng vào WinPE!
          </p>

          <div class="card-glass" style="background:#090e1c; padding:16px;">
            <h4 style="font-size:0.88rem; color:#fff; margin-bottom:8px;">1. Mô phỏng Disk Management (Chia tách phân vùng):</h4>
            <div style="display:flex; height:32px; border-radius:6px; overflow:hidden; border:1px solid #334155; margin-bottom:10px;">
              <div style="width:50%; background:#1e40af; display:flex; align-items:center; justify-content:center; font-size:0.75rem; color:#fff; font-weight:600;">
                Ổ C: (Windows 10) - 200 GB
              </div>
              <div id="pePartitionBar" style="width:10%; background:#10b981; display:flex; align-items:center; justify-content:center; font-size:0.72rem; color:#fff; font-weight:700;">
                PE: 8GB
              </div>
              <div style="flex:1; background:#374151; display:flex; align-items:center; justify-content:center; font-size:0.75rem; color:#cbd5e1;">
                Ổ D: (DATA) - 292 GB
              </div>
            </div>
            <div style="font-size:0.75rem; color:var(--text-muted);">
              Đã thu nhỏ (Shrink) phân vùng D:\\ 8GB và tạo phân vùng FAT32 tên <strong>WINPE_BOOT</strong>.
            </div>
          </div>

          <div class="card-glass" style="background:#090e1c; padding:16px; margin-top:10px;">
            <h4 style="font-size:0.88rem; color:var(--neon-purple); margin-bottom:8px;">2. Nạp file boot WIM vào Windows Boot Manager BCD:</h4>
            <div style="font-family:var(--font-mono); font-size:0.78rem; background:#05070e; padding:10px 14px; border-radius:4px; border:1px solid #334155; color:#a7f3d0; line-height:1.5;">
              > bcdedit /create {ramdiskoptions} /d "Ramdisk Options"<br>
              > bcdedit /create /d "WinPE K21 Rescue Environment" /application osloader<br>
              > bcdedit /set {default} bootstatuspolicy ignoreallfailures
            </div>
            <div style="margin-top:12px; display:flex; align-items:center; gap:12px;">
              <button class="btn-cyber btn-primary" id="btnInjectBcd">Thực thi lệnh BCD</button>
              <span id="bcdResult" style="font-size:0.75rem; color:var(--neon-emerald); font-weight:700;"></span>
            </div>
          </div>
        </div>
      `;

      this.showModal(title, bodyHtml, [
        {
          text: "Đóng",
          class: "btn-secondary",
          onClick: () => this.closeModal()
        }
      ]);

      const btnInject = document.getElementById("btnInjectBcd");
      const bcdResult = document.getElementById("bcdResult");
      btnInject.addEventListener("click", () => {
        btnInject.disabled = true;
        this.sfx.click();
        bcdResult.textContent = "✓ Đã nạp thành công 'WinPE K21 Rescue' vào Menu Khởi động Windows Boot Manager!";
        this.sfx.success();
        this.awardXp(25, "Kỹ thuật nạp Menu Boot WinPE trực tiếp trên ổ cứng trị máy khóa BIOS!");
      });

    } else if (methodNum === "4") {
      title = "🛠️ Giả Lập Cách 4: Chiêu Thức WinRE Command Prompt + Notepad Save As All Files";
      bodyHtml = `
        <div class="sim-container">
          <p style="font-size:0.82rem; color:var(--text-muted);">
            Thủ thuật huyền thoại của Dân IT khi không có USB: Giải nén ISO sang ổ D -> Giữ Shift Restart vào WinRE -> Gõ notepad -> File > Save As -> All Files (*.*) -> Chuột phải setup.exe chọn Run as admin!
          </p>

          <div class="winre-screen">
            <div class="winre-cmd-header">
              <span>Administrator: X:\\windows\\system32\\cmd.exe (WinRE Recovery)</span>
              <span>✕</span>
            </div>

            <div class="winre-cmd-body">
              <div>Microsoft Windows [Version 10.0.19045.2965]</div>
              <div>(c) Microsoft Corporation. All rights reserved.</div>
              <div style="margin:8px 0; color:#38bdf8;">HÃY GÕ LỆNH: <strong>notepad</strong> ĐỂ MỞ CỬA SỔ PHỤC HỒI</div>

              <div class="cmd-prompt-line">
                <span class="cmd-prefix">X:\\sources></span>
                <input type="text" id="winreCmdInput" class="cmd-input" placeholder="gõ notepad rồi nhấn Enter..." autofocus>
              </div>
            </div>

            <!-- Notepad Floating Window (Initially hidden) -->
            <div class="notepad-window" id="simNotepadWindow" style="display:none;">
              <div class="notepad-titlebar">
                <span>Untitled - Notepad</span>
                <span>✕</span>
              </div>
              <div class="notepad-menubar">
                <span class="notepad-menu-item" id="notepadFileMenu">File</span>
                <span class="notepad-menu-item">Edit</span>
                <span class="notepad-menu-item">Format</span>
                <span class="notepad-menu-item">View</span>
                <span class="notepad-menu-item">Help</span>
              </div>

              <!-- Notepad File Dialog Mockup -->
              <div class="notepad-dialog" id="simNotepadDialog" style="display:none;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem;">
                  <span>Look in: <strong>D:\\Win11_Setup_Extracted</strong></span>
                </div>

                <div class="file-list-view" id="simFileList">
                  <div class="file-row">📁 boot</div>
                  <div class="file-row">📁 efi</div>
                  <div class="file-row">📁 sources</div>
                  <div class="file-row setup-exe" id="fileSetupExe" style="display:none;">
                    <span>⚙️</span>
                    <strong>setup.exe (Trình cài đặt Windows 11)</strong>
                  </div>
                  <div class="file-row" id="txtPlaceholder" style="color:#64748b;">(Không có file .txt nào trong thư mục)</div>
                </div>

                <div style="display:flex; align-items:center; justify-content:space-between;">
                  <span style="font-size:0.72rem; color:var(--text-muted);">Save as type:</span>
                  <select id="simSaveAsType" style="padding:4px 8px; background:#1e293b; color:#fff; border:1px solid #475569; font-size:0.75rem; border-radius:4px;">
                    <option value="txt">Text Documents (*.txt)</option>
                    <option value="all">All Files (*.*)</option>
                  </select>
                </div>

                <div id="simActionPrompt" style="font-size:0.75rem; color:var(--neon-rose);">
                  ⚠️ Đang chọn Text Documents (*.txt) nên không thấy file setup.exe! Hãy đổi sang All Files (*.*)!
                </div>
              </div>

            </div>

          </div>
        </div>
      `;

      this.showModal(title, bodyHtml, [
        {
          text: "Đóng",
          class: "btn-secondary",
          onClick: () => this.closeModal()
        }
      ]);

      const cmdInput = document.getElementById("winreCmdInput");
      const notepadWin = document.getElementById("simNotepadWindow");
      const notepadFileMenu = document.getElementById("notepadFileMenu");
      const notepadDialog = document.getElementById("simNotepadDialog");
      const saveAsType = document.getElementById("simSaveAsType");
      const fileSetupExe = document.getElementById("fileSetupExe");
      const txtPlaceholder = document.getElementById("txtPlaceholder");
      const actionPrompt = document.getElementById("simActionPrompt");

      cmdInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          const val = cmdInput.value.trim().toLowerCase();
          if (val === "notepad") {
            cmdInput.disabled = true;
            notepadWin.style.display = "flex";
            this.sfx.success();
            this.showToast("Đã mở Notepad! Giờ hãy bấm menu File > Save As...", "warning");
          } else {
            this.sfx.error();
            this.showToast("Sai lệnh! Hãy gõ chính xác: notepad", "error");
          }
        }
      });

      notepadFileMenu.addEventListener("click", () => {
        notepadDialog.style.display = "flex";
        notepadFileMenu.classList.add("active");
        this.sfx.click();
      });

      saveAsType.addEventListener("change", () => {
        if (saveAsType.value === "all") {
          fileSetupExe.style.display = "flex";
          txtPlaceholder.style.display = "none";
          actionPrompt.style.color = "var(--neon-emerald)";
          actionPrompt.innerHTML = "✓ Tuyệt vời! File <strong>setup.exe</strong> đã hiện ra! Hãy bấm vào file để bắt đầu cài đặt!";
          this.sfx.success();
        } else {
          fileSetupExe.style.display = "none";
          txtPlaceholder.style.display = "block";
          actionPrompt.style.color = "var(--neon-rose)";
          actionPrompt.textContent = "⚠️ Đang chọn Text Documents (*.txt) nên không thấy file setup.exe! Hãy đổi sang All Files (*.*)!";
        }
      });

      fileSetupExe.addEventListener("click", () => {
        this.sfx.success();
        this.awardXp(30, "Thực hiện thành công chiêu thức WinRE Notepad Run Setup.exe!");
        this.showToast("🎉 CHÚC MỪNG! Trình cài đặt Windows đã khởi động thành công qua WinRE!", "success");
        setTimeout(() => this.closeModal(), 1500);
      });
    }
  }

  handleRufusStart() {
    const devSelect = document.getElementById("rufusDeviceSelect");
    const partSelect = document.getElementById("rufusPartitionSelect");
    const progressWrap = document.getElementById("rufusProgressWrap");
    const progressBar = document.getElementById("rufusProgressBar");
    const statusLog = document.getElementById("rufusStatusLog");
    const btnStart = document.getElementById("btnStartRufus");

    if (devSelect.value === "hdd-danger") {
      this.sfx.error();
      this.logMistakeToNotebook(
        "Cách 1: Tạo USB Cài Win bằng Rufus",
        "Chọn nhầm ổ D:\\ DATA Đồ Án Tốt Nghiệp K21 để Format thay vì USB 32GB",
        "Luôn kiểm tra kỹ dung lượng và ký tự ổ đĩa (Drive Letter) trong Rufus trước khi bấm START. Nhầm ổ DATA sẽ làm mất dữ liệu vĩnh viễn!"
      );
      this.showToast("❌ BẠN ĐÃ LÀM BAY MÀU Ổ D DATA! Lỗi nghiêm trọng này đã được lưu vào Sổ tay!", "error");
      return;
    }

    // Success flow
    btnStart.disabled = true;
    progressWrap.style.display = "block";
    statusLog.textContent = `Đang phân vùng USB theo chuẩn ${partSelect.value} (UEFI)...`;
    this.sfx.click();

    let p = 0;
    const interval = setInterval(() => {
      p += 25;
      progressBar.style.width = `${p}%`;
      if (p === 50) statusLog.textContent = "Đang sao chép file Win11_23H2 ISO...";
      if (p === 100) {
        clearInterval(interval);
        statusLog.textContent = "✓ Hoàn tất! USB Boot chuẩn UEFI-GPT đã sẵn sàng!";
        this.sfx.success();
        this.awardXp(25, `Tạo USB cài Win chuẩn ${partSelect.value} an toàn!`);
        setTimeout(() => this.closeModal(), 1500);
      }
    }, 300);
  }

  // MODAL: SOLVE IT HELPDESK TICKET
  openSolveTicketModal(ticketId) {
    const ticket = this.tickets.find(t => t.id === ticketId);
    if (!ticket) return;

    this.sfx.click();
    const isCompleted = (this.currentUser.completedTickets || []).includes(ticketId);

    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:14px;">
        <div style="background:rgba(10,16,32,0.8); border:1px solid var(--border-glass); border-radius:8px; padding:14px;">
          <div style="font-size:0.75rem; color:var(--neon-cyan); font-weight:700;">BÁO CÁO TỪ NGƯỜI DÙNG:</div>
          <div style="font-size:0.88rem; color:#fff; margin-top:4px;">"${ticket.userReport}"</div>
        </div>

        <div>
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:6px;">CÁC TRIỆU CHỨNG GHI NHẬN ĐƯỢC:</div>
          <div style="display:flex; flex-direction:column; gap:4px;">
            ${ticket.symptoms.map(s => `<div style="font-size:0.8rem; color:#cbd5e1;">• ${s}</div>`).join("")}
          </div>
        </div>

        <div>
          <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:6px;">QUY TRÌNH CHẨN ĐOÁN TIÊU CHUẨN:</div>
          <div style="display:flex; flex-direction:column; gap:4px;">
            ${ticket.diagnosticSteps.map((step, idx) => `
              <div style="font-size:0.78rem; color:var(--neon-blue); font-family:var(--font-mono);">
                ${idx + 1}. ${step}
              </div>
            `).join("")}
          </div>
        </div>

        <div>
          <div style="font-size:0.78rem; font-weight:700; color:#fff; margin-bottom:8px;">HÃY CHỌN HƯỚNG XỬ LÝ CHÍNH XÁC NHẤT:</div>
          <div style="display:flex; flex-direction:column; gap:8px;" id="ticketOptionsWrap">
            ${ticket.options.map((opt, idx) => `
              <button class="btn-cyber btn-secondary opt-btn" data-opt-idx="${idx}" style="text-align:left; justify-content:flex-start; font-size:0.82rem; padding:10px 14px; line-height:1.4;">
                <span style="font-weight:700; margin-right:6px;">${String.fromCharCode(65 + idx)}.</span> ${opt}
              </button>
            `).join("")}
          </div>
        </div>

        <div id="ticketResultBox" style="display:none; padding:12px; border-radius:6px; font-size:0.82rem; line-height:1.5;"></div>
      </div>
    `;

    this.showModal(`🚨 Ca Trực: ${ticket.title}`, bodyHtml, [
      {
        text: isCompleted ? "Đã Giải Quyết Xong" : "Đóng",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      }
    ]);

    // Attach option click handlers
    const optionsWrap = document.getElementById("ticketOptionsWrap");
    const resultBox = document.getElementById("ticketResultBox");

    optionsWrap.querySelectorAll(".opt-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.dataset.optIdx, 10);
        const isCorrect = selectedIdx === ticket.correctActionIndex;

        if (isCorrect) {
          this.sfx.success();
          resultBox.style.display = "block";
          resultBox.style.background = "rgba(16, 185, 129, 0.15)";
          resultBox.style.border = "1px solid var(--neon-emerald)";
          resultBox.style.color = "#a7f3d0";
          resultBox.innerHTML = `<strong>✓ CHÍNH XÁC TUYỆT ĐỐI!</strong><br>${ticket.explanation}`;

          if (!this.currentUser.completedTickets.includes(ticket.id)) {
            this.currentUser.completedTickets.push(ticket.id);
            this.awardXp(ticket.xpReward, `Giải quyết thành công ca trực ${ticket.title}`);
            this.api.put("users", this.currentUser.id, this.currentUser);
            this.updateBadges();
          }
        } else {
          this.sfx.error();
          resultBox.style.display = "block";
          resultBox.style.background = "rgba(244, 63, 94, 0.15)";
          resultBox.style.border = "1px solid var(--neon-rose)";
          resultBox.style.color = "#fecdd3";
          resultBox.innerHTML = `<strong>❌ XỬ LÝ CHƯA ĐÚNG!</strong> Hãy đọc kỹ triệu chứng và thử lại. Phương án bạn vừa chọn có thể làm hỏng máy hoặc mất dữ liệu.`;

          // Log mistake into personalized notebook
          this.logMistakeToNotebook(
            ticket.title,
            ticket.options[selectedIdx],
            ticket.explanation
          );
        }
      });
    });
  }

  // ========================================================================
  // 6. PHÂN HỆ 1 (TIẾP): ẢI 2 SĂN BUG CODE & FLASHCARD 3D & AI MENTOR
  // ========================================================================
  renderStudentStage2(container) {
    const filterBugs = this.bugs.filter(b => {
      const matchSubject = b.subjectId === this.currentSubjectId || !this.currentSubjectId;
      const matchSearch = !this.searchQuery || b.title.toLowerCase().includes(this.searchQuery);
      return matchSubject && matchSearch;
    });

    const activeBug = this.bugs.find(b => b.id === this.activeBugId) || filterBugs[0] || this.bugs[0];
    const isCompleted = (this.currentUser.completedBugs || []).includes(activeBug.id);

    // Code lines with numbering
    const codeLines = activeBug.code.split("\n");

    const html = `
      <div class="card-glass" style="margin-bottom:20px; border-color:var(--neon-purple);">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">🐛 ẢI 2: ĐẤU TRƯỜNG SĂN BUG CODE C/JS & FLASHCARD 3D</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Nhận diện các lỗi kinh điển: Gán biến trong if, vòng lặp vô tận, tràn mảng, ép kiểu chia số nguyên, quên .value DOM và ưu tiên &&/||.
            </p>
          </div>
        </div>

        <!-- Bug Challenge Selector Tabs -->
        <div style="display:flex; gap:8px; overflow-x:auto; padding-bottom:8px; margin-top:12px;">
          ${filterBugs.map((bug, idx) => {
            const isSel = bug.id === activeBug.id;
            const isDone = (this.currentUser.completedBugs || []).includes(bug.id);
            return `
              <button class="btn-cyber ${isSel ? 'btn-primary' : 'btn-secondary'} btn-bug-tab" data-bug-id="${bug.id}" style="${isSel ? 'background:linear-gradient(135deg, var(--neon-purple), #9333ea);' : ''} white-space:nowrap; font-size:0.75rem;">
                ${isDone ? '✓ ' : ''}Bài ${idx + 1}: ${bug.category}
              </button>
            `;
          }).join("")}
        </div>
      </div>

      <!-- MAIN ARENA: CODE EDITOR & SCAFFOLDING AI MENTOR -->
      <div class="code-arena-container">
        
        <!-- Code Editor Window -->
        <div class="code-editor-card">
          <div class="editor-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="editor-lang-badge">${activeBug.language.toUpperCase()}</span>
              <span style="font-size:0.85rem; font-weight:700; color:#fff;">${activeBug.title}</span>
            </div>
            <span style="font-size:0.75rem; color:var(--neon-purple); font-weight:700;">+${activeBug.xpReward} XP</span>
          </div>

          <div class="editor-window">
            <div class="editor-line-numbers">
              ${codeLines.map((_, i) => `<div>${i + 1}</div>`).join("")}
            </div>
            <div class="editor-code-lines" id="editorCodeLines">
              ${codeLines.map((line, i) => {
                const lineNum = i + 1;
                const isErrorLine = (this.activeBugHintLevel >= 1 && lineNum === activeBug.bugLineNumber);
                return `
                  <div class="code-line ${isErrorLine ? 'line-error-highlight' : ''}" data-line="${lineNum}">
                    ${this.escapeHtml(line)}
                  </div>
                `;
              }).join("")}
            </div>
          </div>

          <!-- Code Testing & Fix Action Box -->
          <div style="padding:16px; background:#0f172a; border-top:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:10px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <span style="font-size:0.78rem; font-weight:700; color:#fff;">Nhập dòng code đã sửa hoặc đoạn code đúng:</span>
              <span style="font-size:0.72rem; color:var(--text-muted);">Gợi ý cú pháp: <code>${activeBug.expectedFixedSnippet.slice(0, 5)}...</code></span>
            </div>
            <div style="display:flex; gap:10px;">
              <input type="text" id="inputBugFix" class="form-input" placeholder="Ví dụ sửa dòng lỗi..." style="font-family:var(--font-mono); font-size:0.82rem;">
              <button class="btn-cyber btn-primary" id="btnSubmitBugFix" style="background:linear-gradient(135deg, var(--neon-purple), #9333ea);">
                Chạy Thử / Săn Bug
              </button>
            </div>
            <div id="bugFixFeedback" style="display:none; font-size:0.8rem; padding:8px 12px; border-radius:4px;"></div>
          </div>
        </div>

        <!-- AI SCAFFOLDING MENTOR (3 TIERS) -->
        <div class="ai-mentor-card">
          <div class="ai-mentor-header">
            <div class="ai-avatar">🤖</div>
            <div class="ai-title-wrap">
              <h4>AI Mentor Gợi Mở (Scaffolding AI)</h4>
              <span>Học tập chủ động • Không giải hộ 100%</span>
            </div>
          </div>

          <!-- Tier 1 -->
          <div class="hint-tier-box ${this.activeBugHintLevel >= 1 ? 'unlocked' : 'locked'}">
            <div class="hint-tier-top">
              <span class="hint-level-badge" style="color:var(--neon-cyan);">CẤP 1: KHOANH VÙNG VỊ TRÍ LỖI</span>
              <span class="hint-cost-pill" style="background:rgba(56, 189, 248, 0.15); color:var(--neon-blue);">0 XP (Miễn phí)</span>
            </div>
            ${this.activeBugHintLevel >= 1 ? `
              <div class="hint-content">
                🔍 <strong>Tô đỏ dòng ${activeBug.bugLineNumber}:</strong> ${activeBug.hint1}
              </div>
            ` : `
              <button class="btn-cyber btn-secondary btn-unlock-hint" data-tier="1" style="font-size:0.72rem; padding:4px 8px; margin-top:4px;">
                Mở Gợi Ý Cấp 1 (Tô đỏ dòng lỗi)
              </button>
            `}
          </div>

          <!-- Tier 2 -->
          <div class="hint-tier-box ${this.activeBugHintLevel >= 2 ? 'unlocked' : 'locked'}">
            <div class="hint-tier-top">
              <span class="hint-level-badge" style="color:var(--neon-purple);">CẤP 2: NGUYÊN LÝ CNTT GỐC RỄ</span>
              <span class="hint-cost-pill">-5 XP</span>
            </div>
            ${this.activeBugHintLevel >= 2 ? `
              <div class="hint-content">
                💡 <strong>Nguyên lý:</strong> ${activeBug.hint2}
              </div>
            ` : `
              <button class="btn-cyber btn-secondary btn-unlock-hint" data-tier="2" style="font-size:0.72rem; padding:4px 8px; margin-top:4px;">
                Mở Gợi Ý Cấp 2 (-5 XP)
              </button>
            `}
          </div>

          <!-- Tier 3 -->
          <div class="hint-tier-box ${this.activeBugHintLevel >= 3 ? 'unlocked' : 'locked'}">
            <div class="hint-tier-top">
              <span class="hint-level-badge" style="color:var(--neon-rose);">CẤP 3: HƯỚNG DẪN SỬA TỪNG BƯỚC</span>
              <span class="hint-cost-pill">-10 XP</span>
            </div>
            ${this.activeBugHintLevel >= 3 ? `
              <div class="hint-content">
                🛠️ <strong>Cách sửa:</strong> ${activeBug.hint3}
              </div>
            ` : `
              <button class="btn-cyber btn-secondary btn-unlock-hint" data-tier="3" style="font-size:0.72rem; padding:4px 8px; margin-top:4px;">
                Mở Gợi Ý Cấp 3 (-10 XP)
              </button>
            `}
          </div>

          <div style="font-size:0.72rem; color:var(--text-dim); text-align:center;">
            AI Scaffolding hỗ trợ bạn tư duy độc lập trước khi tiết lộ giải pháp hoàn chỉnh.
          </div>
        </div>

      </div>

      <!-- 3D FLIP FLASHCARDS ARENA -->
      <div class="card-glass" style="margin-top:24px;">
        <div class="card-header-flex">
          <div class="card-title-group">
            <span class="card-title-icon">🃏</span>
            <div>
              <h3 class="card-title">Thẻ Ghi Nhớ Flashcard 3D (Lật Thẻ Ôn Tập Nhanh)</h3>
              <p class="card-subtitle">Bấm vào thẻ để lật mặt sau xem đáp án chuẩn</p>
            </div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn-cyber btn-secondary" id="btnPrevFc">◀ Trước</button>
            <button class="btn-cyber btn-secondary" id="btnNextFc">Tiếp ▶</button>
          </div>
        </div>

        <div class="flashcard-arena">
          ${this.renderFlashcardComponent()}
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach Bug Tab switching
    container.querySelectorAll(".btn-bug-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        this.activeBugId = tab.dataset.bugId;
        this.activeBugHintLevel = 0; // Reset hint level for new bug
        this.sfx.click();
        this.renderCurrentView();
      });
    });

    // Attach Scaffolding Hint Unlocks
    container.querySelectorAll(".btn-unlock-hint").forEach(btn => {
      btn.addEventListener("click", () => {
        const tier = parseInt(btn.dataset.tier, 10);
        if (tier === 1) {
          this.activeBugHintLevel = 1;
          this.sfx.hint();
          this.showToast("Đã tô đỏ dòng chứa lỗi trong khung soạn thảo!", "warning");
          this.renderCurrentView();
        } else if (tier === 2) {
          if (this.currentUser.xp < 5) {
            this.showToast("Không đủ XP để mở gợi ý Cấp 2!", "error");
            return;
          }
          this.currentUser.xp -= 5;
          this.activeBugHintLevel = 2;
          this.sfx.hint();
          this.updateUserProfileDisplay();
          this.showToast("Đã mở Gợi ý Cấp 2 (-5 XP)!", "warning");
          this.renderCurrentView();
        } else if (tier === 3) {
          if (this.currentUser.xp < 10) {
            this.showToast("Không đủ XP để mở gợi ý Cấp 3!", "error");
            return;
          }
          this.currentUser.xp -= 10;
          this.activeBugHintLevel = 3;
          this.sfx.hint();
          this.updateUserProfileDisplay();
          this.showToast("Đã mở Gợi ý Cấp 3 (-10 XP)!", "warning");
          this.renderCurrentView();
        }
      });
    });

    // Attach Bug Fix Submit
    const btnSubmit = container.querySelector("#btnSubmitBugFix");
    const inputFix = container.querySelector("#inputBugFix");
    const feedback = container.querySelector("#bugFixFeedback");

    btnSubmit.addEventListener("click", () => {
      const userCode = inputFix.value.trim();
      if (!userCode) {
        this.showToast("Vui lòng nhập đoạn code bạn muốn sửa!", "warning");
        return;
      }

      // Check if user's input contains expected fix snippet
      const isCorrect = userCode.includes(activeBug.expectedFixedSnippet) ||
                        userCode.replace(/\s+/g, "").includes(activeBug.expectedFixedSnippet.replace(/\s+/g, ""));

      if (isCorrect) {
        this.sfx.success();
        feedback.style.display = "block";
        feedback.style.background = "rgba(16, 185, 129, 0.2)";
        feedback.style.color = "#a7f3d0";
        feedback.style.border = "1px solid var(--neon-emerald)";
        feedback.innerHTML = `<strong>✓ SĂN BUG THÀNH CÔNG!</strong> ${activeBug.explanation}`;

        if (!this.currentUser.completedBugs.includes(activeBug.id)) {
          this.currentUser.completedBugs.push(activeBug.id);
          this.awardXp(activeBug.xpReward, `Khắc phục thành công ${activeBug.title}`);
          this.api.put("users", this.currentUser.id, this.currentUser);
          this.updateBadges();
        }
      } else {
        this.sfx.error();
        feedback.style.display = "block";
        feedback.style.background = "rgba(244, 63, 94, 0.2)";
        feedback.style.color = "#fecdd3";
        feedback.style.border = "1px solid var(--neon-rose)";
        feedback.innerHTML = `<strong>❌ CODE VẪN CÒN LỖI!</strong> Hãy đọc kỹ gợi ý từ AI Mentor hoặc xem lại thứ tự ưu tiên của toán tử.`;

        // Log into Error Notebook
        this.logMistakeToNotebook(
          activeBug.title,
          `Đã nhập: "${userCode}"`,
          activeBug.explanation
        );
      }
    });

    // Attach Flashcard Controls
    const fcInner = container.querySelector("#flashcardInner");
    if (fcInner) {
      fcInner.addEventListener("click", () => {
        fcInner.classList.toggle("is-flipped");
        this.sfx.flip();
      });
    }

    const btnPrev = container.querySelector("#btnPrevFc");
    const btnNext = container.querySelector("#btnNextFc");
    if (btnPrev && btnNext) {
      btnPrev.addEventListener("click", () => {
        if (this.activeFlashcardIndex > 0) {
          this.activeFlashcardIndex--;
          this.sfx.click();
          this.renderCurrentView();
        }
      });
      btnNext.addEventListener("click", () => {
        if (this.activeFlashcardIndex < this.flashcards.length - 1) {
          this.activeFlashcardIndex++;
          this.sfx.click();
          this.renderCurrentView();
        }
      });
    }
  }

  renderFlashcardComponent() {
    if (this.flashcards.length === 0) {
      return `<p style="color:var(--text-muted);">Không có thẻ ghi nhớ nào.</p>`;
    }
    const card = this.flashcards[this.activeFlashcardIndex] || this.flashcards[0];
    const isMastered = (this.currentUser.masteredFlashcards || []).includes(card.id);

    return `
      <div class="flashcard-3d-wrap">
        <div class="flashcard-inner" id="flashcardInner">
          
          <!-- Front -->
          <div class="flashcard-front">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="fc-card-category">${card.category}</span>
              <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">
                ${this.activeFlashcardIndex + 1} / ${this.flashcards.length}
              </span>
            </div>
            <div class="fc-question-text">${card.front}</div>
            <div class="fc-hint-flip">👆 Bấm chuột vào thẻ để lật xem đáp án</div>
          </div>

          <!-- Back -->
          <div class="flashcard-back">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="fc-card-category" style="color:var(--neon-purple);">GIẢI NGHĨA CHUẨN K21</span>
              <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">ĐÁP ÁN</span>
            </div>
            <div class="fc-answer-text">${card.back}</div>
            <div style="display:flex; justify-content:center; gap:10px;">
              <button class="btn-cyber btn-success" id="btnMasterFc" style="font-size:0.75rem; padding:4px 10px;">
                ${isMastered ? '✓ Đã thành thạo' : 'Đánh dấu Đã Thuộc (+10 XP)'}
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // VIEW: SỔ TAY LỖI SAI CỦA RIÊNG BẠN (ERROR NOTEBOOK)
  renderStudentNotebook(container) {
    const userErrors = this.notebook.filter(n => n.userId === this.currentUser.id);

    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">📓 SỔ TAY LỖI SAI CỦA RIÊNG BẠN (BUG NOTEBOOK)</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Hệ thống tự động ghi lại từng câu, từng thao tác bạn từng làm sai để gợi ý ôn tập trọng tâm vào đúng điểm yếu.
            </p>
          </div>
          <span class="nav-badge pulse-badge" style="font-size:0.85rem; padding:6px 14px;">
            ${userErrors.length} Điểm yếu cần khắc phục
          </span>
        </div>
      </div>

      ${userErrors.length === 0 ? `
        <div class="card-glass" style="text-align:center; padding:60px 20px;">
          <span style="font-size:3rem; display:block; margin-bottom:12px;">🌟</span>
          <h3 style="font-size:1.2rem; color:#fff; font-weight:700;">Sổ tay của bạn hoàn toàn trống!</h3>
          <p style="color:var(--text-muted); font-size:0.85rem; max-width:500px; margin:8px auto 20px;">
            Bạn chưa từng mắc lỗi nào hoặc đã ôn tập sửa sai toàn bộ. Hãy tiếp tục thử sức ở Ải 1 và Ải 2!
          </p>
          <button class="btn-cyber btn-primary" id="btnGoBackStage1">Vào Thực Chiến Ngay</button>
        </div>
      ` : `
        <div class="notebook-list">
          ${userErrors.map(err => `
            <div class="card-glass" style="border-left: 4px solid var(--neon-rose); margin-bottom:12px; display:flex; justify-content:space-between; align-items:center;">
              <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                  <span style="font-size:0.7rem; font-weight:700; color:var(--neon-rose); background:rgba(244,63,94,0.15); padding:2px 8px; border-radius:4px;">
                    LỖI SAI ĐÃ MẮC
                  </span>
                  <span style="font-size:0.75rem; color:var(--text-dim); font-family:var(--font-mono);">${new Date(err.timestamp).toLocaleTimeString()}</span>
                </div>
                <h4 style="font-size:1.05rem; font-weight:700; color:#fff; margin-bottom:6px;">${err.itemTitle}</h4>
                <div style="font-size:0.82rem; color:#fca5a5; margin-bottom:4px;">
                  ❌ <strong>Thao tác sai:</strong> ${err.mistakeMade}
                </div>
                <div style="font-size:0.82rem; color:#86efac;">
                  💡 <strong>Bài học cốt lõi:</strong> ${err.coreLesson}
                </div>
              </div>
              <div style="display:flex; flex-direction:column; gap:8px; margin-left:20px;">
                <button class="btn-cyber btn-primary btn-retry-error" data-error-id="${err.id}" data-item-id="${err.itemId}" style="font-size:0.78rem; padding:6px 14px;">
                  Luyện Tập Lại Ngay ➔
                </button>
                <button class="btn-cyber btn-secondary btn-clear-error" data-error-id="${err.id}" style="font-size:0.72rem; padding:4px 8px;">
                  Đã Khắc Phục (Xóa)
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    `;

    container.innerHTML = html;

    const btnGoBack = container.querySelector("#btnGoBackStage1");
    if (btnGoBack) {
      btnGoBack.addEventListener("click", () => this.navigateTo("student-stage1"));
    }

    container.querySelectorAll(".btn-clear-error").forEach(btn => {
      btn.addEventListener("click", async () => {
        const errId = btn.dataset.errorId;
        await this.api.delete("error_notebook", errId);
        this.notebook = this.notebook.filter(n => n.id !== errId);
        this.sfx.success();
        this.showToast("Đã xóa lỗi sai khỏi sổ tay của bạn!", "success");
        this.updateBadges();
        this.renderCurrentView();
      });
    });

    container.querySelectorAll(".btn-retry-error").forEach(btn => {
      btn.addEventListener("click", () => {
        const itemId = btn.dataset.itemId;
        if (itemId.startsWith("ticket")) {
          this.navigateTo("student-stage1");
          this.openSolveTicketModal(itemId);
        } else if (itemId.startsWith("bug")) {
          this.activeBugId = itemId;
          this.navigateTo("student-stage2");
        }
      });
    });
  }

  // VIEW: BẢNG VÀNG XẾP HẠNG (LEADERBOARD)
  renderStudentLeaderboard(container) {
    const sortedUsers = [...this.users]
      .filter(u => u.role === "student")
      .sort((a, b) => (b.xp || 0) - (a.xp || 0));

    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">🏆 BẢNG VÀNG DANH VỌNG K21</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Vinh danh các Chiến binh Săn Bug xuất sắc nhất khóa K21 qua các ải thực chiến.
            </p>
          </div>
        </div>
      </div>

      <div class="card-glass">
        <table class="leaderboard-table">
          <thead>
            <tr>
              <th>Hạng</th>
              <th>Sinh viên K21</th>
              <th>Lớp</th>
              <th>Cấp Bậc</th>
              <th>Chuỗi Ngày 🔥</th>
              <th>Điểm XP</th>
            </tr>
          </thead>
          <tbody>
            ${sortedUsers.map((u, idx) => {
              const rank = idx + 1;
              let rankBadge = `${rank}`;
              if (rank === 1) rankBadge = "🥇 1";
              if (rank === 2) rankBadge = "🥈 2";
              if (rank === 3) rankBadge = "🥉 3";
              const isCurrent = u.id === this.currentUser.id;

              return `
                <tr style="${isCurrent ? 'background:rgba(0, 243, 255, 0.08); font-weight:bold;' : ''}">
                  <td class="rank-badge-cell rank-${rank}">${rankBadge}</td>
                  <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <span>${u.avatar || '👨‍💻'}</span>
                      <div>
                        <div>${u.name} ${isCurrent ? '<span style="color:var(--neon-cyan); font-size:0.7rem;">(Bạn)</span>' : ''}</div>
                        <div style="font-size:0.7rem; color:var(--text-dim); font-family:var(--font-mono);">${u.mssv}</div>
                      </div>
                    </div>
                  </td>
                  <td>${u.class}</td>
                  <td><span class="user-role-pill" style="color:var(--neon-blue);">${u.level}</span></td>
                  <td><span style="color:var(--neon-amber); font-weight:700;">${u.streak || 1} ngày</span></td>
                  <td><strong style="color:var(--neon-cyan); font-size:0.95rem;">${u.xp || 0} XP</strong></td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;

    container.innerHTML = html;
  }

  // ========================================================================
  // 7. PHÂN HỆ 2: GIAO DIỆN GIẢNG VIÊN (TEACHER STUDIO)
  // ========================================================================

  // VIEW: STUDIO THỐNG KÊ LỚP HỌC K21
  renderTeacherDashboard(container) {
    const students = this.users.filter(u => u.role === "student");
    const totalStudents = students.length;
    const avgXp = totalStudents > 0 ? Math.round(students.reduce((acc, s) => acc + (s.xp || 0), 0) / totalStudents) : 0;

    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">📈 TEACHER STUDIO: THỐNG KÊ HỌC THUẬT K21</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Theo dõi tiến độ học tập thực tế và phân tích các bẫy tư duy kỹ thuật sinh viên K21 hay vướng phải nhất.
            </p>
          </div>
          <button class="btn-cyber btn-primary" id="btnTeacherGoCrud">Quản lý Ngân hàng Đề ➔</button>
        </div>
      </div>

      <!-- Quick Metrics -->
      <div class="teacher-stat-grid">
        <div class="tstat-card">
          <span class="tstat-icon">👥</span>
          <div>
            <div class="tstat-val">${totalStudents}</div>
            <div class="tstat-lbl">Sinh viên tham gia K21</div>
          </div>
        </div>
        <div class="tstat-card">
          <span class="tstat-icon">⚡</span>
          <div>
            <div class="tstat-val">${avgXp}</div>
            <div class="tstat-lbl">Điểm XP trung bình</div>
          </div>
        </div>
        <div class="tstat-card">
          <span class="tstat-icon">🚨</span>
          <div>
            <div class="tstat-val">${this.tickets.length} Ca</div>
            <div class="tstat-lbl">Tổng ca trực Helpdesk</div>
          </div>
        </div>
        <div class="tstat-card">
          <span class="tstat-icon">🐛</span>
          <div>
            <div class="tstat-val">${this.bugs.length} Bài</div>
            <div class="tstat-lbl">Tổng bài Săn Bug C/JS</div>
          </div>
        </div>
      </div>

      <!-- Bento Grid: Top Mistakes Analytics -->
      <div class="bento-grid">
        
        <div class="col-7">
          <div class="card-glass">
            <h3 class="card-title" style="margin-bottom:6px;">📊 TOP CÁC LỖI SINH VIÊN K21 HAY MẮC NHẤT</h3>
            <p class="card-subtitle" style="margin-bottom:18px;">Dữ liệu tổng hợp từ các lần thử thất bại của sinh viên</p>

            <div class="mistakes-breakdown">
              
              <div class="mistake-bar-item">
                <div class="mistake-header-line">
                  <span class="mistake-name">1. Nhầm toán tử gán (=) với so sánh (==) trong if</span>
                  <span class="mistake-percent">74% sinh viên</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill-rose" style="width: 74%;"></div>
                </div>
              </div>

              <div class="mistake-bar-item">
                <div class="mistake-header-line">
                  <span class="mistake-name">2. Quên đổi 'Save as type' sang All Files (*.*) trong WinRE Notepad</span>
                  <span class="mistake-percent">68% sinh viên</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill-rose" style="width: 68%;"></div>
                </div>
              </div>

              <div class="mistake-bar-item">
                <div class="mistake-header-line">
                  <span class="mistake-name">3. Quên nạp driver Intel VMD IRST cho CPU Gen 11-14 (Không thấy SSD)</span>
                  <span class="mistake-percent">62% sinh viên</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill-rose" style="width: 62%;"></div>
                </div>
              </div>

              <div class="mistake-bar-item">
                <div class="mistake-header-line">
                  <span class="mistake-name">4. Chọn nhầm ổ D: DATA để Format trong Rufus</span>
                  <span class="mistake-percent">55% sinh viên</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill-rose" style="width: 55%;"></div>
                </div>
              </div>

              <div class="mistake-bar-item">
                <div class="mistake-header-line">
                  <span class="mistake-name">5. Tràn mảng Off-By-One (chạy i <= N thay vì i < N)</span>
                  <span class="mistake-percent">48% sinh viên</span>
                </div>
                <div class="bar-track">
                  <div class="bar-fill-rose" style="width: 48%;"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-5">
          <div class="card-glass">
            <h3 class="card-title" style="margin-bottom:6px;">💡 KHUYẾN NGHỊ SƯ PHẠM CHO GIẢNG VIÊN</h3>
            <p class="card-subtitle" style="margin-bottom:16px;">Tối ưu hóa bài giảng thực hành tuần tới</p>

            <div style="display:flex; flex-direction:column; gap:12px; font-size:0.8rem; line-height:1.5;">
              <div style="background:rgba(10,16,32,0.6); padding:10px 12px; border-radius:6px; border-left:3px solid var(--neon-cyan);">
                <strong>Kỹ thuật Cài Win:</strong> Cần cho sinh viên thực hành tình huống cứu dữ liệu trước khi format. Nhấn mạnh việc tải driver VMD từ trang chủ Intel.
              </div>
              <div style="background:rgba(10,16,32,0.6); padding:10px 12px; border-radius:6px; border-left:3px solid var(--neon-purple);">
                <strong>Lập trình C:</strong> Sinh viên thường viết nhanh câu lệnh <code>if (isAdmin = true)</code>. Khuyến khích cách viết Yoda Conditions: <code>if (true == isAdmin)</code> để trình biên dịch tự bắt lỗi!
              </div>
              <div style="background:rgba(10,16,32,0.6); padding:10px 12px; border-radius:6px; border-left:3px solid var(--neon-emerald);">
                <strong>Bảo mật & Cứu hộ:</strong> Bổ sung bài tập tạo Menu Boot WinPE trên ổ cứng để sinh viên tự tin giải quyết máy văn phòng bị khóa mật khẩu BIOS.
              </div>
            </div>
          </div>
        </div>

      </div>
    `;

    container.innerHTML = html;

    const btnGoCrud = container.querySelector("#btnTeacherGoCrud");
    if (btnGoCrud) {
      btnGoCrud.addEventListener("click", () => this.navigateTo("teacher-crud"));
    }
  }

  // VIEW: QUẢN LÝ NGÂN HÀNG ĐỀ & CA TRỰC IT (CRUD)
  renderTeacherCrud(container) {
    const curSub = this.subjects.find(s => s.id === this.currentSubjectId) || this.subjects[0];
    const subTickets = this.tickets.filter(t => t.subjectId === this.currentSubjectId);
    const subBugs = this.bugs.filter(b => b.subjectId === this.currentSubjectId);

    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">📚 QUẢN LÝ NGÂN HÀNG ĐỀ & CA TRỰC IT (CRUD)</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Môn học hiện tại: <strong style="color:var(--neon-cyan);">${curSub.icon} ${curSub.name}</strong>
            </p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-cyber btn-primary" id="btnAddNewTicket">+ Thêm Ca Trực IT</button>
            <button class="btn-cyber btn-primary" id="btnAddNewBug" style="background:linear-gradient(135deg, var(--neon-purple), #9333ea);">+ Thêm Bài Săn Bug</button>
          </div>
        </div>
      </div>

      <!-- Tickets Table -->
      <div class="card-glass" style="margin-bottom:20px;">
        <h3 class="card-title" style="margin-bottom:12px;">🛠️ Danh Sách Ca Trực IT Helpdesk (${subTickets.length} Ca)</h3>
        <div class="data-table-container">
          <table class="cyber-table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tiêu Đề Ca Trực</th>
                <th>Mức Độ</th>
                <th>Chuyên Mục</th>
                <th>Thưởng XP</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              ${subTickets.map(t => `
                <tr>
                  <td style="font-family:var(--font-mono);">${t.id}</td>
                  <td><strong>${t.title}</strong></td>
                  <td><span class="severity-pill severity-${t.severity.toLowerCase()}">${t.severity}</span></td>
                  <td>${t.category}</td>
                  <td>+${t.xpReward} XP</td>
                  <td>
                    <div style="display:flex; gap:6px;">
                      <button class="btn-cyber btn-secondary btn-edit-ticket" data-id="${t.id}" style="padding:3px 8px; font-size:0.75rem;">Sửa</button>
                      <button class="btn-cyber btn-danger btn-delete-ticket" data-id="${t.id}" style="padding:3px 8px; font-size:0.75rem;">Xóa</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Code Bugs Table -->
      <div class="card-glass">
        <h3 class="card-title" style="margin-bottom:12px;">🐛 Danh Sách Thử Thách Săn Bug C/JS (${subBugs.length} Bài)</h3>
        <div class="data-table-container">
          <table class="cyber-table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tiêu Đề Thử Thách</th>
                <th>Ngôn Ngữ</th>
                <th>Dòng Lỗi</th>
                <th>Độ Khó</th>
                <th>Thưởng XP</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              ${subBugs.map(b => `
                <tr>
                  <td style="font-family:var(--font-mono);">${b.id}</td>
                  <td><strong>${b.title}</strong></td>
                  <td><span class="editor-lang-badge">${b.language}</span></td>
                  <td style="color:var(--neon-rose); font-weight:700;">Dòng ${b.bugLineNumber}</td>
                  <td>${b.difficulty}</td>
                  <td>+${b.xpReward} XP</td>
                  <td>
                    <div style="display:flex; gap:6px;">
                      <button class="btn-cyber btn-secondary btn-edit-bug" data-id="${b.id}" style="padding:3px 8px; font-size:0.75rem;">Sửa</button>
                      <button class="btn-cyber btn-danger btn-delete-bug" data-id="${b.id}" style="padding:3px 8px; font-size:0.75rem;">Xóa</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;

    // Attach Add Ticket
    container.querySelector("#btnAddNewTicket").addEventListener("click", () => {
      this.openEditTicketModal();
    });

    // Attach Add Bug
    container.querySelector("#btnAddNewBug").addEventListener("click", () => {
      this.openEditBugModal();
    });

    // Edit/Delete Ticket Delegation
    container.querySelectorAll(".btn-edit-ticket").forEach(btn => {
      btn.addEventListener("click", () => {
        const t = this.tickets.find(item => item.id === btn.dataset.id);
        this.openEditTicketModal(t);
      });
    });
    container.querySelectorAll(".btn-delete-ticket").forEach(btn => {
      btn.addEventListener("click", async () => {
        if (confirm("Giảng viên có chắc chắn muốn xóa ca trực này không?")) {
          await this.api.delete("stage1_it_tickets", btn.dataset.id);
          this.tickets = this.tickets.filter(item => item.id !== btn.dataset.id);
          this.sfx.success();
          this.showToast("Đã xóa ca trực thành công!", "success");
          this.renderCurrentView();
        }
      });
    });

    // Edit/Delete Bug Delegation
    container.querySelectorAll(".btn-edit-bug").forEach(btn => {
      btn.addEventListener("click", () => {
        const b = this.bugs.find(item => item.id === btn.dataset.id);
        this.openEditBugModal(b);
      });
    });
    container.querySelectorAll(".btn-delete-bug").forEach(btn => {
      btn.addEventListener("click", async () => {
        if (confirm("Giảng viên có chắc chắn muốn xóa bài săn bug này không?")) {
          await this.api.delete("stage2_code_bugs", btn.dataset.id);
          this.bugs = this.bugs.filter(item => item.id !== btn.dataset.id);
          this.sfx.success();
          this.showToast("Đã xóa bài săn bug thành công!", "success");
          this.renderCurrentView();
        }
      });
    });
  }

  // MODAL: EDIT / CREATE TICKET
  openEditTicketModal(existing = null) {
    const isEdit = !!existing;
    const title = isEdit ? `✏️ Chỉnh Sửa Ca Trực: ${existing.title}` : `➕ Thêm Mới Ca Trực IT Helpdesk`;

    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div class="form-group">
          <label class="form-label">Tiêu đề ca trực:</label>
          <input type="text" id="editTicketTitle" class="form-input" value="${existing ? existing.title : ''}" placeholder="Nhập tiêu đề sự cố...">
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <div class="form-group">
            <label class="form-label">Mức độ nghiêm trọng:</label>
            <select id="editTicketSeverity" class="form-select">
              <option value="Critical" ${existing && existing.severity === 'Critical' ? 'selected' : ''}>Critical (Khẩn cấp)</option>
              <option value="High" ${existing && existing.severity === 'High' ? 'selected' : ''}>High (Cao)</option>
              <option value="Medium" ${existing && existing.severity === 'Medium' ? 'selected' : ''}>Medium (Trung bình)</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Điểm thưởng XP:</label>
            <input type="number" id="editTicketXp" class="form-input" value="${existing ? existing.xpReward : 50}">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Báo cáo mô tả của người dùng:</label>
          <textarea id="editTicketReport" class="form-textarea">${existing ? existing.userReport : ''}</textarea>
        </div>
        <div class="form-group">
          <label class="form-label">Giải thích chi tiết (Kiến thức cốt lõi):</label>
          <textarea id="editTicketExp" class="form-textarea">${existing ? existing.explanation : ''}</textarea>
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Hủy",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: isEdit ? "Lưu Thay Đổi" : "Tạo Mới Ca Trực",
        class: "btn-primary",
        onClick: async () => {
          const tTitle = document.getElementById("editTicketTitle").value.trim();
          const tSev = document.getElementById("editTicketSeverity").value;
          const tXp = parseInt(document.getElementById("editTicketXp").value, 10) || 50;
          const tRep = document.getElementById("editTicketReport").value.trim();
          const tExp = document.getElementById("editTicketExp").value.trim();

          if (!tTitle || !tRep) {
            this.showToast("Vui lòng điền đủ tiêu đề và mô tả!", "error");
            return;
          }

          if (isEdit) {
            const updated = {
              ...existing,
              title: tTitle,
              severity: tSev,
              xpReward: tXp,
              userReport: tRep,
              explanation: tExp
            };
            await this.api.put("stage1_it_tickets", existing.id, updated);
            const idx = this.tickets.findIndex(t => t.id === existing.id);
            if (idx !== -1) this.tickets[idx] = updated;
            this.showToast("Đã cập nhật ca trực!", "success");
          } else {
            const newTicket = {
              id: `ticket-${Date.now()}`,
              subjectId: this.currentSubjectId,
              title: tTitle,
              severity: tSev,
              userReport: tRep,
              symptoms: ["Người dùng báo cáo sự cố", "Cần IT kiểm tra trực tiếp"],
              category: "Hardware/OS",
              xpReward: tXp,
              diagnosticSteps: ["Kiểm tra đèn báo", "Vào BIOS", "Chạy chẩn đoán"],
              correctActionIndex: 0,
              options: ["Xử lý đúng quy trình kỹ thuật", "Thay mới toàn bộ", "Format dữ liệu", "Khởi động lại máy"],
              explanation: tExp || "Quy trình chuẩn kỹ thuật viên K21."
            };
            const created = await this.api.post("stage1_it_tickets", newTicket);
            this.tickets.push(created);
            this.showToast("Đã tạo mới ca trực thành công!", "success");
          }

          this.sfx.success();
          this.closeModal();
          this.renderCurrentView();
        }
      }
    ]);
  }

  // MODAL: EDIT / CREATE CODE BUG (INCLUDING 3 SCAFFOLDING HINTS)
  openEditBugModal(existing = null) {
    const isEdit = !!existing;
    const title = isEdit ? `✏️ Chỉnh Sửa Bài Săn Bug: ${existing.title}` : `➕ Thêm Mới Thử Thách Săn Bug Code`;

    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div class="form-group">
          <label class="form-label">Tiêu đề bài săn bug:</label>
          <input type="text" id="editBugTitle" class="form-input" value="${existing ? existing.title : ''}" placeholder="Ví dụ: Lỗi tràn mảng...">
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; gap:10px;">
          <div class="form-group">
            <label class="form-label">Ngôn ngữ:</label>
            <select id="editBugLang" class="form-select">
              <option value="c" ${existing && existing.language === 'c' ? 'selected' : ''}>C / C++</option>
              <option value="javascript" ${existing && existing.language === 'javascript' ? 'selected' : ''}>JavaScript</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Dòng chứa lỗi (Line):</label>
            <input type="number" id="editBugLine" class="form-input" value="${existing ? existing.bugLineNumber : 8}">
          </div>
          <div class="form-group">
            <label class="form-label">Điểm thưởng XP:</label>
            <input type="number" id="editBugXp" class="form-input" value="${existing ? existing.xpReward : 45}">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Đoạn mã nguồn (Code snippet):</label>
          <textarea id="editBugCode" class="form-textarea" style="font-family:var(--font-mono); min-height:120px;">${existing ? existing.code : ''}</textarea>
        </div>

        <div class="form-group">
          <label class="form-label">Chuỗi ký tự đúng cần kiểm tra (Expected Snippet):</label>
          <input type="text" id="editBugSnippet" class="form-input" value="${existing ? existing.expectedFixedSnippet : ''}" placeholder="Ví dụ: i < 5">
        </div>

        <!-- 3 SCAFFOLDING HINTS -->
        <div style="border-top:1px solid var(--border-subtle); padding-top:10px;">
          <h4 style="font-size:0.82rem; color:var(--neon-purple); margin-bottom:8px;">🤖 3 CẤP ĐỘ GỢI Ý CHO AI MENTOR:</h4>
          
          <div class="form-group" style="margin-bottom:8px;">
            <label class="form-label">Gợi ý Cấp 1 (Khoanh vùng vị trí - 0 XP):</label>
            <input type="text" id="editBugHint1" class="form-input" value="${existing ? existing.hint1 : ''}" placeholder="Quan sát kỹ dòng...">
          </div>
          <div class="form-group" style="margin-bottom:8px;">
            <label class="form-label">Gợi ý Cấp 2 (Giải thích nguyên lý gốc rễ - Trừ 5 XP):</label>
            <input type="text" id="editBugHint2" class="form-input" value="${existing ? existing.hint2 : ''}" placeholder="Nguyên lý toán tử...">
          </div>
          <div class="form-group">
            <label class="form-label">Gợi ý Cấp 3 (Hướng dẫn sửa từng bước - Trừ 10 XP):</label>
            <input type="text" id="editBugHint3" class="form-input" value="${existing ? existing.hint3 : ''}" placeholder="Sửa đoạn code thành...">
          </div>
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Hủy",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: isEdit ? "Lưu Bài Bug" : "Tạo Mới Bài Bug",
        class: "btn-primary",
        onClick: async () => {
          const bTitle = document.getElementById("editBugTitle").value.trim();
          const bLang = document.getElementById("editBugLang").value;
          const bLine = parseInt(document.getElementById("editBugLine").value, 10) || 5;
          const bXp = parseInt(document.getElementById("editBugXp").value, 10) || 40;
          const bCode = document.getElementById("editBugCode").value.trim();
          const bSnippet = document.getElementById("editBugSnippet").value.trim();
          const bH1 = document.getElementById("editBugHint1").value.trim();
          const bH2 = document.getElementById("editBugHint2").value.trim();
          const bH3 = document.getElementById("editBugHint3").value.trim();

          if (!bTitle || !bCode) {
            this.showToast("Vui lòng nhập tiêu đề và đoạn code!", "error");
            return;
          }

          if (isEdit) {
            const updated = {
              ...existing,
              title: bTitle,
              language: bLang,
              bugLineNumber: bLine,
              xpReward: bXp,
              code: bCode,
              expectedFixedSnippet: bSnippet || "clean",
              hint1: bH1,
              hint2: bH2,
              hint3: bH3
            };
            await this.api.put("stage2_code_bugs", existing.id, updated);
            const idx = this.bugs.findIndex(b => b.id === existing.id);
            if (idx !== -1) this.bugs[idx] = updated;
            this.showToast("Đã cập nhật bài săn bug!", "success");
          } else {
            const newBug = {
              id: `bug-${Date.now()}`,
              subjectId: this.currentSubjectId,
              title: bTitle,
              language: bLang,
              category: "Logic & Cú pháp K21",
              difficulty: "Trung bình",
              xpReward: bXp,
              code: bCode,
              bugLineNumber: bLine,
              hint1: bH1 || "Xem kỹ dòng lệnh được tô đỏ.",
              hint2: bH2 || "Toán tử logic hoặc điều kiện chưa chính xác.",
              hint3: bH3 || "Sửa lại theo cú pháp chuẩn.",
              expectedFixedSnippet: bSnippet || "fixed",
              explanation: "Bài tập săn bug do Giảng viên tạo mới."
            };
            const created = await this.api.post("stage2_code_bugs", newBug);
            this.bugs.push(created);
            this.showToast("Đã tạo mới bài săn bug thành công!", "success");
          }

          this.sfx.success();
          this.closeModal();
          this.renderCurrentView();
        }
      }
    ]);
  }

  // ========================================================================
  // 8. PHÂN HỆ 3: GIAO DIỆN ADMIN (ADMIN CONSOLE)
  // ========================================================================

  // VIEW: QUẢN LÝ MÔN HỌC & LĨNH VỰC MỞ RỘNG
  renderAdminSubjects(container) {
    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">🌐 QUẢN TRỊ VIÊN: QUẢN LÝ MÔN HỌC & LĨNH VỰC MỞ RỘNG</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Admin có thể thêm mới bất kỳ môn học nào (Python, An toàn thông tin, AI). Môn mới sẽ xuất hiện ngay lập tức trong Dropdown của Sinh viên và Giảng viên mà không làm phồng giao diện!
            </p>
          </div>
          <button class="btn-cyber btn-primary" id="btnAdminAddSubject">+ Thêm Môn Học Mới</button>
        </div>
      </div>

      <div class="subject-progress-grid">
        ${this.subjects.map(sub => `
          <div class="card-glass" style="border-top:3px solid ${sub.color || 'var(--neon-cyan)'};">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px;">
              <span style="font-size:2rem;">${sub.icon}</span>
              <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-dim);">${sub.code}</span>
            </div>
            <h4 style="font-size:1rem; font-weight:700; color:#fff; margin-bottom:6px;">${sub.name}</h4>
            <p style="font-size:0.78rem; color:var(--text-muted); min-height:48px; line-height:1.4; margin-bottom:14px;">
              ${sub.description}
            </p>
            <div style="display:flex; justify-content:flex-end; gap:8px;">
              <button class="btn-cyber btn-danger btn-delete-sub" data-id="${sub.id}" style="font-size:0.72rem; padding:4px 8px;">
                Xóa Môn
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    container.innerHTML = html;

    // Add Subject Button
    container.querySelector("#btnAdminAddSubject").addEventListener("click", () => {
      this.openAddSubjectModal();
    });

    // Delete Subject Delegation
    container.querySelectorAll(".btn-delete-sub").forEach(btn => {
      btn.addEventListener("click", async () => {
        if (confirm("Admin có chắc chắn muốn xóa môn học này không?")) {
          const subId = btn.dataset.id;
          await this.api.delete("subjects", subId);
          this.subjects = this.subjects.filter(s => s.id !== subId);
          this.populateSubjectDropdown();
          this.sfx.success();
          this.showToast("Đã xóa môn học thành công!", "success");
          this.renderCurrentView();
        }
      });
    });
  }

  // MODAL: ADD NEW SUBJECT
  openAddSubjectModal() {
    const title = `➕ Thêm Mới Môn Học / Lĩnh Vực Đào Tạo`;
    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div class="form-group">
          <label class="form-label">Tên môn học / Lĩnh vực:</label>
          <input type="text" id="newSubName" class="form-input" placeholder="Ví dụ: Lập trình Python & Phân tích Dữ liệu">
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <div class="form-group">
            <label class="form-label">Mã học phần:</label>
            <input type="text" id="newSubCode" class="form-input" placeholder="Ví dụ: PY401">
          </div>
          <div class="form-group">
            <label class="form-label">Biểu tượng Icon (Emoji):</label>
            <input type="text" id="newSubIcon" class="form-input" value="🐍">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Mô tả học phần:</label>
          <textarea id="newSubDesc" class="form-textarea" placeholder="Giới thiệu mục tiêu của môn học..."></textarea>
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Hủy",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: "Thêm Môn Ngay",
        class: "btn-primary",
        onClick: async () => {
          const sName = document.getElementById("newSubName").value.trim();
          const sCode = document.getElementById("newSubCode").value.trim();
          const sIcon = document.getElementById("newSubIcon").value.trim() || "📘";
          const sDesc = document.getElementById("newSubDesc").value.trim();

          if (!sName || !sCode) {
            this.showToast("Vui lòng nhập tên và mã môn học!", "error");
            return;
          }

          const newSub = {
            id: `sub-${Date.now()}`,
            code: sCode.toUpperCase(),
            name: sName,
            icon: sIcon,
            color: "#38bdf8",
            description: sDesc || "Môn học đào tạo CNTT thực chiến K21."
          };

          const created = await this.api.post("subjects", newSub);
          this.subjects.push(created);
          this.populateSubjectDropdown();
          this.sfx.success();
          this.showToast(`✓ Đã thêm môn ${sName}! Dropdown Topbar đã cập nhật tức thì!`, "success");
          this.closeModal();
          this.renderCurrentView();
        }
      }
    ]);
  }

  // VIEW: QUẢN LÝ NGƯỜI DÙNG & PHÂN QUYỀN
  renderAdminUsers(container) {
    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">👥 QUẢN TRỊ VIÊN: QUẢN LÝ NGƯỜI DÙNG & PHÂN QUYỀN</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Quản trị tài khoản Sinh viên, Giảng viên, phân quyền truy cập và cộng trừ điểm XP.
            </p>
          </div>
          <button class="btn-cyber btn-primary" id="btnAdminAddUser">+ Thêm Tài Khoản</button>
        </div>
      </div>

      <div class="card-glass">
        <div class="data-table-container">
          <table class="cyber-table">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Họ & Tên</th>
                <th>MSSV / Mã</th>
                <th>Lớp / Bộ Môn</th>
                <th>Vai Trò</th>
                <th>Điểm XP</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              ${this.users.map(u => `
                <tr>
                  <td style="font-size:1.4rem;">${u.avatar || '👨‍💻'}</td>
                  <td><strong>${u.name}</strong></td>
                  <td style="font-family:var(--font-mono);">${u.mssv}</td>
                  <td>${u.class}</td>
                  <td><span class="user-role-pill">${u.role.toUpperCase()}</span></td>
                  <td><strong style="color:var(--neon-cyan);">${u.xp || 0} XP</strong></td>
                  <td>
                    <div style="display:flex; gap:6px;">
                      <button class="btn-cyber btn-secondary btn-bonus-xp" data-id="${u.id}" style="padding:2px 8px; font-size:0.72rem;">+50 XP</button>
                      <button class="btn-cyber btn-danger btn-delete-user" data-id="${u.id}" style="padding:2px 8px; font-size:0.72rem;">Xóa</button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelector("#btnAdminAddUser").addEventListener("click", () => {
      this.openAddUserModal();
    });

    // Bonus XP handler
    container.querySelectorAll(".btn-bonus-xp").forEach(btn => {
      btn.addEventListener("click", async () => {
        const u = this.users.find(item => item.id === btn.dataset.id);
        if (u) {
          u.xp = (u.xp || 0) + 50;
          await this.api.put("users", u.id, u);
          this.sfx.success();
          this.showToast(`Đã thưởng +50 XP cho ${u.name}!`, "success");
          if (this.currentUser.id === u.id) this.updateUserProfileDisplay();
          this.renderCurrentView();
        }
      });
    });

    // Delete User handler
    container.querySelectorAll(".btn-delete-user").forEach(btn => {
      btn.addEventListener("click", async () => {
        if (confirm("Admin có chắc chắn muốn xóa tài khoản này không?")) {
          await this.api.delete("users", btn.dataset.id);
          this.users = this.users.filter(item => item.id !== btn.dataset.id);
          this.sfx.success();
          this.showToast("Đã xóa người dùng thành công!", "success");
          this.renderCurrentView();
        }
      });
    });
  }

  // MODAL: ADD USER
  openAddUserModal() {
    const title = `➕ Thêm Người Dùng Mới`;
    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div class="form-group">
          <label class="form-label">Họ và Tên:</label>
          <input type="text" id="newUserName" class="form-input" placeholder="Ví dụ: Lê Thị Thảo">
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <div class="form-group">
            <label class="form-label">MSSV / Mã Cán Bộ:</label>
            <input type="text" id="newUserMssv" class="form-input" placeholder="21DTH09876">
          </div>
          <div class="form-group">
            <label class="form-label">Lớp / Bộ Môn:</label>
            <input type="text" id="newUserClass" class="form-input" value="K21-CNTT01">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Vai trò (Role):</label>
          <select id="newUserRole" class="form-select">
            <option value="student">Sinh viên</option>
            <option value="teacher">Giảng viên</option>
            <option value="admin">Quản trị viên (Admin)</option>
          </select>
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Hủy",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: "Tạo Tài Khoản",
        class: "btn-primary",
        onClick: async () => {
          const uName = document.getElementById("newUserName").value.trim();
          const uMssv = document.getElementById("newUserMssv").value.trim();
          const uClass = document.getElementById("newUserClass").value.trim();
          const uRole = document.getElementById("newUserRole").value;

          if (!uName || !uMssv) {
            this.showToast("Vui lòng nhập họ tên và MSSV!", "error");
            return;
          }

          const newUser = {
            id: `user-${Date.now()}`,
            name: uName,
            mssv: uMssv,
            class: uClass,
            role: uRole,
            avatar: uRole === "student" ? "👨‍💻" : (uRole === "teacher" ? "👨‍🏫" : "⚡"),
            level: "Thành viên mới K21",
            xp: 100,
            streak: 1,
            completedTickets: [],
            completedBugs: [],
            masteredFlashcards: []
          };

          const created = await this.api.post("users", newUser);
          this.users.push(created);
          this.sfx.success();
          this.showToast(`Đã tạo tài khoản cho ${uName}!`, "success");
          this.closeModal();
          this.renderCurrentView();
        }
      }
    ]);
  }

  // VIEW: TRẠM CẤU HÌNH & GIÁM SÁT SERVER ẢO (db.json / REST API CONSOLE)
  renderAdminServer(container) {
    const db = this.api.getLocalDb();
    const logs = db.system_logs || [];

    const html = `
      <div class="card-glass" style="margin-bottom:20px;">
        <div class="card-header-flex">
          <div>
            <h2 style="font-size:1.35rem; font-weight:800; color:#fff;">🖥️ TRẠM CẤU HÌNH & GIÁM SÁT SERVER ẢO REST API</h2>
            <p style="color:var(--text-muted); font-size:0.85rem; margin-top:4px;">
              Tích hợp chuẩn RESTful. Tự động chuyển đổi giữa JSON-Server (Port 3000) và LocalStorage Fallback an toàn 100%.
            </p>
          </div>
          <div style="display:flex; gap:10px;">
            <button class="btn-cyber btn-primary" id="btnExportDb">Xuất file db.json ⬇</button>
            <button class="btn-cyber btn-secondary" id="btnImportDb">Nhập file db.json ⬆</button>
            <input type="file" id="fileDbInput" accept=".json" style="display:none;">
          </div>
        </div>
      </div>

      <div class="bento-grid">
        
        <!-- Server Config Box -->
        <div class="col-6">
          <div class="card-glass">
            <h3 class="card-title" style="margin-bottom:12px;">⚙️ Thiết Lập Địa Chỉ Virtual REST API</h3>
            <div class="form-group" style="margin-bottom:12px;">
              <label class="form-label">Endpoint URL (Mặc định: http://localhost:3000):</label>
              <div style="display:flex; gap:10px;">
                <input type="text" id="adminApiUrlInput" class="form-input" value="${this.api.baseUrl}">
                <button class="btn-cyber btn-primary" id="btnSaveApiUrl">Lưu URL</button>
              </div>
            </div>

            <div style="background:rgba(10,16,32,0.8); border:1px solid var(--border-subtle); padding:12px; border-radius:6px; font-size:0.78rem; line-height:1.6;">
              <div style="color:var(--neon-emerald); font-weight:700; margin-bottom:4px;">💡 HƯỚNG DẪN BẬT JSON-SERVER TRÊN TERMINAL:</div>
              <code style="color:var(--neon-cyan); font-family:var(--font-mono); display:block; background:#05070e; padding:6px 10px; border-radius:4px; margin:4px 0;">
                npx json-server --watch db.json --port 3000
              </code>
              <span style="color:var(--text-muted);">
                Nếu Ban Giám khảo hoặc Giảng viên không chạy lệnh trên, ứng dụng <strong>vẫn hoạt động trơn tru 100%</strong> nhờ cơ chế Smart Auto-Fallback vào LocalStorage!
              </span>
            </div>

            <div style="margin-top:14px; display:flex; gap:10px;">
              <button class="btn-cyber btn-success" id="btnSyncNow">Đồng bộ Dữ liệu Ngay</button>
              <button class="btn-cyber btn-danger" id="btnResetDb">Khôi Phục Dữ Liệu Gốc</button>
            </div>
          </div>
        </div>

        <!-- Live REST API Terminal Logs -->
        <div class="col-6">
          <div class="card-glass">
            <div class="card-header-flex">
              <h3 class="card-title">📡 Nhật Ký Yêu Cầu REST API (Live Request Log)</h3>
              <span style="font-size:0.75rem; color:var(--neon-cyan); font-family:var(--font-mono);">${logs.length} Transactions</span>
            </div>

            <div class="admin-terminal" id="adminTerminalLogs">
              ${logs.length === 0 ? `
                <div style="color:var(--text-dim); text-align:center; padding:20px 0;">Chưa có nhật ký nào.</div>
              ` : logs.map(l => {
                const methodClass = `method-${l.method.toLowerCase()}`;
                return `
                  <div class="log-line">
                    <span class="log-time">${new Date(l.timestamp).toLocaleTimeString()}</span>
                    <span class="log-method ${methodClass}">${l.method}</span>
                    <span class="log-endpoint">${l.endpoint}</span>
                    <span class="log-status">[${l.status}]</span>
                    <span style="font-size:0.65rem; color:var(--text-dim);">${l.source}</span>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        </div>

      </div>
    `;

    container.innerHTML = html;

    // Save API URL
    container.querySelector("#btnSaveApiUrl").addEventListener("click", async () => {
      const url = document.getElementById("adminApiUrlInput").value.trim();
      if (url) {
        this.api.baseUrl = url;
        localStorage.setItem("it_arena_api_url", url);
        this.sfx.success();
        this.showToast(`Đã lưu URL: ${url}`, "success");
        await this.refreshServerStatus(true);
      }
    });

    // Export db.json
    container.querySelector("#btnExportDb").addEventListener("click", () => {
      this.api.exportDbJson();
      this.sfx.success();
      this.showToast("Đã xuất file db.json snapshot thành công!", "success");
    });

    // Import db.json
    const fileInput = container.querySelector("#fileDbInput");
    container.querySelector("#btnImportDb").addEventListener("click", () => {
      fileInput.click();
    });
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const ok = this.api.importDbJson(event.target.result);
          if (ok) {
            this.sfx.success();
            this.showToast("✓ Đã nạp dữ liệu từ file JSON thành công!", "success");
            await this.loadInitialData();
            this.renderCurrentView();
          } else {
            this.sfx.error();
            this.showToast("File JSON không hợp lệ!", "error");
          }
        };
        reader.readAsText(file);
      }
    });

    // Sync Now
    container.querySelector("#btnSyncNow").addEventListener("click", async () => {
      this.sfx.click();
      this.showToast("Đang đồng bộ dữ liệu...", "warning");
      await this.refreshServerStatus(true);
      await this.loadInitialData();
      this.renderCurrentView();
    });

    // Reset Defaults
    container.querySelector("#btnResetDb").addEventListener("click", async () => {
      if (confirm("Bạn có chắc chắn muốn khôi phục toàn bộ CSDL về mặc định ban đầu không?")) {
        this.api.resetToDefault();
        await this.loadInitialData();
        this.sfx.success();
        this.showToast("Đã khôi phục dữ liệu gốc chuẩn V2.0!", "success");
        this.renderCurrentView();
      }
    });
  }

  // ========================================================================
  // 9. MODALS, PERSONALIZATION & GAMIFICATION HELPER UTILITIES
  // ========================================================================

  openEditProfileModal() {
    const title = `✏️ Chỉnh Sửa Thông Tin Cá Nhân K21`;
    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <div class="form-group">
          <label class="form-label">Họ và tên của bạn:</label>
          <input type="text" id="editProfileName" class="form-input" value="${this.currentUser.name}">
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px;">
          <div class="form-group">
            <label class="form-label">Mã số sinh viên (MSSV):</label>
            <input type="text" id="editProfileMssv" class="form-input" value="${this.currentUser.mssv}">
          </div>
          <div class="form-group">
            <label class="form-label">Lớp sinh hoạt K21:</label>
            <input type="text" id="editProfileClass" class="form-input" value="${this.currentUser.class}">
          </div>
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Hủy",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: "Lưu Thông Tin",
        class: "btn-primary",
        onClick: async () => {
          const pName = document.getElementById("editProfileName").value.trim();
          const pMssv = document.getElementById("editProfileMssv").value.trim();
          const pClass = document.getElementById("editProfileClass").value.trim();

          if (!pName || !pMssv) {
            this.showToast("Vui lòng nhập tên và MSSV!", "error");
            return;
          }

          this.currentUser.name = pName;
          this.currentUser.mssv = pMssv;
          this.currentUser.class = pClass;

          await this.api.put("users", this.currentUser.id, this.currentUser);
          this.updateUserProfileDisplay();
          this.sfx.success();
          this.showToast("✓ Đã cập nhật thông tin cá nhân!", "success");
          this.closeModal();
          this.renderCurrentView();
        }
      }
    ]);
  }

  openServerConfigModal() {
    const title = `⚙️ Cấu Hình REST API Virtual Server`;
    const bodyHtml = `
      <div style="display:flex; flex-direction:column; gap:12px;">
        <p style="font-size:0.82rem; color:var(--text-muted);">
          Nhập đường dẫn Server json-server đang chạy. Nếu máy bạn không chạy server, ứng dụng tự động kích hoạt chế độ <strong>LocalStorage Fallback 100%</strong> an toàn.
        </p>
        <div class="form-group">
          <label class="form-label">Base URL:</label>
          <input type="text" id="modalServerUrlInput" class="form-input" value="${this.api.baseUrl}">
        </div>
      </div>
    `;

    this.showModal(title, bodyHtml, [
      {
        text: "Đóng",
        class: "btn-secondary",
        onClick: () => this.closeModal()
      },
      {
        text: "Lưu & Kiểm Tra",
        class: "btn-primary",
        onClick: async () => {
          const val = document.getElementById("modalServerUrlInput").value.trim();
          if (val) {
            this.api.baseUrl = val;
            localStorage.setItem("it_arena_api_url", val);
            await this.refreshServerStatus(true);
            this.closeModal();
          }
        }
      }
    ]);
  }

  showModal(title, bodyContent, buttons = []) {
    this.dom.modalTitle.textContent = title;
    this.dom.modalBody.innerHTML = bodyContent;
    this.dom.modalFooter.innerHTML = "";

    buttons.forEach(btnConfig => {
      const btn = document.createElement("button");
      btn.className = `btn-cyber ${btnConfig.class || 'btn-primary'}`;
      btn.textContent = btnConfig.text;
      if (btnConfig.id) btn.id = btnConfig.id;
      btn.addEventListener("click", btnConfig.onClick);
      this.dom.modalFooter.appendChild(btn);
    });

    this.dom.modalBackdrop.classList.add("show");
  }

  closeModal() {
    this.dom.modalBackdrop.classList.remove("show");
  }

  showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `cyber-toast toast-${type}`;
    let icon = "✓";
    if (type === "error") icon = "✕";
    if (type === "warning") icon = "⚠️";

    toast.innerHTML = `
      <span style="font-size:1.1rem;">${icon}</span>
      <span>${message}</span>
    `;

    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  awardXp(amount, reason) {
    if (!this.currentUser) return;
    this.currentUser.xp = (this.currentUser.xp || 0) + amount;
    this.updateUserProfileDisplay();
    this.showToast(`+${amount} XP: ${reason}`, "success");
    this.sfx.success();
  }

  async logMistakeToNotebook(title, mistake, lesson) {
    if (!this.currentUser) return;
    const entry = {
      id: `err-${Date.now()}`,
      userId: this.currentUser.id,
      subjectId: this.currentSubjectId,
      itemId: this.activeBugId || "ticket-general",
      itemTitle: title,
      mistakeMade: mistake,
      coreLesson: lesson,
      timestamp: new Date().toISOString()
    };
    await this.api.post("error_notebook", entry);
    this.notebook.unshift(entry);
    this.updateBadges();
    this.showToast("⚠️ Đã tự động ghi lại lỗi vào Sổ Tay Lỗi Sai Riêng Bạn!", "warning");
  }

  escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// ==========================================================================
// 10. BOOTSTRAP APPLICATION ON DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
  window.app.init();
});

