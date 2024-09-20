
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.header__nav');
    const button = document.querySelector('.header__icon-btn');
    const navLinks = document.querySelectorAll('.nav__a');
  
    button.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  
    nav.addEventListener('click', (event) => {
      if (event.target === nav) {
        nav.classList.remove('active');
      }
    });
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  });
  


  const floatingBtn = document.querySelector('.floating-btn');
  const sidebar = document.querySelector('.sidebar-bar');
  
  floatingBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });