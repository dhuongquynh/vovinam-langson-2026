# 📷 Image Slots — Hướng dẫn chị thay ảnh

> Mỗi slot ảnh có **tên file cố định**. Chị chỉ cần đặt file ảnh vào folder `img/` với đúng tên là tự động hiện trên web.
> Nếu file chưa có, web sẽ tự hiện placeholder đẹp (logo Vovinam + dòng "Thay bằng ảnh thật").

## 🎯 Cách dùng nhanh

1. Mở folder `landing-pages-v2/img/`
2. Đổi tên ảnh của chị thành tên trong bảng dưới (vd: `hero-vo-sinh-da.jpg`)
3. Kéo thả ảnh vào folder `img/`
4. Refresh page là thấy ảnh hiện
5. Định dạng nên dùng: **`.jpg`** (file nhẹ) hoặc `.webp`

## 📏 Mẹo về kích thước

| Aspect ratio | Khi nào dùng | Kích thước gợi ý |
|---|---|---|
| **4:5 (dọc)** | Ảnh đứng tấn, chân dung — slot hero chính + polaroid | 1200×1500 |
| **1:1 (vuông)** | Ảnh phụ hero, avatar testimonial | 800×800 |
| **16:10 (ngang)** | Hub card lớp, safety card | 1600×1000 |
| **3:2 (ngang)** | Gallery cell ngang | 1500×1000 |
| **16:9 (ngang lớn)** | Gallery cell c-1 (cell to nhất) | 1920×1080 |

Mọi ảnh đều có `object-fit: cover` → ảnh sẽ tự crop vừa khung, không bị méo. Chị không cần crop chính xác, chỉ cần ảnh **rõ chủ thể nằm gần giữa**.

---

## 📄 Trang `index.html` (Trang chủ)

### Hero (3 ảnh + sticker)
- `img/hero-vo-sinh-da.jpg` — Võ sinh đứng tấn / đá (dọc 4:5) — **ảnh chủ lực**
- `img/hero-thay-tro.jpg` — Thầy đang hướng dẫn võ sinh (vuông 1:1)
- `img/hero-chao-san.jpg` — Cảnh chào sàn / lễ nghĩa (vuông 1:1)

### Hub Cards (2 ảnh)
- `img/lop-an-ngu-card.jpg` — Cảnh lớp ăn ngủ BBK (ngang 16:10)
- `img/lop-theo-gio-card.jpg` — Cảnh lớp theo giờ Chu Văn An (ngang 16:10)

### Authority (1 ảnh)
- `img/authority-hlv.jpg` — Chân dung HLV chính / huy chương / bằng khen (dọc 4:5)

### Gallery Mosaic (7 ảnh)
- `img/gallery-01.jpg` — Tập thể lực buổi sáng (lớn — ngang 16:9)
- `img/gallery-02.jpg` — Đòn thế Vovinam (ngang 3:2)
- `img/gallery-03.jpg` — Thi đấu / biểu diễn (vuông)
- `img/gallery-04.jpg` — Chào sân / lễ nghĩa (vuông)
- `img/gallery-05.jpg` — Thầy kèm từng em (vuông)
- `img/gallery-06.jpg` — Các con cùng cười (ngang 3:2)
- `img/gallery-07.jpg` — Trao đai / lên đẳng (ngang 3:2)

### Marquee Photo Strip (6 ảnh — auto loop)
- `img/marquee-01.jpg` — Khởi động sáng (ngang)
- `img/marquee-02.jpg` — Tập tấn (ngang)
- `img/marquee-03.jpg` — Bữa cơm võ đường (ngang)
- `img/marquee-04.jpg` — Đá vòng cầu (ngang)
- `img/marquee-05.jpg` — Tự vệ đôi (ngang)
- `img/marquee-06.jpg` — Sinh hoạt nhóm (ngang)

