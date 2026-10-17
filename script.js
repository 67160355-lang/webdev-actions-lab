// ปุ่ม Say Hello เดิม
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ฟังก์ชันสลับ Dark Mode / Light Mode
document.querySelector('#themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});