# GitHub Actions + GitHub Pages Lab

เว็บไซต์แนะนำตัวแบบ Static สำหรับแลป Web Development ใช้ HTML, CSS และ JavaScript โดย GitHub Actions จะเผยแพร่เว็บไซต์ไป GitHub Pages ทุกครั้งที่ push เข้า `main` สำเร็จ

## ปรับข้อมูลก่อนส่งงาน

1. ตรวจชื่อ–นามสกุลและรหัสนิสิตใน `index.html`
2. ปรับเนื้อหา About Me และ Skills ให้ตรงกับตนเองหากต้องการ
3. เปิด `index.html` ในเบราว์เซอร์ ตรวจปุ่ม **Say Hello**, ปุ่มสลับธีม และหน้าจอมือถือ

## นำขึ้น GitHub Pages

1. ใช้ GitHub repository แบบ Public ที่ `https://github.com/CarToon890/Lab-WebDev-Actions` โปรเจกต์ในเครื่องนี้เริ่ม Git และมี commit แล้ว
2. หลังตรวจเว็บ ให้เชื่อมกับ GitHub และ push:

   ```powershell
   git remote add origin https://github.com/CarToon890/Lab-WebDev-Actions.git
   git push -u origin main
   ```

3. เปิด **Settings → Pages → Build and deployment → Source** แล้วเลือก **GitHub Actions**
4. ดูแท็บ **Actions** ให้ workflow `Deploy Static Website` สำเร็จ
5. เปิด `https://CarToon890.github.io/Lab-WebDev-Actions/`
6. แก้หัวข้อใน `index.html` และสีปุ่มใน `style.css` แล้ว commit/push อีกครั้ง ตรวจว่าเว็บไซต์อัปเดต

ถ้าสร้าง repository พร้อม README บน GitHub ไปแล้ว ให้ clone repository นั้นก่อน แล้วคัดลอกไฟล์เหล่านี้ลงในโฟลเดอร์ที่ clone มา เพื่อไม่ให้ประวัติ Git ขัดกัน

## หลักฐานที่ต้องส่ง

- URL GitHub repository
- URL GitHub Pages
- ภาพหน้าจอแท็บ Actions ที่ deploy สำเร็จ
- ภาพหน้าจอเว็บไซต์ที่ปรับแก้แล้ว
- คำตอบคำถามท้ายแลปใน `answers.md`