### Stories — Polaroid (3 ảnh)
- `img/story-01.jpg` — Bé sau khoá hè (dọc 4:5)
- `img/story-02.jpg` — Bé dạn dĩ hơn (dọc 4:5)
- `img/story-03.jpg` — Bé khoẻ hẳn (dọc 4:5)

### Testimonial Avatars (3 ảnh)
- `img/avatar-01.jpg` — Avatar phụ huynh 1 (vuông, nhỏ)
- `img/avatar-02.jpg` — Avatar phụ huynh 2
- `img/avatar-03.jpg` — Avatar phụ huynh 3

### Lên đai sau 3 tháng (5 ảnh carousel)
- `img/dai-01-trao-dai.jpg` — Lễ trao đai (dọc 4:5)
- `img/dai-02-chao-thay.jpg` — Chào thầy nhận đai (dọc 4:5)
- `img/dai-03-be-cuoi.jpg` — Bé hãnh diện với đai mới (dọc 4:5)
- `img/dai-04-doi-hinh.jpg` — Đội hình thi đai (dọc 4:5)
- `img/dai-05-bo-me.jpg` — Bố mẹ đến dự lễ trao đai (dọc 4:5)

---

## 📄 Trang `ve-bo-mon.html` (Về Bộ môn · 6 cụm ảnh)

### Hero (3 ảnh)
- `img/vbm-hero-doi-tuyen.jpg` — Đội tuyển Vovinam Lạng Sơn (dọc 4:5)
- `img/vbm-hero-huy-chuong.jpg` — Huy chương / bằng khen (vuông)
- `img/vbm-hero-co-doan.jpg` — Cờ đoàn Vovinam (vuông)

### Cụm 1 — Lớp học siêu lớn (5 ảnh carousel ngang 16:10)
- `img/vbm-lop-01.jpg` — Toàn cảnh lớp tập đông võ sinh
- `img/vbm-lop-02.jpg` — Đội hình khởi động đầu buổi
- `img/vbm-lop-03.jpg` — Tập đòn thế đồng loạt
- `img/vbm-lop-04.jpg` — Sân tập rộng, không gian võ đường
- `img/vbm-lop-05.jpg` — Lễ chào sàn đầu buổi tập

### Cụm 2 — Ảnh tập thể (7 ảnh mosaic)
- `img/vbm-tt-01.jpg` — Tập thể cả Bộ môn (lớn ngang)
- `img/vbm-tt-02.jpg` — Đội tập thể lớp lớn
- `img/vbm-tt-03.jpg` — Đội tập thể lớp nhỏ (vuông)
- `img/vbm-tt-04.jpg` — Đội thi đấu (vuông)
- `img/vbm-tt-05.jpg` — Đội biểu diễn (vuông)
- `img/vbm-tt-06.jpg` — Cả lớp sau khoá tập (ngang)
- `img/vbm-tt-07.jpg` — Tập thể lễ trao đai (ngang)

### Cụm 3 — Huấn luyện viên (3 polaroid + 7 mosaic = 10 ảnh)
**Polaroid chân dung (dọc 4:5):**
- `img/vbm-hlv-01.jpg` — Thầy chính / Trưởng Bộ môn
- `img/vbm-hlv-02.jpg` — HLV phụ trách lớp nhỏ
- `img/vbm-hlv-03.jpg` — HLV phụ trách thi đấu

**Mosaic thầy trên sàn:**
- `img/vbm-hlv-04.jpg` — Thầy kèm từng em (lớn ngang)
- `img/vbm-hlv-05.jpg` — Thầy chỉ đạo đòn thế
- `img/vbm-hlv-06.jpg` — Thầy biểu diễn mẫu (vuông)
- `img/vbm-hlv-07.jpg` — Thầy chấm thi đai (vuông)
- `img/vbm-hlv-08.jpg` — Thầy giao lưu với HLV tỉnh khác (vuông)
- `img/vbm-hlv-09.jpg` — Tập thể HLV Bộ môn (ngang)
- `img/vbm-hlv-10.jpg` — Thầy và võ sinh cũ (ngang)

