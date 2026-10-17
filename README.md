# GitHub Actions + GitHub Pages Lab

เว็บไซต์แนะนำตัวแบบ Static สำหรับแลป Web Development ใช้ HTML, CSS และ JavaScript โดย GitHub Actions จะเผยแพร่เว็บไซต์ไป GitHub Pages ทุกครั้งที่ push เข้า `main` สำเร็จ

## ปรับข้อมูลก่อนส่งงาน

1. แก้ `[ใส่ชื่อ–นามสกุล]` และ `[ใส่รหัสนิสิต]` ใน `index.html`
2. แก้ลิงก์ `#githubLink` ให้เป็น GitHub ของตนเอง และปรับข้อความติดต่อ
3. ปรับเนื้อหา About Me และ Skills ให้ตรงกับตนเอง
4. เปิด `index.html` ในเบราว์เซอร์ ตรวจปุ่ม **Say Hello**, ปุ่มสลับธีม และหน้าจอมือถือ

## นำขึ้น GitHub Pages

1. สร้าง GitHub repository แบบ Public ชื่อ `webdev-actions-lab` โดยให้เป็น repository ว่าง
2. ในโฟลเดอร์นี้รันคำสั่ง:

   ```powershell
   git init
   git branch -M main
   git add .
   git commit -m "Build portfolio website and Pages workflow"
   git remote add origin https://github.com/YOUR_USERNAME/webdev-actions-lab.git
   git push -u origin main
   ```

3. เปิด **Settings → Pages → Build and deployment → Source** แล้วเลือก **GitHub Actions**
4. ดูแท็บ **Actions** ให้ workflow `Deploy Static Website` สำเร็จ
5. เปิด `https://YOUR_USERNAME.github.io/webdev-actions-lab/`
6. แก้หัวข้อใน `index.html` และสีปุ่มใน `style.css` แล้ว commit/push อีกครั้ง ตรวจว่าเว็บไซต์อัปเดต

ถ้าสร้าง repository พร้อม README บน GitHub ไปแล้ว ให้ clone repository นั้นก่อน แล้วคัดลอกไฟล์เหล่านี้ลงในโฟลเดอร์ที่ clone มา เพื่อไม่ให้ประวัติ Git ขัดกัน

## หลักฐานที่ต้องส่ง

- URL GitHub repository
- URL GitHub Pages
- ภาพหน้าจอแท็บ Actions ที่ deploy สำเร็จ
- ภาพหน้าจอเว็บไซต์ที่ปรับแก้แล้ว
- คำตอบคำถามท้ายแลปใน `answers.md`
