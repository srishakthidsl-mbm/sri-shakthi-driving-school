document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? '' : 'flex';
    if (!open) {
      nav.style.position = 'absolute';
      nav.style.top = '68px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.padding = '18px 5%';
      nav.style.background = '#fff';
      nav.style.flexDirection = 'column';
      nav.style.boxShadow = '0 12px 25px rgba(0,0,0,.08)';
    }
  });
}