### Cụm 4 — Biểu diễn (7 ảnh mosaic)
- `img/vbm-bd-01.jpg` — Biểu diễn lễ hội tỉnh (lớn ngang)
- `img/vbm-bd-02.jpg` — Quyền pháp đôi trên sân khấu
- `img/vbm-bd-03.jpg` — Biểu diễn tự vệ (vuông)
- `img/vbm-bd-04.jpg` — Đòn bay đặc trưng (vuông)
- `img/vbm-bd-05.jpg` — Đội biểu diễn các bé (vuông)
- `img/vbm-bd-06.jpg` — Khán giả vỗ tay (ngang)
- `img/vbm-bd-07.jpg` — Cờ Vovinam tung bay (ngang)

### Cụm 5 — Các giải đấu đáng nhớ (7 ảnh carousel ngang 16:10)
- `img/vbm-gd-01.jpg` — Lễ khai mạc giải nội bộ
- `img/vbm-gd-02.jpg` — Trận đối kháng đầy kịch tính
- `img/vbm-gd-03.jpg` — Phần thi quyền pháp
- `img/vbm-gd-04.jpg` — Đại diện Lạng Sơn tại giải cấp tỉnh
- `img/vbm-gd-05.jpg` — Võ sinh đi thi đấu cấp toàn quốc
- `img/vbm-gd-06.jpg` — Trao huy chương cho các con
- `img/vbm-gd-07.jpg` — Tổng kết, vui chung cả lớp

### Cụm 6 — Thành tích (7 ảnh mosaic, gồm bằng khen / huy chương / cup)
- `img/vbm-tt-tic-01.jpg` — Bằng khen Liên đoàn (lớn ngang)
- `img/vbm-tt-tic-02.jpg` — Huy chương vàng
- `img/vbm-tt-tic-03.jpg` — Huy chương bạc (vuông)
- `img/vbm-tt-tic-04.jpg` — Huy chương đồng (vuông)
- `img/vbm-tt-tic-05.jpg` — Cup giải đấu (vuông)
- `img/vbm-tt-tic-06.jpg` — Bằng công nhận đơn vị Liên đoàn (ngang)
- `img/vbm-tt-tic-07.jpg` — Đội tuyển nhận giải tập thể (ngang)

---

## 📄 Trang `lop-an-ngu.html` (Lớp nội trú tại BBK)

### Hero (3 ảnh)
- `img/an-ngu-hero-doi-hinh.jpg` — Đội hình lớp ăn ngủ (dọc 4:5)
- `img/an-ngu-hero-bua-com.jpg` — Bữa cơm võ đường (vuông)
- `img/an-ngu-hero-bbk.jpg` — Cảnh phim trường BBK (vuông)

### Gallery Mosaic (7 ảnh)
- `img/an-ngu-gallery-01.jpg` — Tập buổi sáng (lớn — ngang 16:9)
- `img/an-ngu-gallery-02.jpg` — Bữa cơm tập thể (ngang 3:2)
- `img/an-ngu-gallery-03.jpg` — Đòn thế Vovinam (vuông)
- `img/an-ngu-gallery-04.jpg` — Sinh hoạt nhóm tối (vuông)
- `img/an-ngu-gallery-05.jpg` — Chào thầy, học lễ (vuông)
- `img/an-ngu-gallery-06.jpg` — Các con cùng cười (ngang 3:2)
- `img/an-ngu-gallery-07.jpg` — Lễ chào sàn (ngang 3:2)

### Authority (1 ảnh)
- `img/an-ngu-authority-thay.jpg` — Thầy hướng dẫn võ sinh (dọc 4:5)

