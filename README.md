# Landing Pages v2 · Editorial Magazine

> Bản rebuild của 3 landing page với style **editorial magazine** — nhiều khung ảnh lệch nhau, polaroid stack, sticker overlay, animation phong phú.

## 📂 Files trong folder này

```
landing-pages-v2/
├── index.html                ← Trang chủ
├── lop-an-ngu.html           ← Lớp ăn ngủ BBK (flagship)
├── lop-theo-gio.html         ← Lớp theo giờ Chu Văn An
├── styles.css                ← Toàn bộ design system + motion
├── scripts.js                ← Scroll reveal + counter + magnetic hover + form thanks
├── IMAGE-SLOTS.md            ← ⭐ HƯỚNG DẪN CHỊ THAY ẢNH (đọc cái này trước)
├── README.md                 ← File này
└── img/                      ← Folder ảnh (đặt ảnh vào đây)
    ├── logo-vovinam-langson.jpg    (đã có)
    ├── logo-mon-phai.webp          (đã có)
    └── placeholder.svg             (placeholder mặc định khi chưa có ảnh)
```

## 🚀 Cách mở để xem

Mở file `index.html` bằng browser bất kỳ (double-click). Hoặc tốt nhất:

```bash
# Trong folder landing-pages-v2/
python -m http.server 8080
# rồi mở http://localhost:8080
```

(Mở qua HTTP server thì form, navigation, motion mới chạy mượt.)

## ✨ Khác gì so với landing v1

| Yếu tố | v1 (cũ) | v2 (mới) |
|---|---|---|
| **Số khung ảnh** | ~15 placeholder | **~69 ảnh slot** (gấp 4.5 lần) |
| **Hero** | Ảnh BG đơn + form | **3 ảnh layered** (main + side + tiny) + sticker "21 NGÀY" xoay |
| **Frame styles** | 1 kiểu (vuông) | **5 kiểu**: framed-pop, polaroid stack, mosaic broken-grid, hub-card with badge corner, safety-card với icon nổi |
| **Photo gallery** | Marquee text-only | **Mosaic 7 cell** (broken grid) + **2 marquee** (1 page có 2 chiều ngược nhau) |
| **Stickers / badges** | Không có | Sticker xoay (21 NGÀY, 2/6-15/8, 500K, LIÊN ĐOÀN…) ở mỗi hero + framed photo |
| **Testimonials** | 1 kiểu carousel scroll | **2 kiểu**: polaroid stack (washi tape + handwriting font) + tcard có avatar tròn |
| **Animations** | Ken Burns hero, marquee, hover lift, reveal-on-scroll | **+ Counter animation cho stats, magnetic hover CTA, parallax mouse cho hero photos, button shimmer, spin sticker, FAQ smooth, sticky timeline + photo, dotted background pattern, animated stripe topbar** |
| **Section heads** | Eyebrow + h2 + sub | **+ Watermark số to (01, 02…) phía sau heading như magazine** |
| **Color palette** | Đỏ + Vàng + Xanh | + thêm tone **kem (#f9f4e8)** cho editorial paper feel |
| **Fonts** | Barlow Condensed + Be Vietnam Pro | **+ Caveat (handwriting)** cho polaroid captions |

## 🎯 Step-by-step để chị go-live

1. **Đọc `IMAGE-SLOTS.md`** — danh sách 69 ảnh cần
2. **Đặt ảnh vào folder `img/`** với đúng tên file (mỗi slot 1 file)
3. **Refresh trang** — ảnh sẽ tự hiện
4. **Replace Google Form IDs** trong 3 file HTML:
   - Tìm `REPLACE_FORM_ID` → thay bằng form ID thật
   - Tìm `entry.REPLACE_TEN/SDT/TUOI/LOP/NGUON` → thay entry IDs thật
5. **Replace các phần `.fill`** (vàng) — hiện đang ghi `[Tên]`, `[địa chỉ]`, `(bố mẹ xác nhận)` — chị điền nội dung thật
6. **Test trên mobile** — mọi page đều mobile-first, đã có sticky call bar dưới cùng

## ⚠️ Không xoá folder cũ

Folder `landing-pages/` (v1) vẫn còn nguyên — em không động vào. Khi chị duyệt v2 OK, có thể tự xoá v1 hoặc giữ làm backup.

## 🧰 Notes kỹ thuật

- **CSS**: ~860 dòng, tất cả trong `styles.css`. Mọi component đều có biến CSS custom property → dễ rebrand sau này.
- **JS**: ~110 dòng vanilla, không dependency. Có `prefers-reduced-motion` cho user tắt animation.
- **Accessibility**: Semantic HTML (`<section>`, `<article>`, `<nav>`), alt text mọi ảnh, focus state cho form.
- **Performance**: Font preconnect, lazy image fallback, 1 file CSS + 1 file JS (không bundle phức tạp).
- **No build step**: Mở file HTML là chạy. Không cần npm/build.

## 💡 Khi cần đổi gì sau này

| Việc | File cần sửa |
|---|---|
| Đổi màu thương hiệu | `styles.css` — tìm `:root` ở đầu file, đổi `--vang`, `--xanh`, `--do` |
| Đổi số điện thoại | Tìm `0962382233` trong cả 3 HTML, replace all |
| Đổi text hero | Sửa trong từng file `.html` (section `.hero`) |
| Thêm 1 ảnh vào gallery | Thêm 1 `<div class="cell c-X">...</div>` trong section `.mosaic` |
| Thêm section mới | Copy 1 section đã có trong HTML, sửa nội dung |
| Tắt animation | Thêm `?reduce-motion` không có sẵn — sẽ phải sửa JS, hoặc bật "Reduce motion" trong OS |
