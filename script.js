const helloButton = document.querySelector('#helloBtn');
const status = document.querySelector('#status');
const themeButton = document.querySelector('#themeToggle');
const themeIcon = themeButton.querySelector('.theme-icon');
const themeLabel = themeButton.querySelector('.theme-label');

document.querySelector('#year').textContent = new Date().getFullYear();

helloButton.addEventListener('click', () => {
  status.textContent = 'สวัสดีครับ! ยินดีที่ได้รู้จัก 👋 ลองแวะดูผลงานทั้งสองชิ้นด้านล่างได้เลย';
});

function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.setAttribute('aria-label', isDark ? 'เปลี่ยนเป็นธีมสว่าง' : 'เปลี่ยนเป็นธีมมืด');
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeLabel.textContent = isDark ? 'ธีมสว่าง' : 'ธีมมืด';
}

setTheme(localStorage.getItem('theme') === 'dark');

themeButton.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark');
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