### Kỹ năng sống & Tự lập Carousel (7 ảnh slider 16:10 ngang)
- `img/an-ngu-kns-01.jpg` — Tự gấp chăn, xếp đồ
- `img/an-ngu-kns-02.jpg` — Học phụ bếp, dọn bàn
- `img/an-ngu-kns-03.jpg` — Sinh hoạt nhóm, chia sẻ cảm xúc
- `img/an-ngu-kns-04.jpg` — Hoạt động ngoài trời, làm việc nhóm
- `img/an-ngu-kns-05.jpg` — Học kỹ năng tự vệ
- `img/an-ngu-kns-06.jpg` — Trò chơi đội, kéo co
- `img/an-ngu-kns-07.jpg` — Tự dọn dẹp khu ở

### Day in Life Carousel (6 ảnh slider, có nút trái/phải để xem thêm)
- `img/an-ngu-day-binh-minh.jpg` — Tập trung ra sân 5h30 (dọc 4:5)
- `img/an-ngu-day-an-sang.jpg` — Bữa sáng cùng đội 7h30 (dọc 4:5)
- `img/an-ngu-day-tap-chieu.jpg` — Tập võ buổi chiều 14h (dọc 4:5)
- `img/an-ngu-day-choi-doi.jpg` — Hoạt động đội 16h (dọc 4:5)
- `img/an-ngu-day-sinh-hoat.jpg` — Sinh hoạt nhóm tối 19h30 (dọc 4:5)
- `img/an-ngu-day-di-ngu.jpg` — Đi ngủ 21h (dọc 4:5)

### Safety Cards (3 ảnh)
- `img/an-ngu-safe-zalo.jpg` — Cập nhật Zalo phụ huynh / điện thoại (ngang 16:10)
- `img/an-ngu-safe-yte.jpg` — Chăm sóc y tế / bữa ăn cân bằng (ngang 16:10)
- `img/an-ngu-safe-lang-nghe.jpg` — Người lớn lắng nghe con (ngang 16:10)

### Stories — Polaroid (3 ảnh)
- `img/an-ngu-story-01.jpg` — Bé khoẻ hẳn (dọc 4:5)
- `img/an-ngu-story-02.jpg` — Bé tự lập (dọc 4:5)
- `img/an-ngu-story-03.jpg` — Bé lễ phép (dọc 4:5)

### Testimonial Avatars (3 ảnh)
- `img/an-ngu-avatar-01.jpg`, `img/an-ngu-avatar-02.jpg`, `img/an-ngu-avatar-03.jpg`

---

## 📄 Trang `lop-theo-gio.html` (Lớp theo giờ Chu Văn An)

### Hero (3 ảnh)
- `img/theo-gio-hero-tap-chieu.jpg` — Lớp tập chiều tại CVA (dọc 4:5)
- `img/theo-gio-hero-doi-hinh.jpg` — Đội hình lớp theo giờ (vuông)
- `img/theo-gio-hero-truong-cva.jpg` — Cổng / sân trường Chu Văn An (vuông)

### Schedule (1 ảnh)
- `img/theo-gio-lich-hoc.jpg` — Lớp đang tập tại CVA (dọc 4:5)

### 2 Cơ sở (2 ảnh)
- `img/theo-gio-co-so-cva.jpg` — Trường THPT Chuyên Chu Văn An (ngang 16:10)
- `img/theo-gio-co-so-dtnt.jpg` — Trường THPT Dân tộc Nội trú Tỉnh (ngang 16:10)

### Authority (1 ảnh)
- `img/theo-gio-authority-thay.jpg` — HLV hướng dẫn từng em (dọc 4:5)

### Gallery Mosaic (7 ảnh)
- `img/theo-gio-gallery-01.jpg` — Khởi động đầu buổi (lớn — ngang)
- `img/theo-gio-gallery-02.jpg` — Đòn thế cơ bản (ngang)
- `img/theo-gio-gallery-03.jpg` — Tập tấn (vuông)
- `img/theo-gio-gallery-04.jpg` — Chia tổ luyện (vuông)
- `img/theo-gio-gallery-05.jpg` — Đeo đai mới (vuông)
- `img/theo-gio-gallery-06.jpg` — Chào thầy ra về (ngang)
- `img/theo-gio-gallery-07.jpg` — Các con cùng cười (ngang)

