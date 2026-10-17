# GitHub Actions and GitHub Pages Lab

สุรชัช ศาลาน้อย — รหัสนิสิต 67160378 · รายวิชา 89033167 Web Application Development

- Repository: [https://github.com/CarToon890/Lab-WebDev-Actions](https://github.com/CarToon890/Lab-WebDev-Actions)
- Website: [https://cartoon890.github.io/Lab-WebDev-Actions/](https://cartoon890.github.io/Lab-WebDev-Actions/)
- Workflow: [https://github.com/CarToon890/Lab-WebDev-Actions/actions](https://github.com/CarToon890/Lab-WebDev-Actions/actions)

เว็บไซต์ Static แนะนำตัวประกอบด้วย About Me, Skills, Projects และ Contact รองรับมือถือ มีปุ่ม Say Hello และปุ่มสลับโหมดมืด/สว่าง สร้างด้วย HTML, CSS และ JavaScript

## การทำงานของ Workflow

เมื่อ push โค้ดไปที่ `main` ระบบจะเริ่ม Workflow โดยอัตโนมัติ หรือกด **Run workflow** เพื่อเริ่มเองก็ได้ Job `deploy` จะดึงโค้ด ตรวจสอบว่ามี `index.html`, `style.css` และ `script.js` จากนั้นตั้งค่า Pages อัปโหลดไฟล์เป็น Artifact และเผยแพร่เว็บผ่าน GitHub Pages หากขั้นตอนตรวจสอบไม่ผ่านจะหยุดก่อนเผยแพร่

## โปรเจกต์ที่ส่งคู่กัน

- [Hello Python — Scoreboard](https://github.com/CarToon890/hello-python)
- [เว็บไซต์รายงานคะแนนตัวอย่าง](https://cartoon890.github.io/hello-python/)

คำตอบคำถามท้ายแลปอยู่ใน [answers.md](answers.md)