### Marquee Photo Strip (6 ảnh)
- `img/theo-gio-marquee-01.jpg` — Đá vòng cầu
- `img/theo-gio-marquee-02.jpg` — Tự vệ cơ bản
- `img/theo-gio-marquee-03.jpg` — Quyền pháp
- `img/theo-gio-marquee-04.jpg` — Đối luyện đôi
- `img/theo-gio-marquee-05.jpg` — Cuối buổi
- `img/theo-gio-marquee-06.jpg` — Đội hình lớp

### Stories — Polaroid (3 ảnh)
- `img/theo-gio-story-01.jpg` — Bé khoẻ hẳn (dọc 4:5)
- `img/theo-gio-story-02.jpg` — Bé tự tin (dọc 4:5)
- `img/theo-gio-story-03.jpg` — Bé đeo đai mới (dọc 4:5)

### Testimonial Avatars (3 ảnh)
- `img/theo-gio-avatar-01.jpg`, `img/theo-gio-avatar-02.jpg`, `img/theo-gio-avatar-03.jpg`

---

## 📊 Tổng số ảnh cần

| Page | Số ảnh |
|---|---|
| `index.html` | 25 ảnh (3 hero + 2 hub + 1 authority + 7 gallery + 6 marquee + 3 stories + 3 avatar) |
| `lop-an-ngu.html` | 21 ảnh (3 hero + 7 gallery + 1 authority + 1 day + 3 safety + 3 stories + 3 avatar) |
| `lop-theo-gio.html` | 23 ảnh (3 hero + 1 schedule + 1 authority + 7 gallery + 6 marquee + 3 stories + 3 avatar) |
| **Tổng** | **69 ảnh** |

> 💡 **Mẹo:** Một ảnh có thể dùng lại cho nhiều slot (đổi tên file thôi). Vd: ảnh thầy hướng dẫn có thể vừa làm `authority-hlv.jpg` (index) vừa làm `an-ngu-authority-thay.jpg` (lớp ăn ngủ).

> 💡 **Ưu tiên ảnh quan trọng nhất:** Nếu chưa kịp đủ 69 ảnh, ưu tiên thay:
> 1. `hero-*.jpg` (3 page × 3 ảnh = 9 ảnh) — quan trọng nhất, xuất hiện ngay đầu
> 2. `gallery-01.jpg` mỗi page (3 ảnh) — cell to nhất trong mosaic
> 3. `lop-an-ngu-card.jpg` + `lop-theo-gio-card.jpg` — hub card ở trang chủ
> Còn lại để placeholder cũng OK, web vẫn đẹp.

## ❓ Câu hỏi thường gặp

**Q: Ảnh không hiện?**
→ Check lại tên file phải khớp 100% (kể cả viết hoa/thường, dấu gạch ngang). Tên file Windows không phân biệt hoa thường nhưng web server thì có.

**Q: Ảnh hiện bị méo / cắt mất phần quan trọng?**
→ Mọi slot dùng `object-fit: cover` → ảnh sẽ tự crop. Đảm bảo chủ thể chính nằm **gần giữa khung**. Tránh để mặt người sát mép.

**Q: Em muốn dùng ảnh có aspect ratio khác?**
→ Vẫn được, ảnh sẽ tự fit theo container. Nhưng ảnh đúng tỉ lệ gợi ý sẽ đẹp nhất (không bị cắt nhiều).

**Q: File ảnh nặng quá, web tải chậm?**
→ Nén ảnh trước khi upload bằng [TinyPNG](https://tinypng.com) hoặc [Squoosh](https://squoosh.app). Mục tiêu mỗi ảnh dưới 300KB.

**Q: Em muốn dùng `.png` hoặc `.webp` thay vì `.jpg`?**
→ Được. Vd `gallery-01.png` hoặc `gallery-01.webp` — nhưng phải sửa tên trong HTML từ `.jpg` thành đuôi mới (mở file `.html` tìm và thay).
